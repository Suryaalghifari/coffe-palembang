import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowRight, Search } from "lucide-react";
import Footer from "../components/Footer";
import { products as allProducts } from "../data/products";

const Products = () => {
  const [params, setParams] = useSearchParams();
  const category = params.get("category") ?? "coffee"; // force coffee
  const bean = params.get("bean"); // "robusta" | "arabica" | null
  const [searchTerm, setSearchTerm] = React.useState("");

  // Validasi kategori: sementara hanya coffee
  React.useEffect(() => {
    if (category !== "coffee") {
      params.set("category", "coffee");
      setParams(params, { replace: true });
    }
  }, [category, params, setParams]);

  const filters = [
    { id: "all", label: "Semua Produk", to: "/products?category=coffee" },
    {
      id: "robusta",
      label: "Robusta",
      to: "/products?category=coffee&bean=robusta",
    },
    {
      id: "arabica",
      label: "Arabica",
      to: "/products?category=coffee&bean=arabica",
    },
  ];

  const filteredProducts = allProducts
    .filter((p) => p.category === "coffee")
    .filter((p) => (bean ? p.bean === bean : true))
    .filter((p) => {
      const q = searchTerm.toLowerCase();
      return (
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
      );
    });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold text-amber-800 mb-6">
            Produk Kopi Kami
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Pilih Robusta atau Arabica—semuanya premium dari Indonesia.
          </p>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Cari produk..."
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
        </div>
      </section>

      {/* Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-xl text-amber-800 mb-3">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                    {product.description}
                  </p>
                  <Link
                    to={`/product/${product.id}`}
                    className="w-full bg-amber-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-amber-700 transition-colors duration-200 inline-flex items-center justify-center"
                  >
                    Detail Produk <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600 mb-4">
                Produk tidak ditemukan
              </p>
              <p className="text-gray-500">Coba ubah kata kunci atau filter</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-amber-800 mb-6">
            Tidak Menemukan Yang Anda Cari?
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Hubungi kami untuk permintaan khusus atau jumlah besar.
          </p>
          <Link
            to="/contact"
            className="bg-amber-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-amber-700 transition-colors duration-200 inline-flex items-center"
          >
            Hubungi Kami <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
