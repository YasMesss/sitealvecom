import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({
  variant = "default",
  className,
}: {
  variant?: "default" | "invert";
  className?: string;
}) {
  return (
    <Link
      href="/"
      aria-label="Alvecom — retour à l'accueil"
      className={cn("inline-flex items-center", className)}
    >
      <Image
        src="/images/logo-alvecom.png"
        alt="Alvecom"
        width={160}
        height={40}
        priority
        className={cn(
          "h-8 w-auto md:h-9",
          variant === "invert" && "brightness-0 invert"
        )}
      />
    </Link>
  );
}
