import Reveal from "./Reveal";
import Scramble from "./Scramble";
import Portre from "./Portre";
import CvButton from "./CvButton";
import { yetenekListe } from "@/i18n/yetenekler";
import type { Dil } from "@/i18n/config";
import type { Sozluk } from "@/i18n/tr";

type Props = {
  dil: Dil;
  s: Sozluk;
};

export default function About({ dil, s }: Props) {
  /* Sayısal özet */
  const sayilar = [
    { deger: "17+", etiket: s.hakkimda.sayiProje },
    { deger: "5+", etiket: s.hakkimda.sayiAlan },
    { deger: "20+", etiket: s.hakkimda.sayiTeknoloji },
  ];

  /* Künye bilgileri */
  const bilgi = [
    {
      etiket: s.hakkimda.bilgiEgitim,
      deger: s.hakkimda.bilgiEgitimDeger,
      genis: true,
    },
    { etiket: s.hakkimda.bilgiKonum, deger: s.hakkimda.bilgiKonumDeger },
    { etiket: s.hakkimda.bilgiCalisma, deger: s.hakkimda.bilgiCalismaDeger },
    { etiket: s.hakkimda.bilgiDurum, deger: s.hakkimda.bilgiDurumDeger },
  ];

  /* Yetenek grupları — başlıklar sözlükten, maddeler yetenekler.ts'ten */
  const yetenekler = [
    { baslik: s.hakkimda.yetenekAI, liste: yetenekListe.ai[dil] },
    { baslik: s.hakkimda.yetenekGomulu, liste: yetenekListe.gomulu[dil] },
    { baslik: s.hakkimda.yetenekMobil, liste: yetenekListe.mobil[dil] },
    { baslik: s.hakkimda.yetenekWeb, liste: yetenekListe.web[dil] },
  ];

  return (
    <section id="hakkimda" className="relative scroll-mt-24 px-6 py-24">
      {/* Arka plandaki soluk ışık */}
      <div className="glow left-[-12%] top-[30%] h-[26rem] w-[26rem] opacity-[0.09]" />

      <div className="relative mx-auto w-full max-w-6xl">
        {/* --- Bölüm başlığı --- */}
        <Reveal>
          <p className="eyebrow">
            <Scramble text={s.hakkimda.etiket} hiz={30} />
          </p>
        </Reveal>

        {/* --- Üst blok: fotoğraf + hikâye --- */}
        <div className="mt-8 grid gap-x-14 gap-y-16 lg:grid-cols-[minmax(0,250px)_1fr] lg:items-start">
          {/* Sol: fotoğraf */}
          <Reveal delay={60}>
            <div className="mx-auto w-full max-w-[250px] lg:sticky lg:top-28 lg:mx-0">
              <Portre yakindaMetin={s.hakkimda.fotografYakinda} />
            </div>
          </Reveal>

          {/* Sağ: hikâye */}
          <div>
            <Reveal delay={100}>
              <h2 className="max-w-2xl font-display text-[clamp(1.9rem,4vw,3rem)] leading-[1.1] tracking-tight">
                {s.hakkimda.baslikOnce}{" "}
                <span className="text-accent">{s.hakkimda.baslikVurgu}</span>
              </h2>
            </Reveal>

            <Reveal delay={140}>
              <div className="mt-7 flex max-w-2xl flex-col gap-5 leading-relaxed text-muted">
                <p>{s.hakkimda.paragraf1}</p>
                <p>{s.hakkimda.paragraf2}</p>
                <p>{s.hakkimda.paragraf3}</p>
              </div>
            </Reveal>

            {/* CV butonu */}
            <Reveal delay={180}>
              <div className="mt-9 flex">
                <CvButton dil={dil} />
              </div>
            </Reveal>

            {/* Sayısal özet */}
            <Reveal delay={220}>
              <div className="mt-10 grid max-w-lg grid-cols-3 gap-3">
                {sayilar.map((sy) => (
                  <div
                    key={sy.etiket}
                    className="rounded-xl border border-line bg-ink-card p-4 transition-colors duration-500 hover:border-accent/40"
                  >
                    <p className="font-display text-3xl leading-none text-accent">
                      {sy.deger}
                    </p>
                    <p className="mt-2 font-mono text-[0.6rem] uppercase leading-relaxed tracking-wider text-muted">
                      {sy.etiket}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Kişisel bilgiler */}
            <Reveal delay={260}>
              <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-5">
                {bilgi.map((b) => (
                  <div key={b.etiket} className={b.genis ? "w-full" : ""}>
                    <dt className="font-mono text-[0.6rem] uppercase tracking-wider text-muted">
                      {b.etiket}
                    </dt>
                    <dd className="mt-1.5 text-sm text-cream">{b.deger}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>

        {/* --- Alt blok: yetenek haritası --- */}
        <div className="mt-20">
          <Reveal>
            <p className="eyebrow">{s.hakkimda.yetenekler}</p>
          </Reveal>

          <div className="mt-7 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2">
            {yetenekler.map((grup, i) => (
              <Reveal key={grup.baslik} delay={i * 70}>
                <div className="group h-full bg-ink-soft p-7 transition-colors duration-500 hover:bg-ink-card">
                  <h3 className="flex items-center gap-3 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-cream">
                    <span className="h-px w-5 bg-accent transition-all duration-500 group-hover:w-9" />
                    {grup.baslik}
                  </h3>

                  <ul className="mt-5 flex flex-col gap-2.5">
                    {grup.liste.map((item) => (
                      <li
                        key={item}
                        className="text-sm leading-relaxed text-muted transition-colors duration-300 hover:text-cream"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}