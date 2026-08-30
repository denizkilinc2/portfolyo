import type { Dil } from "./config";
import { tr, type Sozluk } from "./tr";
import { en } from "./en";
import { de } from "./de";
import { nl } from "./nl";

const sozlukler: Record<Dil, Sozluk> = { tr, en, de, nl };

/* Dile göre sözlüğü getirir. Bileşenlerde şöyle kullanılır:
   const s = getSozluk(locale);
   <h1>{s.hero.baslikOnce}</h1> */
export function getSozluk(dil: Dil): Sozluk {
  return sozlukler[dil];
}

export type { Sozluk };