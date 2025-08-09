import React from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Footer from "../components/Footer";
import { products } from "../data/products";

const ProductDetail = () => {
  const { id } = useParams();
  const productId = Number(id);
  const product = products.find((p) => p.id === productId);
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  if (!product) {
    return (
      <div className="min-h-screen bg-white">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-2xl font-semibold text-amber-800 mb-4">
              Produk tidak ditemukan
            </h1>
            <Link
              to="/products?category=coffee"
              className="text-amber-600 hover:text-amber-700 font-medium"
            >
              Kembali ke daftar produk
            </Link>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  const otherProducts = products.filter(
    (p) => p.id !== product.id && p.category === "coffee"
  );

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + product.images.length) % product.images.length
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <section className="py-6 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-gray-600 hover:text-amber-600">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <Link
              to="/products?category=coffee"
              className="text-gray-600 hover:text-amber-600"
            >
              Products
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-amber-600 font-medium">{product.name}</span>
          </nav>
        </div>
      </section>

      {/* Product Hero */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Images */}
            <div>
              <div className="relative mb-6">
                <img
                  src={product.images[currentImageIndex]}
                  alt={product.name}
                  className="w-full h-96 object-cover rounded-2xl"
                />
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-amber-800 p-2 rounded-full transition-all"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-amber-800 p-2 rounded-full transition-all"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>

              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative rounded-lg overflow-hidden ${
                      index === currentImageIndex ? "ring-2 ring-amber-600" : ""
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-20 object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Info */}
            <div>
              <h1 className="font-playfair text-4xl font-bold text-amber-800 mb-4">
                {product.name}
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                {product.description}
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-amber-800 mb-4">
                  Deskripsi Lengkap
                </h3>
                <div className="text-gray-700 leading-relaxed space-y-4">
                  {product.fullDescription.split("\n\n").map((p, i) => (
                    <p key={i}>{p.trim()}</p>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-amber-800 mb-4">
                  Spesifikasi
                </h3>
                <ul className="space-y-2">
                  {Object.entries(product.specifications).map(
                    ([key, value]) => (
                      <li
                        key={key}
                        className="flex justify-between text-gray-700"
                      >
                        <span className="font-semibold">{key}</span>
                        <span>{value}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Production */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-playfair text-3xl font-bold text-amber-800 text-center mb-12">
            Proses Produksi
          </h2>
        </div>
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          {product.productionImages.map((image, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl overflow-hidden group"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-74 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                <h3 className="text-white text-xl font-semibold">
                  {image.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Other Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-playfair text-3xl font-bold text-amber-800 text-center mb-12">
            Produk Lainnya
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {otherProducts.map((op) => (
              <div
                key={op.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <img
                  src={op.images[0]}
                  alt={op.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="p-6">
                  <h3 className="font-semibold text-lg text-amber-800 mb-2">
                    {op.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{op.description}</p>
                  <Link
                    to={`/product/${op.id}`}
                    className="text-amber-600 font-semibold hover:text-amber-700 transition-colors duration-200 inline-flex items-center"
                  >
                    Lihat Detail <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* (Form & Kontak-mu tetap bisa dipakai, atau pindahkan ke /contact) */}

      <Footer />
    </div>
  );
};

export default ProductDetail;
