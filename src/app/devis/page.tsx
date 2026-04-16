import { CheckCircle2, ShieldCheck, Clock, Users } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { DevisForm } from "@/components/forms/DevisForm";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Demande de devis — Télécom et IT",
  description:
    "Demandez un devis gratuit et un audit offert en 3 étapes. Alvecom analyse vos besoins et vous rappelle sous 24 h ouvrées.",
  path: "/devis",
});

const reasons = [
  { icon: Clock, title: "Réponse sous 24 h", desc: "Un expert vous rappelle rapidement." },
  { icon: ShieldCheck, title: "Audit offert", desc: "Diagnostic télécom + IT sans engagement." },
  { icon: Users, title: "Interlocuteur unique", desc: "Un contact dédié du devis au déploiement." },
  { icon: CheckCircle2, title: "Propositions claires", desc: "Tarifs transparents, pas de surprise." },
];

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Demande de devis"
        title="Parlons de votre projet en 3 minutes"
        description="Répondez à quelques questions pour que nous préparions une proposition adaptée. C'est rapide, gratuit et sans engagement."
        breadcrumbs={[{ label: "Demande de devis" }]}
      />
      <Section>
        <div className="grid gap-10 md:grid-cols-[1fr_1.3fr] md:gap-12">
          <aside className="space-y-4">
            <h2 className="text-lg font-semibold text-brand-700">Ce que vous obtenez</h2>
            <ul className="space-y-3">
              {reasons.map((r) => (
                <li
                  key={r.title}
                  className="flex items-start gap-3 rounded-xl border border-ink-200 bg-white p-4"
                >
                  <span className="inline-flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-brand-50 text-brand-600 ring-1 ring-inset ring-brand-100">
                    <r.icon className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-brand-700">{r.title}</span>
                    <span className="block text-xs text-ink-500">{r.desc}</span>
                  </span>
                </li>
              ))}
            </ul>
            <div className="rounded-2xl bg-[var(--color-muted)] p-5 text-sm text-ink-600">
              <p className="font-semibold text-brand-700">Urgence ?</p>
              <p className="mt-1">
                Vous pouvez aussi nous joindre directement par téléphone au
                <strong> 04 42 31 57 97</strong> — lun–ven 08:30–18:00.
              </p>
            </div>
          </aside>
          <div>
            <DevisForm />
          </div>
        </div>
      </Section>
    </>
  );
}
