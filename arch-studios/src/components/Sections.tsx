import Icon from "@/components/Icon";
import {
  about,
  clients,
  ctaBand,
  hero,
  projects,
  services,
  team,
  testimonials,
  trust,
  values,
} from "@/content/site";

function SectionHead({ kicker, title, intro, center }: { kicker: string; title: string; intro?: string; center?: boolean }) {
  return (
    <div className={`section-head ${center ? "section-head--center" : ""}`} data-reveal>
      <p className="kicker">{kicker}</p>
      <h2 className="h2">{title}</h2>
      {intro && <p className="lead">{intro}</p>}
    </div>
  );
}

export function Hero() {
  return (
    <section id="home" className="hero" aria-label="Introduction">
      <div className="hero__media" aria-hidden="true">
        {hero.video ? (
          <video autoPlay muted loop playsInline poster={hero.image}>
            <source src={hero.video} type="video/mp4" />
          </video>
        ) : (
          <img src={hero.image} alt="" fetchPriority="high" />
        )}
      </div>
      <div className="hero__shade" aria-hidden="true" />

      <div className="container hero__content">
        <p className="kicker hero__eyebrow">{hero.eyebrow}</p>
        <h1 className="hero__title">
          {hero.lines.map((line, i) => (
            <span key={line} className="hero__line" style={{ animationDelay: `${150 + i * 120}ms` }}>
              {line}
            </span>
          ))}
        </h1>
        <div className="hero__bottom">
          <p className="hero__body">{hero.body}</p>
          <div className="btn-row">
            <a href={hero.primary.href} className="btn btn--primary">
              {hero.primary.label} <Icon name="arrow" size={18} />
            </a>
            <a href={hero.secondary.href} className="btn btn--ghost">
              <Icon name="play" size={16} /> {hero.secondary.label}
            </a>
          </div>
        </div>
      </div>

      <div className="ticker" aria-hidden="true">
        <div className="ticker__track">
          {[...hero.ticker, ...hero.ticker].map((t, i) => (
            <span key={i}>
              {t} <i>✦</i>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="section">
      <div className="container about">
        <div className="about__copy" data-reveal>
          <p className="kicker">{about.kicker}</p>
          <h2 className="h2">{about.heading}</h2>
          {about.body.map((p) => (
            <p key={p} className="body">
              {p}
            </p>
          ))}
          <a href={about.cta.href} className="btn btn--outline">
            {about.cta.label} <Icon name="arrow" size={18} />
          </a>
        </div>
        <div className="about__media">
          {about.media.map((m, i) => (
            <figure key={m.src} className={`media-frame media-frame--${i + 1}`} data-reveal>
              <img src={m.src} alt={m.alt} loading="lazy" decoding="async" />
            </figure>
          ))}
        </div>
      </div>

      <div className="container">
        <ol className="process">
          {about.process.map((p) => (
            <li key={p.step} className="process__item" data-reveal>
              <span className="process__step">{p.step}</span>
              <h3 className="h4">{p.title}</h3>
              <p>{p.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Values() {
  return (
    <section className="section section--tight" aria-labelledby="why-title">
      <div className="container">
        <div className="section-head section-head--split" data-reveal>
          <div>
            <p className="kicker">Why choose us</p>
            <h2 className="h2" id="why-title">
              Built for brands that care how they look.
            </h2>
          </div>
        </div>
        <div className="values">
          {values.map((v) => (
            <article key={v.title} className="value" data-reveal>
              <span className="value__icon">
                <Icon name={v.icon} size={26} />
              </span>
              <h3 className="h4">{v.title}</h3>
              <p>{v.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" className="section section--panel">
      <div className="container">
        <SectionHead
          kicker="Our services"
          title="Everything your brand needs on camera."
          intro="From a single product shoot to a full campaign, every service is planned, produced and delivered by one team."
        />
        <div className="services">
          {services.map((s, i) => (
            <article key={s.title} className="service" data-reveal style={{ transitionDelay: `${(i % 4) * 60}ms` }}>
              <div className="service__top">
                <span className="service__icon">
                  <Icon name={s.icon} size={28} />
                </span>
                <span className="service__num">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="h4">{s.title}</h3>
              <p>{s.text}</p>
              <a href="/#contact" className="link-arrow" aria-label={`Learn more about ${s.title}`}>
                Learn More <Icon name="arrow" size={16} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHead
          kicker="Selected work"
          title="Projects across every frame."
          intro="A look at the categories we shoot most — campaigns, hospitality, products, events, lifestyle and commercials."
        />
        <div className="projects">
          {projects.map((p) => (
            <a key={p.title} href="/#contact" className={`project project--${p.size}`} data-reveal>
              <img src={p.image} alt={`${p.title} project by Arch Studios`} loading="lazy" decoding="async" />
              <div className="project__overlay">
                <span className="project__meta">{p.count}</span>
                <h3 className="project__title">{p.title}</h3>
                <span className="link-arrow">
                  View Projects <Icon name="arrow" size={16} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="cta-band" aria-labelledby="cta-title">
      <img src={ctaBand.image} alt="" className="cta-band__img" loading="lazy" decoding="async" />
      <div className="cta-band__shade" aria-hidden="true" />
      <div className="container cta-band__inner" data-reveal>
        <h2 className="h1" id="cta-title">
          {ctaBand.heading}
        </h2>
        <p className="lead">{ctaBand.body}</p>
        <a href={ctaBand.cta.href} className="btn btn--light">
          {ctaBand.cta.label} <Icon name="arrow" size={18} />
        </a>
      </div>
    </section>
  );
}

export function Trust() {
  return (
    <section className="section" aria-labelledby="trust-title">
      <div className="container trust">
        <div className="trust__intro" data-reveal>
          <p className="kicker">How we work</p>
          <h2 className="h2" id="trust-title">
            The standards behind every shoot.
          </h2>
          <p className="body">
            Great content isn&rsquo;t luck. It&rsquo;s a repeatable process: clear direction, honest communication and
            delivery you can plan around.
          </p>
          <a href="/#contact" className="btn btn--outline">
            Work with us <Icon name="arrow" size={18} />
          </a>
        </div>
        <div className="trust__grid">
          {trust.map((t, i) => (
            <article key={t.title} className={`trust__card ${i === 0 ? "trust__card--accent" : ""}`} data-reveal>
              <Icon name={t.icon} size={26} />
              <h3 className="h4">{t.title}</h3>
              <p>{t.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Team() {
  return (
    <section id="team" className="section section--panel">
      <div className="container">
        <SectionHead
          kicker="The team"
          title="The people behind the lens."
          intro="Directors, cinematographers, editors and producers who treat your brand like their own."
        />
        <div className="team">
          {team.map((m, i) => (
            <figure key={i} className="member" data-reveal>
              <div className="member__photo">
                <img src={m.image} alt={`${m.name}, ${m.role}`} loading="lazy" decoding="async" />
              </div>
              <figcaption>
                <strong>{m.name}</strong>
                <span>{m.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Clients() {
  return (
    <section className="section section--tight" aria-labelledby="clients-title">
      <div className="container">
        <p className="kicker kicker--center" id="clients-title" data-reveal>
          Trusted by brands we&rsquo;re proud to work with
        </p>
        <ul className="clients" data-reveal>
          {clients.map((c) => (
            <li key={c} className="client">
              {c}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="section" aria-labelledby="reviews-title">
      <div className="container">
        <div className="section-head section-head--split" data-reveal>
          <div>
            <p className="kicker">Testimonials</p>
            <h2 className="h2" id="reviews-title">
              What our clients say.
            </h2>
          </div>
          <p className="muted">Swipe or scroll to read more →</p>
        </div>
      </div>
      <div className="reviews" tabIndex={0} aria-label="Client testimonials">
        {testimonials.map((t, i) => (
          <blockquote key={i} className="review">
            <Icon name="quote" size={32} className="review__mark" />
            <p>{t.quote}</p>
            <footer>
              <strong>{t.name}</strong>
              <span>{t.role}</span>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
