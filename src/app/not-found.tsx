import Link from "next/link";

import { siteCopy } from "@/lib/docs";

export default function NotFound() {
  const copy = siteCopy.zh;

  return (
    <main className="mx-auto flex min-h-[70vh] max-w-3xl items-center px-4 py-16 sm:px-6">
      <div className="glass-panel w-full rounded-[2.5rem] border border-[var(--line)] p-8 text-center shadow-[var(--shadow-lg)] sm:p-12">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">404</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[var(--ink)]">{copy.notFoundTitle}</h1>
        <p className="mt-4 text-base leading-8 text-[var(--ink-soft)]">
          {copy.notFoundBody}
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Link
            href="/zh"
            className="rounded-full bg-[var(--accent-strong)] px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:opacity-92"
          >
            {copy.backHome}
          </Link>
          <Link
            href="/zh/docs"
            className="rounded-full border border-[var(--line)] bg-[var(--surface-strong)] px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--ink)] transition hover:border-[rgba(156,107,58,0.22)]"
          >
            {copy.browseDocsButton}
          </Link>
        </div>
      </div>
    </main>
  );
}
