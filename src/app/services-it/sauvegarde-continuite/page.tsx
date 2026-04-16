import { DatabaseBackup, Cloud, Headset, RefreshCw, ShieldCheck, Clock } from "lucide-react";
import { ServicePage } from "@/components/page-templates/ServicePage";
import { buildMetadata } from "@/lib/seo";

const PATH = "/services-it/sauvegarde-continuite";

export const metadata = buildMetadata({
  title: "Sauvegarde de données et continuité d'activité",
  description:
    "Sauvegarde automatisée, plan de reprise (PRA) et continuité (PCA) : Alvecom protège vos données et garantit la reprise rapide de vos services.",
  path: PATH,
});

export default function Page() {
  return (
    <ServicePage
      eyebrow="Sauvegarde & Continuité"
      title="Sauvegarde des données et continuité"
      description="Des solutions de sauvegarde et de restauration pour protéger vos informations essentielles et garantir la reprise rapide de vos services en cas d'incident."
      path={PATH}
      breadcrumbs={[
        { label: "Services IT", href: "/services-it" },
        { label: "Sauvegarde & Continuité" },
      ]}
      heroImage="/images/services/sauvegarde-baies.webp"
      heroImageAlt="Baies de stockage pour la sauvegarde de données d'entreprise"
      mediaImage="/images/services/sauvegarde-secure.webp"
      mediaImageAlt="Concept de sécurité et de protection des données"
      mediaTagline="Sauvegardes automatisées, externalisées et testées : la garantie d'une reprise rapide."
      intro="Votre activité repose sur vos données. Une panne matérielle, une erreur humaine ou un sinistre peuvent mettre à l'arrêt votre entreprise pendant plusieurs jours. Nos solutions de sauvegarde automatisée et de continuité d'activité (PCA / PRA) vous garantissent une reprise rapide, avec des objectifs de restauration (RTO / RPO) définis contractuellement."
      features={[
        "Sauvegarde automatisée des serveurs, postes et applications",
        "Sauvegardes externalisées en datacenters distincts",
        "Plans de reprise d'activité (PRA) et de continuité (PCA)",
        "Tests de restauration réguliers",
        "Rétention longue durée configurable (30 jours à 7 ans)",
        "Chiffrement des données en transit et au repos",
      ]}
      benefits={[
        {
          icon: ShieldCheck,
          title: "Vos données protégées",
          description:
            "Des copies multiples, externalisées et chiffrées pour résister à tous les incidents.",
        },
        {
          icon: RefreshCw,
          title: "Reprise rapide",
          description:
            "Restauration granulaire fichier ou complète d'un serveur en quelques heures selon le contrat.",
        },
        {
          icon: Clock,
          title: "RTO/RPO maîtrisés",
          description:
            "Nous définissons ensemble vos objectifs de reprise (RTO) et de perte de données (RPO).",
        },
      ]}
      useCases={[
        "Protection d'une base ERP/CRM critique",
        "Sauvegarde externalisée en complément d'un stockage local",
        "Plan de reprise d'activité sur un site distant",
        "Sauvegarde de la messagerie Microsoft 365",
      ]}
      related={[
        {
          href: "/services-it/hebergement-cloud",
          title: "Hébergement Cloud",
          description: "Hébergez les cibles de sauvegarde dans un cloud souverain.",
          icon: Cloud,
        },
        {
          href: "/services-it/infogerance-support",
          title: "Infogérance & Support",
          description: "Externalisez la gestion de vos sauvegardes et de leur supervision.",
          icon: Headset,
        },
        {
          href: "/solutions-telecom/reseaux-connectivite",
          title: "Réseaux & Connectivité",
          description: "Des liens fiables pour des sauvegardes rapides et sans impact.",
          icon: DatabaseBackup,
        },
      ]}
      faq={[
        {
          question: "Quelle différence entre sauvegarde, PRA et PCA ?",
          answer:
            "La sauvegarde protège vos données. Le PRA (Plan de Reprise d'Activité) définit comment redémarrer votre système après un incident. Le PCA (Plan de Continuité d'Activité) permet de maintenir l'activité sans interruption. Les trois sont complémentaires.",
        },
        {
          question: "À quelle fréquence faut-il sauvegarder ?",
          answer:
            "Au minimum quotidiennement. Pour les bases critiques, nous recommandons des sauvegardes horaires voire en continu. Nous définissons la fréquence selon vos RPO (perte de données maximale tolérée).",
        },
        {
          question: "Testez-vous les sauvegardes ?",
          answer:
            "Oui, les tests de restauration sont inclus dans nos contrats. Une sauvegarde non testée n'en est pas une.",
        },
      ]}
    />
  );
}
