/* ============================================
   PROJE METİN TİPLERİ
   Her dil dosyası bu şekle uyar.
   Anahtar = projenin slug'ı.
   ============================================ */

export type NedenKart = {
  baslik: string;
  aciklama: string;
};

export type ProjeMetin = {
  ad: string;
  ozet: string;
  vurgular: string[];
  rol?: string;
  sure?: string;
  problem?: string;
  cozum?: string;
  sonuc?: string;
  neden?: NedenKart[];
};

/* Türkçe dosyası tam olmak zorunda */
export type ProjeMetinleri = Record<string, ProjeMetin>;

/* Diğer diller eksik olabilir — eksikler Türkçeye düşer */
export type KismiProjeMetinleri = Partial<Record<string, ProjeMetin>>;