import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X, Play } from 'lucide-react';
import Footer from '../components/Footer';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentCategory, setCurrentCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Semua' },
    { id: 'production', name: 'Produksi' },
    { id: 'products', name: 'Produk' },
    { id: 'team', name: 'Tim & Aktivitas' },
    { id: 'facilities', name: 'Fasilitas' }
  ];

  const galleryItems = [
    {
      id: 1,
      type: 'image',
      url: 'https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg',
      title: 'Proses Roasting Kopi',
      description: 'Proses roasting kopi robusta dengan mesin modern untuk hasil yang konsisten',
      category: 'production'
    },
    {
      id: 2,
      type: 'image',
      url: 'https://images.pexels.com/photos/4109743/pexels-photo-4109743.jpeg',
      title: 'Seleksi Rempah-Rempah',
      description: 'Tim quality control melakukan seleksi manual rempah-rempah terbaik',
      category: 'production'
    },
    {
      id: 3,
      type: 'image',
      url: 'https://images.pexels.com/photos/1793037/pexels-photo-1793037.jpeg',
      title: 'Biji Kopi Pilihan',
      description: 'Biji kopi arabika dan robusta premium dari berbagai daerah di Indonesia',
      category: 'products'
    },
    {
      id: 4,
      type: 'image',
      url: 'https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg',
      title: 'Kayu Manis Ceylon',
      description: 'Kayu manis Ceylon grade A dengan aroma dan kualitas terbaik',
      category: 'products'
    },
    {
      id: 5,
      type: 'image',
      url: 'https://images.pexels.com/photos/4226249/pexels-photo-4226249.jpeg',
      title: 'Proses Packaging',
      description: 'Pengemasan produk dengan teknologi vacuum seal untuk menjaga kesegaran',
      category: 'production'
    },
    {
      id: 6,
      type: 'image',
      url: 'https://images.pexels.com/photos/4198019/pexels-photo-4198019.jpeg',
      title: 'Lada Hitam Muntok',
      description: 'Lada hitam asli Bangka dengan tingkat kepedasan yang sempurna',
      category: 'products'
    },
    {
      id: 7,
      type: 'image',
      url: 'https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg',
      title: 'Workshop Tim',
      description: 'Tim produksi sedang mengikuti workshop tentang standar kualitas internasional',
      category: 'team'
    },
    {
      id: 8,
      type: 'image',
      url: 'https://images.pexels.com/photos/4198017/pexels-photo-4198017.jpeg',
      title: 'Pala Banda',
      description: 'Pala asli Banda dengan aroma khas dan kualitas export',
      category: 'products'
    },
    {
      id: 9,
      type: 'image',
      url: 'https://images.pexels.com/photos/4198018/pexels-photo-4198018.jpeg',
      title: 'Kunyit Segar',
      description: 'Kunyit segar organik dengan kandungan kurkumin tinggi',
      category: 'products'
    },
    {
      id: 10,
      type: 'image',
      url: 'https://images.pexels.com/photos/1793031/pexels-photo-1793031.jpeg',
      title: 'Warehouse & Storage',
      description: 'Gudang penyimpanan dengan kontrol suhu dan kelembaban optimal',
      category: 'facilities'
    },
    {
      id: 11,
      type: 'image',
      url: 'https://images.pexels.com/photos/4198020/pexels-photo-4198020.jpeg',
      title: 'Cengkeh Maluku',
      description: 'Cengkeh asli Maluku dengan aroma yang kuat dan khas',
      category: 'products'
    },
    {
      id: 12,
      type: 'image',
      url: 'https://images.pexels.com/photos/4198021/pexels-photo-4198021.jpeg',
      title: 'Kapulaga Hijau',
      description: 'Kapulaga hijau pilihan dengan aroma wangi dan rasa segar',
      category: 'products'
    },
    {
      id: 13,
      type: 'video',
      url: 'https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg',
      title: 'Video Proses Produksi',
      description: 'Dokumentasi lengkap proses produksi dari bahan baku hingga kemasan',
      category: 'production'
    },
    {
      id: 14,
      type: 'image',
      url: 'https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg',
      title: 'Tim Quality Control',
      description: 'Tim quality control melakukan pengecekan final sebelum produk dipacking',
      category: 'team'
    },
    {
      id: 15,
      type: 'image',
      url: 'https://images.pexels.com/photos/4109743/pexels-photo-4109743.jpeg',
      title: 'Lab Testing',
      description: 'Laboratorium mini untuk testing kualitas dan kandungan produk',
      category: 'facilities'
    }
  ];

  const filteredItems = currentCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === currentCategory);

  const openModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold text-amber-800 mb-6">
            Galeri Kami
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Dokumentasi perjalanan kami dalam menghadirkan kopi dan rempah-rempah terbaik. 
            Dari proses produksi hingga moment-moment berharga bersama tim dan pelanggan.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setCurrentCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  currentCategory === category.id
                    ? 'bg-amber-600 text-white shadow-lg transform scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-amber-100 hover:text-amber-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
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
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  
                  {/* Video Play Button */}
                  {item.type === 'video' && (
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                      <div className="bg-white bg-opacity-90 rounded-full p-4 group-hover:bg-opacity-100 transition-all duration-300">
                        <Play className="h-8 w-8 text-amber-600" />
                      </div>
                    </div>
                  )}
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {categories.find(cat => cat.id === item.category)?.name}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-semibold text-lg text-amber-800 mb-2 group-hover:text-amber-900 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600 mb-4">Belum ada konten untuk kategori ini</p>
              <p className="text-gray-500">Kami sedang menambahkan lebih banyak foto dan video. Stay tuned!</p>
            </div>
          )}
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-amber-300 transition-colors"
            >
              <X className="h-8 w-8" />
            </button>
            <img
              src={selectedImage}
              alt="Gallery Image"
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-amber-800 text-center mb-16">
            Pencapaian Kami
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-amber-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-white">6+</span>
              </div>
              <h3 className="text-xl font-semibold text-amber-800 mb-2">Tahun Pengalaman</h3>
              <p className="text-gray-600">Melayani pelanggan sejak 2018</p>
            </div>
            
            <div className="text-center">
              <div className="bg-amber-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-white">50+</span>
              </div>
              <h3 className="text-xl font-semibold text-amber-800 mb-2">Produk Tersedia</h3>
              <p className="text-gray-600">Beragam kopi dan rempah-rempah</p>
            </div>
            
            <div className="text-center">
              <div className="bg-amber-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-white">5K+</span>
              </div>
              <h3 className="text-xl font-semibold text-amber-800 mb-2">Pelanggan Puas</h3>
              <p className="text-gray-600">Tersebar di seluruh Indonesia</p>
            </div>
            
            <div className="text-center">
              <div className="bg-amber-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-white">20+</span>
              </div>
              <h3 className="text-xl font-semibold text-amber-800 mb-2">Daerah Asal</h3>
              <p className="text-gray-600">Sumber produk dari berbagai pulau</p>
            </div>
          </div>
        </div>
      </section>

      {/* Behind the Scenes */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-amber-800 text-center mb-16">
            Behind the Scenes
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-amber-800 mb-6">Komitmen Kualitas</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Setiap foto dan video di galeri ini merepresentasikan dedikasi tim kami dalam 
                menghadirkan produk berkualitas tinggi. Dari proses seleksi bahan baku hingga 
                pengemasan akhir, semuanya dilakukan dengan standar yang ketat.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-amber-800">Seleksi Manual</h4>
                    <p className="text-gray-600">Setiap biji kopi dan rempah dipilih secara manual oleh ahli</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-amber-800">Teknologi Modern</h4>
                    <p className="text-gray-600">Menggunakan peralatan modern untuk menjaga konsistensi</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-amber-800">Tim Berpengalaman</h4>
                    <p className="text-gray-600">Didukung tim profesional dengan pengalaman puluhan tahun</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/4109743/pexels-photo-4109743.jpeg"
                alt="Team working"
                className="rounded-2xl h-48 object-cover"
              />
              <img
                src="https://images.pexels.com/photos/4226249/pexels-photo-4226249.jpeg"
                alt="Production process"
                className="rounded-2xl h-48 object-cover"
              />
              <img
                src="https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg"
                alt="Coffee roasting"
                className="rounded-2xl h-48 object-cover"
              />
              <img
                src="https://images.pexels.com/photos/1793037/pexels-photo-1793037.jpeg"
                alt="Quality check"
                className="rounded-2xl h-48 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;