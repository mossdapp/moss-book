import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { DocContent } from "@/components/doc-content";
import { DocsSidebar } from "@/components/docs-sidebar";
import { DocsToc } from "@/components/docs-toc";
import { getDocBySlug, getDocs } from "@/lib/docs";
import { isValidLocale, locales, type Locale } from "@/lib/i18n";

type PageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateStaticParams() {
  return locales.flatMap((locale) =>
    getDocs(locale).map((doc) => ({
      locale,
      slug: doc.slug,
    }))
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;

  if (!isValidLocale(locale)) {
    return { title: "1Do Book" };
  }

  const doc = getDocBySlug(locale, slug);

  if (!doc) {
    return { title: "1Do Book" };
  }

  return {
    title: `${doc.title} | 1Do Book`,
    description: doc.summary,
  };
}

export default async function DocPage({ params }: PageProps) {
  const { locale, slug } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const resolvedLocale = locale as Locale;
  const doc = getDocBySlug(resolvedLocale, slug);

  if (!doc) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-[1440px] px-4 pb-20 pt-8 sm:px-6 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)] xl:grid-cols-[280px_minmax(0,780px)_240px]">
        <DocsSidebar locale={resolvedLocale} activeSlug={doc.slug} />
        <DocContent locale={resolvedLocale} doc={doc} />
        <DocsToc locale={resolvedLocale} doc={doc} />
      </div>
    </main>
  );
}
