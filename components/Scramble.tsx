"use client";

import { useEffect, useRef, useState } from "react";

/* Çözülme sırasında kullanılacak rastgele karakterler */
const KARAKTERLER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%&/*<>[]{}";

type Props = {
  /* Sonunda görünecek gerçek metin */
  text: string;
  /* Başlamadan önce beklenecek süre (ms) */
  delay?: number;
  /* Her karakterin çözülme hızı — küçük değer = hızlı */
  hiz?: number;
  /* true ise sayfa açılınca başlar, false ise ekrana girince */
  hemen?: boolean;
  className?: string;
};

export default function Scramble({
  text,
  delay = 0,
  hiz = 32,
  hemen = false,
  className = "",
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [cikti, setCikti] = useState(text);
  const calisti = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    /* Animasyon azaltma tercihinde hiç oynatma */
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let interval: ReturnType<typeof setInterval>;
    let timeout: ReturnType<typeof setTimeout>;

    const oynat = () => {
      if (calisti.current) return;
      calisti.current = true;

      timeout = setTimeout(() => {
        /* kilit = kaç karakterin gerçek haline oturduğu */
        let kilit = 0;

        interval = setInterval(() => {
          const harfler = text.split("").map((harf, i) => {
            /* Boşluklar hep boşluk kalsın, kelime yapısı bozulmasın */
            if (harf === " ") return " ";
            /* Kilitlenmiş kısım artık gerçek metin */
            if (i < kilit) return harf;
            /* Geri kalanı rastgele */
            return KARAKTERLER[Math.floor(Math.random() * KARAKTERLER.length)];
          });

          setCikti(harfler.join(""));

          /* Her turda üçte bir karakter kadar ilerle */
          kilit += 1 / 3;

          if (kilit >= text.length) {
            clearInterval(interval);
            setCikti(text);
          }
        }, hiz);
      }, delay);
    };

    /* Sayfa açılınca başlasın */
    if (hemen) {
      oynat();
      return () => {
        clearInterval(interval);
        clearTimeout(timeout);
      };
    }

    /* Ekrana girince başlasın */
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            oynat();
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.5 }
    );

    io.observe(el);

    return () => {
      io.disconnect();
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [text, delay, hiz, hemen]);

  return (
    <span ref={ref} className={className}>
      {/* Ekran okuyucular karışık metni değil, gerçek metni okusun */}
      <span aria-hidden="true">{cikti}</span>
      <span className="sr-only">{text}</span>
    </span>
  );
}