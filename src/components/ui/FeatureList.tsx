import { Check } from "lucide-react";

export function FeatureList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-brand-50 text-brand-600 ring-1 ring-inset ring-brand-100">
            <Check className="h-3 w-3" aria-hidden />
          </span>
          <span className="text-ink-700 leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );
}
