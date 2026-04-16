import { Phone, Network, MessagesSquare, Wallet, Zap, Users } from "lucide-react";
import { ServicePage } from "@/components/page-templates/ServicePage";
import { buildMetadata } from "@/lib/seo";

const PATH = "/solutions-telecom/telephonie-entreprise";

export const metadata = buildMetadata({
  title: "Téléphonie d'entreprise (VoIP)",
  description:
    "Solutions de téléphonie VoIP pour entreprises : postes fixes, softphone, mobile. Wildix, 3CX, Teams — installation, déploiement et support par Alvecom.",
  path: PATH,
});

export default function Page() {
  return (
    <ServicePage
      eyebrow="Téléphonie d'entreprise"
      title="Solutions de téléphonie pour entreprises"
      description="Nous proposons des solutions de téléphonie d'entreprise et de communications unifiées, utilisables sur postes fixes, applications mobiles ou navigateurs, avec chat, vidéo et partage de fichiers intégrés."
      path={PATH}
      breadcrumbs={[
        { label: "Solutions Télécom", href: "/solutions-telecom" },
        { label: "Téléphonie d'entreprise" },
      ]}
      heroImage="/images/services/teleph-ip.webp"
      heroImageAlt="Téléphone IP professionnel sur un bureau moderne"
      mediaImage="/images/services/teleph-meeting.webp"
      mediaImageAlt="Collaborateur en visioconférence avec casque audio"
      mediaTagline="Vos équipes joignables partout, sur le bon numéro, avec une qualité audio garantie."
      intro="La téléphonie d'entreprise moderne est entièrement pilotée en IP. Elle vous libère des contraintes du cuivre, réduit les coûts et ouvre l'accès à de nouvelles fonctionnalités : softphone, mobilité, intégration CRM, supervision en temps réel. Nos experts vous accompagnent du choix de la solution (Wildix, 3CX, Microsoft Teams Phone) jusqu'à son exploitation."
      features={[
        "Postes fixes IP, softphone PC/Mac et application mobile",
        "Fonctions avancées : SVI, file d'attente, enregistrement, statistiques",
        "Numéros géographiques, SDA, portabilité prise en charge",
        "Trunk SIP via opérateurs partenaires reconnus",
        "Intégration CRM, Outlook, Microsoft 365 et Teams",
        "Formation utilisateurs et support illimité",
      ]}
      benefits={[
        {
          icon: Wallet,
          title: "Jusqu'à -40% sur la facture",
          description:
            "Supprimez la maintenance lourde du RTC et rationalisez vos abonnements télécom.",
        },
        {
          icon: Zap,
          title: "Mobilité sans compromis",
          description:
            "Vos collaborateurs appellent avec leur numéro pro depuis le bureau, la maison ou en déplacement.",
        },
        {
          icon: Users,
          title: "Collaboration intégrée",
          description:
            "Chat, visio, partage de fichiers et présence regroupés dans un seul outil.",
        },
      ]}
      useCases={[
        "Entreprises qui migrent depuis un PABX vieillissant ou du cuivre",
        "Sociétés multi-sites cherchant un plan de numérotation unifié",
        "Équipes en télétravail ou hybrides qui veulent un numéro pro partout",
        "Centres de relation client avec besoin de files d'attente et statistiques",
      ]}
      related={[
        {
          href: "/solutions-telecom/reseaux-connectivite",
          title: "Réseaux & Connectivité",
          description: "Une VoIP réussie commence par un réseau de qualité.",
          icon: Network,
        },
        {
          href: "/solutions-telecom/communications-unifiees",
          title: "Communications unifiées",
          description: "Regroupez appels, chat, visio et collaboration.",
          icon: MessagesSquare,
        },
        {
          href: "/services-it/infogerance-support",
          title: "Infogérance & Support",
          description: "Externalisez la gestion complète de votre IT.",
          icon: Phone,
        },
      ]}
      faq={[
        {
          question: "Combien coûte une solution VoIP en entreprise ?",
          answer:
            "En moyenne entre 12 € et 35 € par utilisateur et par mois, tout compris (licences, trunk SIP, support). Le prix dépend des fonctionnalités, du nombre d'utilisateurs et du niveau de SLA souhaité.",
        },
        {
          question: "Peut-on garder ses numéros actuels ?",
          answer:
            "Oui, la portabilité des numéros est systématiquement assurée. Nous gérons l'ensemble des démarches avec votre opérateur actuel.",
        },
        {
          question: "Combien de temps prend le déploiement ?",
          answer:
            "Pour une PME standard, comptez 2 à 6 semaines entre la commande et la mise en production, portabilité incluse. Nous planifions la bascule en dehors des heures ouvrées pour éviter toute interruption.",
        },
        {
          question: "Quelle solution recommandez-vous : Wildix, 3CX ou Teams ?",
          answer:
            "Cela dépend de votre contexte. Wildix excelle en expérience utilisateur, 3CX offre un excellent rapport qualité/prix, Teams est idéal si vous êtes déjà pleinement Microsoft 365. Notre audit gratuit vous permet de trancher objectivement.",
        },
      ]}
    />
  );
}
