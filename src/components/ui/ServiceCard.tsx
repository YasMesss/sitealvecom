import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function ServiceCard({
  href,
  title,
  description,
  icon: Icon,
  className,
}: {
  href: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative flex flex-col rounded-2xl border border-ink-200 bg-white p-6 transition-all hover:border-brand-300 hover:shadow-[var(--shadow-lift)] focus-visible:border-brand-500",
        className
      )}
    >
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-inset ring-brand-100 transition-colors group-hover:bg-brand-500 group-hover:text-white group-hover:ring-brand-500">
        <Icon className="h-6 w-6" aria-hidden />
      </div>
      <h3 className="text-lg font-semibold text-brand-700">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-600">{description}</p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition-all group-hover:gap-2.5">
        En savoir plus <ArrowRight className="h-4 w-4" aria-hidden />
      </span>
    </Link>
  );
}
