import { notFound } from "next/navigation";

import { DocsSearch } from "@/components/docs-search";
import { DocsSidebar } from "@/components/docs-sidebar";
import { getDocs, siteCopy } from "@/lib/docs";
import { isValidLocale, locales, type Locale } from "@/lib/i18n";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function DocsIndexPage({ params }: PageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const resolvedLocale = locale as Locale;
  const copy = siteCopy[resolvedLocale];
  const docs = getDocs(resolvedLocale);
  const groups = Array.from(new Set(docs.map((doc) => doc.group)));

  return (
    <main className="mx-auto max-w-[1440px] px-4 pb-20 pt-8 sm:px-6 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)] xl:grid-cols-[280px_minmax(0,920px)]">
        <DocsSidebar locale={resolvedLocale} />

        <div className="glass-panel rounded-[2.5rem] border border-[var(--line)] p-6 shadow-[var(--shadow-lg)] sm:p-8 lg:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--accent)]">{copy.docsEyebrow}</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-[-0.06em] text-[var(--ink)] sm:text-5xl lg:text-6xl">
            {copy.docsTitle}
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-[var(--ink-soft)]">{copy.docsIntro}</p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-[1.75rem] border border-[var(--line)] bg-[rgba(255,255,255,0.44)] p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--ink-muted)]">
                {resolvedLocale === "zh" ? "总页面数" : "Total pages"}
              </p>
              <p className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-[var(--ink)]">{docs.length}</p>
            </div>
            <div className="rounded-[1.75rem] border border-[var(--line)] bg-[rgba(255,255,255,0.44)] p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--ink-muted)]">
                {resolvedLocale === "zh" ? "文档分组" : "Groups"}
              </p>
              <p className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-[var(--ink)]">{groups.length}</p>
            </div>
            <div className="rounded-[1.75rem] border border-[var(--line)] bg-[rgba(255,255,255,0.44)] p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--ink-muted)]">
                {resolvedLocale === "zh" ? "推荐起点" : "Start here"}
              </p>
              <p className="mt-3 text-xl font-semibold tracking-[-0.04em] text-[var(--ink)]">{docs[0]?.title}</p>
            </div>
          </div>

          <DocsSearch locale={resolvedLocale} docs={docs} />
        </div>
      </div>
    </main>
  );
}
