import type { Metadata } from "next";
import { CarrierBadge, PageHero } from "@/components/Blocks";
import Icon from "@/components/Icon";
import ShippingForm from "@/components/ShippingForm";
import { carriers, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Get a Quote",
  description: "Request a shipping quote from U-Ship Solutions. Complete our shipping form and our team will get back to you shortly.",
  alternates: { canonical: "/quote/" },
};

const quoteCarriers = carriers.filter((c) => c.quoteUrl);

export default function QuotePage() {
  return (
    <>
      <PageHero
        kicker="Quote / Get a Quote"
        title="Get your shipping quote"
        intro="Fill out the shipping form below and our team will prepare the best option for your shipment."
      >
        <div className="btn-row">
          <a href="#shipping-form" className="btn btn--primary btn--lg">
            <Icon name="document" size={18} /> Shipping Form
          </a>
          <a href={site.phoneHref} className="btn btn--outline btn--lg">
            <Icon name="call" size={18} /> {site.phone}
          </a>
        </div>
      </PageHero>

      <section className="section section--tight">
        <div className="container quote">
          <div id="shipping-form" className="quote__form">
            <ShippingForm />
          </div>

          <aside className="quote__aside">
            <div className="aside-card">
              <h2 className="h4">How it works</h2>
              <ol className="steps">
                <li>
                  <strong>Submit the form</strong> with your sender, recipient and package details.
                </li>
                <li>
                  <strong>We review</strong> your shipment and compare the best options.
                </li>
                <li>
                  <strong>You receive a quote</strong> by email or phone.
                </li>
              </ol>
            </div>

            {quoteCarriers.length > 0 && (
              <div className="aside-card">
                <h2 className="h4">Quick carrier quotes</h2>
                <p className="muted">Prefer to check rates directly with a carrier?</p>
                <ul className="quick-links">
                  {quoteCarriers.map((c) => (
                    <li key={c.name}>
                      <a href={c.quoteUrl} target="_blank" rel="noopener noreferrer">
                        <CarrierBadge {...c} />
                        <span>{c.name} quote</span>
                        <Icon name="external" size={16} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="aside-card aside-card--blue">
              <h2 className="h4">Need help?</h2>
              <p>Our team is happy to help you complete your request.</p>
              <a href={site.phoneHref}>
                <Icon name="call" size={18} /> {site.phone}
              </a>
              <a href={`mailto:${site.email}`}>
                <Icon name="mail" size={18} /> {site.email}
              </a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
