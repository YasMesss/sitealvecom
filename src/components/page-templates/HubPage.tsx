import { PageHeader } from "@/components/ui/PageHeader";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { CTASection } from "@/components/ui/CTASection";
import { FeatureList } from "@/components/ui/FeatureList";
import { Container } from "@/components/ui/Container";
import { HeroMedia } from "@/components/ui/HeroMedia";
import type { Crumb } from "@/components/ui/Breadcrumbs";

export type HubPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  breadcrumbs: Crumb[];
  intro: string;
  valueProps: string[];
  services: {
    href: string;
    title: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
  }[];
  /** Image héro affichée immédiatement sous le PageHeader */
  heroImage?: string;
  heroImageAlt?: string;
};

export function HubPage(props: HubPageProps) {
  return (
    <>
      <PageHeader
        eyebrow={props.eyebrow}
        title={props.title}
        description={props.description}
        breadcrumbs={props.breadcrumbs}
      />
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
      <Section>
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <SectionHeading eyebrow="Notre vision" title="Une approche intégrée et sur-mesure" />
            <div className="prose-brand">
              <p>{props.intro}</p>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-brand-700">Nos engagements</h3>
            <FeatureList items={props.valueProps} />
          </div>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow="Nos services" title="Explorez nos solutions" align="center" />
        <div className="grid gap-5 md:grid-cols-3">
          {props.services.map((s) => (
            <ServiceCard
              key={s.href}
              href={s.href}
              title={s.title}
              description={s.description}
              icon={s.icon}
            />
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
