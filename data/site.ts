/* ============================================
   SİTE AYARLARI
   Fotoğraf ve CV hazır olduğunda buradaki
   "hazir" değerlerini true yapman yeterli.
   ============================================ */

export const fotograf = {
  /* Fotoğraf hazır olduğunda true yap */
  hazir: false,
  /* Dosyayı public/medya/ klasörüne koy, adı bununla aynı olsun */
  src: "/medya/deniz.jpg",
  alt: "Deniz Kılınç",
};

export const cv = {
  /* CV hazır olduğunda true yap */
  hazir: false,
  /* Dosyayı public/medya/ klasörüne koy */
  src: "/medya/deniz-kilinc-cv.pdf",
  /* İndirilirken kullanılacak dosya adı */
  indirmeAdi: "Deniz-Kilinc-CV.pdf",
};