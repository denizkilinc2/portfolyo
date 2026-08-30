import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { diller, dilBilgi, dilMi, type Dil } from "@/i18n/config";
import "../globals.css";

/* Gövde metni ve arayüz fontu */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

/* Dev başlıklar için serif font */
const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin", "latin-ext"],
  weight: "400",
  display: "swap",
});

/* Etiketler ve teknoloji isimleri için mono font */
const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const SITE = "https://denizkilinc.dev";

/* Dört dil için sayfa başlığı ve açıklaması */
const meta: Record<Dil, { unvan: string; aciklama: string }> = {
  tr: {
    unvan: "Bilgisayar Mühendisi",
    aciklama:
      "Yapay zekâ, gömülü sistemler, mobil ve web alanlarında uçtan uca yazılım geliştiriyorum.",
  },
  en: {
    unvan: "Computer Engineer",
    aciklama:
      "I build software end to end — from AI models and embedded systems to mobile apps and corporate web platforms.",
  },
  de: {
    unvan: "Informatiker",
    aciklama:
      "Ich entwickle Software von Anfang bis Ende — von KI-Modellen und eingebetteten Systemen bis zu Mobile-Apps und Unternehmenswebsites.",
  },
  nl: {
    unvan: "Computer Engineer",
    aciklama:
      "Ik bouw software van begin tot eind — van AI-modellen en embedded systemen tot mobiele apps en zakelijke webplatformen.",
  },
};

/* Tüm dillerin sayfalarını build sırasında önceden üret */
export function generateStaticParams() {
  return diller.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  if (!dilMi(locale)) return {};

  const m = meta[locale];
  const bilgi = dilBilgi[locale];

  return {
    title: {
      default: `Deniz Kılınç — ${m.unvan}`,
      template: "%s · Deniz Kılınç",
    },
    description: m.aciklama,
    authors: [{ name: "Deniz Kılınç", url: SITE }],
    creator: "Deniz Kılınç",
    alternates: {
      canonical: `${SITE}/${locale}`,
      /* Google'a diğer dil sürümlerini bildiriyoruz */
      languages: {
        tr: `${SITE}/tr`,
        en: `${SITE}/en`,
        de: `${SITE}/de`,
        nl: `${SITE}/nl`,
        "x-default": `${SITE}/tr`,
      },
    },
    openGraph: {
      type: "website",
      locale: bilgi.ogLocale,
      url: `${SITE}/${locale}`,
      siteName: "Deniz Kılınç",
      title: `Deniz Kılınç — ${m.unvan}`,
      description: m.aciklama,
    },
    twitter: {
      card: "summary_large_image",
      title: `Deniz Kılınç — ${m.unvan}`,
      description: m.aciklama,
    },
    robots: { index: true, follow: true },
  };
}

/* Sayfa çizilmeden ÖNCE çalışır. Kayıtlı tema tercihini
   uygular, böylece açılışta yanlış tema bir an görünmez. */
const temaBetigi = `
(function(){
  try {
    var t = localStorage.getItem('tema');
    document.documentElement.dataset.theme = (t === 'light' || t === 'dark') ? t : 'dark';
  } catch (e) {
    document.documentElement.dataset.theme = 'dark';
  }
})();
`;

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!dilMi(locale)) notFound();

  return (
    <html
      lang={dilBilgi[locale].htmlLang}
      data-theme="dark"
      suppressHydrationWarning
      className={`${inter.variable} ${instrument.variable} ${jetbrains.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: temaBetigi }} />
      </head>
      <body className="min-h-dvh bg-ink font-sans text-cream antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}