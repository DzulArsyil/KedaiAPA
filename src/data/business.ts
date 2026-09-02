/* ════════════════════════════════════════════════════════════════════
   PUSAT KONTEN — KEDAI APA
   Semua konten situs hidup di file ini. Pemilik kedai cukup mengganti
   nilai di sini tanpa menyentuh komponen UI.

   Aturan data:
   ✅ TERVERIFIKASI  = berasal dari informasi Google Maps / pemilik.
   ⬜ [PLACEHOLDER]  = belum terverifikasi — wajib diganti sebelum
                       situs dipublikasikan. Jangan disajikan sbg fakta.
   🟡 sample: true   = contoh tampilan (menu/harga) agar layout bisa
                       dinilai; bukan menu asli.
   ════════════════════════════════════════════════════════════════════ */

export interface BusinessInfo {
  name: string;
  shortName: string;
  tagline: string;
  category: string;
  description: string;
}

export const BUSINESS: BusinessInfo = {
  name: "Kedai APA",
  shortName: "APA",
  tagline: "Makan enak, pesan gampang.",
  category: "Kedai Makanan · Catering · Pesan Antar", // ✅ terverifikasi (kategori usaha)
  description:
    "Kedai makanan & catering di Jl. Kertabumi, Karawang Kulon. Pilih menu, tekan tombol pesan, lalu lanjutkan pesanan lewat WhatsApp.",
};

/* ── Kontak & lokasi ─────────────────────────────────────────────── */
export const CONTACT = {
  // ⬜ PLACEHOLDER — isi dengan nomor WhatsApp aktif (format internasional tanpa +, spasi, atau strip)
  //    contoh: "6281234567890"
  whatsappNumber: "[WHATSAPP NUMBER]",
  // ⬜ PLACEHOLDER
  email: "[EMAIL]",
  phoneDisplay: "[WHATSAPP NUMBER]",
};

export const LOCATION = {
  street: "Jl. Kertabumi, Ruko No. 89/5", // ✅
  landmark: "Seberang Richeese Kertabumi", // ✅
  area: "Karawang Kulon, Kec. Karawang Barat", // ✅
  city: "Kabupaten Karawang", // ✅
  province: "Jawa Barat", // ✅
  postalCode: "41311", // ✅
  country: "Indonesia", // ✅
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("Kedai APA Jl. Kertabumi Karawang Kulon Karawang Barat Jawa Barat"),
  mapsQuery: "Kedai APA Jl. Kertabumi, Karawang Kulon, Karawang Barat",
};

/* ── Jam operasional ─────────────────────────────────────────────── */
export const OPENING_HOURS = {
  verified: false, // ⬜ belum dipublikasikan — jangan tulis jam apa pun sebagai fakta
  display: "[JAM OPERASIONAL]",
  note: "Jam buka belum dipublikasikan di sini. Paling cepat? Tanya langsung via WhatsApp — biasanya dibalas cepat.",
};

/* ── Layanan (sesuai kategori usaha yang terverifikasi) ──────────── */
export const SERVICES = [
  "Kedai makanan", // ✅
  "Catering & nasi kotak", // ✅
  "Pesan antar", // ✅
] as const;

/* ── Media sosial ────────────────────────────────────────────────── */
export const SOCIALS = [
  { label: "Instagram", handle: "[INSTAGRAM ACCOUNT]", url: null }, // ⬜
  { label: "Facebook", handle: "[FACEBOOK PAGE]", url: null }, // ⬜
] as const;

/* ── Kategori menu ───────────────────────────────────────────────── */
export interface Category {
  id: string;
  label: string;
}

export const CATEGORIES: Category[] = [
  { id: "semua", label: "Semua" },
  { id: "makanan", label: "Makanan" },
  { id: "minuman", label: "Minuman" },
  { id: "camilan", label: "Camilan" },
  { id: "paket", label: "Paket" },
];

/* ── Produk / menu ───────────────────────────────────────────────── */
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Exclude<string, "semua">;
  image: string;
  imageAlt: string;
  badge?: string;
  spicy?: 0 | 1 | 2 | 3;
  sample: boolean; // 🟡 true = contoh tampilan, bukan menu asli
}

export const PRODUCTS: Product[] = [
  {
    id: "geprek",
    name: "Nasi Ayam Geprek",
    description: "Ayam goreng renyah digeprek bareng sambal bawang pedas gurih, nasi hangat, dan lalapan segar.",
    price: 18000,
    category: "makanan",
    image: "https://image.qwenlm.ai/generated-images/da84583a-6b9e-4086-a295-0cee2192623e/_result.png",
    imageAlt: "Nasi ayam geprek dengan sambal merah dan lalapan di piring hijau",
    badge: "Pedasnya jujur",
    spicy: 3,
    sample: true,
  },
  {
    id: "mie-goreng",
    name: "Mie Goreng Spesial",
    description: "Mie goreng bumbu kedai dengan telur, potongan ayam, sawi, dan taburan bawang goreng yang royal.",
    price: 16000,
    category: "makanan",
    image: "https://image.qwenlm.ai/generated-images/7533719d-fdb6-478e-bde4-c0d5d3ac1bc4/_result.png",
    imageAlt: "Mie goreng spesial dengan telur dan sayuran",
    spicy: 1,
    sample: true,
  },
  {
    id: "nasi-kotak",
    name: "Nasi Kotak Kedai",
    description: "Nasi putih, lauk utama, lauk pendamping, sayur, dan sambal — dikemas rapi, siap untuk acaramu.",
    price: 25000,
    category: "paket",
    image: "https://image.qwenlm.ai/generated-images/7c7fdbf6-26fd-4819-a600-7f2542c41700/_result.png",
    imageAlt: "Tumpukan nasi kotak dengan satu kotak terbuka berisi nasi dan lauk",
    badge: "Bisa custom",
    spicy: 0,
    sample: true,
  },
  {
    id: "gorengan",
    name: "Gorengan Campur (isi 5)",
    description: "Campuran gorengan hangat — bakwan, tempe mendoan, tahu isi — ditemani cabai rawit atau sambal.",
    price: 10000,
    category: "camilan",
    image: "https://image.qwenlm.ai/generated-images/c9995b35-b705-4f9f-aa6b-b345b20e527e/_result.png",
    imageAlt: "Aneka gorengan di atas tampah bambu beralas daun pisang",
    spicy: 1,
    sample: true,
  },
  {
    id: "es-teh-serai",
    name: "Es Teh Serai",
    description: "Teh seduhan hangat yang didinginkan dengan serai memar — segar, wangi, dan nggak bikin eneg.",
    price: 6000,
    category: "minuman",
    image: "https://image.qwenlm.ai/generated-images/876a3af8-a86a-43a6-aa11-14096a0d88a6/_result.png",
    imageAlt: "Segelas es teh serai dingin dengan batang serai",
    spicy: 0,
    sample: true,
  },
  {
    id: "paket-komplit",
    name: "Paket Komplit Kenyang",
    description: "Nasi, lauk utama, sambal, lalapan, plus es teh serai. Sekali pesan, langsung kenyang.",
    price: 24000,
    category: "paket",
    image: "https://image.qwenlm.ai/generated-images/1946ac99-d672-4132-96a4-47ccc86237d4/_result.png",
    imageAlt: "Paket komplit nasi dengan lauk dan sambal di piring hijau",
    badge: "Hemat",
    spicy: 2,
    sample: true,
  },
];

/* ── Catering ────────────────────────────────────────────────────── */
export const CATERING = {
  headline: "Nasi kotak & prasmanan buat acaramu.",
  intro:
    "Selain layanan kedai, Kedai APA menerima pesanan catering untuk wilayah Karawang dan sekitarnya. Ceritakan acaramu lewat WhatsApp — tim kami bantu susun menu dan hitungannya.",
  services: [
    { name: "Nasi Kotak", detail: "Kemasan rapi, lauk bisa disesuaikan, cocok untuk pembagian konsumsi." },
    { name: "Prasmanan / Buffet", detail: "Hidangan tertata untuk acara yang tamunya bebas mengambil sendiri." },
    { name: "Snack Box", detail: "Kudapan manis & gurih untuk rapat, pengajian, atau acara sekolah." },
  ],
  // Contoh occasion — bukan klaim bahwa semua jenis acara sudah pernah dilayani.
  occasions: ["Acara keluarga", "Meeting kantor", "Gathering & arisan", "Sekolah & kampus", "Komunitas", "Syukuran & pengajian"],
  steps: [
    { title: "Ceritakan acaramu", detail: "Kirim tanggal, jumlah porsi, dan jenis acara via WhatsApp." },
    { title: "Susun menu & hitungan", detail: "Tim Kedai APA mengusulkan menu, porsi, dan estimasi biaya." },
    { title: "Makanan siap & diantar", detail: "Pesanan dimasak fresh dan siap di lokasi sesuai kesepakatan." },
  ],
  image: "https://image.qwenlm.ai/generated-images/7c7fdbf6-26fd-4819-a600-7f2542c41700/_result.png",
  imageAlt: "Tumpukan nasi kotak catering Kedai APA",
};

/* ── Tentang ─────────────────────────────────────────────────────── */
export const ABOUT = {
  // Copy berdasar identitas lokasi yang terverifikasi — tanpa klaim tahun berdiri,
  // jumlah pelanggan, atau penghargaan yang tidak bisa diverifikasi.
  quote: "Makan enak itu hak semua orang — dan memesannya nggak boleh ribet.",
  paragraphs: [
    "Kedai APA adalah kedai makanan lokal yang berdiri di Jl. Kertabumi, Karawang Kulon — persis di seberang Richeese Kertabumi, jadi gampang sekali dicari. Dari dapur kecil inilah kami memasak untuk tetangga, pekerja, mahasiswa, dan keluarga di sekitar Karawang.",
    "Prinsip kami sederhana: bahan segar dimasak harian, bumbu berani, porsi bikin kenyang, dan harga masuk akal. Mau makan di kedai, dibungkus, diantar, atau sekalian catering untuk acara — semua jalurnya sama mudahnya: satu pesan WhatsApp.",
  ],
  principles: [
    { title: "Dimasak harian", detail: "Bukan stok lama — masakan keluar dari wajan saat dipesan." },
    { title: "Rasa berani, porsi jujur", detail: "Bumbu medok khas masakan rumahan, porsi yang bikin kenyang beneran." },
    { title: "Pesan semudah kirim chat", detail: "Nggak pakai aplikasi ribet. Chat WhatsApp, selesai." },
  ],
  image: "https://image.qwenlm.ai/generated-images/c5674974-5098-460f-9eff-05c175697577/_result.png",
  imageAlt: "Suasana kedai dengan cahaya hangat di sore hari",
};

/* ── Galeri ──────────────────────────────────────────────────────── */
export interface GalleryItem {
  src: string | null; // null = slot placeholder untuk foto asli
  caption: string;
  tag: string;
  alt: string;
  placeholder?: string; // label untuk slot yang belum ada fotonya
}

export const GALLERY: GalleryItem[] = [
  {
    src: "https://image.qwenlm.ai/generated-images/da84583a-6b9e-4086-a295-0cee2192623e/_result.png",
    caption: "Geprek sambal bawang, baru turun dari cobek.",
    tag: "Makanan",
    alt: "Ayam geprek dengan sambal",
  },
  {
    src: "https://image.qwenlm.ai/generated-images/c5674974-5098-460f-9eff-05c175697577/_result.png",
    caption: "Sudut kedai saat lampu mulai menyala.",
    tag: "Suasana",
    alt: "Tampak depan kedai di sore hari",
  },
  {
    src: "https://image.qwenlm.ai/generated-images/c9995b35-b705-4f9f-aa6b-b345b20e527e/_result.png",
    caption: "Gorengan hangat, teman ngobrol sore.",
    tag: "Camilan",
    alt: "Aneka gorengan di tampah",
  },
  {
    src: null,
    caption: "Dokumentasi catering & nasi kotak.",
    tag: "Catering",
    alt: "Foto catering segera hadir",
    placeholder: "[FOTO CATERING]",
  },
  {
    src: null,
    caption: "Dapur & proses persiapan harian.",
    tag: "Dapur",
    alt: "Foto dapur segera hadir",
    placeholder: "[FOTO DAPUR]",
  },
  {
    src: null,
    caption: "Momen pelanggan di kedai.",
    tag: "Pelanggan",
    alt: "Foto pelanggan segera hadir",
    placeholder: "[FOTO PELANGGAN]",
  },
];

/* ── Testimoni ───────────────────────────────────────────────────── */
export const TESTIMONIALS: { name: string; text: string; rating: number }[] = [];
// ⬜ Belum ada ulasan terverifikasi — UI menampilkan placeholder state,
//    bukan testimoni karangan.

export const TESTIMONIAL_PLACEHOLDER = {
  title: "Testimoni pelanggan akan tampil di sini.",
  detail:
    "Kami tidak mengarang pujian. Setelah kamu mampir atau pesan, ceritamu yang asli bisa jadi yang pertama menghiasi bagian ini.",
  cta: "Pesan dulu, cerita kemudian",
};

/* ── Template pesan WhatsApp ─────────────────────────────────────── */
export const WA_TEMPLATES = {
  order: (productName: string, qty: number, note?: string) =>
    `Halo Kedai APA! Saya ingin memesan ${qty}× ${productName}${note ? ` (catatan: ${note})` : ""}. Mohon info ketersediaan dan cara pemesanannya. Terima kasih!`,
  general: () =>
    "Halo Kedai APA! Saya ingin memesan. Mohon info menu yang tersedia dan cara pemesanannya. Terima kasih!",
  catering: () =>
    "Halo Kedai APA! Saya ingin konsultasi catering untuk acara saya. Mohon info paket, menu, dan estimasi biayanya. Terima kasih!",
  hours: () => "Halo Kedai APA! Mohon info jam buka hari ini. Terima kasih!",
  directions: () =>
    "Halo Kedai APA! Mohon info rute/patokan lokasi kedai yang paling mudah. Terima kasih!",
};
