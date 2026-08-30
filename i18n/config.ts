/* ============================================
   DİL YAPILANDIRMASI
   Yeni dil eklemek için:
   1. Buraya kodunu ekle
   2. i18n klasörüne <kod>.ts sözlüğünü oluştur
   3. i18n/sozluk.ts içine kaydet
   ============================================ */

export const diller = ["tr", "en", "de", "nl"] as const;

export type Dil = (typeof diller)[number];

/* Adres dilsiz geldiğinde bu dile düşülür */
export const varsayilanDil: Dil = "tr";

/* Dil değiştirme menüsünde görünecek bilgiler */
export type DilBilgi = { ad: string; kisa: string; htmlLang: string; ogLocale: string };

export const dilBilgi: Record<Dil, DilBilgi> = {
  tr: { ad: "Türkçe", kisa: "TR", htmlLang: "tr", ogLocale: "tr_TR" },
  en: { ad: "English", kisa: "EN", htmlLang: "en", ogLocale: "en_US" },
  de: { ad: "Deutsch", kisa: "DE", htmlLang: "de", ogLocale: "de_DE" },
  nl: { ad: "Nederlands", kisa: "NL", htmlLang: "nl", ogLocale: "nl_NL" },
};

/* Gelen değer geçerli bir dil mi? */
export function dilMi(deger: string): deger is Dil {
  return (diller as readonly string[]).includes(deger);
}