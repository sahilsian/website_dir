import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/Blocks";
import ContactForm from "@/components/ContactForm";
import Icon from "@/components/Icon";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Contact U-Ship Solutions at ${site.address.full}. Call ${site.phone} or email ${site.email}.`,
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero kicker="Contact Us" title="We're here to help" intro="Reach out with any question about shipping, customs or moving — our team will get back to you shortly." />

      <section className="section section--tight">
        <div className="container">
          <div className="contact-cards">
            <a href={site.address.mapUrl} target="_blank" rel="noopener noreferrer" className="contact-card" data-reveal>
              <span className="icon-chip">
                <Icon name="pin" size={24} />
              </span>
              <h2>Address</h2>
              <p>{site.address.full}</p>
            </a>
            <a href={site.phoneHref} className="contact-card" data-reveal>
              <span className="icon-chip">
                <Icon name="call" size={24} />
              </span>
              <h2>Phone</h2>
              <p>{site.phone}</p>
            </a>
            <a href={`mailto:${site.email}`} className="contact-card" data-reveal>
              <span className="icon-chip">
                <Icon name="mail" size={24} />
              </span>
              <h2>Email</h2>
              <p>{site.email}</p>
            </a>
          </div>

          <div className="contact-layout">
            <ContactForm />
            <aside className="aside-card aside-card--blue">
              <h2 className="h4">Looking for a quote?</h2>
              <p>Use our shipping form for the fastest, most accurate quote.</p>
              <Link href="/quote/" className="btn btn--white btn--block">
                Get a Quote <Icon name="arrow" size={18} />
              </Link>
              <h2 className="h4">Tracking a package?</h2>
              <p>Find carrier tracking links and support numbers.</p>
              <Link href="/tracking/" className="btn btn--outline-white btn--block">
                Tracking <Icon name="arrow" size={18} />
              </Link>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
