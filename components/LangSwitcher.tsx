"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { diller, dilBilgi, type Dil } from "@/i18n/config";

type Props = {
  dil: Dil;
  etiket: string;
};

export default function LangSwitcher({ dil, etiket }: Props) {
  const [acik, setAcik] = useState(false);
  const kutuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  /* Dışarı tıklanınca kapat */
  useEffect(() => {
    if (!acik) return;

    const disaTikla = (e: MouseEvent) => {
      if (!kutuRef.current?.contains(e.target as Node)) setAcik(false);
    };
    const escBas = (e: KeyboardEvent) => {
      if (e.key === "Escape") setAcik(false);
    };

    document.addEventListener("mousedown", disaTikla);
    document.addEventListener("keydown", escBas);
    return () => {
      document.removeEventListener("mousedown", disaTikla);
      document.removeEventListener("keydown", escBas);
    };
  }, [acik]);

  /* Adresteki dil parçasını değiştirir, sayfayı korur */
  const yeniYol = (hedef: Dil) => {
    const parcalar = pathname.split("/");
    if (parcalar.length > 1) parcalar[1] = hedef;
    const yol = parcalar.join("/");
    return yol.length > 1 ? yol : `/${hedef}`;
  };

  return (
    <div ref={kutuRef} className="relative">
      <button
        type="button"
        onClick={() => setAcik((v) => !v)}
        className="flex h-10 items-center gap-2 rounded-full border border-line px-3.5 font-mono text-[0.7rem] uppercase tracking-wider text-muted transition-all duration-300 hover:border-accent hover:text-accent"
        aria-label={etiket}
        aria-expanded={acik}
      >
        <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.4" />
          <path d="M2.5 10h15" stroke="currentColor" strokeWidth="1.4" />
          <path d="M10 2.5c2 2.3 3 4.8 3 7.5s-1 5.2-3 7.5c-2-2.3-3-4.8-3-7.5s1-5.2 3-7.5z" stroke="currentColor" strokeWidth="1.4" />
        </svg>
        {dilBilgi[dil].kisa}
      </button>

      {/* Açılır liste */}
      <div
        className={`absolute right-0 top-12 z-50 w-40 overflow-hidden rounded-xl border border-line bg-ink-soft/95 backdrop-blur-xl transition-all duration-200 ${
          acik
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-1.5 opacity-0"
        }`}
      >
        {diller.map((d) => {
          const secili = d === dil;
          return (
            <a key={d} href={yeniYol(d)} onClick={() => setAcik(false)} className={`flex items-center justify-between px-4 py-2.5 text-sm transition-colors duration-200 ${secili ? "bg-ink-card text-accent" : "text-muted hover:bg-ink-card hover:text-cream"}`} hrefLang={d}>
              {dilBilgi[d].ad}
              <span className="font-mono text-[0.6rem] uppercase tracking-wider opacity-60">
                {dilBilgi[d].kisa}
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
}