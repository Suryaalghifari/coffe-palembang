import React from "react";
import { Icon } from "@iconify/react";

const FloatingWhatsApp = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+62811294646";
    const message =
      "Halo! Saya tertarik dengan produk kopi dan rempah-rempah Anda.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center">
      {/* Tooltip */}
      <span className="opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 bg-black text-white text-xs rounded px-3 py-1 mr-2 pointer-events-none select-none group-hover:pointer-events-auto">
        Contact us
      </span>
      <button
        onClick={handleWhatsAppClick}
        className="group relative bg-[#25D366] p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-300 flex items-center justify-center focus:outline-none"
        aria-label="Contact via WhatsApp"
      >
        <Icon icon="mdi:whatsapp" className="h-7 w-7 text-white" />
        {/* Tooltip */}
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto bg-black text-white text-xs rounded px-3 py-1 transition-all duration-200 whitespace-nowrap">
          Contact us
        </span>
      </button>
    </div>
  );
};

export default FloatingWhatsApp;
