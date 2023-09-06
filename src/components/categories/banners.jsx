import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, EffectCoverflow, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/swiper-bundle.css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/autoplay';

import Banner1 from '../../assets/imgPreApi/destacadosbanner/1.png'
import Banner2 from '../../assets/imgPreApi/destacadosbanner/2.png'

SwiperCore.use([Navigation, EffectCoverflow, Pagination]);

//PRE API
const images=[
    {
        imageSrc:Banner1,
        linkUrl:'/user',
    },
    
    {
        imageSrc:Banner2,
        linkUrl:'/user',
    },
]

export const Banners = () => {
  return (
    <div className=' w-full flex justify-center '>
    <div className=' bg-grayedit overflow-hidden h-[auto] '>
      <Swiper
        modules={[Autoplay]}
        pagination={{clickable:true}}
        centeredSlides={true}
        loop={true}
        spaceBetween={`${images.length===1?1000:1}`}
        autoplay={true}

        // effect={'coverflow'}
        // grabCursor={true}
        // slidesPerView={'auto'}
        // coverflowEffect={{
        //   rotate: 0,
        //   stretch: 0,
        //   depth: 100,
        //   modifier: 1,
        // }}

        autoHeight={true}
        className=''
      >

        {images.map((image, index) => ( 
          <SwiperSlide key={index} className='bg-grayedit max-h-[20vh]'>
            <img src={image.imageSrc} alt='slide' className='w-full  pb-6 rounded-la' />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>
  )
}
