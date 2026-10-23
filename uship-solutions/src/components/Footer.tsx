import Link from "next/link";
import Icon from "@/components/Icon";
import Logo from "@/components/Logo";
import { nav, services, site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Logo light />
          <p>
            A Canada-based shipping company providing world-class domestic and international shipping, customs
            clearance and logistics support for businesses and individuals.
          </p>
          {site.socials.length > 0 && (
            <ul className="footer__socials">
              {site.socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div>
          <h3>Our Services</h3>
          <ul>
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/#${s.slug}`}>{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Company</h3>
          <ul>
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href}>{n.label}</Link>
              </li>
            ))}
            <li>
              <Link href="/quote/">Get a Quote</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3>Contact</h3>
          <ul className="footer__contact">
            <li>
              <Icon name="pin" size={18} />
              <a href={site.address.mapUrl} target="_blank" rel="noopener noreferrer">
                {site.address.full}
              </a>
            </li>
            <li>
              <Icon name="call" size={18} />
              <a href={site.phoneHref}>{site.phone}</a>
            </li>
            <li>
              <Icon name="mail" size={18} />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container footer__base">
        <span>
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </span>
        <span className="footer__legal">
          <Link href="/terms/">Terms and Conditions</Link>
          <Link href="/privacy/">Privacy Policy</Link>
        </span>
      </div>
    </footer>
  );
}
