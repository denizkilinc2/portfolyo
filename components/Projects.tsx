"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Reveal from "./Reveal";
import Scramble from "./Scramble";
import { projects, kategoriler, type Kategori } from "@/data/projects";
import { kategoriAd } from "@/i18n/kategoriler";
import { getProjeMetin } from "@/i18n/projeler";
import type { Dil } from "@/i18n/config";
import type { Sozluk } from "@/i18n/tr";

/* "hepsi" dile bağlı olmayan bir işaret; etiketi sözlükten geliyor */
type Filtre = Kategori | "hepsi";

type Props = {
  dil: Dil;
  s: Sozluk;
};

/* GitHub simgesi */
function GithubIkon() {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  );
}

/* Dış bağlantı oku */
function DisOk() {
  return (
    <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M3 9L9 3M9 3H4M9 3v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Projects({ dil, s }: Props) {
  const [aktif, setAktif] = useState<Filtre>("hepsi");

  /* Filtreye göre görünecek projeler */
  const gorunen = useMemo(
    () =>
      aktif === "hepsi"
        ? projects
        : projects.filter((p) => p.kategori === aktif),
    [aktif]
  );

  /* Her kategoride kaç proje var — filtre butonlarındaki sayı için */
  const sayilar = useMemo(() => {
    const m = new Map<Filtre, number>([["hepsi", projects.length]]);
    for (const k of kategoriler) {
      m.set(k, projects.filter((p) => p.kategori === k).length);
    }
    return m;
  }, []);

  const filtreler: Filtre[] = ["hepsi", ...kategoriler];

  /* Filtre butonunun görünen adı */
  const filtreAdi = (f: Filtre) =>
    f === "hepsi" ? s.projeler.tumu : kategoriAd[f][dil];

  return (
    <section id="projeler" className="relative scroll-mt-24 px-6 py-24">
      {/* Arka plandaki soluk ışık */}
      <div className="glow right-[-10%] top-[15%] h-96 w-96 opacity-[0.07]" />

      <div className="relative mx-auto w-full max-w-6xl">
        {/* --- Bölüm başlığı --- */}
        <Reveal>
          <p className="eyebrow">
            <Scramble text={s.projeler.etiket} hiz={30} />
          </p>
          <h2 className="mt-5 max-w-3xl font-display text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-tight">
            {s.projeler.baslikOnce}{" "}
            <span className="text-accent">{s.projeler.baslikVurgu}</span>{" "}
            {s.projeler.baslikSonra}
          </h2>
        </Reveal>

        {/* --- Kategori filtresi --- */}
        <Reveal delay={100}>
          <div className="mt-10 flex flex-wrap gap-2">
            {filtreler.map((f) => {
              const secili = aktif === f;
              return (
                <button
                  key={f}
                  type="button"
                  onClick={() => setAktif(f)}
                  className={`flex items-center gap-2 rounded-full border px-4 py-2 font-mono text-[0.7rem] uppercase tracking-wider transition-all duration-300 ${
                    secili
                      ? "border-accent bg-accent text-ink"
                      : "border-line bg-ink-card text-muted hover:border-line-strong hover:text-cream"
                  }`}
                  aria-pressed={secili}
                >
                  {filtreAdi(f)}
                  <span className={secili ? "text-ink/60" : "text-muted/50"}>
                    {sayilar.get(f)}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* --- Proje listesi --- */}
        {/* key={aktif} sayesinde filtre değişince liste yeniden belirir */}
        <div key={aktif} className="mt-12">
          {gorunen.map((p, i) => {
            const m = getProjeMetin(p.slug, dil);
            return (
            <Reveal key={p.slug} delay={i * 60}>
              <article className="group relative border-t border-line">
                {/* Üstteki çizgiyi tarayan kehribar vurgu */}
                <span className="absolute left-0 top-0 h-px w-0 bg-accent transition-all duration-700 ease-out group-hover:w-full" />

                {/* Hover'da beliren yumuşak zemin */}
                <span className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-accent/[0.04] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="flex w-full flex-col gap-5 py-9 transition-transform duration-500 ease-out group-hover:translate-x-2 md:flex-row md:items-start md:gap-8 md:py-11">
                  {/* Sıra numarası */}
                  <span className="font-mono text-xs text-muted transition-colors duration-500 group-hover:text-accent md:pt-3">
                    {p.no}
                  </span>

                  {/* Orta blok */}
                  <div className="flex-1">
                    <h3 className="font-display text-3xl leading-tight tracking-tight transition-colors duration-500 group-hover:text-accent md:text-[2.6rem]">
                      {m.ad}
                    </h3>

                    <p className="mt-3 max-w-2xl leading-relaxed text-muted">
                      {m.ozet}
                    </p>

                    <ul className="mt-5 flex flex-wrap gap-2">
                      {p.stack.map((tech) => (
                        <li
                          key={tech}
                          className="rounded-full border border-line bg-ink-card px-3 py-1 font-mono text-[0.65rem] uppercase tracking-wider text-muted transition-colors duration-500 group-hover:border-line-strong"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>

                    {/* Kod ve canlı demo rozetleri — satır bağlantısının üstünde */}
                    {(p.github || p.demo) && (
                      <div className="relative z-20 mt-5 flex flex-wrap gap-2.5">
                        {p.github && (
                          <a href={p.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-full border border-line bg-ink-card px-3.5 py-1.5 font-mono text-[0.65rem] uppercase tracking-wider text-muted transition-all duration-300 hover:border-accent hover:text-accent">
                            <GithubIkon />
                            {s.projeler.kod}
                            <DisOk />
                          </a>
                        )}

                        {p.demo && (
                          <a href={p.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3.5 py-1.5 font-mono text-[0.65rem] uppercase tracking-wider text-accent transition-all duration-300 hover:border-accent hover:bg-accent hover:text-ink">
                            <span className="dot" />
                            {s.projeler.canli}
                            <DisOk />
                          </a>
                        )}
                      </div>
                    )}

                    {/* Mobilde görünen "incele" ipucu */}
                    <span className="mt-6 flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-wider text-accent md:hidden">
                      {s.projeler.incele}
                      <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>

                  {/* Sağ blok: kategori + ok */}
                  <div className="hidden items-center gap-5 md:flex md:flex-col md:items-end md:gap-4 md:pt-3">
                    <span className="font-mono text-[0.65rem] uppercase tracking-wider text-muted">
                      {kategoriAd[p.kategori][dil]}
                    </span>

                    <span
                      className="flex h-10 w-10 flex-none items-center justify-center rounded-full border border-line text-muted transition-all duration-500 group-hover:border-accent group-hover:bg-accent group-hover:text-ink"
                      aria-hidden="true"
                    >
                      <svg width="15" height="15" viewBox="0 0 16 16" fill="none" className="transition-transform duration-500 group-hover:translate-x-0.5">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </div>

                {/* Tüm satırı kaplayan görünmez bağlantı — rozetlerin altında kalır */}
                <Link href={`/${dil}/projeler/${p.slug}`} className="absolute inset-0 z-10" aria-label={`${m.ad} — ${s.projeler.inceleAria}`} />
              </article>
            </Reveal>
            );
          })}

          {/* Listeyi kapatan son çizgi */}
          <div className="border-t border-line" />
        </div>
      </div>
    </section>
  );
}