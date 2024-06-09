import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Produk from '../Produk/Produk'
import img1 from '../../assets/produk/solo.jpeg'
import img2 from '../../assets/produk/deadpool.jpeg'
import img3 from '../../assets/produk/loki.jpeg'
import img4 from '../../assets/produk/punpun.jpeg'
import img5 from '../../assets/produk/haikyu.png'
import img6 from '../../assets/produk/jjk.png'
import img7 from '../../assets/produk/opm.png'
import img8 from '../../assets/produk/miiko.png'
import img9 from '../../assets/produk/kny.png'
import img10 from '../../assets/produk/tokrev.png'

export const komikData = [
  {
    id: 1,
    img: img1,
    pengarang: 'Chu-Gong',
    judul: 'Solo Leveling vol. 1',
    harga: 'Rp. 325.000',
    aosDelay: '0',
  },
  {
    id: 9,
    img: img2,
    pengarang: 'Cullen Bunn',
    judul: 'DeadPool Kills the Marvel Universe Again',
    harga: 'Rp. 250.000',
    aosDelay: '400',
  },
  {
    id: 10,
    img: img3,
    pengarang: 'Christopher Hastings',
    judul: 'Vote Loki',
    harga: 'Rp. 235.000',
    aosDelay: '1000',
  },
  {
    id: 6,
    img: img4,
    pengarang: 'Inio Asano',
    judul: 'Goodnight Punpun',
    harga: 'Rp. 350.000',
    qty: 100,
    deskripsi:
      'Punpun is an ordinary young boy growing up in Japan whose age of innocence has reached its end after his father is arrested for spousal abuse and putting his mother in hospital. With his uncle looking after him Punpun grows into adulthood facing a series of events which change him, for better or worse, forcing him to contemplate just what it means to be an adult.',
  },
  {
    id: 29,
    img: img5,
    pengarang: 'Haruichi Furudate',
    judul: 'Haikyu!! Fly High! Valleyball! 31',
    harga: 'Rp. 30.000',
    qty: 100,
    deskripsi:
      'Pada pertandingan voli yang pertama sekaligus terakhir di masa SMP, Shoyo Hinata yang terpesona pada olahraga voli dikalahkan secara telak oleh Kageyama, pemain jenius yang dijuluki “Raja Lapangan” karena kemampuan bermainnya yang tidak bisa diragukan. Hinata bersumpah untuk membalas dendam, dan memutuskan untuk melanjutkan sekolah ke SMA Karasuno. Akan tetapi, Hinata malah bertemu sosok tak terduga di klub voli SMA Karasuno.',
  },
  {
    id: 30,
    img: img6,
    pengarang: 'Gege Akutami',
    judul: 'Jujutsu Kaisen 11',
    harga: 'Rp. 35.000',
    qty: 100,
    deskripsi:
      'Peron bawah tanah Stasiun Shibuya dipenuhi warga sipil dan manusia yang telah dimodifikasi. Dalam situasi mengerikan tanpa jalan keluar, Gojo masih memegang kendali atas para Jurei. Akan tetapi, kuasa untuk menyegel Gojo ada di tangan musuh...!! Sementara itu, ketika Itadori bergegas menuju peron bawah tanah, muncul sekutu yang tak terduga!?',
  },
  {
    id: 31,
    img: img7,
    pengarang: 'One & Yusuke Murata',
    judul: 'One Punch Man vol. ',
    harga: 'Rp. 25.000',
    qty: 100,
    deskripsi:
      'Seseorang masuk sendirian ke dalam markas Asosiasi Monster. Pria yang dikenal sebagai Pemburu Hero justru tampak seperti seorang pahlawan bagi Tareo yang ditangkap dan akan dibunuh oleh monster. Tapi sekuat apa pun dia, sanggupkah Garou keluar hidup-hidup dari sarang monster, yang juga dihuni makhluk-makhluk mengerikan level bencana Naga?',
  },
  {
    id: 32,
    img: img8,
    pengarang: 'Eriko Ono',
    judul: 'Hai, Miiko! 07 - Bookpaper',
    harga: 'Rp. 30.000',
    qty: 100,
    deskripsi:
      'Saatnya protes sama papa dan mama, minta kamar sendiri-sendiri!hai miiko series ke 7 menceritakan tentang miiko yang sudah beranjak besar yang sudah tidak ingin satu kamar dengan adiknya.',
  },
  {
    id: 33,
    img: img9,
    pengarang: 'Koyoharu Gotouge',
    judul: 'DEMON SLAYER: Kimetsu no Yaiba 10.',
    harga: 'Rp. 35.000',
    qty: 100,
    deskripsi:
      'Usai memulihkan diri di bawah naungan salah seorang Hashira, Shinobu, Tanjiro dan kawan-kawan kini berhasil menguasai Zenshuchu secara paripurna. Lalu, datanglah tugas baru untuk menyusup ke Kereta Uap Mugen dan membasmi iblis yang bersemayam di sana bersama En Hashira, Rengoku. Akan tetapi, Tanjiro dan kawan-kawan malah terjebak di dalam mimpi buatan si iblis!',
  },
  {
    id: 34,
    img: img10,
    pengarang: 'Ken Wakui',
    judul: 'Level Comic: Tokyo Revengers 06',
    harga: 'Rp. 35.000',
    qty: 100,
    deskripsi:
      'Takemichi bertekad untuk menjadi pemimpin Toman. Demi membawa pulang Baji ke Toman, demi menyingkirkan Kisaki, biang kerok semua kejahatan, dan demi benar-benar menyelamatkan Hina, misi tersulit Takemichi dimulai!!',
  },
]

const Komik = () => {
  return (
    <div>
      <div className="bg-secondary">
        <Navbar />
      </div>
      <Produk data={komikData} title="Komik" />
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Komik
