import Link from "next/link";
import { CategoryGrid, InquiryCta } from "@/components/Blocks";
import Icon from "@/components/Icon";
import ProductCard from "@/components/ProductCard";
import { categories, featuredProducts, products } from "@/content/products";
import { home, trustPoints } from "@/content/site";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__copy">
            <p className="kicker">Wholesale food &amp; packaging supply</p>
            <h1 className="hero__title">{home.headline}</h1>
            <p className="hero__sub">{home.sub}</p>
            <div className="btn-row">
              <Link href="/products/" className="btn btn--primary btn--lg">
                View Product Catalogue <Icon name="arrow" size={18} />
              </Link>
              <Link href="/contact/" className="btn btn--outline btn--lg">
                Request Pricing / Contact Us
              </Link>
            </div>
            <ul className="hero__stats" aria-label="Catalogue overview">
              <li>
                <strong>{categories.length}</strong> product categories
              </li>
              <li>
                <strong>{products.length}+</strong> products listed
              </li>
              <li>
                <strong>Bulk</strong> case, bucket &amp; bag sizes
              </li>
            </ul>
          </div>

          <div className="hero__collage" aria-hidden="true">
            <img src={home.heroImage} alt="" className="hero__main" fetchPriority="high" />
            {categories.slice(0, 2).map((c, i) => (
              <div key={c.slug} className={`hero__chip hero__chip--${i + 1}`}>
                <img src={c.image.replace("w=1200", "w=300")} alt="" />
                <span>
                  <small>Category</small>
                  {c.name}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="audiences">
          <div className="container audiences__inner">
            <span>Supplying</span>
            {home.audiences.map((a) => (
              <span key={a} className="audiences__item">
                {a}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="categories" className="section">
        <div className="container">
          <div className="section-head" data-reveal>
            <p className="kicker">Shop by category</p>
            <h2 className="h2">Everything your kitchen and shelves need.</h2>
            <p className="lead">{home.categoryIntro}</p>
          </div>
          <CategoryGrid />
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-head section-head--split" data-reveal>
            <div>
              <p className="kicker">Featured products</p>
              <h2 className="h2">Popular with our business customers.</h2>
            </div>
            <Link href="/products/" className="btn btn--outline">
              Full Catalogue <Icon name="arrow" size={18} />
            </Link>
          </div>
          <div className="product-grid">
            {featuredProducts().map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container why">
          <div className="why__intro" data-reveal>
            <p className="kicker">Why choose Peppy Foods</p>
            <h2 className="h2">A supplier you can plan around.</h2>
            <p className="lead">
              From frozen appetizers to takeout packaging, we help food businesses source dependably from one place.
            </p>
            <Link href="/about/" className="btn btn--outline">
              About Peppy Foods <Icon name="arrow" size={18} />
            </Link>
          </div>
          <ul className="why__list">
            {trustPoints.map((t) => (
              <li key={t.title} className="why__item" data-reveal>
                <span className="why__icon">
                  <Icon name={t.icon} size={24} />
                </span>
                <div>
                  <h3>{t.title}</h3>
                  <p>{t.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <InquiryCta />
    </>
  );
}
