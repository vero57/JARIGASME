# JARIGASME LAB — JRG-01 Landing Page

Landing page produk untuk **JRG-01 Linear**, mechanical keyboard switch buatan JARIGASME LAB. Dibangun dengan Next.js 16 dan Tailwind CSS 4, mendukung tiga bahasa (EN / ID / JA).

DEMO https://jarigasme.vercel.app/

---

## Daftar Isi

- [Tentang Projek](#tentang-projek)
- [Tech Stack](#tech-stack)
- [Cara Menjalankan](#cara-menjalankan)
- [Struktur Folder](#struktur-folder)
- [Arsitektur Komponen](#arsitektur-komponen)
- [Sistem Bahasa (i18n)](#sistem-bahasa-i18n)
- [Design System](#design-system)
- [Gambar & Aset](#gambar--aset)
- [Konfigurasi Next.js](#konfigurasi-nextjs)
- [Catatan Development](#catatan-development)

---

## Tentang Projek

Website ini adalah **single-page landing** untuk memperkenalkan switch JRG-01 Linear. Pengunjung bisa melihat spesifikasi teknis, foto komponen, filosofi desain, dan link ke retailer — semua dalam satu halaman dengan smooth scroll antar section.

Fitur utama:
- **Multi-bahasa** — English, Indonesia, dan 日本語. Bahasa dipilih otomatis dari browser, tapi user bisa ganti manual via dropdown. Pilihan disimpan di `localStorage`.
- **Force curve chart** — grafik SVG murni (tanpa library charting) yang menggambarkan profil tekanan switch dari 0 mm sampai 4 mm.
- **Responsive** — layout berubah antara mobile dan desktop lewat grid system Tailwind.
- **Scroll spy** — navigasi header otomatis highlight section yang sedang terlihat.

---

## Tech Stack

| Teknologi | Versi | Fungsi |
|---|---|---|
| [Next.js](https://nextjs.org/) | 16.4.0 | Framework React dengan App Router |
| [React](https://react.dev/) | 19.3.0 | UI library |
| [Tailwind CSS](https://tailwindcss.com/) | 4.x | Utility-first CSS framework |
| [React Compiler](https://react.dev/learn/react-compiler) | 1.0.0 | Optimisasi kompilasi otomatis dari React team |

Tidak ada library tambahan untuk charting, animasi, atau state management. Semua dibangun dari fitur bawaan React dan SVG native.

---

## Cara Menjalankan

### Prasyarat

- **Node.js** versi 18 atau lebih baru
- **npm** (sudah bundled bersama Node.js)

### Langkah-langkah

```bash
# 1. Clone repository
git clone <url-repo-kamu>
cd jarigasme

# 2. Install dependencies
npm install

# 3. Jalankan development server
npm run dev
```

Buka `http://localhost:3000` di browser. Halaman akan auto-refresh setiap kali kamu save perubahan.

### Script yang tersedia

| Script | Perintah | Keterangan |
|---|---|---|
| Dev server | `npm run dev` | Jalankan di mode development dengan hot reload |
| Build | `npm run build` | Bikin production bundle |
| Start | `npm start` | Jalankan production build |
| Lint | `npm run lint` | Cek kode pakai ESLint |

---

## Struktur Folder

```
jarigasme/
├── public/
│   └── images/             # Foto produk (switch, komponen, keyboard)
├── src/
│   ├── app/
│   │   ├── layout.js       # Root layout — font loading, metadata
│   │   ├── page.js         # Halaman utama — komposisi semua section
│   │   ├── globals.css     # Design tokens (warna, font) + Tailwind config
│   │   └── favicon.ico
│   ├── assets/
│   │   └── logo.png        # Logo JARIGASME LAB
│   ├── components/
│   │   ├── Header.js           # Navbar fixed dengan scroll spy
│   │   ├── HeroSection.js      # Hero banner + CTA buttons
│   │   ├── OverviewSection.js   # Deskripsi produk + quick specs grid
│   │   ├── SpecsSection.js     # Tabel spesifikasi + force curve chart
│   │   ├── ForceCurveChart.js  # Grafik SVG kurva tekanan switch
│   │   ├── GallerySection.js   # Foto komponen dengan caption
│   │   ├── PhilosophySection.js # 3 parameter desain (POM, spring, housing)
│   │   ├── CTASection.js       # Ajakan beli + tombol retailer
│   │   ├── LanguageSelector.js # Dropdown pilih bahasa
│   │   └── Footer.js          # Footer dengan nav links
│   ├── context/
│   │   └── LanguageContext.js  # React Context untuk state bahasa
│   └── data/
│       ├── translations.js    # Semua teks UI dalam 3 bahasa
│       └── switchData.js      # Data spesifikasi switch (EN saja, legacy)
├── next.config.mjs            # Konfigurasi Next.js
├── package.json
└── eslint.config.mjs
```

---

## Arsitektur Komponen

Halaman utama (`page.js`) merangkai semua section dalam satu file. Tidak ada routing multi-page — ini murni single-page app.

```
page.js
└── LanguageProvider          ← Context provider untuk i18n
    ├── Header                ← Fixed navbar + scroll spy + LanguageSelector
    ├── HeroSection           ← Banner utama, judul, CTA
    ├── OverviewSection       ← Deskripsi + 4 quick specs
    ├── SpecsSection          ← Tabel detail + ForceCurveChart
    ├── GallerySection        ← 2 foto produk + caption
    ├── PhilosophySection     ← 3 kartu parameter desain
    ├── CTASection            ← Tombol "Find Retailer"
    └── Footer                ← Copyright + nav links
```

### Bagaimana data mengalir

1. `LanguageProvider` membungkus seluruh halaman dan menyediakan objek `t` (translations) lewat React Context.
2. Setiap komponen memanggil `useLanguage()` untuk mendapatkan `t`, lalu render teks sesuai bahasa aktif.
3. Tidak ada prop drilling — semua teks ditarik langsung dari context.

### Scroll spy di Header

Header punya logika scroll listener yang melacak posisi scroll dan mencocokkannya dengan posisi tiap section (`overview`, `specifications`, `philosophy`). Nav link yang aktif diberi border bawah dan font tebal. Klik nav link memicu smooth scroll ke section target dengan offset 70px agar tidak tertutup header fixed.

---

## Sistem Bahasa (i18n)

Bahasa dikelola sepenuhnya di sisi klien, tanpa library i18n eksternal.

### File terkait

| File | Peran |
|---|---|
| `src/context/LanguageContext.js` | Provider, hook `useLanguage()`, daftar bahasa |
| `src/data/translations.js` | Semua teks UI |
| `src/components/LanguageSelector.js` | Dropdown untuk ganti bahasa |

### Bahasa yang didukung

| Kode | Label | Status |
|---|---|---|
| `en` | English | ✅ Aktif |
| `id` | Indonesia | ✅ Aktif |
| `ja` | 日本語 | ✅ Aktif |

Ada juga draft `jksl` (Bahasa Jaksel) di `translations.js` yang masih di-comment.

### Cara kerja

1. **Saat pertama load**, komponen cek `localStorage` key `jarigasme_lang`. Kalau ada dan valid, pakai itu.
2. **Kalau belum pernah pilih**, deteksi bahasa browser via `navigator.language`. Prefix `id` → Indonesia, `ja` → Jepang, sisanya → English.
3. **Saat user ganti bahasa** lewat dropdown, locale baru disimpan ke `localStorage` dan seluruh UI langsung re-render.

### Menambah bahasa baru

1. Tambahkan entry baru di objek `translations` di `src/data/translations.js`. Pakai struktur yang sama persis dengan `en` — setiap key harus ada, termasuk array `quickSpecs`, `detailedSpecs`, `philosophy.parameters`, dan `footer.links`.
2. Tambahkan item baru di array `AVAILABLE_LANGUAGES` di `src/context/LanguageContext.js`:
   ```js
   { code: "ko", label: "한국어", short: "KO" }
   ```
3. Tidak perlu ubah komponen mana pun. Dropdown dan context otomatis membaca dari `AVAILABLE_LANGUAGES`.

---

## Design System

Projek ini menggunakan **custom design tokens** yang dideklarasikan di `globals.css` lewat Tailwind `@theme` directive. Palet warna mengikuti prinsip Material Design 3 (surface, on-surface, primary, secondary, outline, dll).

### Warna utama

| Token | Hex | Kegunaan |
|---|---|---|
| `primary` | `#090a08` | Teks heading, elemen utama |
| `secondary` | `#5b6241` | Aksen hijau olive, badge |
| `surface` | `#fbf9f4` | Background utama (warm white) |
| `surface-container-low` | `#f5f3ee` | Background section alternating |
| `on-surface` | `#1b1c19` | Body text |
| `on-surface-variant` | `#454843` | Secondary text, deskripsi |
| `outline` | `#757873` | Label, border, metadata |
| `outline-variant` | `#c5c7c1` | Divider, border tipis |

Warna-warna ini menghasilkan tampilan monokrom hangat dengan aksen hijau zaitun — cocok dengan identitas visual produk (stem POM olive green).

### Font

| Token | Font Family | Kegunaan |
|---|---|---|
| `headline-*`, `display-hero` | Space Grotesk | Judul, heading |
| `body-*`, `subheading`, `label-md` | Hanken Grotesk | Body text, label |
| `label-mono-sm`, `spec-numeral` | Space Grotesk | Badge, spesifikasi, monospace-like |

Font di-load lewat `next/font/google` di `layout.js` dan dipasskan sebagai CSS variable (`--font-hanken-grotesk`, `--font-space-grotesk`).

---

## Gambar & Aset

### Folder `public/images/`

| File | Ukuran | Dipakai di |
|---|---|---|
| `switch.png` | ~1.7 MB | HeroSection — foto switch macro |
| `switch-components.png` | ~1.9 MB | GallerySection — foto komponen exploded |
| `keyboard.png` | ~1.8 MB | GallerySection — foto switch terpasang |

### Folder `src/assets/`

| File | Dipakai di |
|---|---|
| `logo.png` | Header dan Footer — logo JARIGASME LAB |

Logo diimport sebagai static import (`import logoImg from "@/assets/logo.png"`) sehingga dioptimasi oleh Next.js Image component secara otomatis.

> **Catatan ukuran**: Foto produk cukup besar (total ~5.5 MB). Untuk production, pertimbangkan untuk mengkonversi ke WebP atau AVIF dan menurunkan resolusi jika tidak diperlukan.

---

## Konfigurasi Next.js

File `next.config.mjs` mengaktifkan beberapa fitur:

| Opsi | Nilai | Keterangan |
|---|---|---|
| `reactCompiler` | `true` | Aktifkan React Compiler untuk optimisasi render otomatis |
| `cacheComponents` | `true` | Component caching bawaan Next.js 16 |
| `partialPrefetching` | `true` | Prefetch parsial untuk navigasi lebih cepat |
| `turbopack.rules` | CSS → `@tailwindcss/turbopack` | Integrasikan Tailwind lewat Turbopack loader |
| `images.remotePatterns` | `lh3.googleusercontent.com`, `ibb.co.com` | Domain yang diizinkan untuk `next/image` remote |

---

## Catatan Development

### Untuk yang baru pertama kali

- **Semua teks ada di satu file**: `src/data/translations.js`. Kalau mau ganti kata-kata di website, edit di situ. Tidak perlu cari-cari di tiap komponen.
- **Tidak ada backend**. Website ini full static — tidak ada API call, tidak ada database. Semua data hardcoded.
- **Tidak ada routing multi-page**. Cuma ada satu halaman (`page.js`). Navigasi pakai anchor link + smooth scroll.

### Yang perlu diperhatikan

- File `src/data/switchData.js` berisi data switch versi lama (hanya English). File ini **tidak dipakai** oleh komponen mana pun — semua komponen sudah migrasi ke `translations.js`. Bisa dihapus kalau mau cleanup.
- Bahasa Jaksel (`jksl`) sudah ditulis lengkap tapi masih di-comment di `translations.js`. Uncomment bloknya dan tambahkan ke `AVAILABLE_LANGUAGES` kalau mau aktifkan.
- `ForceCurveChart.js` adalah SVG yang dibuat manual — bukan dari library charting. Kalau mau ubah kurva, edit langsung path `d` attribute di file itu.
- Header menyembunyikan nav links di mobile (`hidden md:flex`). Belum ada hamburger menu untuk layar kecil.

### Konvensi yang dipakai

- Semua komponen adalah **Client Component** (`"use client"`) karena butuh hooks (`useState`, `useEffect`, `useContext`).
- Path alias `@/` mengarah ke folder `src/` (dikonfigurasi di `jsconfig.json`).
- Tailwind class menggunakan custom token dari `@theme` — misalnya `bg-surface-container-low`, `text-on-surface-variant`, `font-headline-lg`. Jangan pakai warna Tailwind default (`bg-gray-100`, dll.) — pakai token yang sudah didefinisikan.

---

## Lisensi

© 2026 JARIGASME LAB ARCHITECTURE. All rights reserved.
#
