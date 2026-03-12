import Link from "next/link";

import type { DocPage } from "@/lib/docs";
import type { Locale } from "@/lib/i18n";

type DocsTocProps = {
  locale: Locale;
  doc: DocPage;
};

export function DocsToc({ locale, doc }: DocsTocProps) {
  const heading = locale === "zh" ? "本页内容" : "On this page";

  return (
    <aside className="top-24 hidden h-fit lg:sticky xl:block">
      <div className="glass-panel rounded-[2rem] border border-[var(--line)] p-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--ink-muted)]">{heading}</p>
        <nav className="mt-4 space-y-1.5">
          {doc.sections.map((section) => (
            <Link
              key={section.id}
              href={`/${locale}/docs/${doc.slug}#${section.id}`}
              className="block rounded-xl px-3 py-2 text-sm text-[var(--ink-soft)] transition hover:bg-[rgba(255,255,255,0.56)] hover:text-[var(--ink)]"
            >
              {section.title}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}
