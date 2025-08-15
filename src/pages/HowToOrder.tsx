// src/pages/HowToOrder.tsx
import React from "react";
import {
  MessageCircle,
  ShoppingCart,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import Footer from "../components/Footer";
import { products as allProducts } from "../data/products";
import Reveal from "../components/Reveal";

const HowToOrder: React.FC = () => {
  const { t } = useLanguage();

  // Definisikan key untuk tiap langkah agar i18n fleksibel
  const stepKeySets = [
    {
      icon: ShoppingCart,
      titleKey: "howToOrder.steps.0.title",
      descKey: "howToOrder.steps.0.description",
      detailKeys: [
        "howToOrder.steps.0.details.0",
        "howToOrder.steps.0.details.1",
        "howToOrder.steps.0.details.2",
        "howToOrder.steps.0.details.3",
      ],
    },
    {
      icon: MessageCircle,
      titleKey: "howToOrder.steps.1.title",
      descKey: "howToOrder.steps.1.description",
      detailKeys: [
        "howToOrder.steps.1.details.0",
        "howToOrder.steps.1.details.1",
        "howToOrder.steps.1.details.2",
        "howToOrder.steps.1.details.3",
      ],
    },
    {
      icon: CheckCircle,
      titleKey: "howToOrder.steps.2.title",
      descKey: "howToOrder.steps.2.description",
      detailKeys: [
        "howToOrder.steps.2.details.0",
        "howToOrder.steps.2.details.1",
        "howToOrder.steps.2.details.2",
        "howToOrder.steps.2.details.3",
      ],
    },
  ];

  // Ambil produk kopi dari data pusat & terjemahkan via i18n
  const productGallery = React.useMemo(
    () =>
      allProducts
        .filter((p) => p.category === "coffee")
        .slice(0, 6)
        .map((p) => ({
          id: p.id,
          name: t(p.nameKey),
          description: t(p.descKey),
          image: p.images?.[0],
        })),
    [t]
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Reveal>
            <h1 className="font-playfair text-4xl md:text-6xl font-bold text-amber-800 mb-6">
              {t("howToOrder.hero.title")}
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              {t("howToOrder.hero.subtitle")}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-amber-800 text-center mb-16">
              {t("howToOrder.stepsTitle")}
            </h2>
          </Reveal>

          <div className="space-y-16">
            {stepKeySets.map((s, index) => {
              const Icon = s.icon;
              return (
                <Reveal key={index} y={18}>
                  <div
                    className={`flex flex-col lg:flex-row items-center gap-12 ${
                      index % 2 === 1 ? "lg:flex-row-reverse" : ""
                    }`}
                  >
                    <div className="flex-1">
                      <div className="flex items-center mb-6">
                        <div className="bg-amber-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mr-4">
                          {index + 1}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-amber-800">
                            {t(s.titleKey)}
                          </h3>
                          <p className="text-gray-600 text-lg">
                            {t(s.descKey)}
                          </p>
                        </div>
                      </div>

                      <ul className="space-y-3">
                        {s.detailKeys.map((k) => (
                          <li
                            key={k}
                            className="flex items-center text-gray-700"
                          >
                            <div className="w-2 h-2 bg-amber-600 rounded-full mr-3" />
                            {t(k)}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex-1 flex justify-center">
                      <div className="bg-amber-50 p-12 rounded-2xl">
                        <Icon className="h-32 w-32 text-amber-600 mx-auto" />
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product Gallery */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-amber-800 text-center mb-16">
              {t("howToOrder.productGalleryTitle")}
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productGallery.map((product) => (
              <Reveal key={product.id} y={20}>
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-opacity duration-300" />
                  </div>

                  <div className="p-6">
                    <h3 className="font-semibold text-xl text-amber-800 mb-3">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {product.description}
                    </p>
                    <Link
                      to={`/product/${product.id}`}
                      className="text-amber-600 font-semibold hover:text-amber-700 transition-colors duration-200 inline-flex items-center"
                      aria-label={`${t("productsPage.detailCta")} ${
                        product.name
                      }`}
                    >
                      {t("productsPage.detailCta")}{" "}
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="text-center mt-12">
              <Link
                to="/products?category=coffee"
                className="bg-amber-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-amber-700 transition-colors duration-200 inline-flex items-center"
              >
                {t("howToOrder.seeAllProducts")}{" "}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-amber-800 text-center mb-16">
              {t("howToOrder.faqTitle")}
            </h2>
          </Reveal>

          <div className="max-w-4xl mx-auto space-y-6">
            {[0, 1, 2, 3].map((i) => (
              <Reveal key={i} y={14}>
                <div className="bg-white rounded-2xl shadow-md p-8">
                  <h3 className="text-xl font-bold text-amber-800 mb-4">
                    {t(`howToOrder.faq.${i}.q`)}
                  </h3>
                  <p className="text-gray-700">{t(`howToOrder.faq.${i}.a`)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowToOrder;
