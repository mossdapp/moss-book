import Link from "next/link";
import Image from "next/image";

import type { DocPage, DocTone } from "@/lib/docs";
import { getAdjacentDocs, siteCopy } from "@/lib/docs";
import type { Locale } from "@/lib/i18n";

const toneClassMap: Record<DocTone, string> = {
  default: "border-[var(--line)] bg-[rgba(255,255,255,0.56)] text-[var(--ink-soft)]",
  accent: "border-[rgba(156,107,58,0.14)] bg-[linear-gradient(135deg,rgba(242,232,220,0.98),rgba(245,241,233,0.92))] text-[var(--ink)]",
  warning: "border-[rgba(191,136,54,0.14)] bg-[linear-gradient(135deg,rgba(253,244,221,0.98),rgba(248,236,214,0.92))] text-[var(--ink)]",
};

type DocContentProps = {
  locale: Locale;
  doc: DocPage;
};

export function DocContent({ locale, doc }: DocContentProps) {
  const { previous, next } = getAdjacentDocs(locale, doc.slug);
  const copy = siteCopy[locale];

  return (
    <article className="glass-panel min-w-0 rounded-[2.5rem] border border-[var(--line)] p-6 shadow-[var(--shadow-lg)] sm:p-8 lg:p-10">
      <header className="border-b border-[var(--line)] pb-10">
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">{doc.eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.07em] text-[var(--ink)] sm:text-5xl lg:text-6xl">
          {doc.title}
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--ink-soft)]">{doc.hero}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <span className="rounded-full border border-[var(--line)] bg-[rgba(255,255,255,0.52)] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--ink-soft)]">
            {doc.sections.length} {locale === "zh" ? "个章节" : "sections"}
          </span>
          <span className="rounded-full border border-[var(--line)] bg-[rgba(255,255,255,0.52)] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--ink-soft)]">
            {doc.slug}
          </span>
        </div>
      </header>

      <div className="mt-10 space-y-14">
        {doc.sections.map((section, index) => (
          <section key={section.id} id={section.id} className="scroll-mt-28">
            <div className="mb-6 flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-[var(--line)] bg-[rgba(255,255,255,0.54)] text-xs font-semibold text-[var(--accent-strong)]">
                {(index + 1).toString().padStart(2, "0")}
              </span>
              <div className="min-w-0">
                <h2 className="text-2xl font-semibold tracking-[-0.04em] text-[var(--ink)] sm:text-[2rem]">
                  {section.title}
                </h2>
                <div className="mt-3 h-px w-16 bg-[var(--line)]" />
              </div>
            </div>

            {section.paragraphs ? (
              <div className="space-y-4">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="max-w-3xl text-[15px] leading-8 text-[var(--ink-soft)] sm:text-base">
                    {paragraph}
                  </p>
                ))}
              </div>
            ) : null}

            {section.bullets ? (
              <ul className="mt-6 space-y-3">
                {section.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-[15px] leading-8 text-[var(--ink-soft)] sm:text-base">
                    <span className="mt-3 block h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            ) : null}

            {section.steps ? (
              <div className="mt-6 grid gap-4">
                {section.steps.map((step, stepIndex) => (
                  <div
                    key={step.title}
                    className="rounded-[1.75rem] border border-[var(--line)] bg-[rgba(255,255,255,0.52)] p-5"
                  >
                    <div className="flex items-center gap-3">
                      <span className="rounded-full border border-[rgba(156,107,58,0.14)] bg-[var(--accent-soft)] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--accent-strong)]">
                        {locale === "zh" ? `步骤 ${stepIndex + 1}` : `Step ${stepIndex + 1}`}
                      </span>
                      <h3 className="text-lg font-semibold text-[var(--ink)]">{step.title}</h3>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-[var(--ink-soft)]">{step.description}</p>
                  </div>
                ))}
              </div>
            ) : null}

            {section.cards ? (
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {section.cards.map((card) =>
                  card.href ? (
                    <Link
                      key={card.title}
                      href={card.href}
                      target={card.external ? "_blank" : undefined}
                      rel={card.external ? "noreferrer" : undefined}
                      className="group rounded-[1.75rem] border border-[var(--line)] bg-[rgba(255,255,255,0.52)] p-5 transition hover:border-[rgba(156,107,58,0.2)] hover:bg-[var(--surface-strong)]"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <h3 className="text-lg font-semibold text-[var(--ink)]">{card.title}</h3>
                        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                          {card.external ? copy.external : copy.read}
                        </span>
                      </div>
                      <p className="mt-3 text-sm leading-7 text-[var(--ink-soft)]">{card.description}</p>
                    </Link>
                  ) : (
                    <div key={card.title} className="rounded-[1.75rem] border border-[var(--line)] bg-[rgba(255,255,255,0.52)] p-5">
                      <h3 className="text-lg font-semibold text-[var(--ink)]">{card.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-[var(--ink-soft)]">{card.description}</p>
                    </div>
                  )
                )}
              </div>
            ) : null}

            {section.links ? (
              <div className="mt-6 flex flex-wrap gap-3">
                {section.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noreferrer" : undefined}
                    className="rounded-full border border-[var(--line)] bg-[var(--surface-strong)] px-4 py-2 text-sm font-medium text-[var(--ink)] transition hover:border-[rgba(156,107,58,0.2)]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ) : null}

            {section.visuals ? (
              <div className="mt-6 grid gap-4">
                {section.visuals.map((visual) => (
                  <figure
                    key={`${visual.src}-${visual.alt}`}
                    className="overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[rgba(255,255,255,0.52)] p-4"
                  >
                    <div className="overflow-hidden rounded-[1.5rem] border border-[var(--line)] bg-[rgba(252,250,244,0.9)]">
                      <Image
                        src={visual.src}
                        alt={visual.alt}
                        width={1600}
                        height={900}
                        className="h-auto w-full"
                      />
                    </div>
                    {visual.caption ? (
                      <figcaption className="mt-3 text-sm leading-7 text-[var(--ink-soft)]">{visual.caption}</figcaption>
                    ) : null}
                  </figure>
                ))}
              </div>
            ) : null}

            {section.code ? (
              <div className="mt-6 overflow-hidden rounded-[2rem] border border-[rgba(23,20,17,0.12)] bg-[#171310]">
                {section.code.caption ? (
                  <div className="border-b border-white/10 px-5 py-3 text-xs uppercase tracking-[0.22em] text-white/65">
                    {section.code.caption}
                  </div>
                ) : null}
                <pre className="overflow-x-auto px-5 py-5 text-sm leading-7 text-white/90">
                  <code>{section.code.content}</code>
                </pre>
              </div>
            ) : null}

            {section.callout ? (
              <div className={`mt-6 rounded-[1.75rem] border p-5 ${toneClassMap[section.callout.tone ?? "default"]}`}>
                <h3 className="text-base font-semibold">{section.callout.title}</h3>
                <p className="mt-2 text-sm leading-7">{section.callout.body}</p>
              </div>
            ) : null}
          </section>
        ))}
      </div>

      <footer className="mt-14 grid gap-4 border-t border-[var(--line)] pt-8 md:grid-cols-2">
        {previous ? (
          <Link
            href={`/${locale}/docs/${previous.slug}`}
            className="rounded-[1.75rem] border border-[var(--line)] bg-[rgba(255,255,255,0.52)] p-5 transition hover:border-[rgba(156,107,58,0.2)]"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--ink-muted)]">{copy.previous}</p>
            <p className="mt-2 text-lg font-semibold text-[var(--ink)]">{previous.title}</p>
            <p className="mt-2 text-sm leading-7 text-[var(--ink-soft)]">{previous.summary}</p>
          </Link>
        ) : (
          <div className="hidden md:block" />
        )}

        {next ? (
          <Link
            href={`/${locale}/docs/${next.slug}`}
            className="rounded-[1.75rem] border border-[var(--line)] bg-[rgba(255,255,255,0.52)] p-5 text-left transition hover:border-[rgba(156,107,58,0.2)] md:text-right"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--ink-muted)]">{copy.next}</p>
            <p className="mt-2 text-lg font-semibold text-[var(--ink)]">{next.title}</p>
            <p className="mt-2 text-sm leading-7 text-[var(--ink-soft)]">{next.summary}</p>
          </Link>
        ) : null}
      </footer>
    </article>
  );
}
