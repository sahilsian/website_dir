import { footer, site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__cta">
          <p className="footer__big">
            Have a project in mind? <a href="/#contact">Let&rsquo;s talk.</a>
          </p>
        </div>

        <div className="footer__grid">
          <div className="footer__brand">
            <a href="/#home" className="logo">
              <span className="logo__mark" aria-hidden="true">A</span>
              <span>
                ARCH<span className="logo__thin">STUDIOS</span>
              </span>
            </a>
            <p>{footer.blurb}</p>
            <ul className="socials">
              {site.socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {footer.columns.map((col) => (
            <div key={col.title} className="footer__col">
              <h3>{col.title}</h3>
              <ul>
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href}>{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="footer__col">
            <h3>Contact</h3>
            <ul>
              <li>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li>
                <a href={site.phoneHref}>{site.phone}</a>
              </li>
              <li>{site.location}</li>
              <li>{site.hours}</li>
            </ul>
          </div>
        </div>

        <div className="footer__base">
          <span>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </span>
          <a href="/#home">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
