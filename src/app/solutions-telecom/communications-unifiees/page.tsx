import { MessagesSquare, Phone, Network, Workflow, Video, UserCheck } from "lucide-react";
import { ServicePage } from "@/components/page-templates/ServicePage";
import { buildMetadata } from "@/lib/seo";

const PATH = "/solutions-telecom/communications-unifiees";

export const metadata = buildMetadata({
  title: "Communications unifiées (UCaaS) pour entreprises",
  description:
    "Regroupez appels, chat, visio et collaboration dans une plateforme unique. Alvecom déploie Wildix, 3CX et Microsoft Teams pour vos équipes.",
  path: PATH,
});

export default function Page() {
  return (
    <ServicePage
      eyebrow="Communications unifiées"
      title="Communications unifiées"
      description="Intégrez appels, messagerie, réunions et collaboration dans une seule plateforme pour booster l'efficacité des équipes."
      path={PATH}
      breadcrumbs={[
        { label: "Solutions Télécom", href: "/solutions-telecom" },
        { label: "Communications unifiées" },
      ]}
      heroImage="/images/services/teleph-meeting.webp"
      heroImageAlt="Équipe en réunion vidéo avec casque audio professionnel"
      mediaImage="/images/services/teleph-ip.webp"
      mediaImageAlt="Téléphone IP et écran d'application unifiée sur un bureau"
      mediaTagline="Une seule application pour appeler, chatter, partager et collaborer — au bureau ou à distance."
      intro="Les communications unifiées (UCaaS) regroupent dans une seule interface tous les outils dont vos équipes ont besoin au quotidien : téléphonie, chat, visioconférence, partage de documents, présence. Le résultat : moins d'outils à administrer, plus de productivité, et une expérience cohérente pour les collaborateurs comme pour les clients."
      features={[
        "Appels audio et vidéo HD multi-appareils",
        "Chat d'équipe et canaux thématiques",
        "Visioconférences avec partage d'écran et enregistrement",
        "Présence en temps réel et statut de disponibilité",
        "Intégrations Microsoft 365, Outlook, CRM",
        "Déploiement cloud ou hybride selon vos besoins",
      ]}
      benefits={[
        {
          icon: Workflow,
          title: "Un outil pour tout",
          description:
            "Réduisez le nombre d'applications et centralisez vos communications professionnelles.",
        },
        {
          icon: Video,
          title: "Collaboration fluide",
          description:
            "Passez d'un chat à un appel ou une visio en un clic, sans changer d'application.",
        },
        {
          icon: UserCheck,
          title: "Adoption facile",
          description:
            "Interfaces modernes et intuitives, adoption rapide par les équipes, formation minimale.",
        },
      ]}
      useCases={[
        "Entreprises qui veulent remplacer plusieurs outils par une seule plateforme",
        "Équipes hybrides (bureau + télétravail)",
        "Services clients qui gèrent des contacts multicanal",
        "Sociétés multi-sites avec besoin de collaboration inter-équipes",
      ]}
      related={[
        {
          href: "/solutions-telecom/telephonie-entreprise",
          title: "Téléphonie d'entreprise",
          description: "La téléphonie moderne au cœur de votre plateforme unifiée.",
          icon: Phone,
        },
        {
          href: "/solutions-telecom/reseaux-connectivite",
          title: "Réseaux & Connectivité",
          description: "Garantissez la qualité des communications avec une infrastructure dédiée.",
          icon: Network,
        },
        {
          href: "/services-it/hebergement-cloud",
          title: "Hébergement Cloud",
          description: "Hébergez vos services de collaboration dans le cloud.",
          icon: MessagesSquare,
        },
      ]}
      faq={[
        {
          question: "Quelle différence avec Microsoft Teams seul ?",
          answer:
            "Teams intègre chat, visio et collaboration, mais la téléphonie d'entreprise nécessite une brique opérateur (Teams Phone + trunk SIP). Nous intégrons l'ensemble pour offrir une solution complète et simple à gérer.",
        },
        {
          question: "Peut-on conserver ses numéros et son routage d'appels ?",
          answer:
            "Oui. Nous gérons la portabilité et reconfigurons le routage (SVI, files d'attente, horaires) selon vos besoins métiers.",
        },
        {
          question: "Est-ce adapté à une petite équipe ?",
          answer:
            "Absolument. Les licences sont souscrites à l'utilisateur, vous ne payez que ce que vous utilisez. Une équipe de 5 personnes peut déjà bénéficier de l'ensemble des fonctionnalités.",
        },
      ]}
    />
  );
}
