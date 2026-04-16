import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Conditions générales de vente",
  description: "Conditions générales de vente Alvecom.",
  path: "/cgv",
});

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Informations contractuelles"
        title="Conditions générales de vente"
        description="Version simplifiée. Les conditions détaillées applicables à chaque contrat sont annexées aux offres commerciales."
        breadcrumbs={[{ label: "CGV" }]}
      />
      <section className="py-12 md:py-16">
        <Container size="narrow">
          <div className="prose-brand">
            <h2>1. Objet</h2>
            <p>
              Les présentes conditions générales de vente (CGV) régissent les relations
              contractuelles entre {siteConfig.legalName} et ses clients professionnels. Elles
              s&apos;appliquent à toute prestation de services télécom ou informatique proposée par
              {" "}{siteConfig.legalName}.
            </p>

            <h2>2. Commande et devis</h2>
            <p>
              Toute prestation fait l&apos;objet d&apos;un devis préalable. La commande est
              considérée comme ferme et définitive à réception du devis signé par le client.
            </p>

            <h2>3. Tarifs et facturation</h2>
            <p>
              Les tarifs sont exprimés en euros HT. Les prestations récurrentes (abonnements,
              infogérance, hébergement) sont facturées mensuellement, trimestriellement ou
              annuellement selon le contrat. Les prestations ponctuelles sont facturées à
              l&apos;achèvement.
            </p>

            <h2>4. Délais de paiement</h2>
            <p>
              Les factures sont payables à 30 jours fin de mois, sauf accord contraire. Tout retard
              de paiement entraîne de plein droit l&apos;application de pénalités de retard au taux
              légal en vigueur et d&apos;une indemnité forfaitaire de 40 € pour frais de
              recouvrement.
            </p>

            <h2>5. Obligations des parties</h2>
            <p>
              {siteConfig.legalName} s&apos;engage à exécuter les prestations avec diligence, dans
              les règles de l&apos;art et conformément aux engagements contractuels (SLA). Le
              client s&apos;engage à fournir les informations nécessaires et à respecter les
              conditions d&apos;accès et de sécurité définies.
            </p>

            <h2>6. Responsabilité</h2>
            <p>
              La responsabilité d&apos;{siteConfig.legalName} est limitée, sauf faute lourde ou
              dolosive, au montant HT des prestations réglées par le client au cours des 12 derniers
              mois.
            </p>

            <h2>7. Données personnelles</h2>
            <p>
              Chaque partie s&apos;engage à respecter la réglementation applicable en matière de
              protection des données personnelles (RGPD).
            </p>

            <h2>8. Résiliation</h2>
            <p>
              Les conditions de résiliation sont précisées dans chaque contrat. La dénonciation doit
              être adressée par lettre recommandée avec accusé de réception en respectant le préavis
              contractuel.
            </p>

            <h2>9. Loi applicable et juridiction</h2>
            <p>
              Les présentes CGV sont soumises au droit français. Tout litige sera de la compétence
              exclusive des tribunaux du ressort du siège social d&apos;{siteConfig.legalName}.
            </p>

            <p className="text-sm text-ink-500">
              Pour toute question : <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
