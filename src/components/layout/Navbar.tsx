"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { mainNav, type NavLink } from "@/lib/navigation";
import { siteConfig } from "@/lib/site";
import { Logo } from "@/components/ui/Logo";
import { LinkButton } from "@/components/ui/Button";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all",
        scrolled
          ? "border-b border-ink-200 bg-white/90 backdrop-blur-md"
          : "border-b border-transparent bg-white"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:gap-4 sm:px-5 md:h-20 lg:gap-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Navigation principale">
          {mainNav.map((item) => (
            <NavItem key={item.href} item={item} pathname={pathname} />
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${siteConfig.contact.phoneE164}`}
            className="hidden items-center gap-1.5 whitespace-nowrap text-sm font-semibold text-brand-700 hover:text-brand-500 xl:inline-flex"
            data-event="nav_phone_click"
          >
            <Phone className="h-4 w-4" aria-hidden />
            {siteConfig.contact.phone}
          </a>
          <a
            href={`tel:${siteConfig.contact.phoneE164}`}
            aria-label={`Nous appeler au ${siteConfig.contact.phone}`}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-brand-700 ring-1 ring-inset ring-ink-200 hover:bg-brand-50 xl:hidden"
            data-event="nav_phone_click"
          >
            <Phone className="h-4 w-4" aria-hidden />
          </a>
          <LinkButton href="/devis" variant="accent" size="md" className="whitespace-nowrap">
            Demander un devis
          </LinkButton>
        </div>

        <button
          type="button"
          onClick={() => setOpen((s) => !s)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-brand-700 ring-1 ring-inset ring-ink-200 hover:bg-brand-50 lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <>
          <button
            type="button"
            aria-label="Fermer le menu"
            onClick={() => setOpen(false)}
            className="fixed inset-x-0 bottom-0 top-16 z-30 bg-ink-900/40 backdrop-blur-sm lg:hidden"
          />
          <div
            id="mobile-menu"
            className="fixed inset-x-0 top-16 z-40 max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-ink-200 bg-white shadow-[var(--shadow-lift)] lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-4 py-5 sm:px-5 sm:py-6" aria-label="Navigation mobile">
              {mainNav.map((item) => (
                <MobileNavItem key={item.href} item={item} pathname={pathname} />
              ))}
              <div className="mt-4 flex flex-col gap-2 border-t border-ink-200 pt-4">
                <LinkButton href="/devis" variant="accent" size="lg" className="w-full">
                  Demander un devis
                </LinkButton>
                <LinkButton
                  href={`tel:${siteConfig.contact.phoneE164}`}
                  variant="outline"
                  size="lg"
                  className="w-full"
                >
                  <Phone className="h-4 w-4" aria-hidden /> {siteConfig.contact.phone}
                </LinkButton>
              </div>
            </nav>
          </div>
        </>
      )}
    </header>
  );
}

function NavItem({ item, pathname }: { item: NavLink; pathname: string }) {
  const active = pathname === item.href || pathname.startsWith(item.href + "/");
  if (!item.children) {
    return (
      <Link
        href={item.href}
        className={cn(
          "whitespace-nowrap rounded-lg px-2.5 py-2 text-sm font-medium transition-colors hover:bg-brand-50 hover:text-brand-700",
          active ? "text-brand-700" : "text-ink-700"
        )}
      >
        {item.label}
      </Link>
    );
  }
  return (
    <div className="group relative">
      <button
        type="button"
        className={cn(
          "inline-flex items-center gap-1 whitespace-nowrap rounded-lg px-2.5 py-2 text-sm font-medium transition-colors hover:bg-brand-50 hover:text-brand-700",
          active ? "text-brand-700" : "text-ink-700"
        )}
        aria-haspopup="menu"
      >
        {item.label}
        <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" aria-hidden />
      </button>
      <div className="invisible absolute left-0 top-full z-50 w-80 translate-y-1 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
        <div className="mt-2 overflow-hidden rounded-2xl border border-ink-200 bg-white p-2 shadow-[var(--shadow-lift)]">
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className="block rounded-xl px-3 py-2.5 hover:bg-brand-50"
            >
              <div className="text-sm font-semibold text-brand-700">{child.label}</div>
              {child.description && (
                <div className="text-xs text-ink-500">{child.description}</div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileNavItem({ item, pathname }: { item: NavLink; pathname: string }) {
  const active = pathname === item.href || pathname.startsWith(item.href + "/");
  return (
    <div>
      <Link
        href={item.href}
        className={cn(
          "block rounded-xl px-3 py-3 text-base font-semibold",
          active ? "bg-brand-50 text-brand-700" : "text-ink-800"
        )}
      >
        {item.label}
      </Link>
      {item.children && (
        <div className="ml-3 mt-1 flex flex-col border-l border-ink-200 pl-3">
          {item.children.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="rounded-lg px-3 py-2 text-sm text-ink-600 hover:bg-brand-50 hover:text-brand-700"
            >
              {c.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
