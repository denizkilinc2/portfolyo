"use client";

import { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const noktaRef = useRef<HTMLDivElement>(null);
  const halkaRef = useRef<HTMLDivElement>(null);

  /* Fare cihazı var mı? Yoksa hiç render etmiyoruz. */
  const [fareVar, setFareVar] = useState(false);
  /* Tıklanabilir bir öğenin üstünde miyiz? */
  const [aktif, setAktif] = useState(false);
  /* Fare basılı mı? */
  const [basili, setBasili] = useState(false);
  /* Pencereden çıkıldı mı? */
  const [gizli, setGizli] = useState(true);

  useEffect(() => {
    /* Sadece gerçek fare (hover destekli, ince işaretçi) olan cihazlarda çalış */
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    setFareVar(mq.matches);

    const degisti = (e: MediaQueryListEvent) => setFareVar(e.matches);
    mq.addEventListener("change", degisti);
    return () => mq.removeEventListener("change", degisti);
  }, []);

  useEffect(() => {
    if (!fareVar) return;

    /* Farenin gerçek konumu — ekranın ortasından başlat,
       böylece sayfa açılışında köşede takılı kalmıyor */
    let hedefX = window.innerWidth / 2;
    let hedefY = window.innerHeight / 2;
    let halkaX = hedefX;
    let halkaY = hedefY;
    let frame = 0;

    const dongu = () => {
      /* Halka, hedefe her karede %18 yaklaşıyor — yumuşak takip böyle oluyor */
      halkaX += (hedefX - halkaX) * 0.18;
      halkaY += (hedefY - halkaY) * 0.18;

      if (noktaRef.current) {
        noktaRef.current.style.transform = `translate3d(${hedefX}px, ${hedefY}px, 0) translate(-50%, -50%)`;
      }
      if (halkaRef.current) {
        halkaRef.current.style.transform = `translate3d(${halkaX}px, ${halkaY}px, 0) translate(-50%, -50%)`;
      }

      frame = requestAnimationFrame(dongu);
    };

    /* Farenin altındaki öğe tıklanabilir mi? */
    const tiklanabilirMi = (el: Element | null) =>
      !!el?.closest("a, button, [role='button'], label, summary, [data-imlec]");

    const onMove = (e: MouseEvent) => {
      hedefX = e.clientX;
      hedefY = e.clientY;
      setGizli(false);
      setAktif(tiklanabilirMi(e.target as Element | null));
    };

    /* Fare hareket etmeden de (sekme değişimi, sayfa geçişi)
       imlecin konumunu yakalayabilmek için */
    const onOver = (e: MouseEvent) => {
      setAktif(tiklanabilirMi(e.target as Element | null));
    };

    const onDown = () => setBasili(true);
    const onUp = () => setBasili(false);
    const onLeave = () => setGizli(true);
    const onEnter = () => setGizli(false);

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    frame = requestAnimationFrame(dongu);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, [fareVar]);

  if (!fareVar) return null;

  /* Halkanın boyutu: basılıyken küçülür, bağlantı üstünde büyür */
  const halkaBoyut = basili ? "h-7 w-7" : aktif ? "h-11 w-11" : "h-8 w-8";

  return (
    <div
      /* z-[200] — komut paleti (z-80) ve grain (z-100) dahil her şeyin üstünde */
      className={`pointer-events-none fixed inset-0 z-[200] transition-opacity duration-300 ${
        gizli ? "opacity-0" : "opacity-100"
      }`}
      aria-hidden="true"
    >
      {/* Anında takip eden nokta — her zaman görünür */}
      <div
        ref={noktaRef}
        className={`fixed left-0 top-0 rounded-full bg-accent transition-[width,height] duration-300 ${
          aktif ? "h-2 w-2" : "h-1.5 w-1.5"
        }`}
      />

      {/* Gecikmeli takip eden halka */}
      <div
        ref={halkaRef}
        className={`fixed left-0 top-0 rounded-full border transition-[width,height,background-color,border-color] duration-300 ease-out ${halkaBoyut} ${
          aktif
            ? "border-accent bg-accent/12"
            : "border-line-strong bg-transparent"
        }`}
      />
    </div>
  );
}