import { z } from "zod";

const phoneRegex = /^[+\d\s().-]{8,20}$/;

export const contactSchema = z.object({
  name: z.string().min(2, "Nom requis").max(100),
  company: z.string().max(120).optional().or(z.literal("")),
  email: z.string().email("Email invalide").max(150),
  phone: z.string().regex(phoneRegex, "Téléphone invalide").max(30).optional().or(z.literal("")),
  subject: z.string().min(2, "Sujet requis").max(150),
  message: z.string().min(10, "Message trop court (≥ 10 caractères)").max(4000),
  consent: z.literal(true, { errorMap: () => ({ message: "Consentement requis" }) }),
  website: z.string().max(0).optional().or(z.literal("")), // honeypot
});

export type ContactInput = z.infer<typeof contactSchema>;

export const devisSchema = z.object({
  // Étape 1
  services: z
    .array(
      z.enum([
        "telephonie",
        "reseaux",
        "communications-unifiees",
        "infogerance",
        "cloud",
        "sauvegarde",
        "mobile",
        "autre",
      ])
    )
    .min(1, "Sélectionnez au moins un besoin"),
  // Étape 2
  companySize: z.enum(["1-9", "10-49", "50-249", "250+"]),
  sites: z.enum(["1", "2-5", "6-20", "21+"]),
  urgency: z.enum(["immediat", "1-3m", "3-6m", "reflexion"]),
  budget: z.enum(["<2k", "2-10k", "10-50k", "50k+", "nc"]).optional(),
  // Étape 3
  name: z.string().min(2, "Nom requis").max(100),
  company: z.string().min(2, "Société requise").max(120),
  role: z.string().max(120).optional().or(z.literal("")),
  email: z.string().email("Email invalide").max(150),
  phone: z.string().regex(phoneRegex, "Téléphone invalide").max(30),
  city: z.string().max(120).optional().or(z.literal("")),
  message: z.string().max(4000).optional().or(z.literal("")),
  consent: z.literal(true, { errorMap: () => ({ message: "Consentement requis" }) }),
  website: z.string().max(0).optional().or(z.literal("")), // honeypot
});

export type DevisInput = z.infer<typeof devisSchema>;
