export function Stats({
  items,
  invert = false,
}: {
  items: { value: string; label: string }[];
  invert?: boolean;
}) {
  return (
    <dl
      className={`grid grid-cols-2 gap-6 md:grid-cols-4 ${
        invert ? "text-white" : "text-brand-700"
      }`}
    >
      {items.map((it) => (
        <div key={it.label} className="flex flex-col">
          <dt className={`text-sm ${invert ? "text-brand-100" : "text-ink-500"}`}>{it.label}</dt>
          <dd className="mt-1 text-3xl font-bold tracking-tight md:text-4xl">{it.value}</dd>
        </div>
      ))}
    </dl>
  );
}
