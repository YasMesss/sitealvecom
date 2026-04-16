import { Phone, Network, MessagesSquare } from "lucide-react";
import { HubPage } from "@/components/page-templates/HubPage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Solutions Télécom pour entreprises",
  description:
    "Téléphonie VoIP, fibre, SD-WAN, communications unifiées : Alvecom conçoit et déploie les solutions télécom qui fiabilisent vos communications.",
  path: "/solutions-telecom",
});

export default function Page() {
  return (
    <HubPage
      eyebrow="Solutions Télécom"
      title="Des télécommunications fiables, performantes et évolutives"
      description="Alvecom conçoit et déploie des solutions télécom adaptées aux besoins des entreprises, quels que soient leur taille et leur environnement."
      breadcrumbs={[{ label: "Solutions Télécom" }]}
      heroImage="/images/services/teleph-meeting.webp"
      heroImageAlt="Équipe utilisant les solutions de téléphonie et collaboration Alvecom"
      intro="Nous vous accompagnons sur l'ensemble de la chaîne télécom : choix de l'opérateur, architecture réseau, équipements, déploiement sur site et supervision. Notre objectif : rendre vos communications fluides, sécurisées et simples à piloter au quotidien."
      valueProps={[
        "Opérateurs partenaires reconnus : Bouygues Telecom, Orange, SFR Business",
        "Architectures multi-sites pensées pour la disponibilité",
        "Expertise VoIP, Wildix, 3CX, Microsoft Teams",
        "Interlocuteur unique pour les commandes, le déploiement et l'exploitation",
        "Supervision proactive et SLA contractuels",
      ]}
      services={[
        {
          href: "/solutions-telecom/telephonie-entreprise",
          title: "Téléphonie d'entreprise",
          description:
            "Solutions VoIP, postes fixes, softphone et mobile avec une expérience unifiée.",
          icon: Phone,
        },
        {
          href: "/solutions-telecom/reseaux-connectivite",
          title: "Réseaux & Connectivité",
          description:
            "Fibre dédiée, SD-WAN, VPN managé et interconnexions multi-sites.",
          icon: Network,
        },
        {
          href: "/solutions-telecom/communications-unifiees",
          title: "Communications unifiées",
          description:
            "Appels, chat, visio et collaboration centralisés sur une plateforme.",
          icon: MessagesSquare,
        },
      ]}
    />
  );
}
