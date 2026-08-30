import { redirect } from "next/navigation";
import { diller, dilMi, varsayilanDil } from "@/i18n/config";

/* /tr/projeler gibi bir adres tek başına anlamlı değil —
   ana sayfanın projeler bölümüne yönlendiriyoruz. */
export function generateStaticParams() {
  return diller.map((locale) => ({ locale }));
}

export default async function ProjelerYonlendir({
  params,
}: PageProps<"/[locale]/projeler">) {
  const { locale } = await params;
  const dil = dilMi(locale) ? locale : varsayilanDil;
  redirect(`/${dil}#projeler`);
}