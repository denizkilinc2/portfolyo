"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  /* Kaç milisaniye gecikmeli belirsin — sıralı animasyon için */
  delay?: number;
  className?: string;
};

export default function Reveal({ children, delay = 0, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    /* Öğe ekrana girdi mi diye izliyoruz */
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            /* Bir kez göründü, artık izlemeye gerek yok */
            io.unobserve(entry.target);
          }
        }
      },
      {
        threshold: 0.12,
        /* Alt kenardan 60px içeri girince tetiklensin */
        rootMargin: "0px 0px -60px 0px",
      }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
        shown
          ? "translate-y-0 opacity-100 blur-none"
          : "translate-y-10 opacity-0 blur-[2px]"
      } ${className}`}
    >
      {children}
    </div>
  );
}