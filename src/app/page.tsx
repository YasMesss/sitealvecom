import Image from "next/image";
import Link from "next/link";
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
  Building2,
  Sparkles,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";
import { LinkButton } from "@/components/ui/Button";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Stats } from "@/components/ui/Stats";
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
        <Image
          src="/images/hero/hero-home.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 -z-10 object-cover opacity-30"
          aria-hidden
        />
        <div className="absolute inset-0 -z-10 bg-hero-gradient opacity-90" aria-hidden />
        <div className="absolute inset-0 -z-10 bg-grid opacity-25" aria-hidden />
        <Container>
          <div className="relative grid items-center gap-12 py-20 md:grid-cols-2 md:py-28">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-100 ring-1 ring-inset ring-white/15 backdrop-blur">
                <Sparkles className="h-3.5 w-3.5" aria-hidden />
                {siteConfig.stats.experienceYears} ans d&apos;expérience · {siteConfig.stats.clients}+ clients
              </div>
              <h1 className="mt-5 text-4xl font-bold tracking-tight text-white text-balance md:text-5xl lg:text-6xl">
                Votre expert Télécom<br />et solutions informatiques pour entreprises
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-brand-100 text-pretty">
                Depuis plus de 18 ans, Alvecom accompagne les entreprises dans leurs
                télécommunications, réseaux et services IT. Téléphonie, fibre, communications
                unifiées, infogérance, cloud et sauvegarde — un seul partenaire, des solutions
                fiables et évolutives.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <LinkButton href="/devis" variant="accent" size="lg">
                  Demander un audit gratuit
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </LinkButton>
                <LinkButton
                  href={`tel:${siteConfig.contact.phoneE164}`}
                  variant="secondary"
                  size="lg"
                >
                  <Phone className="h-4 w-4" aria-hidden />
                  {siteConfig.contact.phone}
                </LinkButton>
              </div>
              <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-brand-100">
                <li className="inline-flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-brand-300" aria-hidden />
                  Opérateurs partenaires reconnus
                </li>
                <li className="inline-flex items-center gap-2">
                  <Clock className="h-4 w-4 text-brand-300" aria-hidden />
                  Support réactif {siteConfig.stats.sla}
                </li>
                <li className="inline-flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-brand-300" aria-hidden />
                  PME, ETI, multi-sites
                </li>
              </ul>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md shadow-[var(--shadow-lift)]">
                <div className="grid grid-cols-2 gap-4">
                  <HeroTile icon={Phone} title="Téléphonie VoIP" sub="3CX · Wildix · Teams" />
                  <HeroTile icon={Network} title="Fibre & SD-WAN" sub="Multi-sites" />
                  <HeroTile icon={MessagesSquare} title="Com. unifiées" sub="Chat · Visio · Mobile" />
                  <HeroTile icon={Cloud} title="Cloud FR" sub="Hébergement souverain" />
                </div>
                <div className="mt-4 flex items-center justify-between rounded-2xl bg-white/10 p-4 ring-1 ring-inset ring-white/10">
                  <div>
                    <div className="text-xs uppercase tracking-wider text-brand-200">Audit offert</div>
                    <div className="text-sm font-semibold text-white">Diagnostic télécom + IT</div>
                  </div>
                  <LinkButton href="/devis" variant="accent" size="sm">
                    Réserver
                  </LinkButton>
                </div>
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

      {/* STATS BAND */}
      <section className="relative overflow-hidden bg-brand-700 text-white">
        <div className="absolute inset-0 bg-grid opacity-20" aria-hidden />
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
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <LinkButton href="/contact" variant="accent" size="lg">
                Parler à un expert
              </LinkButton>
              <Link href="/ressources/faq" className="text-sm font-semibold text-brand-100 hover:text-white">
                Consulter la FAQ →
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}

function HeroTile({
  icon: Icon,
  title,
  sub,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  sub: string;
}) {
  return (
    <div className="rounded-2xl bg-white/8 p-4 ring-1 ring-inset ring-white/10 backdrop-blur">
      <Icon className="h-5 w-5 text-brand-300" aria-hidden />
      <div className="mt-3 text-sm font-semibold text-white">{title}</div>
      <div className="text-xs text-brand-100">{sub}</div>
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
