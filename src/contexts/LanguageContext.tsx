import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { translations, type Language } from "../i18n/translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, vars?: Record<string, string | number>) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

// "Hello {name}"
function interpolate(text: string, vars?: Record<string, string | number>) {
  if (!vars) return text;
  return text.replace(/\{(\w+)\}/g, (_, k) =>
    vars[k] !== undefined ? String(vars[k]) : `{${k}}`
  );
}

// Mendukung path seperti "home.hero.title"
function getByPath(obj: unknown, path: string) {
  return path.split(".").reduce<any>((acc, part) => (acc as any)?.[part], obj);
}

const STORAGE_KEY = "lang";
const DEFAULT_LANG: Language = "id";

export const LanguageProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [language, _setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as Language | null;
    return saved ?? DEFAULT_LANG;
  });

  // Sinkron ke <html lang="">
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  // Baca ?lang= saat awal load
  useEffect(() => {
    const q = new URLSearchParams(window.location.search).get(
      "lang"
    ) as Language | null;
    if (q && (q === "id" || q === "en") && q !== language) _setLanguage(q);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setLanguage = (lang: Language) => {
    _setLanguage(lang);
    localStorage.setItem(STORAGE_KEY, lang);
    const url = new URL(window.location.href);
    url.searchParams.set("lang", lang);
    window.history.replaceState({}, "", url.toString());
    document.documentElement.setAttribute("lang", lang);
  };

  const t = useMemo(() => {
    return (key: string, vars?: Record<string, string | number>) => {
      const value = getByPath(translations[language], key);
      if (typeof value === "string") return interpolate(value, vars);
      // Fallback ke default language
      const fb = getByPath(translations[DEFAULT_LANG], key);
      return typeof fb === "string" ? interpolate(fb, vars) : key;
    };
  }, [language]);

  const value = useMemo(() => ({ language, setLanguage, t }), [language, t]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
