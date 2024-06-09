import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Produk from '../Produk/Produk'
import img1 from '../../assets/produk/laut.jpeg'
import img2 from '../../assets/produk/dazai.jpeg'
import img3 from '../../assets/produk/seni.jpeg'
import img4 from '../../assets/produk/filsof.png'
import img5 from '../../assets/produk/terus.png'
import img6 from '../../assets/produk/gadis.png'
import img7 from '../../assets/produk/matahari.jpeg'
import img8 from '../../assets/produk/ss2.png'
import img9 from '../../assets/produk/ss3.png'
import img10 from '../../assets/produk/ss4.png'
import img11 from '../../assets/produk/ss5.png'
import img12 from '../../assets/produk/ss1.png'
import img13 from '../../assets/produk/cocoabc.png'
import img14 from '../../assets/produk/coco123.png'
import img15 from '../../assets/produk/beteman.png'
import img16 from '../../assets/produk/kodok.png'
import img17 from '../../assets/produk/why.png'
import img18 from '../../assets/produk/haikyu.png'
import img19 from '../../assets/produk/jjk.png'
import img20 from '../../assets/produk/opm.png'
import img21 from '../../assets/produk/miiko.png'
import img22 from '../../assets/produk/kny.png'
import img23 from '../../assets/produk/tokrev.png'

export const lokalData = [
  {
    id: 2,
    img: img1,
    pengarang: 'Leila Salikha Chudori',
    judul: 'Laut Bercerita',
    harga: 'Rp. 85.000',
    deskripsi:
      'Laut Bercerita, novel terbaru Leila S. Chudori, bertutur tentang kisah keluarga yang kehilangan, sekumpulan sahabat yang merasakan kekosongan di dada, sekelompok orang yang gemar menyiksa dan lancar berkhianat, sejumlah keluarga yang mencari kejelasan makam anaknya, dan tentang cinta yang tak akan luntur.',
  },
  {
    id: 3,
    img: img2,
    pengarang: 'Osamu Dazai',
    judul: 'No Longer Human',
    harga: 'Rp. 60.000',
    deskripsi:
      'No Longer Human diceritakan dalam bentuk buku catatan yang ditinggalkan oleh Ōba Yozo ( 大 庭 葉 蔵 ) , seorang lelaki bermasalah yang tidak mampu mengungkapkan jati dirinya kepada orang lain, dan yang, sebaliknya, mempertahankan fasad kegembiraan kosong.',
  },
  {
    id: 8,
    img: img3,
    pengarang: 'Mark Manson',
    judul: 'Sebuah Seni untuk Bersikap Bodo Amat',
    harga: 'Rp. 60.000',
  },
  {
    id: 12,
    img: img4,
    pengarang: 'Henry Manampiring',
    judul: 'Filosofi Teras',
    harga: 'Rp. 75.000',
  },
  {
    id: 13,
    img: img5,
    pengarang: 'Tere Liye',
    judul: 'Teruslah Bodoh Jangan Pintar',
    harga: 'Rp. 90.000',
  },
  {
    id: 14,
    img: img6,
    pengarang: 'Ratih Kumala',
    judul: 'Gadis Kretek',
    harga: 'Rp. 85.000',
  },
  {
    id: 7,
    img: img7,
    pengarang: 'Tere Liye',
    judul: 'Matahari',
    harga: 'Rp. 90.000',
  },
  {
    id: 15,
    img: img8,
    pengarang: 'Hemma',
    judul: 'Dongen Klasik Dunia',
    harga: 'Rp. 125.000',
    qty: 100,
    deskripsi:
      'Ayo, bertualang ke negeri dongeng! Temukan berbagai dongeng klasik terkenal di dunia, seperti Hansel dan Gretel, Gadis Bertudung Merah, Itik Buruk Rupa, dan masih banyak lagi. Dilengkapi ilustrasi yang indah, kisah-kisah penuh keajaiban dalam buku ini dapat dijadikan dongeng pengantar tidur atau menjadi teman baca kamu yang seru.',
  },
  {
    id: 16,
    img: img9,
    pengarang: 'Hemma',
    judul: 'Ensiklopedia Super Seru: Halo, Bumi!',
    harga: 'Rp. 175.000',
    qty: 100,
    deskripsi:
      'Buku Ensiklopedia Super Seru: Halo, Bumi! Karya Hemma, buku ini membahas tentang Ada apa saja di dalam Bumi? Bagaimana musim berganti? Bagaimana siklus air? Mengapa hutan itu penting? Ada banyak sekali pertanyaan tentang Bumi. Pasti kamu luga ingin tahu! Buka lipatannya atau putar kertasnya dan temukan lawabannya di Ensiklopedia Super Seru.',
  },
  {
    id: 17,
    img: img10,
    pengarang: 'Hemma',
    judul: '100 Dongen Hutan Ajaib',
    harga: 'Rp. 75.000',
    qty: 100,
    deskripsi:
      'Membacakan cerita untuk anak merupakan salah satu cara yang efektif untuk dapat membangun koneksi saraf pada otak di masa pertumbuhan. Membacakan cerita dapat menjadi kebiasaan yang baik dan mampu mendukung perkembangan kognitif anak.',
  },
  {
    id: 18,
    img: img11,
    pengarang: 'Dr. Shini Somara & Nadja Sarell',
    judul: 'Seri Profesi STEAM: Ibuku Seorang Saintis',
    harga: 'Rp. 25.000',
    qty: 100,
    deskripsi:
      'Kenalkan dunia sains, pengamatan, dan pemecahan masalah kepada si Kecil lewat cerita berilustrasi indah! Semua hal tampak menarik di mata Ruben. Kenapa daun pohon berganti warna? Kenapa es krim meleleh? Dalam perjalanan ke pantai bersama ibunya, Ruben menemukan cara dunia bekerja. Dia juga belajar tentang para saintis hebat yang membantu kita memahami dunia ini. Ruben tertarik mengamati dan mempertanyakan segala hal. Kamu pun bisa seperti Ruben, mengasah kepekaanmu sebagai saintis!',
  },
  {
    id: 19,
    img: img12,
    pengarang: 'Dr. Shini Somara & Nadja Sarell',
    judul: 'Seri Profesi STEAM: Sepupuku Seorang Ahli Matematika',
    harga: 'Rp. 25.000',
    qty: 100,
    deskripsi:
      'Kenalkan dunia matematika, pemikiran kreatif, dan pemecahan masalah kepada si Kecil lewat cerita berilustrasi indah! Saat pergi berkemah bersama sepupunya, Aliyah menyadari kalau ada angka di mana-mana! Saat menghitung uang di toko, naik kereta api, bahkan saat mengamati bintang di hutan. Ketika Aliyah memecahkan soal matematika sendiri, dia juga belajar tentang ahli-ahli matematika hebat yang membantu kita memahami semesta. Aliyah punya permainan asyik dengan matematika. Kamu pun bisa ikut bermain seperti Aliyah dan melatih diri untuk menjadi ahli matematika juga!',
  },
  {
    id: 20,
    img: img13,
    pengarang: 'Moonbug Entertainment Limited',
    judul: 'CoComelon: Belajar ABC',
    harga: 'Rp. 75.000',
    qty: 100,
    deskripsi:
      'Ayo belajar huruf! Buku mewarnai edukasi ini membantu mengenalkan konsep huruf pada anak. -Alfabet -Mengenal huruf -Mewarnai -Menelusuri huruf Ditemani karakter-karakter Cocomelon, buku ini akan membuat si kecil sibuk! Ayo belajar dan bermain bersama!',
  },
  {
    id: 21,
    img: img14,
    pengarang: 'Moonbug Entertainment Limited',
    judul: 'CoComelon: Belajar 123',
    harga: 'Rp. 75.000',
    qty: 100,
    deskripsi:
      'Ayo belajar angka! Buku mewarnai edukasi ini membantu mengenalkan konsep angka pada anak. -Berhitung -Mengenal angka -Mewarnai -Menelusuri angka Ditemani karakter-karakter Cocomelon, buku ini akan membuat si kecil sibuk! Ayo belajar dan bermain bersama!',
  },
  {
    id: 22,
    img: img15,
    pengarang: 'Rizki Ayu W.P.',
    judul: 'Tentang Anak - Maukah Kamu Berteman Denganku?',
    harga: 'Rp. 70.000',
    qty: 100,
    deskripsi:
      'Di halaman rumah Kakek Sur dan Nenek Sri, ada Bunga Matahari yang tumbuh tinggi dengan mahkota kuning berseri. Bunga Matahari merasa, dialah bunga yang paling cantik dan juga kuat. Suatu hari, Dandelion yang mungil dan tampak rapuh itu bertanya, “Bunga Matahari, maukah kamu berteman denganku?” Wah, kira-kira apa, ya, jawaban Bunga Matahari? Apakah mereka dapat berteman, meski mereka memiliki perbedaan?.',
  },
  {
    id: 23,
    img: img16,
    pengarang: 'Rizki Ayu W.P.',
    judul: 'Tentang Anak - Si Katak yang Tergesa-Gesa',
    harga: 'Rp. 70.000',
    qty: 100,
    deskripsi:
      'Di sebuah hutan, hiduplah Katak yang selalu melompat tergesa-gesa, sampai mengganggu hewan-hewan lainnya. Suatu hari, Burung Hantu si Bijaksana meminta Katak dan tiga hewan lainnya untuk pergi mengelilingi hutan, sungai, dan bukit. Tak disangka, pengalaman ini membuat Katak menyadari sesuatu yang berharga!',
  },
  {
    id: 24,
    img: img17,
    pengarang: 'Elex Media Komputindo',
    judul: 'Why Series: The Sea - Laut',
    harga: 'Rp. 90.000',
    qty: 100,
    deskripsi:
      'Buku Why Series: The Sea – Laut merupakan buku yang termasuk dalam seri Why? Edu Comic Book. Serial WHY merupakan pengetahuan dasar yang dikemas dalam bentuk komik untuk anak-anak sekolah, guru, dan orang tua. Isi buku ini berwarna, Dengan jumlah halaman sebanyak 159 halaman, dan dipandu oleh karakter-karakter yang lucu sehingga menyenangkan memudahkan anak-anak mempelajarinya. Buku ini cocok dibaca oleh anak-anak dengan pengawasan orang tua. Segera dapatkan buku ini dan perluas pengetahuan Anda tentang lingkungan di sekitar Anda.',
  },
  {
    id: 29,
    img: img18,
    pengarang: 'Haruichi Furudate',
    judul: 'Haikyu!! Fly High! Valleyball! 31',
    harga: 'Rp. 30.000',
    qty: 100,
    deskripsi:
      'Pada pertandingan voli yang pertama sekaligus terakhir di masa SMP, Shoyo Hinata yang terpesona pada olahraga voli dikalahkan secara telak oleh Kageyama, pemain jenius yang dijuluki “Raja Lapangan” karena kemampuan bermainnya yang tidak bisa diragukan. Hinata bersumpah untuk membalas dendam, dan memutuskan untuk melanjutkan sekolah ke SMA Karasuno. Akan tetapi, Hinata malah bertemu sosok tak terduga di klub voli SMA Karasuno.',
  },
  {
    id: 30,
    img: img19,
    pengarang: 'Gege Akutami',
    judul: 'Jujutsu Kaisen 11',
    harga: 'Rp. 35.000',
    qty: 100,
    deskripsi:
      'Peron bawah tanah Stasiun Shibuya dipenuhi warga sipil dan manusia yang telah dimodifikasi. Dalam situasi mengerikan tanpa jalan keluar, Gojo masih memegang kendali atas para Jurei. Akan tetapi, kuasa untuk menyegel Gojo ada di tangan musuh...!! Sementara itu, ketika Itadori bergegas menuju peron bawah tanah, muncul sekutu yang tak terduga!?',
  },
  {
    id: 31,
    img: img20,
    pengarang: 'One & Yusuke Murata',
    judul: 'One Punch Man vol. ',
    harga: 'Rp. 25.000',
    qty: 100,
    deskripsi:
      'Seseorang masuk sendirian ke dalam markas Asosiasi Monster. Pria yang dikenal sebagai Pemburu Hero justru tampak seperti seorang pahlawan bagi Tareo yang ditangkap dan akan dibunuh oleh monster. Tapi sekuat apa pun dia, sanggupkah Garou keluar hidup-hidup dari sarang monster, yang juga dihuni makhluk-makhluk mengerikan level bencana Naga?',
  },
  {
    id: 32,
    img: img21,
    pengarang: 'Eriko Ono',
    judul: 'Hai, Miiko! 07 - Bookpaper',
    harga: 'Rp. 30.000',
    qty: 100,
    deskripsi:
      'Saatnya protes sama papa dan mama, minta kamar sendiri-sendiri!hai miiko series ke 7 menceritakan tentang miiko yang sudah beranjak besar yang sudah tidak ingin satu kamar dengan adiknya.',
  },
  {
    id: 33,
    img: img22,
    pengarang: 'Koyoharu Gotouge',
    judul: 'DEMON SLAYER: Kimetsu no Yaiba 10.',
    harga: 'Rp. 35.000',
    qty: 100,
    deskripsi:
      'Usai memulihkan diri di bawah naungan salah seorang Hashira, Shinobu, Tanjiro dan kawan-kawan kini berhasil menguasai Zenshuchu secara paripurna. Lalu, datanglah tugas baru untuk menyusup ke Kereta Uap Mugen dan membasmi iblis yang bersemayam di sana bersama En Hashira, Rengoku. Akan tetapi, Tanjiro dan kawan-kawan malah terjebak di dalam mimpi buatan si iblis!',
  },
  {
    id: 34,
    img: img23,
    pengarang: 'Ken Wakui',
    judul: 'Level Comic: Tokyo Revengers 06',
    harga: 'Rp. 35.000',
    qty: 100,
    deskripsi:
      'Takemichi bertekad untuk menjadi pemimpin Toman. Demi membawa pulang Baji ke Toman, demi menyingkirkan Kisaki, biang kerok semua kejahatan, dan demi benar-benar menyelamatkan Hina, misi tersulit Takemichi dimulai!!',
  },
]

const Lokal = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <Produk data={lokalData} title="Lokal Book" />
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Lokal
