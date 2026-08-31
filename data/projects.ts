/* ============================================
   PROJE YAPISI
   Burada SADECE dile bağlı olmayan bilgiler var:
   sıra, slug, kategori, teknolojiler, linkler.

   Metinler (ad, özet, vurgular, problem/çözüm/sonuç)
   i18n/projeler/<dil>.ts dosyalarında.
   ============================================ */

export type Kategori =
  | "Yapay Zekâ"
  | "Mobil"
  | "Gömülü & Robotik"
  | "Web"
  | "Oyun & Araçlar";

export type Gorsel = {
  src: string;
  alt: string;
};

export type Project = {
  no: string;
  slug: string;
  kategori: Kategori;
  stack: string[];
  yil?: string;
  github?: string;
  demo?: string;
  gorseller?: Gorsel[];
};

export const kategoriler: Kategori[] = [
  "Yapay Zekâ",
  "Mobil",
  "Gömülü & Robotik",
  "Web",
  "Oyun & Araçlar",
];

export const projects: Project[] = [
  {
    no: "01",
    slug: "rhinoai",
    kategori: "Mobil",
    stack: ["Kotlin", "Jetpack Compose", "Python", "TensorFlow Lite", "ML Kit", "ViT"],
    github: "https://github.com/denizkilinc2/RhinoAI",
  },
  {
    no: "02",
    slug: "otonom-insansiz-kara-araci",
    kategori: "Gömülü & Robotik",
    stack: ["Python", "C++", "ROS2", "YOLOv8", "Jetson Orin Nano", "CUDA", "OpenCV"],
  },
  {
    no: "03",
    slug: "time-to-work",
    kategori: "Web",
    stack: ["TypeScript", "Next.js", "React", "Tailwind CSS", "Framer Motion", "i18n"],
    github: "https://github.com/denizkilinc2/timotowork-web",
    demo: "https://www.ttw-international.nl/",
  },
  {
    no: "04",
    slug: "focuspulse",
    kategori: "Yapay Zekâ",
    stack: ["Python", "OpenCV", "MediaPipe", "ML Kit", "TensorFlow Lite"],
    github: "https://github.com/denizkilinc2/FocusPulse",
  },
  {
    no: "05",
    slug: "codelens-ar",
    kategori: "Mobil",
    stack: ["Kotlin", "Flutter", "Python", "OpenCV", "Vision Modelleri"],
    github: "https://github.com/denizkilinc2/CodeLens-AR",
  },
  {
    no: "06",
    slug: "akilli-atik-yonetimi",
    kategori: "Web",
    stack: ["Node.js", "Express", "PostgreSQL", "MQTT", "REST API", "SQL"],
    github: "https://github.com/atik-yonetimi/Backend-DB",
  },
  {
    no: "07",
    slug: "vit-bigru-pipeline",
    kategori: "Yapay Zekâ",
    stack: ["Python", "PyTorch", "TensorFlow", "NumPy", "Pandas", "Seaborn", "CUDA"],
  },
  {
    no: "08",
    slug: "fuzyon-akademi",
    kategori: "Web",
    stack: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3", "cPanel"],
    demo: "https://fuzyonakademi.com/",
  },
  {
    no: "09",
    slug: "otel-temizlik-takip",
    kategori: "Web",
    stack: ["Laravel", "PHP", "MariaDB", "Blade", "QR", "cPanel"],
    demo: "https://teknohygiene.com/",
  },
  {
    no: "10",
    slug: "stm32-arduino-gomulu",
    kategori: "Gömülü & Robotik",
    stack: ["C", "C++", "STM32", "ARM Cortex-M", "Arduino", "UART/SPI/I2C"],
  },
  {
    no: "11",
    slug: "gercek-zamanli-backend",
    kategori: "Web",
    stack: ["Python", "FastAPI", "Flask", "Socket.IO", "WebSockets", "PostgreSQL", "Tailscale"],
  },
  {
    no: "12",
    slug: "resnet-vgg-kiyaslama",
    kategori: "Yapay Zekâ",
    stack: ["Python", "TensorFlow", "Keras", "CUDA", "Matplotlib", "Seaborn"],
  },
  {
    no: "13",
    slug: "anadolu-diyabet-okulu",
    kategori: "Web",
    stack: ["Laravel", "PHP", "MySQL", "Blade", "Bunny Stream", "cPanel"],
    demo: "https://anadoludiyabetokulu.com/",
  },
  {
    no: "14",
    slug: "stok-takip",
    kategori: "Mobil",
    stack: ["React Native", "Expo", "TypeScript"],
  },
  {
    no: "15",
    slug: "ai4change",
    kategori: "Yapay Zekâ",
    stack: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
  },
  {
    no: "16",
    slug: "kullanici-yonetim-sistemi",
    kategori: "Web",
    stack: ["PHP", "MySQL", "Apache", "JavaScript", "HTML5", "CSS3"],
  },
  {
    no: "17",
    slug: "2d-buyucu-savasi",
    kategori: "Oyun & Araçlar",
    stack: ["Java", "Swing/AWT", "C#", "OOP", "NetBeans"],
  },
];

/* Slug'a göre tek proje getirir */
export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

/* Bir projenin listedeki komşularını getirir — "sonraki proje" bağlantısı için */
export function getKomsular(slug: string) {
  const i = projects.findIndex((p) => p.slug === slug);
  if (i === -1) return { onceki: undefined, sonraki: undefined };
  return {
    onceki: i > 0 ? projects[i - 1] : projects[projects.length - 1],
    sonraki: i < projects.length - 1 ? projects[i + 1] : projects[0],
  };
}