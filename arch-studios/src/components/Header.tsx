"use client";

import { useEffect, useState } from "react";
import { nav, site } from "@/content/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={`header ${scrolled ? "header--solid" : ""}`}>
      <div className="container header__inner">
        <a href="/#home" className="logo" aria-label={`${site.name} home`}>
          <span className="logo__mark" aria-hidden="true">A</span>
          <span>
            ARCH<span className="logo__thin">STUDIOS</span>
          </span>
        </a>

        <nav className="header__nav" aria-label="Primary">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="header__link">
              {item.label}
            </a>
          ))}
        </nav>

        <a href="/#contact" className="btn btn--primary btn--sm header__cta">
          Start Your Project
        </a>

        <button
          className={`burger ${open ? "burger--open" : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>

      <div id="mobile-menu" className={`drawer ${open ? "drawer--open" : ""}`} aria-hidden={!open}>
        <nav className="drawer__nav" aria-label="Mobile">
          {nav.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
              style={{ transitionDelay: open ? `${80 + i * 50}ms` : "0ms" }}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a href="/#contact" className="btn btn--primary" onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
          Start Your Project
        </a>
        <p className="drawer__meta">
          <a href={`mailto:${site.email}`} tabIndex={open ? 0 : -1}>{site.email}</a>
        </p>
      </div>
    </header>
  );
}
