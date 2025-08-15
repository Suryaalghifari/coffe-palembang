// src/data/gallery.ts
export type GalleryCategory = "production" | "products" | "team" | "facilities";

export const GALLERY_CATEGORY_KEYS: Record<GalleryCategory, string> = {
  production: "gallery.category.production",
  products: "gallery.category.products",
  team: "gallery.category.team",
  facilities: "gallery.category.facilities",
};

export type GalleryItem =
  | {
      id: number;
      type: "image";
      url: string;
      titleKey: string; // <- key i18n
      descKey?: string; // <- key i18n (opsional)
      category: GalleryCategory;
    }
  | {
      id: number;
      type: "video";
      url: string; // mp4/webm
      poster?: string;
      titleKey: string;
      descKey?: string;
      category: GalleryCategory;
    };

// Aset lokal
import petik from "../assets/gallery/production/petik.png";
import olah from "../assets/gallery/production/olah.png";
import robusta1 from "../assets/products/coffee/robusta/Robusta_1.png";
import arabica1 from "../assets/products/coffee/arabica/Arabica_1.jpg";

// NOTE: file video bisa diletakkan di /public/videos/ bila perlu

export const galleryItems: GalleryItem[] = [
  // Production
  {
    id: 1,
    type: "image",
    url: petik,
    titleKey: "gallery.items.production.petik.title",
    descKey: "gallery.items.production.petik.desc",
    category: "production",
  },
  {
    id: 2,
    type: "image",
    url: olah,
    titleKey: "gallery.items.production.olah.title",
    descKey: "gallery.items.production.olah.desc",
    category: "production",
  },

  // Products
  {
    id: 3,
    type: "image",
    url: robusta1,
    titleKey: "gallery.items.products.robusta.title",
    descKey: "gallery.items.products.robusta.desc",
    category: "products",
  },
  {
    id: 4,
    type: "image",
    url: arabica1,
    titleKey: "gallery.items.products.arabica.title",
    descKey: "gallery.items.products.arabica.desc",
    category: "products",
  },

  // Facilities
  {
    id: 6,
    type: "image",
    url: "https://images.pexels.com/photos/1793031/pexels-photo-1793031.jpeg",
    titleKey: "gallery.items.facilities.warehouse.title",
    descKey: "gallery.items.facilities.warehouse.desc",
    category: "facilities",
  },
];
