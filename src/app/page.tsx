import {
  Phone,
  Network,
  MessagesSquare,
  Headset,
  Cloud,
  DatabaseBackup,
  ShieldCheck,
  ArrowRight,
  Clock,
  Users,
  CheckCircle2,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";
import { LinkButton } from "@/components/ui/Button";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { FeatureList } from "@/components/ui/FeatureList";
import { CTASection } from "@/components/ui/CTASection";
import { LogoCloud } from "@/components/ui/LogoCloud";
import { siteConfig } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: `${siteConfig.name} — ${siteConfig.baseline}`,
  description: siteConfig.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-brand-900 text-white">
        <div className="absolute inset-0 -z-10 bg-hero-mesh" aria-hidden />
        <div className="absolute inset-0 -z-10 bg-hero-dots opacity-[0.22]" aria-hidden />
        <div
          className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-40 -top-40 -z-10 h-[520px] w-[520px] rounded-full bg-brand-500/25 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-48 -left-32 -z-10 h-[480px] w-[480px] rounded-full bg-accent-500/10 blur-3xl"
          aria-hidden
        />
        <Container>
          <div className="relative grid items-center gap-10 py-14 sm:py-20 md:grid-cols-[1.05fr_0.95fr] md:py-28 lg:gap-16">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-100 ring-1 ring-inset ring-white/15 backdrop-blur">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent-400" aria-hidden />
                Intégrateur télécom &amp; IT depuis {siteConfig.stats.experienceYears} ans
              </div>
              <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-white text-balance sm:text-5xl lg:text-6xl">
                Télécom et IT, <span className="text-brand-200">réunis sous un seul partenaire</span>.
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-brand-100 text-pretty sm:text-lg">
                Téléphonie, fibre, communications unifiées, cloud et infogérance : des solutions
                fiables et évolutives pour les PME et ETI, pilotées par une équipe française
                disponible.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <LinkButton href="/devis" variant="accent" size="lg" className="w-full sm:w-auto">
                  Demander un audit gratuit
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </LinkButton>
                <LinkButton
                  href={`tel:${siteConfig.contact.phoneE164}`}
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  <Phone className="h-4 w-4" aria-hidden />
                  {siteConfig.contact.phone}
                </LinkButton>
              </div>
              <ul className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-brand-100">
                <li className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent-400" aria-hidden />
                  {siteConfig.stats.clients}+ clients accompagnés
                </li>
                <li className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent-400" aria-hidden />
                  Support {siteConfig.stats.sla}
                </li>
                <li className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent-400" aria-hidden />
                  Équipe basée à Marseille
                </li>
              </ul>
            </div>

            <div className="relative hidden md:block">
              <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-brand-500/25 via-brand-400/10 to-transparent blur-2xl" aria-hidden />
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md shadow-[var(--shadow-lift)] lg:p-7">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-200">
                    En un coup d&apos;œil
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-500/15 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-accent-300 ring-1 ring-inset ring-accent-400/20">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-400" aria-hidden />
                    Audit offert
                  </span>
                </div>
                <dl className="mt-6 grid grid-cols-3 gap-4">
                  <HeroStat value={`${siteConfig.stats.experienceYears} ans`} label="Expérience" />
                  <HeroStat value={`${siteConfig.stats.clients}+`} label="Clients" />
                  <HeroStat value={siteConfig.stats.sla} label="Supervision" />
                </dl>
                <div className="mt-6 space-y-3 text-sm text-brand-100">
                  <HeroBullet icon={Phone} label="Téléphonie VoIP — 3CX, Wildix, Teams" />
                  <HeroBullet icon={Network} label="Fibre dédiée &amp; SD-WAN multi-sites" />
                  <HeroBullet icon={MessagesSquare} label="Communications unifiées" />
                  <HeroBullet icon={Cloud} label="Hébergement cloud souverain" />
                  <HeroBullet icon={DatabaseBackup} label="Sauvegarde &amp; PRA" />
                  <HeroBullet icon={Headset} label="Infogérance &amp; support 24/7" />
                </div>
                <LinkButton href="/devis" variant="accent" size="md" className="mt-6 w-full">
                  Réserver mon audit
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </LinkButton>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* TRUST BAR */}
      <Section tone="muted" className="py-10 md:py-12">
        <LogoCloud label="Partenaires opérateurs & technologiques" />
      </Section>

      {/* SERVICES */}
      <Section>
        <SectionHeading
          eyebrow="Nos expertises"
          title="Un partenaire unique pour votre Télécom et votre IT"
          description="Nous concevons, déployons et exploitons des solutions pensées pour la performance, la disponibilité et la simplicité du quotidien."
          align="center"
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            href="/solutions-telecom/telephonie-entreprise"
            icon={Phone}
            title="Téléphonie d'entreprise"
            description="VoIP, postes fixes, mobile et softphone. Une expérience unifiée sur tous vos appareils, avec un accompagnement expert."
          />
          <ServiceCard
            href="/solutions-telecom/reseaux-connectivite"
            icon={Network}
            title="Réseaux & Connectivité"
            description="Fibre dédiée, SD-WAN, VPN managé, interconnexions multi-sites : des réseaux conçus pour la qualité de service."
          />
          <ServiceCard
            href="/solutions-telecom/communications-unifiees"
            icon={MessagesSquare}
            title="Communications unifiées"
            description="Appels, messagerie, visioconférence et collaboration dans une seule plateforme, accessible partout."
          />
          <ServiceCard
            href="/services-it/infogerance-support"
            icon={Headset}
            title="Infogérance & Support"
            description="Gestion du parc, hotline utilisateurs, supervision et maintenance proactive pour que votre IT reste fluide."
          />
          <ServiceCard
            href="/services-it/hebergement-cloud"
            icon={Cloud}
            title="Hébergement Cloud"
            description="Hébergement d'applications et de messagerie en France, performant, évolutif et surveillé 24/7."
          />
          <ServiceCard
            href="/services-it/sauvegarde-continuite"
            icon={DatabaseBackup}
            title="Sauvegarde & Continuité"
            description="Sauvegarde automatisée, PRA et reprise d'activité pour garantir la continuité de vos opérations."
          />
        </div>
      </Section>

      {/* VALUE PROPS */}
      <Section tone="muted">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Pourquoi Alvecom"
              title="L'intégrateur qui simplifie vraiment votre IT et votre Télécom"
              description="Nous prenons la main sur toute la chaîne : opérateur, équipements, déploiement, exploitation. Vous gardez un interlocuteur unique, au service de votre performance."
            />
            <FeatureList
              items={[
                "Un seul interlocuteur pour Télécom + IT — moins de friction, plus de réactivité",
                "Architectures évolutives pensées multi-sites et mobilité",
                "Supervision proactive 24/7 et SLA contractuels",
                "Équipe française basée à Marseille, disponible et à l'écoute",
                "Opérateurs et éditeurs reconnus : Bouygues Telecom, Wildix, 3CX, Microsoft…",
              ]}
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <LinkButton href="/a-propos" variant="primary">
                Découvrir l&apos;entreprise
              </LinkButton>
              <LinkButton href="/operateurs-partenaires" variant="outline">
                Nos partenaires
              </LinkButton>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <MetricCard icon={Users} value={`${siteConfig.stats.clients}+`} label="Clients accompagnés" />
            <MetricCard icon={Clock} value={`${siteConfig.stats.experienceYears} ans`} label="D'expérience terrain" />
            <MetricCard icon={ShieldCheck} value={`${siteConfig.stats.satisfaction}%`} label="Satisfaction clients" />
            <MetricCard icon={Headset} value={siteConfig.stats.sla} label="Supervision" />
          </div>
        </div>
      </Section>

      {/* PROCESS */}
      <Section>
        <SectionHeading
          eyebrow="Notre approche"
          title="Un accompagnement simple, en 4 étapes"
          align="center"
        />
        <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            { n: "01", t: "Audit", d: "Diagnostic gratuit de votre infrastructure télécom et IT." },
            { n: "02", t: "Solution", d: "Architecture et offre sur-mesure, adaptée à vos usages." },
            { n: "03", t: "Déploiement", d: "Mise en œuvre par nos équipes, sans interruption de service." },
            { n: "04", t: "Exploitation", d: "Supervision, support et évolutions continues." },
          ].map((s) => (
            <li
              key={s.n}
              className="group rounded-2xl border border-ink-200 bg-white p-6 transition-all hover:border-brand-300 hover:shadow-[var(--shadow-lift)]"
            >
              <div className="text-xs font-semibold tracking-widest text-brand-500">ÉTAPE {s.n}</div>
              <div className="mt-2 text-lg font-semibold text-brand-700">{s.t}</div>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">{s.d}</p>
            </li>
          ))}
        </ol>
      </Section>

      <CTASection />
    </>
  );
}

function HeroStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl bg-white/5 p-3 ring-1 ring-inset ring-white/10">
      <dt className="text-[11px] font-medium uppercase tracking-wider text-brand-200">{label}</dt>
      <dd className="mt-1 text-xl font-bold text-white">{value}</dd>
    </div>
  );
}

function HeroBullet({
  icon: Icon,
  label,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10 text-brand-200 ring-1 ring-inset ring-white/10">
        <Icon className="h-4 w-4" aria-hidden />
      </span>
      <span>{label}</span>
    </div>
  );
}

function MetricCard({
  icon: Icon,
  value,
  label,
}: {
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-2xl border border-ink-200 bg-white p-5 shadow-[var(--shadow-soft)]">
      <Icon className="h-5 w-5 text-brand-500" aria-hidden />
      <div className="mt-3 text-3xl font-bold text-brand-700">{value}</div>
      <div className="text-sm text-ink-500">{label}</div>
    </div>
  );
}
