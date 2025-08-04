import React, { useState } from "react";
import {
  Send,
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  CheckCircle,
} from "lucide-react";
import Footer from "../components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    isReseller: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const target = e.target as HTMLInputElement;
      setFormData((prev) => ({
        ...prev,
        [name]: target.checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        isReseller: false,
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Alamat",
      content:
        "Jl R Soeprapto no 13. Pagar Alam, Tanjung Payang Sumatera Selatan - Indonesia",
      link: "https://maps.app.goo.gl/DPT7xzeJRvWQcVY76",
    },
    {
      icon: Phone,
      title: "Telepon",
      content: "+62 821-3158-0596",
      link: "tel: +62 821-3158-0596",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@BatangHari.com",
      link: "mailto:info@BatangHari.com",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      content: "+62 821-3158-0596",
      link: "https://wa.me/+6282131580596",
    },
  ];

  const operatingHours = [
    { day: "Senin - Jumat", time: "08:00 - 17:00 WIB" },
    { day: "Sabtu", time: "08:00 - 15:00 WIB" },
    { day: "Minggu", time: "Tutup" },
  ];

  const subjectOptions = [
    "Pertanyaan Umum",
    "Informasi Produk",
    "Pemesanan",
    "Keluhan",
    "Kerjasama Reseller",
    "Kerjasama B2B",
    "Lainnya",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold text-amber-800 mb-6">
            Hubungi Kami
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Kami siap membantu Anda dengan pertanyaan apapun seputar produk kopi
            dan rempah-rempah. Tim customer service kami responsif dan
            berpengalaman.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <h2 className="font-playfair text-3xl font-bold text-amber-800 mb-8">
                Kirim Pesan
              </h2>

              {isSubmitted ? (
                <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8 text-center">
                  <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-green-800 mb-4">
                    Pesan Terkirim!
                  </h3>
                  <p className="text-green-700">
                    Terima kasih atas pesan Anda. Tim kami akan segera
                    menghubungi Anda dalam 1-2 jam kerja.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Nama Lengkap *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                        placeholder="Masukkan nama lengkap"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                        placeholder="email@contoh.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Nomor Telepon *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                        placeholder="08123456789"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Subjek *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                      >
                        <option value="">Pilih subjek</option>
                        {subjectOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="flex items-center space-x-3 mb-4">
                      <input
                        type="checkbox"
                        name="isReseller"
                        checked={formData.isReseller}
                        onChange={handleInputChange}
                        className="rounded border-gray-300 text-amber-600 focus:ring-amber-500"
                      />
                      <span className="text-sm font-medium text-gray-700">
                        Saya tertarik menjadi reseller
                      </span>
                    </label>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Pesan *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                      placeholder="Tuliskan pesan, pertanyaan, atau permintaan Anda di sini..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-amber-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-amber-700 transition-colors duration-200 flex items-center justify-center"
                  >
                    Kirim Pesan <Send className="ml-2 h-5 w-5" />
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="font-playfair text-2xl font-bold text-amber-800 mb-6">
                  Informasi Kontak
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-amber-600 p-3 rounded-full flex-shrink-0">
                        <info.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-gray-800">
                          {info.title}
                        </h4>
                        <a
                          href={info.link}
                          className="text-gray-600 hover:text-amber-600 transition-colors duration-200"
                          target={
                            info.link.startsWith("http") ? "_blank" : undefined
                          }
                          rel={
                            info.link.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                        >
                          {info.content}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-amber-50 p-6 rounded-2xl">
                <h3 className="font-semibold text-lg text-amber-800 mb-4 flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  Jam Operasional
                </h3>
                <div className="space-y-3">
                  {operatingHours.map((schedule, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center"
                    >
                      <span className="font-medium text-gray-800">
                        {schedule.day}
                      </span>
                      <span className="text-gray-600">{schedule.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-2xl border-2 border-green-200">
                <h3 className="font-semibold text-lg text-green-800 mb-4">
                  Respon Cepat
                </h3>
                <p className="text-green-700 mb-4">
                  Untuk respon tercepat, hubungi kami via WhatsApp. Tim customer
                  service kami online 24/7 untuk melayani pertanyaan urgent.
                </p>
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200"
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Chat WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-amber-800 text-center mb-12">
            Lokasi Kami
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-amber-800 mb-6">
                Kunjungi Toko Kami
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Kami mengundang Anda untuk mengunjungi toko fisik kami di
                Yogyakarta. Di sini Anda dapat melihat langsung proses produksi,
                mencoba sample produk, dan berkonsultasi langsung dengan tim
                ahli kami.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-amber-600" />
                  <span className="text-gray-700">
                    Jl R Soeprapto no 13. Pagar Alam, Tanjung Payang Sumatera
                    Selatan - Indonesia
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-amber-600" />
                  <span className="text-gray-700">
                    Senin - Sabtu: 08:00 - 17:00 WIB
                  </span>
                </div>
              </div>

              <div className="mt-6">
                <a
                  href="https://maps.app.goo.gl/DPT7xzeJRvWQcVY76"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors duration-200 inline-flex items-center"
                >
                  <MapPin className="h-5 w-5 mr-2" />
                  Buka di Google Maps
                </a>
              </div>
            </div>

            <div className="bg-gray-200 rounded-2xl h-96 overflow-hidden flex items-center justify-center">
              <iframe
                title="Lokasi CV Batanghari Sembilan Makmur"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d994.9860616808244!2d103.24167006948329!3d-4.031798861960116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e376b8d5bba05fd%3A0xe3f456b4ee0945d1!2sJl.%20R.%20Soeprapto%20No.13%2C%20Nendagung%2C%20Kec.%20Pagar%20Alam%20Sel.%2C%20Kota%20Pagar%20Alam%2C%20Sumatera%20Selatan%2031581!5e0!3m2!1sid!2sid!4v1754274252202!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-amber-800 text-center mb-16">
            Pertanyaan yang Sering Diajukan
          </h2>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white border-2 border-amber-200 rounded-2xl p-6">
                <h3 className="font-bold text-lg text-amber-800 mb-3">
                  Berapa lama respon email?
                </h3>
                <p className="text-gray-700">
                  Kami merespon email dalam 2-4 jam pada jam kerja dan maksimal
                  24 jam di luar jam kerja.
                </p>
              </div>

              <div className="bg-white border-2 border-amber-200 rounded-2xl p-6">
                <h3 className="font-bold text-lg text-amber-800 mb-3">
                  Apakah bisa konsultasi gratis?
                </h3>
                <p className="text-gray-700">
                  Ya, kami menyediakan konsultasi gratis untuk pemilihan produk
                  dan kebutuhan bisnis Anda.
                </p>
              </div>

              <div className="bg-white border-2 border-amber-200 rounded-2xl p-6">
                <h3 className="font-bold text-lg text-amber-800 mb-3">
                  Apakah melayani pesanan B2B?
                </h3>
                <p className="text-gray-700">
                  Tentu saja! Kami melayani pesanan dalam jumlah besar untuk
                  restoran, cafe, dan distributor.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white border-2 border-amber-200 rounded-2xl p-6">
                <h3 className="font-bold text-lg text-amber-800 mb-3">
                  Bagaimana cara menjadi reseller?
                </h3>
                <p className="text-gray-700">
                  Hubungi kami via WhatsApp atau centang opsi "tertarik menjadi
                  reseller" di form kontak untuk informasi lengkap.
                </p>
              </div>

              <div className="bg-white border-2 border-amber-200 rounded-2xl p-6">
                <h3 className="font-bold text-lg text-amber-800 mb-3">
                  Apakah bisa custom packaging?
                </h3>
                <p className="text-gray-700">
                  Ya, untuk pesanan dalam jumlah tertentu kami menyediakan
                  layanan custom packaging dengan branding Anda.
                </p>
              </div>

              <div className="bg-white border-2 border-amber-200 rounded-2xl p-6">
                <h3 className="font-bold text-lg text-amber-800 mb-3">
                  Bisakah visit factory?
                </h3>
                <p className="text-gray-700">
                  Kami menyambut kunjungan ke fasilitas produksi dengan
                  appointment terlebih dahulu untuk menjaga kualitas produksi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
