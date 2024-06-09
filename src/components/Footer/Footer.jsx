import React from 'react'
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLocationArrow,
  FaMobileAlt,
} from 'react-icons/fa'

const BannerImg = {
  backgroundColor: '#124076',
  backgroundPosition: 'bottom',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: '100%',
  width: '100%',
}

const FooterLinks = [
  {
    title: 'Home',
    link: '/',
  },
]

const Footer = () => {
  return (
    <div style={BannerImg} className="text-white">
      <div className="container">
        <div className="grid md:grid-cols-3 pv-44 pt-5">
          <div className="py-8 px-4">
            <h1
              className="font-bold sm:text-3xl text-justify
                    mb-3 flex items-center gap-3"
            >
              Baca Yuk!
            </h1>
            <p>
              Toko buku berbasis website yang menyediakan berbagai jenis buku
              favorit anda dari yang lokal, terjemahan, hingga import. Kami akan
              membuat suasana berbelanja online anda secara nyaman dan aman.
            </p>
          </div>
          <div className="grid grid-cols-2 sm;grid-cols-3 cols-span-2 md:pl-10">
            <div>
              <div className="py-8 px-4">
                <h1
                  className="sm:text-3xl text-xl font-bold sm:text-left
                            text-justify mb-3"
                >
                  Link
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer
                                        hovr:text-secondary hover:translate-x-1
                                        duration-300 text-gray-200"
                      key={link.title}
                    >
                      <span>
                        <a href={link.link}>{link.title}</a>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="left flex flex-col justify-start ml-4">
              <div className="flex items-center gap-3 mt-6">
                <a href="#">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="#">
                  <FaTwitter className="text-3xl" />
                </a>
              </div>
              <div className="mt-6">
                <div className="flex-items-center gap-3">
                  <FaLocationArrow />
                  <p>Bekasi, Jawa Barat</p>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <FaMobileAlt />
                  <p>+62 812345678</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
