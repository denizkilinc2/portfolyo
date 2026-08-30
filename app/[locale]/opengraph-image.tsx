import { ImageResponse } from "next/og";
import { diller, dilMi, type Dil } from "@/i18n/config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/* Dört dil için ayrı görsel üret */
export function generateStaticParams() {
  return diller.map((locale) => ({ locale }));
}

type OgIcerik = { unvan: string; baslikOnce: string; baslikVurgu: string; baslikSonra: string; alanlar: string[] };

const icerik: Record<Dil, OgIcerik> = {
  tr: {
    unvan: "Bilgisayar Mühendisi",
    baslikOnce: "Fikirden yayına, ürünün",
    baslikVurgu: "her katmanını",
    baslikSonra: "kuruyorum.",
    alanlar: ["Yapay Zekâ", "Gömülü Sistemler", "Mobil", "Web"],
  },
  en: {
    unvan: "Computer Engineer",
    baslikOnce: "From idea to launch, I build",
    baslikVurgu: "every layer",
    baslikSonra: "of the product.",
    alanlar: ["AI", "Embedded Systems", "Mobile", "Web"],
  },
  de: {
    unvan: "Informatiker",
    baslikOnce: "Von der Idee bis zum Launch baue ich",
    baslikVurgu: "jede Ebene",
    baslikSonra: "des Produkts.",
    alanlar: ["KI", "Embedded-Systeme", "Mobile", "Web"],
  },
  nl: {
    unvan: "Computer Engineer",
    baslikOnce: "Van idee tot lancering bouw ik",
    baslikVurgu: "elke laag",
    baslikSonra: "van het product.",
    alanlar: ["AI", "Embedded Systemen", "Mobiel", "Web"],
  },
};
export const alt = "Deniz Kılınç — Portfolio";

export default async function OgImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dil = dilMi(locale) ? locale : "tr";
  const c = icerik[dil];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0b0b0f",
          padding: "72px 80px",
          position: "relative",
        }}
      >
        {/* Arka plandaki kehribar ışık */}
        <div
          style={{
            position: "absolute",
            top: -140,
            left: -100,
            width: 560,
            height: 560,
            borderRadius: 9999,
            background: "#f4b740",
            opacity: 0.13,
            filter: "blur(120px)",
          }}
        />

        {/* Üst: isim rozeti */}
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 56,
              height: 56,
              borderRadius: 12,
              border: "1px solid #24242f",
              background: "#16161f",
              color: "#f4b740",
              fontSize: 22,
              fontWeight: 700,
            }}
          >
            DK
          </div>
          <div style={{ display: "flex", fontSize: 26, color: "#9a9aa8" }}>
            denizkilinc<span style={{ color: "#f4b740" }}>.dev</span>
          </div>
        </div>

        {/* Orta: başlık */}
        <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontSize: dil === "tr" ? 68 : 58,
              lineHeight: 1.12,
              color: "#f2f2f5",
              letterSpacing: "-2px",
              maxWidth: 960,
            }}
          >
            {c.baslikOnce}&nbsp;
            <span style={{ color: "#f4b740" }}>{c.baslikVurgu}</span>&nbsp;
            {c.baslikSonra}
          </div>

          <div style={{ display: "flex", fontSize: 28, color: "#9a9aa8" }}>
            Deniz Kılınç · {c.unvan}
          </div>
        </div>

        {/* Alt: alan şeridi */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ display: "flex", height: 1, background: "#24242f" }} />
          <div style={{ display: "flex", gap: 34, fontSize: 21, color: "#9a9aa8" }}>
            {c.alanlar.map((a) => (
              <div key={a} style={{ display: "flex" }}>
                {a}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    size
  );
}