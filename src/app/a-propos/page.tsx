import Image from "next/image";
import { Building2, Users, Award, Heart } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section, SectionHeading } from "@/components/ui/Section";
import { FeatureList } from "@/components/ui/FeatureList";
import { Stats } from "@/components/ui/Stats";
import { CTASection } from "@/components/ui/CTASection";
import { Container } from "@/components/ui/Container";
import { HeroMedia } from "@/components/ui/HeroMedia";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "À propos — Intégrateur Télécom et prestataire IT",
  description:
    "Alvecom, intégrateur télécom et prestataire IT basé aux Pennes-Mirabeau. Plus de 18 ans d'expérience au service des entreprises de toute la France.",
  path: "/a-propos",
});

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="À propos"
        title="Qui sommes-nous ?"
        description="Alvecom est un intégrateur Télécom et prestataire IT qui accompagne les entreprises dans la gestion et l'évolution de leurs communications et de leurs infrastructures informatiques."
        breadcrumbs={[{ label: "À propos" }]}
      />

      <Container>
        <div className="-mt-2 pb-4 md:pb-6">
          <HeroMedia
            src="/images/about/about-bureau.webp"
            alt="Bureau moderne d'Alvecom aux Pennes-Mirabeau"
            priority
            overlay="soft"
            heightClassName="h-[280px] md:h-[400px]"
          />
        </div>
      </Container>

      <Section>
        <div className="grid items-start gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <SectionHeading eyebrow="Notre mission" title="Simplifier le Télécom et l'IT des entreprises" />
            <div className="prose-brand">
              <p>
                Basée aux Pennes-Mirabeau (13), Alvecom est un intégrateur télécom et prestataire IT
                reconnu en région PACA, rayonnant au niveau national. Notre mission est simple :
                <strong> rendre les communications et les systèmes informatiques de nos clients plus performants, plus disponibles et plus simples à piloter au quotidien</strong>.
              </p>
              <p>
                Nous travaillons avec des partenaires opérateurs et technologiques reconnus
                (Bouygues Telecom, Orange, SFR Business, Wildix, 3CX, Microsoft) pour offrir des
                solutions fiables, évolutives et adaptées à chaque contexte métier.
              </p>
              <p>
                Notre valeur ajoutée tient dans un engagement constant : être un
                <strong> interlocuteur unique</strong> pour le télécom ET l'IT, avec une équipe
                accessible, expérimentée et à l'écoute.
              </p>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-brand-700">Nos engagements</h3>
            <FeatureList
              items={[
                "Un interlocuteur unique du premier contact au support quotidien",
                "Des solutions pensées pour la durabilité, pas pour l'obsolescence programmée",
                "Une équipe française, à l'écoute, qui parle votre langue",
                "Une transparence totale sur les tarifs, les délais et les engagements",
                "Un accompagnement dans la durée, avec des revues régulières",
              ]}
            />
          </div>
        </div>
      </Section>

      <section className="relative isolate overflow-hidden bg-brand-900 text-white">
        <Image
          src="/images/about/about-equipe.webp"
          alt=""
          fill
          sizes="100vw"
          className="absolute inset-0 -z-10 object-cover opacity-30"
          aria-hidden
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-900/85 via-brand-800/80 to-brand-700/70" aria-hidden />
        <div className="absolute inset-0 -z-10 bg-grid opacity-20" aria-hidden />
        <Container>
          <div className="relative py-14 md:py-20">
            <Stats
              invert
              items={[
                { value: `${siteConfig.stats.experienceYears} ans`, label: "D'expérience" },
                { value: `${siteConfig.stats.clients}+`, label: "Clients accompagnés" },
                { value: siteConfig.stats.sla, label: "Supervision" },
                { value: `${siteConfig.stats.satisfaction}%`, label: "Clients satisfaits" },
              ]}
            />
          </div>
        </Container>
      </section>

      <Section>
        <SectionHeading eyebrow="Nos valeurs" title="Ce qui nous anime" align="center" />
        <div className="grid gap-5 md:grid-cols-4">
          {[
            { icon: Users, t: "Proximité", d: "Une équipe accessible, à taille humaine, qui connaît ses clients." },
            { icon: Award, t: "Exigence", d: "Nous nous engageons sur le résultat, pas seulement sur les moyens." },
            { icon: Building2, t: "Expertise", d: "Des ingénieurs certifiés et une veille continue sur les technologies." },
            { icon: Heart, t: "Durabilité", d: "Des relations de long terme avec nos clients et nos partenaires." },
          ].map((v) => (
            <div
              key={v.t}
              className="rounded-2xl border border-ink-200 bg-white p-6 shadow-[var(--shadow-soft)]"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-inset ring-brand-100">
                <v.icon className="h-5 w-5" aria-hidden />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-brand-700">{v.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">{v.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <CTASection
        title="Envie d'en savoir plus ?"
        description="Rencontrons-nous pour discuter de vos enjeux télécom et IT. Premier échange offert, sans engagement."
      />
    </>
  );
}
