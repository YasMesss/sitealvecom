import { Headset, Cloud, DatabaseBackup, LifeBuoy, Gauge, Users } from "lucide-react";
import { ServicePage } from "@/components/page-templates/ServicePage";
import { buildMetadata } from "@/lib/seo";

const PATH = "/services-it/infogerance-support";

export const metadata = buildMetadata({
  title: "Infogérance et support informatique",
  description:
    "Alvecom assure la gestion, la maintenance et l'assistance technique de votre parc informatique. Hotline, supervision, interventions sur site.",
  path: PATH,
});

export default function Page() {
  return (
    <ServicePage
      eyebrow="Infogérance & Support"
      title="Infogérance et support informatique"
      description="Nous assurons la gestion, la maintenance et l'assistance technique de votre parc informatique, pour que vos équipes restent concentrées sur leur activité."
      path={PATH}
      breadcrumbs={[
        { label: "Services IT", href: "/services-it" },
        { label: "Infogérance & Support" },
      ]}
      heroImage="/images/services/infogerance-tech.webp"
      heroImageAlt="Équipe technique Alvecom devant des écrans de monitoring"
      mediaImage="/images/services/infogerance-monitor.webp"
      mediaImageAlt="Tableau de bord de supervision informatique en temps réel"
      mediaTagline="Hotline réactive, supervision 24/7 et tableau de bord clair sur votre parc IT."
      intro="Notre infogérance couvre l'ensemble de votre informatique professionnelle : postes de travail, serveurs, réseau, messagerie, licences, applications métiers. Vos utilisateurs bénéficient d'une hotline réactive et d'interventions rapides, et vous d'un tableau de bord clair sur l'état de votre parc."
      features={[
        "Hotline technique dédiée (téléphone, email, portail)",
        "Supervision proactive des serveurs, postes et réseau",
        "Gestion des incidents avec SLA contractuels",
        "Maintenance préventive et évolutive",
        "Gestion des licences, des utilisateurs et des accès",
        "Reporting mensuel et comité de suivi trimestriel",
      ]}
      benefits={[
        {
          icon: LifeBuoy,
          title: "Support réactif",
          description:
            "Une équipe dédiée prend en charge vos tickets et intervient selon les SLA définis avec vous.",
        },
        {
          icon: Gauge,
          title: "Performance maîtrisée",
          description:
            "Supervision proactive et maintenance préventive pour limiter les pannes et optimiser vos équipements.",
        },
        {
          icon: Users,
          title: "Vos équipes sereines",
          description:
            "Vos collaborateurs ont un interlocuteur unique, formé, disponible, qui résout vite.",
        },
      ]}
      useCases={[
        "Entreprises sans équipe IT interne qui veulent déléguer totalement",
        "DSI en sous-effectif qui souhaitent un partenaire pour le run",
        "Multi-sites ayant besoin d'un support homogène sur toute la France",
        "Migration de parc, rationalisation de licences et d'outils",
      ]}
      related={[
        {
          href: "/services-it/hebergement-cloud",
          title: "Hébergement Cloud",
          description: "Hébergement sécurisé de vos serveurs et applications.",
          icon: Cloud,
        },
        {
          href: "/services-it/sauvegarde-continuite",
          title: "Sauvegarde & Continuité",
          description: "Protégez vos données avec des sauvegardes automatisées.",
          icon: DatabaseBackup,
        },
        {
          href: "/solutions-telecom/reseaux-connectivite",
          title: "Réseaux & Connectivité",
          description: "Une infogérance efficace s'appuie sur un réseau fiable.",
          icon: Headset,
        },
      ]}
      faq={[
        {
          question: "Quels SLA proposez-vous ?",
          answer:
            "Nos SLA sont adaptés à la criticité : prise en charge sous 1 h en heures ouvrées pour les incidents bloquants, interventions sur site sous 4 h à 1 jour selon le niveau contractuel choisi.",
        },
        {
          question: "Intervenez-vous sur site ?",
          answer:
            "Oui, en région PACA en priorité, et partout en France grâce à notre réseau de techniciens partenaires. La plupart des incidents sont résolus à distance.",
        },
        {
          question: "Comment se passe l'onboarding ?",
          answer:
            "Nous réalisons un audit complet de votre parc et de vos processus, puis nous intégrons votre outillage (CMDB, ticketing, supervision) avant d'activer le service. Le run démarre généralement 2 à 4 semaines après signature.",
        },
      ]}
    />
  );
}
