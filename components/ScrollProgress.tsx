"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [oran, setOran] = useState(0);

  useEffect(() => {
    let frame = 0;

    /* Sayfanın ne kadarının kaydırıldığını yüzde olarak hesapla */
    const hesapla = () => {
      const el = document.documentElement;
      const toplam = el.scrollHeight - el.clientHeight;
      setOran(toplam > 0 ? (el.scrollTop / toplam) * 100 : 0);
    };

    /* Her scroll olayında değil, ekranın çizim döngüsünde hesapla.
       Bu, kaydırmanın takılmasını engeller. */
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(hesapla);
    };

    hesapla();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[2px]"
      aria-hidden="true"
    >
      <div
        className="h-full bg-accent"
        style={{
          width: `${oran}%`,
          boxShadow: "0 0 14px 1px var(--accent)",
        }}
      />
    </div>
  );
}