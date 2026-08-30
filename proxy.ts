import { NextResponse, type NextRequest } from "next/server";
import { diller, varsayilanDil } from "@/i18n/config";

/* Tarayıcının Accept-Language başlığından en uygun dili seçer.
   Örnek başlık: "de-DE,de;q=0.9,en;q=0.8" */
function tarayiciDili(request: NextRequest): string {
  const baslik = request.headers.get("accept-language");
  if (!baslik) return varsayilanDil;

  /* Başlığı ağırlığa (q değerine) göre sırala */
  const tercihler = baslik
    .split(",")
    .map((parca) => {
      const [kod, q] = parca.trim().split(";q=");
      return { kod: kod.split("-")[0].toLowerCase(), agirlik: q ? parseFloat(q) : 1 };
    })
    .sort((a, b) => b.agirlik - a.agirlik);

  for (const tercih of tercihler) {
    if ((diller as readonly string[]).includes(tercih.kod)) return tercih.kod;
  }

  return varsayilanDil;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  /* Adres zaten bir dille başlıyorsa dokunma */
  const dilVar = diller.some(
    (d) => pathname === `/${d}` || pathname.startsWith(`/${d}/`)
  );
  if (dilVar) return NextResponse.next();

  /* Dilsiz adres -> uygun dile yönlendir */
  const dil = tarayiciDili(request);
  const yeni = request.nextUrl.clone();
  yeni.pathname = `/${dil}${pathname === "/" ? "" : pathname}`;

  return NextResponse.redirect(yeni);
}

export const config = {
  /* Statik dosyalara, API'ye ve özel dosyalara karışma */
  matcher: [
    "/((?!api|_next|medya|favicon.ico|icon|opengraph-image|sitemap.xml|robots.txt).*)",
  ],
};