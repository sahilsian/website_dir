"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Icon from "@/components/Icon";
import Logo from "@/components/Logo";
import { categories } from "@/content/products";
import { nav, site } from "@/content/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : !href.includes("#") && pathname.startsWith(href.replace(/\/$/, ""));

  return (
    <header className="header">
      <div className="header__bar">
        <div className="container header__bar-inner">
          <span>Wholesale supply for restaurants, caterers, grocery stores &amp; food businesses</span>
          <a href={site.phoneHref}>
            <Icon name="call" size={14} /> {site.phone}
          </a>
        </div>
      </div>
      <div className="container header__inner">
        <Link href="/" aria-label={`${site.name} home`}>
          <Logo />
        </Link>

        <nav id="primary-nav" className={`nav ${open ? "nav--open" : ""}`} aria-label="Primary">
          {nav.map((item) =>
            item.label === "Categories" ? (
              <div key={item.href} className="nav__group">
                <Link href={item.href} className="nav__link">
                  {item.label} <span className="nav__caret" aria-hidden="true">▾</span>
                </Link>
                <div className="nav__menu">
                  {categories.map((c) => (
                    <Link key={c.slug} href={`/products/${c.slug}/`} className="nav__menu-item">
                      <Icon name={c.icon} size={18} /> {c.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`nav__link ${isActive(item.href) ? "nav__link--active" : ""}`}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ),
          )}
          <Link href="/contact/" className="btn btn--primary nav__cta">
            Send Inquiry
          </Link>
        </nav>

        <Link href="/contact/" className="btn btn--primary btn--sm header__mobile-cta">
          Inquiry
        </Link>
        <button
          className="menu-btn"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? "close" : "menu"} size={24} />
        </button>
      </div>
    </header>
  );
}
