export const locales = ["zh", "en"] as const;

export type Locale = (typeof locales)[number];

export function isValidLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getOtherLocale(locale: Locale): Locale {
  return locale === "zh" ? "en" : "zh";
}

export const localeLabels: Record<Locale, string> = {
  zh: "中文",
  en: "English",
};
