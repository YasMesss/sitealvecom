import Image from "next/image";
import { Phone, Mail, Calendar } from "lucide-react";
import { LinkButton } from "./Button";
import { Container } from "./Container";
import { siteConfig } from "@/lib/site";

export function CTASection({
  title = "Passons à l'action",
  description = "Un projet télécom ou IT ? Échangeons 15 minutes pour évaluer vos besoins et vous proposer la meilleure solution.",
  primaryLabel = "Demander un devis gratuit",
  primaryHref = "/devis",
  secondaryLabel = "Nous appeler",
  backgroundImage = "/images/hero/hero-cta.webp",
}: {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  backgroundImage?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-brand-900 text-white">
      <Image
        src={backgroundImage}
        alt=""
        fill
        sizes="100vw"
        className="absolute inset-0 -z-10 object-cover opacity-40"
        aria-hidden
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-900/85 via-brand-800/80 to-brand-700/70" aria-hidden />
      <div className="absolute inset-0 -z-10 bg-grid opacity-25" aria-hidden />
      <Container>
        <div className="relative py-16 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-balance text-white md:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-lg text-brand-100 text-pretty">{description}</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <LinkButton href={primaryHref} variant="accent" size="lg">
                <Calendar className="h-4 w-4" aria-hidden />
                {primaryLabel}
              </LinkButton>
              <LinkButton href={`tel:${siteConfig.contact.phoneE164}`} variant="secondary" size="lg">
                <Phone className="h-4 w-4" aria-hidden />
                {secondaryLabel} — {siteConfig.contact.phone}
              </LinkButton>
            </div>
            <p className="mt-6 inline-flex items-center gap-2 text-sm text-brand-100">
              <Mail className="h-4 w-4" aria-hidden />
              <a href={`mailto:${siteConfig.contact.email}`} className="hover:underline">
                {siteConfig.contact.email}
              </a>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
