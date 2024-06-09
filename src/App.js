import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home'
import Anak from './components/Anak/Anak'
import Import from './components/ImportKategori/Import'
import Lokal from './components/Lokal/Lokal'
import Komik from './components/Komik/Komik'
import Fiksi from './components/Fiksi/Fiksi'
import NonFiksi from './components/NonFiksi/NonFiksi'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'
import DetailProduk from './components/DetailProduk/DetailProduk'
import Keranjang from './components/Keranjang/Keranjang'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/anak" element={<Anak />} />
        <Route path="/import" element={<Import />} />
        <Route path="/lokal" element={<Lokal />} />
        <Route path="/komik" element={<Komik />} />
        <Route path="/fiksi" element={<Fiksi />} />
        <Route path="/nonfiksi" element={<NonFiksi />} />
        <Route path="/keranjang" element={<Keranjang />} />
        <Route path="/detailproduk/:id" element={<DetailProduk />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  )
}

export default App
