import { PageHeader } from "@/components/ui/PageHeader";
import { Section, SectionHeading } from "@/components/ui/Section";
import { FeatureList } from "@/components/ui/FeatureList";
import { LinkButton } from "@/components/ui/Button";
import { CTASection } from "@/components/ui/CTASection";
import { FAQ, type FAQItem } from "@/components/ui/FAQ";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Container } from "@/components/ui/Container";
import { HeroMedia } from "@/components/ui/HeroMedia";
import { serviceJsonLd, faqJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import type { Crumb } from "@/components/ui/Breadcrumbs";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export type ServicePageProps = {
  eyebrow: string;
  title: string;
  description: string;
  path: string;
  breadcrumbs: Crumb[];
  intro: string;
  features: string[];
  benefits: { title: string; description: string; icon: React.ComponentType<{ className?: string }> }[];
  useCases?: string[];
  related?: { href: string; title: string; description: string; icon: React.ComponentType<{ className?: string }> }[];
  faq?: FAQItem[];
  /** Image héro affichée immédiatement sous le PageHeader */
  heroImage?: string;
  heroImageAlt?: string;
  /** Image contextuelle insérée entre les bénéfices et les cas d'usage */
  mediaImage?: string;
  mediaImageAlt?: string;
  /** Phrase courte affichée en surimpression de l'image contextuelle */
  mediaTagline?: string;
};

export function ServicePage(props: ServicePageProps) {
  const serviceLd = serviceJsonLd({
    name: props.title,
    description: props.description,
    path: props.path,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
      />
      {props.faq && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(props.faq)) }}
        />
      )}
      <PageHeader
        eyebrow={props.eyebrow}
        title={props.title}
        description={props.description}
        breadcrumbs={props.breadcrumbs}
      >
        <div className="mt-6 flex flex-wrap gap-3">
          <LinkButton href="/devis" variant="accent" size="lg">
            Demander un devis <ArrowRight className="h-4 w-4" />
          </LinkButton>
          <LinkButton href={`tel:${siteConfig.contact.phoneE164}`} variant="outline" size="lg">
            Parler à un expert — {siteConfig.contact.phone}
          </LinkButton>
        </div>
      </PageHeader>

      {/* Hero image */}
      {props.heroImage && (
        <Container>
          <div className="-mt-2 pb-4 md:pb-6">
            <HeroMedia
              src={props.heroImage}
              alt={props.heroImageAlt ?? props.title}
              priority
              overlay="soft"
              heightClassName="h-[260px] md:h-[380px]"
            />
          </div>
        </Container>
      )}

      {/* Intro + features */}
      <Section>
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <SectionHeading eyebrow="Notre approche" title="L'expertise Alvecom" />
            <div className="prose-brand">
              <p>{props.intro}</p>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-brand-700">Ce que vous obtenez</h3>
            <FeatureList items={props.features} />
          </div>
        </div>
      </Section>

      {/* Benefits grid */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="Bénéfices"
          title="Pourquoi nos clients nous font confiance"
          align="center"
        />
        <div className="grid gap-5 md:grid-cols-3">
          {props.benefits.map((b) => (
            <div
              key={b.title}
              className="rounded-2xl border border-ink-200 bg-white p-6 shadow-[var(--shadow-soft)]"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-inset ring-brand-100">
                <b.icon className="h-5 w-5" aria-hidden />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-brand-700">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">{b.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Spotlight image contextuelle */}
      {props.mediaImage && (
        <Container>
          <div className="py-10 md:py-14">
            <HeroMedia
              src={props.mediaImage}
              alt={props.mediaImageAlt ?? props.title}
              overlay="brand"
              heightClassName="h-[260px] md:h-[340px]"
            >
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white ring-1 ring-inset ring-white/20 backdrop-blur">
                  En pratique
                </div>
                <p className="mt-3 text-2xl font-semibold tracking-tight text-white text-balance md:text-3xl">
                  {props.mediaTagline ?? "Des solutions éprouvées, déployées et exploitées par nos équipes."}
                </p>
              </div>
            </HeroMedia>
          </div>
        </Container>
      )}

      {/* Use cases */}
      {props.useCases && props.useCases.length > 0 && (
        <Section>
          <div className="grid gap-10 md:grid-cols-2">
            <SectionHeading
              eyebrow="Cas d'usage"
              title="Pour qui et dans quels contextes ?"
              description="Nous intervenons auprès des TPE, PME et ETI, sur un site unique ou plusieurs dizaines de sites."
            />
            <ul className="space-y-3">
              {props.useCases.map((uc) => (
                <li key={uc} className="flex items-start gap-3 rounded-xl bg-[var(--color-muted)] p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-brand-500" aria-hidden />
                  <span className="text-ink-700">{uc}</span>
                </li>
              ))}
            </ul>
          </div>
        </Section>
      )}

      {/* FAQ */}
      {props.faq && (
        <Section tone="muted" size="narrow">
          <SectionHeading eyebrow="FAQ" title="Questions fréquentes" align="center" />
          <FAQ items={props.faq} />
        </Section>
      )}

      {/* Related services */}
      {props.related && props.related.length > 0 && (
        <Section>
          <SectionHeading eyebrow="Pour aller plus loin" title="Services complémentaires" />
          <div className="grid gap-5 md:grid-cols-3">
            {props.related.map((r) => (
              <ServiceCard
                key={r.href}
                href={r.href}
                title={r.title}
                description={r.description}
                icon={r.icon}
              />
            ))}
          </div>
        </Section>
      )}

      <CTASection />
    </>
  );
}
