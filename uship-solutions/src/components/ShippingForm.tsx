"use client";

import Icon from "@/components/Icon";
import { useFormSubmit } from "@/components/useFormSubmit";
import { carriers, services, shippingForm } from "@/content/site";

/**
 * Shipping / quote form.
 * TODO: align field names and options 1:1 with the shipping form supplied by the client.
 * If the supplied form is a hosted embed, set `shippingForm.embedUrl` in content/site.ts instead.
 */
export default function ShippingForm() {
  const { status, onSubmit } = useFormSubmit("New Shipping Form / Quote Request — U-Ship Solutions");

  if (shippingForm.embedUrl) {
    return (
      <div className="form-card form-card--embed">
        <iframe
          src={shippingForm.embedUrl}
          title="U-Ship Solutions shipping form"
          style={{ height: shippingForm.embedHeight }}
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <form className="form-card" onSubmit={onSubmit} noValidate>
      <fieldset className="fieldset">
        <legend>
          <span>1</span> Shipment type
        </legend>
        <div className="grid-2">
          <Field id="sf-service" label="Service required" required>
            <select id="sf-service" name="service" required defaultValue="">
              <option value="" disabled>
                Select a service
              </option>
              {services.map((s) => (
                <option key={s.slug}>{s.title}</option>
              ))}
            </select>
          </Field>
          <Field id="sf-carrier" label="Preferred carrier">
            <select id="sf-carrier" name="preferred_carrier" defaultValue="No preference">
              <option>No preference</option>
              {carriers.map((c) => (
                <option key={c.name}>{c.name}</option>
              ))}
            </select>
          </Field>
          <Field id="sf-speed" label="Delivery speed">
            <select id="sf-speed" name="delivery_speed" defaultValue="Standard">
              <option>Standard</option>
              <option>Express</option>
              <option>Economy</option>
            </select>
          </Field>
          <Field id="sf-date" label="Preferred pickup date">
            <input id="sf-date" name="pickup_date" type="date" />
          </Field>
        </div>
      </fieldset>

      <fieldset className="fieldset">
        <legend>
          <span>2</span> Sender details
        </legend>
        <Party prefix="sender" />
      </fieldset>

      <fieldset className="fieldset">
        <legend>
          <span>3</span> Recipient details
        </legend>
        <Party prefix="recipient" />
      </fieldset>

      <fieldset className="fieldset">
        <legend>
          <span>4</span> Package details
        </legend>
        <div className="grid-4">
          <Field id="sf-pieces" label="No. of pieces" required>
            <input id="sf-pieces" name="pieces" type="number" min={1} defaultValue={1} required inputMode="numeric" />
          </Field>
          <Field id="sf-weight" label="Total weight" required>
            <input id="sf-weight" name="weight" type="number" min={0} step="0.1" required inputMode="decimal" />
          </Field>
          <Field id="sf-unit" label="Unit">
            <select id="sf-unit" name="weight_unit" defaultValue="lb">
              <option value="lb">lb</option>
              <option value="kg">kg</option>
            </select>
          </Field>
          <Field id="sf-pkg" label="Packaging">
            <select id="sf-pkg" name="packaging" defaultValue="Box">
              <option>Box</option>
              <option>Envelope / Documents</option>
              <option>Pallet</option>
              <option>Luggage</option>
              <option>Other</option>
            </select>
          </Field>
          <Field id="sf-l" label="Length (in)">
            <input id="sf-l" name="length_in" type="number" min={0} inputMode="decimal" />
          </Field>
          <Field id="sf-w" label="Width (in)">
            <input id="sf-w" name="width_in" type="number" min={0} inputMode="decimal" />
          </Field>
          <Field id="sf-h" label="Height (in)">
            <input id="sf-h" name="height_in" type="number" min={0} inputMode="decimal" />
          </Field>
          <Field id="sf-value" label="Declared value (CAD)">
            <input id="sf-value" name="declared_value" type="number" min={0} inputMode="decimal" />
          </Field>
        </div>
        <Field id="sf-contents" label="Description of contents" required>
          <textarea id="sf-contents" name="contents" rows={3} required />
        </Field>
        <div className="checks">
          <label>
            <input type="checkbox" name="needs_insurance" value="Yes" /> Add shipment insurance
          </label>
          <label>
            <input type="checkbox" name="needs_customs" value="Yes" /> I need customs clearance help
          </label>
          <label>
            <input type="checkbox" name="needs_pickup" value="Yes" /> Pickup required
          </label>
        </div>
      </fieldset>

      <fieldset className="fieldset">
        <legend>
          <span>5</span> Additional notes
        </legend>
        <Field id="sf-notes" label="Anything else we should know?">
          <textarea id="sf-notes" name="notes" rows={4} />
        </Field>
      </fieldset>

      <div className="form-actions">
        <button type="submit" className="btn btn--primary btn--lg" disabled={status.state === "sending"}>
          {status.state === "sending" ? "Submitting…" : "Submit Shipping Form"} <Icon name="arrow" size={18} />
        </button>
        <p className={`form-status form-status--${status.state}`} role="status" aria-live="polite">
          {status.message}
        </p>
      </div>
    </form>
  );
}

function Party({ prefix }: { prefix: "sender" | "recipient" }) {
  const id = (f: string) => `sf-${prefix}-${f}`;
  const name = (f: string) => `${prefix}_${f}`;
  return (
    <div className="grid-2">
      <Field id={id("name")} label="Full name" required>
        <input id={id("name")} name={name("name")} required autoComplete={prefix === "sender" ? "name" : "off"} />
      </Field>
      <Field id={id("company")} label="Company (optional)">
        <input id={id("company")} name={name("company")} />
      </Field>
      <Field id={id("phone")} label="Phone" required>
        <input id={id("phone")} name={name("phone")} type="tel" required inputMode="tel" />
      </Field>
      <Field id={id("email")} label="Email" required={prefix === "sender"}>
        <input id={id("email")} name={name("email")} type="email" required={prefix === "sender"} />
      </Field>
      <Field id={id("address")} label="Street address" required wide>
        <input id={id("address")} name={name("address")} required />
      </Field>
      <Field id={id("city")} label="City" required>
        <input id={id("city")} name={name("city")} required />
      </Field>
      <Field id={id("region")} label="Province / State">
        <input id={id("region")} name={name("region")} />
      </Field>
      <Field id={id("postal")} label="Postal / ZIP code" required>
        <input id={id("postal")} name={name("postal")} required />
      </Field>
      <Field id={id("country")} label="Country" required>
        <input id={id("country")} name={name("country")} required defaultValue={prefix === "sender" ? "Canada" : ""} />
      </Field>
    </div>
  );
}

export function Field({
  id,
  label,
  required,
  wide,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  wide?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className={`field ${wide ? "field--wide" : ""}`}>
      <label htmlFor={id}>
        {label}
        {required && <em aria-hidden="true"> *</em>}
      </label>
      {children}
    </div>
  );
}
