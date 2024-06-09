import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Produk from '../Produk/Produk'
import img1 from '../../assets/produk/solo.jpeg'
import img2 from '../../assets/produk/punpun.jpeg'
import img3 from '../../assets/produk/deadpool.jpeg'
import img4 from '../../assets/produk/yellow.jpeg'
import img5 from '../../assets/produk/thinking.jpeg'
import img6 from '../../assets/produk/loki.jpeg'
import img7 from '../../assets/produk/itends.jpeg'
import img8 from '../../assets/produk/tuesday.jpeg'
import img9 from '../../assets/produk/art.jpeg'
import img10 from '../../assets/produk/midnight.jpeg'

export const importkategData = [
  {
    id: 1,
    img: img1,
    pengarang: 'Chu-Gong',
    judul: 'Solo Leveling vol. 1',
    harga: 'Rp. 325.000',
    aosDelay: '0',
  },
  {
    id: 6,
    img: img2,
    pengarang: 'Inio Asano',
    judul: 'Goodnight Punpun',
    harga: 'Rp. 350.000',
    aosDelay: '200',
  },
  {
    id: 9,
    img: img3,
    pengarang: 'Cullen Bunn',
    judul: 'DeadPool Kills the Marvel Universe Again',
    harga: 'Rp. 250.000',
    aosDelay: '400',
  },
  {
    id: 4,
    img: img4,
    pengarang: 'R. F. Kuang',
    judul: 'Yellow Face',
    harga: 'Rp. 300.000',
    aosDelay: '600',
  },
  {
    id: 5,
    img: img5,
    pengarang: 'Daniel Kahneman',
    judul: 'Thinking, Fast and Slow',
    harga: 'Rp. 250.000',
    aosDelay: '800',
  },
  {
    id: 10,
    img: img6,
    pengarang: 'Christopher Hastings',
    judul: 'Vote Loki',
    harga: 'Rp. 235.000',
    aosDelay: '1000',
  },
  {
    id: 25,
    img: img7,
    pengarang: 'Hoover, Colleen ',
    judul: 'It Ends with Us',
    harga: 'Rp. 195.000',
    deskripsi:
      "Lily hasn't always had it easy, but that's never stopped her from working hard for the life she wants. She's come a long way from the small town in Maine where she grew up — she graduated from college, moved to Boston, and started her own business. So when she feels a spark with a gorgeous neurosurgeon named Ryle Kincaid, everything in Lily's life suddenly seems almost too good to be true.",
  },
  {
    id: 26,
    img: img8,
    pengarang: 'Albom, Mitch',
    judul: 'Tuesdays with Morrie',
    harga: 'Rp. 125.000',
    qty: 100,
    deskripsi:
      "Tuesdays with Morrie (1997) chronicles an important relationship in Mitch Albom's life – the one between himself and his old college professor, Morrie. As they reconnect during the professor's final months of life, they discuss everything from greed and forgiveness to death and a meaningful life.",
  },
  {
    id: 27,
    img: img9,
    pengarang: 'Rolf Dobelli',
    judul: 'The Art of Thinking Clearly (International Edition)',
    harga: 'Rp. 115.000',
    deskripsi:
      'In engaging prose and with practical examples and anecdotes, an eye-opening look at human reasoning and essential reading for anyone with important decisions to make.',
  },
  {
    id: 28,
    img: img10,
    pengarang: 'Haig, Matt',
    judul: 'The Midnight Library: A GMA Book Club Pick (a Novel)',
    harga: 'Rp. 195.000',
    deskripsi:
      'Somewhere out beyond the edge of the universe there is a library that contains an infinite number of books, each one the story of another reality. One tells the story of your life as it is, along with another book for the other life you could have lived if you had made a different choice at any point in your life. While we all wonder how our lives might have been, what if you had the chance to go to the library and see for yourself? Would any of these other lives truly be better?',
  },
]

const Import = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <Produk data={importkategData} title="Import Book" />
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Import
