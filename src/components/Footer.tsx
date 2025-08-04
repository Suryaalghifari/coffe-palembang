import React from "react";
import { Coffee, Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-4 mb-4">
              <img
                src="/assets/logo/logo.png"
                alt="Logo"
                className="h-16 w-16 md:h-20 md:w-20 object-contain"
              />
              <span className="font-playfair text-xl md:text-2xl font-bold text-amber-800">
                CV. BatangHari Sembilan Makmur
              </span>
            </div>

            <p className="text-gray-600 mb-4 leading-relaxed">
              Dari Pagar Alam, kami hadir bersama para petani untuk menghadirkan
              kopi dan rempah terbaik Nusantara. Mengusung kualitas unggul dan
              rasa otentik Indonesia sejak 2019.
            </p>

            <div className="flex space-x-4">
              <a
                href="#"
                className="text-amber-600 hover:text-amber-800 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-amber-600 hover:text-amber-800 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-amber-800">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-600 hover:text-amber-800 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-gray-600 hover:text-amber-800 transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/how-to-order"
                  className="text-gray-600 hover:text-amber-800 transition-colors"
                >
                  How to Order
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-gray-600 hover:text-amber-800 transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 hover:text-amber-800 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-amber-800">
              Contact Us
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-amber-600" />
                <span className="text-gray-600 text-sm">
                  Jl R Soeprapto no 13. Pagar Alam, Tanjung Payang Sumatera
                  Selatan - Indonesia
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-amber-600" />
                <span className="text-gray-600 text-sm">+62 821-3158-0596</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-amber-600" />
                <span className="text-gray-600 text-sm">
                  info@BatangHari.com
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2025 - Cv BatangHari Sembilan Makmur
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
