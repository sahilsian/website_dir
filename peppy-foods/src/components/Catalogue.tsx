"use client";

import { useEffect, useMemo, useState } from "react";
import Icon from "@/components/Icon";
import ProductCard, { ProductTable } from "@/components/ProductCard";
import { categories, products, type CategorySlug, type Product } from "@/content/products";

type View = "grid" | "table";

/**
 * Filterable product catalogue.
 * `lockedCategory` renders a single category (used on category pages);
 * otherwise visitors can switch categories with tabs (also via ?category=slug).
 */
export default function Catalogue({ lockedCategory }: { lockedCategory?: CategorySlug }) {
  const [active, setActive] = useState<CategorySlug | "all">(lockedCategory ?? "all");
  const [query, setQuery] = useState("");
  const [view, setView] = useState<View>("grid");

  useEffect(() => {
    if (lockedCategory) return;
    const c = new URLSearchParams(window.location.search).get("category");
    if (c && categories.some((x) => x.slug === c)) setActive(c as CategorySlug);
  }, [lockedCategory]);

  function choose(slug: CategorySlug | "all") {
    setActive(slug);
    const url = new URL(window.location.href);
    if (slug === "all") url.searchParams.delete("category");
    else url.searchParams.set("category", slug);
    window.history.replaceState(null, "", url);
  }

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter(
      (p) =>
        (active === "all" || p.category === active) &&
        (!q || `${p.productName} ${p.subcategory ?? ""} ${p.packSize}`.toLowerCase().includes(q)),
    );
  }, [active, query]);

  const groups = (active === "all" ? categories : categories.filter((c) => c.slug === active))
    .map((c) => ({ cat: c, items: filtered.filter((p) => p.category === c.slug) }))
    .filter((g) => g.items.length > 0);

  return (
    <div className="catalogue">
      <div className="toolbar">
        {!lockedCategory && (
          <div className="tabs" role="tablist" aria-label="Product categories">
            <Tab label="All Products" count={products.length} active={active === "all"} onClick={() => choose("all")} />
            {categories.map((c) => (
              <Tab
                key={c.slug}
                label={c.short}
                icon={c.icon}
                count={products.filter((p) => p.category === c.slug).length}
                active={active === c.slug}
                onClick={() => choose(c.slug)}
              />
            ))}
          </div>
        )}
        <div className="toolbar__row">
          <label className="search">
            <Icon name="search" size={18} />
            <span className="sr-only">Search products</span>
            <input
              type="search"
              placeholder="Search products, e.g. samosa, dal, cups…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </label>
          <div className="view-toggle" role="group" aria-label="View">
            <button className={view === "grid" ? "is-on" : ""} onClick={() => setView("grid")} aria-pressed={view === "grid"}>
              Cards
            </button>
            <button className={view === "table" ? "is-on" : ""} onClick={() => setView("table")} aria-pressed={view === "table"}>
              Table
            </button>
          </div>
        </div>
        <p className="toolbar__count" aria-live="polite">
          Showing {filtered.length} product{filtered.length === 1 ? "" : "s"} · Prices available on request
        </p>
      </div>

      {groups.length === 0 && (
        <div className="empty">
          <p>No products match &ldquo;{query}&rdquo;.</p>
          <button className="btn btn--soft btn--sm" onClick={() => setQuery("")}>
            Clear search
          </button>
        </div>
      )}

      {groups.map(({ cat, items }) => (
        <section key={cat.slug} className="cat-group" aria-labelledby={`grp-${cat.slug}`}>
          {!lockedCategory && (
            <header className="cat-group__head">
              <span className="cat-group__icon" style={{ background: cat.tint }}>
                <Icon name={cat.icon} size={22} />
              </span>
              <h2 id={`grp-${cat.slug}`}>{cat.name}</h2>
              <span className="cat-group__count">{items.length} items</span>
            </header>
          )}
          {lockedCategory && <h2 id={`grp-${cat.slug}`} className="sr-only">{cat.name}</h2>}
          <Results items={items} view={view} />
        </section>
      ))}
    </div>
  );
}

function Results({ items, view }: { items: Product[]; view: View }) {
  if (view === "table") return <ProductTable items={items} />;
  return (
    <div className="product-grid">
      {items.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}

function Tab({
  label,
  count,
  icon,
  active,
  onClick,
}: {
  label: string;
  count: number;
  icon?: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button role="tab" aria-selected={active} className={`tab ${active ? "tab--active" : ""}`} onClick={onClick}>
      {icon && <Icon name={icon} size={17} />}
      {label}
      <span className="tab__count">{count}</span>
    </button>
  );
}
