import React, { useRef, useState } from "react";
import "./CarSwiper.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper";

const CarSwiper = () => {
  return (
    <div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://img.freepik.com/free-photo/blue-black-muscle-car-with-license-plate-that-says-trans-front_1340-23399.jpg?size=626&ext=jpg&ga=GA1.1.207808977.1658386615&semt=sph" alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://img.freepik.com/free-photo/blue-sport-sedan-parked-yard_114579-5078.jpg?size=626&ext=jpg&ga=GA1.1.207808977.1658386615&semt=sph" alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://img.freepik.com/free-photo/grey-metallic-jeep-with-blue-stripe-it_114579-4080.jpg?size=626&ext=jpg&ga=GA1.1.207808977.1658386615&semt=sph" alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://img.freepik.com/free-photo/red-black-supercar-with-word-supercar-side_1340-23413.jpg?size=626&ext=jpg&ga=GA1.1.207808977.1658386615&semt=sph" alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://img.freepik.com/free-photo/gold-supercar-with-word-supercar-front_1340-32300.jpg?size=626&ext=jpg&ga=GA1.1.207808977.1658386615&semt=sph" alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://img.freepik.com/free-photo/yellow-sport-car-with-black-autotuning-road_114579-5051.jpg?size=626&ext=jpg&ga=GA1.1.207808977.1658386615&semt=sph" alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://img.freepik.com/free-photo/white-modern-sport-car-parking-road_114579-4025.jpg?size=626&ext=jpg&ga=GA1.1.207808977.1658386615&semt=sph" alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://img.freepik.com/free-photo/white-modern-sport-car-parking-road_114579-4025.jpg?size=626&ext=jpg&ga=GA1.1.207808977.1658386615&semt=sph" alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://img.freepik.com/free-photo/black-luxury-sport-sedan-car-standing-race-trace_114579-1169.jpg?size=626&ext=jpg&ga=GA1.1.207808977.1658386615&semt=sph" alt=""/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CarSwiper;
