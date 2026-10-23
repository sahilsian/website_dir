import type { Metadata } from "next";
import { CarrierBadge, CtaStrip, PageHero } from "@/components/Blocks";
import Icon from "@/components/Icon";
import { carriers, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Tracking",
  description: "Track your U-Ship Solutions shipment with DHL, FedEx, Purolator or UPS, or contact carrier support.",
  alternates: { canonical: "/tracking/" },
};

export default function TrackingPage() {
  return (
    <>
      <PageHero
        kicker="Tracking"
        title="Track your shipment"
        intro="Select your carrier below to track your package with your tracking number, or call the carrier's support line for help."
      />

      <section className="section section--tight">
        <div className="container">
          <div className="carrier-grid">
            {carriers.map((c) => (
              <article key={c.name} className="carrier-card" data-reveal>
                <CarrierBadge {...c} />
                <h2 className="h4">{c.name} Tracking</h2>
                <p className="muted">Track your {c.name} shipment online using the tracking number on your receipt.</p>
                <a href={c.trackUrl} target="_blank" rel="noopener noreferrer" className="btn btn--primary btn--block">
                  Track with {c.name} <Icon name="external" size={16} />
                </a>
                <a href={`tel:${c.phone.replace(/[^\d+]/g, "")}`} className="carrier-card__phone">
                  <Icon name="call" size={18} /> {c.phone}
                </a>
              </article>
            ))}
          </div>

          <div className="help-box" data-reveal>
            <span className="icon-chip">
              <Icon name="search" size={24} />
            </span>
            <div>
              <h2 className="h4">Can&rsquo;t find your tracking number?</h2>
              <p className="muted">Contact U-Ship Solutions and our team will help you locate your shipment.</p>
            </div>
            <div className="btn-row">
              <a href={site.phoneHref} className="btn btn--primary">
                <Icon name="call" size={18} /> Call Us
              </a>
              <a href={`mailto:${site.email}`} className="btn btn--outline">
                <Icon name="mail" size={18} /> Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <CtaStrip />
    </>
  );
}
