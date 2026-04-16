"use client";

import { Button } from "@/components/ui/Button";
import { openCookieSettings } from "@/components/tracking/CookieBanner";

export function CookieSettingsButton() {
  return (
    <Button variant="primary" onClick={openCookieSettings}>
      Modifier mes préférences cookies
    </Button>
  );
}
