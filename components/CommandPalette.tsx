"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { projects } from "@/data/projects";
import { kategoriAd } from "@/i18n/kategoriler";
import { getProjeMetin } from "@/i18n/projeler";
import { diller, dilBilgi, varsayilanDil, dilMi, type Dil } from "@/i18n/config";
import { getSozluk } from "@/i18n/sozluk";

type Komut = {
  id: string;
  baslik: string;
  altBaslik?: string;
  grup: string;
  /* Aramada eşleşecek ek kelimeler */
  anahtar: string;
  href: string;
};

/* Türkçe karakterleri sadeleştirip küçük harfe çevirir.
   Böylece "gomulu" yazınca "Gömülü" de bulunur. */
function sadelestir(metin: string) {
  return metin
    .toLocaleLowerCase("tr")
    .replaceAll("ı", "i")
    .replaceAll("ğ", "g")
    .replaceAll("ü", "u")
    .replaceAll("ş", "s")
    .replaceAll("ö", "o")
    .replaceAll("ç", "c")
    .replaceAll("â", "a")
    .replaceAll("ä", "a")
    .replaceAll("ë", "e")
    .replaceAll("ï", "i");
}

export default function CommandPalette() {
  const [acik, setAcik] = useState(false);
  const [sorgu, setSorgu] = useState("");
  const [secili, setSecili] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listeRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  /* Adresin ilk parçasından bulunduğumuz dili çıkar */
  const dil: Dil = useMemo(() => {
    const parca = pathname.split("/")[1];
    return dilMi(parca) ? parca : varsayilanDil;
  }, [pathname]);

  const s = getSozluk(dil);

  /* Projeler */
  const projeKomutlari: Komut[] = useMemo(
    () =>
      projects.map((p) => {
        const m = getProjeMetin(p.slug, dil);
        return {
          id: `proje-${p.slug}`,
          baslik: m.ad,
          altBaslik: `${kategoriAd[p.kategori][dil]} · ${p.stack.slice(0, 3).join(", ")}`,
          grup: s.palet.grupProjeler,
          anahtar: `${m.ad} ${p.kategori} ${p.stack.join(" ")} ${m.ozet}`,
          href: `/${dil}/projeler/${p.slug}`,
        };
      }),
    [dil, s]
  );

  /* Sayfa içi gezinti */
  const sayfalar: Komut[] = useMemo(
    () => [
      {
        id: "nav-ana",
        baslik: s.palet.anaSayfa,
        grup: s.palet.grupGezinti,
        anahtar: "ana sayfa home startseite basa don",
        href: `/${dil}`,
      },
      {
        id: "nav-projeler",
        baslik: s.palet.tumProjeler,
        grup: s.palet.grupGezinti,
        anahtar: "projeler isler work projekte projecten portfolyo",
        href: `/${dil}#projeler`,
      },
      {
        id: "nav-hakkimda",
        baslik: s.nav.hakkimda,
        grup: s.palet.grupGezinti,
        anahtar: "hakkimda about uber mich over mij yetenekler egitim",
        href: `/${dil}#hakkimda`,
      },
      {
        id: "nav-iletisim",
        baslik: s.nav.iletisim,
        grup: s.palet.grupGezinti,
        anahtar: "iletisim contact kontakt mail eposta",
        href: `/${dil}#iletisim`,
      },
    ],
    [dil, s]
  );

  /* Dış bağlantılar */
  const baglantilar: Komut[] = useMemo(
    () => [
      {
        id: "dis-github",
        baslik: "GitHub",
        altBaslik: "github.com/denizkilinc2",
        grup: s.palet.grupBaglantilar,
        anahtar: "github kod code repo kaynak",
        href: "https://github.com/denizkilinc2",
      },
      {
        id: "dis-linkedin",
        baslik: "LinkedIn",
        altBaslik: "linkedin.com/in/denizkilinc2",
        grup: s.palet.grupBaglantilar,
        anahtar: "linkedin profil is work",
        href: "https://www.linkedin.com/in/denizkilinc2",
      },
      {
        id: "dis-eposta",
        baslik: s.palet.epostaGonder,
        altBaslik: "xdnz.klnc@gmail.com",
        grup: s.palet.grupBaglantilar,
        anahtar: "eposta mail email iletisim kontakt yaz",
        href: "mailto:xdnz.klnc@gmail.com",
      },
    ],
    [s]
  );

  /* Dil seçenekleri — bulunduğun sayfayı koruyarak dil değiştirir */
  const dilKomutlari: Komut[] = useMemo(() => {
    const yeniYol = (hedef: Dil) => {
      const parcalar = pathname.split("/");
      if (parcalar.length > 1) parcalar[1] = hedef;
      const yol = parcalar.join("/");
      return yol.length > 1 ? yol : `/${hedef}`;
    };

    return diller
      .filter((d) => d !== dil)
      .map((d) => ({
        id: `dil-${d}`,
        baslik: dilBilgi[d].ad,
        altBaslik: dilBilgi[d].kisa,
        grup: s.palet.grupDil,
        anahtar: `${dilBilgi[d].ad} ${dilBilgi[d].kisa} dil language sprache taal`,
        href: yeniYol(d),
      }));
  }, [dil, pathname, s]);

  const tumu = useMemo(
    () => [...projeKomutlari, ...sayfalar, ...baglantilar, ...dilKomutlari],
    [projeKomutlari, sayfalar, baglantilar, dilKomutlari]
  );

  /* Aramaya göre filtrele */
  const sonuclar = useMemo(() => {
    const q = sadelestir(sorgu.trim());
    if (!q) return tumu;
    return tumu.filter((k) =>
      sadelestir(`${k.baslik} ${k.altBaslik ?? ""} ${k.anahtar}`).includes(q)
    );
  }, [sorgu, tumu]);

  /* Sonuçları gruplara ayır */
  const gruplar = useMemo(() => {
    const m = new Map<string, Komut[]>();
    for (const k of sonuclar) {
      const liste = m.get(k.grup) ?? [];
      liste.push(k);
      m.set(k.grup, liste);
    }
    return [...m.entries()];
  }, [sonuclar]);

  /* Ctrl+K / ⌘K ile aç, Esc ile kapat */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setAcik((v) => !v);
      }
      if (e.key === "Escape") setAcik(false);
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  /* Açılınca alanı temizle ve odaklan */
  useEffect(() => {
    if (acik) {
      setSorgu("");
      setSecili(0);
      /* Bir kare bekle, sonra odaklan — yoksa mobilde klavye açılmıyor */
      requestAnimationFrame(() => inputRef.current?.focus());
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [acik]);

  /* Arama değişince seçimi başa al */
  useEffect(() => setSecili(0), [sorgu]);

  /* Seçili satırı görünür tut */
  useEffect(() => {
    listeRef.current
      ?.querySelector<HTMLElement>(`[data-index="${secili}"]`)
      ?.scrollIntoView({ block: "nearest" });
  }, [secili]);

  const git = (k: Komut) => {
    setAcik(false);
    if (k.href.startsWith("http")) {
      window.open(k.href, "_blank", "noopener,noreferrer");
    } else {
      window.location.href = k.href;
    }
  };

  const onInputKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSecili((v) => (v + 1) % Math.max(sonuclar.length, 1));
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      setSecili((v) => (v - 1 + sonuclar.length) % Math.max(sonuclar.length, 1));
    }
    if (e.key === "Enter") {
      e.preventDefault();
      const hedef = sonuclar[secili];
      if (hedef) git(hedef);
    }
  };

  /* Grupların içindeki sıra numarasını bulmak için düz indeks */
  let sayac = -1;

  return (
    <>
      {/* Sağ altta duran açma düğmesi */}
      <button
        type="button"
        onClick={() => setAcik(true)}
        className="fixed bottom-6 right-6 z-40 hidden h-11 items-center gap-3 rounded-full border border-line bg-ink-card/80 px-5 backdrop-blur-xl transition-all duration-300 hover:border-accent md:flex"
        aria-label={s.palet.ac}
      >
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="text-muted" aria-hidden="true">
          <circle cx="7" cy="7" r="4.5" stroke="currentColor" strokeWidth="1.5" />
          <path d="M10.5 10.5L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <span className="font-mono text-[0.65rem] uppercase tracking-wider text-muted">
          {s.palet.ara}
        </span>
        <kbd className="rounded border border-line bg-ink px-1.5 py-0.5 font-mono text-[0.6rem] text-muted">
          ⌘K
        </kbd>
      </button>

      {/* Palet */}
      <div
        className={`fixed inset-0 z-[80] transition-opacity duration-200 ${
          acik ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label={s.palet.ac}
      >
        {/* Arka plan karartması */}
        <div
          className="absolute inset-0 bg-ink/80 backdrop-blur-sm"
          onClick={() => setAcik(false)}
        />

        {/* Kutu */}
        <div
          className={`absolute left-1/2 top-[12vh] w-[92vw] max-w-xl -translate-x-1/2 overflow-hidden rounded-2xl border border-line-strong bg-ink-soft shadow-2xl transition-all duration-300 ${
            acik ? "translate-y-0 scale-100" : "-translate-y-4 scale-95"
          }`}
        >
          {/* Arama alanı */}
          <div className="flex items-center gap-3 border-b border-line px-5">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-none text-muted" aria-hidden="true">
              <circle cx="7" cy="7" r="4.5" stroke="currentColor" strokeWidth="1.5" />
              <path d="M10.5 10.5L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>

            <input
              ref={inputRef}
              value={sorgu}
              onChange={(e) => setSorgu(e.target.value)}
              onKeyDown={onInputKey}
              placeholder={s.palet.yerTutucu}
              className="h-14 flex-1 bg-transparent text-cream outline-none placeholder:text-muted"
              autoComplete="off"
              spellCheck={false}
            />

            <kbd className="hidden flex-none rounded border border-line bg-ink px-1.5 py-0.5 font-mono text-[0.6rem] text-muted sm:block">
              ESC
            </kbd>
          </div>

          {/* Sonuçlar */}
          <div ref={listeRef} className="max-h-[55vh] overflow-y-auto p-2">
            {sonuclar.length === 0 && (
              <p className="px-4 py-10 text-center text-sm text-muted">
                {s.palet.sonucYok}
              </p>
            )}

            {gruplar.map(([grup, liste]) => (
              <div key={grup} className="mb-1">
                <p className="px-3 pb-1.5 pt-3 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-muted">
                  {grup}
                </p>

                {liste.map((k) => {
                  sayac += 1;
                  const index = sayac;
                  const bu = secili === index;

                  return (
                    <button
                      key={k.id}
                      type="button"
                      data-index={index}
                      onMouseEnter={() => setSecili(index)}
                      onClick={() => git(k)}
                      className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-colors duration-150 ${
                        bu ? "bg-ink-card" : "bg-transparent"
                      }`}
                    >
                      <span
                        className={`h-1.5 w-1.5 flex-none rounded-full transition-colors duration-150 ${
                          bu ? "bg-accent" : "bg-line-strong"
                        }`}
                      />

                      <span className="min-w-0 flex-1">
                        <span
                          className={`block truncate text-sm transition-colors duration-150 ${
                            bu ? "text-accent" : "text-cream"
                          }`}
                        >
                          {k.baslik}
                        </span>
                        {k.altBaslik && (
                          <span className="block truncate font-mono text-[0.65rem] text-muted">
                            {k.altBaslik}
                          </span>
                        )}
                      </span>

                      {bu && (
                        <kbd className="hidden flex-none rounded border border-line bg-ink px-1.5 py-0.5 font-mono text-[0.6rem] text-muted sm:block">
                          ↵
                        </kbd>
                      )}
                    </button>
                  );
                })}
              </div>
            ))}
          </div>

          {/* Alt bilgi çubuğu */}
          <div className="flex items-center gap-5 border-t border-line px-5 py-3 font-mono text-[0.6rem] uppercase tracking-wider text-muted">
            <span className="flex items-center gap-1.5">
              <kbd className="rounded border border-line bg-ink px-1.5 py-0.5">↑↓</kbd>
              {s.palet.gez}
            </span>
            <span className="flex items-center gap-1.5">
              <kbd className="rounded border border-line bg-ink px-1.5 py-0.5">↵</kbd>
              {s.palet.sec}
            </span>
            <span className="ml-auto">
              {sonuclar.length} {s.palet.sonuc}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}