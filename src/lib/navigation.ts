export type NavLink = {
  href: string;
  label: string;
  description?: string;
  children?: NavLink[];
};

export const mainNav: NavLink[] = [
  {
    href: "/solutions-telecom",
    label: "Solutions Télécom",
    children: [
      {
        href: "/solutions-telecom/telephonie-entreprise",
        label: "Téléphonie d'entreprise",
        description: "VoIP, postes fixes, mobile et softphone",
      },
      {
        href: "/solutions-telecom/reseaux-connectivite",
        label: "Réseaux & Connectivité",
        description: "Fibre, SD-WAN, VPN et interconnexions",
      },
      {
        href: "/solutions-telecom/communications-unifiees",
        label: "Communications unifiées",
        description: "Appels, chat, visio, collaboration",
      },
    ],
  },
  {
    href: "/services-it",
    label: "Services IT",
    children: [
      {
        href: "/services-it/infogerance-support",
        label: "Infogérance & Support",
        description: "Gestion de parc, hotline et maintenance",
      },
      {
        href: "/services-it/hebergement-cloud",
        label: "Hébergement Cloud",
        description: "Serveurs, applications, messagerie",
      },
      {
        href: "/services-it/sauvegarde-continuite",
        label: "Sauvegarde & Continuité",
        description: "Backup, PRA et reprise d'activité",
      },
    ],
  },
  {
    href: "/operateurs-partenaires",
    label: "Opérateurs & Partenaires",
  },
  {
    href: "/ressources",
    label: "Ressources",
    children: [
      { href: "/ressources/blog", label: "Blog & Actualités" },
      { href: "/ressources/faq", label: "FAQ" },
    ],
  },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export const footerNav = {
  solutions: [
    { href: "/solutions-telecom/telephonie-entreprise", label: "Téléphonie d'entreprise" },
    { href: "/solutions-telecom/reseaux-connectivite", label: "Réseaux & Connectivité" },
    { href: "/solutions-telecom/communications-unifiees", label: "Communications unifiées" },
  ],
  services: [
    { href: "/services-it/infogerance-support", label: "Infogérance & Support" },
    { href: "/services-it/hebergement-cloud", label: "Hébergement Cloud" },
    { href: "/services-it/sauvegarde-continuite", label: "Sauvegarde & Continuité" },
  ],
  entreprise: [
    { href: "/a-propos", label: "À propos" },
    { href: "/operateurs-partenaires", label: "Partenaires" },
    { href: "/ressources/blog", label: "Blog" },
    { href: "/ressources/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
    { href: "/devis", label: "Demander un devis" },
  ],
  legal: [
    { href: "/mentions-legales", label: "Mentions légales" },
    { href: "/politique-confidentialite", label: "Politique de confidentialité" },
    { href: "/politique-cookies", label: "Politique cookies" },
    { href: "/cgv", label: "CGV" },
  ],
};
