import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import img1 from '../../assets/produk/ss2.png'
import img2 from '../../assets/produk/ss3.png'
import img3 from '../../assets/produk/ss4.png'
import img4 from '../../assets/produk/ss5.png'
import img5 from '../../assets/produk/ss1.png'
import img6 from '../../assets/produk/cocoabc.png'
import img7 from '../../assets/produk/coco123.png'
import img8 from '../../assets/produk/beteman.png'
import img9 from '../../assets/produk/kodok.png'
import img10 from '../../assets/produk/why.png'
import Produk from '../Produk/Produk'

export const anakData = [
  {
    id: 15,
    img: img1,
    pengarang: 'Hemma',
    judul: 'Dongen Klasik Dunia',
    harga: 'Rp. 125.000',
    qty: 100,
    deskripsi:
      'Ayo, bertualang ke negeri dongeng! Temukan berbagai dongeng klasik terkenal di dunia, seperti Hansel dan Gretel, Gadis Bertudung Merah, Itik Buruk Rupa, dan masih banyak lagi. Dilengkapi ilustrasi yang indah, kisah-kisah penuh keajaiban dalam buku ini dapat dijadikan dongeng pengantar tidur atau menjadi teman baca kamu yang seru.',
  },
  {
    id: 16,
    img: img2,
    pengarang: 'Hemma',
    judul: 'Ensiklopedia Super Seru: Halo, Bumi!',
    harga: 'Rp. 175.000',
    qty: 100,
    deskripsi:
      'Buku Ensiklopedia Super Seru: Halo, Bumi! Karya Hemma, buku ini membahas tentang Ada apa saja di dalam Bumi? Bagaimana musim berganti? Bagaimana siklus air? Mengapa hutan itu penting? Ada banyak sekali pertanyaan tentang Bumi. Pasti kamu luga ingin tahu! Buka lipatannya atau putar kertasnya dan temukan lawabannya di Ensiklopedia Super Seru.',
  },
  {
    id: 17,
    img: img3,
    pengarang: 'Hemma',
    judul: '100 Dongen Hutan Ajaib',
    harga: 'Rp. 75.000',
    qty: 100,
    deskripsi:
      'Membacakan cerita untuk anak merupakan salah satu cara yang efektif untuk dapat membangun koneksi saraf pada otak di masa pertumbuhan. Membacakan cerita dapat menjadi kebiasaan yang baik dan mampu mendukung perkembangan kognitif anak.',
  },
  {
    id: 18,
    img: img4,
    pengarang: 'Dr. Shini Somara & Nadja Sarell',
    judul: 'Seri Profesi STEAM: Ibuku Seorang Saintis',
    harga: 'Rp. 25.000',
    qty: 100,
    deskripsi:
      'Kenalkan dunia sains, pengamatan, dan pemecahan masalah kepada si Kecil lewat cerita berilustrasi indah! Semua hal tampak menarik di mata Ruben. Kenapa daun pohon berganti warna? Kenapa es krim meleleh? Dalam perjalanan ke pantai bersama ibunya, Ruben menemukan cara dunia bekerja. Dia juga belajar tentang para saintis hebat yang membantu kita memahami dunia ini. Ruben tertarik mengamati dan mempertanyakan segala hal. Kamu pun bisa seperti Ruben, mengasah kepekaanmu sebagai saintis!',
  },
  {
    id: 19,
    img: img5,
    pengarang: 'Dr. Shini Somara & Nadja Sarell',
    judul: 'Seri Profesi STEAM: Sepupuku Seorang Ahli Matematika',
    harga: 'Rp. 25.000',
    qty: 100,
    deskripsi:
      'Kenalkan dunia matematika, pemikiran kreatif, dan pemecahan masalah kepada si Kecil lewat cerita berilustrasi indah! Saat pergi berkemah bersama sepupunya, Aliyah menyadari kalau ada angka di mana-mana! Saat menghitung uang di toko, naik kereta api, bahkan saat mengamati bintang di hutan. Ketika Aliyah memecahkan soal matematika sendiri, dia juga belajar tentang ahli-ahli matematika hebat yang membantu kita memahami semesta. Aliyah punya permainan asyik dengan matematika. Kamu pun bisa ikut bermain seperti Aliyah dan melatih diri untuk menjadi ahli matematika juga!',
  },
  {
    id: 20,
    img: img6,
    pengarang: 'Moonbug Entertainment Limited',
    judul: 'CoComelon: Belajar ABC',
    harga: 'Rp. 75.000',
    qty: 100,
    deskripsi:
      'Ayo belajar huruf! Buku mewarnai edukasi ini membantu mengenalkan konsep huruf pada anak. -Alfabet -Mengenal huruf -Mewarnai -Menelusuri huruf Ditemani karakter-karakter Cocomelon, buku ini akan membuat si kecil sibuk! Ayo belajar dan bermain bersama!',
  },
  {
    id: 21,
    img: img7,
    pengarang: 'Moonbug Entertainment Limited',
    judul: 'CoComelon: Belajar 123',
    harga: 'Rp. 75.000',
    qty: 100,
    deskripsi:
      'Ayo belajar angka! Buku mewarnai edukasi ini membantu mengenalkan konsep angka pada anak. -Berhitung -Mengenal angka -Mewarnai -Menelusuri angka Ditemani karakter-karakter Cocomelon, buku ini akan membuat si kecil sibuk! Ayo belajar dan bermain bersama!',
  },
  {
    id: 22,
    img: img8,
    pengarang: 'Rizki Ayu W.P.',
    judul: 'Tentang Anak - Maukah Kamu Berteman Denganku?',
    harga: 'Rp. 70.000',
    qty: 100,
    deskripsi:
      'Di halaman rumah Kakek Sur dan Nenek Sri, ada Bunga Matahari yang tumbuh tinggi dengan mahkota kuning berseri. Bunga Matahari merasa, dialah bunga yang paling cantik dan juga kuat. Suatu hari, Dandelion yang mungil dan tampak rapuh itu bertanya, “Bunga Matahari, maukah kamu berteman denganku?” Wah, kira-kira apa, ya, jawaban Bunga Matahari? Apakah mereka dapat berteman, meski mereka memiliki perbedaan?.',
  },
  {
    id: 23,
    img: img9,
    pengarang: 'Rizki Ayu W.P.',
    judul: 'Tentang Anak - Si Katak yang Tergesa-Gesa',
    harga: 'Rp. 70.000',
    qty: 100,
    deskripsi:
      'Di sebuah hutan, hiduplah Katak yang selalu melompat tergesa-gesa, sampai mengganggu hewan-hewan lainnya. Suatu hari, Burung Hantu si Bijaksana meminta Katak dan tiga hewan lainnya untuk pergi mengelilingi hutan, sungai, dan bukit. Tak disangka, pengalaman ini membuat Katak menyadari sesuatu yang berharga!',
  },
  {
    id: 24,
    img: img10,
    pengarang: 'Elex Media Komputindo',
    judul: 'Why Series: The Sea - Laut',
    harga: 'Rp. 90.000',
    qty: 100,
    deskripsi:
      'Buku Why Series: The Sea – Laut merupakan buku yang termasuk dalam seri Why? Edu Comic Book. Serial WHY merupakan pengetahuan dasar yang dikemas dalam bentuk komik untuk anak-anak sekolah, guru, dan orang tua. Isi buku ini berwarna, Dengan jumlah halaman sebanyak 159 halaman, dan dipandu oleh karakter-karakter yang lucu sehingga menyenangkan memudahkan anak-anak mempelajarinya. Buku ini cocok dibaca oleh anak-anak dengan pengawasan orang tua. Segera dapatkan buku ini dan perluas pengetahuan Anda tentang lingkungan di sekitar Anda.',
  },
]

const Anak = () => {
  return (
    <div>
      <div className="bg-secondary">
        <Navbar />
      </div>
      <Produk data={anakData} title="Anak-anak" />
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Anak
