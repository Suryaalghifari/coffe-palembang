import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle,
  Award,
  Leaf,
  Users,
  ChevronLeft,
  ChevronRight,
  User,
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import Footer from "../components/Footer";

const Home = () => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentGallerySlide, setCurrentGallerySlide] = useState(0);

  const heroImages = [
    {
      url: "assets/header1.jpg",
      title: "Kopi Premium Indonesia",
    },
    {
      url: "assets/header2.jpg",
      title: "Proses Roasting Berkualitas",
    },
    {
      url: "assets/header3.jpg",
      title: "Rempah-Rempah Pilihan",
    },
  ];
  const galleryImages = [
    {
      url: "https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg",
      title: "Coffee Roasting Process",
    },
    {
      url: "https://images.pexels.com/photos/4109743/pexels-photo-4109743.jpeg",
      title: "Spice Selection",
    },
    {
      url: "https://images.pexels.com/photos/1793037/pexels-photo-1793037.jpeg",
      title: "Quality Control",
    },
    {
      url: "https://images.pexels.com/photos/4226249/pexels-photo-4226249.jpeg",
      title: "Packaging Process",
    },
  ];

  const galleryVideos = [
    {
      url: "https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg",
      title: "Proses Roasting Kopi",
      type: "video",
    },
    {
      url: "https://images.pexels.com/photos/4109743/pexels-photo-4109743.jpeg",
      title: "Seleksi Rempah Premium",
      type: "video",
    },
    {
      url: "https://images.pexels.com/photos/4226249/pexels-photo-4226249.jpeg",
      title: "Packaging Process",
      type: "video",
    },
    {
      url: "https://images.pexels.com/photos/1793037/pexels-photo-1793037.jpeg",
      title: "Quality Control",
      type: "video",
    },
  ];

  const teamMembers = [
    {
      name: t("home.team.owner.name"),
      role: t("home.team.owner.role"),
      avatar: "👨‍💼",
      description:
        "Memimpin visi perusahaan dengan pengalaman 15+ tahun di industri kopi",
    },
    {
      name: t("home.team.manager.name"),
      role: t("home.team.manager.role"),
      avatar: "👩‍🔬",
      description:
        "Mengawasi seluruh proses produksi dengan standar kualitas tertinggi",
    },
    {
      name: t("home.team.expert.name"),
      role: t("home.team.expert.role"),
      avatar: "👨‍🌾",
      description:
        "Ahli dalam seleksi dan grading kopi serta rempah-rempah premium",
    },
  ];

  const bestProducts = [
    {
      id: 1,
      name: "Kopi Robusta Premium",
      description:
        "Kopi robusta pilihan dengan citarasa kuat dan aroma yang menggugah selera",
      image: "https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg",
    },
    {
      id: 2,
      name: "Kayu Manis Ceylon",
      description:
        "Kayu manis Ceylon grade A dengan aroma manis alami dan kualitas export",
      image: "https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg",
    },
    {
      id: 3,
      name: "Lada Hitam Muntok",
      description:
        "Lada hitam asli Bangka dengan tingkat kepedasan sempurna untuk masakan",
      image:
        "https://images.pexels.com/photos/4198019/pexels-photo-4198019.jpeg",
    },
    {
      id: 4,
      name: "Pala Banda",
      description:
        "Pala asli Banda dengan aroma khas dan rasa yang autentik untuk bumbu masakan",
      image:
        "https://images.pexels.com/photos/4198017/pexels-photo-4198017.jpeg",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentGallerySlide((prev) => (prev + 1) % galleryVideos.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [galleryVideos.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroImages.length) % heroImages.length
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Animated Carousel */}
      <section className="relative h-screen bg-white">
        <div className="relative h-full overflow-hidden">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
                index === currentSlide
                  ? "translate-x-0"
                  : index < currentSlide
                  ? "-translate-x-full"
                  : "translate-x-full"
              }`}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-40"></div>
            </div>
          ))}

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 z-10"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 z-10"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Hero Content */}
        <div className="absolute inset-0 z-10 max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 leading-tight">
              {t("home.hero.title")}
              <span className="block text-amber-300">
                {t("home.hero.subtitle")}
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              {t("home.hero.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/products"
                className="bg-amber-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-amber-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                {t("home.hero.viewProducts")}{" "}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-amber-800 transition-all duration-300 inline-flex items-center justify-center"
              >
                {t("home.hero.contactUs")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-amber-800 mb-6">
            {t("home.about.title")}
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            {t("home.about.description")}
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-amber-800 text-center mb-16">
            {t("home.whyUs.title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-amber-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-700 transition-colors duration-300">
                <Award className="h-10 w-10 text-white" />
              </div>
              <h3 className="font-semibold text-xl text-amber-800 mb-4">
                {t("home.whyUs.quality.title")}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t("home.whyUs.quality.desc")}
              </p>
            </div>
            <div className="text-center group">
              <div className="bg-amber-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-700 transition-colors duration-300">
                <Leaf className="h-10 w-10 text-white" />
              </div>
              <h3 className="font-semibold text-xl text-amber-800 mb-4">
                {t("home.whyUs.natural.title")}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t("home.whyUs.natural.desc")}
              </p>
            </div>
            <div className="text-center group">
              <div className="bg-amber-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-700 transition-colors duration-300">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="font-semibold text-xl text-amber-800 mb-4">
                {t("home.whyUs.trusted.title")}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t("home.whyUs.trusted.desc")}
              </p>
            </div>
            <div className="text-center group">
              <div className="bg-amber-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-700 transition-colors duration-300">
                <CheckCircle className="h-10 w-10 text-white" />
              </div>
              <h3 className="font-semibold text-xl text-amber-800 mb-4">
                {t("home.whyUs.guarantee.title")}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t("home.whyUs.guarantee.desc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Best Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-amber-800 text-center mb-16">
            {t("home.products.title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {bestProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
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
                    className="bg-amber-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-amber-700 transition-colors duration-200 inline-flex items-center"
                  >
                    {t("home.products.detail")}{" "}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/products"
              className="bg-amber-800 text-white px-8 py-4 rounded-full font-semibold hover:bg-amber-900 transition-colors duration-200 inline-flex items-center"
            >
              {t("home.products.viewAll")}{" "}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-amber-800 text-center mb-16">
            {t("home.gallery.title")}
          </h2>
          <div className="text-center mb-12">
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              {t("home.gallery.description")}
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="relative h-80 rounded-2xl overflow-hidden">
              <img
                src={galleryVideos[currentGallerySlide].url}
                alt={galleryVideos[currentGallerySlide].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                <h3 className="text-white text-xl font-semibold">
                  {galleryVideos[currentGallerySlide].title}
                </h3>
                {galleryVideos[currentGallerySlide].type === "video" && (
                  <span className="text-white text-sm opacity-75">
                    🎥 Video
                  </span>
                )}
              </div>
            </div>

            <button
              onClick={() =>
                setCurrentGallerySlide(
                  (prev) =>
                    (prev - 1 + galleryVideos.length) % galleryVideos.length
                )
              }
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-amber-800 p-2 rounded-full transition-all duration-200"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              onClick={() =>
                setCurrentGallerySlide(
                  (prev) => (prev + 1) % galleryVideos.length
                )
              }
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-amber-800 p-2 rounded-full transition-all duration-200"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <div className="flex justify-center mt-6 space-x-2">
              {galleryVideos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentGallerySlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentGallerySlide
                      ? "bg-amber-600"
                      : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/gallery"
              className="bg-amber-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-amber-700 transition-colors duration-200 inline-flex items-center"
            >
              {t("home.gallery.viewGallery")}{" "}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-amber-800 text-center mb-16">
            {t("home.team.title")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="text-6xl mb-6">{member.avatar}</div>
                  <h3 className="font-semibold text-xl text-amber-800 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-amber-600 font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
