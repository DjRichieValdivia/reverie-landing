import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#16323e",
        }}
      >
        <div
          style={{
            fontSize: 104,
            fontWeight: 600,
            letterSpacing: 6,
            color: "#f7f4ee",
          }}
        >
          RÊVERIE
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 34,
            color: "#8caa9d",
          }}
        >
          Clínica de rehabilitación en Pilar
        </div>
      </div>
    ),
    { ...size },
  );
}
