import type { Sozluk } from "@/i18n/tr";

type Props = {
  s: Sozluk;
};

export default function SocialDock({ s }: Props) {
  const baglantilar = [
    {
      ad: "GitHub",
      url: "https://github.com/denizkilinc2",
      ikon: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z" />
        </svg>
      ),
    },
    {
      ad: "LinkedIn",
      url: "https://www.linkedin.com/in/denizkilinc2",
      ikon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56V24H.22V8zm7.6 0h4.37v2.2h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.47 3.04 5.47 7v8.16h-4.56v-7.24c0-1.73-.03-3.95-2.4-3.95-2.4 0-2.77 1.88-2.77 3.82V24H7.82V8z" />
        </svg>
      ),
    },
    {
      ad: s.footer.eposta,
      url: "mailto:xdnz.klnc@gmail.com",
      ikon: (
        <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.6" />
          <path d="M3 6l7 5 7-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  return (
    <div className="fixed bottom-6 left-6 z-40 hidden items-center gap-1 rounded-full border border-line bg-ink-card/80 p-1 backdrop-blur-xl md:flex">
      {baglantilar.map((b) => {
        const disLink = b.url.startsWith("http");
        return (
          <a key={b.ad} href={b.url} target={disLink ? "_blank" : undefined} rel={disLink ? "noopener noreferrer" : undefined} className="group flex h-9 items-center gap-2 rounded-full px-2.5 text-muted transition-all duration-300 hover:bg-ink hover:text-accent" aria-label={b.ad}>
            {b.ikon}
            {/* Üstüne gelince açılan ad */}
            <span className="max-w-0 overflow-hidden whitespace-nowrap font-mono text-[0.65rem] uppercase tracking-wider opacity-0 transition-all duration-300 group-hover:max-w-32 group-hover:opacity-100">
              {b.ad}
            </span>
          </a>
        );
      })}
    </div>
  );
}