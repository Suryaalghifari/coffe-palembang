import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import LanguageSelector from "./LanguageSelector";

const Header = () => {
  const { t } = useLanguage();

  // UI state — tanpa useEffect, semuanya event-driven
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);

  const location = useLocation();

  // === Data ===
  const productCategories = [
    {
      name: t("nav.allProducts"),
      href: "/products?category=coffee",
      category: "all",
    },
    {
      name: "Robusta",
      href: "/products?category=coffee&bean=robusta",
      category: "robusta",
    },
    {
      name: "Arabica",
      href: "/products?category=coffee&bean=arabica",
      category: "arabica",
    },
  ];

  const navigation = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.howToOrder"), href: "/how-to-order" },
    { name: t("nav.gallery"), href: "/gallery" },
    { name: t("nav.contact"), href: "/contact" },
    { name: t("nav.terms"), href: "/terms" },
  ];

  // === Helpers ===
  const isPathActive = (path: string) => location.pathname === path;
  const isProductsActive =
    location.pathname.startsWith("/products") ||
    location.pathname.startsWith("/product");

  // === Handlers ===
  const closeAllMenus = () => {
    setIsProductDropdownOpen(false);
    setIsMenuOpen(false);
    setIsMobileProductsOpen(false);
  };

  return (
    <header className="bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link
              to="/"
              className="flex items-center space-x-2"
              onClick={closeAllMenus}
            >
              <img
                src="/assets/logo/logo.png"
                alt="Logo"
                className="h-12 w-12 md:h-14 md:w-14 object-contain"
              />
              <span className="hidden sm:inline font-playfair text-lg md:text-xl font-bold text-amber-800">
                {/* Optional tagline */}
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
                onClick={closeAllMenus}
                className={`text-sm font-medium rounded-md px-1.5 py-1 transition-colors duration-200 ${
                  isPathActive(item.href)
                    ? "text-amber-800 border-b-2 border-amber-800"
                    : "text-gray-700 hover:text-amber-800"
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Products (Desktop) */}
            <div
              className="relative"
              onMouseEnter={() => setIsProductDropdownOpen(true)}
              onMouseLeave={() => setIsProductDropdownOpen(false)}
            >
              <div className="flex items-center">
                <Link
                  to="/products?category=coffee"
                  className={`text-sm font-medium rounded-md px-1.5 py-1 transition-colors duration-200 ${
                    isProductsActive
                      ? "text-amber-800 border-b-2 border-amber-800"
                      : "text-gray-700 hover:text-amber-800"
                  }`}
                >
                  {t("nav.products")}
                </Link>

                <button
                  type="button"
                  aria-haspopup="menu"
                  aria-expanded={isProductDropdownOpen}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsProductDropdownOpen((v) => !v);
                  }}
                  className="ml-1 p-1 rounded hover:bg-amber-50 text-gray-700 hover:text-amber-800 transition"
                >
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${
                      isProductDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              {/* NOTE: TIDAK ADA mt-2 di sini */}
              <div
                role="menu"
                className={`absolute left-0 top-full w-56 rounded-xl border border-gray-100 bg-white shadow-lg/50 shadow
      transition-opacity duration-150
      ${
        isProductDropdownOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
              >
                <div className="py-2">
                  {productCategories.map((cat) => (
                    <Link
                      key={cat.category}
                      to={cat.href}
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-800 transition-colors rounded-md mx-1"
                      onClick={() => setIsProductDropdownOpen(false)}
                      role="menuitem"
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA */}
            <Link
              to="/contact"
              onClick={closeAllMenus}
              className="ml-2 bg-amber-800 text-white text-sm px-5 py-2 rounded-full hover:bg-amber-900 active:scale-[0.99] transition"
            >
              {t("nav.orderNow")}
            </Link>
          </div>

          {/* Mobile: hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen((v) => !v)}
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
              className="text-gray-700 hover:text-amber-800 p-2 -mr-2"
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
        <div
          className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
            isMenuOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 pt-2 pb-4 space-y-2 bg-white border-t">
            <div className="px-1">
              <LanguageSelector />
            </div>

            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={closeAllMenus}
                className={`block px-3 py-2 text-base font-medium rounded transition ${
                  isPathActive(item.href)
                    ? "text-amber-800 bg-amber-50"
                    : "text-gray-700 hover:text-amber-800 hover:bg-amber-50"
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile Products (accordion) */}
            <button
              type="button"
              onClick={() => setIsMobileProductsOpen((v) => !v)}
              className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-gray-700 hover:text-amber-800 hover:bg-amber-50 rounded transition"
              aria-expanded={isMobileProductsOpen}
              aria-controls="mobile-products-panel"
            >
              <span>{t("nav.products")}</span>
              <ChevronDown
                className={`h-5 w-5 transition-transform ${
                  isMobileProductsOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              id="mobile-products-panel"
              className={`pl-3 overflow-hidden transition-[max-height,opacity] duration-300 ${
                isMobileProductsOpen
                  ? "max-h-[500px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="mt-1 space-y-1">
                {productCategories.map((cat) => (
                  <Link
                    key={cat.category}
                    to={cat.href}
                    onClick={closeAllMenus}
                    className="block px-3 py-2 text-sm text-gray-600 hover:text-amber-800 hover:bg-amber-50 rounded transition"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/contact"
              onClick={closeAllMenus}
              className="block bg-amber-800 text-white px-6 py-2 rounded-full hover:bg-amber-900 transition text-center"
            >
              {t("nav.orderNow")}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
