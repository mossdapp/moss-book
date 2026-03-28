import Link from "next/link";
import Image from "next/image";

import { GlobalSearch } from "@/components/global-search";
import { LanguageSwitcher } from "@/components/language-switcher";
import type { Locale } from "@/lib/i18n";

const navLabels: Record<Locale, { docs: string; runtime: string; store: string; labs: string }> = {
  zh: {
    docs: "Docs",
    runtime: "Runtime",
    store: "Store",
    labs: "Labs",
  },
  en: {
    docs: "Docs",
    runtime: "Runtime",
    store: "Store",
    labs: "Labs",
  },
};

type SiteHeaderProps = {
  locale: Locale;
};

export function SiteHeader({ locale }: SiteHeaderProps) {
  const labels = navLabels[locale];

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[rgba(243,239,231,0.7)] backdrop-blur-2xl">
      <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <Link href={`/${locale}`} className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--line)] bg-[var(--surface-strong)] shadow-[var(--shadow-md)]">
              <Image src="/moss-icon.svg" alt="Moss" width={22} height={22} />
            </div>
            <div>
              <span className="block text-[11px] font-semibold uppercase tracking-[0.26em] text-[var(--accent)]">
                Official Docs
              </span>
              <span className="block text-base font-semibold tracking-[-0.03em] text-[var(--ink)]">Moss Book</span>
            </div>
          </Link>
        </div>

        <nav className="flex flex-wrap items-center justify-end gap-2 sm:gap-3">
          <GlobalSearch locale={locale} />
          <Link
            href={`/${locale}/docs`}
            className="rounded-full border border-[var(--line)] bg-[var(--surface)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--ink-soft)] transition hover:border-[rgba(156,107,58,0.22)] hover:bg-[var(--surface-strong)] hover:text-[var(--ink)]"
          >
            {labels.docs}
          </Link>
          <a
            href="https://os.mossdapp.com"
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full border border-[var(--line)] bg-[var(--surface)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--ink-soft)] transition hover:border-[rgba(156,107,58,0.22)] hover:bg-[var(--surface-strong)] hover:text-[var(--ink)] sm:inline-flex"
          >
            {labels.runtime}
          </a>
          <a
            href="https://store.mossdapp.com/en"
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full border border-[var(--line)] bg-[var(--surface)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--ink-soft)] transition hover:border-[rgba(156,107,58,0.22)] hover:bg-[var(--surface-strong)] hover:text-[var(--ink)] md:inline-flex"
          >
            {labels.store}
          </a>
          <a
            href="https://labs.mossdapp.com"
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full border border-[var(--line)] bg-[var(--surface)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--ink-soft)] transition hover:border-[rgba(156,107,58,0.22)] hover:bg-[var(--surface-strong)] hover:text-[var(--ink)] lg:inline-flex"
          >
            {labels.labs}
          </a>
          <LanguageSwitcher locale={locale} />
        </nav>
      </div>
    </header>
  );
}
