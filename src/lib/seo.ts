import type { Metadata } from "next";
import { siteConfig } from "./site";

export function buildMetadata({
  title,
  description,
  path = "/",
  images,
  noIndex = false,
}: {
  title: string;
  description: string;
  path?: string;
  images?: string[];
  noIndex?: boolean;
}): Metadata {
  const url = new URL(path, siteConfig.url).toString();
  const ogImages = images ?? [`${siteConfig.url}/opengraph-image`];
  const fullTitle = title.includes(siteConfig.name) ? title : `${title} | ${siteConfig.name}`;

  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: ogImages.map((img) => ({ url: img, width: 1200, height: 630, alt: fullTitle })),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: ogImages,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
        },
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logo-alvecom.png`,
    image: `${siteConfig.url}/opengraph-image`,
    description: siteConfig.description,
    telephone: siteConfig.contact.phoneE164,
    email: siteConfig.contact.email,
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address.street,
      postalCode: siteConfig.contact.address.postalCode,
      addressLocality: siteConfig.contact.address.city,
      addressRegion: siteConfig.contact.address.region,
      addressCountry: siteConfig.contact.address.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.contact.geo.lat,
      longitude: siteConfig.contact.geo.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:30",
        closes: "18:00",
      },
    ],
    sameAs: [siteConfig.social.linkedin],
    areaServed: { "@type": "Country", name: "France" },
  } as const;
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  } as const;
}

export function serviceJsonLd({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: { "@id": `${siteConfig.url}/#organization` },
    areaServed: { "@type": "Country", name: "France" },
    url: `${siteConfig.url}${path}`,
  } as const;
}

export function faqJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  } as const;
}
