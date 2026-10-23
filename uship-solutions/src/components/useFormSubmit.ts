"use client";

import { useState } from "react";
import { site } from "@/content/site";
import { submitForm } from "@/lib/forms";

export type Status = { state: "idle" | "sending" | "done" | "error"; message?: string };

export function useFormSubmit(subject: string) {
  const [status, setStatus] = useState<Status>({ state: "idle" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setStatus({ state: "sending" });
    const res = await submitForm(form, { subject, fallbackEmail: site.email });
    if (!res.ok) return setStatus({ state: "error", message: res.error });
    if (res.via === "endpoint") form.reset();
    setStatus({
      state: "done",
      message:
        res.via === "endpoint"
          ? "Thank you! Your request has been received. Our team will contact you shortly."
          : "Your email app has opened with your details filled in — just press send.",
    });
  }

  return { status, onSubmit };
}
