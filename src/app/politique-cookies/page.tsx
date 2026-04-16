import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { CookieSettingsButton } from "@/components/tracking/CookieSettingsButton";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Politique cookies",
  description: "Quels cookies sont utilisés sur le site Alvecom et comment les gérer.",
  path: "/politique-cookies",
});

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Cookies"
        title="Politique cookies"
        description="Quels cookies nous utilisons et comment les gérer."
        breadcrumbs={[{ label: "Politique cookies" }]}
      />
      <section className="py-12 md:py-16">
        <Container size="narrow">
          <div className="prose-brand">
            <h2>Qu&apos;est-ce qu&apos;un cookie ?</h2>
            <p>
              Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, mobile,
              tablette) lors de la visite d&apos;un site. Il permet notamment de mémoriser vos
              préférences ou de mesurer l&apos;audience.
            </p>

            <h2>Quels cookies utilisons-nous ?</h2>
            <ul>
              <li>
                <strong>Cookies essentiels</strong> : nécessaires au fonctionnement du site
                (navigation, sécurité, mémorisation de votre choix de consentement). Ils ne
                nécessitent pas votre consentement.
              </li>
              <li>
                <strong>Mesure d&apos;audience</strong> : Google Analytics 4, uniquement après votre
                accord explicite. Données anonymisées.
              </li>
              <li>
                <strong>Marketing / publicité</strong> : désactivés par défaut, activés seulement si
                vous le souhaitez.
              </li>
            </ul>

            <h2>Gérer mes préférences</h2>
            <p>
              Vous pouvez à tout moment revenir sur vos choix en cliquant sur le bouton ci-dessous.
            </p>

            <p>
              <CookieSettingsButton />
            </p>

            <h2>Durée de conservation</h2>
            <p>Votre choix de consentement est conservé pendant 6 mois maximum.</p>

            <h2>Vous souhaitez en savoir plus ?</h2>
            <p>
              Pour plus d&apos;informations, consultez notre{" "}
              <a href="/politique-confidentialite">politique de confidentialité</a> ou le site de la
              CNIL :{" "}
              <a href="https://www.cnil.fr/fr/cookies-et-autres-traceurs" target="_blank" rel="noopener noreferrer">
                cnil.fr
              </a>
              .
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
