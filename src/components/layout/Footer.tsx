import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { footerNav } from "@/lib/navigation";
import { siteConfig } from "@/lib/site";
import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-brand-800 text-brand-100">
      <div className="absolute inset-0 bg-grid opacity-20" aria-hidden />
      <Container>
        <div className="relative grid gap-10 py-14 md:grid-cols-12 md:gap-8 md:py-20">
          <div className="md:col-span-4">
            <div className="inline-block rounded-lg bg-white px-3 py-2">
              <Logo />
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-brand-100/80">
              {siteConfig.description}
            </p>

            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 flex-none text-brand-300" aria-hidden />
                <a href={`tel:${siteConfig.contact.phoneE164}`} className="hover:text-white">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 flex-none text-brand-300" aria-hidden />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-none text-brand-300" aria-hidden />
                <span>
                  {siteConfig.contact.address.street}
                  <br />
                  {siteConfig.contact.address.postalCode} {siteConfig.contact.address.city}
                </span>
              </li>
            </ul>

            <div className="mt-6 flex items-center gap-3">
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-brand-100 ring-1 ring-inset ring-white/10 hover:bg-white/10"
              >
                <Linkedin className="h-4 w-4" aria-hidden />
              </a>
            </div>
          </div>

          <nav className="md:col-span-8 grid grid-cols-2 gap-8 md:grid-cols-4" aria-label="Pied de page">
            <FooterCol title="Solutions Télécom" items={footerNav.solutions} />
            <FooterCol title="Services IT" items={footerNav.services} />
            <FooterCol title="Entreprise" items={footerNav.entreprise} />
            <FooterCol title="Légal" items={footerNav.legal} />
          </nav>
        </div>

        <div className="relative flex flex-col gap-3 border-t border-white/10 py-6 text-xs text-brand-100/70 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {siteConfig.legalName} — SIREN {siteConfig.siren}. Tous droits réservés.
          </p>
          <p>
            Site conçu et hébergé en France. <Link href="/mentions-legales" className="hover:text-white">Mentions légales</Link>
          </p>
        </div>
      </Container>
    </footer>
  );
}

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: { href: string; label: string }[];
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-wider text-white">{title}</h3>
      <ul className="mt-4 space-y-2.5 text-sm">
        {items.map((it) => (
          <li key={it.href}>
            <Link href={it.href} className="text-brand-100/80 hover:text-white">
              {it.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
