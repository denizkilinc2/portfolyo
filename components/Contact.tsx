"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import Scramble from "./Scramble";
import type { Sozluk } from "@/i18n/tr";

const EPOSTA = "xdnz.klnc@gmail.com";

const baglantilar = [
  { ad: "GitHub", url: "https://github.com/denizkilinc2", etiket: "denizkilinc2" },
  { ad: "LinkedIn", url: "https://www.linkedin.com/in/denizkilinc2", etiket: "denizkilinc2" },
];

type Props = {
  s: Sozluk;
};

export default function Contact({ s }: Props) {
  const [kopyalandi, setKopyalandi] = useState(false);

  const kopyala = async () => {
    try {
      await navigator.clipboard.writeText(EPOSTA);
      setKopyalandi(true);
      setTimeout(() => setKopyalandi(false), 2000);
    } catch {
      /* Pano izni yoksa sessizce geç */
    }
  };

  return (
    <section id="iletisim" className="relative scroll-mt-24 px-6 py-28">
      {/* Arka plan katmanları */}
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-30" />
      <div className="glow left-1/2 top-1/3 h-[26rem] w-[26rem] -translate-x-1/2 opacity-[0.12]" />

      <div className="relative mx-auto w-full max-w-4xl text-center">
        <Reveal>
          <p className="eyebrow">
            <Scramble text={s.iletisim.etiket} hiz={30} />
          </p>
        </Reveal>

        <Reveal delay={60}>
          <h2 className="mt-6 font-display text-[clamp(2.2rem,5.2vw,4rem)] leading-[1.05] tracking-tight">
            {s.iletisim.baslikOnce}{" "}
            <span className="text-accent">{s.iletisim.baslikVurgu}</span>
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <p className="mx-auto mt-6 max-w-lg leading-relaxed text-muted">
            {s.iletisim.aciklama}
          </p>
        </Reveal>

        {/* E-posta + kopyala */}
        <Reveal delay={180}>
          <div className="mt-11 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href={`mailto:${EPOSTA}`} className="group flex h-14 w-full max-w-sm items-center justify-center gap-3 rounded-full bg-accent px-7 font-medium text-ink transition-all duration-300 hover:bg-accent-soft hover:shadow-[0_0_50px_-10px_var(--accent)] sm:w-auto">
              <svg width="17" height="17" viewBox="0 0 20 20" fill="none" className="flex-none" aria-hidden="true">
                <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.6" />
                <path d="M3 6l7 5 7-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="truncate">{EPOSTA}</span>
            </a>

            <button
              type="button"
              onClick={kopyala}
              className="flex h-14 w-full max-w-sm items-center justify-center gap-2.5 rounded-full border border-line px-6 text-sm text-muted transition-all duration-300 hover:border-accent hover:text-accent sm:w-auto"
              aria-label={s.iletisim.kopyalaAria}
            >
              {kopyalandi ? (
                <>
                  <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8.5l3.5 3.5L13 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {s.iletisim.kopyalandi}
                </>
              ) : (
                <>
                  <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <rect x="5.5" y="5.5" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
                    <path d="M10.5 3.5H3.5a1 1 0 00-1 1v7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                  </svg>
                  {s.iletisim.kopyala}
                </>
              )}
            </button>
          </div>
        </Reveal>

        {/* Sosyal bağlantılar */}
        <Reveal delay={240}>
          <div className="mt-14">
            <div className="hairline" />
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              {baglantilar.map((b) => (
                <a key={b.ad} href={b.url} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 rounded-full border border-line bg-ink-card px-5 py-2.5 transition-all duration-300 hover:border-accent hover:bg-ink-soft">
                  <span className="font-mono text-[0.65rem] uppercase tracking-wider text-cream transition-colors group-hover:text-accent">
                    {b.ad}
                  </span>
                  <span className="text-sm text-muted">{b.etiket}</span>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" aria-hidden="true">
                    <path d="M3 9L9 3M9 3H4M9 3v5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}