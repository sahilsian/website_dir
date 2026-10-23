import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { InquiryCta } from "@/components/Blocks";
import Catalogue from "@/components/Catalogue";
import Icon from "@/components/Icon";
import { categories, getCategory, productsIn } from "@/content/products";

type Params = { category: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const cat = getCategory((await params).category);
  if (!cat) return {};
  return {
    title: `${cat.name} — Wholesale`,
    description: `${cat.description} Browse Peppy Foods ${cat.name.toLowerCase()} with pack sizes and request pricing.`,
    alternates: { canonical: `/products/${cat.slug}/` },
    openGraph: { images: [cat.image] },
  };
}

export default async function CategoryPage({ params }: { params: Promise<Params> }) {
  const cat = getCategory((await params).category);
  if (!cat) notFound();

  return (
    <>
      <section className="cat-hero">
        <img src={cat.image} alt="" className="cat-hero__img" />
        <div className="cat-hero__shade" aria-hidden="true" />
        <div className="container cat-hero__inner">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link> / <Link href="/products/">Products</Link> / <span>{cat.name}</span>
          </nav>
          <h1 className="h1">{cat.name}</h1>
          <p className="lead">{cat.description}</p>
          <p className="cat-hero__count">{productsIn(cat.slug).length} products · Pricing on request</p>
        </div>
      </section>

      <nav className="cat-switch" aria-label="Other categories">
        <div className="container cat-switch__inner">
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/products/${c.slug}/`}
              className={`tab ${c.slug === cat.slug ? "tab--active" : ""}`}
              aria-current={c.slug === cat.slug ? "page" : undefined}
            >
              <Icon name={c.icon} size={17} /> {c.short}
            </Link>
          ))}
        </div>
      </nav>

      <section className="section section--tight">
        <div className="container">
          <Catalogue lockedCategory={cat.slug} />
        </div>
      </section>
      <InquiryCta />
    </>
  );
}
