import React from 'react';
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import B1 from "../../assets/Bannerimg/B1.jpg"
import B2 from "../../assets/Bannerimg/B2.jpg"
import B3 from "../../assets/Bannerimg/B3.jpg"

const Banner = () => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay={{
          delay: 3000, 
          disableOnInteraction: false, 
        }}
        loop={true} 
        className="h-[300px] md:h-[500px]"
      >
        <SwiperSlide>
          <img
            src={B1}
            alt="Slide 1"
            className="w-full  h-[80%] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={B2}
            alt="Slide 2"
            className="w-full h-[80%] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={B3}
            alt="Slide 3"
            className="w-full  h-[80%] object-cover"
          />
        </SwiperSlide>
      </Swiper>
      
    </div>
  );
};

export default Banner;
