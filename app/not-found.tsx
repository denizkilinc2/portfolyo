import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import Magnetic from "@/components/Magnetic";
import { varsayilanDil } from "@/i18n/config";
import { getSozluk } from "@/i18n/sozluk";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin", "latin-ext"],
  weight: "400",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

/* Bu sayfa dil klasörünün DIŞINDA olduğu için kendi
   <html> ve <body> etiketlerini sağlamak zorunda. */
export default function NotFound() {
  const dil = varsayilanDil;
  const s = getSozluk(dil);

  return (
    <html
      lang="tr"
      data-theme="dark"
      className={`${inter.variable} ${instrument.variable} ${jetbrains.variable}`}
    >
      <body className="min-h-dvh bg-ink font-sans text-cream antialiased">
        <main className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden px-6 text-center">
          <div className="grid-bg pointer-events-none absolute inset-0 opacity-30" />
          <div className="glow left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 opacity-[0.12]" />

          <div className="relative">
            <p className="font-display text-[clamp(5rem,20vw,11rem)] leading-none text-accent">
              404
            </p>

            <h1 className="mt-4 font-display text-3xl tracking-tight md:text-4xl">
              {s.hata404.baslik}
            </h1>

            <p className="mx-auto mt-5 max-w-md leading-relaxed text-muted">
              {s.hata404.aciklama}
            </p>

            <div className="mt-10 flex justify-center">
              <Magnetic>
                <a href={`/${dil}`} className="flex h-13 items-center rounded-full bg-accent px-8 font-medium text-ink transition-all duration-300 hover:bg-accent-soft hover:shadow-[0_0_40px_-8px_var(--accent)]">
                  {s.hata404.buton}
                </a>
              </Magnetic>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}