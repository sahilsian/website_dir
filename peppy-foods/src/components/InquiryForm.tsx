"use client";

import { useEffect, useState } from "react";
import Icon from "@/components/Icon";
import { categories } from "@/content/products";
import { site } from "@/content/site";
import { submitForm } from "@/lib/forms";

type Status = { state: "idle" | "sending" | "done" | "error"; message?: string };

export default function InquiryForm() {
  const [status, setStatus] = useState<Status>({ state: "idle" });
  const [products, setProducts] = useState("");

  // Pre-fill from "Request Pricing" links: /contact/?product=Paneer
  useEffect(() => {
    const p = new URLSearchParams(window.location.search).get("product");
    if (p) setProducts(`${p} — qty: `);
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setStatus({ state: "sending" });
    const res = await submitForm(form, { subject: "Bulk order / product inquiry — Peppy Foods", fallbackEmail: site.email });
    if (!res.ok) return setStatus({ state: "error", message: res.error });
    if (res.via === "endpoint") {
      form.reset();
      setProducts("");
    }
    setStatus({
      state: "done",
      message:
        res.via === "endpoint"
          ? "Thank you! Our team will get back to you with pricing and availability."
          : "Your email app has opened with your inquiry — just press send.",
    });
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <div className="form__grid">
        <div className="field">
          <label htmlFor="q-name">Contact name *</label>
          <input id="q-name" name="name" required autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor="q-business">Business name *</label>
          <input id="q-business" name="business" required autoComplete="organization" />
        </div>
        <div className="field">
          <label htmlFor="q-type">Business type</label>
          <select id="q-type" name="business_type" defaultValue="">
            <option value="">Select</option>
            <option>Restaurant</option>
            <option>Caterer</option>
            <option>Grocery store</option>
            <option>Sweet shop / bakery</option>
            <option>Cloud kitchen / food truck</option>
            <option>Distributor / reseller</option>
            <option>Other</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="q-city">City</label>
          <input id="q-city" name="city" autoComplete="address-level2" />
        </div>
        <div className="field">
          <label htmlFor="q-email">Email *</label>
          <input id="q-email" name="email" type="email" required autoComplete="email" />
        </div>
        <div className="field">
          <label htmlFor="q-phone">Phone *</label>
          <input id="q-phone" name="phone" type="tel" required autoComplete="tel" />
        </div>

        <fieldset className="field field--full checks">
          <legend>Categories of interest</legend>
          {categories.map((c) => (
            <label key={c.slug} className="check">
              <input type="checkbox" name="categories" value={c.name} />
              <span>
                <Icon name={c.icon} size={16} /> {c.name}
              </span>
            </label>
          ))}
        </fieldset>

        <div className="field field--full">
          <label htmlFor="q-products">Products &amp; quantities</label>
          <textarea
            id="q-products"
            name="products"
            rows={3}
            value={products}
            onChange={(e) => setProducts(e.target.value)}
            placeholder="e.g. Punjabi Samosa — 10 cases, Paneer — 40 lb"
          />
        </div>
        <div className="field field--full">
          <label htmlFor="q-message">Message</label>
          <textarea id="q-message" name="message" rows={3} placeholder="Delivery frequency, timing, questions about pack sizes…" />
        </div>
      </div>
      <div className="form__actions">
        <button type="submit" className="btn btn--primary" disabled={status.state === "sending"}>
          {status.state === "sending" ? "Sending…" : "Send Inquiry"} <Icon name="arrow" size={18} />
        </button>
        <p className={`form__status form__status--${status.state}`} role="status" aria-live="polite">
          {status.message}
        </p>
      </div>
    </form>
  );
}
