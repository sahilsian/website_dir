import Link from "next/link";
import { CarrierStrip, CtaStrip, SectionHead } from "@/components/Blocks";
import Icon from "@/components/Icon";
import { about, home, services, site, whoWeAre } from "@/content/site";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <img src={home.heroImage} alt="" className="hero__bg" fetchPriority="high" />
        <div className="hero__shade" aria-hidden="true" />
        <div className="container hero__inner">
          <div className="hero__copy">
            <p className="kicker kicker--light">Canada-based · Shipping worldwide</p>
            <h1 className="hero__title">
              <span>{home.heroTitle[0]}</span>
              <span className="hero__title-accent">{home.heroTitle[1]}</span>
            </h1>
            <p className="hero__body">{home.heroBody}</p>
            <div className="btn-row">
              <Link href="/quote/" className="btn btn--primary btn--lg">
                Get a Quote <Icon name="arrow" size={18} />
              </Link>
              <Link href="/tracking/" className="btn btn--glass btn--lg">
                <Icon name="search" size={18} /> Tracking
              </Link>
            </div>
          </div>

          <aside className="hero__card" aria-label="Contact U-Ship Solutions">
            <h2>Talk to our team</h2>
            <p>Questions about a shipment? We&rsquo;re happy to help.</p>
            <a href={site.phoneHref} className="hero__card-row">
              <Icon name="call" size={20} />
              <span>
                <small>Call us</small>
                {site.phone}
              </span>
            </a>
            <a href={`mailto:${site.email}`} className="hero__card-row">
              <Icon name="mail" size={20} />
              <span>
                <small>Email</small>
                {site.email}
              </span>
            </a>
            <Link href="/contact/" className="btn btn--outline btn--block">
              Contact Us
            </Link>
          </aside>
        </div>
      </section>

      <CarrierStrip />

      <section className="section">
        <div className="container">
          <ul className="trust">
            {home.trust.map((t) => (
              <li key={t.title} className="trust__item" data-reveal>
                <span className="icon-chip">
                  <Icon name={t.icon} size={24} />
                </span>
                <div>
                  <h3>{t.title}</h3>
                  <p>{t.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container split">
          <div className="split__media" data-reveal>
            <img src={home.introImage} alt="Packages organised in a logistics warehouse" loading="lazy" decoding="async" />
            <div className="split__badge">
              <Icon name="globe" size={22} />
              <span>
                Local &amp; international
                <br />
                package delivery
              </span>
            </div>
          </div>
          <div data-reveal>
            <p className="kicker">Your one-stop logistics solution</p>
            <h2 className="h2">The perfect company for all your logistic needs.</h2>
            {home.intro.map((p) => (
              <p key={p} className="body">
                {p}
              </p>
            ))}
            <Link href="/about/" className="btn btn--outline">
              About U-Ship <Icon name="arrow" size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            kicker="Our services"
            title="Shipping solutions for every need."
            intro="From express documents to freight forwarding and moving help, explore everything U-Ship Solutions can handle for you."
            center
          />
          <div className="svc-grid">
            {services.map((s) => (
              <Link key={s.slug} href={`/services/#${s.slug}`} className="svc-card" data-reveal>
                <span className="icon-chip">
                  <Icon name={s.icon} size={24} />
                </span>
                <h3>{s.title}</h3>
                <p>{s.summary}</p>
                <span className="link-arrow">
                  Learn more <Icon name="arrow" size={16} />
                </span>
              </Link>
            ))}
          </div>
          <div className="center-row">
            <Link href="/services/" className="btn btn--primary">
              View All Services <Icon name="arrow" size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--navy">
        <div className="container why">
          <div data-reveal>
            <p className="kicker kicker--light">Why choose U-Ship</p>
            <h2 className="h2">Architects of seamless global connectivity.</h2>
            <p className="body body--light">{whoWeAre}</p>
          </div>
          <div className="why__cards">
            <article className="why__card" data-reveal>
              <h3>Our Mission</h3>
              <p>{about.mission}</p>
            </article>
            <article className="why__card" data-reveal>
              <h3>Our Vision</h3>
              <p>{about.vision}</p>
            </article>
            <article className="why__card" data-reveal>
              <h3>Customer first</h3>
              <p>Established on the principles of efficient customer service — fast, effective and sustainable delivery.</p>
            </article>
          </div>
        </div>
      </section>

      <CtaStrip />
    </>
  );
}
