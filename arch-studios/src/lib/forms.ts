/**
 * Static-site form submission.
 *
 * If NEXT_PUBLIC_FORM_ENDPOINT is set (Formspree, Web3Forms, Getform, Basin…)
 * the form is POSTed there as FormData. Otherwise we fall back to opening the
 * visitor's mail client with the fields pre-filled, so the form always works.
 */
export type SubmitResult = { ok: true; via: "endpoint" | "mailto" } | { ok: false; error: string };

export async function submitForm(
  form: HTMLFormElement,
  opts: { subject: string; fallbackEmail: string },
): Promise<SubmitResult> {
  const data = new FormData(form);
  data.append("_subject", opts.subject);
  const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

  if (endpoint) {
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) return { ok: false, error: `Submission failed (${res.status}). Please try again or contact us directly.` };
      return { ok: true, via: "endpoint" };
    } catch {
      return { ok: false, error: "Network error. Please check your connection or contact us directly." };
    }
  }

  const lines: string[] = [];
  data.forEach((value, key) => {
    if (key.startsWith("_") || typeof value !== "string" || !value.trim()) return;
    lines.push(`${labelFor(form, key)}: ${value}`);
  });
  const href = `mailto:${opts.fallbackEmail}?subject=${encodeURIComponent(opts.subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
  window.location.href = href;
  return { ok: true, via: "mailto" };
}

function labelFor(form: HTMLFormElement, name: string) {
  const el = form.querySelector<HTMLElement>(`[name="${CSS.escape(name)}"]`);
  const label = el?.id ? form.querySelector(`label[for="${CSS.escape(el.id)}"]`)?.textContent : null;
  return (label ?? name).replace(/\*/g, "").trim();
}
