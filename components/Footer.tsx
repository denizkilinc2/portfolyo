import type { Dil } from "@/i18n/config";
import type { Sozluk } from "@/i18n/tr";

type Props = {
  dil: Dil;
  s: Sozluk;
};

export default function Footer({ dil, s }: Props) {
  const yil = new Date().getFullYear();

  const baglantilar = [
    { ad: "GitHub", url: "https://github.com/denizkilinc2" },
    { ad: "LinkedIn", url: "https://www.linkedin.com/in/denizkilinc2" },
    { ad: s.footer.eposta, url: "mailto:xdnz.klnc@gmail.com" },
  ];

  return (
    <footer className="border-t border-line px-6 py-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-8 md:flex-row md:justify-between md:gap-6">
        {/* Sol: isim */}
        <a href={`/${dil}`} className="group flex items-center gap-2.5" aria-label={s.footer.basaDon}>
          <span className="flex h-8 w-8 items-center justify-center rounded-md border border-line bg-ink-card font-mono text-xs font-bold text-accent transition-colors group-hover:border-accent">
            DK
          </span>
          <span className="font-mono text-sm tracking-tight text-cream">
            deniz<span className="text-muted">kilinc</span>
            <span className="text-accent">.dev</span>
          </span>
        </a>

        {/* Orta: bağlantılar */}
        <nav className="flex items-center gap-7">
          {baglantilar.map((b) => (
            <a key={b.ad} href={b.url} target={b.url.startsWith("mailto") ? undefined : "_blank"} rel="noopener noreferrer" className="font-mono text-[0.7rem] uppercase tracking-wider text-muted transition-colors hover:text-accent">
              {b.ad}
            </a>
          ))}
        </nav>

        {/* Sağ: telif */}
        <p className="font-mono text-[0.65rem] uppercase tracking-wider text-muted">
          © {yil} Deniz Kılınç
        </p>
      </div>
    </footer>
  );
}