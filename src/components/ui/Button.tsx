import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "accent";
type ButtonSize = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-700 text-white hover:bg-brand-600 active:bg-brand-800 shadow-[0_1px_0_rgba(255,255,255,0.08)_inset,0_2px_6px_rgba(10,43,79,0.25)] focus-visible:outline-brand-500",
  accent:
    "bg-accent-500 text-white hover:bg-accent-600 active:bg-accent-700 shadow-[0_1px_0_rgba(255,255,255,0.1)_inset,0_2px_8px_rgba(255,122,26,0.35)] focus-visible:outline-accent-500",
  secondary:
    "bg-white text-brand-700 hover:bg-brand-50 ring-1 ring-inset ring-brand-200 focus-visible:outline-brand-500",
  outline:
    "bg-transparent text-brand-700 ring-1 ring-inset ring-brand-300 hover:bg-brand-50 focus-visible:outline-brand-500",
  ghost: "bg-transparent text-brand-700 hover:bg-brand-50 focus-visible:outline-brand-500",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-3.5 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3.5 text-base",
};

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  type = "button",
  ...props
}: CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button type={type} className={cn(base, variants[variant], sizes[size], className)} {...props} />
  );
}

export function LinkButton({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: CommonProps & { href: string } & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
  if (isExternal) {
    return (
      <a
        href={href}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </Link>
  );
}
