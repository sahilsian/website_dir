import type { Metadata } from "next";
import { PageHero } from "@/components/Blocks";
import Icon from "@/components/Icon";
import InquiryForm from "@/components/InquiryForm";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact / Bulk Order Inquiry",
  description: "Request pricing, pack sizes and bulk availability from Peppy Foods. Send an inquiry or call our team.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Contact / Inquiry"
        title="Request pricing & bulk orders"
        intro="Need pricing or bulk quantities? Contact our team for product availability and business orders."
      />
      <section className="section section--tight">
        <div className="container contact">
          <div className="contact__form">
            <h2 className="h3">Send a product inquiry</h2>
            <InquiryForm />
          </div>
          <aside className="contact__aside">
            <div className="info-card">
              <h2 className="h4">Talk to our team</h2>
              <a href={site.phoneHref} className="info-row">
                <Icon name="call" size={20} />
                <span>
                  <small>Phone</small>
                  {site.phone}
                </span>
              </a>
              <a href={`mailto:${site.email}`} className="info-row">
                <Icon name="mail" size={20} />
                <span>
                  <small>Email</small>
                  {site.email}
                </span>
              </a>
              {site.whatsapp && (
                <a href={site.whatsapp} className="info-row" target="_blank" rel="noopener noreferrer">
                  <Icon name="whatsapp" size={20} />
                  <span>
                    <small>WhatsApp</small>
                    Message us
                  </span>
                </a>
              )}
              <div className="info-row">
                <Icon name="pin" size={20} />
                <span>
                  <small>Address</small>
                  {site.address}
                </span>
              </div>
            </div>
            <div className="info-card">
              <h2 className="h4">Business hours</h2>
              <ul className="hours">
                {site.hours.map((h) => (
                  <li key={h.days}>
                    <span>{h.days}</span>
                    <strong>{h.time}</strong>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
