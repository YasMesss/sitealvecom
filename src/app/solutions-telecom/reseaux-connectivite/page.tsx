import { Network, Phone, Cloud, Globe2, ShieldCheck, Activity } from "lucide-react";
import { ServicePage } from "@/components/page-templates/ServicePage";
import { buildMetadata } from "@/lib/seo";

const PATH = "/solutions-telecom/reseaux-connectivite";

export const metadata = buildMetadata({
  title: "Réseaux & Connectivité entreprise (Fibre, SD-WAN, VPN)",
  description:
    "Fibre dédiée, SD-WAN, VPN managé, interconnexions multi-sites : Alvecom conçoit les architectures réseau qui garantissent disponibilité et qualité de service.",
  path: PATH,
});

export default function Page() {
  return (
    <ServicePage
      eyebrow="Réseaux & Connectivité"
      title="Réseaux & connectivité performants"
      description="LAN, WAN, fibres dédiées, liens redondants ou VPN managés : nous concevons des architectures réseau qui garantissent disponibilité et qualité de service."
      path={PATH}
      breadcrumbs={[
        { label: "Solutions Télécom", href: "/solutions-telecom" },
        { label: "Réseaux & Connectivité" },
      ]}
      heroImage="/images/services/operateurs-fibre.webp"
      heroImageAlt="Câbles fibre optique d'un opérateur télécom"
      mediaImage="/images/services/operateurs-tech.webp"
      mediaImageAlt="Technicien réseau intervenant sur une armoire de brassage"
      mediaTagline="Fibre, SD-WAN, secours 4G/5G : une infrastructure conçue pour ne jamais lâcher."
      intro="Votre réseau est le socle de toutes vos applications métiers, de la VoIP au cloud. Nous dimensionnons, sécurisons et exploitons des architectures qui s'adaptent à votre trafic, à vos sites et à vos contraintes de disponibilité. Fibre dédiée, SD-WAN, VPN IPsec, liens de secours 4G/5G : chaque choix est fait pour garantir la continuité de vos communications."
      features={[
        "Fibre dédiée (FTTO) et fibre mutualisée (FTTH Pro)",
        "SD-WAN multi-sites avec bascule automatique sur panne",
        "VPN managé IPsec et accès distants sécurisés",
        "Liens de secours 4G/5G pour garantir la continuité",
        "Qualité de service (QoS) pour prioriser la voix et la visio",
        "Supervision 24/7 avec alertes proactives",
      ]}
      benefits={[
        {
          icon: Globe2,
          title: "Connectivité sans frontière",
          description: "Interconnectez vos sites français et internationaux avec une qualité constante.",
        },
        {
          icon: ShieldCheck,
          title: "Résilience par conception",
          description:
            "Doublez vos liens, automatisez les bascules, intégrez des secours 4G/5G pour ne jamais vous arrêter.",
        },
        {
          icon: Activity,
          title: "Supervision proactive",
          description:
            "Nous surveillons vos liens en temps réel et intervenons avant que vous ne détectiez un incident.",
        },
      ]}
      useCases={[
        "Migration d'un MPLS coûteux vers un SD-WAN moderne",
        "Interconnexion sécurisée entre siège et agences",
        "Accès distant des collaborateurs en télétravail",
        "Connectivité dédiée pour applications critiques (ERP, VoIP, vidéo)",
      ]}
      related={[
        {
          href: "/solutions-telecom/telephonie-entreprise",
          title: "Téléphonie d'entreprise",
          description: "La VoIP exige un réseau de qualité : nous concevons les deux.",
          icon: Phone,
        },
        {
          href: "/services-it/hebergement-cloud",
          title: "Hébergement Cloud",
          description: "Rapprochez vos applications de votre réseau pour plus de performance.",
          icon: Cloud,
        },
        {
          href: "/solutions-telecom/communications-unifiees",
          title: "Communications unifiées",
          description: "Toutes vos communications sur une plateforme unique.",
          icon: Network,
        },
      ]}
      faq={[
        {
          question: "Fibre mutualisée ou fibre dédiée : que choisir ?",
          answer:
            "La fibre mutualisée (FTTH Pro) est économique et adaptée aux petites structures. La fibre dédiée (FTTO) offre des débits symétriques garantis et un SLA professionnel. Nous recommandons la fibre dédiée pour toute activité dépendante d'applications critiques.",
        },
        {
          question: "Le SD-WAN est-il adapté aux PME ?",
          answer:
            "Oui. La technologie s'est démocratisée et offre aux PME multi-sites un excellent rapport qualité/prix, avec de la résilience et de la simplicité d'administration.",
        },
        {
          question: "Quels opérateurs utilisez-vous ?",
          answer:
            "Nous travaillons principalement avec Bouygues Telecom Entreprises, Orange, SFR Business et d'autres partenaires pour couvrir tous les cas d'usage et toutes les zones.",
        },
      ]}
    />
  );
}
