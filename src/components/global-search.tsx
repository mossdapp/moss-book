"use client";

import Link from "next/link";
import { startTransition, useDeferredValue, useEffect, useMemo, useState } from "react";

import { getDocs, siteCopy } from "@/lib/docs";
import type { Locale } from "@/lib/i18n";

function buildSearchText(input: string[]) {
  return input.join(" ").toLowerCase();
}

export function GlobalSearch({ locale }: { locale: Locale }) {
  const copy = siteCopy[locale];
  const docs = getDocs(locale);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query.trim().toLowerCase());

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const isShortcut = (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k";
      const isEscape = event.key === "Escape";

      if (isShortcut) {
        event.preventDefault();
        startTransition(() => setOpen((value) => !value));
      }

      if (isEscape) {
        startTransition(() => setOpen(false));
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const results = useMemo(() => {
    if (!deferredQuery) {
      return docs.slice(0, 10);
    }

    return docs.filter((doc) => {
      const sectionText = doc.sections
        .map((section) =>
          buildSearchText([
            section.title,
            ...(section.paragraphs ?? []),
            ...(section.bullets ?? []),
            ...(section.steps?.map((step) => `${step.title} ${step.description}`) ?? []),
            ...(section.cards?.map((card) => `${card.title} ${card.description}`) ?? []),
          ])
        )
        .join(" ");

      return buildSearchText([doc.title, doc.summary, doc.hero, sectionText]).includes(deferredQuery);
    });
  }, [deferredQuery, docs]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="rounded-full border border-[var(--line)] bg-[var(--surface)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--ink-soft)] transition hover:border-[rgba(156,107,58,0.22)] hover:bg-[var(--surface-strong)] hover:text-[var(--ink)]"
      >
        {copy.globalSearchButton}
      </button>

      {open ? (
        <div className="fixed inset-0 z-[100] bg-[rgba(20,16,12,0.18)] px-4 py-8 backdrop-blur-sm sm:px-6">
          <div className="glass-panel mx-auto max-w-3xl rounded-[2rem] border border-white/60 p-5 shadow-[var(--shadow-lg)]">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">{copy.searchTitle}</p>
                <p className="mt-1 text-xs text-[var(--ink-muted)]">{copy.globalSearchHint}</p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full border border-[var(--line)] bg-[var(--surface-strong)] px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--ink-soft)]"
              >
                Esc
              </button>
            </div>

            <input
              autoFocus
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={copy.searchPlaceholder}
              className="mt-4 w-full rounded-[1.25rem] border border-[var(--line)] bg-[var(--surface-strong)] px-4 py-4 text-sm text-[var(--ink)] outline-none placeholder:text-[var(--ink-muted)] focus:border-[rgba(156,107,58,0.3)]"
            />

            <div className="mt-4 max-h-[60vh] space-y-3 overflow-y-auto pr-1">
              {results.map((doc) => (
                <Link
                  key={doc.slug}
                  href={`/${locale}/docs/${doc.slug}`}
                  onClick={() => setOpen(false)}
                  className="block rounded-[1.5rem] border border-[var(--line)] bg-[rgba(255,255,255,0.72)] p-4 transition hover:border-[rgba(156,107,58,0.22)] hover:bg-[var(--surface-strong)]"
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">{doc.eyebrow}</p>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--ink-muted)]">{doc.slug}</p>
                  </div>
                  <h3 className="mt-2 text-xl font-semibold tracking-[-0.03em] text-[var(--ink)]">{doc.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-[var(--ink-soft)]">{doc.summary}</p>
                </Link>
              ))}

              {results.length === 0 ? (
                <div className="rounded-[1.5rem] border border-dashed border-[var(--line)] bg-[rgba(255,255,255,0.54)] px-4 py-6 text-sm text-[var(--ink-soft)]">
                  {copy.searchEmpty}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
