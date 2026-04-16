import { PageHeader } from "@/components/ui/PageHeader";
import { Section, SectionHeading } from "@/components/ui/Section";
import { FAQ } from "@/components/ui/FAQ";
import { CTASection } from "@/components/ui/CTASection";
import { buildMetadata } from "@/lib/seo";
import { faqJsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "FAQ — Questions fréquentes télécom et IT",
  description:
    "Réponses aux questions les plus fréquentes sur nos services télécom et informatiques : téléphonie, fibre, SD-WAN, infogérance, cloud, sauvegarde.",
  path: "/ressources/faq",
});

const GENERAL = [
  {
    question: "Où est basée Alvecom ? Intervenez-vous partout en France ?",
    answer:
      "Notre siège est aux Pennes-Mirabeau (13), près de Marseille. Nous intervenons sur toute la France en direct et via notre réseau de techniciens partenaires. Nos clients sont répartis dans toute la région PACA et au national.",
  },
  {
    question: "Travaillez-vous avec les TPE, PME et ETI ?",
    answer:
      "Oui. Nos offres s'adaptent aux TPE, PME et ETI, avec une expertise particulière sur les structures de 10 à 500 collaborateurs, mono ou multi-sites.",
  },
  {
    question: "Quel est votre délai de réponse sur une demande ?",
    answer:
      "Nous revenons vers vous sous 24 h ouvrées pour toute demande de contact ou de devis. Une première qualification a généralement lieu le jour même.",
  },
];

const TELECOM = [
  {
    question: "Que devient ma téléphonie avec la fin du RTC ?",
    answer:
      "Le RTC est progressivement fermé. Toute entreprise doit migrer vers une téléphonie IP (VoIP). Nous accompagnons cette bascule en garantissant la portabilité des numéros et la continuité du service.",
  },
  {
    question: "Peut-on mixer fibre et 4G/5G pour plus de résilience ?",
    answer:
      "Oui, et c'est une approche que nous recommandons pour les sites critiques. Le lien 4G/5G sert de secours automatique en cas de coupure de la fibre, avec une bascule transparente grâce au SD-WAN.",
  },
  {
    question: "Combien de temps prend la mise en service d'une fibre dédiée ?",
    answer:
      "Comptez 6 à 12 semaines selon l'éligibilité du site et l'opérateur choisi. Pour une fibre mutualisée (FTTH Pro), les délais sont souvent plus courts (2 à 4 semaines).",
  },
];

const IT = [
  {
    question: "Quelle est la différence entre infogérance et support ?",
    answer:
      "Le support répond aux demandes des utilisateurs (hotline, tickets). L'infogérance est plus large : elle inclut la supervision, la maintenance préventive, la gestion des équipements, des licences, des accès et l'évolution de l'infrastructure.",
  },
  {
    question: "Peut-on démarrer par un simple contrat de support ?",
    answer:
      "Absolument. Beaucoup de nos clients commencent par du support puis élargissent progressivement vers une infogérance complète.",
  },
  {
    question: "Les sauvegardes sont-elles testées ?",
    answer:
      "Oui, les tests de restauration sont inclus dans nos contrats de sauvegarde. Une sauvegarde non testée ne doit pas être considérée comme fiable.",
  },
];

const ALL = [...GENERAL, ...TELECOM, ...IT];

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(ALL)) }}
      />
      <PageHeader
        eyebrow="FAQ"
        title="Foire aux questions"
        description="Les réponses aux questions que nos clients nous posent le plus souvent. Vous ne trouvez pas ? Contactez-nous, nous répondons sous 24 h."
        breadcrumbs={[
          { label: "Ressources", href: "/ressources" },
          { label: "FAQ" },
        ]}
      />

      <Section size="narrow">
        <SectionHeading eyebrow="Général" title="À propos d'Alvecom" />
        <FAQ items={GENERAL} />
      </Section>

      <Section size="narrow" tone="muted">
        <SectionHeading eyebrow="Télécom" title="Téléphonie, fibre et réseaux" />
        <FAQ items={TELECOM} />
      </Section>

      <Section size="narrow">
        <SectionHeading eyebrow="IT" title="Infogérance, cloud et sauvegarde" />
        <FAQ items={IT} />
      </Section>

      <CTASection />
    </>
  );
}
