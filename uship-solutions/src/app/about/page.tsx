import type { Metadata } from "next";
import { CtaStrip, PageHero } from "@/components/Blocks";
import Icon from "@/components/Icon";
import { about, whoWeAre } from "@/content/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "U-Ship Solutions was born out of a desire to create a modern, fast and secure shipping center for businesses and individuals worldwide.",
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero kicker="About Us" title="A modern, fast and secure shipping center" />

      <section className="section section--tight">
        <div className="container split">
          <div data-reveal>
            <p className="kicker">Our story</p>
            <h2 className="h2">Built on efficient customer service.</h2>
            {about.opening.map((p) => (
              <p key={p} className="body">
                {p}
              </p>
            ))}
          </div>
          <div className="split__media" data-reveal>
            <img src={about.image} alt="U-Ship Solutions team meeting with a customer" loading="lazy" decoding="async" />
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container mv">
          <article className="mv__card" data-reveal>
            <span className="icon-chip">
              <Icon name="users" size={24} />
            </span>
            <h2 className="h3">Our Team</h2>
            <p>{about.team}</p>
          </article>
          <article className="mv__card" data-reveal>
            <span className="icon-chip">
              <Icon name="flag" size={24} />
            </span>
            <h2 className="h3">Our Mission</h2>
            <p>{about.mission}</p>
          </article>
          <article className="mv__card" data-reveal>
            <span className="icon-chip">
              <Icon name="compass" size={24} />
            </span>
            <h2 className="h3">Our Vision</h2>
            <p>{about.vision}</p>
          </article>
        </div>
      </section>

      <section className="section section--navy">
        <div className="container narrow" data-reveal>
          <p className="kicker kicker--light">Who we are</p>
          <h2 className="h2">More than just a logistics company.</h2>
          <p className="body body--light">{whoWeAre}</p>
          {about.showOnTimeClaim && <p className="claim">100% On-Time Delivery Record</p>}
          {about.leaderQuote && (
            <blockquote className="leader">
              <p>&ldquo;{about.leaderQuote.quote}&rdquo;</p>
              <footer>
                <strong>{about.leaderQuote.name}</strong> — {about.leaderQuote.role}
              </footer>
            </blockquote>
          )}
        </div>
      </section>

      <CtaStrip />
    </>
  );
}
