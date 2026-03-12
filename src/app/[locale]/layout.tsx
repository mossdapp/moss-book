import type { ReactNode } from "react";
import { notFound } from "next/navigation";

import { SiteHeader } from "@/components/site-header";
import { isValidLocale, type Locale } from "@/lib/i18n";

type LocaleLayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  return (
    <>
      <SiteHeader locale={locale as Locale} />
      {children}
    </>
  );
}
