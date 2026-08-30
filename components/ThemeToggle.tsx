"use client";

import { useEffect, useState } from "react";

type Tema = "dark" | "light";

export default function ThemeToggle() {
  const [tema, setTema] = useState<Tema>("dark");
  /* Sunucuda hangi temanın seçili olduğunu bilemeyiz.
     Tarayıcıda okuyana kadar simgeyi soluk gösteriyoruz. */
  const [hazir, setHazir] = useState(false);

  useEffect(() => {
    const mevcut = (document.documentElement.dataset.theme as Tema) ?? "dark";
    setTema(mevcut);
    setHazir(true);
  }, []);

  const degistir = () => {
    const yeni: Tema = tema === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = yeni;
    setTema(yeni);
    try {
      localStorage.setItem("tema", yeni);
    } catch {
      /* Gizli sekmede depolama kapalı olabilir, sorun değil */
    }
  };

  const acik = tema === "light";

  return (
    <button
      type="button"
      onClick={degistir}
      className={`relative flex h-10 w-10 flex-none items-center justify-center rounded-full border border-line transition-all duration-300 hover:border-accent ${
        hazir ? "opacity-100" : "opacity-0"
      }`}
      aria-label={acik ? "Koyu temaya geç" : "Açık temaya geç"}
      title={acik ? "Koyu tema" : "Açık tema"}
    >
      {/* Güneş */}
      <svg
        width="17"
        height="17"
        viewBox="0 0 20 20"
        fill="none"
        className={`absolute text-muted transition-all duration-500 ${
          acik ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-50 opacity-0"
        }`}
        aria-hidden="true"
      >
        <circle cx="10" cy="10" r="3.6" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M10 2v1.8M10 16.2V18M18 10h-1.8M3.8 10H2M15.7 4.3l-1.3 1.3M5.6 14.4l-1.3 1.3M15.7 15.7l-1.3-1.3M5.6 5.6L4.3 4.3"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>

      {/* Ay */}
      <svg
        width="17"
        height="17"
        viewBox="0 0 20 20"
        fill="none"
        className={`absolute text-muted transition-all duration-500 ${
          acik ? "rotate-90 scale-50 opacity-0" : "rotate-0 scale-100 opacity-100"
        }`}
        aria-hidden="true"
      >
        <path
          d="M16.5 12.4A7 7 0 017.6 3.5a7 7 0 108.9 8.9z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}