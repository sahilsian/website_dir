import type { Metadata } from "next";
import { CategoryGrid, InquiryCta, PageHero } from "@/components/Blocks";
import Icon from "@/components/Icon";
import { about } from "@/content/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Peppy Foods is a wholesale food supplier focused on supply reliability, quality products and responsive service for food businesses.",
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero kicker="About Us" title={about.heading} />
      <section className="section section--tight">
        <div className="container split">
          <div data-reveal>
            {about.body.map((p) => (
              <p key={p} className="body">
                {p}
              </p>
            ))}
            <ul className="pillars">
              {about.pillars.map((p) => (
                <li key={p.title}>
                  <Icon name="check" size={22} />
                  <div>
                    <h3>{p.title}</h3>
                    <p>{p.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="split__media" data-reveal>
            <img src={about.image} alt="Prepared dishes for foodservice" loading="lazy" decoding="async" />
          </div>
        </div>
      </section>
      <section className="section section--alt">
        <div className="container">
          <div className="section-head" data-reveal>
            <p className="kicker">What we supply</p>
            <h2 className="h2">Four categories. One dependable supplier.</h2>
          </div>
          <CategoryGrid />
        </div>
      </section>
      <InquiryCta />
    </>
  );
}
