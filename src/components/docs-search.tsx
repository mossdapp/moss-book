"use client";

import Link from "next/link";
import { useDeferredValue, useMemo, useState } from "react";

import type { DocPage } from "@/lib/docs";
import { siteCopy } from "@/lib/docs";
import type { Locale } from "@/lib/i18n";

type DocsSearchProps = {
  locale: Locale;
  docs: DocPage[];
};

function buildSearchText(doc: DocPage) {
  const sectionText = doc.sections
    .map((section) =>
      [
        section.title,
        ...(section.paragraphs ?? []),
        ...(section.bullets ?? []),
        ...(section.steps?.map((step) => `${step.title} ${step.description}`) ?? []),
        ...(section.cards?.map((card) => `${card.title} ${card.description}`) ?? []),
      ].join(" ")
    )
    .join(" ");

  return `${doc.title} ${doc.summary} ${doc.hero} ${sectionText}`.toLowerCase();
}

export function DocsSearch({ locale, docs }: DocsSearchProps) {
  const copy = siteCopy[locale];
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query.trim().toLowerCase());

  const filteredDocs = useMemo(() => {
    if (!deferredQuery) {
      return docs;
    }

    return docs.filter((doc) => buildSearchText(doc).includes(deferredQuery));
  }, [deferredQuery, docs]);

  return (
    <section className="mt-10 rounded-[2rem] border border-[var(--line)] bg-[var(--surface)] p-5 sm:p-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">{copy.searchTitle}</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-[var(--ink)]">
            {filteredDocs.length} / {docs.length}
          </h2>
        </div>

        <label className="block w-full lg:max-w-xl">
          <span className="sr-only">{copy.searchTitle}</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={copy.searchPlaceholder}
            className="w-full rounded-full border border-[var(--line)] bg-[var(--surface-strong)] px-5 py-3 text-sm text-[var(--ink)] outline-none transition placeholder:text-[var(--ink-muted)] focus:border-[rgba(156,107,58,0.3)]"
          />
        </label>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        {filteredDocs.map((doc) => (
          <Link
            key={doc.slug}
            href={`/${locale}/docs/${doc.slug}`}
            className="rounded-[1.5rem] border border-[var(--line)] bg-[rgba(255,255,255,0.72)] p-4 transition hover:border-[rgba(156,107,58,0.2)] hover:bg-[var(--surface-strong)]"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">{doc.eyebrow}</p>
            <h3 className="mt-2 text-xl font-semibold tracking-[-0.03em] text-[var(--ink)]">{doc.title}</h3>
            <p className="mt-2 text-sm leading-7 text-[var(--ink-soft)]">{doc.summary}</p>
          </Link>
        ))}
      </div>

      {filteredDocs.length === 0 ? (
        <div className="mt-5 rounded-[1.5rem] border border-dashed border-[var(--line)] bg-[rgba(255,255,255,0.54)] px-4 py-6 text-sm text-[var(--ink-soft)]">
          {copy.searchEmpty}
        </div>
      ) : null}
    </section>
  );
}
