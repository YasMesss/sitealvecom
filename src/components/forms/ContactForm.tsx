"use client";

import { useState } from "react";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type FormState = "idle" | "submitting" | "success" | "error";

export function ContactForm({ defaultSubject = "" }: { defaultSubject?: string }) {
  const [state, setState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Record<string, string[]>>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    setErrors({});
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: (fd.get("name") as string)?.trim(),
      company: (fd.get("company") as string)?.trim() || "",
      email: (fd.get("email") as string)?.trim(),
      phone: (fd.get("phone") as string)?.trim() || "",
      subject: (fd.get("subject") as string)?.trim(),
      message: (fd.get("message") as string)?.trim(),
      consent: fd.get("consent") === "on",
      website: (fd.get("website") as string) || "",
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrors(data.errors || {});
        setState("error");
        return;
      }
      if (typeof window !== "undefined") {
        window.dataLayer?.push({ event: "contact_submit", form: "contact" });
      }
      setState("success");
      (e.target as HTMLFormElement).reset();
    } catch {
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="rounded-2xl border border-brand-200 bg-brand-50 p-6">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-0.5 h-6 w-6 flex-none text-success" />
          <div>
            <h3 className="text-lg font-semibold text-brand-700">Message bien reçu</h3>
            <p className="mt-1 text-sm text-ink-600">
              Merci, nous revenons vers vous sous 24 h ouvrées. Un email de confirmation vient de
              vous être envoyé.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      {/* honeypot */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
        aria-hidden
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Nom *" name="name" type="text" required autoComplete="name" errors={errors.name} />
        <Field label="Société" name="company" type="text" autoComplete="organization" errors={errors.company} />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Email *" name="email" type="email" required autoComplete="email" errors={errors.email} />
        <Field label="Téléphone" name="phone" type="tel" autoComplete="tel" errors={errors.phone} />
      </div>
      <Field
        label="Sujet *"
        name="subject"
        type="text"
        required
        defaultValue={defaultSubject}
        errors={errors.subject}
      />
      <div>
        <label className="block text-sm font-medium text-ink-700">
          Votre message *
          <textarea
            name="message"
            rows={6}
            required
            className={cn(
              "mt-1.5 w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm shadow-[var(--shadow-soft)] transition-colors placeholder:text-ink-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20",
              errors.message && "border-danger"
            )}
            placeholder="Décrivez votre besoin en quelques mots…"
          />
        </label>
        {errors.message && <p className="mt-1 text-xs text-danger">{errors.message[0]}</p>}
      </div>

      <label className="flex items-start gap-3 text-sm text-ink-600">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-0.5 h-4 w-4 flex-none accent-[var(--color-brand-500)]"
        />
        <span>
          J&apos;accepte que mes informations soient utilisées pour traiter ma demande,
          conformément à la{" "}
          <a href="/politique-confidentialite" className="font-medium text-brand-600 underline">
            politique de confidentialité
          </a>
          . *
        </span>
      </label>
      {errors.consent && <p className="text-xs text-danger">{errors.consent[0]}</p>}

      <div className="flex items-center gap-4">
        <Button type="submit" variant="accent" size="lg" disabled={state === "submitting"}>
          {state === "submitting" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" /> Envoi…
            </>
          ) : (
            "Envoyer le message"
          )}
        </Button>
        {state === "error" && (
          <span className="inline-flex items-center gap-1.5 text-sm text-danger">
            <AlertCircle className="h-4 w-4" /> Une erreur est survenue.
          </span>
        )}
      </div>
      <p className="text-xs text-ink-400">Réponse sous 24 h ouvrées · Aucune donnée transmise à des tiers.</p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
  defaultValue,
  errors,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  defaultValue?: string;
  errors?: string[];
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-ink-700">
        {label}
        <input
          name={name}
          type={type}
          required={required}
          autoComplete={autoComplete}
          defaultValue={defaultValue}
          className={cn(
            "mt-1.5 w-full rounded-xl border border-ink-200 bg-white px-4 py-2.5 text-sm shadow-[var(--shadow-soft)] transition-colors placeholder:text-ink-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20",
            errors && "border-danger"
          )}
        />
      </label>
      {errors && <p className="mt-1 text-xs text-danger">{errors[0]}</p>}
    </div>
  );
}
