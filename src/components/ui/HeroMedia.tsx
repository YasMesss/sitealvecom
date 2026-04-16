import Image from "next/image";
import { cn } from "@/lib/utils";

export type HeroMediaProps = {
  src: string;
  alt: string;
  priority?: boolean;
  /** Variantes d'overlay pour adapter la lisibilité au contexte */
  overlay?: "dark" | "brand" | "soft" | "none";
  /** Hauteur en utilitaires Tailwind, ex. "h-[420px] md:h-[520px]" */
  heightClassName?: string;
  /** Position de la photo (object-position), ex. "object-center" */
  positionClassName?: string;
  /** Classes additionnelles sur le wrapper */
  className?: string;
  /** Coins arrondis (par défaut 3xl pour cohérence avec le design system) */
  rounded?: boolean;
  /** Contenu superposé (texte, badges, CTA) */
  children?: React.ReactNode;
  /** Taille recommandée pour la balise <Image sizes> */
  sizes?: string;
};

/**
 * Image hero/illustrative responsive avec overlay dégradé pour garantir
 * la lisibilité du texte superposé. Utilise next/image pour l'optimisation
 * automatique (AVIF/WebP, srcset, lazy par défaut).
 */
export function HeroMedia({
  src,
  alt,
  priority = false,
  overlay = "dark",
  heightClassName = "h-[320px] md:h-[420px]",
  positionClassName = "object-center",
  className,
  rounded = true,
  children,
  sizes = "(max-width: 768px) 100vw, (max-width: 1280px) 100vw, 1600px",
}: HeroMediaProps) {
  const overlayClass =
    overlay === "dark"
      ? "bg-gradient-to-t from-ink-950/85 via-ink-950/45 to-ink-950/15"
      : overlay === "brand"
        ? "bg-gradient-to-br from-brand-900/85 via-brand-800/55 to-brand-700/25"
        : overlay === "soft"
          ? "bg-gradient-to-t from-ink-950/55 via-ink-950/15 to-transparent"
          : "";

  return (
    <div
      className={cn(
        "relative isolate w-full overflow-hidden",
        rounded && "rounded-3xl",
        heightClassName,
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={cn("object-cover", positionClassName)}
      />
      {overlay !== "none" && (
        <div className={cn("absolute inset-0", overlayClass)} aria-hidden />
      )}
      {children && (
        <div className="absolute inset-0 flex items-end p-6 md:p-10">{children}</div>
      )}
    </div>
  );
}
