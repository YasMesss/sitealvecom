export const siteConfig = {
  name: "Alvecom",
  legalName: "ALVECOM",
  siren: "481 522 621",
  baseline: "Votre expert Télécom et solutions informatiques pour entreprises",
  description:
    "Alvecom, intégrateur Télécom et prestataire IT depuis plus de 18 ans. Téléphonie d'entreprise, fibre, communications unifiées, infogérance, cloud et sauvegarde pour PME et ETI.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.alvecom.fr",
  locale: "fr_FR",
  ogImage: "/opengraph-image",
  contact: {
    email: "contact@alvecom.fr",
    phone: "04 42 31 57 97",
    phoneE164: "+33442315797",
    address: {
      street: "338 chemin des Lavandins",
      postalCode: "13170",
      city: "Les Pennes-Mirabeau",
      region: "Provence-Alpes-Côte d'Azur",
      country: "France",
      countryCode: "FR",
    },
    hours: "Lun–Ven 08:30–18:00",
    geo: { lat: 43.4109, lng: 5.3172 },
  },
  social: {
    linkedin: "https://www.linkedin.com/company/alvecom/",
  },
  stats: {
    experienceYears: 19,
    clients: 1500,
    sla: "24/7",
    satisfaction: 98,
  },
} as const;

export type SiteConfig = typeof siteConfig;
