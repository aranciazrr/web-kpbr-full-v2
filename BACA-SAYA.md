# Website Pondok Pesantren Kyai Parak Bambu Runcing (layout seragam)

Prototipe 17 halaman dengan gaya tema lama (`index16`/`index16old`), sama seperti folder `website-kyai-parak`, tetapi tulisannya diringkas. Buka `index.html` di browser (perlu internet untuk Tailwind, font, dan ikon).

## Isi folder
| File | Halaman (sitemap draft) |
|---|---|
| index.html | P01 Beranda |
| tentang-pondok.html | P02 Tentang Pondok |
| sejarah.html | P03 Sejarah dan Muassis |
| pengasuh-pengurus.html | P04 Pengasuh dan Pengurus |
| program.html | P05 Program |
| madrasah-manbaul-falah.html | P06 Madrasah Manba'ul Falah |
| tahfidzul-quran.html | P07 Tahfidzul Qur'an |
| pkpps.html | P08 PKPPS |
| lgbr.html | P09 LGBR |
| kehidupan-santri.html | P10 Kehidupan Santri |
| fasilitas.html | P11 Fasilitas |
| panduan-wali.html | P12 Panduan Wali Santri |
| pendaftaran.html | P13 Pendaftaran |
| kabar-karya.html | P14 Kabar dan Karya |
| galeri.html | P15 Galeri |
| agenda.html | P16 Agenda |
| kebijakan-privasi.html | Tautan footer (perlu ditinjau pondok) |
| assets/ | `tailwind-config.js` (warna & font), `style.css` (bingkai kitab, mihrab, pola), `main.js` (menu, tab, popup) |

Versi ini = folder `website-kyai-parak-ringkas` (tema lama, tulisan ringkas) dengan wadah setiap section diseragamkan:
- Judul section selalu rata tengah (label kecil, judul, satu kalimat pengantar).
- Satu jenis kartu: bingkai kitab bersiku, berlatar terang. Tidak ada lagi kartu mihrab, kotak kalender, medali, kotak di dalam kotak, kotak kutipan, atau foto bento.
- Jadwal, biaya, lini masa, data, dan daftar nama memakai satu pola baris bergaris.
- Grid hanya 2 atau 3 kolom, plus satu susunan teks dan foto bermihrab.
- Latar: dua latar terang bergantian; latar gelap hanya untuk hero, satu blok penting per halaman, dan footer. Angka singkat di bilah mustard dipindah ke bagian bawah hero.

Fitur dari versi sebelumnya yang tetap ada:
- Gaya, warna, ornamen, dan layout sama persis.
- Tulisan diringkas (sekitar 12% lebih sedikit kata): kalimat lebih pendek, pengantar dan basa-basi dibuang. Semua angka, jam, harga, nomor, dan nama tetap ada (dicek otomatis per halaman).
- Navbar tanpa menu Beranda (klik logo untuk kembali) dan tanpa tombol Hubungi.
- Tombol WhatsApp melayang di kanan bawah semua halaman; saat diklik muncul pilihan Pondok Putra (0882-2737-9413) dan Pondok Putri (0815-7364-7273). Tombol "Tanya lewat WhatsApp" di blok ajakan sowan membuka pilihan yang sama.

Header, footer, dan tombol WhatsApp sama di semua halaman. Kalau mengubahnya, ubah di setiap file.

## Foto
Semua halaman memakai SATU file foto: `assets/img/foto-utama.jpg` (188 KB, foto ilustrasi kitab dari Unsplash, bukan foto pondok).
Dipakai sebagai latar hero setiap halaman, foto utama berbingkai mihrab, dan gambar kartu (dengan potongan berbeda-beda supaya tidak terlihat kembar).
Untuk mengganti: timpa file itu dengan foto asli pondok (nama file sama, lebar sekitar 1600px, landscape) dan semua halaman ikut berubah.
Placeholder potret muassis dan galeri sengaja tetap "Foto menyusul" karena harus foto asli.

## Belum final
Cari komentar `PERLU DIKONFIRMASI` dan `GANTI` di file HTML. Ringkasnya:
- Logo resmi SVG belum dipasang (masih monogram KP).
- Semua foto masih ilustrasi atau kotak "Foto menyusul"; foto muassis dan pengasuh belum ada.
- Tiga artikel di Kabar dan Karya masih contoh isi.
- Biaya: nominal per komponen di dokumen berjumlah Rp 895.000, bukan Rp 970.000; syahriyah pondok tertulis Rp 270.000 dan Rp 245.000. Halaman memakai total Rp 970.000 dan syahriyah Rp 245.000.
- Jadwal harian: versi Form dan versi Tata Tertib berbeda (Subuh, Ashar, PKPPS). Halaman memakai versi Form.
- Nama program kesetaraan: PKPPS (Form) atau SPM/Muadalah (Tata Tertib).
- Kode pos 56254 atau 56264; tautan YouTube, TikTok, dan Instagram @santri.kpbr.
- Daftar kitab madrasah, tanggal haul Simbah Kyai Parak dan Romo Yai Chaidar, jam pengajian Rabu Kliwon.
- Nama dan jabatan pengasuh serta pengurus.
