import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ArrowRight, Search } from 'lucide-react';
import Footer from '../components/Footer';

const Products = () => {
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const categoryFromUrl = urlParams.get('category') || 'all';
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(categoryFromUrl);

  const categories = [
    { id: 'all', name: 'Semua Produk' },
    { id: 'coffee', name: 'Kopi' },
    { id: 'cloves', name: 'Cengkeh' },
    { id: 'spices', name: 'Rempah-rempah' },
    { id: 'herbs', name: 'Herbal' }
  ];

  const products = [
    {
      id: 1,
      name: 'Kopi Robusta Premium',
      description: 'Kopi robusta pilihan dengan citarasa kuat dan aroma yang menggugah selera. Dipetik dari kebun kopi terbaik di dataran tinggi Lampung.',
      image: 'https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg',
      category: 'coffee'
    },
    {
      id: 2,
      name: 'Kopi Arabika Gayo',
      description: 'Kopi arabika asli Aceh dengan karakteristik citarasa fruity dan aroma floral yang khas. Single origin premium grade.',
      image: 'https://images.pexels.com/photos/1793037/pexels-photo-1793037.jpeg',
      category: 'coffee'
    },
    {
      id: 3,
      name: 'Kayu Manis Ceylon',
      description: 'Kayu manis Ceylon grade A dengan aroma manis alami dan rasa lembut. Cocok untuk kue, minuman, dan masakan.',
      image: 'https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg',
      category: 'spices'
    },
    {
      id: 4,
      name: 'Lada Hitam Muntok',
      description: 'Lada hitam asli Bangka dengan tingkat kepedasan sempurna. Kualitas export dengan aroma yang tajam dan rasa yang kuat.',
      image: 'https://images.pexels.com/photos/4198019/pexels-photo-4198019.jpeg',
      category: 'spices'
    },
    {
      id: 5,
      name: 'Pala Banda',
      description: 'Pala asli Banda dengan aroma khas dan rasa yang autentik. Biji pala pilihan untuk bumbu masakan dan minuman tradisional.',
      image: 'https://images.pexels.com/photos/4198017/pexels-photo-4198017.jpeg',
      category: 'spices'
    },
    {
      id: 6,
      name: 'Jahe Merah Organik',
      description: 'Jahe merah organik segar dengan kandungan gingerol tinggi. Sangat baik untuk kesehatan dan minuman herbal.',
      image: 'https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg',
      category: 'herbs'
    },
    {
      id: 7,
      name: 'Kunyit Asam Jawa',
      description: 'Kunyit segar berkualitas tinggi dengan kandungan kurkumin optimal. Cocok untuk jamu, masakan, dan kesehatan.',
      image: 'https://images.pexels.com/photos/4198018/pexels-photo-4198018.jpeg',
      category: 'herbs'
    },
    {
      id: 8,
      name: 'Kopi Luwak Premium',
      description: 'Kopi luwak asli Indonesia dengan proses fermentasi alami. Citarasa yang unik dan eksklusif dengan aroma yang kompleks.',
      image: 'https://images.pexels.com/photos/4226249/pexels-photo-4226249.jpeg',
      category: 'coffee'
    },
    {
      id: 9,
      name: 'Cengkeh Maluku Premium',
      description: 'Cengkeh asli Maluku dengan aroma yang kuat dan rasa yang khas. Kualitas premium untuk bumbu masakan dan keperluan industri.',
      image: 'https://images.pexels.com/photos/4198020/pexels-photo-4198020.jpeg',
      category: 'cloves'
    },
    {
      id: 13,
      name: 'Cengkeh Kering Pilihan',
      description: 'Cengkeh kering berkualitas tinggi dengan kadar minyak atsiri optimal. Cocok untuk industri makanan dan farmasi.',
      image: 'https://images.pexels.com/photos/4198021/pexels-photo-4198021.jpeg',
      category: 'cloves'
    },
    {
      id: 14,
      name: 'Cengkeh Organik',
      description: 'Cengkeh organik tanpa pestisida dengan sertifikat organik. Aroma kuat dan kualitas export untuk pasar internasional.',
      image: 'https://images.pexels.com/photos/4198020/pexels-photo-4198020.jpeg',
      category: 'cloves'
    },
    {
      id: 10,
      name: 'Kapulaga Hijau',
      description: 'Kapulaga hijau pilihan dengan aroma yang wangi dan rasa yang segar. Cocok untuk masakan India, Arab, dan minuman.',
      image: 'https://images.pexels.com/photos/4198021/pexels-photo-4198021.jpeg',
      category: 'spices'
    },
    {
      id: 11,
      name: 'Temulawak Organik',
      description: 'Temulawak organik segar dengan kandungan kurkumin tinggi. Sangat baik untuk kesehatan liver dan pencernaan.',
      image: 'https://images.pexels.com/photos/4109743/pexels-photo-4109743.jpeg',
      category: 'herbs'
    },
    {
      id: 12,
      name: 'Kopi Toraja Highland',
      description: 'Kopi arabika dari dataran tinggi Toraja dengan karakteristik full body dan earthiness yang khas. Premium single origin.',
      image: 'https://images.pexels.com/photos/1793031/pexels-photo-1793031.jpeg',
      category: 'coffee'
    }
  ];

  // Update selected category when URL changes
  React.useEffect(() => {
    setSelectedCategory(categoryFromUrl);
  }, [categoryFromUrl]);

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold text-amber-800 mb-6">
            Produk Pilihan Kami
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Koleksi lengkap kopi dan rempah-rempah premium dari berbagai daerah di Indonesia. 
            Setiap produk dipilih dengan standar kualitas tertinggi untuk kepuasan Anda.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Cari produk..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-amber-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-amber-100'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-xl text-amber-800 mb-3">{product.name}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm">{product.description}</p>
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
              <p className="text-xl text-gray-600 mb-4">Produk tidak ditemukan</p>
              <p className="text-gray-500">Coba ubah kata kunci pencarian atau filter kategori</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-amber-800 mb-6">
            Tidak Menemukan Yang Anda Cari?
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Hubungi kami untuk produk khusus atau dalam jumlah besar. 
            Tim kami siap membantu kebutuhan spesifik Anda.
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