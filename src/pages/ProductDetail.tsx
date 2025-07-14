import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, Send, Phone, Mail, MapPin } from 'lucide-react';
import Footer from '../components/Footer';

const ProductDetail = () => {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    quantity: ''
  });

  // Sample product data - in real app this would come from API
  const product = {
    id: 1,
    name: 'Kopi Robusta Premium',
    description: 'Kopi robusta pilihan dengan citarasa kuat dan aroma yang menggugah selera',
    fullDescription: `Kopi Robusta Premium kami berasal dari perkebunan kopi terbaik di dataran tinggi Lampung yang memiliki ketinggian optimal untuk menghasilkan biji kopi berkualitas tinggi. Dengan proses seleksi ketat dan pengolahan tradisional yang telah diwariskan turun-temurun, setiap biji kopi telah melalui tahapan sortir manual untuk memastikan hanya biji terbaik yang sampai ke tangan Anda.

    Karakteristik unik dari kopi robusta kami adalah tingkat keasaman yang rendah dengan body yang full, menghasilkan rasa yang bold dan earthy dengan sedikit sentuhan cokelat alami. Kandungan kafein yang tinggi menjadikannya pilihan sempurna untuk memulai hari dengan energi penuh.

    Proses roasting dilakukan dengan metode medium roast untuk mempertahankan karakter asli biji kopi sambil mengeluarkan aroma dan rasa yang optimal. Setiap batch dipanggang dalam jumlah kecil untuk menjamin kualitas dan kesegaran.`,
    images: [
      'https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg',
      'https://images.pexels.com/photos/1793037/pexels-photo-1793037.jpeg',
      'https://images.pexels.com/photos/4226249/pexels-photo-4226249.jpeg',
      'https://images.pexels.com/photos/1793031/pexels-photo-1793031.jpeg'
    ],
    specifications: {
      'Asal': 'Lampung, Indonesia',
      'Varietas': 'Robusta Lampung',
      'Ketinggian': '700-1200 mdpl',
      'Proses': 'Natural/Honey Process',
      'Tingkat Roast': 'Medium Roast',
      'Kemasan': '250g, 500g, 1kg',
      'Kadar Air': 'Max 12%',
      'Defect': 'Max 5%'
    },
    productionImages: [
      {
        url: 'https://images.pexels.com/photos/4109743/pexels-photo-4109743.jpeg',
        title: 'Proses Sortir Manual'
      },
      {
        url: 'https://images.pexels.com/photos/4198027/pexels-photo-4198027.jpeg',
        title: 'Pengeringan Alami'
      }
    ]
  };

  const otherProducts = [
    {
      id: 2,
      name: 'Kopi Arabika Gayo',
      image: 'https://images.pexels.com/photos/1793037/pexels-photo-1793037.jpeg',
      description: 'Kopi arabika asli Aceh dengan karakteristik citarasa fruity'
    },
    {
      id: 3,
      name: 'Kayu Manis Ceylon',
      image: 'https://images.pexels.com/photos/4198027/pexels-photo-4198027.jpeg',
      description: 'Kayu manis Ceylon grade A dengan aroma manis alami'
    },
    {
      id: 4,
      name: 'Lada Hitam Muntok',
      image: 'https://images.pexels.com/photos/4198019/pexels-photo-4198019.jpeg',
      description: 'Lada hitam asli Bangka dengan tingkat kepedasan sempurna'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Terima kasih! Pesanan Anda telah dikirim. Tim kami akan segera menghubungi Anda.');
    setFormData({ name: '', email: '', phone: '', message: '', quantity: '' });
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <section className="py-6 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-gray-600 hover:text-amber-600">Home</Link>
            <span className="text-gray-400">/</span>
            <Link to="/products" className="text-gray-600 hover:text-amber-600">Products</Link>
            <span className="text-gray-400">/</span>
            <span className="text-amber-600 font-medium">{product.name}</span>
          </nav>
        </div>
      </section>

      {/* Product Hero */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div>
              <div className="relative mb-6">
                <img
                  src={product.images[currentImageIndex]}
                  alt={product.name}
                  className="w-full h-96 object-cover rounded-2xl"
                />
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-amber-800 p-2 rounded-full transition-all duration-200"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-amber-800 p-2 rounded-full transition-all duration-200"
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
                      index === currentImageIndex ? 'ring-2 ring-amber-600' : ''
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

            {/* Product Info */}
            <div>
              <h1 className="font-playfair text-4xl font-bold text-amber-800 mb-4">
                {product.name}
              </h1>
              <p className="text-xl text-gray-600 mb-8">{product.description}</p>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-amber-800 mb-4">Deskripsi Lengkap</h3>
                <div className="text-gray-700 leading-relaxed space-y-4">
                  {product.fullDescription.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph.trim()}</p>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-amber-800 mb-4">Keunggulan Produk</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                    Biji kopi pilihan dari petani lokal terpercaya
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                    Proses pengolahan tradisional dan modern
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                    Roasting segar untuk setiap pesanan
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                    Kemasan kedap udara untuk menjaga kesegaran
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-playfair text-3xl font-bold text-amber-800 text-center mb-12">
            Spesifikasi Produk
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                {Object.entries(product.specifications).map(([key, value], index) => (
                  <div key={key} className={`p-6 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-800">{key}</span>
                      <span className="text-gray-700">{value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Production Gallery */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-playfair text-3xl font-bold text-amber-800 text-center mb-12">
            Proses Produksi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {product.productionImages.map((image, index) => (
              <div key={index} className="relative rounded-2xl overflow-hidden group">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                  <h3 className="text-white text-xl font-semibold">{image.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-playfair text-3xl font-bold text-amber-800 text-center mb-12">
            Produk Lainnya
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {otherProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="p-6">
                  <h3 className="font-semibold text-lg text-amber-800 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
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
        </div>
      </section>

      {/* Order Form */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Order Form */}
            <div>
              <h2 className="font-playfair text-3xl font-bold text-amber-800 mb-8">
                Form Pemesanan
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Masukkan nama lengkap Anda"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="email@contoh.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Nomor WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="08123456789"
                  />
                </div>

                <div>
                  <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
                    Jumlah Pesanan
                  </label>
                  <input
                    type="text"
                    id="quantity"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Contoh: 5kg, 10 pack, dll"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Pesan Tambahan
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Tuliskan permintaan khusus atau pertanyaan Anda..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-amber-700 transition-colors duration-200 flex items-center justify-center"
                >
                  Kirim Pesanan <Send className="ml-2 h-5 w-5" />
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="font-playfair text-3xl font-bold text-amber-800 mb-8">
                Kontak Langsung
              </h2>
              
              <div className="space-y-6">
                <div className="bg-amber-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-lg text-amber-800 mb-4">Hubungi Kami Langsung</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="bg-amber-600 p-3 rounded-full">
                        <Phone className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">WhatsApp</p>
                        <p className="text-gray-600">+62 812-3456-7890</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="bg-amber-600 p-3 rounded-full">
                        <Mail className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">Email</p>
                        <p className="text-gray-600">info@kopinusantara.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="bg-amber-600 p-3 rounded-full">
                        <MapPin className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">Alamat</p>
                        <p className="text-gray-600">Jl. Merdeka No. 123, Yogyakarta 55161</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-amber-200 p-6 rounded-xl">
                  <h3 className="font-semibold text-lg text-amber-800 mb-4">Jam Operasional</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">Senin - Jumat</span>
                      <span>08:00 - 17:00 WIB</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Sabtu</span>
                      <span>08:00 - 15:00 WIB</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Minggu</span>
                      <span>Tutup</span>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-xl border-2 border-green-200">
                  <h3 className="font-semibold text-lg text-green-800 mb-2">Respon Cepat</h3>
                  <p className="text-green-700">
                    Tim customer service kami akan merespon dalam 1-2 jam pada jam kerja. 
                    Untuk respon lebih cepat, hubungi langsung via WhatsApp.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetail;