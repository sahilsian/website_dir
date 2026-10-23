"use client";

import { useState } from "react";
import Icon from "@/components/Icon";
import { services, site } from "@/content/site";
import { submitForm } from "@/lib/forms";

type Status = { state: "idle" | "sending" | "done" | "error"; message?: string };

export default function Contact() {
  const [status, setStatus] = useState<Status>({ state: "idle" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setStatus({ state: "sending" });
    const res = await submitForm(form, { subject: "New project enquiry — Arch Studios", fallbackEmail: site.email });
    if (res.ok) {
      setStatus({
        state: "done",
        message:
          res.via === "endpoint"
            ? "Thanks — your brief is in. We'll reply within one business day."
            : "Your email app has opened with your brief. Just hit send.",
      });
      if (res.via === "endpoint") form.reset();
    } else {
      setStatus({ state: "error", message: res.error });
    }
  }

  return (
    <section id="contact" className="section section--panel">
      <div className="container contact">
        <div className="contact__info" data-reveal>
          <p className="kicker">Start your project</p>
          <h2 className="h2">Let&rsquo;s make something worth watching.</h2>
          <p className="body">
            Share a few details about your project and we&rsquo;ll come back with ideas, a timeline and a quote.
          </p>
          <ul className="contact__list">
            <li>
              <Icon name="mail" size={20} />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <Icon name="call" size={20} />
              <a href={site.phoneHref}>{site.phone}</a>
            </li>
            <li>
              <Icon name="pin" size={20} />
              <span>{site.location}</span>
            </li>
          </ul>
        </div>

        <form className="form" onSubmit={onSubmit} noValidate data-reveal>
          <div className="form__grid">
            <div className="field">
              <label htmlFor="c-name">Name *</label>
              <input id="c-name" name="name" required autoComplete="name" />
            </div>
            <div className="field">
              <label htmlFor="c-email">Email *</label>
              <input id="c-email" name="email" type="email" required autoComplete="email" />
            </div>
            <div className="field">
              <label htmlFor="c-phone">Phone</label>
              <input id="c-phone" name="phone" type="tel" autoComplete="tel" />
            </div>
            <div className="field">
              <label htmlFor="c-company">Company / Brand</label>
              <input id="c-company" name="company" autoComplete="organization" />
            </div>
            <div className="field">
              <label htmlFor="c-service">Service *</label>
              <select id="c-service" name="service" required defaultValue="">
                <option value="" disabled>
                  Select a service
                </option>
                {services.map((s) => (
                  <option key={s.title}>{s.title}</option>
                ))}
                <option>Not sure yet</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="c-timeline">Timeline</label>
              <select id="c-timeline" name="timeline" defaultValue="">
                <option value="">Select a timeline</option>
                <option>ASAP</option>
                <option>Within a month</option>
                <option>1 – 3 months</option>
                <option>Flexible</option>
              </select>
            </div>
            <div className="field field--full">
              <label htmlFor="c-message">Tell us about the project *</label>
              <textarea id="c-message" name="message" rows={5} required />
            </div>
          </div>
          <button type="submit" className="btn btn--primary" disabled={status.state === "sending"}>
            {status.state === "sending" ? "Sending…" : "Send Brief"} <Icon name="arrow" size={18} />
          </button>
          <p className={`form__status form__status--${status.state}`} role="status" aria-live="polite">
            {status.message}
          </p>
        </form>
      </div>
    </section>
  );
}
