"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Cookie, X } from "lucide-react";
import { Button } from "@/components/ui/Button";

const COOKIE_NAME = "alv_consent";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 180;

type ConsentState = {
  analytics: boolean;
  ads: boolean;
  ts: number;
};

function readConsent(): ConsentState | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.split("; ").find((r) => r.startsWith(COOKIE_NAME + "="));
  if (!match) return null;
  try {
    return JSON.parse(decodeURIComponent(match.split("=")[1])) as ConsentState;
  } catch {
    return null;
  }
}

function writeConsent(state: ConsentState) {
  const value = encodeURIComponent(JSON.stringify(state));
  document.cookie = `${COOKIE_NAME}=${value}; path=/; max-age=${COOKIE_MAX_AGE}; SameSite=Lax`;
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: Record<string, unknown>[];
  }
}

function pushConsent(state: ConsentState) {
  if (typeof window === "undefined") return;
  window.gtag?.("consent", "update", {
    ad_storage: state.ads ? "granted" : "denied",
    ad_user_data: state.ads ? "granted" : "denied",
    ad_personalization: state.ads ? "granted" : "denied",
    analytics_storage: state.analytics ? "granted" : "denied",
  });
  window.dataLayer?.push({ event: "consent_update", consent: state });
}

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [details, setDetails] = useState(false);
  const [prefs, setPrefs] = useState<{ analytics: boolean; ads: boolean }>({
    analytics: false,
    ads: false,
  });

  useEffect(() => {
    const existing = readConsent();
    if (!existing) setVisible(true);
  }, []);

  useEffect(() => {
    const open = () => {
      setDetails(true);
      setVisible(true);
    };
    window.addEventListener("alv:open-cookie-settings", open);
    return () => window.removeEventListener("alv:open-cookie-settings", open);
  }, []);

  const saveAndClose = (state: ConsentState) => {
    writeConsent(state);
    pushConsent(state);
    setVisible(false);
  };

  const acceptAll = () => saveAndClose({ analytics: true, ads: true, ts: Date.now() });
  const rejectAll = () => saveAndClose({ analytics: false, ads: false, ts: Date.now() });
  const savePrefs = () =>
    saveAndClose({ analytics: prefs.analytics, ads: prefs.ads, ts: Date.now() });

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Gestion des cookies"
      aria-modal="false"
      className="fixed inset-x-3 bottom-3 z-50 mx-auto max-w-2xl rounded-2xl border border-ink-200 bg-white p-5 shadow-[var(--shadow-lift)] md:inset-x-auto md:right-6 md:bottom-6"
    >
      <button
        type="button"
        onClick={rejectAll}
        aria-label="Refuser et fermer"
        className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-lg text-ink-500 hover:bg-ink-100"
      >
        <X className="h-4 w-4" />
      </button>

      <div className="flex items-start gap-3">
        <div className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-inset ring-brand-100">
          <Cookie className="h-5 w-5" aria-hidden />
        </div>
        <div className="flex-1">
          <h2 className="text-base font-semibold text-brand-700">Votre vie privée</h2>
          <p className="mt-1 text-sm leading-relaxed text-ink-600">
            Nous utilisons des cookies pour mesurer l&apos;audience du site et améliorer votre
            expérience. Vous pouvez accepter, refuser ou personnaliser. Vos choix sont conservés
            6 mois.{" "}
            <Link href="/politique-cookies" className="font-medium text-brand-600 underline">
              En savoir plus
            </Link>
          </p>

          {details && (
            <div className="mt-4 space-y-3 rounded-xl border border-ink-200 bg-muted p-4">
              <ConsentRow
                title="Cookies essentiels"
                description="Nécessaires au fonctionnement du site (sécurité, préférences)."
                enabled
                locked
              />
              <ConsentRow
                title="Mesure d'audience"
                description="Statistiques de visite anonymisées (Google Analytics)."
                enabled={prefs.analytics}
                onToggle={(v) => setPrefs((p) => ({ ...p, analytics: v }))}
              />
              <ConsentRow
                title="Marketing / publicité"
                description="Mesure des performances publicitaires (désactivé par défaut)."
                enabled={prefs.ads}
                onToggle={(v) => setPrefs((p) => ({ ...p, ads: v }))}
              />
            </div>
          )}

          <div className="mt-4 flex flex-wrap gap-2">
            {!details ? (
              <>
                <Button variant="primary" onClick={acceptAll}>
                  Tout accepter
                </Button>
                <Button variant="outline" onClick={rejectAll}>
                  Tout refuser
                </Button>
                <Button variant="ghost" onClick={() => setDetails(true)}>
                  Personnaliser
                </Button>
              </>
            ) : (
              <>
                <Button variant="primary" onClick={savePrefs}>
                  Enregistrer mes choix
                </Button>
                <Button variant="outline" onClick={acceptAll}>
                  Tout accepter
                </Button>
                <Button variant="ghost" onClick={rejectAll}>
                  Tout refuser
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function ConsentRow({
  title,
  description,
  enabled,
  locked = false,
  onToggle,
}: {
  title: string;
  description: string;
  enabled: boolean;
  locked?: boolean;
  onToggle?: (v: boolean) => void;
}) {
  return (
    <label className="flex cursor-pointer items-start justify-between gap-4">
      <span>
        <span className="block text-sm font-semibold text-brand-700">{title}</span>
        <span className="block text-xs text-ink-500">{description}</span>
      </span>
      <input
        type="checkbox"
        checked={enabled}
        disabled={locked}
        onChange={(e) => onToggle?.(e.target.checked)}
        className="mt-1 h-4 w-4 flex-none accent-[var(--color-brand-500)]"
      />
    </label>
  );
}

/** Utility trigger to re-open the banner from anywhere (e.g. footer link). */
export function openCookieSettings() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("alv:open-cookie-settings"));
  }
}
