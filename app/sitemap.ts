import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { diller } from "@/i18n/config";

const SITE = "https://denizkilinc.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const tarih = new Date();

  /* Her dil için ana sayfa */
  const anaSayfalar = diller.map((dil) => ({
    url: `${SITE}/${dil}`,
    lastModified: tarih,
    changeFrequency: "monthly" as const,
    priority: 1,
  }));

  /* Her dil x her proje */
  const projeSayfalari = diller.flatMap((dil) =>
    projects.map((p) => ({
      url: `${SITE}/${dil}/projeler/${p.slug}`,
      lastModified: tarih,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }))
  );

  return [...anaSayfalar, ...projeSayfalari];
}