// src/data/products.ts
export type Bean = "robusta" | "arabica";
export type Category = "coffee";

export type Product = {
  id: number;
  name: string;
  description: string;
  fullDescription: string;
  images: string[];
  category: Category;
  bean: Bean;
  specifications: Record<string, string>;
  productionImages: { url: string; title: string }[];
};

export const products: Product[] = [
  {
    id: 1,
    name: "Biji Kopi Robusta Premium Pagar Alam",
    description:
      "Robusta pilihan dari dataran tinggi Pagar Alam, berkarakter tegas dengan aroma khas pegunungan.",
    fullDescription:
      "Dari ladang kopi di dataran tinggi Pagar Alam, Sumatra Selatan, Biji Kopi Robusta Premium kami lahir dari kerja sama erat dengan para petani lokal sejak 2019. Ditanam di ketinggian 700–1200 mdpl dengan udara sejuk dan tanah vulkanik yang subur, setiap biji dipetik pada puncak kematangannya untuk menjaga cita rasa terbaik. Diproses secara natural dan honey process, kopi ini menghadirkan body yang penuh, aroma khas pegunungan, serta sentuhan manis alami yang bertahan di setiap tegukan. Pilihan tepat bagi pecinta kopi yang menginginkan rasa otentik Nusantara dengan kualitas ekspor.",
    images: [
      "https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg",
      "https://images.pexels.com/photos/1793037/pexels-photo-1793037.jpeg",
      "https://images.pexels.com/photos/4226249/pexels-photo-4226249.jpeg",
      "https://images.pexels.com/photos/1793031/pexels-photo-1793031.jpeg",
    ],
    category: "coffee",
    bean: "robusta",
    specifications: {
      Asal: "Pagar Alam, Sumatra Selatan, Indonesia",
      Varietas: "Robusta Pagar Alam",
      Ketinggian: "700-1200 mdpl",
      Proses: "Natural & Honey Process",
      "Tingkat Roast": "Medium Roast",
      Kemasan: "250g, 500g, 1kg",
      "Kadar Air": "Maks. 12%",
      Defect: "Maks. 5%",
    },
    productionImages: [
      {
        url: "https://images.pexels.com/photos/4109743/pexels-photo-4109743.jpeg",
        title: "Sortir Manual oleh Petani Lokal",
      },
      {
        url: "https://images.pexels.com/photos/4198027/pexels-photo-4198027.jpeg",
        title: "Pengeringan Alami di Bawah Sinar Matahari",
      },
    ],
  },
  {
    id: 2,
    name: "Biji Kopi Arabika Premium Pagar Alam",
    description:
      "Arabika pilihan dari dataran tinggi Pagar Alam, beraroma floral lembut dengan cita rasa fruity yang elegan.",
    fullDescription:
      "Dari lereng sejuk Pagar Alam, Sumatra Selatan, Kopi Arabika Premium kami ditanam di ketinggian 1.200–1.600 mdpl. Udara pegunungan yang bersih dan tanah vulkanik yang subur menjadikan biji arabika ini memiliki karakter rasa kompleks: keasaman halus seperti buah beri, aroma floral yang menenangkan, dan body yang lembut. Diproses dengan metode washed untuk menghasilkan rasa bersih dan konsisten, kopi ini sangat cocok dinikmati dengan seduhan manual maupun espresso, memberikan pengalaman rasa yang elegan bagi penikmat kopi sejati.",
    images: [
      "https://images.pexels.com/photos/1793037/pexels-photo-1793037.jpeg",
      "https://images.pexels.com/photos/1793031/pexels-photo-1793031.jpeg",
    ],
    category: "coffee",
    bean: "arabica",
    specifications: {
      Asal: "Pagar Alam, Sumatra Selatan, Indonesia",
      Varietas: "Arabica Pagar Alam",
      Ketinggian: "1200-1600 mdpl",
      Proses: "Washed",
      "Tingkat Roast": "Medium Roast",
      Kemasan: "250g, 500g, 1kg",
      "Kadar Air": "Maks. 12%",
      Defect: "Maks. 3%",
    },
    productionImages: [
      {
        url: "https://images.pexels.com/photos/4198027/pexels-photo-4198027.jpeg",
        title: "Pemetikan Selektif oleh Petani Lokal",
      },
      {
        url: "https://images.pexels.com/photos/4109743/pexels-photo-4109743.jpeg",
        title: "Pengolahan Basah (Washed Process)",
      },
    ],
  },
];

// NOTE: produk non-coffee DISABLE dulu. Kalau nanti butuh, pindah ke file lain.
