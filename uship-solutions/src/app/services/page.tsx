import type { Metadata } from "next";
import Link from "next/link";
import { CtaStrip, PageHero } from "@/components/Blocks";
import Icon from "@/components/Icon";
import { services } from "@/content/site";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Domestic & international shipping, express document delivery, import/export, customs clearance, port to port freight forwarding, door to door delivery, inter-province moving and driver rental.",
  alternates: { canonical: "/services/" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        kicker="Our Services"
        title="Complete shipping & logistics services"
        intro="Whatever you need to move — a document, a parcel, a container or your household — U-Ship Solutions has a service built for it."
      >
        <nav className="chip-nav" aria-label="Jump to a service">
          {services.map((s) => (
            <a key={s.slug} href={`#${s.slug}`} className="chip">
              {s.title}
            </a>
          ))}
        </nav>
      </PageHero>

      <section className="section">
        <div className="container svc-list">
          {services.map((s, i) => (
            <article key={s.slug} id={s.slug} className={`svc-row ${i % 2 ? "svc-row--flip" : ""}`} data-reveal>
              <div className="svc-row__media">
                <img src={s.image} alt={s.title} loading="lazy" decoding="async" />
                <span className="svc-row__num">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <div className="svc-row__body">
                <span className="icon-chip">
                  <Icon name={s.icon} size={24} />
                </span>
                <h2 className="h3">{s.title}</h2>
                {s.body.map((p) => (
                  <p key={p} className="body">
                    {p}
                  </p>
                ))}
                <ul className="ticks">
                  {s.points.map((p) => (
                    <li key={p}>
                      <Icon name="check" size={18} /> {p}
                    </li>
                  ))}
                </ul>
                <div className="btn-row">
                  <Link href="/quote/" className="btn btn--primary">
                    Get a Quote <Icon name="arrow" size={18} />
                  </Link>
                  <Link href="/contact/" className="btn btn--outline">
                    Ask a Question
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaStrip title="Not sure which service fits?" text="Tell us what you're shipping and where — we'll recommend the right solution." />
    </>
  );
}
