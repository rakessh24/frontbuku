import React from 'react'
import { useParams } from 'react-router'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
// import { useDispatch } from 'react-redux'
// import { addItem } from '../../redux/action/index'
import {
  produkData,
  rekomendasiData,
  importData,
  lokalData,
} from '../../__dummy__/data'
import { anakData } from '../Anak/Anak'
import { importkategData } from '../ImportKategori/Import'
import { komikData } from '../Komik/Komik'
import { fiksiData } from '../Fiksi/Fiksi'
import { nonfiksiData } from '../NonFiksi/NonFiksi'

const DetailProduk = () => {
  const { id } = useParams()
  const data = (productId, semuaData) => {
    return semuaData.find((item) => item.id === parseInt(productId))
  }
  const produk =
    data(id, produkData) ||
    data(id, rekomendasiData) ||
    data(id, importData) ||
    data(id, lokalData) ||
    data(id, anakData) ||
    data(id, importkategData) ||
    data(id, komikData) ||
    data(id, fiksiData) ||
    data(id, nonfiksiData)

  // const dispatch = useDispatch()
  // const addProduk = (produk) => {
  //   dispatch(addItem(produk))
  // }

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="pt-25 pb-10 lg:py-32 h-screen flex items-center">
        <div className="container mx-auto">
          {produk && (
            <div className="flex flex-col lg:flex-row items-center">
              <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0 ">
                <img
                  className="max-w-[200px] lg:max-w-sm"
                  src={produk.img}
                  alt=""
                />
              </div>
              <div className="flex-1 text-center lg:text-left ">
                <h1 className="text-[26px] font-bold text-2xl mb-2 mx-auto">
                  {produk.judul}
                </h1>
                <p className="text-xl font-medium mb-6">
                  Harga: {produk.harga}
                </p>
                <p></p>
                <p className="mb-8 ">{produk.deskripsi}</p>
                <button
                  onClick={() => alert('Belum bisa')}
                  className="bg-tertiary hover:bg-secondary transition-colors duration-200 
                   text-white py-2 px-6  rounded-xl "
                  // onClick={() => addProduk(produk)}
                >
                  Masukkan ke keranjang
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  )
}

export default DetailProduk
