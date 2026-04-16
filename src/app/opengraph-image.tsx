import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.name} — ${siteConfig.baseline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          color: "#fff",
          backgroundImage:
            "radial-gradient(ellipse 80% 60% at 70% 0%, rgba(78,143,209,0.45), transparent 60%), radial-gradient(ellipse 60% 50% at 10% 100%, rgba(30,91,168,0.55), transparent 60%), linear-gradient(180deg, #061936 0%, #0A2B4F 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 64,
              height: 64,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 14,
              background: "linear-gradient(135deg, #1E5BA8 0%, #4E8FD1 100%)",
              color: "#fff",
              fontWeight: 800,
              fontSize: 38,
            }}
          >
            A
          </div>
          <div style={{ display: "flex", fontSize: 28, fontWeight: 700, letterSpacing: -0.5 }}>
            alvecom<span style={{ color: "#4E8FD1" }}>.</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              background: "rgba(255,255,255,0.1)",
              padding: "8px 16px",
              borderRadius: 999,
              fontSize: 20,
              fontWeight: 600,
              color: "#D6E4F3",
              textTransform: "uppercase",
              letterSpacing: 2,
            }}
          >
            Télécom · Réseaux · Services IT
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 76,
              fontWeight: 800,
              letterSpacing: -2,
              lineHeight: 1.05,
              maxWidth: 1000,
            }}
          >
            {siteConfig.baseline}
          </div>
          <div style={{ display: "flex", fontSize: 28, color: "#AFC8E6", marginTop: 4 }}>
            {siteConfig.stats.experienceYears} ans d&apos;expérience · {siteConfig.stats.clients}+ clients · France
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
