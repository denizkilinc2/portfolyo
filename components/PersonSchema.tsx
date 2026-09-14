import type { Dil } from "@/i18n/config";

/* ============================================
   PERSON YAPILANDIRILMIŞ VERİSİ (JSON-LD)
   Google'a kim olduğunu, ne yaptığını ve
   hangi profillerin sana ait olduğunu söyler.
   Görünmez — sadece arama motorları okur.
   ============================================ */

const SITE = "https://denizkilinc.dev";

const unvan: Record<Dil, string> = {
  tr: "Bilgisayar Mühendisi",
  en: "Computer Engineer",
  de: "Informatiker",
  nl: "Computer Engineer",
};

const aciklama: Record<Dil, string> = {
  tr: "Yapay zekâ modellerinden gömülü sistemlere, mobil uygulamalardan kurumsal web platformlarına kadar uçtan uca yazılım geliştiren bilgisayar mühendisi.",
  en: "Computer engineer building software end to end — from AI models and embedded systems to mobile apps and corporate web platforms.",
  de: "Informatiker, der Software von Anfang bis Ende entwickelt — von KI-Modellen und eingebetteten Systemen bis zu Mobile-Apps und Unternehmenswebsites.",
  nl: "Computer engineer die software van begin tot eind bouwt — van AI-modellen en embedded systemen tot mobiele apps en zakelijke webplatformen.",
};

type Props = {
  dil: Dil;
};

export default function PersonSchema({ dil }: Props) {
  const veri = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE}/#deniz-kilinc`,
    name: "Deniz Kılınç",
    givenName: "Deniz",
    familyName: "Kılınç",
    url: SITE,
    image: `${SITE}/${dil}/opengraph-image`,
    jobTitle: unvan[dil],
    description: aciklama[dil],
    email: "mailto:xdnz.klnc@gmail.com",

    /* Bu profiller aynı kişiye ait — Google kimlik bağını buradan kurar */
    sameAs: [
      "https://github.com/denizkilinc2",
      "https://www.linkedin.com/in/denizkilinc2",
    ],

    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Kahramanmaraş Sütçü İmam University",
      url: "https://www.ksu.edu.tr/",
    },

    /* Ülke bazında değil, uzaktan çalışmaya açık olduğunu belirtiyoruz */
    address: {
      "@type": "PostalAddress",
      addressCountry: "TR",
    },

    /* Uzmanlık alanları — Google bu terimlerle eşleştirme yapar */
    knowsAbout: [
      "Android Development",
      "Kotlin",
      "Jetpack Compose",
      "Edge AI",
      "TensorFlow Lite",
      "On-device Machine Learning",
      "Computer Vision",
      "Deep Learning",
      "PyTorch",
      "Vision Transformer",
      "YOLOv8",
      "ROS2",
      "Robotics",
      "Embedded Systems",
      "STM32",
      "CUDA",
      "NVIDIA Jetson",
      "Next.js",
      "TypeScript",
      "React",
      "Laravel",
      "Node.js",
      "FastAPI",
      "PostgreSQL",
      "Full-Stack Development",
    ],

    knowsLanguage: [
      { "@type": "Language", name: "Turkish", alternateName: "tr" },
      { "@type": "Language", name: "English", alternateName: "en" },
    ],

    /* Aranan çalışma biçimi */
    seeks: {
      "@type": "Demand",
      name: "Software engineering roles — on-site, hybrid or remote, in Türkiye and internationally",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(veri) }}
    />
  );
}