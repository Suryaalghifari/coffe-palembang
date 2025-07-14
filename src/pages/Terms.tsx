import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Footer from '../components/Footer';

const Terms = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold text-amber-800 mb-6">
            {t('nav.terms')}
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Syarat dan ketentuan penggunaan layanan Kopi Nusantara. Mohon dibaca dengan seksama sebelum melakukan pemesanan.
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-12">
            
            {/* 1. Ketentuan Umum */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-amber-800 mb-6">1. Ketentuan Umum</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Dengan menggunakan layanan Kopi Nusantara, Anda menyetujui untuk terikat dengan syarat dan ketentuan yang berlaku. 
                  Syarat dan ketentuan ini dapat berubah sewaktu-waktu tanpa pemberitahuan sebelumnya.
                </p>
                <p>
                  Kopi Nusantara berhak menolak pesanan yang tidak sesuai dengan kebijakan perusahaan atau yang mencurigakan 
                  tanpa memberikan alasan terperinci.
                </p>
              </div>
            </div>

            {/* 2. Produk dan Layanan */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-amber-800 mb-6">2. Produk dan Layanan</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Semua produk yang ditawarkan adalah kopi dan rempah-rempah asli Indonesia dengan kualitas premium. 
                  Kami menjamin keaslian dan kualitas produk sesuai dengan deskripsi yang tertera.
                </p>
                <p>
                  Gambar produk yang ditampilkan adalah representasi visual dan mungkin sedikit berbeda dengan produk asli 
                  karena faktor pencahayaan dan pengaturan monitor.
                </p>
                <p>
                  Ketersediaan produk dapat berubah sewaktu-waktu. Jika produk yang dipesan tidak tersedia, 
                  kami akan menghubungi Anda untuk penggantian atau pembatalan pesanan.
                </p>
              </div>
            </div>

            {/* 3. Pemesanan dan Pembayaran */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-amber-800 mb-6">3. Pemesanan dan Pembayaran</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Pemesanan dapat dilakukan melalui WhatsApp, form online, atau telepon. 
                  Pesanan dianggap sah setelah konfirmasi dari tim kami.
                </p>
                <p>
                  Pembayaran dapat dilakukan melalui transfer bank, e-wallet, atau cash on delivery (COD) untuk area tertentu. 
                  Bukti pembayaran harus dikirimkan via WhatsApp untuk konfirmasi.
                </p>
                <p>
                  Harga yang tertera belum termasuk ongkos kirim. Ongkos kirim akan dihitung berdasarkan lokasi pengiriman 
                  dan berat produk.
                </p>
              </div>
            </div>

            {/* 4. Pengiriman */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-amber-800 mb-6">4. Pengiriman</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Pengiriman dilakukan melalui ekspedisi terpercaya (JNE, JNT, SiCepat) atau kurir internal untuk area Yogyakarta. 
                  Estimasi waktu pengiriman 2-7 hari kerja tergantung lokasi.
                </p>
                <p>
                  Risiko kerusakan atau kehilangan selama pengiriman menjadi tanggung jawab ekspedisi. 
                  Kami akan membantu proses klaim jika terjadi masalah.
                </p>
                <p>
                  Pastikan alamat pengiriman lengkap dan benar. Kami tidak bertanggung jawab atas keterlambatan 
                  atau kegagalan pengiriman akibat alamat yang tidak lengkap.
                </p>
              </div>
            </div>

            {/* 5. Kebijakan Pengembalian */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-amber-800 mb-6">5. Kebijakan Pengembalian</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Kami menerima pengembalian produk jika terdapat kerusakan, cacat produksi, atau produk tidak sesuai pesanan. 
                  Klaim harus dilaporkan maksimal 24 jam setelah produk diterima.
                </p>
                <p>
                  Produk yang dikembalikan harus dalam kondisi asli dan belum dibuka (kecuali untuk pengecekan kualitas). 
                  Biaya pengiriman pengembalian ditanggung oleh pembeli kecuali kesalahan dari pihak kami.
                </p>
                <p>
                  Pengembalian dana akan diproses dalam 3-7 hari kerja setelah produk diterima dan diverifikasi oleh tim kami.
                </p>
              </div>
            </div>

            {/* 6. Privasi dan Data */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-amber-800 mb-6">6. Privasi dan Data</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Kami menghormati privasi pelanggan dan berkomitmen melindungi data pribadi Anda. 
                  Data yang dikumpulkan hanya digunakan untuk keperluan pemrosesan pesanan dan komunikasi.
                </p>
                <p>
                  Kami tidak akan membagikan data pribadi Anda kepada pihak ketiga tanpa persetujuan, 
                  kecuali untuk keperluan pengiriman dan pembayaran.
                </p>
                <p>
                  Dengan memberikan data pribadi, Anda menyetujui penggunaan data tersebut sesuai dengan kebijakan privasi kami.
                </p>
              </div>
            </div>

            {/* 7. Batasan Tanggung Jawab */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-amber-800 mb-6">7. Batasan Tanggung Jawab</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Kopi Nusantara tidak bertanggung jawab atas kerugian tidak langsung, kehilangan keuntungan, 
                  atau kerusakan yang timbul dari penggunaan produk kami.
                </p>
                <p>
                  Tanggung jawab kami terbatas pada nilai produk yang dibeli. Kami tidak bertanggung jawab atas 
                  reaksi alergi atau masalah kesehatan yang mungkin timbul dari konsumsi produk.
                </p>
                <p>
                  Pelanggan disarankan untuk membaca komposisi produk dan berkonsultasi dengan ahli kesehatan 
                  jika memiliki kondisi medis tertentu.
                </p>
              </div>
            </div>

            {/* 8. Kontak */}
            <div className="bg-amber-50 rounded-2xl border-2 border-amber-200 p-8">
              <h2 className="text-2xl font-bold text-amber-800 mb-6">8. Hubungi Kami</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Jika Anda memiliki pertanyaan mengenai syarat dan ketentuan ini, silakan hubungi kami melalui:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p><strong>WhatsApp:</strong> +62 812-3456-7890</p>
                    <p><strong>Email:</strong> info@kopinusantara.com</p>
                  </div>
                  <div>
                    <p><strong>Alamat:</strong> Jl. Merdeka No. 123, Yogyakarta 55161</p>
                    <p><strong>Jam Operasional:</strong> Senin-Sabtu, 08:00-17:00 WIB</p>
                  </div>
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

export default Terms;