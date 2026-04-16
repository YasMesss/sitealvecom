import { Headset, Cloud, DatabaseBackup } from "lucide-react";
import { HubPage } from "@/components/page-templates/HubPage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Services IT pour entreprises",
  description:
    "Infogérance, hébergement cloud, sauvegarde et continuité d'activité : Alvecom prend en charge votre informatique pour vous faire gagner en performance et en disponibilité.",
  path: "/services-it",
});

export default function Page() {
  return (
    <HubPage
      eyebrow="Services IT"
      title="Votre informatique sous contrôle, au quotidien"
      description="Nous assurons la gestion, la supervision et l'évolution de vos infrastructures informatiques pour que vos équipes restent concentrées sur leur métier."
      breadcrumbs={[{ label: "Services IT" }]}
      heroImage="/images/services/cloud-fibre.webp"
      heroImageAlt="Datacenter et infrastructure cloud gérée par Alvecom"
      intro="De l'infogérance à l'hébergement cloud en passant par la sauvegarde, nos services IT sont pensés comme une extension de votre équipe. Nous apportons l'expertise, les outils et la réactivité ; vous gardez la maîtrise et la sérénité."
      valueProps={[
        "Supervision 24/7 et alertes proactives",
        "Hotline et interventions rapides (sur site et à distance)",
        "Hébergement cloud en France, surveillé et sauvegardé",
        "Plans de reprise et de continuité d'activité (PRA / PCA)",
        "Gestion évolutive du parc, des licences et des utilisateurs",
      ]}
      services={[
        {
          href: "/services-it/infogerance-support",
          title: "Infogérance & Support",
          description:
            "Gestion du parc, hotline utilisateurs, maintenance proactive et supervision.",
          icon: Headset,
        },
        {
          href: "/services-it/hebergement-cloud",
          title: "Hébergement Cloud",
          description:
            "Serveurs, applications et messagerie hébergés en France, performants et surveillés.",
          icon: Cloud,
        },
        {
          href: "/services-it/sauvegarde-continuite",
          title: "Sauvegarde & Continuité",
          description:
            "Backup automatisé, PRA et reprise d'activité pour garantir votre continuité.",
          icon: DatabaseBackup,
        },
      ]}
    />
  );
}
