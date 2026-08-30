import type { Dil } from "../config";
import type { ProjeMetin, KismiProjeMetinleri } from "./tipler";
import { projelerTr } from "./tr";
import { projelerEn } from "./en";
import { projelerDe } from "./de";
import { projelerNl } from "./nl";

const kaynaklar: Record<Dil, KismiProjeMetinleri> = {
  tr: projelerTr,
  en: projelerEn,
  de: projelerDe,
  nl: projelerNl,
};

/* Metin dosyalarında hiç kaydı olmayan bir slug gelirse
   sayfa çökmesin diye kullanılan yedek. Böyle bir şey
   görürsen ilgili slug'ı i18n/projeler/tr.ts içine eklemeyi
   unutmuşsun demektir. */
const yedek: ProjeMetin = {
  ad: "—",
  ozet: "",
  vurgular: [],
};

/* Projenin metnini istenen dilde getirir.
   O dilde çeviri yoksa Türkçesine, o da yoksa yedeğe düşer. */
export function getProjeMetin(slug: string, dil: Dil): ProjeMetin {
  return kaynaklar[dil][slug] ?? projelerTr[slug] ?? yedek;
}

export type { ProjeMetin };