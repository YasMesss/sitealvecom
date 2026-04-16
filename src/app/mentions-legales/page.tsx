import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Mentions légales",
  description: "Mentions légales du site Alvecom.",
  path: "/mentions-legales",
});

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Informations légales"
        title="Mentions légales"
        breadcrumbs={[{ label: "Mentions légales" }]}
      />
      <section className="py-12 md:py-16">
        <Container size="narrow">
          <div className="prose-brand">
            <h2>Éditeur du site</h2>
            <p>
              <strong>{siteConfig.legalName}</strong>
              <br />
              SIREN : {siteConfig.siren}
              <br />
              Adresse : {siteConfig.contact.address.street}, {siteConfig.contact.address.postalCode}{" "}
              {siteConfig.contact.address.city}
              <br />
              Téléphone : {siteConfig.contact.phone}
              <br />
              Email : {siteConfig.contact.email}
            </p>

            <h2>Directeur de la publication</h2>
            <p>Le représentant légal d&apos;{siteConfig.legalName}.</p>

            <h2>Hébergement</h2>
            <p>
              Le site est hébergé sur un serveur dédié sous contrôle de l&apos;éditeur.
              Les coordonnées de l&apos;hébergeur peuvent être obtenues sur simple demande à
              contact@alvecom.fr.
            </p>

            <h2>Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble des éléments présents sur ce site (textes, images, logos, graphismes)
              sont protégés par le droit d&apos;auteur et sont la propriété exclusive
              d&apos;{siteConfig.legalName}, sauf mention contraire. Toute reproduction,
              représentation, modification ou adaptation totale ou partielle est interdite sans
              autorisation préalable écrite.
            </p>

            <h2>Responsabilité</h2>
            <p>
              {siteConfig.legalName} s&apos;efforce d&apos;assurer au mieux l&apos;exactitude des
              informations diffusées sur ce site et se réserve le droit d&apos;en corriger le
              contenu à tout moment et sans préavis. Toutefois, {siteConfig.legalName} ne peut
              garantir l&apos;exactitude, la précision ou l&apos;exhaustivité des informations mises
              à disposition sur ce site.
            </p>

            <h2>Données personnelles</h2>
            <p>
              Pour tout ce qui concerne vos données personnelles, merci de consulter notre{" "}
              <a href="/politique-confidentialite">politique de confidentialité</a>.
            </p>

            <h2>Cookies</h2>
            <p>
              Pour en savoir plus sur l&apos;utilisation des cookies, consultez notre{" "}
              <a href="/politique-cookies">politique cookies</a>.
            </p>

            <h2>Droit applicable</h2>
            <p>
              Les présentes mentions légales sont soumises au droit français. En cas de litige, les
              tribunaux français seront seuls compétents.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
