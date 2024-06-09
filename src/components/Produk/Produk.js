import React from 'react'
import { Link } from 'react-router-dom'

const Produk = ({ data, title, subtitle }) => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="text-x text-tertiary">{subtitle}</p>
        </div>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {data.map((row) => (
              <div
                key={row.id}
                className="space-y-3 relative"
                data-testid="produk"
              >
                <Link to={`/detailproduk/${row.id}`} className="block">
                  <img
                    src={row.img}
                    alt=""
                    className={`h-[220px] w-[150px] object-cover rounded-md mx-auto `}
                  />
                  <div>
                    <h3 className="font-semibold">{row.judul}</h3>
                    <p className="text-sm text-gray-600">{row.pengarang}</p>
                    <h4 className="font-semibold">{row.harga}</h4>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Produk
