import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import Footer from "../components/Footer";

const Terms: React.FC = () => {
  const { t } = useLanguage();

  // daftar section yang akan dirender berurutan
  const sections = [
    "general",
    "products",
    "ordering",
    "shipping",
    "returns",
    "privacy",
    "liability",
    "contact",
  ] as const;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold text-amber-800 mb-6">
            {t("nav.terms")}
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {t("terms.hero.subtitle")}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 space-y-12">
          {sections.map((key, idx) => {
            const title = t(`terms.sections.${key}.title`);
            const isContact = key === "contact";
            return (
              <div
                key={key}
                className={`${
                  isContact
                    ? "bg-amber-50 border-2 border-amber-200"
                    : "bg-white shadow-lg"
                } rounded-2xl p-8`}
              >
                <h2 className="text-2xl font-bold text-amber-800 mb-6">
                  {idx + 1}. {title}
                </h2>

                {/* section paragraphs */}
                {!isContact && (
                  <div className="space-y-4 text-gray-700">
                    {[0, 1, 2, 3, 4].map((i) => {
                      const text = t(`terms.sections.${key}.body.${i}`);
                      return text &&
                        text !== `terms.sections.${key}.body.${i}` ? (
                        <p key={i}>{text}</p>
                      ) : null;
                    })}
                  </div>
                )}

                {/* contact grid */}
                {isContact && (
                  <div className="space-y-4 text-gray-700">
                    <p>{t("terms.sections.contact.intro")}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p>
                          <strong>
                            {t("terms.sections.contact.labels.whatsapp")}:
                          </strong>{" "}
                          {t("terms.sections.contact.values.whatsapp")}
                        </p>
                        <p>
                          <strong>
                            {t("terms.sections.contact.labels.email")}:
                          </strong>{" "}
                          {t("terms.sections.contact.values.email")}
                        </p>
                      </div>
                      <div>
                        <p>
                          <strong>
                            {t("terms.sections.contact.labels.address")}:
                          </strong>{" "}
                          {t("terms.sections.contact.values.address")}
                        </p>
                        <p>
                          <strong>
                            {t("terms.sections.contact.labels.hours")}:
                          </strong>{" "}
                          {t("terms.sections.contact.values.hours")}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Terms;
