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
      <p className="text-center text-sm font-medium text-ink-500">{label}</p>
      <div className="mt-6 grid grid-cols-2 items-center gap-x-8 gap-y-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8">
        {list.map((logo) => (
          <div
            key={logo.name}
            className="flex items-center justify-center px-2"
            title={logo.name}
          >
            <Image
              src={logo.logo}
              alt={logo.name}
              width={140}
              height={36}
              className="h-9 w-auto opacity-60 grayscale transition duration-200 hover:opacity-100 hover:grayscale-0"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
