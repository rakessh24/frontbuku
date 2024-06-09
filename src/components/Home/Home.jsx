import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import Produk from '../Produk/Produk'
import Footer from '../Footer/Footer'
import {
  produkData,
  rekomendasiData,
  importData,
  lokalData,
} from '../../__dummy__/data'

const Home = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <Produk
        data={produkData}
        title="Terpopuler"
        subtitle="Beberapa buku yang belakangan ini orang-orang minati."
      />
      <Produk
        data={rekomendasiData}
        title="Rekomendasi untuk kamu"
        subtitle="Beberapa rekomendasi dari kami untukmu"
      />
      <Produk
        data={importData}
        title="Import Book"
        subtitle="Beberapa rekomendasi buku import yang bisa kamu beli"
      />
      <Produk
        data={lokalData}
        title="Buku Lokal"
        subtitle=" Beberapa rekomendasi buku lokal yang bisa kamu beli"
      />
      <Footer />
    </div>
  )
}

export default Home
