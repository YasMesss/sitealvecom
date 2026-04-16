import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page introuvable",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-hero-gradient py-24 text-white md:py-32">
      <div className="absolute inset-0 bg-grid opacity-30" aria-hidden />
      <Container>
        <div className="relative mx-auto max-w-2xl text-center">
          <div className="text-sm font-semibold uppercase tracking-wider text-brand-200">
            Erreur 404
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white text-balance md:text-5xl">
            Cette page n&apos;existe pas ou plus
          </h1>
          <p className="mt-4 text-lg text-brand-100 text-pretty">
            La page que vous cherchez a peut-être été déplacée. Revenez à l&apos;accueil ou
            contactez-nous directement.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <LinkButton href="/" variant="accent" size="lg">
              Retour à l&apos;accueil
            </LinkButton>
            <LinkButton href="/contact" variant="secondary" size="lg">
              Nous contacter
            </LinkButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
