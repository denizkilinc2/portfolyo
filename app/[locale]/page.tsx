import { notFound } from "next/navigation";
import Cursor from "@/components/Cursor";
import ScrollProgress from "@/components/ScrollProgress";
import CommandPalette from "@/components/CommandPalette";
import SocialDock from "@/components/SocialDock";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { dilMi } from "@/i18n/config";
import { getSozluk } from "@/i18n/sozluk";

export default async function Home({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (!dilMi(locale)) notFound();

  const s = getSozluk(locale);

  return (
    <>
      <Cursor />
      <ScrollProgress />
      <CommandPalette />
      <SocialDock s={s} />
      <Nav dil={locale} s={s} />
      <main>
        <Hero dil={locale} s={s} />
        <Projects dil={locale} s={s} />
        <About dil={locale} s={s} />
        <Contact s={s} />
      </main>
      <Footer dil={locale} s={s} />
    </>
  );
}