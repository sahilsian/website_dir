"use client";

import Icon from "@/components/Icon";
import { Field } from "@/components/ShippingForm";
import { useFormSubmit } from "@/components/useFormSubmit";
import { services } from "@/content/site";

export default function ContactForm() {
  const { status, onSubmit } = useFormSubmit("New Contact Inquiry — U-Ship Solutions");

  return (
    <form className="form-card" onSubmit={onSubmit} noValidate>
      <h2 className="h3">Send us a message</h2>
      <div className="grid-2">
        <Field id="cf-name" label="Full name" required>
          <input id="cf-name" name="name" required autoComplete="name" />
        </Field>
        <Field id="cf-email" label="Email" required>
          <input id="cf-email" name="email" type="email" required autoComplete="email" />
        </Field>
        <Field id="cf-phone" label="Phone">
          <input id="cf-phone" name="phone" type="tel" autoComplete="tel" />
        </Field>
        <Field id="cf-topic" label="Topic">
          <select id="cf-topic" name="topic" defaultValue="General inquiry">
            <option>General inquiry</option>
            {services.map((s) => (
              <option key={s.slug}>{s.title}</option>
            ))}
            <option>Tracking help</option>
          </select>
        </Field>
        <Field id="cf-message" label="Message" required wide>
          <textarea id="cf-message" name="message" rows={5} required />
        </Field>
      </div>
      <div className="form-actions">
        <button type="submit" className="btn btn--primary" disabled={status.state === "sending"}>
          {status.state === "sending" ? "Sending…" : "Send Message"} <Icon name="arrow" size={18} />
        </button>
        <p className={`form-status form-status--${status.state}`} role="status" aria-live="polite">
          {status.message}
        </p>
      </div>
    </form>
  );
}
