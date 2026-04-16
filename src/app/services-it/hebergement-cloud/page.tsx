import { Cloud, Headset, DatabaseBackup, Server, MapPin, Gauge } from "lucide-react";
import { ServicePage } from "@/components/page-templates/ServicePage";
import { buildMetadata } from "@/lib/seo";

const PATH = "/services-it/hebergement-cloud";

export const metadata = buildMetadata({
  title: "Hébergement Cloud en France pour entreprises",
  description:
    "Hébergez vos serveurs, applications et messagerie dans le cloud en France. Alvecom propose un hébergement performant, évolutif et supervisé 24/7.",
  path: PATH,
});

export default function Page() {
  return (
    <ServicePage
      eyebrow="Hébergement Cloud"
      title="Solutions d'hébergement cloud"
      description="Hébergez vos services dans le cloud avec des accès performants et des options de sauvegarde pour assurer la continuité de vos opérations."
      path={PATH}
      breadcrumbs={[
        { label: "Services IT", href: "/services-it" },
        { label: "Hébergement Cloud" },
      ]}
      heroImage="/images/services/cloud-rack.webp"
      heroImageAlt="Rack de serveurs dans un datacenter français"
      mediaImage="/images/services/cloud-fibre.webp"
      mediaImageAlt="Fibre optique en activité dans un datacenter"
      mediaTagline="Datacenters en France, supervision 24/7, ressources qui s'adaptent à votre charge."
      intro="Notre offre d'hébergement cloud s'appuie sur des datacenters localisés en France, avec un haut niveau de disponibilité. Nous hébergeons vos serveurs virtuels, vos applications métiers, votre messagerie et vos environnements de production. Vous gagnez en performance, en évolutivité, et vous gardez la maîtrise sur la donnée."
      features={[
        "Serveurs virtuels (VPS) et serveurs dédiés",
        "Hébergement d'applications métiers (ERP, CRM, sites web)",
        "Messagerie professionnelle (Exchange, Microsoft 365)",
        "Ressources ajustables à la demande (CPU, RAM, stockage)",
        "Monitoring 24/7 et sauvegardes incluses",
        "Datacenters en France, conformité RGPD",
      ]}
      benefits={[
        {
          icon: MapPin,
          title: "Hébergement français",
          description:
            "Vos données restent en France, chez un hébergeur tenu au droit français et conforme au RGPD.",
        },
        {
          icon: Gauge,
          title: "Performance garantie",
          description:
            "Infrastructures modernes, SSD haute performance, liens réseau redondés et supervision permanente.",
        },
        {
          icon: Server,
          title: "Évolutivité",
          description:
            "Augmentez ou réduisez les ressources en quelques minutes selon vos besoins métiers.",
        },
      ]}
      useCases={[
        "Sortie d'un parc de serveurs on-premise vieillissant",
        "Hébergement d'une application métier critique",
        "Externalisation de la messagerie professionnelle",
        "Plateforme de test/développement à la demande",
      ]}
      related={[
        {
          href: "/services-it/sauvegarde-continuite",
          title: "Sauvegarde & Continuité",
          description: "Complétez votre cloud avec des sauvegardes et un PRA.",
          icon: DatabaseBackup,
        },
        {
          href: "/services-it/infogerance-support",
          title: "Infogérance & Support",
          description: "Déléguez la gestion quotidienne de votre informatique.",
          icon: Headset,
        },
        {
          href: "/solutions-telecom/reseaux-connectivite",
          title: "Réseaux & Connectivité",
          description: "Une connectivité dédiée pour un accès optimal au cloud.",
          icon: Cloud,
        },
      ]}
      faq={[
        {
          question: "Où sont hébergées les données ?",
          answer:
            "Exclusivement dans des datacenters situés en France, chez des hébergeurs certifiés et conformes au RGPD.",
        },
        {
          question: "Peut-on migrer un serveur existant ?",
          answer:
            "Oui. Nous accompagnons la migration depuis des serveurs physiques ou virtuels existants, avec une bascule planifiée pour minimiser l'interruption.",
        },
        {
          question: "Les sauvegardes sont-elles incluses ?",
          answer:
            "Des sauvegardes quotidiennes sont incluses dans l'offre de base. Nous pouvons augmenter la fréquence, la rétention ou ajouter une sauvegarde externalisée selon vos exigences.",
        },
      ]}
    />
  );
}
