"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import LangSwitcher from "./LangSwitcher";
import type { Dil } from "@/i18n/config";
import type { Sozluk } from "@/i18n/tr";

type Props = {
  dil: Dil;
  s: Sozluk;
};

export default function Nav({ dil, s }: Props) {
  /* Menüdeki bağlantılar. id değeri sayfadaki <section id="..."> ile aynı. */
  const links = [
    { id: "projeler", label: s.nav.projeler },
    { id: "hakkimda", label: s.nav.hakkimda },
    { id: "iletisim", label: s.nav.iletisim },
  ];

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [aktif, setAktif] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Aktif bölüm takibi.
     rootMargin ile ekranın üst kısmında ince bir bant oluşturuyoruz;
     hangi bölüm o banda girerse aktif sayılıyor. */
  useEffect(() => {
    const bolumler = ["projeler", "hakkimda", "iletisim"]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (bolumler.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setAktif(entry.target.id);
        }
      },
      { rootMargin: "-25% 0px -65% 0px", threshold: 0 }
    );

    bolumler.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  /* Hero'daysak (en üstte) hiçbir bağlantı aktif olmasın */
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY < 200) setAktif(null);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Mobil menü açıkken arkadaki sayfa kaymasın */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-line bg-ink/70 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav className="mx-auto flex h-18 w-full max-w-6xl items-center justify-between px-6">
          {/* Sol: isim */}
          <a href={`/${dil}`} className="group flex items-center gap-2.5" aria-label={s.nav.anaSayfa}>
            <span className="flex h-8 w-8 items-center justify-center rounded-md border border-line bg-ink-card font-mono text-xs font-bold text-accent transition-colors group-hover:border-accent">
              DK
            </span>
            <span className="hidden font-mono text-sm tracking-tight text-cream sm:block">
              deniz<span className="text-muted">kilinc</span>
              <span className="text-accent">.dev</span>
            </span>
          </a>

          {/* Orta: masaüstü bağlantıları */}
          <ul className="hidden items-center gap-9 md:flex">
            {links.map((link) => {
              const secili = aktif === link.id;
              return (
                <li key={link.id}>
                  <a href={`#${link.id}`} aria-current={secili ? "true" : undefined} className={`relative py-2 text-sm transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-px after:bg-accent after:transition-all after:duration-500 hover:text-cream hover:after:w-full ${secili ? "text-cream after:w-full" : "text-muted after:w-0"}`}>
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Sağ: dil + tema + buton + hamburger */}
          <div className="flex items-center gap-2.5">
            <LangSwitcher dil={dil} etiket={s.nav.dilSec} />
            <ThemeToggle />

            <a href="#iletisim" className="hidden h-10 items-center rounded-full border border-line px-5 text-sm text-cream transition-all duration-300 hover:border-accent hover:text-accent lg:flex">
              {s.nav.calisalim}
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
              aria-label={open ? s.nav.menuKapat : s.nav.menuAc}
              aria-expanded={open}
            >
              <span
                className={`h-px w-6 bg-cream transition-all duration-300 ${
                  open ? "translate-y-[3px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-px w-6 bg-cream transition-all duration-300 ${
                  open ? "-translate-y-[3px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobil tam ekran menü */}
      <div
        className={`fixed inset-0 z-40 flex flex-col justify-center bg-ink px-8 transition-all duration-500 md:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-2">
          {links.map((link, i) => {
            const secili = aktif === link.id;
            return (
              <li key={link.id}>
                <a href={`#${link.id}`} onClick={() => setOpen(false)} className={`flex items-center gap-4 py-3 font-display text-4xl tracking-tight transition-colors hover:text-accent ${secili ? "text-accent" : "text-cream"}`} style={{ transitionDelay: `${i * 40}ms` }}>
                  <span className={`h-px bg-accent transition-all duration-500 ${secili ? "w-8" : "w-0"}`} />
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hairline my-8" />

        <a href="#iletisim" onClick={() => setOpen(false)} className="font-mono text-sm text-accent">
          {s.nav.calisalim} →
        </a>

        {/* Sosyal bağlantılar */}
        <div className="mt-10 flex flex-wrap gap-2.5">
          <a href="https://github.com/denizkilinc2" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 rounded-full border border-line bg-ink-card px-4 py-2.5 font-mono text-[0.65rem] uppercase tracking-wider text-muted transition-colors hover:border-accent hover:text-accent">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z" />
            </svg>
            GitHub
          </a>

          <a href="https://www.linkedin.com/in/denizkilinc2" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 rounded-full border border-line bg-ink-card px-4 py-2.5 font-mono text-[0.65rem] uppercase tracking-wider text-muted transition-colors hover:border-accent hover:text-accent">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56V24H.22V8zm7.6 0h4.37v2.2h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.47 3.04 5.47 7v8.16h-4.56v-7.24c0-1.73-.03-3.95-2.4-3.95-2.4 0-2.77 1.88-2.77 3.82V24H7.82V8z" />
            </svg>
            LinkedIn
          </a>

          <a href="mailto:xdnz.klnc@gmail.com" className="flex items-center gap-2.5 rounded-full border border-line bg-ink-card px-4 py-2.5 font-mono text-[0.65rem] uppercase tracking-wider text-muted transition-colors hover:border-accent hover:text-accent">
            <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.6" />
              <path d="M3 6l7 5 7-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {s.footer.eposta}
          </a>
        </div>
      </div>
    </>
  );
}