import type { Metadata } from "next";

/* metadataBase burada tanımlanıyor çünkü:
   - alt düzenler bu değeri devralır
   - kök düzenin generateMetadata'sı yok, çakışma olmuyor
   Sosyal medya önizleme görsellerinin tam adresi bundan üretilir. */
export const metadata: Metadata = {
  metadataBase: new URL("https://denizkilinc.dev"),
};

/* <html> ve <body> etiketleri app/[locale]/layout.tsx içinde,
   çünkü lang niteliği dile göre değişiyor. */
export default function RootLayout({ children }: LayoutProps<"/">) {
  return children;
}