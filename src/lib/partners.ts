export type Partner = {
  /** Nom commercial affiché */
  name: string;
  /** Rôle / catégorie pour la grille détaillée */
  role: string;
  /** Description courte pour la page partenaires */
  description: string;
  /** Chemin du logo SVG dans /public */
  logo: string;
  /** Site officiel du partenaire (rel="external") */
  url?: string;
};

export const partners: Partner[] = [
  {
    name: "Bouygues Telecom Entreprises",
    role: "Opérateur télécom",
    description:
      "Partenaire privilégié pour la fibre dédiée, le mobile et la voix professionnelle. Couverture nationale et engagement qualité de service.",
    logo: "/images/partners/bouygues-telecom.svg",
    url: "https://www.bouyguestelecom-entreprises.fr/",
  },
  {
    name: "Orange Business",
    role: "Opérateur télécom",
    description:
      "Couverture nationale pour la fibre dédiée, la 4G/5G professionnelle et les VPN opérateur multi-sites.",
    logo: "/images/partners/orange-business.svg",
    url: "https://www.orange-business.com/fr",
  },
  {
    name: "SFR Business",
    role: "Opérateur télécom",
    description:
      "Offres fibre, mobile, MPLS et SD-WAN pour les entreprises mono ou multi-sites.",
    logo: "/images/partners/sfr-business.svg",
    url: "https://www.sfrbusiness.fr/",
  },
  {
    name: "Wildix",
    role: "Éditeur UCaaS",
    description:
      "Solutions de communications unifiées orientées expérience utilisateur, certifiées WebRTC.",
    logo: "/images/partners/wildix.svg",
    url: "https://www.wildix.com/fr/",
  },
  {
    name: "3CX",
    role: "Éditeur PBX / UCaaS",
    description:
      "Centrex IP flexible et économique, adapté aux PME comme aux ETI multi-sites.",
    logo: "/images/partners/3cx.svg",
    url: "https://www.3cx.fr/",
  },
  {
    name: "Microsoft Teams",
    role: "Cloud & collaboration",
    description:
      "Microsoft 365, Teams Phone et écosystème collaboratif déployés et administrés par nos équipes.",
    logo: "/images/partners/microsoft-teams.svg",
    url: "https://www.microsoft.com/fr-fr/microsoft-teams/",
  },
  {
    name: "Alcatel-Lucent Enterprise",
    role: "Constructeur téléphonie",
    description:
      "Équipements de téléphonie professionnelle et solutions pour environnements exigeants (industrie, hôtellerie, santé).",
    logo: "/images/partners/alcatel-lucent-enterprise.svg",
    url: "https://www.al-enterprise.com/fr-fr",
  },
  {
    name: "OVHcloud",
    role: "Hébergement souverain",
    description:
      "Datacenters en France, conformes RGPD, pour héberger vos serveurs, applications et messagerie en toute souveraineté.",
    logo: "/images/partners/ovhcloud.svg",
    url: "https://www.ovhcloud.com/fr/",
  },
];
