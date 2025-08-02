import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "id" | "en" | "fr" | "ar";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  id: {
    // Header
    "nav.home": "Home",
    "nav.products": "Produk",
    "nav.allProducts": "Semua Produk",
    "nav.coffee": "Kopi",
    "nav.cloves": "Cengkeh",
    "nav.spices": "Rempah-rempah",
    "nav.herbs": "Herbal",
    "nav.howToOrder": "Cara Pemesanan",
    "nav.gallery": "Galeri",
    "nav.contact": "Kontak",
    "nav.terms": "Syarat & Ketentuan",
    "nav.orderNow": "Pesan Sekarang",

    // Home Page
    "home.hero.title": "CV Batanghari",
    "home.hero.subtitle": "Sembilan Makmur",
    "home.hero.description":
      "Menghadirkan citarasa otentik Indonesia dengan kualitas premium langsung dari petani terpilih ke meja Anda",
    "home.hero.viewProducts": "Lihat Produk",
    "home.hero.contactUs": "Hubungi Kami",

    "home.about.title": "Tentang Kopi Nusantara",
    "home.about.description":
      "Sejak 2018, kami berkomitmen menjadi jembatan antara petani lokal dan pecinta kopi serta rempah-rempah. Dengan proses seleksi ketat dan standar kualitas internasional, setiap produk kami menghadirkan kekayaan rasa dan aroma Indonesia yang autentik.",

    "home.whyUs.title": "Mengapa Memilih Kami?",
    "home.whyUs.quality.title": "Kualitas Premium",
    "home.whyUs.quality.desc":
      "Seleksi ketat dari petani terpilih dengan standar kualitas internasional",
    "home.whyUs.natural.title": "100% Natural",
    "home.whyUs.natural.desc":
      "Tanpa bahan pengawet atau pewarna buatan, murni dari alam",
    "home.whyUs.trusted.title": "Dipercaya Ribuan",
    "home.whyUs.trusted.desc":
      "Dipercaya lebih dari 5000+ pelanggan di seluruh Indonesia",
    "home.whyUs.guarantee.title": "Garansi Kualitas",
    "home.whyUs.guarantee.desc":
      "Jaminan 100% uang kembali jika tidak puas dengan kualitas",

    "home.products.title": "Produk Unggulan",
    "home.products.viewAll": "Lihat Semua Produk",
    "home.products.detail": "Detail Produk",

    "home.gallery.title": "Galeri Produk Kami",
    "home.gallery.description":
      "Lihat koleksi lengkap produk dan proses produksi kami",
    "home.gallery.viewGallery": "Lihat Galeri Lengkap",

    "home.team.title": "Tim Kami",
    "home.team.owner.name": "Budi Santoso",
    "home.team.owner.role": "Founder & CEO",
    "home.team.manager.name": "Sari Dewi",
    "home.team.manager.role": "Production Manager",
    "home.team.expert.name": "Ahmad Rizki",
    "home.team.expert.role": "Quality Expert",

    // Common
    "common.learnMore": "Pelajari Lebih Lanjut",
    "common.contactInfo": "Informasi Kontak",
    "common.address": "Alamat",
    "common.phone": "Telepon",
    "common.email": "Email",
    "common.operatingHours": "Jam Operasional",
  },
  en: {
    // Header
    "nav.home": "Home",
    "nav.products": "Products",
    "nav.allProducts": "All Products",
    "nav.coffee": "Coffee",
    "nav.cloves": "Cloves",
    "nav.spices": "Spices",
    "nav.herbs": "Herbs",
    "nav.howToOrder": "How to Order",
    "nav.gallery": "Gallery",
    "nav.contact": "Contact",
    "nav.terms": "Terms & Conditions",
    "nav.orderNow": "Order Now",

    // Home Page
    "home.hero.title": "Indonesian Coffee",
    "home.hero.subtitle": "& Spices",
    "home.hero.description":
      "Bringing authentic Indonesian flavors with premium quality directly from selected farmers to your table",
    "home.hero.viewProducts": "View Products",
    "home.hero.contactUs": "Contact Us",

    "home.about.title": "About Kopi Nusantara",
    "home.about.description":
      "Since 2018, we are committed to being a bridge between local farmers and coffee and spice lovers. With strict selection processes and international quality standards, each of our products brings the authentic richness of Indonesian taste and aroma.",

    "home.whyUs.title": "Why Choose Us?",
    "home.whyUs.quality.title": "Premium Quality",
    "home.whyUs.quality.desc":
      "Strict selection from trusted farmers with international quality standards",
    "home.whyUs.natural.title": "100% Natural",
    "home.whyUs.natural.desc":
      "No artificial preservatives or colorings, purely from nature",
    "home.whyUs.trusted.title": "Trusted by Thousands",
    "home.whyUs.trusted.desc":
      "Trusted by more than 5000+ customers throughout Indonesia",
    "home.whyUs.guarantee.title": "Quality Guarantee",
    "home.whyUs.guarantee.desc":
      "100% money back guarantee if not satisfied with quality",

    "home.products.title": "Featured Products",
    "home.products.viewAll": "View All Products",
    "home.products.detail": "Product Details",

    "home.gallery.title": "Our Product Gallery",
    "home.gallery.description":
      "See our complete product collection and production process",
    "home.gallery.viewGallery": "View Full Gallery",

    "home.team.title": "Our Team",
    "home.team.owner.name": "Budi Santoso",
    "home.team.owner.role": "Founder & CEO",
    "home.team.manager.name": "Sari Dewi",
    "home.team.manager.role": "Production Manager",
    "home.team.expert.name": "Ahmad Rizki",
    "home.team.expert.role": "Quality Expert",

    // Common
    "common.learnMore": "Learn More",
    "common.contactInfo": "Contact Information",
    "common.address": "Address",
    "common.phone": "Phone",
    "common.email": "Email",
    "common.operatingHours": "Operating Hours",
  },
  fr: {
    // Header
    "nav.home": "Accueil",
    "nav.products": "Produits",
    "nav.allProducts": "Tous les Produits",
    "nav.coffee": "Café",
    "nav.cloves": "Clous de Girofle",
    "nav.spices": "Épices",
    "nav.herbs": "Herbes",
    "nav.howToOrder": "Comment Commander",
    "nav.gallery": "Galerie",
    "nav.contact": "Contact",
    "nav.terms": "Termes & Conditions",
    "nav.orderNow": "Commander",

    // Home Page
    "home.hero.title": "Café Indonésien",
    "home.hero.subtitle": "& Épices",
    "home.hero.description":
      "Apporter des saveurs indonésiennes authentiques avec une qualité premium directement des agriculteurs sélectionnés à votre table",
    "home.hero.viewProducts": "Voir les Produits",
    "home.hero.contactUs": "Nous Contacter",

    "home.about.title": "À Propos de Kopi Nusantara",
    "home.about.description":
      "Depuis 2018, nous nous engageons à être un pont entre les agriculteurs locaux et les amateurs de café et d'épices. Avec des processus de sélection stricts et des normes de qualité internationales, chacun de nos produits apporte la richesse authentique du goût et de l'arôme indonésiens.",

    "home.whyUs.title": "Pourquoi Nous Choisir?",
    "home.whyUs.quality.title": "Qualité Premium",
    "home.whyUs.quality.desc":
      "Sélection stricte d'agriculteurs de confiance avec des normes de qualité internationales",
    "home.whyUs.natural.title": "100% Naturel",
    "home.whyUs.natural.desc":
      "Aucun conservateur ou colorant artificiel, purement naturel",
    "home.whyUs.trusted.title": "Approuvé par des Milliers",
    "home.whyUs.trusted.desc":
      "Approuvé par plus de 5000+ clients dans toute l'Indonésie",
    "home.whyUs.guarantee.title": "Garantie Qualité",
    "home.whyUs.guarantee.desc":
      "Garantie de remboursement à 100% si pas satisfait de la qualité",

    "home.products.title": "Produits Vedettes",
    "home.products.viewAll": "Voir Tous les Produits",
    "home.products.detail": "Détails du Produit",

    "home.gallery.title": "Notre Galerie de Produits",
    "home.gallery.description":
      "Découvrez notre collection complète de produits et notre processus de production",
    "home.gallery.viewGallery": "Voir la Galerie Complète",

    "home.team.title": "Notre Équipe",
    "home.team.owner.name": "Budi Santoso",
    "home.team.owner.role": "Fondateur & PDG",
    "home.team.manager.name": "Sari Dewi",
    "home.team.manager.role": "Directrice de Production",
    "home.team.expert.name": "Ahmad Rizki",
    "home.team.expert.role": "Expert Qualité",

    // Common
    "common.learnMore": "En Savoir Plus",
    "common.contactInfo": "Informations de Contact",
    "common.address": "Adresse",
    "common.phone": "Téléphone",
    "common.email": "Email",
    "common.operatingHours": "Heures d'Ouverture",
  },
  ar: {
    // Header
    "nav.home": "الرئيسية",
    "nav.products": "المنتجات",
    "nav.allProducts": "جميع المنتجات",
    "nav.coffee": "القهوة",
    "nav.cloves": "القرنفل",
    "nav.spices": "التوابل",
    "nav.herbs": "الأعشاب",
    "nav.howToOrder": "كيفية الطلب",
    "nav.gallery": "المعرض",
    "nav.contact": "اتصل بنا",
    "nav.terms": "الشروط والأحكام",
    "nav.orderNow": "اطلب الآن",

    // Home Page
    "home.hero.title": "القهوة الإندونيسية",
    "home.hero.subtitle": "والتوابل",
    "home.hero.description":
      "نقدم النكهات الإندونيسية الأصيلة بجودة ممتازة مباشرة من المزارعين المختارين إلى طاولتك",
    "home.hero.viewProducts": "عرض المنتجات",
    "home.hero.contactUs": "اتصل بنا",

    "home.about.title": "حول كوبي نوسانتارا",
    "home.about.description":
      "منذ عام 2018، نحن ملتزمون بأن نكون جسراً بين المزارعين المحليين وعشاق القهوة والتوابل. مع عمليات الاختيار الصارمة ومعايير الجودة الدولية، كل منتج من منتجاتنا يجلب الثراء الأصيل للطعم والرائحة الإندونيسية.",

    "home.whyUs.title": "لماذا تختارنا؟",
    "home.whyUs.quality.title": "جودة ممتازة",
    "home.whyUs.quality.desc":
      "اختيار صارم من المزارعين الموثوقين بمعايير جودة دولية",
    "home.whyUs.natural.title": "100% طبيعي",
    "home.whyUs.natural.desc": "بدون مواد حافظة أو ألوان صناعية، طبيعي بحت",
    "home.whyUs.trusted.title": "موثوق من الآلاف",
    "home.whyUs.trusted.desc":
      "موثوق من أكثر من 5000+ عميل في جميع أنحاء إندونيسيا",
    "home.whyUs.guarantee.title": "ضمان الجودة",
    "home.whyUs.guarantee.desc":
      "ضمان استرداد المال 100% إذا لم تكن راضياً عن الجودة",

    "home.products.title": "المنتجات المميزة",
    "home.products.viewAll": "عرض جميع المنتجات",
    "home.products.detail": "تفاصيل المنتج",

    "home.gallery.title": "معرض منتجاتنا",
    "home.gallery.description":
      "شاهد مجموعتنا الكاملة من المنتجات وعملية الإنتاج",
    "home.gallery.viewGallery": "عرض المعرض الكامل",

    "home.team.title": "فريقنا",
    "home.team.owner.name": "بودي سانتوسو",
    "home.team.owner.role": "المؤسس والرئيس التنفيذي",
    "home.team.manager.name": "ساري ديوي",
    "home.team.manager.role": "مدير الإنتاج",
    "home.team.expert.name": "أحمد رزقي",
    "home.team.expert.role": "خبير الجودة",

    // Common
    "common.learnMore": "تعلم المزيد",
    "common.contactInfo": "معلومات الاتصال",
    "common.address": "العنوان",
    "common.phone": "الهاتف",
    "common.email": "البريد الإلكتروني",
    "common.operatingHours": "ساعات العمل",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("id");

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div className={language === "ar" ? "rtl" : "ltr"}>{children}</div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
