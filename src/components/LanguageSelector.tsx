import React from "react";
import { Globe, ChevronDown } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = React.useState(false);

  const languages = [
    { code: "id" as const, name: "Bahasa Indonesia", flag: "🇮🇩" },
    { code: "en" as const, name: "English", flag: "🇺🇸" },
  ];

  const current = languages.find((l) => l.code === language)!;

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 px-3 py-2 text-gray-700 hover:text-amber-800"
      >
        <Globe className="h-4 w-4" />
        <span className="text-sm">{current.flag}</span>
        <ChevronDown
          className={`h-4 w-4 transition ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute top-full right-0 mt-1 w-44 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
          {languages.map((l) => (
            <button
              key={l.code}
              onClick={() => {
                setLanguage(l.code);
                setOpen(false);
              }}
              className={`w-full text-left px-4 py-2 text-sm flex items-center gap-2 hover:bg-amber-50 hover:text-amber-800 ${
                l.code === language
                  ? "bg-amber-50 text-amber-800"
                  : "text-gray-700"
              }`}
            >
              <span>{l.flag}</span>
              <span>{l.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
