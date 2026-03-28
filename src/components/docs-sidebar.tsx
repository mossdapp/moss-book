import Link from "next/link";

import { docGroups, getDocs, siteCopy } from "@/lib/docs";
import type { Locale } from "@/lib/i18n";

type DocsSidebarProps = {
  locale: Locale;
  activeSlug?: string;
};

export function DocsSidebar({ locale, activeSlug }: DocsSidebarProps) {
  const groups = docGroups[locale];
  const docs = getDocs(locale);
  const copy = siteCopy[locale];
  const helperText =
    locale === "zh"
      ? "按先理解、核心机制、应用案例、进阶阅读和集成说明 5 条路径组织。"
      : "Organized into five paths: start here, core model, app cases, advanced, and integration.";

  return (
    <aside className="top-24 h-fit lg:sticky">
      <div className="glass-panel rounded-[2rem] border border-[var(--line)] p-4 sm:p-5">
        <div className="mb-6 border-b border-[var(--line)] pb-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">{copy.navSubtitle}</p>
          <h2 className="mt-2 text-lg font-semibold tracking-[-0.03em] text-[var(--ink)]">{copy.navTitle}</h2>
          <p className="mt-2 text-sm leading-6 text-[var(--ink-muted)]">{helperText}</p>
        </div>

        <div className="space-y-6">
          {groups.map((group) => {
            const items = docs.filter((doc) => doc.group === group.key);

            return (
              <div key={group.key}>
                <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--ink-muted)]">
                  {group.title}
                </p>
                <div className="space-y-1">
                  {items.map((doc) => {
                    const isActive = doc.slug === activeSlug;

                    return (
                      <Link
                        key={doc.slug}
                        href={`/${locale}/docs/${doc.slug}`}
                        className={[
                          "block rounded-2xl px-3 py-3 text-sm transition",
                          isActive
                            ? "border border-[rgba(156,107,58,0.16)] bg-[var(--surface-strong)] text-[var(--ink)] shadow-[var(--shadow-md)]"
                            : "border border-transparent text-[var(--ink-soft)] hover:border-[var(--line)] hover:bg-[rgba(255,255,255,0.54)] hover:text-[var(--ink)]",
                        ].join(" ")}
                      >
                        <span className="block font-medium">{doc.title}</span>
                        <span className="mt-1 block text-xs text-current opacity-70">{doc.summary}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
