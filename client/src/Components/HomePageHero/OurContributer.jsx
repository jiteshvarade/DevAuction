import React from 'react'
import './ourContributer.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function OurContributer() {
    const data = [
        {
          name: "aakash Kaushik",
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRooEnD32-UtBw55GBfDTxxUZApMhWWnRaoLw&s',
          text: `Random user generator is a FREE API for generating placeholder user information. Get profile photos, names, and more. It's like Lorem Ipsum, for people`
        },
        {
          name: "khushi prashad",
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRooEnD32-UtBw55GBfDTxxUZApMhWWnRaoLw&s',
          text: `Random user generator is a FREE API for generating placeholder user information. Get profile photos, names, and more. It's like Lorem Ipsum, for people`
        },
        {
          name: "Nitish",
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRooEnD32-UtBw55GBfDTxxUZApMhWWnRaoLw&s',
          text: `Random user generator is a FREE API for generating placeholder user information. Get profile photos, names, and more. It's like Lorem Ipsum, for people`
        },
        {
          name: "Ankit",
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRooEnD32-UtBw55GBfDTxxUZApMhWWnRaoLw&s',
          text: `Random user generator is a FREE API for generating placeholder user information. Get profile photos, names, and more. It's like Lorem Ipsum, for people`
        },
      ]
      const inter = setInterval(() => {
        document.querySelector('.slick-next').click()
      }, 6000);
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    }
    return (
        <>
            <section id="contributors" className='w-full h-[99vh] pt-2 bg-black text-white'>
                <h1 className='text-center text-3xl font-bold'>Our Contributors</h1>
                <div className='w-[80vw] h-90vh pt-10 mx-auto'>
                <Slider {...settings}>
                    {data.map((d, i) =>(
                        <div key={i} className=' bg-white bg-opacity-20 h-[450px] pt-4 rounded-3xl'>
                        <div className=" rounded-full flex justify-center items-center">
                            <img src={d.img} className='rounded-full w-44 h-44' alt="" />
                        </div>
                        <div className='text-white text-center mt-2'>
                            <h4 className='text-2xl font-semibold mb-2'>{d.name}</h4>
                            <p className='text-lg px-2'>"{d.text}"</p>
                        </div>
                    </div>
                    ))}
                    </Slider>
                </div>
            </section>
        </>
    )
}

export default OurContributer
