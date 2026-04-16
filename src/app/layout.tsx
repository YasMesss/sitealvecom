import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site";
import { localBusinessJsonLd } from "@/lib/seo";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Analytics, GTMNoScript } from "@/components/tracking/Analytics";
import { CookieBanner } from "@/components/tracking/CookieBanner";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  themeColor: "#0A2B4F",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.baseline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "télécom entreprise",
    "téléphonie d'entreprise",
    "VoIP",
    "communications unifiées",
    "fibre entreprise",
    "SD-WAN",
    "infogérance",
    "hébergement cloud",
    "sauvegarde entreprise",
    "intégrateur télécom",
    "Pennes-Mirabeau",
    "Marseille",
    "PACA",
  ],
  authors: [{ name: siteConfig.legalName, url: siteConfig.url }],
  creator: siteConfig.legalName,
  publisher: siteConfig.legalName,
  manifest: "/site.webmanifest",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    title: `${siteConfig.name} — ${siteConfig.baseline}`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.baseline}`,
    description: siteConfig.description,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  formatDetection: { telephone: true, email: true, address: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={inter.variable}>
      <head>
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd()) }}
        />
      </head>
      <body className="min-h-screen bg-white text-ink-900 antialiased">
        <GTMNoScript />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-brand-700 focus:shadow"
        >
          Aller au contenu principal
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
