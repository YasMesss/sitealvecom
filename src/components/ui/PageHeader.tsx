import { Breadcrumbs, type Crumb } from "./Breadcrumbs";
import { Container } from "./Container";

export function PageHeader({
  eyebrow,
  title,
  description,
  breadcrumbs,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbs: Crumb[];
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-ink-100 bg-[var(--color-muted)]">
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 80% 20%, rgba(78,143,209,0.18), transparent 70%)",
        }}
        aria-hidden
      />
      <Container>
        <div className="relative py-12 md:py-16">
          <Breadcrumbs items={breadcrumbs} />
          {eyebrow && (
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-600 ring-1 ring-inset ring-brand-100">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
              {eyebrow}
            </div>
          )}
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-brand-700 text-balance md:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-4 max-w-2xl text-lg text-ink-600 text-pretty">{description}</p>
          )}
          {children}
        </div>
      </Container>
    </section>
  );
}
