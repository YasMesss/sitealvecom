import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0A2B4F 0%, #1E5BA8 100%)",
          color: "#fff",
          fontSize: 36,
          fontWeight: 800,
          letterSpacing: -1,
          borderRadius: 12,
        }}
      >
        A
      </div>
    ),
    { ...size }
  );
}
