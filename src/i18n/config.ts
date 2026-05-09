// Locale config for the site.
// To add a new language, see ./ADDING_LANGUAGES.md

export const locales = ['en', 'pt-br'] as const;
export type Locale = typeof locales[number];

export const defaultLocale: Locale = 'en';

export const localeMeta: Record<Locale, {
  /** ISO code used in <html lang="..."> */
  htmlLang: string;
  /** Short label shown in the picker (uppercase, ~2-3 chars) */
  label: string;
  /** Full name shown as aria-label / hover */
  name: string;
  /** Emoji flag for the language picker. Avoid US flag for English — UK is used. */
  flag: string;
  /** Locale used by Date.toLocaleDateString for formatted dates */
  dateLocale: string;
}> = {
  en: {
    htmlLang: 'en',
    label: 'EN',
    name: 'English',
    flag: '🇬🇧',
    dateLocale: 'en-US',
  },
  'pt-br': {
    htmlLang: 'pt-BR',
    label: 'PT',
    name: 'Português (Brasil)',
    flag: '🇧🇷',
    dateLocale: 'pt-BR',
  },
};

/** Check if a string is a valid configured locale. */
export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
