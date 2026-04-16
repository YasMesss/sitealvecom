import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { ContactForm } from "@/components/forms/ContactForm";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Contact — Parlons de votre projet télécom et IT",
  description:
    "Contactez Alvecom par téléphone, email ou formulaire. Nos équipes vous répondent sous 24 h ouvrées pour discuter de vos besoins télécom et IT.",
  path: "/contact",
});

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Contactez-nous"
        description="Appelez-nous, envoyez un email ou remplissez le formulaire pour discuter de vos besoins télécom et IT. Réponse sous 24 h ouvrées."
        breadcrumbs={[{ label: "Contact" }]}
      />
      <Section>
        <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-12">
          <aside className="space-y-6">
            <InfoBlock
              icon={Phone}
              title="Par téléphone"
              value={siteConfig.contact.phone}
              href={`tel:${siteConfig.contact.phoneE164}`}
              hint="Du lundi au vendredi, 08:30 – 18:00"
            />
            <InfoBlock
              icon={Mail}
              title="Par email"
              value={siteConfig.contact.email}
              href={`mailto:${siteConfig.contact.email}`}
              hint="Réponse sous 24 h ouvrées"
            />
            <InfoBlock
              icon={MapPin}
              title="Notre adresse"
              value={`${siteConfig.contact.address.street}, ${siteConfig.contact.address.postalCode} ${siteConfig.contact.address.city}`}
              hint="Région Provence-Alpes-Côte d'Azur"
            />
            <InfoBlock
              icon={Clock}
              title="Horaires"
              value={siteConfig.contact.hours}
              hint="Support urgent 24/7 sur contrat"
            />
          </aside>
          <div>
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  );
}

function InfoBlock({
  icon: Icon,
  title,
  value,
  href,
  hint,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  value: string;
  href?: string;
  hint?: string;
}) {
  const inner = (
    <div className="flex items-start gap-4 rounded-2xl border border-ink-200 bg-white p-5 transition-colors hover:border-brand-300">
      <div className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-inset ring-brand-100">
        <Icon className="h-5 w-5" aria-hidden />
      </div>
      <div>
        <div className="text-sm font-semibold text-brand-700">{title}</div>
        <div className="text-base text-ink-800">{value}</div>
        {hint && <div className="mt-1 text-xs text-ink-500">{hint}</div>}
      </div>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
}
