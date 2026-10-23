import Link from "next/link";
import Icon from "@/components/Icon";
import Logo from "@/components/Logo";
import { categories } from "@/content/products";
import { site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Logo light />
          <p>
            Wholesale supplier of frozen foods, dairy/cooler products, grocery staples and packaging material for
            restaurants, caterers, grocery stores and food businesses.
          </p>
          <Link href="/contact/" className="btn btn--primary btn--sm">
            Send Inquiry <Icon name="arrow" size={16} />
          </Link>
        </div>

        <div>
          <h3>Product Categories</h3>
          <ul>
            {categories.map((c) => (
              <li key={c.slug}>
                <Link href={`/products/${c.slug}/`}>{c.name}</Link>
              </li>
            ))}
            <li>
              <Link href="/products/">Full Catalogue</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3>Company</h3>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about/">About Us</Link>
            </li>
            <li>
              <Link href="/contact/">Contact / Inquiry</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3>Contact</h3>
          <ul className="footer__contact">
            <li>
              <Icon name="call" size={17} />
              <a href={site.phoneHref}>{site.phone}</a>
            </li>
            <li>
              <Icon name="mail" size={17} />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            {site.whatsapp && (
              <li>
                <Icon name="whatsapp" size={17} />
                <a href={site.whatsapp} target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </li>
            )}
            <li>
              <Icon name="pin" size={17} />
              <span>{site.address}</span>
            </li>
          </ul>
        </div>

        <div>
          <h3>Business Hours</h3>
          <ul>
            {site.hours.map((h) => (
              <li key={h.days} className="footer__hours">
                <span>{h.days}</span>
                <span>{h.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container footer__base">
        <span>
          © {new Date().getFullYear()} {site.legalName}. All rights reserved.
        </span>
        <span>Wholesale &amp; bulk orders · Pricing on request</span>
      </div>
    </footer>
  );
}
