import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Coffee, ChevronDown } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import LanguageSelector from "./LanguageSelector";

const Header = () => {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const location = useLocation();

  const productCategories = [
    { name: t("nav.allProducts"), href: "/products", category: "all" },
    {
      name: t("nav.coffee"),
      href: "/products?category=coffee",
      category: "coffee",
    },
    {
      name: t("nav.cloves"),
      href: "/products?category=cloves",
      category: "cloves",
    },
    {
      name: t("nav.spices"),
      href: "/products?category=spices",
      category: "spices",
    },
    {
      name: t("nav.herbs"),
      href: "/products?category=herbs",
      category: "herbs",
    },
  ];

  const navigation = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.howToOrder"), href: "/how-to-order" },
    { name: t("nav.gallery"), href: "/gallery" },
    { name: t("nav.contact"), href: "/contact" },
    { name: t("nav.terms"), href: "/terms" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="/assets/logo/logo.png"
                alt="Logo"
                className="h-14 w-14 md:h-14 md:w-14 object-contain"
              />
              <span className="font-playfair text-xl font-bold text-amber-800">
                {/* Teks Disamping */}
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 ml-auto">
            <LanguageSelector />

            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? "text-amber-800 border-b-2 border-amber-800 pb-1"
                    : "text-gray-700 hover:text-amber-800"
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsProductDropdownOpen(true)}
              onMouseLeave={() => setIsProductDropdownOpen(false)}
            >
              <button
                className={`flex items-center text-sm font-medium transition-colors duration-200 ${
                  location.pathname.includes("/product")
                    ? "text-amber-800 border-b-2 border-amber-800 pb-1"
                    : "text-gray-700 hover:text-amber-800"
                }`}
              >
                {t("nav.products")}
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                    isProductDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              {isProductDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-44 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50">
                  {productCategories.map((category) => (
                    <Link
                      key={category.category}
                      to={category.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-800 transition"
                      onClick={() => setIsProductDropdownOpen(false)}
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="ml-3 bg-amber-800 text-white text-sm px-5 py-1.5 rounded-xl hover:bg-amber-900 transition duration-200"
            >
              {t("nav.orderNow")}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-amber-800"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-4 pt-2 pb-3 space-y-1 bg-white border-t">
              <div className="px-3 py-2">
                <LanguageSelector />
              </div>

              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-base font-medium rounded transition ${
                    isActive(item.href)
                      ? "text-amber-800 bg-amber-50"
                      : "text-gray-700 hover:text-amber-800 hover:bg-amber-50"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile Product Menu */}
              <div className="px-3 pt-2">
                <span className="text-base font-medium text-gray-700 block mb-1">
                  {t("nav.products")}
                </span>
                <div className="pl-4 space-y-1">
                  {productCategories.map((category) => (
                    <Link
                      key={category.category}
                      to={category.href}
                      className="block px-3 py-2 text-sm text-gray-600 hover:text-amber-800 hover:bg-amber-50 rounded transition"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                to="/contact"
                className="block bg-amber-800 text-white px-6 py-2 rounded-full hover:bg-amber-900 transition mx-3 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("nav.orderNow")}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
