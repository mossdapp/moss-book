import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

import { externalLinks, getDocs, siteCopy } from "@/lib/docs";
import { isValidLocale, locales, type Locale } from "@/lib/i18n";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const resolvedLocale = locale as Locale;
  const copy = siteCopy[resolvedLocale];
  const docs = getDocs(resolvedLocale);
  const titleLines = copy.homeTitle.split("\n");
  const featuredDocs = docs.slice(0, 4);

  return (
    <main className="mx-auto max-w-[1440px] px-4 pb-20 pt-8 sm:px-6 lg:px-8">
      <section className="glass-panel rounded-[2.75rem] border border-[var(--line)] p-8 shadow-[var(--shadow-lg)] sm:p-10 lg:p-14">
        <div className="max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">{copy.homeEyebrow}</p>
          <div className="mt-6 flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-[1.25rem] border border-[var(--line)] bg-[var(--surface-strong)] shadow-[var(--shadow-md)]">
              <Image src="/onedo-icon.svg" alt="1do" width={28} height={28} />
            </div>
            <span className="rounded-full border border-[var(--line)] bg-[var(--surface)] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--ink-soft)]">
              {copy.generatedFrom}
            </span>
          </div>
          <h1 className="mt-8 text-5xl font-semibold tracking-[-0.08em] text-[var(--ink)] sm:text-7xl lg:text-[6.5rem]">
            {titleLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--ink-soft)] sm:text-xl">
            {copy.homeIntro}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href={`/${resolvedLocale}/docs/overview`}
              className="rounded-full bg-[var(--accent-strong)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:opacity-92"
            >
              {copy.homeCta}
            </Link>
            <a
              href={externalLinks.app}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[var(--line)] bg-[var(--surface-strong)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--ink)] transition hover:border-[rgba(156,107,58,0.22)]"
            >
              {copy.homeSecondaryCta}
            </a>
            <a
              href={externalLinks.store}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[var(--line)] bg-[var(--surface-strong)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--ink)] transition hover:border-[rgba(156,107,58,0.22)]"
            >
              {copy.homeStoreCta}
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm text-[var(--ink-muted)]">
            <span>{docs.length} {resolvedLocale === "zh" ? "篇文档" : "docs"}</span>
            <span>{copy.audienceCards.length} {resolvedLocale === "zh" ? "条入口路径" : "entry paths"}</span>
          </div>
        </div>
      </section>

      <section className="mt-16 grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">
        <div className="pt-2">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">Audience</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-[var(--ink)]">{copy.audienceTitle}</h2>
          <p className="mt-4 text-base leading-8 text-[var(--ink-soft)]">
            {resolvedLocale === "zh"
              ? "把首页变成入口页，而不是信息堆叠页。先按角色分流，再进入具体文档。"
              : "Turn the homepage into a clean entry surface. Start with role-based routes, then drop into the right documentation path."}
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {copy.audienceCards.map((card, index) => (
            <Link
              key={card.title}
              href={card.href}
              className="rounded-[2rem] border border-[var(--line)] bg-[rgba(255,255,255,0.46)] p-5 transition hover:border-[rgba(156,107,58,0.18)] hover:bg-[var(--surface-strong)]"
            >
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
                {(index + 1).toString().padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-[var(--ink)]">{card.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--ink-soft)]">{card.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-16 grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">
        <div className="pt-2">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">{copy.readingMapEyebrow}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-[var(--ink)]">{copy.readingMapTitle}</h2>
          <p className="mt-4 text-base leading-8 text-[var(--ink-soft)]">
            {resolvedLocale === "zh"
              ? "优先阅读关键文档，建立产品模型、体验路径和接入方式。"
              : "Start from the core pages that explain the product model, user flow, and integration surface."}
          </p>
          <Link
            href={`/${resolvedLocale}/docs`}
            className="mt-6 inline-flex rounded-full border border-[var(--line)] bg-[var(--surface)] px-5 py-3 text-sm font-semibold text-[var(--ink)] transition hover:border-[rgba(156,107,58,0.22)]"
          >
            {copy.browseDocs}
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {featuredDocs.map((doc, index) => (
            <Link
              key={doc.slug}
              href={`/${resolvedLocale}/docs/${doc.slug}`}
              className="rounded-[2rem] border border-[var(--line)] bg-[rgba(255,255,255,0.46)] p-5 transition hover:border-[rgba(156,107,58,0.18)] hover:bg-[var(--surface-strong)]"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-full border border-[var(--line)] bg-[var(--surface)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--ink-soft)]">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--ink-muted)]">
                  {doc.eyebrow}
                </span>
              </div>
              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-[var(--ink)]">{doc.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--ink-soft)]">{doc.summary}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
