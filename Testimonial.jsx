import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; // Import slick slider styles
import "slick-carousel/slick/slick-theme.css";

const TestimonialData = [
    {
        id: 1,
        name: "Samuel",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        imge: "https://picsum.photos/101/101",
      },
      {
        id: 2,
        name: "John Doe",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        imge: "https://picsum.photos/102/102",
      },
      {
        id: 3,
        name: "Smith",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        imge: "https://picsum.photos/103/103",
      },
]

const Testimonial = () => {
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
          {
            breakpoint: 10000,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
  return (
    <div className='py-10'>
      <div className='container md:px-24 px-4'>
        {/* Header section */}
        <div className='text-center mb-20 max-w-[400px] mx-auto'>
            <p className='text-sm bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-cyan-300'>
                Testimonail
            </p>
            <h1 className='text-3xl font-bold'>Testimonial</h1>
            <p className='text-xs text-gray-400'>
                {" "}
                Lorem ipsum dolor sit, amet consectetur adipisicing 
                elit. Veritatis 
                nulla obcaecati beatae. Sint, voluptates pariatur cum 
                non error repudiandae
                eaque possimus 
            </p>
        </div>
        {/* testimonial  section */}
            <Slider {...settings}>
                {TestimonialData.map(({id, name, text, imge}) => {
                    return(
                        <div key={id} className='my-6'>
                            <div className='flex flex-col justify-center items-center gap-4 text-center shadow-lg mx-4 rounded-xl bg-cyan-700/10 relative'>
                                <img src={imge} alt="" 
                                className='rounded-full block mx-auto mt-3'/>
                                <h1 className='text-xl font-bold'>{name}</h1>
                                <p className='text-gray-500 text-sm mb-2 px-2'>{text}</p>
                                <p className='text-black/20 text-9xl font-serif absolute top-0 right-0'>''</p>
                            </div>
                        </div>
                    )
                })}
            </Slider>
      </div>
    </div>
  )
}

export default Testimonial
