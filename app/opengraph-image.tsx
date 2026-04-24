import { ImageResponse } from "next/og";
import { content } from "@/lib/content";

export const alt = "Hero du portfolio de Guilhem Albus";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "#050a14",
          color: "#ffffff",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(34,211,238,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.12) 1px, transparent 1px)",
            backgroundSize: "54px 54px",
            opacity: 0.6,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 72% 18%, rgba(168,85,247,0.38), transparent 34%), radial-gradient(circle at 18% 74%, rgba(34,211,238,0.32), transparent 34%), linear-gradient(135deg, rgba(5,10,20,0.25), rgba(5,10,20,0.92))",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 56,
            top: 44,
            fontSize: 210,
            fontWeight: 800,
            lineHeight: 0.9,
            color: "transparent",
            WebkitTextStroke: "2px rgba(34,211,238,0.2)",
          }}
        >
          GA
        </div>
        <div
          style={{
            position: "relative",
            zIndex: 2,
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "72px 86px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              color: "#22d3ee",
              fontSize: 24,
              letterSpacing: 5,
              textTransform: "uppercase",
              marginBottom: 30,
            }}
          >
            <span
              style={{
                width: 12,
                height: 12,
                borderRadius: 999,
                background: "#22d3ee",
                boxShadow: "0 0 24px #22d3ee",
              }}
            />
            {content.experience.apprenticeshipLabel.fr} · {content.experience.period.fr}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 122,
              fontWeight: 800,
              lineHeight: 0.9,
              letterSpacing: 0,
              textTransform: "uppercase",
            }}
          >
            <span>Guilhem</span>
            <span style={{ color: "#22d3ee" }}>Albus</span>
          </div>
          <div
            style={{
              marginTop: 34,
              maxWidth: 820,
              color: "#cbd5e1",
              fontSize: 34,
              lineHeight: 1.25,
            }}
          >
            {content.identity.roleHeadline.fr}
          </div>
          <div
            style={{
              marginTop: 18,
              display: "flex",
              gap: 12,
              color: "#94a3b8",
              fontSize: 22,
            }}
          >
            {content.quickFacts.fr.map((fact) => (
              <span
                key={fact}
                style={{
                  border: "1px solid rgba(255,255,255,0.2)",
                  borderRadius: 999,
                  padding: "8px 14px",
                  background: "rgba(7,14,28,0.72)",
                }}
              >
                {fact}
              </span>
            ))}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
