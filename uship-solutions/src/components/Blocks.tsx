import Link from "next/link";
import Icon from "@/components/Icon";
import { carriers, site } from "@/content/site";

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

export function SectionHead({ kicker, title, intro, center }: { kicker: string; title: string; intro?: string; center?: boolean }) {
  return (
    <div className={`section-head ${center ? "section-head--center" : ""}`} data-reveal>
      <p className="kicker">{kicker}</p>
      <h2 className="h2">{title}</h2>
      {intro && <p className="lead">{intro}</p>}
    </div>
  );
}

export function CarrierBadge({ name, color, ink }: { name: string; color: string; ink: string }) {
  return (
    <span className="carrier-badge" style={{ background: color, color: ink }}>
      {name}
    </span>
  );
}

export function CarrierStrip() {
  return (
    <section className="carrier-strip" aria-label="Courier partners">
      <div className="container carrier-strip__inner">
        <p>Shipping with trusted courier partners</p>
        <ul>
          {carriers.map((c) => (
            <li key={c.name}>
              <CarrierBadge {...c} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function CtaStrip({
  title = "Ready to ship? Get your quote started today.",
  text = "Request a quote or contact the team — we'll recommend the right option for your shipment.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="cta-strip">
      <div className="container cta-strip__inner" data-reveal>
        <div>
          <h2 className="h2">{title}</h2>
          <p>{text}</p>
        </div>
        <div className="btn-row">
          <Link href="/quote/" className="btn btn--white">
            Get a Quote <Icon name="arrow" size={18} />
          </Link>
          <a href={site.phoneHref} className="btn btn--outline-white">
            <Icon name="call" size={18} /> Call {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
