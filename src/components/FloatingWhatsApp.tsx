import React from "react";
import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "6281234567890";
    const message =
      "Halo! Saya tertarik dengan produk kopi dan rempah-rempah Anda.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-green-600 transform hover:scale-105 transition-all duration-300"
      aria-label="Contact via WhatsApp"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden md:inline text-sm font-medium">Chat di sini</span>
    </button>
  );
};

export default FloatingWhatsApp;
