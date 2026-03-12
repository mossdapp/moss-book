"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { getOtherLocale, localeLabels, type Locale } from "@/lib/i18n";

type LanguageSwitcherProps = {
  locale: Locale;
};

export function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const nextLocale = getOtherLocale(locale);

  const targetPath = pathname.startsWith(`/${locale}`)
    ? pathname.replace(`/${locale}`, `/${nextLocale}`)
    : `/${nextLocale}`;

  return (
    <Link
      href={targetPath}
      className="rounded-full border border-[rgba(156,107,58,0.16)] bg-[var(--accent-soft)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent-strong)] transition hover:bg-[rgba(156,107,58,0.18)]"
    >
      {localeLabels[nextLocale]}
    </Link>
  );
}
