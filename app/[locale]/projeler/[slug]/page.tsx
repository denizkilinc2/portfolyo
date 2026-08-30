import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Cursor from "@/components/Cursor";
import ScrollProgress from "@/components/ScrollProgress";
import CommandPalette from "@/components/CommandPalette";
import SocialDock from "@/components/SocialDock";
import Reveal from "@/components/Reveal";
import Magnetic from "@/components/Magnetic";
import ThemeToggle from "@/components/ThemeToggle";
import LangSwitcher from "@/components/LangSwitcher";
import Footer from "@/components/Footer";
import { projects, getProject, getKomsular } from "@/data/projects";
import { kategoriAd } from "@/i18n/kategoriler";
import { getProjeMetin } from "@/i18n/projeler";
import { diller, dilMi } from "@/i18n/config";
import { getSozluk } from "@/i18n/sozluk";

/* Her dil x her proje için sayfa üret.
   4 dil x 18 proje = 72 statik sayfa. */
export function generateStaticParams() {
  return diller.flatMap((locale) =>
    projects.map((p) => ({ locale, slug: p.slug }))
  );
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/projeler/[slug]">): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!dilMi(locale)) return {};

  const proje = getProject(slug);
  const s = getSozluk(locale);

  if (!proje) return { title: s.detay.bulunamadi };

  const m = getProjeMetin(slug, locale);

  return {
    title: m.ad,
    description: m.ozet,
    alternates: {
      canonical: `https://denizkilinc.dev/${locale}/projeler/${slug}`,
      languages: {
        tr: `https://denizkilinc.dev/tr/projeler/${slug}`,
        en: `https://denizkilinc.dev/en/projeler/${slug}`,
        de: `https://denizkilinc.dev/de/projeler/${slug}`,
        nl: `https://denizkilinc.dev/nl/projeler/${slug}`,
      },
    },
    openGraph: {
      title: `${m.ad} · Deniz Kılınç`,
      description: m.ozet,
      type: "article",
    },
  };
}

export default async function ProjeDetay({
  params,
}: PageProps<"/[locale]/projeler/[slug]">) {
  const { locale, slug } = await params;
  if (!dilMi(locale)) notFound();

  const proje = getProject(slug);
  if (!proje) notFound();

  const s = getSozluk(locale);
  const m = getProjeMetin(slug, locale);
  const { onceki, sonraki } = getKomsular(slug);

  /* Künye satırı — sadece dolu alanlar */
  const bilgiler = [
    { etiket: s.detay.kategori, deger: kategoriAd[proje.kategori][locale] },
    { etiket: s.detay.rol, deger: m.rol },
    { etiket: s.detay.sure, deger: m.sure },
    { etiket: s.detay.yil, deger: proje.yil },
  ].filter((b) => b.deger);

  /* Anlatı bölümleri — sadece doldurulmuş olanlar */
  const anlati = [
    { id: "problem", etiket: s.detay.problem, baslik: s.detay.problemBaslik, metin: m.problem },
    { id: "cozum", etiket: s.detay.cozum, baslik: s.detay.cozumBaslik, metin: m.cozum },
    { id: "sonuc", etiket: s.detay.sonuc, baslik: s.detay.sonucBaslik, metin: m.sonuc },
  ].filter((a) => a.metin);

  return (
    <>
      <Cursor />
      <ScrollProgress />
      <CommandPalette />
      <SocialDock s={s} />

      {/* ---------- Üst çubuk ---------- */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-ink/70 backdrop-blur-xl">
        <nav className="mx-auto flex h-18 w-full max-w-4xl items-center justify-between px-6">
          <a href={`/${locale}#projeler`} className="group flex items-center gap-2.5 text-sm text-muted transition-colors hover:text-accent">
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none" className="transition-transform duration-300 group-hover:-translate-x-1" aria-hidden="true">
              <path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {s.detay.tumProjeler}
          </a>

          <div className="flex items-center gap-2.5">
            <LangSwitcher dil={locale} etiket={s.nav.dilSec} />
            <ThemeToggle />
            <a href={`/${locale}`} className="flex items-center gap-2.5" aria-label={s.nav.anaSayfa}>
              <span className="flex h-8 w-8 items-center justify-center rounded-md border border-line bg-ink-card font-mono text-xs font-bold text-accent">
                DK
              </span>
            </a>
          </div>
        </nav>
      </header>

      <main className="relative overflow-hidden px-6 pb-24 pt-36">
        {/* Arka plan katmanları */}
        <div className="grid-bg pointer-events-none absolute inset-0 h-[60vh] opacity-30" />
        <div className="glow left-[-15%] top-[5%] h-96 w-96 opacity-[0.1]" />

        <article className="relative mx-auto w-full max-w-4xl">
          {/* ---------- Başlık ---------- */}
          <Reveal>
            <p className="eyebrow">
              {s.detay.proje} {proje.no}
            </p>
            <h1 className="mt-6 font-display text-[clamp(2.4rem,7vw,4.5rem)] leading-[1.02] tracking-tight">
              {m.ad}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted">
              {m.ozet}
            </p>
          </Reveal>

          {/* ---------- Bağlantı butonları ---------- */}
          {(proje.github || proje.demo) && (
            <Reveal delay={60}>
              <div className="mt-10 flex flex-wrap gap-3">
                {proje.demo && (
                  <Magnetic>
                    <a href={proje.demo} target="_blank" rel="noopener noreferrer" className="group flex h-12 items-center gap-2.5 rounded-full bg-accent px-7 font-medium text-ink transition-all duration-300 hover:bg-accent-soft hover:shadow-[0_0_40px_-10px_var(--accent)]">
                      {s.detay.canliDemo}
                      <svg width="13" height="13" viewBox="0 0 12 12" fill="none" className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true">
                        <path d="M3 9L9 3M9 3H4M9 3v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  </Magnetic>
                )}

                {proje.github && (
                  <Magnetic>
                    <a href={proje.github} target="_blank" rel="noopener noreferrer" className="group flex h-12 items-center gap-2.5 rounded-full border border-line px-7 text-cream transition-all duration-300 hover:border-accent hover:text-accent">
                      {s.detay.kaynakKod}
                      <svg width="13" height="13" viewBox="0 0 12 12" fill="none" className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true">
                        <path d="M3 9L9 3M9 3H4M9 3v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  </Magnetic>
                )}
              </div>
            </Reveal>
          )}

          {/* ---------- Künye ---------- */}
          <Reveal delay={120}>
            <dl className="mt-14 grid grid-cols-2 gap-x-8 gap-y-7 border-y border-line py-8 sm:grid-cols-4">
              {bilgiler.map((b) => (
                <div key={b.etiket}>
                  <dt className="font-mono text-[0.65rem] uppercase tracking-wider text-muted">
                    {b.etiket}
                  </dt>
                  <dd className="mt-2 text-sm leading-snug text-cream">
                    {b.deger}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          {/* ---------- Teknolojiler ---------- */}
          <Reveal delay={160}>
            <section className="mt-14">
              <p className="eyebrow">{s.detay.teknolojiler}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {proje.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-line bg-ink-card px-4 py-1.5 font-mono text-[0.7rem] uppercase tracking-wider text-muted transition-colors duration-300 hover:border-accent hover:text-accent"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>

          {/* ---------- Problem / Çözüm / Sonuç ---------- */}
          {anlati.length > 0 && (
            <div className="mt-20 flex flex-col gap-16">
              {anlati.map((a, i) => (
                <Reveal key={a.id} delay={i * 60}>
                  <section>
                    <p className="eyebrow">{a.etiket}</p>
                    <h2 className="mt-5 font-display text-3xl tracking-tight md:text-4xl">
                      {a.baslik}
                    </h2>
                    <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
                      {a.metin}
                    </p>
                  </section>
                </Reveal>
              ))}
            </div>
          )}

          {/* ---------- Öne çıkan özellikler ---------- */}
          <Reveal>
            <section className="mt-20">
              <p className="eyebrow">{s.detay.ozellikler}</p>
              <ul className="mt-8 flex flex-col">
                {m.vurgular.map((v, i) => (
                  <li
                    key={v}
                    className="group flex gap-6 border-t border-line py-6 transition-colors duration-500 hover:border-line-strong"
                  >
                    <span className="font-mono text-xs text-muted transition-colors duration-500 group-hover:text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="max-w-2xl leading-relaxed text-cream/85">
                      {v}
                    </span>
                  </li>
                ))}
                <li className="border-t border-line" />
              </ul>
            </section>
          </Reveal>

          {/* ---------- Teknoloji seçim gerekçeleri ---------- */}
          {m.neden && m.neden.length > 0 && (
            <Reveal>
              <section className="mt-20">
                <p className="eyebrow">{s.detay.nedenler}</p>
                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  {m.neden.map((n) => (
                    <div
                      key={n.baslik}
                      className="rounded-2xl border border-line bg-ink-soft p-7 transition-colors duration-500 hover:border-accent/40 hover:bg-ink-card"
                    >
                      <h3 className="font-display text-xl tracking-tight text-accent">
                        {n.baslik}
                      </h3>
                      <p className="mt-3 leading-relaxed text-muted">
                        {n.aciklama}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </Reveal>
          )}

          {/* ---------- Görseller ---------- */}
          {proje.gorseller && proje.gorseller.length > 0 && (
            <Reveal>
              <section className="mt-20">
                <p className="eyebrow">{s.detay.gorseller}</p>
                <div className="mt-8 flex flex-col gap-10">
                  {proje.gorseller.map((g) => (
                    <figure key={g.src}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={g.src}
                        alt={g.alt}
                        loading="lazy"
                        className="w-full rounded-2xl border border-line"
                      />
                      <figcaption className="mt-4 font-mono text-xs text-muted">
                        {g.alt}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </section>
            </Reveal>
          )}

          {/* ---------- Önceki / sonraki proje ---------- */}
          <Reveal>
            <nav className="mt-28 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
              {onceki && (
                <a href={`/${locale}/projeler/${onceki.slug}`} className="group flex flex-col gap-2 bg-ink-soft p-8 transition-colors duration-500 hover:bg-ink-card">
                  <span className="font-mono text-[0.65rem] uppercase tracking-wider text-muted">
                    ← {s.detay.oncekiProje}
                  </span>
                  <span className="font-display text-2xl leading-tight tracking-tight transition-colors duration-500 group-hover:text-accent">
                    {getProjeMetin(onceki.slug, locale).ad}
                  </span>
                </a>
              )}

              {sonraki && (
                <a href={`/${locale}/projeler/${sonraki.slug}`} className="group flex flex-col items-start gap-2 bg-ink-soft p-8 transition-colors duration-500 hover:bg-ink-card sm:items-end sm:text-right">
                  <span className="font-mono text-[0.65rem] uppercase tracking-wider text-muted">
                    {s.detay.sonrakiProje} →
                  </span>
                  <span className="font-display text-2xl leading-tight tracking-tight transition-colors duration-500 group-hover:text-accent">
                    {getProjeMetin(sonraki.slug, locale).ad}
                  </span>
                </a>
              )}
            </nav>
          </Reveal>

          {/* ---------- İletişim çağrısı ---------- */}
          <Reveal>
            <section className="mt-20 text-center">
              <div className="hairline" />
              <h2 className="mt-14 font-display text-[clamp(1.8rem,4vw,2.75rem)] leading-tight tracking-tight">
                {s.detay.cagriBaslik}
              </h2>
              <div className="mt-8 flex justify-center">
                <Magnetic>
                  <a href={`/${locale}#iletisim`} className="flex h-13 items-center rounded-full bg-accent px-8 font-medium text-ink transition-all duration-300 hover:bg-accent-soft hover:shadow-[0_0_40px_-8px_var(--accent)]">
                    {s.detay.cagriButon}
                  </a>
                </Magnetic>
              </div>
            </section>
          </Reveal>
        </article>
      </main>

      <Footer dil={locale} s={s} />
    </>
  );
}