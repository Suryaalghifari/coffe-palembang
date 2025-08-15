// src/pages/Gallery.tsx
import React, { useMemo, useState } from "react";
import { X } from "lucide-react";
import Footer from "../components/Footer";
import { useSearchParams } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import {
  galleryItems,
  GALLERY_CATEGORY_KEYS,
  type GalleryCategory,
} from "../data/gallery";

const ALL = "all" as const;

const Gallery: React.FC = () => {
  const { t } = useLanguage();
  const [params, setParams] = useSearchParams();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const currentCategory = (params.get("cat") ?? ALL) as
    | typeof ALL
    | GalleryCategory;

  const imagesOnly = useMemo(
    () => galleryItems.filter((it) => it.type === "image"),
    []
  );

  const categories = useMemo(() => {
    const present = new Set<GalleryCategory>();
    for (const it of imagesOnly) present.add(it.category);

    const ordered: GalleryCategory[] = [
      "production",
      "products",
      "team",
      "facilities",
    ];

    const list: Array<{ id: typeof ALL | GalleryCategory; name: string }> = [
      { id: ALL, name: t("common.all") },
    ];

    ordered.forEach((id) => {
      if (present.has(id)) {
        list.push({ id, name: t(GALLERY_CATEGORY_KEYS[id]) });
      }
    });

    return list;
  }, [imagesOnly, t]);

  const filteredItems = useMemo(() => {
    if (currentCategory === ALL) return imagesOnly;
    return imagesOnly.filter((i) => i.category === currentCategory);
  }, [currentCategory, imagesOnly]);

  const openModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = "unset";
  };

  const setCategory = (id: typeof ALL | GalleryCategory) => {
    const next = new URLSearchParams(params);
    if (id === ALL) next.delete("cat");
    else next.set("cat", id);
    setParams(next, { replace: true });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold text-amber-800 mb-6">
            {t("gallery.title")}
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {t("gallery.subtitle")}
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => {
              const active = currentCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setCategory(cat.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    active
                      ? "bg-amber-600 text-white shadow-lg transform scale-105"
                      : "bg-gray-100 text-gray-700 hover:bg-amber-100 hover:text-amber-700"
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                onClick={() => openModal(item.url)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.url}
                    alt={t(item.titleKey)}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                    decoding="async"
                  />

                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-opacity duration-300" />

                  <div className="absolute top-4 left-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {t(GALLERY_CATEGORY_KEYS[item.category])}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-semibold text-lg text-amber-800 mb-2 group-hover:text-amber-900 transition-colors">
                    {t(item.titleKey)}
                  </h3>
                  {item.descKey && (
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {t(item.descKey)}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600 mb-4">
                {t("gallery.emptyTitle")}
              </p>
              <p className="text-gray-500">{t("gallery.emptyDesc")}</p>
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-amber-300 transition"
              aria-label={t("common.close")}
            >
              <X className="h-8 w-8" />
            </button>
            <img
              src={selectedImage}
              alt="Gallery"
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;
