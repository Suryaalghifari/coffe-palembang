// src/pages/Home.tsx
import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle,
  Award,
  Leaf,
  Users,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { animated } from "@react-spring/web";
import { useLanguage } from "../contexts/LanguageContext";
import Footer from "../components/Footer";
import { galleryItems, GALLERY_CATEGORY_KEYS } from "../data/gallery";
import { getCoffeeProducts } from "../data/products";
import Reveal from "../components/Reveal";
import { useSpringButton } from "../hooks/useSpringButton";

const HERO_IMAGES = [
  {
    url: "/assets/header1.jpg",
    i18nKey: "home.hero.slide1.title",
    color: "bg-yellow-400",
    width: "w-24",
  },
  {
    url: "/assets/header2.jpg",
    i18nKey: "home.hero.slide2.title",
    color: "bg-green-400",
    width: "w-16",
  },
  {
    url: "/assets/header3.jpg",
    i18nKey: "home.hero.slide3.title",
    color: "bg-amber-500",
    width: "w-32",
  },
];

const Home: React.FC = () => {
  const { t } = useLanguage();

  // ======= Hero carousel =======
  const [currentSlide, setCurrentSlide] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => {
      setCurrentSlide((p) => (p + 1) % HERO_IMAGES.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);
  const nextHero = () => setCurrentSlide((p) => (p + 1) % HERO_IMAGES.length);
  const prevHero = () =>
    setCurrentSlide((p) => (p - 1 + HERO_IMAGES.length) % HERO_IMAGES.length);

  // ======= Gallery preview (6 image max) =======
  const PREVIEW_ITEMS = React.useMemo(
    () => galleryItems.filter((i) => i.type === "image").slice(0, 6),
    []
  );
  const [currentGallery, setCurrentGallery] = React.useState(0);
  const nextGallery = () =>
    setCurrentGallery((p) => (p + 1) % PREVIEW_ITEMS.length);
  const prevGallery = () =>
    setCurrentGallery(
      (p) => (p - 1 + PREVIEW_ITEMS.length) % PREVIEW_ITEMS.length
    );

  // ======= Team (i18n-driven) =======
  const teamMembers = React.useMemo(
    () => [
      {
        name: t("home.team.owner.name"),
        role: t("home.team.owner.role"),
        avatar: "👨‍💼",
        description: t("home.team.owner.description"),
      },
      {
        name: t("home.team.manager.name"),
        role: t("home.team.manager.role"),
        avatar: "👨‍🌾",
        description: t("home.team.manager.description"),
      },
      {
        name: t("home.team.expert.name"),
        role: t("home.team.expert.role"),
        avatar: "👩‍🔬",
        description: t("home.team.expert.description"),
      },
    ],
    [t]
  );

  // ======= Best products (kopi, 2 item) =======
  const bestProducts = React.useMemo(() => getCoffeeProducts().slice(0, 2), []);

  // ======= Spring buttons (ringan) =======
  const prodCta = useSpringButton();
  const contactCta = useSpringButton();
  const viewAllCta = useSpringButton();
  const galleryCta = useSpringButton();

  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative h-[90vh] md:h-screen bg-white">
        <div className="relative h-full overflow-hidden">
          {HERO_IMAGES.map((image, index) => (
            <div
              key={image.url}
              className={`absolute inset-0 transition-opacity duration-700 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={image.url}
                alt={t(image.i18nKey)}
                className="w-full h-full object-cover"
                fetchpriority="high"
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          ))}

          {/* Arrows */}
          <button
            onClick={prevHero}
            aria-label={t("home.hero.prev")}
            className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition z-10"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextHero}
            aria-label={t("home.hero.next")}
            className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition z-10"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
            {HERO_IMAGES.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Slide ${index + 1}`}
                className={`w-3 h-3 rounded-full transition ${
                  index === currentSlide ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Hero Content (reveal ringan saat masuk viewport) */}
        <div className="absolute inset-0 z-10 max-w-7xl mx-auto px-4 h-full flex items-center">
          <Reveal y={16}>
            <div className="max-w-2xl text-white">
              <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 leading-tight">
                {t("home.hero.title")}
                <span className="block text-amber-300">
                  {t("home.hero.subtitle")}
                </span>
              </h1>

              {/* Decorative line mengikuti slide */}
              <div className="mb-10" aria-hidden="true">
                <div
                  className={`h-[2px] rounded-full transition-all duration-700 ${HERO_IMAGES[currentSlide].color} ${HERO_IMAGES[currentSlide].width}`}
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <animated.div style={prodCta.style}>
                  <Link
                    to="/products?category=coffee"
                    {...prodCta.bind}
                    className="bg-amber-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-amber-700 transition inline-flex items-center justify-center"
                  >
                    {t("home.hero.viewProducts")}{" "}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </animated.div>

                <animated.div style={contactCta.style}>
                  <Link
                    to="/contact"
                    {...contactCta.bind}
                    className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-amber-800 transition inline-flex items-center justify-center"
                  >
                    {t("home.hero.contactUs")}
                  </Link>
                </animated.div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Reveal>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-amber-800 mb-6">
              {t("home.about.title")}
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              {t("home.about.description")}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-amber-800 text-center mb-16">
              {t("home.whyUs.title")}
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: t("home.whyUs.quality.title"),
                desc: t("home.whyUs.quality.desc"),
              },
              {
                icon: Leaf,
                title: t("home.whyUs.natural.title"),
                desc: t("home.whyUs.natural.desc"),
              },
              {
                icon: Users,
                title: t("home.whyUs.trusted.title"),
                desc: t("home.whyUs.trusted.desc"),
              },
              {
                icon: CheckCircle,
                title: t("home.whyUs.guarantee.title"),
                desc: t("home.whyUs.guarantee.desc"),
              },
            ].map((card, i) => (
              <Reveal key={i} y={18}>
                <div className="text-center group">
                  <div className="bg-amber-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-700 transition-colors">
                    <card.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="font-semibold text-xl text-amber-800 mb-4">
                    {card.title}
                  </h3>
                  <p className="text-gray-600">{card.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Best Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-amber-800 text-center mb-16">
              {t("home.products.title")}
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {bestProducts.map((product) => (
              <Reveal key={product.id} y={20}>
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition transform hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <img
                      src={product.images[0]}
                      alt={t(product.nameKey)}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-xl text-amber-800 mb-3">
                      {t(product.nameKey)}
                    </h3>
                    <p className="text-gray-600 mb-4">{t(product.descKey)}</p>
                    <Link
                      to={`/product/${product.id}`}
                      className="bg-amber-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-amber-700 transition inline-flex items-center"
                    >
                      {t("home.products.detail")}{" "}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="text-center mt-12">
              <animated.div style={viewAllCta.style} className="inline-block">
                <Link
                  to="/products?category=coffee"
                  {...viewAllCta.bind}
                  className="bg-amber-800 text-white px-8 py-4 rounded-full font-semibold hover:bg-amber-900 transition inline-flex items-center"
                >
                  {t("home.products.viewAll")}{" "}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </animated.div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-amber-800 text-center mb-16">
              {t("home.gallery.title")}
            </h2>
          </Reveal>

          {PREVIEW_ITEMS.length === 0 ? (
            <Reveal>
              <div className="text-center text-gray-600">
                {t("home.gallery.empty")}
              </div>
            </Reveal>
          ) : (
            <Reveal>
              <div className="relative max-w-5xl mx-auto">
                {(() => {
                  const item = PREVIEW_ITEMS[currentGallery];
                  const catLabel = t(GALLERY_CATEGORY_KEYS[item.category]);
                  return (
                    <Link
                      to={`/gallery?cat=${encodeURIComponent(item.category)}`}
                      className="block group"
                      aria-label={t("home.gallery.openCategory", {
                        category: catLabel,
                      })}
                    >
                      <div className="relative h-80 rounded-2xl overflow-hidden">
                        <img
                          src={item.url}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                          loading="lazy"
                          decoding="async"
                          {...(currentGallery === 0
                            ? { fetchpriority: "high" }
                            : {})}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <div className="inline-flex items-center mb-2">
                            <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                              {catLabel}
                            </span>
                          </div>
                          <h3 className="text-white text-xl font-semibold drop-shadow">
                            {item.title}
                          </h3>
                        </div>
                      </div>
                    </Link>
                  );
                })()}

                {/* Arrows */}
                <button
                  onClick={prevGallery}
                  aria-label="Gambar sebelumnya"
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-amber-800 p-2 rounded-full transition"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={nextGallery}
                  aria-label="Gambar berikutnya"
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-amber-800 p-2 rounded-full transition"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>

                {/* Dots */}
                <div className="flex justify-center mt-6 space-x-2">
                  {PREVIEW_ITEMS.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentGallery(index)}
                      aria-label={`Preview ${index + 1}`}
                      className={`w-3 h-3 rounded-full transition ${
                        index === currentGallery
                          ? "bg-amber-600"
                          : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </Reveal>
          )}

          <Reveal>
            <div className="text-center mt-12">
              <animated.div style={galleryCta.style} className="inline-block">
                <Link
                  to="/gallery"
                  {...galleryCta.bind}
                  className="bg-amber-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-amber-700 transition inline-flex items-center"
                >
                  {t("home.gallery.viewGallery")}{" "}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </animated.div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-amber-800 text-center mb-16">
              {t("home.team.title")}
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, idx) => (
              <Reveal key={idx} y={18}>
                <div className="text-center group">
                  <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition transform hover:-translate-y-2">
                    <div className="text-6xl mb-6">{member.avatar}</div>
                    <h3 className="font-semibold text-xl text-amber-800 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-amber-600 font-medium mb-4">
                      {member.role}
                    </p>
                    <p className="text-gray-600">{member.description}</p>
                  </div>
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

export default Home;
