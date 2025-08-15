// src/data/products.ts
export type Bean = "robusta" | "arabica";
export type Category = "coffee";

import robusta1 from "../assets/products/coffee/robusta/Robusta_1.png";
import robusta2 from "../assets/products/coffee/robusta/Robusta_2.jpeg";
import robusta3 from "../assets/products/coffee/robusta/Robusta_3.png";
import arabica1 from "../assets/products/coffee/arabica/Arabica_1.jpg";
import arabica2 from "../assets/products/coffee/arabica/Arabica_2.png";
import arabica3 from "../assets/products/coffee/arabica/Arabica_3.png";

import petik from "../assets/gallery/production/petik.png";
import olah from "../assets/gallery/production/olah.png";

export type Product = {
  id: number;
  // gunakan key i18n, bukan teks langsung
  nameKey: string;
  descKey: string;
  fullDescKey: string;
  images: string[];
  category: Category;
  bean: Bean;
  specifications: Record<string, string>; // boleh di-i18n belakangan
  productionImages: { url: string; titleKey: string }[];
};

export const products: Product[] = [
  {
    id: 1,
    nameKey: "products.robusta.name",
    descKey: "products.robusta.desc",
    fullDescKey: "products.robusta.fullDesc",
    images: [robusta1, robusta2, robusta3],
    category: "coffee",
    bean: "robusta",
    specifications: {
      Asal: "Sumatra Selatan, Indonesia",
      Varietas: "Robusta Pagar Alam",
      Ketinggian: "700-1200 mdpl",
      Proses: "Natural & Honey Process",
      "Tingkat Roast": "Medium Roast",
      Kemasan: "250g, 500g, 1kg",
      "Kadar Air": "Maks. 12%",
      Defect: "Maks. 5%",
    },
    productionImages: [
      { url: petik, titleKey: "products.robusta.prodImage1" },
      { url: olah, titleKey: "products.robusta.prodImage2" },
    ],
  },
  {
    id: 2,
    nameKey: "products.arabica.name",
    descKey: "products.arabica.desc",
    fullDescKey: "products.arabica.fullDesc",
    images: [arabica1, arabica2, arabica3],
    category: "coffee",
    bean: "arabica",
    specifications: {
      Asal: "Sumatra Selatan, Indonesia",
      Varietas: "Arabica Pagar Alam",
      Ketinggian: "1200-1600 mdpl",
      Proses: "Washed",
      "Tingkat Roast": "Medium Roast",
      Kemasan: "250g, 500g, 1kg",
      "Kadar Air": "Maks. 12%",
      Defect: "Maks. 3%",
    },
    productionImages: [
      { url: petik, titleKey: "products.arabica.prodImage1" },
      { url: olah, titleKey: "products.arabica.prodImage2" },
    ],
  },
];

// Helper
export const getCoffeeProducts = () =>
  products.filter((p) => p.category === "coffee");

export const getProductsByBean = (bean: Bean) =>
  products.filter((p) => p.bean === bean);
