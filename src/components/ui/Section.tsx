import { cn } from "@/lib/utils";
import { Container } from "./Container";

export function Section({
  children,
  className,
  tone = "default",
  id,
  size = "default",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "default" | "muted" | "dark";
  id?: string;
  size?: "narrow" | "default" | "wide";
}) {
  const tones = {
    default: "bg-white",
    muted: "bg-[var(--color-muted)]",
    dark: "bg-brand-800 text-white",
  };
  return (
    <section id={id} className={cn("py-16 md:py-24", tones[tone], className)}>
      <Container size={size}>{children}</Container>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  invert = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  invert?: boolean;
}) {
  return (
    <div className={cn("mb-10 md:mb-14 max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow && (
        <div
          className={cn(
            "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider",
            invert
              ? "bg-white/10 text-brand-100 ring-1 ring-inset ring-white/15"
              : "bg-brand-50 text-brand-600 ring-1 ring-inset ring-brand-100"
          )}
        >
          <span className={cn("h-1.5 w-1.5 rounded-full", invert ? "bg-brand-300" : "bg-brand-500")} />
          {eyebrow}
        </div>
      )}
      <h2
        className={cn(
          "mt-4 text-3xl font-bold tracking-tight text-balance md:text-4xl lg:text-[2.5rem]",
          invert ? "text-white" : "text-brand-700"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed text-pretty",
            invert ? "text-brand-100" : "text-ink-600"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
