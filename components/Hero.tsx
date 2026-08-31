import Magnetic from "./Magnetic";
import Scramble from "./Scramble";
import ParticleField from "./ParticleField";
import Avatar from "./Avatar";
import CvButton from "./CvButton";
import type { Dil } from "@/i18n/config";
import type { Sozluk } from "@/i18n/tr";

/* Hero'da gösterilecek teknolojiler — dile bağlı değil */
const stack = [
  "Python",
  "Kotlin",
  "C++",
  "ROS2",
  "TensorFlow",
  "Next.js",
  "Node.js",
  "PostgreSQL",
];

type Props = {
  dil: Dil;
  s: Sozluk;
};

export default function Hero({ dil, s }: Props) {
  return (
    <section className="relative flex min-h-dvh items-center overflow-hidden px-6 pb-20 pt-28">
      {/* --- Arka plan katmanları --- */}
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-25" />

      {/* Dev DK monogramı — içinden akım geçer, sonra çarpar */}
      <div className="monogram grid" aria-hidden="true">
        <span className="monogram-taban">DK</span>
        <span className="monogram-akim">DK</span>
        <span className="monogram-carpma">DK</span>
      </div>

      <ParticleField />
      <div className="glow left-[-15%] top-[10%] h-[30rem] w-[30rem]" />
      <div className="glow bottom-[-5%] right-[-10%] h-96 w-96 opacity-[0.08]" />

      {/* --- İçerik --- */}
      <div className="relative mx-auto w-full max-w-6xl">
        {/* Kimlik satırı: portre + isim + müsaitlik */}
        <div className="rise d-1 flex flex-wrap items-center gap-x-5 gap-y-3">
          <div className="flex items-center gap-3.5">
            <Avatar />
            <span className="flex flex-col">
              <span className="text-[0.95rem] leading-tight text-cream">
                Deniz Kılınç
              </span>
              <span className="mt-1 font-mono text-[0.6rem] uppercase tracking-[0.18em] text-muted">
                {s.hero.unvan}
              </span>
            </span>
          </div>

          {/* Ayırıcı çizgi — sadece geniş ekranda */}
          <span className="hidden h-7 w-px bg-line sm:block" />

          <p className="eyebrow flex items-center gap-2.5">
            <span className="dot" />
            <Scramble text={s.hero.musait} hemen delay={600} hiz={28} />
          </p>
        </div>

        {/* Ana başlık */}
        <h1 className="rise d-2 mt-7 max-w-3xl font-display text-[clamp(2.4rem,6.2vw,4.5rem)] leading-[1.02] tracking-tight">
          {s.hero.baslikOnce}{" "}
          <span className="text-accent">
            <Scramble text={s.hero.baslikVurgu} hemen delay={1100} hiz={40} />
          </span>{" "}
          {s.hero.baslikSonra}
        </h1>

        {/* Açıklama */}
        <p className="rise d-3 mt-6 max-w-lg leading-relaxed text-muted">
          {s.hero.aciklama}
        </p>

        {/* Butonlar */}
        <div className="rise d-4 mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
          <Magnetic>
            <a href="#projeler" className="group flex h-13 items-center justify-center gap-2.5 rounded-full bg-accent px-8 font-medium text-ink transition-all duration-300 hover:bg-accent-soft hover:shadow-[0_0_40px_-8px_var(--accent)]">
              {s.hero.projelerButon}
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              >
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </Magnetic>

          <Magnetic>
            <a href="#iletisim" className="flex h-13 items-center justify-center rounded-full border border-line px-8 text-cream transition-all duration-300 hover:border-accent hover:text-accent">
              {s.hero.iletisimButon}
            </a>
          </Magnetic>

          {/* Üçüncü seçenek — buton değil, hafif bağlantı */}
          <div className="flex justify-center sm:justify-start">
            <CvButton boyut="mini" dil={dil} />
          </div>
        </div>

        {/* Teknoloji şeridi */}
        <div className="rise d-5 mt-12 max-w-3xl">
          <div className="hairline" />
          <ul className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2.5">
            {stack.map((tech) => (
              <li
                key={tech}
                className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted transition-colors hover:text-accent"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}