// i18n entry point. Use these helpers in pages and components.
//
//   const lang = getLangFromUrl(Astro.url);
//   const t = useTranslations(lang);
//   t('nav.about'); // → "about" or "sobre"

import { defaultLocale, isLocale, locales, localeMeta, type Locale } from './config';
import { en, type Strings } from './locales/en';
import { ptBR } from './locales/pt-br';

export { defaultLocale, locales, localeMeta, isLocale };
export type { Locale, Strings };

const dictionaries: Record<Locale, Strings> = {
  en,
  'pt-br': ptBR,
};

/** Read the locale from the first URL segment. Defaults to `defaultLocale`. */
export function getLangFromUrl(url: URL): Locale {
  const seg = url.pathname.split('/').filter(Boolean)[0];
  return seg && isLocale(seg) ? seg : defaultLocale;
}

/** Returns a translation function bound to a locale, with English fallback. */
export function useTranslations(lang: Locale) {
  return function t<K extends keyof Strings>(key: K): Strings[K] {
    return dictionaries[lang][key] ?? dictionaries[defaultLocale][key];
  };
}

/**
 * Build the URL for the same logical page in another locale.
 * E.g. `/blog/foo` → `/pt-br/blog/foo`, `/pt-br/projects/bar` → `/projects/bar`.
 */
export function localizedPath(pathname: string, target: Locale): string {
  // strip any existing locale segment
  let stripped = pathname;
  for (const l of locales) {
    if (l === defaultLocale) continue;
    if (stripped === `/${l}` || stripped === `/${l}/`) {
      stripped = '/';
      break;
    }
    if (stripped.startsWith(`/${l}/`)) {
      stripped = stripped.slice(l.length + 1);
      break;
    }
  }
  if (target === defaultLocale) return stripped || '/';
  // ensure leading slash and avoid double slashes
  const tail = stripped.startsWith('/') ? stripped : `/${stripped}`;
  return tail === '/' ? `/${target}/` : `/${target}${tail}`;
}

/**
 * Strip a locale prefix from a content collection id.
 * E.g. `en/tip` → `tip`. Used to build clean route slugs.
 */
export function stripLocaleFromId(id: string): { lang: Locale; slug: string } {
  const [first, ...rest] = id.split('/');
  if (isLocale(first)) {
    return { lang: first, slug: rest.join('/') };
  }
  return { lang: defaultLocale, slug: id };
}
