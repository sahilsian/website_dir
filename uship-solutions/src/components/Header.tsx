"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Icon from "@/components/Icon";
import Logo from "@/components/Logo";
import { nav, site } from "@/content/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href.replace(/\/$/, "")));

  return (
    <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
      <div className="topbar">
        <div className="container topbar__inner">
          <span>
            <Icon name="pin" size={15} /> {site.address.city}, {site.address.region}, {site.address.country}
          </span>
          <span className="topbar__links">
            <a href={site.phoneHref}>
              <Icon name="call" size={15} /> {site.phone}
            </a>
            <a href={`mailto:${site.email}`}>
              <Icon name="mail" size={15} /> {site.email}
            </a>
          </span>
        </div>
      </div>
      <div className="container header__inner">
        <Link href="/" className="header__logo" aria-label={`${site.name} home`}>
          <Logo />
        </Link>

        <nav id="primary-nav" className={`nav ${open ? "nav--open" : ""}`} aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav__link ${isActive(item.href) ? "nav__link--active" : ""}`}
              aria-current={isActive(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/quote/" className="btn btn--primary nav__cta">
            Get a Quote
          </Link>
        </nav>

        <button
          className="menu-btn"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? "close" : "menu"} size={24} />
        </button>
      </div>
    </header>
  );
}
