import { fotograf } from "@/data/site";

type Props = {
  yakindaMetin: string;
  /* "buyuk" = hero için, isim etiketi yok, daha belirgin çerçeve
     "normal" = Hakkımda bölümü için */
  boyut?: "normal" | "buyuk";
};

export default function Portre({ yakindaMetin, boyut = "normal" }: Props) {
  const buyuk = boyut === "buyuk";

  return (
    <div className="relative">
      {/* Arkadaki kehribar ışık */}
      <div
        className={`glow absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${
          buyuk ? "h-72 w-72" : "h-52 w-52"
        }`}
      />

      {/* Oran fotoğrafla aynı (4:5) — kırpma olmuyor */}
      <div
        className={`relative aspect-[4/5] w-full overflow-hidden border border-line bg-ink-soft ${
          buyuk ? "rounded-3xl shadow-2xl" : "rounded-2xl"
        }`}
      >
        {fotograf.hazir ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={fotograf.src}
            alt={fotograf.alt}
            className="h-full w-full object-cover object-top transition-transform duration-700 hover:scale-[1.03]"
          />
        ) : (
          /* --- Yakında hali --- */
          <div className="relative flex h-full w-full flex-col items-center justify-center gap-4 bg-[radial-gradient(ellipse_at_center,var(--ink-card),var(--ink-soft))] px-6 text-center">
            <span className="absolute left-4 top-4 h-5 w-5 border-l border-t border-line-strong" />
            <span className="absolute right-4 top-4 h-5 w-5 border-r border-t border-line-strong" />
            <span className="absolute bottom-4 left-4 h-5 w-5 border-b border-l border-line-strong" />
            <span className="absolute bottom-4 right-4 h-5 w-5 border-b border-r border-line-strong" />

            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-line bg-ink">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-muted" aria-hidden="true">
                <circle cx="12" cy="8.5" r="3.6" stroke="currentColor" strokeWidth="1.5" />
                <path d="M4.5 20a7.5 7.5 0 0115 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </span>

            <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-muted">
              {yakindaMetin}
            </p>
          </div>
        )}
      </div>

      {/* Alt köşedeki isim etiketi — sadece Hakkımda bölümünde */}
      {!buyuk && (
        <div className="absolute -bottom-3.5 left-4 flex items-center gap-2.5 rounded-full border border-line bg-ink-card px-3.5 py-1.5">
          <span className="dot" />
          <span className="font-mono text-[0.6rem] uppercase tracking-wider text-cream">
            Deniz Kılınç
          </span>
        </div>
      )}
    </div>
  );
}