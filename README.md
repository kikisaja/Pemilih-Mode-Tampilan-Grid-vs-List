# 🔲📄 Grid/List View Switcher

Fitur pemilih tata letak (*layout switcher*) interaktif berbasis web dengan desain bergaya *Colorful Neobrutalism*. Pengguna dapat dengan mudah mengubah pratinjau galeri produk antara tampilan kartu (*Grid View*) atau tampilan daftar horizontal (*List View*).

Proyek ini dibuat untuk membantu pemula memahami konsep dasar **Dynamic Layouts**, **CSS Grid & Flexbox**, serta manipulasi kelas DOM menggunakan JavaScript.

---

## 🎯 Konsep Pembelajaran RPL / Pemrograman Web

1. **Manipulasi Class DOM (`classList.add` / `classList.remove`):**
   Memahami cara mengubah kelas CSS suatu elemen kontainer untuk memicu tata letak (*layout*) yang berbeda secara dinamis.
2. **CSS Grid vs Flexbox:**
   - **CSS Grid (`grid-template-columns`):** Digunakan untuk membuat susunan kartu multi-kolom yang responsif.
   - **CSS Flexbox (`flex-direction: column`):** Digunakan untuk menyusun daftar secara berurutan dari atas ke bawah.
3. **Penerapan State UI pada Tombol Active:**
   Memberikan umpan balik visual (*active state*) pada tombol switcher yang sedang terpilih agar interaksi lebih intuitif.

---

## 📂 Struktur Folder Proyek

```text
├── index.html       # Struktur HTML galeri produk dan tombol switcher
├── style.css        # Tata letak Grid & List View dengan gaya Neobrutalism
└── script.js        # Logika penggantian kelas CSS saat tombol diklik
