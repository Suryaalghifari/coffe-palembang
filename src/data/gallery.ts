import { products } from "./products";
import olah from "../assets/gallery/production/olah.png";
import gudang from "../assets/gallery/facilities/gudang.png";
import gudang2 from "../assets/gallery/facilities/gudang2.png";
export type GalleryCategory = "production" | "products" | "team" | "facilities";
export type MediaType = "image" | "video";

export type GalleryItem = {
  id: number;
  type: MediaType;
  url: string; // untuk video: URL video / thumbnail video
  title: string;
  description: string;
  category: GalleryCategory;
};

export const GALLERY_CATEGORY_META: Record<GalleryCategory, { label: string }> =
  {
    production: { label: "Produksi" },
    products: { label: "Produk" },
    team: { label: "Tim & Aktivitas" },
    facilities: { label: "Fasilitas" },
  };

const dummyBase: GalleryItem[] = [
  {
    id: 101,
    type: "image",
    url: olah,
    title: "Sortir Manual",
    description: "Sortasi biji kopi untuk memastikan kualitas konsisten.",
    category: "production",
  },
  {
    id: 102,
    type: "image",
    url: "https://images.pexels.com/photos/4226249/pexels-photo-4226249.jpeg",
    title: "Pengemasan Vakum",
    description: "Vacuum seal untuk menjaga kesegaran produk.",
    category: "production",
  },
  {
    id: 103,
    type: "video",
    // Bisa pakai thumbnail YouTube atau thumbnail video sendiri
    url: "https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg",
    title: "Video Proses Roasting",
    description: "Dokumentasi proses roasting kopi secara detail.",
    category: "production",
  },
  {
    id: 201,
    type: "image",
    url: gudang,
    title: "Gudang & Penyimpanan",
    description: "Kontrol suhu & kelembaban menjaga kualitas bahan baku.",
    category: "facilities",
  },
  {
    id: 202,
    type: "image",
    url: gudang2,
    title: "Gudang & Penyimpanan",
    description: "Kontrol suhu & kelembaban menjaga kualitas bahan baku.",
    category: "facilities",
  },
  {
    id: 301,
    type: "image",
    url: "https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg",
    title: "Workshop Internal",
    description: "Tim mengikuti pelatihan standar kualitas internasional.",
    category: "team",
  },
];

// Generate produk dari data products.ts
const productGalleryFromProducts: GalleryItem[] = products.map((p) => ({
  id: 1000 + p.id,
  type: "image",
  url: p.images?.[0] ?? "https://via.placeholder.com/800x600?text=No+Image",
  title: p.name,
  description: p.description,
  category: "products",
}));

export const galleryItems: GalleryItem[] = [
  ...dummyBase,
  ...productGalleryFromProducts,
];
