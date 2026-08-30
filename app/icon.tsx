import { ImageResponse } from "next/og";

/* Simgenin boyutu ve türü */
export const size = { width: 32, height: 32 };
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
          background: "#0b0b0f",
          color: "#f4b740",
          fontSize: 17,
          fontWeight: 700,
          letterSpacing: "-0.5px",
          borderRadius: 7,
        }}
      >
        DK
      </div>
    ),
    size
  );
}