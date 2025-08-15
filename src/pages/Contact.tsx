// src/pages/Contact.tsx
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
import { useLanguage } from "../contexts/LanguageContext";
import Reveal from "../components/Reveal";

const Contact: React.FC = () => {
  const { t } = useLanguage();

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
      setFormData((prev) => ({ ...prev, [name]: target.checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);

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

  // --- Contact info (i18n) ---
  const contactInfo = [
    {
      icon: MapPin,
      title: t("contact.info.addressTitle"),
      content: t("contact.info.address"),
      link: "https://maps.app.goo.gl/DPT7xzeJRvWQcVY76",
    },
    {
      icon: Phone,
      title: t("contact.info.phoneTitle"),
      content: t("contact.info.phone"),
      link: "tel:+62811294646",
    },
    {
      icon: Mail,
      title: t("contact.info.emailTitle"),
      content: t("contact.info.email"),
      link: "mailto:cvbatangharisembilanmakmur@gmail.com",
    },
    {
      icon: MessageCircle,
      title: t("contact.info.whatsappTitle"),
      content: t("contact.info.whatsapp"),
      link: "https://wa.me/+62811294646",
    },
  ];

  // --- Jam operasional (indeks 0..2) ---
  const operatingHours = [
    { day: t("contact.hours.0.day"), time: t("contact.hours.0.time") },
    { day: t("contact.hours.1.day"), time: t("contact.hours.1.time") },
    { day: t("contact.hours.2.day"), time: t("contact.hours.2.time") },
  ];

  // --- Opsi subjek (indeks 0..6) ---
  const subjectOptions = [
    t("contact.form.subjectOptions.0"),
    t("contact.form.subjectOptions.1"),
    t("contact.form.subjectOptions.2"),
    t("contact.form.subjectOptions.3"),
    t("contact.form.subjectOptions.4"),
    t("contact.form.subjectOptions.5"),
    t("contact.form.subjectOptions.6"),
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Reveal>
            <h1 className="font-playfair text-4xl md:text-6xl font-bold text-amber-800 mb-6">
              {t("contact.hero.title")}
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              {t("contact.hero.subtitle")}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <Reveal>
                <h2 className="font-playfair text-3xl font-bold text-amber-800 mb-8">
                  {t("contact.form.title")}
                </h2>
              </Reveal>

              {isSubmitted ? (
                <Reveal y={10}>
                  <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8 text-center">
                    <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-green-800 mb-4">
                      {t("contact.form.successTitle")}
                    </h3>
                    <p className="text-green-700">
                      {t("contact.form.successText")}
                    </p>
                  </div>
                </Reveal>
              ) : (
                <Reveal y={10}>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          {t("contact.form.name")} *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                          placeholder={t("contact.form.namePh")}
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          {t("contact.form.email")} *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                          placeholder={t("contact.form.emailPh")}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          {t("contact.form.phone")} *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                          placeholder={t("contact.form.phonePh")}
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="subject"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          {t("contact.form.subject")} *
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                        >
                          <option value="">
                            {t("contact.form.subjectPh")}
                          </option>
                          {subjectOptions.map((label) => (
                            <option key={label} value={label}>
                              {label}
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
                          {t("contact.form.reseller")}
                        </span>
                      </label>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        {t("contact.form.message")} *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                        placeholder={t("contact.form.messagePh")}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-amber-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-amber-700 transition-colors duration-200 flex items-center justify-center"
                    >
                      {t("contact.form.submit")}{" "}
                      <Send className="ml-2 h-5 w-5" />
                    </button>
                  </form>
                </Reveal>
              )}
            </div>

            {/* Info Sidebar */}
            <div className="space-y-8">
              <Reveal y={12}>
                <div>
                  <h3 className="font-playfair text-2xl font-bold text-amber-800 mb-6">
                    {t("contact.info.title")}
                  </h3>
                  <div className="space-y-6">
                    {contactInfo.map((info, idx) => (
                      <div key={idx} className="flex items-start space-x-4">
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
                              info.link.startsWith("http")
                                ? "_blank"
                                : undefined
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
              </Reveal>

              <Reveal y={12}>
                <div className="bg-amber-50 p-6 rounded-2xl">
                  <h3 className="font-semibold text-lg text-amber-800 mb-4 flex items-center">
                    <Clock className="h-5 w-5 mr-2" />
                    {t("contact.hoursTitle")}
                  </h3>
                  <div className="space-y-3">
                    {operatingHours.map((s, i) => (
                      <div
                        key={i}
                        className="flex justify-between items-center"
                      >
                        <span className="font-medium text-gray-800">
                          {s.day}
                        </span>
                        <span className="text-gray-600">{s.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal y={12}>
                <div className="bg-green-50 p-6 rounded-2xl border-2 border-green-200">
                  <h3 className="font-semibold text-lg text-green-800 mb-4">
                    {t("contact.quick.title")}
                  </h3>
                  <p className="text-green-700 mb-4">
                    {t("contact.quick.body")}
                  </p>
                  <a
                    href="https://wa.me/62811294646"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    {t("contact.quick.button")}
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-amber-800 text-center mb-12">
              {t("contact.map.title")}
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal y={12}>
              <div>
                <h3 className="text-2xl font-bold text-amber-800 mb-6">
                  {t("contact.map.visitTitle")}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {t("contact.map.visitBody")}
                </p>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-amber-600" />
                    <span className="text-gray-700">
                      {t("contact.info.address")}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-amber-600" />
                    <span className="text-gray-700">
                      {t("contact.map.hoursInline")}
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
                    {t("contact.map.openInMaps")}
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal y={12}>
              <div className="bg-gray-200 rounded-2xl h-96 overflow-hidden flex items-center justify-center">
                <iframe
                  title={t("contact.map.iframeTitle")}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d994.9860616808244!2d103.24167006948329!3d-4.031798861960116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e376b8d5bba05fd%3A0xe3f456b4ee0945d1!2sJl.%20R.%20Soeprapto%20No.13%2C%20Nendagung%2C%20Kec.%20Pagar%20Alam%20Sel.%2C%20Kota%20Pagar%20Alam%2C%20Sumatera%20Selatan%2031581!5e0!3m2!1sid!2sid!4v1754274252202!5m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-amber-800 text-center mb-16">
              {t("contact.faq.title")}
            </h2>
          </Reveal>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <Reveal key={i} y={12}>
                <div className="bg-white border-2 border-amber-200 rounded-2xl p-6">
                  <h3 className="font-bold text-lg text-amber-800 mb-3">
                    {t(`contact.faq.items.${i}.q`)}
                  </h3>
                  <p className="text-gray-700">
                    {t(`contact.faq.items.${i}.a`)}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
