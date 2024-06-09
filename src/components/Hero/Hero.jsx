import React from 'react'
import image1 from '../../assets/Hero/16.png'
import image2 from '../../assets/Hero/17.jpg'
import image3 from '../../assets/Hero/18.png'
import Slider from 'react-slick'

const ImageList = [
  {
    id: 1,
    img: image2,
    title: 'Baca Yuk!',
    description:
      'Website pembelian buku yang Ramah di Kantong, Mudah, Aman, dan terpecaya.',
  },
  {
    id: 2,
    img: image1,
    title: 'Buku Import pun telah hadir',
    description:
      'Berbagai macam buku import dihadirkan untuk memudahkan kalian dalam berbelanja',
    Link: '/Import',
  },
  {
    id: 3,
    img: image3,
    title: 'Buku Terbaik',
    description:
      'Tidak hanya buku import saja, kami juga menyediakan buku-buku lokal dan translate secara resmi',
    Link: '/Lokal',
  },
]

const Hero = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: 'ease-in-out',
    pauseOnHover: false,
    PauseOnFocus: true,
  }

  return (
    <div
      className="relative overflow-hidden flex justify-center 
    items-center bg-tertiary/50 dark:text-white duration-200"
    >
      <div className="h-[450px]  bg-tertiary-50 absolute/50 -top-1/2"></div>
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                <div
                  className="flex flex-col justify-center gap-5 pt-13
                       sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10"
                >
                  <h1
                    className="text-4xl sm:text-5xl
                            lg:text-6xl font-bold"
                  >
                    {data.title}
                  </h1>
                  <p className="text-sm">{data.description}</p>
                  <div>
                    <a
                      href={data.Link}
                      className="bg-primary hover:bg-secondary transition-colors
                               duration-200 text-white py-2 px-4 rounded-full"
                    >
                      Belanja Sekarang
                    </a>
                  </div>
                </div>
                <div className="order-1 sm:order-2">
                  <div>
                    <img
                      src={data.img}
                      alt=""
                      className="w-[200px] h-[200px] sm:h-[450px] sm:w-[450px]
                               sm:scale-100 lg:scale-130 object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Hero
