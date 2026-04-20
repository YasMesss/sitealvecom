import Image from "next/image";
import { partners as defaultPartners, type Partner } from "@/lib/partners";

export type LogoCloudItem = Pick<Partner, "name" | "logo">;

export function LogoCloud({
  items,
  label = "Ils nous font confiance",
}: {
  /** Sous-ensemble de partenaires à afficher. Par défaut: tous. */
  items?: LogoCloudItem[];
  label?: string;
}) {
  const list = items ?? defaultPartners;
  return (
    <div>
      <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">
        {label}
      </p>
      <div className="mt-10 grid grid-cols-2 items-center gap-x-10 gap-y-12 sm:grid-cols-4 lg:gap-x-12">
        {list.map((logo) => (
          <div
            key={logo.name}
            className="relative flex h-16 w-full items-center justify-center md:h-20"
            title={logo.name}
          >
            <Image
              src={logo.logo}
              alt={logo.name}
              fill
              sizes="(max-width: 640px) 45vw, (max-width: 1024px) 22vw, 22vw"
              className="object-contain opacity-80 grayscale transition duration-200 hover:opacity-100 hover:grayscale-0"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
