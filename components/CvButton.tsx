"use client";

import { useRef, useState } from "react";
import Magnetic from "./Magnetic";
import { cv } from "@/data/site";
import { getSozluk } from "@/i18n/sozluk";
import type { Dil } from "@/i18n/config";

type Props = {
  /* "normal" = çerçeveli buton (Hakkımda için)
     "mini"   = hafif metin bağlantısı (Hero için) */
  boyut?: "normal" | "mini";
  dil?: Dil;
};

/* ============================================
   MİNYATÜR CV SAYFASI
   ============================================ */
function MiniSayfa({ iniyor, kucuk }: { iniyor: boolean; kucuk?: boolean }) {
  const g = kucuk ? 22 : 28;
  const y = kucuk ? 30 : 38;

  return (
    <span className={`sayfa ${iniyor ? "sayfa-iniyor" : ""}`}>
      <svg width={g} height={y} viewBox="0 0 28 38" fill="none" aria-hidden="true">
        <rect x="0.5" y="0.5" width="27" height="37" rx="2" fill="var(--paper)" stroke="var(--paper-line)" strokeWidth="0.7" />
        <circle cx="7" cy="8.5" r="3.4" fill="var(--paper-line)" opacity="0.65" />
        <rect x="12.5" y="6.4" width="10.5" height="1.9" rx="0.95" fill="var(--paper-strong)" />
        <rect x="12.5" y="9.6" width="7" height="1.2" rx="0.6" fill="var(--paper-line)" />
        <rect x="4" y="14.4" width="20" height="0.6" rx="0.3" fill="var(--paper-line)" opacity="0.75" />
        <rect x="4" y="17.4" width="4.2" height="1.4" rx="0.7" fill="var(--accent)" />
        <rect x="4" y="20.6" width="20" height="0.9" rx="0.45" fill="var(--paper-line)" opacity="0.85" />
        <rect x="4" y="22.9" width="20" height="0.9" rx="0.45" fill="var(--paper-line)" opacity="0.85" />
        <rect x="4" y="25.2" width="13.5" height="0.9" rx="0.45" fill="var(--paper-line)" opacity="0.85" />
        <rect x="4" y="28.6" width="4.2" height="1.4" rx="0.7" fill="var(--accent)" />
        <rect x="4" y="31.8" width="20" height="0.9" rx="0.45" fill="var(--paper-line)" opacity="0.85" />
        <rect x="4" y="34.1" width="15.5" height="0.9" rx="0.45" fill="var(--paper-line)" opacity="0.85" />
      </svg>
    </span>
  );
}

function Ok() {
  return (
    <svg width="13" height="13" viewBox="0 0 14 14" fill="none" className="cv-ok" aria-hidden="true">
      <path d="M7 2v8m0 0L4 7m3 3l3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2.5 12h9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function Tik() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path className="cv-tik" d="M3 8.5l3.4 3.4L13 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function CvButton({ boyut = "normal", dil = "tr" }: Props) {
  const s = getSozluk(dil);

  const [durum, setDurum] = useState<"bos" | "iniyor" | "bitti">("bos");
  const zamanlar = useRef<ReturnType<typeof setTimeout>[]>([]);

  const tiklandi = () => {
    if (durum !== "bos") return;
    setDurum("iniyor");
    /* İndirme tarayıcı tarafından anında başlar;
       bu süreler sadece görsel geri bildirim içindir. */
    zamanlar.current.push(setTimeout(() => setDurum("bitti"), 950));
    zamanlar.current.push(setTimeout(() => setDurum("bos"), 2700));
  };

  const iniyor = durum === "iniyor";
  const bitti = durum === "bitti";
  const metin = iniyor ? s.cv.iniyor : bitti ? s.cv.bitti : s.cv.indir;
  const mini = boyut === "mini";

  /* ---------- CV HENÜZ HAZIR DEĞİL ---------- */
  if (!cv.hazir) {
    if (mini) {
      return (
        <span className="cv-grup flex h-13 cursor-default items-center gap-2.5 px-2 text-sm text-muted">
          <MiniSayfa iniyor={false} kucuk />
          {s.cv.kisa}
          <span className="rounded-full border border-line px-2 py-0.5 font-mono text-[0.55rem] uppercase tracking-wider">
            {s.cv.yakinda}
          </span>
        </span>
      );
    }

    return (
      <span className="cv-grup flex h-16 cursor-default items-center gap-3.5 rounded-2xl border border-dashed border-line px-6 text-muted">
        <MiniSayfa iniyor={false} />
        {s.cv.kisa}
        <span className="rounded-full border border-line bg-ink-card px-2.5 py-0.5 font-mono text-[0.6rem] uppercase tracking-wider">
          {s.cv.yakinda}
        </span>
      </span>
    );
  }

  /* ---------- MİNİ SÜRÜM (Hero) ---------- */
  if (mini) {
    return (
      <a href={cv.src} download={cv.indirmeAdi} onClick={tiklandi} className={`cv-grup flex h-13 items-center gap-2.5 px-2 text-sm transition-colors duration-300 ${bitti ? "text-accent" : "text-muted hover:text-accent"}`}>
        {bitti ? <Tik /> : <MiniSayfa iniyor={iniyor} kucuk />}
        <span>{metin}</span>
        {!iniyor && !bitti && <Ok />}
      </a>
    );
  }

  /* ---------- NORMAL SÜRÜM (Hakkımda) ---------- */
  return (
    <Magnetic>
      <a href={cv.src} download={cv.indirmeAdi} onClick={tiklandi} className={`cv-grup relative flex h-16 items-center gap-3.5 overflow-hidden rounded-2xl border px-6 transition-all duration-300 ${bitti ? "border-accent text-accent" : "border-line text-cream hover:border-accent hover:text-accent"}`}>
        <span className="cv-parilti pointer-events-none absolute inset-y-0 left-0 w-16 -translate-x-[140%] bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        {bitti ? <Tik /> : <MiniSayfa iniyor={iniyor} />}
        <span className="relative">{metin}</span>
        {!iniyor && !bitti && <Ok />}
      </a>
    </Magnetic>
  );
}