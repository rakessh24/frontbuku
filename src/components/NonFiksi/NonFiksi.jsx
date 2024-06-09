import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Produk from '../Produk/Produk'
import img1 from '../../assets/produk/thinking.jpeg'
import img2 from '../../assets/produk/seni.jpeg'
import img3 from '../../assets/produk/filsof.png'
import img4 from '../../assets/produk/tuesday.jpeg'
import img5 from '../../assets/produk/art.jpeg'

export const nonfiksiData = [
  {
    id: 5,
    img: img1,
    pengarang: 'Daniel Kahneman',
    judul: 'Thinking, Fast and Slow',
    harga: 'Rp. 250.000',
    qty: 100,
    deskripsi:
      'Thinking, Fast and Slow by Daniel Kahneman is a groundbreaking book that explores how our brain processes information and makes decisions, using two systems: fast, intuitive thinking and slow, deliberate thinking.',
  },
  {
    id: 8,
    img: img2,
    pengarang: 'Mark Manson',
    judul: 'Sebuah Seni untuk Bersikap Bodo Amat',
    harga: 'Rp. 60.000',
    qty: 100,
    deskripsi:
      'Dalam buku pengembangan diri yang mewakili generasi ini, seorang blogger superstar menunjukkan pada kita bahwa kunci untuk menjadi orang yang lebih kuat, lebih bahagia adalah dengan mengerjakan segala tantangan dengan lebih baik dan berhenti memaksa diri untuk menjadi "positif" di setiap saat.',
  },
  {
    id: 12,
    img: img3,
    pengarang: 'Henry Manampiring',
    judul: 'Filosofi Teras',
    harga: 'Rp. 75.000',
    qty: 100,
    deskripsi:
      'Lebih dari 2000 tahun lalu, sebuah mazhab filsafat menemukan akar masalah dan juga solusi dari banyak emosi negatif. Stoisisme, atau Filosofi Teras, adalah filsafat Yunani-Romawi kuno yang bisa membantu kita mengatasi emosi negatif dan menghasilkan mental yang tangguh dalam menghadapi naik-turun nya kehidupan.',
  },
  {
    id: 26,
    img: img4,
    pengarang: 'Albom, Mitch',
    judul: 'Tuesdays with Morrie',
    harga: 'Rp. 125.000',
    qty: 100,
    deskripsi:
      "Tuesdays with Morrie (1997) chronicles an important relationship in Mitch Albom's life – the one between himself and his old college professor, Morrie. As they reconnect during the professor's final months of life, they discuss everything from greed and forgiveness to death and a meaningful life.",
  },
  {
    id: 27,
    img: img5,
    pengarang: 'Rolf Dobelli',
    judul: 'The Art of Thinking Clearly (International Edition)',
    harga: 'Rp. 115.000',
    qty: 100,
    deskripsi:
      'In engaging prose and with practical examples and anecdotes, an eye-opening look at human reasoning and essential reading for anyone with important decisions to make.',
  },
]

const NonFiksi = () => {
  return (
    <div>
      <div className="bg-secondary">
        <Navbar />
      </div>
      <Produk data={nonfiksiData} title="Non-Fiksi" />
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default NonFiksi
