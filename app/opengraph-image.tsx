import { ImageResponse } from "next/og";

export const alt =
  "Binaya Chaudhary — Shopify App Developer and Full-Stack Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "76px",
          backgroundColor: "#111214",
          backgroundImage:
            "radial-gradient(ellipse at 82% 50%, rgba(237,73,62,.23), transparent 36%)",
          color: "#f5f5f1",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            color: "#ed493e",
            fontSize: 23,
            fontWeight: 700,
            letterSpacing: "-1px",
          }}
        >
          BC<span style={{ color: "#f5f5f1" }}>.</span>
          <span style={{ color: "#a5aaa5", fontSize: 16, fontWeight: 400 }}>
            PORTFOLIO
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 17 }}>
          <div
            style={{
              color: "#ed493e",
              fontSize: 18,
              letterSpacing: "3px",
              textTransform: "uppercase",
            }}
          >
            Shopify App Developer · Nepal
          </div>
          <div
            style={{
              maxWidth: 820,
              fontSize: 76,
              fontWeight: 700,
              letterSpacing: "-5px",
              lineHeight: 1.05,
            }}
          >
            Binaya Chaudhary
          </div>
          <div style={{ color: "#a5aaa5", fontSize: 25 }}>
            Full-Stack Engineer · React · Remix · Laravel
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "#777e79",
            fontSize: 16,
          }}
        >
          <span>Bhaktapur, Nepal</span>
          <span>binayasaurahwa@gmail.com</span>
        </div>
      </div>
    ),
    size,
  );
}
