// src/i18n/translations.ts
export type Language = "id" | "en";

/**
 * STRUKTUR NESTED (per bahasa):
 * - common: label umum (e.g., all, close)
 * - nav: label navigasi & CTA
 * - home: seluruh teks halaman Home
 * - footer: teks footer
 * - products:
 *     - categories: label kategori produk
 *     - robusta/arabica: konten produk (name/desc/fullDesc/prodImage*)
 * - gallery:
 *     - title/subtitle/empty*
 *     - category: label kategori galeri
 *     - items: judul & deskripsi item galeri
 */
export const translations = {
  id: {
    common: {
      all: "Semua",
      close: "Tutup",
    },

    nav: {
      home: "Beranda",
      products: "Produk",
      howToOrder: "Cara Pesan",
      gallery: "Galeri",
      contact: "Kontak",
      terms: "Syarat & Ketentuan",
      orderNow: "Pesan Sekarang",
      allProducts: "Semua Produk",
      categories: {
        robusta: "Robusta",
        arabica: "Arabika",
      },
    },

    home: {
      hero: {
        title: "CV Batanghari",
        subtitle: "Sembilan Makmur",
        viewProducts: "Lihat Produk",
        contactUs: "Hubungi Kami",
        slide1: { title: "Kopi Premium Indonesia" },
        slide2: { title: "Proses Roasting Berkualitas" },
        slide3: { title: "Rempah-Rempah Pilihan" },
        prev: "Slide sebelumnya",
        next: "Slide berikutnya",
      },
      about: {
        title: "Dari Pagar Alam untuk Nusantara",
        description:
          "Dari ladang kopi dan rempah di dataran tinggi Pagar Alam, kami tumbuh bersama para petani sejak 2019. Dengan kualitas unggul dan komitmen kuat, kami hadir untuk membawa rasa Indonesia ke dunia.",
      },
      whyUs: {
        title: "Mengapa Memilih Kami?",
        quality: {
          title: "Kualitas Premium",
          desc: "Seleksi ketat dari petani terpilih dengan standar kualitas internasional",
        },
        natural: {
          title: "100% Natural",
          desc: "Tanpa bahan pengawet atau pewarna buatan, murni dari alam",
        },
        trusted: {
          title: "Dipercaya Ribuan",
          desc: "Dipercaya lebih dari 5000+ pelanggan",
        },
        guarantee: {
          title: "Garansi Kualitas",
          desc: "Jaminan 100% uang kembali jika tidak puas",
        },
      },
      products: {
        title: "Produk Unggulan",
        viewAll: "Lihat Semua Produk",
        detail: "Detail Produk",
      },
      gallery: {
        title: "Galeri Produk Kami",
        viewGallery: "Lihat Galeri Lengkap",
        empty: "Belum ada konten galeri untuk ditampilkan.",
        openCategory: "Buka galeri kategori {category}",
      },
      team: {
        title: "Tim Kami",
        owner: {
          name: "MUHAMMAD RYAN GUMAY",
          role: "FOUNDER & CEO",
          description:
            "Pendiri yang membentuk arah strategis perusahaan sejak awal berdiri.",
        },
        manager: {
          name: "YOSEP P GUMAY",
          role: "BUSINESS DEVELOPMENT OFFICER",
          description: "Mengembangkan jaringan bisnis dan kemitraan strategis.",
        },
        expert: {
          name: "LISA AYU HIDAYATI",
          role: "DOMISTIC SALES",
          description:
            "Mengelola penjualan domestik dan menjaga hubungan klien.",
        },
      },
    },

    footer: {
      companyDesc:
        "Dari Pagar Alam, kami hadir bersama para petani untuk menghadirkan kopi dan rempah terbaik Nusantara. Mengusung kualitas unggul dan rasa otentik Indonesia sejak 2019.",
      quickLinks: "Tautan Cepat",
      contactUs: "Kontak Kami",
      rights: "© {year} - CV BatangHari Sembilan Makmur",
    },

    products: {
      categories: {
        all: "Semua Produk",
        robusta: "Robusta",
        arabica: "Arabika",
      },
      robusta: {
        name: "Biji Kopi Robusta Premium Pagar Alam",
        desc: "Robusta pilihan dari dataran tinggi Pagar Alam, berkarakter tegas dengan aroma khas pegunungan.",
        fullDesc:
          "Dari ladang kopi di dataran tinggi Pagar Alam, Sumatra Selatan, Biji Kopi Robusta Premium kami lahir dari kerja sama erat dengan para petani lokal sejak 2019. Ditanam di ketinggian 700–1200 mdpl dengan udara sejuk dan tanah vulkanik yang subur, setiap biji dipetik pada puncak kematangannya untuk menjaga cita rasa terbaik. Diproses secara natural dan honey process, kopi ini menghadirkan body yang penuh, aroma khas pegunungan, serta sentuhan manis alami yang bertahan di setiap tegukan. Pilihan tepat bagi pecinta kopi yang menginginkan rasa otentik Nusantara dengan kualitas ekspor.",
        prodImage1: "Sortir Manual oleh Petani Lokal",
        prodImage2: "Pemisahan Bahan Dasar",
      },
      arabica: {
        name: "Biji Kopi Arabika Premium Pagar Alam",
        desc: "Arabika pilihan dari dataran tinggi Pagar Alam, beraroma floral lembut dengan cita rasa fruity yang elegan.",
        fullDesc:
          "Dari lereng sejuk Pagar Alam, Sumatra Selatan, Kopi Arabika Premium kami ditanam di ketinggian 1.200–1.600 mdpl. Udara pegunungan yang bersih dan tanah vulkanik yang subur menjadikan biji arabika ini memiliki karakter rasa kompleks: keasaman halus seperti buah beri, aroma floral yang menenangkan, dan body yang lembut. Diproses dengan metode washed untuk menghasilkan rasa bersih dan konsisten, kopi ini sangat cocok dinikmati dengan seduhan manual maupun espresso, memberikan pengalaman rasa yang elegan bagi penikmat kopi sejati.",
        prodImage1: "Pemetikan Selektif oleh Petani Lokal",
        prodImage2: "Pengolahan Basah (Washed Process)",
      },
    },

    gallery: {
      title: "Galeri Kami",
      subtitle: "Dokumentasi produksi, produk, tim, dan fasilitas kami.",
      emptyTitle: "Belum ada konten untuk kategori ini",
      emptyDesc: "Kami sedang menambahkan lebih banyak foto. Nantikan!",
      category: {
        production: "Produksi",
        products: "Produk",
        team: "Tim & Aktivitas",
        facilities: "Fasilitas",
      },
      items: {
        production: {
          petik: {
            title: "Pemetikan Selektif",
            desc: "Petik matang merah untuk kualitas rasa optimal",
          },
          olah: {
            title: "Pengolahan Basah",
            desc: "Proses washed untuk profil rasa bersih & konsisten",
          },
        },
        products: {
          robusta: {
            title: "Biji Kopi Robusta Premium",
            desc: "Body penuh dengan karakter tegas khas pegunungan",
          },
          arabica: {
            title: "Biji Kopi Arabika Premium",
            desc: "Aroma floral lembut & rasa fruity elegan",
          },
        },
        team: {
          workshop: {
            title: "Workshop Tim",
            desc: "Penguatan SOP kualitas & cupping rutin",
          },
        },
        facilities: {
          warehouse: {
            title: "Gudang Terkontrol",
            desc: "Suhu & kelembaban stabil untuk menjaga mutu",
          },
        },
      },
    },
    productsPage: {
      title: "Produk Kopi Kami",
      subtitle: "Pilih Robusta atau Arabika — semuanya premium dari Indonesia.",
      searchPlaceholder: "Cari produk...",
      detailCta: "Detail Produk",
      notFoundTitle: "Produk tidak ditemukan",
      notFoundHint: "Coba ubah kata kunci atau filter",
      ctaTitle: "Tidak Menemukan Yang Anda Cari?",
      ctaSubtitle: "Hubungi kami untuk permintaan khusus atau jumlah besar.",
      ctaButton: "Hubungi Kami",
    },
    productDetail: {
      notFound: "Produk tidak ditemukan",
      backToList: "Kembali ke daftar produk",
      fullDescription: "Deskripsi Lengkap",
      specifications: "Spesifikasi",
      production: "Proses Produksi",
      otherProducts: "Produk Lainnya",
      viewDetail: "Lihat Detail",
      prevImage: "Gambar sebelumnya",
      nextImage: "Gambar berikutnya",
    },
    // di bawah nav, home, products, tambahkan:
    howToOrder: {
      hero: {
        title: "Cara Pesan",
        subtitle:
          "Proses pemesanan yang mudah dan transparan. Ikuti 3 langkah sederhana untuk mendapatkan kopi premium kami.",
      },
      stepsTitle: "3 Langkah Mudah Pemesanan",
      steps: [
        {
          title: "Pilih Produk",
          description:
            'Jelajahi koleksi kopi premium kami. Klik "Detail Produk" untuk informasi lengkap.',
          details: [
            "Lihat katalog produk di halaman Products",
            "Baca spesifikasi dan deskripsi produk",
            "Lihat galeri foto produk",
            "Cek ketersediaan stok",
          ],
        },
        {
          title: "Konsultasi & Pemesanan",
          description:
            "Kontak melalui WhatsApp, form online, atau telepon untuk konsultasi dan pemesanan.",
          details: [
            "WhatsApp: +62811294646",
            "Form pemesanan di halaman detail produk",
            "Email: cvbatangharisembilanmakmur@gmail.com",
            "Telepon: +62811294646",
          ],
        },
        {
          title: "Konfirmasi & Pembayaran",
          description:
            "Tim kami akan mengonfirmasi pesanan dan memandu proses pembayaran yang mudah.",
          details: [
            "Konfirmasi jenis dan jumlah produk",
            "Informasi metode pembayaran",
            "Konfirmasi alamat pengiriman",
            "Estimasi waktu proses dan kirim",
          ],
        },
      ],
      productGalleryTitle: "Galeri Produk Kami",
      seeAllProducts: "Lihat Semua Produk",
      faqTitle: "Pertanyaan Umum",
      faq: [
        {
          q: "Berapa minimal order?",
          a: "Tidak ada minimal order. Anda bisa memesan mulai dari 1 pack untuk mencoba kualitas kami.",
        },
        {
          q: "Bagaimana cara pembayaran?",
          a: "Kami menerima transfer bank, e-wallet (GoPay, OVO, DANA), dan COD area Palembang.",
        },
        {
          q: "Bagaimana jika produk tidak sesuai?",
          a: "Garansi 100% uang kembali jika produk tidak sesuai atau rusak saat diterima.",
        },
        {
          q: "Berapa lama pengiriman?",
          a: "Estimasi 2–5 hari kerja tergantung lokasi. Area Palembang bisa same-day delivery.",
        },
      ],
    },
    contact: {
      hero: {
        title: "Hubungi Kami",
        subtitle:
          "Kami siap membantu Anda terkait kopi dan rempah. Tim layanan kami responsif dan berpengalaman.",
      },

      form: {
        title: "Kirim Pesan",
        name: "Nama Lengkap",
        namePh: "Masukkan nama lengkap",
        email: "Email",
        emailPh: "email@contoh.com",
        phone: "Nomor Telepon",
        phonePh: "08123456789",
        subject: "Subjek",
        subjectPh: "Pilih subjek",
        subjectOptions: [
          "Pertanyaan Umum",
          "Informasi Produk",
          "Pemesanan",
          "Keluhan",
          "Kerjasama Reseller",
          "Kerjasama B2B",
          "Lainnya",
        ],
        reseller: "Saya tertarik menjadi reseller",
        message: "Pesan",
        messagePh:
          "Tuliskan pesan, pertanyaan, atau permintaan Anda di sini...",
        submit: "Kirim Pesan",
        successTitle: "Pesan Terkirim!",
        successText:
          "Terima kasih atas pesan Anda. Tim kami akan menghubungi dalam 1–2 jam kerja.",
      },

      info: {
        title: "Informasi Kontak",
        addressTitle: "Alamat",
        phoneTitle: "Telepon",
        emailTitle: "Email",
        whatsappTitle: "WhatsApp",
        address:
          "Jl R Soeprapto no 13. Pagar Alam, Tanjung Payang Sumatera Selatan - Indonesia",
        phone: "+62 811-294-646",
        email: "cvbatangharisembilanmakmur@gmail.com",
        whatsapp: "+62 811-294-646",
      },

      hoursTitle: "Jam Operasional",
      hours: [
        { day: "Senin - Jumat", time: "08:00 - 17:00 WIB" },
        { day: "Sabtu", time: "08:00 - 15:00 WIB" },
        { day: "Minggu", time: "Tutup" },
      ],

      quick: {
        title: "Respon Cepat",
        body: "Untuk respon tercepat, hubungi kami via WhatsApp. Tim kami siaga untuk pertanyaan urgent.",
        button: "Chat WhatsApp",
      },

      map: {
        title: "Lokasi Kami",
        visitTitle: "Kunjungi Toko Kami",
        visitBody:
          "Kami mengundang Anda berkunjung. Lihat proses, coba sampel, dan konsultasi langsung dengan tim kami.",
        hoursInline: "Senin - Sabtu: 08:00 - 17:00 WIB",
        openInMaps: "Buka di Google Maps",
        iframeTitle: "Lokasi CV Batanghari Sembilan Makmur",
      },

      faq: {
        title: "Pertanyaan yang Sering Diajukan",
        items: [
          {
            q: "Berapa lama respon email?",
            a: "Kami merespon 2–4 jam pada jam kerja dan maksimal 24 jam di luar jam kerja.",
          },
          {
            q: "Apakah bisa konsultasi gratis?",
            a: "Ya, kami menyediakan konsultasi gratis untuk pemilihan produk dan kebutuhan bisnis.",
          },
          {
            q: "Apakah melayani pesanan B2B?",
            a: "Tentu. Kami melayani restoran, kafe, dan distributor.",
          },
          {
            q: "Bagaimana cara menjadi reseller?",
            a: "Hubungi via WhatsApp atau centang opsi reseller pada form untuk info lengkap.",
          },
          {
            q: "Apakah bisa custom packaging?",
            a: "Bisa. Untuk jumlah tertentu kami sediakan kemasan custom ber-branding Anda.",
          },
          {
            q: "Bisakah visit factory?",
            a: "Bisa dengan appointment terlebih dahulu agar proses produksi tetap terjaga.",
          },
        ],
      },
    },
    terms: {
      hero: {
        subtitle:
          "Syarat dan ketentuan penggunaan layanan kami. Mohon dibaca dengan saksama sebelum melakukan pemesanan.",
      },
      sections: {
        general: {
          title: "Ketentuan Umum",
          body: [
            "Dengan menggunakan layanan kami, Anda menyetujui untuk terikat dengan syarat dan ketentuan yang berlaku. Ketentuan ini dapat berubah sewaktu-waktu tanpa pemberitahuan sebelumnya.",
            "Kami berhak menolak pesanan yang tidak sesuai kebijakan perusahaan atau terindikasi mencurigakan tanpa memberikan alasan terperinci.",
          ],
        },
        products: {
          title: "Produk dan Layanan",
          body: [
            "Semua produk yang ditawarkan adalah kopi dan/atau rempah Indonesia berkualitas premium. Kami menjamin keaslian dan kualitas sesuai deskripsi.",
            "Gambar produk adalah representasi visual dan dapat sedikit berbeda karena pencahayaan serta pengaturan layar.",
            "Ketersediaan produk dapat berubah. Jika stok tidak tersedia, kami akan menghubungi Anda untuk penggantian atau pembatalan.",
          ],
        },
        ordering: {
          title: "Pemesanan dan Pembayaran",
          body: [
            "Pemesanan bisa melalui WhatsApp, formulir online, atau telepon. Pesanan dianggap sah setelah kami konfirmasi.",
            "Pembayaran via transfer bank, e-wallet, atau COD untuk area tertentu. Bukti pembayaran wajib dikirim untuk konfirmasi.",
            "Harga belum termasuk ongkos kirim; biaya dihitung berdasarkan lokasi dan berat kiriman.",
          ],
        },
        shipping: {
          title: "Pengiriman",
          body: [
            "Pengiriman via ekspedisi tepercaya (JNE, JNT, SiCepat) atau kurir internal untuk area tertentu. Estimasi 2–7 hari kerja tergantung lokasi.",
            "Risiko kerusakan/kehilangan selama pengiriman menjadi tanggung jawab ekspedisi; kami membantu proses klaim bila diperlukan.",
            "Pastikan alamat pengiriman lengkap dan benar. Keterlambatan akibat alamat tidak lengkap di luar tanggung jawab kami.",
          ],
        },
        returns: {
          title: "Kebijakan Pengembalian",
          body: [
            "Pengembalian diterima bila produk rusak, cacat produksi, atau tidak sesuai pesanan. Klaim maksimal 24 jam setelah diterima.",
            "Produk harus dalam kondisi asli dan belum dibuka (kecuali untuk pengecekan kualitas). Biaya kirim retur ditanggung pembeli kecuali kesalahan kami.",
            "Refund diproses 3–7 hari kerja setelah barang kami terima dan verifikasi selesai.",
          ],
        },
        privacy: {
          title: "Privasi dan Data",
          body: [
            "Kami menghormati privasi pelanggan dan melindungi data pribadi yang Anda berikan.",
            "Data digunakan untuk pemrosesan pesanan dan komunikasi, dan tidak dibagikan ke pihak ketiga tanpa persetujuan, kecuali untuk kebutuhan pengiriman/pembayaran.",
            "Dengan memberikan data, Anda menyetujui penggunaannya sesuai kebijakan privasi kami.",
          ],
        },
        liability: {
          title: "Batasan Tanggung Jawab",
          body: [
            "Kami tidak bertanggung jawab atas kerugian tidak langsung, kehilangan keuntungan, atau kerusakan akibat penggunaan produk.",
            "Tanggung jawab kami terbatas pada nilai produk yang dibeli.",
            "Baca komposisi dan konsultasikan dengan ahli jika memiliki kondisi kesehatan tertentu.",
          ],
        },
        contact: {
          title: "Hubungi Kami",
          intro:
            "Jika Anda memiliki pertanyaan mengenai syarat dan ketentuan ini, silakan hubungi kami melalui:",
          labels: {
            whatsapp: "WhatsApp",
            email: "Email",
            address: "Alamat",
            hours: "Jam Operasional",
          },
          values: {
            whatsapp: "+62-811-294-646",
            email: "cvbatangharisembilanmakmur@gmail.com",
            address:
              "Jl R Soeprapto no 13. Pagar Alam, Tanjung Payang, Sumatera Selatan – Indonesia",
            hours: "Senin–Sabtu, 08:00–17:00 WIB",
          },
        },
      },
    },
  },

  en: {
    common: {
      all: "All",
      close: "Close",
    },

    nav: {
      home: "Home",
      products: "Products",
      howToOrder: "How to Order",
      gallery: "Gallery",
      contact: "Contact",
      terms: "Terms & Conditions",
      orderNow: "Order Now",
      allProducts: "All Products",
      categories: {
        robusta: "Robusta",
        arabica: "Arabica",
      },
    },

    home: {
      hero: {
        title: "CV Batanghari",
        subtitle: "Sembilan Makmur",
        viewProducts: "View Products",
        contactUs: "Contact Us",
        slide1: { title: "Indonesian Premium Coffee" },
        slide2: { title: "Quality Roasting Process" },
        slide3: { title: "Selected Spices" },
        prev: "Previous slide",
        next: "Next slide",
      },
      about: {
        title: "From Pagar Alam to Nusantara",
        description:
          "From the highlands of Pagar Alam, we’ve grown with farmers since 2019. With high quality and strong commitment, we bring Indonesia’s flavors to the world.",
      },
      whyUs: {
        title: "Why Choose Us?",
        quality: {
          title: "Premium Quality",
          desc: "Strict selection from trusted farmers with international standards",
        },
        natural: {
          title: "100% Natural",
          desc: "No artificial preservatives or colorings",
        },
        trusted: {
          title: "Trusted by Thousands",
          desc: "Trusted by 5000+ customers",
        },
        guarantee: {
          title: "Quality Guarantee",
          desc: "100% money-back guarantee if not satisfied",
        },
      },
      products: {
        title: "Featured Products",
        viewAll: "View All Products",
        detail: "Product Details",
      },
      gallery: {
        title: "Our Product Gallery",
        viewGallery: "View Full Gallery",
        empty: "No gallery content to display yet.",
        openCategory: "Open gallery category {category}",
      },
      team: {
        title: "Our Team",
        owner: {
          name: "MUHAMMAD RYAN GUMAY",
          role: "FOUNDER & CEO",
          description:
            "Founder and leader shaping the company’s strategic direction.",
        },
        manager: {
          name: "YOSEP P GUMAY",
          role: "BUSINESS DEVELOPMENT OFFICER",
          description: "Develops business network and strategic partnerships.",
        },
        expert: {
          name: "LISA AYU HIDAYATI",
          role: "DOMISTIC SALES",
          description: "Handles domestic sales and client relationships.",
        },
      },
    },

    footer: {
      companyDesc:
        "From Pagar Alam, we work with farmers to bring the best Indonesian coffee and spices. Delivering top quality and authentic Indonesian taste since 2019.",
      quickLinks: "Quick Links",
      contactUs: "Contact Us",
      rights: "© {year} - CV BatangHari Sembilan Makmur",
    },

    products: {
      categories: {
        all: "All Products",
        robusta: "Robusta",
        arabica: "Arabica",
      },
      robusta: {
        name: "Premium Robusta Coffee Beans from Pagar Alam",
        desc: "Selected robusta from the highlands of Pagar Alam, bold character with distinctive mountain aroma.",
        fullDesc:
          "From the cool highlands of Pagar Alam, South Sumatra, our Premium Robusta is grown in volcanic soil at 700–1200 masl and hand-picked at peak ripeness. Natural and honey processes deliver a full body, signature mountain aroma, and a pleasant natural sweetness that lingers in every sip. A perfect choice for those seeking authentic Indonesian flavors with export-grade quality.",
        prodImage1: "Manual Sorting by Local Farmers",
        prodImage2: "Basic Material Separation",
      },
      arabica: {
        name: "Premium Arabica Coffee Beans from Pagar Alam",
        desc: "Selected arabica from the highlands of Pagar Alam with soft floral aroma and elegant fruity notes.",
        fullDesc:
          "Grown on the cool slopes of Pagar Alam at 1,200–1,600 masl, our Premium Arabica offers a refined cup profile: gentle berry-like acidity, calming floral aroma, and a smooth body. Washed processing yields a clean, consistent taste—great for manual brews and espresso alike.",
        prodImage1: "Selective Picking by Local Farmers",
        prodImage2: "Wet Processing (Washed)",
      },
    },

    gallery: {
      title: "Our Gallery",
      subtitle: "A look at our production, products, team, and facilities.",
      emptyTitle: "No content for this category yet",
      emptyDesc: "We’re adding more photos. Stay tuned!",
      category: {
        production: "Production",
        products: "Products",
        team: "Team & Activities",
        facilities: "Facilities",
      },
      items: {
        production: {
          petik: {
            title: "Selective Picking",
            desc: "Red-cherry picking for optimal flavor quality",
          },
          olah: {
            title: "Wet Processing",
            desc: "Washed process for clean and consistent cup profiles",
          },
        },
        products: {
          robusta: {
            title: "Premium Robusta Coffee Beans",
            desc: "Full body with a bold mountain character",
          },
          arabica: {
            title: "Premium Arabica Coffee Beans",
            desc: "Soft floral aroma with elegant fruity notes",
          },
        },
        team: {
          workshop: {
            title: "Team Workshop",
            desc: "Quality SOP reinforcement & regular cupping",
          },
        },
        facilities: {
          warehouse: {
            title: "Controlled Warehouse",
            desc: "Stable temperature and humidity to preserve quality",
          },
        },
      },
    },
    productsPage: {
      title: "Our Coffee Products",
      subtitle: "Choose Robusta or Arabica — all premium from Indonesia.",
      searchPlaceholder: "Search products...",
      detailCta: "View Details",
      notFoundTitle: "No products found",
      notFoundHint: "Try changing the keywords or filters",
      ctaTitle: "Can't Find What You Need?",
      ctaSubtitle: "Contact us for special requests or bulk orders.",
      ctaButton: "Contact Us",
    },
    productDetail: {
      notFound: "Product not found",
      backToList: "Back to product list",
      fullDescription: "Full Description",
      specifications: "Specifications",
      production: "Production Process",
      otherProducts: "Other Products",
      viewDetail: "View Detail",
      prevImage: "Previous image",
      nextImage: "Next image",
    },
    howToOrder: {
      hero: {
        title: "How to Order",
        subtitle:
          "A simple and transparent ordering process. Follow 3 easy steps to get our premium coffee.",
      },
      stepsTitle: "3 Easy Steps to Order",
      steps: [
        {
          title: "Choose a Product",
          description:
            'Browse our premium coffee collection. Click "Product Details" for complete information.',
          details: [
            "View the product catalog on the Products page",
            "Read product specifications and descriptions",
            "See the product photo gallery",
            "Check stock availability",
          ],
        },
        {
          title: "Consultation & Ordering",
          description:
            "Contact us via WhatsApp, online form, or phone for consultation and ordering.",
          details: [
            "WhatsApp: +62811294646",
            "Order form on the product detail page",
            "Email: cvbatangharisembilanmakmur@gmail.com",
            "Phone: +6262811294646",
          ],
        },
        {
          title: "Confirmation & Payment",
          description:
            "Our team will confirm your order and guide you through the easy payment process.",
          details: [
            "Confirm the product type and quantity",
            "Information on payment methods",
            "Confirm shipping address",
            "Estimated processing and delivery time",
          ],
        },
      ],
      productGalleryTitle: "Our Product Gallery",
      seeAllProducts: "View All Products",
      faqTitle: "Frequently Asked Questions",
      faq: [
        {
          q: "What is the minimum order?",
          a: "There is no minimum order. You can start with just 1 pack to try our quality.",
        },
        {
          q: "How can I make a payment?",
          a: "We accept bank transfers, e-wallets (GoPay, OVO, DANA), and COD for Palembang area.",
        },
        {
          q: "What if the product is not as expected?",
          a: "100% money-back guarantee if the product is not as described or arrives damaged.",
        },
        {
          q: "How long is the delivery time?",
          a: "Estimated 2–5 working days depending on location. Same-day delivery available for Palembang area.",
        },
      ],
    },
    contact: {
      hero: {
        title: "Contact Us",
        subtitle:
          "We’re here to help with anything about our coffee and spices. Our support team is responsive and experienced.",
      },

      form: {
        title: "Send a Message",
        name: "Full Name",
        namePh: "Enter your full name",
        email: "Email",
        emailPh: "email@example.com",
        phone: "Phone Number",
        phonePh: "e.g. +62 8123456789",
        subject: "Subject",
        subjectPh: "Choose a subject",
        subjectOptions: [
          "General Question",
          "Product Information",
          "Order",
          "Complaint",
          "Reseller Partnership",
          "B2B Partnership",
          "Other",
        ],
        reseller: "I’m interested in becoming a reseller",
        message: "Message",
        messagePh: "Write your message, questions, or requests here…",
        submit: "Send Message",
        successTitle: "Message Sent!",
        successText:
          "Thank you for reaching out. Our team will get back to you within 1–2 business hours.",
      },

      info: {
        title: "Contact Information",
        addressTitle: "Address",
        phoneTitle: "Phone",
        emailTitle: "Email",
        whatsappTitle: "WhatsApp",
        address:
          "Jl R Soeprapto no 13. Pagar Alam, Tanjung Payang, South Sumatra - Indonesia",
        phone: "+62 811-294-646",
        email: "cvbatangharisembilanmakmur@gmail.com",
        whatsapp: "+62 811-294-646",
      },

      hoursTitle: "Operating Hours",
      hours: [
        { day: "Monday - Friday", time: "08:00 - 17:00 WIB" },
        { day: "Saturday", time: "08:00 - 15:00 WIB" },
        { day: "Sunday", time: "Closed" },
      ],

      quick: {
        title: "Quick Response",
        body: "For the fastest response, contact us via WhatsApp. Our team is ready for urgent questions.",
        button: "Chat on WhatsApp",
      },

      map: {
        title: "Our Location",
        visitTitle: "Visit Our Store",
        visitBody:
          "We welcome you to visit. See our process, try samples, and consult directly with our team.",
        hoursInline: "Mon - Sat: 08:00 - 17:00 WIB",
        openInMaps: "Open in Google Maps",
        iframeTitle: "Location of CV Batanghari Sembilan Makmur",
      },

      faq: {
        title: "Frequently Asked Questions",
        items: [
          {
            q: "How fast do you respond to emails?",
            a: "We reply within 2–4 hours during business hours and within 24 hours otherwise.",
          },
          {
            q: "Is consultation free?",
            a: "Yes, we offer free consultation for product selection and business needs.",
          },
          {
            q: "Do you support B2B orders?",
            a: "Absolutely. We serve restaurants, cafés, and distributors.",
          },
          {
            q: "How to become a reseller?",
            a: "Contact us via WhatsApp or tick the reseller option in the form for full details.",
          },
          {
            q: "Do you offer custom packaging?",
            a: "Yes. For sufficient volumes, we can provide custom branded packaging.",
          },
          {
            q: "Can we visit the factory?",
            a: "Yes, by appointment so we can maintain production quality.",
          },
        ],
      },
    },
    terms: {
      hero: {
        subtitle:
          "Terms and conditions of our service. Please read carefully before placing an order.",
      },
      sections: {
        general: {
          title: "General Terms",
          body: [
            "By using our services, you agree to be bound by these terms and conditions. They may change at any time without prior notice.",
            "We reserve the right to reject orders that violate company policies or appear suspicious without detailed justification.",
          ],
        },
        products: {
          title: "Products and Services",
          body: [
            "All products offered are premium Indonesian coffee and/or spices. We guarantee authenticity and quality as described.",
            "Product images are visual representations and may differ slightly due to lighting and display settings.",
            "Availability may change. If an item is unavailable, we will contact you for a replacement or cancellation.",
          ],
        },
        ordering: {
          title: "Ordering and Payment",
          body: [
            "Orders can be placed via WhatsApp, online form, or phone. An order becomes valid after our confirmation.",
            "Payments via bank transfer, e-wallet, or COD for certain areas. Proof of payment is required for confirmation.",
            "Prices exclude shipping; costs depend on destination and shipment weight.",
          ],
        },
        shipping: {
          title: "Shipping",
          body: [
            "We ship via trusted couriers (JNE, JNT, SiCepat) or internal courier for certain areas. ETA 2–7 business days depending on location.",
            "Risk of damage/loss during transit lies with the courier; we will assist with claims if needed.",
            "Please ensure the shipping address is complete and correct. Delays due to incomplete addresses are beyond our responsibility.",
          ],
        },
        returns: {
          title: "Return Policy",
          body: [
            "Returns are accepted for damaged items, manufacturing defects, or wrong items. Claims within 24 hours of receipt.",
            "Items must be in original condition and unopened (except quality check). Return shipping is borne by the buyer unless it’s our fault.",
            "Refunds are processed within 3–7 business days after we receive and verify the returned item.",
          ],
        },
        privacy: {
          title: "Privacy and Data",
          body: [
            "We respect customer privacy and protect the personal data you provide.",
            "Data is used only for order processing and communication, and won’t be shared with third parties without consent, except for shipping/payment purposes.",
            "By providing data, you consent to its use according to our privacy policy.",
          ],
        },
        liability: {
          title: "Limitation of Liability",
          body: [
            "We are not liable for indirect losses, lost profits, or damages arising from product use.",
            "Our liability is limited to the value of the purchased product.",
            "Please read the composition and consult a health professional if you have specific conditions.",
          ],
        },
        contact: {
          title: "Contact Us",
          intro:
            "If you have questions about these terms and conditions, please contact us via:",
          labels: {
            whatsapp: "WhatsApp",
            email: "Email",
            address: "Address",
            hours: "Operating Hours",
          },
          values: {
            whatsapp: "+62-811-294-646",
            email: "cvbatangharisembilanmakmur@gmail.com",
            address:
              "Jl R Soeprapto no 13. Pagar Alam, Tanjung Payang, South Sumatra – Indonesia",
            hours: "Mon–Sat, 08:00–17:00 WIB",
          },
        },
      },
    },
  },
} as const;

export type Translations = (typeof translations)["id"];
