import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import img1 from '../../assets/produk/matahari.jpeg'
import img2 from '../../assets/produk/terus.png'
import img3 from '../../assets/produk/gadis.png'
import img4 from '../../assets/produk/dazai.jpeg'
import img5 from '../../assets/produk/laut.jpeg'
import img6 from '../../assets/produk/yellow.jpeg'
import img7 from '../../assets/produk/gadis.png'
import img8 from '../../assets/produk/itends.jpeg'
import img9 from '../../assets/produk/midnight.jpeg'
import Produk from '../Produk/Produk'

export const fiksiData = [
  {
    id: 7,
    img: img1,
    pengarang: 'Tere Liye',
    judul: 'Matahari',
    harga: 'Rp. 90.000',
    qty: 100,
    deskripsi:
      'Namanya Ali, 15 tahun, kelas X. Jika saja orangtuanya mengizinkan, seharusnya dia sudah duduk di tingkat akhir ilmu fisika program doktor di universitas ternama. Ali tidak menyukai sekolahnya, guru-gurunya, teman-teman sekelasnya. Semua membosankan baginya. Tapi sejak dia mengetahui ada yang aneh pada diriku dan Seli, teman sekelasnya, hidupnya yang membosankan berubah seru. Aku bisa menghilang, dan Seli bisa mengeluarkan petir. Ali sendiri punya rahasia kecil. Dia bisa berubah menjadi beruang raksasa. Kami bertiga kemudian bertualang ke tempat-tempat menakjubkan. Namanya Ali. Dia tahu sejak dulu dunia ini tidak sesederhana yang dilihat orang. Dan di atas segalanya, dia akhirnya tahu persahabatan adalah hal yang paling utama.',
  },
  {
    id: 13,
    img: img2,
    pengarang: 'Tere Liye',
    judul: 'Teruslah Bodoh Jangan Pintar',
    harga: 'Rp. 90.000',
    qty: 100,
    deskripsi:
      'Novel ini ada aksinya, ada politiknya, ada ekonominya, ada hukumnya, ujung ke ujung lengkap. Buat kalian yg mau nyari topik disertasi atau thesis, novel ini bisa kalian kuliti dgn serius. Kaki-kaki cerita novel ini, lapisan2 ceritanya, coba saja dibaca. Dari ruangan 3x6 meter, kalian pergi ke penjuru negeri, memahami realitas menyakitkan di negeri ini.',
  },
  {
    id: 14,
    img: img3,
    pengarang: 'Ratih Kumala',
    judul: 'Gadis Kretek',
    harga: 'Rp. 85.000',
    qty: 100,
    deskripsi:
      'Gadis Kretek adalah sebuah novel karya Ratih Kumala. Novel ini berisi tentang perkembangan industri kretek pada zaman periode penjajahan Belanda hingga kemerdekaan. Di mana industri kretek tersebut, sang pemilik (Romo) mewariskan kepada putra sulungnya yang bernama Tegar.',
  },
  {
    id: 3,
    img: img4,
    pengarang: 'Osamu Dazai',
    judul: 'No Longer Human',
    harga: 'Rp. 60.000',
    qty: 100,
    deskripsi:
      'No Longer Human diceritakan dalam bentuk buku catatan yang ditinggalkan oleh Ōba Yozo ( 大 庭 葉 蔵 ) , seorang lelaki bermasalah yang tidak mampu mengungkapkan jati dirinya kepada orang lain, dan yang, sebaliknya, mempertahankan fasad kegembiraan kosong.',
  },
  {
    id: 2,
    img: img5,
    pengarang: 'Leila Salikha Chudori',
    judul: 'Laut Bercerita',
    harga: 'Rp. 85.000',
    qty: 100,
    deskripsi:
      'Laut Bercerita, novel terbaru Leila S. Chudori, bertutur tentang kisah keluarga yang kehilangan, sekumpulan sahabat yang merasakan kekosongan di dada, sekelompok orang yang gemar menyiksa dan lancar berkhianat, sejumlah keluarga yang mencari kejelasan makam anaknya, dan tentang cinta yang tak akan luntur.',
  },
  {
    id: 4,
    img: img6,
    pengarang: 'R. F. Kuang',
    judul: 'Yellow Face',
    harga: 'Rp. 300.000',
    qty: 100,
    deskripsi:
      "When Athena dies in a freak accident, June steals her unpublished manuscript and publishes it as her own under the ambiguous name Juniper Song. But as evidence threatens June's stolen success she will discover exactly how far she will go to keep what she thinks she deserves.",
  },
  {
    id: 14,
    img: img7,
    pengarang: 'Ratih Kumala',
    judul: 'Gadis Kretek',
    harga: 'Rp. 85.000',
    qty: 100,
    deskripsi:
      'Gadis Kretek adalah sebuah novel karya Ratih Kumala. Novel ini berisi tentang perkembangan industri kretek pada zaman periode penjajahan Belanda hingga kemerdekaan. Di mana industri kretek tersebut, sang pemilik (Romo) mewariskan kepada putra sulungnya yang bernama Tegar.',
  },
  {
    id: 25,
    img: img8,
    pengarang: 'Hoover, Colleen ',
    judul: 'It Ends with Us',
    harga: 'Rp. 195.000',
    qty: 100,
    deskripsi:
      "Lily hasn't always had it easy, but that's never stopped her from working hard for the life she wants. She's come a long way from the small town in Maine where she grew up — she graduated from college, moved to Boston, and started her own business. So when she feels a spark with a gorgeous neurosurgeon named Ryle Kincaid, everything in Lily's life suddenly seems almost too good to be true.",
  },
  {
    id: 28,
    img: img9,
    pengarang: 'Haig, Matt',
    judul: 'The Midnight Library: A GMA Book Club Pick (a Novel)',
    harga: 'Rp. 195.000',
    qty: 100,
    deskripsi:
      'Somewhere out beyond the edge of the universe there is a library that contains an infinite number of books, each one the story of another reality. One tells the story of your life as it is, along with another book for the other life you could have lived if you had made a different choice at any point in your life. While we all wonder how our lives might have been, what if you had the chance to go to the library and see for yourself? Would any of these other lives truly be better?',
  },
]

const Fiksi = () => {
  return (
    <div>
      <div className="bg-secondary">
        <Navbar />
      </div>
      <Produk data={fiksiData} title="Fiksi" />
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Fiksi
