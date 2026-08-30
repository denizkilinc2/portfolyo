import type { Dil } from "./config";
import type { Kategori } from "@/data/projects";

/* ============================================
   KATEGORİ ÇEVİRİLERİ
   data/projects.ts içindeki kategori adlarının
   dört dildeki karşılıkları.
   ============================================ */

export const kategoriAd: Record<Kategori, Record<Dil, string>> = {
  "Yapay Zekâ": {
    tr: "Yapay Zekâ",
    en: "AI",
    de: "KI",
    nl: "AI",
  },
  Mobil: {
    tr: "Mobil",
    en: "Mobile",
    de: "Mobile",
    nl: "Mobiel",
  },
  "Gömülü & Robotik": {
    tr: "Gömülü & Robotik",
    en: "Embedded & Robotics",
    de: "Embedded & Robotik",
    nl: "Embedded & Robotica",
  },
  Web: {
    tr: "Web",
    en: "Web",
    de: "Web",
    nl: "Web",
  },
  "Oyun & Araçlar": {
    tr: "Oyun & Araçlar",
    en: "Games & Tools",
    de: "Spiele & Tools",
    nl: "Games & Tools",
  },
};