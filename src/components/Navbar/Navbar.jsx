import React from 'react'
import { IoSearch } from 'react-icons/io5'
import { FaCartShopping } from 'react-icons/fa6'
import { FaCaretDown } from 'react-icons/fa6'

const Menu = [
  {
    id: 1,
    name: 'Home',
    Link: '/',
  },
  {
    id: 2,
    name: 'Import',
    Link: '/Import',
  },
  {
    id: 3,
    name: 'Lokal',
    Link: '/Lokal',
  },
  {
    id: 4,
    name: 'Profil',
    Link: '/#Profil',
  },
]

const DropdownLinks = [
  {
    id: 1,
    name: 'Anak-anak',
    link: '/Anak',
  },
  {
    id: 2,
    name: 'Komik',
    link: '/Komik',
  },
  {
    id: 3,
    name: 'Fiksi',
    link: '/Fiksi',
  },
  {
    id: 4,
    name: 'Non-Fiksi',
    link: '/NonFiksi',
  },
]

const Navbar = () => {
  return (
    <div className="shadow-md">
      {/* Navabar atas */}
      <div className="bg-primary py-2">
        <div className="container flex justify-between items-center">
          <div style={{ color: '#FFC374' }}>
            <a
              href="/"
              className="font-bold text-2xl sm:text-3xl flex gap-2 text-FFC374"
            >
              BacaYuk!
            </a>
          </div>
          {/* search bar n button*/}
          <div className="flex flex-col justify-between items-center gap-4">
            <div className=" relative group hidden sm:block">
              <input
                type="text"
                placeholder="Judul Buku, Penulis, Kategori"
                className="w-[200px] sm:w-[250px] group-hover:w-[250px]
                        rounded-full border border-blue-900
                        px-2 py-1 focus:outline-none focus:border-3 focus:border-secondary"
              />
              <IoSearch
                className="text-gray-500 group-hover:text-secondary
                        absolute top 1/2 -translate-y-6 right-3"
              />
            </div>
          </div>
          <div className="flex items-center gap-5">
            <button
              onClick={() => alert('Belum ada yang ditambahkan')}
              className="bg-tertiary text-white py-2 px-4 rounded-full flex items-center gap-3 group
                    hover:bg-secondary transition-colors duration-200 m-r-2"
            >
              <FaCartShopping
                className="text-xl text-white drop-shadow-sm
                        cursor-pointer"
              />
            </button>
            <a
              href="/Login"
              className="bg-tertiary hover:bg-secondary transition-colors duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              Masuk
            </a>
          </div>
        </div>
      </div>
      {/* Navabar bawah */}
      <div className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          <li className="group relative cursor-pointer">
            <button className="flex items-center gap-[2px] py-2">
              Kategori
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </button>
            <div className="absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-black">
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="block w-full rounded-md p-2 hover:text-tertiary duration-200"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.Link}
                className="inline-block px-4 hover:text-tertiary duration-200"
              >
                {data.name}
              </a>
            </li>
          ))}
          {/* Dropdown */}
        </ul>
      </div>
    </div>
  )
}

export default Navbar
