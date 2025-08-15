// src/pages/Products.tsx
import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowRight, Search } from "lucide-react";
import Footer from "../components/Footer";
import { products as allProducts } from "../data/products";
import { useLanguage } from "../contexts/LanguageContext";
import Reveal from "../components/Reveal";

const Products: React.FC = () => {
  const { t } = useLanguage();
  const [params, setParams] = useSearchParams();
  const category = params.get("category") ?? "coffee"; // force coffee
  const bean = params.get("bean"); // "robusta" | "arabica" | null
  const [searchTerm, setSearchTerm] = React.useState("");

  // Pastikan category=coffee
  React.useEffect(() => {
    if (category !== "coffee") {
      const next = new URLSearchParams(params);
      next.set("category", "coffee");
      setParams(next, { replace: true });
    }
  }, [category, params, setParams]);

  const filters = [
    {
      id: "all",
      label: t("products.categories.all"),
      to: "/products?category=coffee",
    },
    {
      id: "robusta",
      label: t("products.categories.robusta"),
      to: "/products?category=coffee&bean=robusta",
    },
    {
      id: "arabica",
      label: t("products.categories.arabica"),
      to: "/products?category=coffee&bean=arabica",
    },
  ];

  const filteredProducts = allProducts
    .filter((p) => p.category === "coffee")
    .filter((p) => (bean ? p.bean === bean : true))
    .filter((p) => {
      const q = searchTerm.trim().toLowerCase();
      if (!q) return true;
      const name = t(p.nameKey).toLowerCase();
      const desc = t(p.descKey).toLowerCase();
      return name.includes(q) || desc.includes(q);
    });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Reveal>
            <h1 className="font-playfair text-4xl md:text-6xl font-bold text-amber-800 mb-6">
              {t("productsPage.title")}
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              {t("productsPage.subtitle")}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal y={10}>
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
              <div className="relative flex-1 max-w-md w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder={t("productsPage.searchPlaceholder")}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>

              <div className="flex flex-wrap gap-2">
                {filters.map((f) => {
                  const active = (f.id === "all" && !bean) || f.id === bean;
                  return (
                    <Link
                      key={f.id}
                      to={f.to}
                      className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                        active
                          ? "bg-amber-600 text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-amber-100"
                      }`}
                    >
                      {f.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product, i) => (
              <Reveal key={product.id} y={14}>
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <img
                      src={product.images[0]}
                      alt={t(product.nameKey)}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-xl text-amber-800 mb-3">
                      {t(product.nameKey)}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                      {t(product.descKey)}
                    </p>
                    <Link
                      to={`/product/${product.id}`}
                      className="w-full bg-amber-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-amber-700 transition-colors duration-200 inline-flex items-center justify-center"
                    >
                      {t("productsPage.detailCta")}{" "}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <Reveal>
              <div className="text-center py-12">
                <p className="text-xl text-gray-600 mb-4">
                  {t("productsPage.notFoundTitle")}
                </p>
                <p className="text-gray-500">
                  {t("productsPage.notFoundHint")}
                </p>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Reveal>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-amber-800 mb-6">
              {t("productsPage.ctaTitle")}
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              {t("productsPage.ctaSubtitle")}
            </p>
            <Link
              to="/contact"
              className="bg-amber-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-amber-700 transition-colors duration-200 inline-flex items-center"
            >
              {t("productsPage.ctaButton")}{" "}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
