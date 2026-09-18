import Magnetic from "./Magnetic";
import Scramble from "./Scramble";
import ParticleField from "./ParticleField";
import Portre from "./Portre";
import CvButton from "./CvButton";
import type { Dil } from "@/i18n/config";
import type { Sozluk } from "@/i18n/tr";

type Props = {
  dil: Dil;
  s: Sozluk;
};

export default function Hero({ dil, s }: Props) {
  /* Alan bazlı teknoloji şeridi */
  const alanlar = [
    {
      baslik: s.hakkimda.yetenekAI,
      teknolojiler: ["PyTorch", "TensorFlow", "YOLOv8", "TFLite"],
    },
    {
      baslik: s.hakkimda.yetenekGomulu,
      teknolojiler: ["ROS2", "CUDA", "STM32", "C++"],
    },
    {
      baslik: s.hakkimda.yetenekMobil,
      teknolojiler: ["Kotlin", "Jetpack Compose", "React Native"],
    },
    {
      baslik: s.hakkimda.yetenekWeb,
      teknolojiler: ["Next.js", "TypeScript", "Laravel", "Node.js"],
    },
  ];

  return (
    <section className="relative flex min-h-dvh items-center overflow-hidden px-6 pb-36 pt-28">
      {/* --- Arka plan katmanları --- */}
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-25" />


      <ParticleField />
      <div className="glow left-[-15%] top-[10%] h-[30rem] w-[30rem]" />
      <div className="glow bottom-[-5%] right-[-10%] h-96 w-96 opacity-[0.08]" />

      {/* --- İçerik: solda metin, sağda portre --- */}
      {/* items-start ile üstleri hizalanıyor, sütun genişliği dengeli */}
      <div className="relative mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1fr_300px] lg:items-start lg:gap-14">
        {/* ---------- SOL: metin ---------- */}
        <div>
          {/* Kimlik satırı */}
          <div className="rise d-1 flex flex-wrap items-center gap-x-5 gap-y-3">
            <span className="flex flex-col">
              <span className="text-[1.05rem] leading-tight text-cream">
                Deniz Kılınç
              </span>
              <span className="mt-1.5 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted">
                {s.hero.unvan}
              </span>
            </span>

            <span className="hidden h-8 w-px bg-line sm:block" />

            <p className="eyebrow flex items-center gap-2.5">
              <span className="dot" />
              <Scramble text={s.hero.musait} hemen delay={600} hiz={28} />
            </p>
          </div>

          {/* Ana başlık */}
          <h1 className="rise d-2 mt-7 font-display text-[clamp(2.2rem,5.4vw,4rem)] leading-[1.03] tracking-tight">
            {s.hero.baslikOnce}{" "}
            <span className="text-accent">
              <Scramble text={s.hero.baslikVurgu} hemen delay={1100} hiz={40} />
            </span>{" "}
            {s.hero.baslikSonra}
          </h1>

          {/* Açıklama */}
          <p className="rise d-3 mt-6 max-w-xl leading-relaxed text-muted">
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

            <div className="flex justify-center sm:justify-start">
              <CvButton boyut="mini" dil={dil} />
            </div>
          </div>
        </div>

        {/* ---------- SAĞ: büyük portre ---------- */}
        {/* mt-1 ile "Deniz Kılınç" satırıyla üstü hizalanıyor */}
        <div className="rise d-3 order-first mx-auto w-full max-w-[240px] lg:order-last lg:mt-1 lg:max-w-none">
          <Portre yakindaMetin={s.hakkimda.fotografYakinda} boyut="buyuk" />
        </div>
      </div>

      {/* --- Alan bazlı teknoloji şeridi: tam genişlik, en altta --- */}
      <div className="rise d-5 absolute inset-x-0 bottom-10 hidden px-6 lg:block">
        <div className="mx-auto w-full max-w-6xl">
          <div className="hairline" />
          <dl className="mt-5 grid grid-cols-4 gap-x-8">
            {alanlar.map((alan) => (
              <div key={alan.baslik} className="group">
                <dt className="flex items-center gap-2.5 font-mono text-[0.58rem] uppercase tracking-[0.16em] text-accent">
                  <span className="h-px w-3 bg-accent transition-all duration-500 group-hover:w-5" />
                  {alan.baslik}
                </dt>
                <dd className="mt-2.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.8rem] leading-relaxed text-muted">
                  {alan.teknolojiler.map((tech, i) => (
                    <span key={tech} className="flex items-center gap-2">
                      {i > 0 && (
                        <span className="text-line-strong" aria-hidden="true">
                          ·
                        </span>
                      )}
                      {tech}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}