import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section, SectionHeading } from "@/components/ui/Section";
import { CTASection } from "@/components/ui/CTASection";
import { FeatureList } from "@/components/ui/FeatureList";
import { Container } from "@/components/ui/Container";
import { HeroMedia } from "@/components/ui/HeroMedia";
import { buildMetadata } from "@/lib/seo";
import { partners } from "@/lib/partners";

export const metadata = buildMetadata({
  title: "Opérateurs et partenaires télécoms",
  description:
    "Alvecom collabore avec les principaux opérateurs et éditeurs pour offrir des solutions télécom et IT fiables : Bouygues Telecom, Orange Business, SFR Business, Wildix, 3CX, Microsoft Teams, Alcatel-Lucent Enterprise, OVHcloud.",
  path: "/operateurs-partenaires",
});

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Opérateurs & Partenaires"
        title="Nos partenaires télécoms et technologiques"
        description="Nous collaborons avec les principaux opérateurs et éditeurs pour proposer des offres fibre, mobile, data, téléphonie et cloud adaptées aux besoins des entreprises."
        breadcrumbs={[{ label: "Opérateurs & Partenaires" }]}
      />

      <Container>
        <div className="-mt-2 pb-4 md:pb-6">
          <HeroMedia
            src="/images/services/operateurs-fibre.webp"
            alt="Infrastructure fibre optique des opérateurs partenaires d'Alvecom"
            priority
            overlay="soft"
            heightClassName="h-[260px] md:h-[380px]"
          />
        </div>
      </Container>

      <Section>
        <SectionHeading
          eyebrow="Notre écosystème"
          title="Des partenariats choisis pour votre performance"
          description="Chaque partenariat est sélectionné pour la qualité de sa technologie, la fiabilité de son service et sa capacité à s'intégrer à notre approche multi-solutions."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {partners.map((p) => {
            const CardTag = p.url ? "a" : "div";
            const linkProps = p.url
              ? { href: p.url, target: "_blank", rel: "noopener noreferrer external" }
              : {};
            return (
              <CardTag
                key={p.name}
                {...linkProps}
                className="group flex flex-col rounded-2xl border border-ink-200 bg-white p-6 shadow-[var(--shadow-soft)] transition-all hover:border-brand-300 hover:shadow-[var(--shadow-lift)]"
              >
                <div className="flex h-14 items-center">
                  <Image
                    src={p.logo}
                    alt={p.name}
                    width={160}
                    height={40}
                    className="h-10 w-auto"
                  />
                </div>
                <div className="mt-3 text-xs font-semibold uppercase tracking-wider text-brand-500">
                  {p.role}
                </div>
                <h3 className="mt-1 text-lg font-semibold text-brand-700">{p.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-600">
                  {p.description}
                </p>
                {p.url && (
                  <div className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-brand-500 transition group-hover:text-brand-600">
                    Site officiel
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                  </div>
                )}
              </CardTag>
            );
          })}
        </div>
      </Section>

      <Section tone="muted">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <SectionHeading
            eyebrow="Pourquoi un intégrateur ?"
            title="Un seul partenaire pour tous vos fournisseurs"
            description="En tant qu'intégrateur, nous contractualisons et gérons pour vous la relation avec les opérateurs et les éditeurs. Vous gagnez du temps, de la cohérence et un levier de négociation."
          />
          <FeatureList
            items={[
              "Une seule facture pour l'ensemble de vos services télécom et IT",
              "Un interlocuteur unique qui coordonne tous les fournisseurs",
              "Une négociation groupée pour de meilleurs tarifs",
              "Un support qui prend en charge vos tickets de bout en bout",
              "Une expertise indépendante pour choisir la meilleure solution",
            ]}
          />
        </div>
      </Section>

      <Section size="narrow">
        <div className="rounded-3xl border border-ink-200 bg-[var(--color-muted)] p-8 text-center md:p-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-500">
            Vous êtes éditeur ou opérateur ?
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-brand-700">
            Devenons partenaires
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-ink-600">
            Vous proposez une solution pertinente pour les PME et ETI françaises ? Échangeons
            sur un partenariat technique et commercial.
          </p>
          <div className="mt-5">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-brand-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-600"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
