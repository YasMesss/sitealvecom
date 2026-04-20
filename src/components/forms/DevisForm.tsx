"use client";

import { useState } from "react";
import {
  Phone,
  Network,
  MessagesSquare,
  Headset,
  Cloud,
  DatabaseBackup,
  Smartphone,
  Wrench,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type ServiceKey =
  | "telephonie"
  | "reseaux"
  | "communications-unifiees"
  | "infogerance"
  | "cloud"
  | "sauvegarde"
  | "mobile"
  | "autre";

const SERVICES: { key: ServiceKey; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { key: "telephonie", label: "Téléphonie d'entreprise (VoIP)", icon: Phone },
  { key: "reseaux", label: "Réseaux & Connectivité (fibre, SD-WAN)", icon: Network },
  { key: "communications-unifiees", label: "Communications unifiées", icon: MessagesSquare },
  { key: "mobile", label: "Forfaits mobile entreprise", icon: Smartphone },
  { key: "infogerance", label: "Infogérance & Support", icon: Headset },
  { key: "cloud", label: "Hébergement Cloud", icon: Cloud },
  { key: "sauvegarde", label: "Sauvegarde & Continuité", icon: DatabaseBackup },
  { key: "autre", label: "Autre / Je ne sais pas encore", icon: Wrench },
];

type FormData = {
  services: ServiceKey[];
  companySize: string;
  sites: string;
  urgency: string;
  budget: string;
  name: string;
  company: string;
  role: string;
  email: string;
  phone: string;
  city: string;
  message: string;
  consent: boolean;
};

const INITIAL: FormData = {
  services: [],
  companySize: "",
  sites: "",
  urgency: "",
  budget: "",
  name: "",
  company: "",
  role: "",
  email: "",
  phone: "",
  city: "",
  message: "",
  consent: false,
};

type Status = "idle" | "submitting" | "success" | "error";

export function DevisForm() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormData>(INITIAL);
  const [errors, setErrors] = useState<Record<string, string[]>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [honeypot, setHoneypot] = useState("");

  const updateData = <K extends keyof FormData>(k: K, v: FormData[K]) =>
    setData((d) => ({ ...d, [k]: v }));

  const toggleService = (k: ServiceKey) =>
    setData((d) => ({
      ...d,
      services: d.services.includes(k)
        ? d.services.filter((s) => s !== k)
        : [...d.services, k],
    }));

  const trackStep = (n: number) => {
    if (typeof window !== "undefined") {
      window.dataLayer?.push({ event: "devis_step", step: n });
    }
  };

  const next = () => {
    if (step === 1 && data.services.length === 0) {
      setErrors({ services: ["Sélectionnez au moins un besoin"] });
      return;
    }
    if (step === 2 && (!data.companySize || !data.sites || !data.urgency)) {
      setErrors({
        companySize: !data.companySize ? ["Requis"] : [],
        sites: !data.sites ? ["Requis"] : [],
        urgency: !data.urgency ? ["Requis"] : [],
      });
      return;
    }
    setErrors({});
    setStep((s) => s + 1);
    trackStep(step + 1);
  };

  const prev = () => setStep((s) => Math.max(1, s - 1));

  async function submit() {
    setStatus("submitting");
    setErrors({});
    try {
      const res = await fetch("/api/devis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, website: honeypot }),
      });
      const json = await res.json();
      if (!res.ok) {
        setErrors(json.errors || {});
        setStatus("error");
        return;
      }
      if (typeof window !== "undefined") {
        window.dataLayer?.push({
          event: "generate_lead",
          form: "devis",
          services: data.services,
        });
      }
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-brand-200 bg-brand-50 p-8 text-center">
        <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-success/10 text-success">
          <CheckCircle2 className="h-7 w-7" />
        </div>
        <h3 className="mt-4 text-2xl font-bold text-brand-700">Demande envoyée</h3>
        <p className="mt-2 text-ink-600">
          Merci ! Un expert Alvecom vous rappelle sous <strong>24 h ouvrées</strong>. Un email de
          confirmation vous a été envoyé.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-ink-200 bg-white p-4 shadow-[var(--shadow-soft)] sm:p-6 md:p-8">
      <Stepper step={step} />

      {/* honeypot */}
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
        aria-hidden
      />

      {step === 1 && (
        <div>
          <h2 className="text-xl font-bold text-brand-700">Quels sont vos besoins ?</h2>
          <p className="mt-1 text-sm text-ink-500">Plusieurs choix possibles.</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {SERVICES.map((s) => {
              const active = data.services.includes(s.key);
              return (
                <button
                  key={s.key}
                  type="button"
                  onClick={() => toggleService(s.key)}
                  className={cn(
                    "flex items-center gap-3 rounded-xl border p-4 text-left transition-all",
                    active
                      ? "border-brand-500 bg-brand-50 ring-1 ring-brand-500"
                      : "border-ink-200 hover:border-brand-300 hover:bg-brand-50/30"
                  )}
                >
                  <span
                    className={cn(
                      "inline-flex h-10 w-10 flex-none items-center justify-center rounded-lg",
                      active ? "bg-brand-500 text-white" : "bg-brand-50 text-brand-600"
                    )}
                  >
                    <s.icon className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-semibold text-brand-700">{s.label}</span>
                </button>
              );
            })}
          </div>
          {errors.services && <p className="mt-2 text-xs text-danger">{errors.services[0]}</p>}
        </div>
      )}

      {step === 2 && (
        <div>
          <h2 className="text-xl font-bold text-brand-700">Votre contexte</h2>
          <p className="mt-1 text-sm text-ink-500">Pour mieux dimensionner la proposition.</p>

          <RadioGroup
            label="Taille de l'entreprise *"
            name="companySize"
            value={data.companySize}
            onChange={(v) => updateData("companySize", v)}
            options={[
              { v: "1-9", l: "1 à 9" },
              { v: "10-49", l: "10 à 49" },
              { v: "50-249", l: "50 à 249" },
              { v: "250+", l: "250+" },
            ]}
            error={errors.companySize?.[0]}
          />
          <RadioGroup
            label="Nombre de sites *"
            name="sites"
            value={data.sites}
            onChange={(v) => updateData("sites", v)}
            options={[
              { v: "1", l: "1 site" },
              { v: "2-5", l: "2 à 5" },
              { v: "6-20", l: "6 à 20" },
              { v: "21+", l: "21+" },
            ]}
            error={errors.sites?.[0]}
          />
          <RadioGroup
            label="Quand souhaitez-vous démarrer ? *"
            name="urgency"
            value={data.urgency}
            onChange={(v) => updateData("urgency", v)}
            options={[
              { v: "immediat", l: "Immédiat" },
              { v: "1-3m", l: "1 à 3 mois" },
              { v: "3-6m", l: "3 à 6 mois" },
              { v: "reflexion", l: "Réflexion" },
            ]}
            error={errors.urgency?.[0]}
          />
          <RadioGroup
            label="Budget envisagé (optionnel)"
            name="budget"
            value={data.budget}
            onChange={(v) => updateData("budget", v)}
            options={[
              { v: "<2k", l: "< 2 k€" },
              { v: "2-10k", l: "2 à 10 k€" },
              { v: "10-50k", l: "10 à 50 k€" },
              { v: "50k+", l: "> 50 k€" },
              { v: "nc", l: "Je ne sais pas" },
            ]}
          />
        </div>
      )}

      {step === 3 && (
        <div>
          <h2 className="text-xl font-bold text-brand-700">Vos coordonnées</h2>
          <p className="mt-1 text-sm text-ink-500">Un expert vous rappelle sous 24 h.</p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <TextField
              label="Nom et prénom *"
              value={data.name}
              onChange={(v) => updateData("name", v)}
              autoComplete="name"
              error={errors.name?.[0]}
            />
            <TextField
              label="Société *"
              value={data.company}
              onChange={(v) => updateData("company", v)}
              autoComplete="organization"
              error={errors.company?.[0]}
            />
            <TextField
              label="Fonction"
              value={data.role}
              onChange={(v) => updateData("role", v)}
              autoComplete="organization-title"
              error={errors.role?.[0]}
            />
            <TextField
              label="Ville"
              value={data.city}
              onChange={(v) => updateData("city", v)}
              autoComplete="address-level2"
              error={errors.city?.[0]}
            />
            <TextField
              label="Email professionnel *"
              type="email"
              value={data.email}
              onChange={(v) => updateData("email", v)}
              autoComplete="email"
              error={errors.email?.[0]}
            />
            <TextField
              label="Téléphone *"
              type="tel"
              value={data.phone}
              onChange={(v) => updateData("phone", v)}
              autoComplete="tel"
              error={errors.phone?.[0]}
            />
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-ink-700">
              Détails complémentaires (optionnel)
              <textarea
                rows={4}
                value={data.message}
                onChange={(e) => updateData("message", e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm shadow-[var(--shadow-soft)] placeholder:text-ink-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                placeholder="Contexte, contraintes, échéances…"
              />
            </label>
          </div>

          <label className="mt-4 flex items-start gap-3 text-sm text-ink-600">
            <input
              type="checkbox"
              checked={data.consent}
              onChange={(e) => updateData("consent", e.target.checked)}
              className="mt-0.5 h-4 w-4 flex-none accent-[var(--color-brand-500)]"
            />
            <span>
              J&apos;accepte que mes informations soient utilisées pour me recontacter, conformément
              à la{" "}
              <a href="/politique-confidentialite" className="font-medium text-brand-600 underline">
                politique de confidentialité
              </a>
              . *
            </span>
          </label>
          {errors.consent && <p className="mt-1 text-xs text-danger">{errors.consent[0]}</p>}
        </div>
      )}

      <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
        {step > 1 ? (
          <Button variant="ghost" onClick={prev} className="w-full sm:w-auto">
            <ArrowLeft className="h-4 w-4" /> Précédent
          </Button>
        ) : (
          <span className="hidden sm:block" />
        )}
        {step < 3 ? (
          <Button variant="accent" size="lg" onClick={next} className="w-full sm:w-auto">
            Continuer <ArrowRight className="h-4 w-4" />
          </Button>
        ) : (
          <Button
            variant="accent"
            size="lg"
            onClick={submit}
            disabled={status === "submitting" || !data.consent}
            className="w-full sm:w-auto"
          >
            {status === "submitting" ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" /> Envoi…
              </>
            ) : (
              <>Envoyer ma demande</>
            )}
          </Button>
        )}
      </div>
      {status === "error" && (
        <p className="mt-3 inline-flex items-center gap-1.5 text-sm text-danger">
          <AlertCircle className="h-4 w-4" /> Une erreur est survenue, merci de réessayer.
        </p>
      )}
    </div>
  );
}

function Stepper({ step }: { step: number }) {
  const steps = [
    { n: 1, t: "Besoins" },
    { n: 2, t: "Contexte" },
    { n: 3, t: "Coordonnées" },
  ];
  const current = steps.find((s) => s.n === step);
  return (
    <>
      <div className="mb-6 flex items-center justify-between gap-3 sm:hidden">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-brand-500">
            Étape {step} sur {steps.length}
          </div>
          <div className="mt-1 text-base font-bold text-brand-700">{current?.t}</div>
        </div>
        <div className="flex items-center gap-1.5" aria-hidden>
          {steps.map((s) => (
            <span
              key={s.n}
              className={cn(
                "h-2 rounded-full transition-all",
                s.n === step
                  ? "w-6 bg-brand-500"
                  : s.n < step
                  ? "w-2 bg-brand-400"
                  : "w-2 bg-ink-200"
              )}
            />
          ))}
        </div>
      </div>

      <ol className="mb-8 hidden grid-cols-3 gap-2 sm:grid">
        {steps.map((s) => {
          const active = s.n === step;
          const done = s.n < step;
          return (
            <li key={s.n}>
              <div
                className={cn(
                  "flex items-center gap-3 rounded-xl border p-3 text-sm font-medium",
                  active
                    ? "border-brand-500 bg-brand-50 text-brand-700"
                    : done
                    ? "border-brand-200 bg-white text-brand-600"
                    : "border-ink-200 bg-white text-ink-500"
                )}
              >
                <span
                  className={cn(
                    "inline-flex h-7 w-7 flex-none items-center justify-center rounded-full text-xs font-bold",
                    active
                      ? "bg-brand-500 text-white"
                      : done
                      ? "bg-brand-100 text-brand-700"
                      : "bg-ink-100 text-ink-500"
                  )}
                >
                  {s.n}
                </span>
                <span>{s.t}</span>
              </div>
            </li>
          );
        })}
      </ol>
    </>
  );
}

function RadioGroup({
  label,
  name,
  value,
  onChange,
  options,
  error,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (v: string) => void;
  options: { v: string; l: string }[];
  error?: string;
}) {
  return (
    <fieldset className="mt-6">
      <legend className="mb-2 text-sm font-medium text-ink-700">{label}</legend>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => {
          const active = value === o.v;
          return (
            <label
              key={o.v}
              className={cn(
                "cursor-pointer select-none rounded-xl border px-4 py-2 text-sm font-medium transition-colors",
                active
                  ? "border-brand-500 bg-brand-50 text-brand-700"
                  : "border-ink-200 text-ink-600 hover:border-brand-300"
              )}
            >
              <input
                type="radio"
                name={name}
                value={o.v}
                checked={active}
                onChange={() => onChange(o.v)}
                className="sr-only"
              />
              {o.l}
            </label>
          );
        })}
      </div>
      {error && <p className="mt-1 text-xs text-danger">{error}</p>}
    </fieldset>
  );
}

function TextField({
  label,
  value,
  onChange,
  type = "text",
  autoComplete,
  error,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  autoComplete?: string;
  error?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-ink-700">
        {label}
        <input
          type={type}
          autoComplete={autoComplete}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={cn(
            "mt-1.5 w-full rounded-xl border border-ink-200 bg-white px-4 py-2.5 text-sm shadow-[var(--shadow-soft)] placeholder:text-ink-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20",
            error && "border-danger"
          )}
        />
      </label>
      {error && <p className="mt-1 text-xs text-danger">{error}</p>}
    </div>
  );
}
