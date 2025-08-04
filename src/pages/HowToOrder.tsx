import React from "react";
import {
  MessageCircle,
  ShoppingCart,
  CheckCircle,
  Phone,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import Footer from "../components/Footer";

const HowToOrder = () => {
  const { t } = useLanguage();

  const orderSteps = [
    {
      step: 1,
      icon: ShoppingCart,
      title: "Pilih Produk",
      description:
        'Jelajahi koleksi kopi dan rempah-rempah premium kami. Klik "Detail Produk" untuk informasi lengkap.',
      details: [
        "Lihat katalog produk di halaman Products",
        "Baca spesifikasi dan deskripsi produk",
        "Lihat galeri foto produk",
        "Cek ketersediaan stok",
      ],
    },
    {
      step: 2,
      icon: MessageCircle,
      title: "Konsultasi & Pemesanan",
      description:
        "Kontak melalui WhatsApp, form online, atau telepon untuk konsultasi dan pemesanan.",
      details: [
        "WhatsApp: +62 812-3456-7890",
        "Form pemesanan di halaman detail produk",
        "Email: info@kopinusantara.com",
        "Telepon: (0274) 123456",
      ],
    },
    {
      step: 3,
      icon: CheckCircle,
      title: "Konfirmasi & Pembayaran",
      description:
        "Tim kami akan mengkonfirmasi pesanan dan memandu proses pembayaran yang mudah.",
      details: [
        "Konfirmasi jenis dan jumlah produk",
        "Informasi metode pembayaran",
        "Konfirmasi alamat pengiriman",
        "Estimasi waktu proses dan kirim",
      ],
    },
  ];

  const productGallery = [
    {
      id: 1,
      name: "Kopi Robusta Premium",
      image: "https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg",
      description:
        "Kopi robusta pilihan dengan citarasa kuat dan aroma menggugah selera",
    },
    {
      id: 2,
      name: "Kopi Arabika Gayo",
      image:
        "https://images.pexels.com/photos/1793037/pexels-photo-1793037.jpeg",
      description:
        "Kopi arabika asli Aceh dengan karakteristik fruity dan floral",
    },
    {
      id: 3,
      name: "Cengkeh Maluku Premium",
      image:
        "https://images.pexels.com/photos/4198020/pexels-photo-4198020.jpeg",
      description: "Cengkeh asli Maluku dengan aroma kuat dan kualitas export",
    },
    {
      id: 4,
      name: "Kayu Manis Ceylon",
      image:
        "https://images.pexels.com/photos/4198027/pexels-photo-4198027.jpeg",
      description: "Kayu manis Ceylon grade A dengan aroma manis alami",
    },
    {
      id: 5,
      name: "Lada Hitam Muntok",
      image:
        "https://images.pexels.com/photos/4198019/pexels-photo-4198019.jpeg",
      description: "Lada hitam asli Bangka dengan tingkat kepedasan sempurna",
    },
    {
      id: 6,
      name: "Pala Banda",
      image:
        "https://images.pexels.com/photos/4198017/pexels-photo-4198017.jpeg",
      description: "Pala asli Banda dengan aroma khas dan rasa autentik",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold text-amber-800 mb-6">
            {t("nav.howToOrder")}
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Proses pemesanan yang mudah dan transparan. Ikuti 3 langkah
            sederhana untuk mendapatkan kopi dan rempah-rempah premium kami.
          </p>
        </div>
      </section>

      {/* Order Steps */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-amber-800 text-center mb-16">
            3 Langkah Mudah Pemesanan
          </h2>

          <div className="space-y-16">
            {orderSteps.map((step, index) => (
              <div
                key={step.step}
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1">
                  <div className="flex items-center mb-6">
                    <div className="bg-amber-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mr-4">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-amber-800">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-lg">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex-1 flex justify-center">
                  <div className="bg-amber-50 p-12 rounded-2xl">
                    <step.icon className="h-32 w-32 text-amber-600 mx-auto" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Gallery */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-amber-800 text-center mb-16">
            Galeri Produk Kami
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productGallery.map((product) => (
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
                    className="text-amber-600 font-semibold hover:text-amber-700 transition-colors duration-200 inline-flex items-center"
                  >
                    Lihat Detail <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/products"
              className="bg-amber-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-amber-700 transition-colors duration-200 inline-flex items-center"
            >
              Lihat Semua Produk <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-amber-800 text-center mb-16">
            Pertanyaan Umum
          </h2>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white rounded-2xl shadow-md p-8">
              <h3 className="text-xl font-bold text-amber-800 mb-4">
                Berapa minimal order?
              </h3>
              <p className="text-gray-700">
                Tidak ada minimal order. Anda bisa memesan mulai dari 1 pack
                untuk mencoba kualitas produk kami.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-8">
              <h3 className="text-xl font-bold text-amber-800 mb-4">
                Bagaimana cara pembayaran?
              </h3>
              <p className="text-gray-700">
                Kami menerima pembayaran via transfer bank, e-wallet (GoPay,
                OVO, DANA), dan COD untuk area Palembang.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-8">
              <h3 className="text-xl font-bold text-amber-800 mb-4">
                Bagaimana jika produk tidak sesuai?
              </h3>
              <p className="text-gray-700">
                Kami memberikan garansi 100% uang kembali jika produk tidak
                sesuai atau rusak saat diterima.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-8">
              <h3 className="text-xl font-bold text-amber-800 mb-4">
                Berapa lama pengiriman?
              </h3>
              <p className="text-gray-700">
                Estimasi pengiriman 2-5 hari kerja tergantung lokasi. Untuk
                Palembang bisa same day delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowToOrder;
