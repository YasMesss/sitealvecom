import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Politique de confidentialité",
  description: "Comment Alvecom collecte, utilise et protège vos données personnelles.",
  path: "/politique-confidentialite",
});

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Données personnelles"
        title="Politique de confidentialité"
        description={`Dernière mise à jour : ${new Date().toLocaleDateString("fr-FR", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        })}`}
        breadcrumbs={[{ label: "Politique de confidentialité" }]}
      />
      <section className="py-12 md:py-16">
        <Container size="narrow">
          <div className="prose-brand">
            <h2>1. Responsable du traitement</h2>
            <p>
              Le responsable du traitement des données collectées sur ce site est {siteConfig.legalName},
              dont les coordonnées sont indiquées dans les{" "}
              <a href="/mentions-legales">mentions légales</a>.
            </p>

            <h2>2. Données collectées</h2>
            <p>Nous collectons uniquement les données nécessaires aux finalités suivantes :</p>
            <ul>
              <li>
                <strong>Formulaires de contact et de devis</strong> : nom, société, email,
                téléphone, fonction, ville, message. Objectif : répondre à votre demande et vous
                adresser une proposition commerciale.
              </li>
              <li>
                <strong>Cookies de mesure d&apos;audience</strong> : adresse IP anonymisée, pages
                consultées, durée de visite. Objectif : mesurer l&apos;audience et améliorer le
                site. Ces cookies ne sont déposés qu&apos;après votre consentement.
              </li>
            </ul>

            <h2>3. Base légale</h2>
            <ul>
              <li>
                <strong>Intérêt légitime</strong> pour répondre à vos demandes de contact et de
                devis.
              </li>
              <li><strong>Consentement</strong> pour les cookies non essentiels.</li>
              <li>
                <strong>Obligation contractuelle</strong> pour l&apos;exécution des prestations
                souscrites.
              </li>
            </ul>

            <h2>4. Destinataires</h2>
            <p>
              Vos données sont destinées uniquement aux équipes commerciales et techniques
              d&apos;{siteConfig.legalName}. Certaines données peuvent être transmises à nos
              sous-traitants (hébergeur, outils de messagerie transactionnelle comme Resend) dans le
              strict cadre de l&apos;exécution de leurs missions.
            </p>

            <h2>5. Transferts hors UE</h2>
            <p>
              Si un transfert hors Union européenne devait intervenir, il serait encadré par les
              clauses contractuelles types de la Commission européenne.
            </p>

            <h2>6. Durée de conservation</h2>
            <ul>
              <li>Demandes commerciales : 3 ans à compter du dernier contact.</li>
              <li>Données clients : pendant la durée du contrat + 5 ans.</li>
              <li>Cookies : 6 mois maximum.</li>
            </ul>

            <h2>7. Vos droits</h2>
            <p>
              Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification,
              d&apos;effacement, de limitation, de portabilité, et d&apos;opposition au traitement
              de vos données. Pour exercer ces droits, écrivez à
              <a href={`mailto:${siteConfig.contact.email}`}> {siteConfig.contact.email}</a>.
              Vous pouvez également introduire une réclamation auprès de la CNIL (
              <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">
                www.cnil.fr
              </a>
              ).
            </p>

            <h2>8. Sécurité</h2>
            <p>
              Nous mettons en œuvre les mesures techniques et organisationnelles nécessaires pour
              protéger vos données (chiffrement TLS, contrôle d&apos;accès, journalisation,
              sauvegardes).
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
