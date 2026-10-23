import Link from "next/link";
import Icon from "@/components/Icon";
import { categories, productsIn } from "@/content/products";
import { site } from "@/content/site";

export function PageHero({ kicker, title, intro, children }: { kicker: string; title: string; intro?: string; children?: React.ReactNode }) {
  return (
    <section className="page-hero">
      <div className="container">
        <p className="kicker">{kicker}</p>
        <h1 className="h1">{title}</h1>
        {intro && <p className="lead">{intro}</p>}
        {children}
      </div>
    </section>
  );
}

export function CategoryGrid() {
  return (
    <div className="cat-grid">
      {categories.map((c) => (
        <Link key={c.slug} href={`/products/${c.slug}/`} className="cat-card" data-reveal>
          <div className="cat-card__img">
            <img src={c.image} alt={c.name} loading="lazy" decoding="async" />
          </div>
          <div className="cat-card__body">
            <span className="cat-card__icon" style={{ background: c.tint }}>
              <Icon name={c.icon} size={22} />
            </span>
            <h3>{c.name}</h3>
            <p>{c.description}</p>
            <span className="cat-card__foot">
              <span>{productsIn(c.slug).length} products</span>
              <span className="link-arrow">
                View range <Icon name="arrow" size={16} />
              </span>
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}

export function InquiryCta() {
  return (
    <section className="section">
      <div className="container">
        <div className="inquiry-cta" data-reveal>
          <div>
            <h2 className="h2">Need products for your business?</h2>
            <p>Ask for pricing, pack sizes, and bulk availability.</p>
          </div>
          <div className="btn-row">
            <Link href="/contact/" className="btn btn--white">
              Send Inquiry <Icon name="arrow" size={18} />
            </Link>
            <a href={site.phoneHref} className="btn btn--outline-white">
              <Icon name="call" size={18} /> Call Us
            </a>
            {site.whatsapp && (
              <a href={site.whatsapp} className="btn btn--outline-white" target="_blank" rel="noopener noreferrer">
                <Icon name="whatsapp" size={18} /> WhatsApp
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
