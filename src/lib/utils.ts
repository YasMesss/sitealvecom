export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function formatDate(dateIso: string, locale = "fr-FR"): string {
  return new Date(dateIso).toLocaleDateString(locale, {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}
