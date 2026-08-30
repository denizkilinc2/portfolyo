"use client";

import { useEffect, useRef, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  /* Çekim gücü. 0.3 = farenin gittiği mesafenin %30'u kadar hareket eder. */
  guc?: number;
  /* Kaç piksel yaklaşınca etki başlasın */
  mesafe?: number;
  className?: string;
};

export default function Magnetic({
  children,
  guc = 0.28,
  mesafe = 90,
  className = "",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    /* Dokunmatik cihazlarda ve animasyon azaltma tercihinde çalışma */
    const fareVar = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const azalt = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fareVar || azalt) return;

    let frame = 0;

    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const kutu = el.getBoundingClientRect();
        const merkezX = kutu.left + kutu.width / 2;
        const merkezY = kutu.top + kutu.height / 2;

        const farkX = e.clientX - merkezX;
        const farkY = e.clientY - merkezY;

        /* Fare, öğenin sınırlarından "mesafe" kadar uzağa kadar etkili */
        const yakinX = Math.abs(farkX) < kutu.width / 2 + mesafe;
        const yakinY = Math.abs(farkY) < kutu.height / 2 + mesafe;

        if (yakinX && yakinY) {
          el.style.transform = `translate3d(${farkX * guc}px, ${farkY * guc}px, 0)`;
        } else {
          el.style.transform = "translate3d(0, 0, 0)";
        }
      });
    };

    const onLeave = () => {
      cancelAnimationFrame(frame);
      el.style.transform = "translate3d(0, 0, 0)";
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, [guc, mesafe]);

  return (
    <div
      ref={ref}
      className={`transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${className}`}
    >
      {children}
    </div>
  );
}