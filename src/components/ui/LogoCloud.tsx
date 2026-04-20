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
      <div className="mt-8 grid grid-cols-2 items-center gap-x-10 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8">
        {list.map((logo) => (
          <div
            key={logo.name}
            className="flex items-center justify-center px-2"
            title={logo.name}
          >
            <Image
              src={logo.logo}
              alt={logo.name}
              width={160}
              height={40}
              className="h-10 w-auto opacity-70 grayscale transition duration-200 hover:opacity-100 hover:grayscale-0 md:h-11"
              style={{ height: "auto" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
