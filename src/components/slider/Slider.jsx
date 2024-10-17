import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './slider.css'

import slide1 from '../../assets/marriage/marriage-01.jpg'
import slide2 from '../../assets/marriage/marriage-02.jpg'
import slide3 from '../../assets/marriage/marriage-03.jpg'
import slide4 from '../../assets/marriage/marriage-04.jpg'
import slide5 from '../../assets/marriage/marriage-05.jpg'
import slide6 from '../../assets/marriage/marriage-06.jpg'
import slide7 from '../../assets/marriage/marriage-07.jpg'
import slide8 from '../../assets/marriage/marriage-08.jpg'



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Slider = () => {
  return (
    <div>
       <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation ]}
        className="mySwiper"
      >
        <SwiperSlide><img src={slide1} alt="slide1" /></SwiperSlide>
        <SwiperSlide><img src={slide2} alt="slide2" /></SwiperSlide>
        <SwiperSlide><img src={slide3} alt="slide3" /></SwiperSlide>
        <SwiperSlide><img src={slide4} alt="slide3" /></SwiperSlide>
        <SwiperSlide><img src={slide5} alt="slide3" /></SwiperSlide>
        <SwiperSlide><img src={slide6} alt="slide3" /></SwiperSlide>
        <SwiperSlide><img src={slide7} alt="slide3" /></SwiperSlide>
        <SwiperSlide><img src={slide8} alt="slide3" /></SwiperSlide>
        
      </Swiper>
    </div>
  )
}

export default Slider
