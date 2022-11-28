import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {FreeMode} from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';

const ProductSlider = () => {
    return (
        <div className='w-9/12 mx-auto my-36'>
            <Swiper
                freeMode={true}
                grabCursor={true}
                modules={[FreeMode]}
                slidesPerView={5}
                spaceBetween={30}
            >
                <SwiperSlide><h1>Rafi</h1></SwiperSlide>
                <SwiperSlide><h1>Rafi</h1></SwiperSlide>
                <SwiperSlide><h1>Rafi</h1></SwiperSlide>
                <SwiperSlide><h1>Rafi</h1></SwiperSlide>
                <SwiperSlide><h1>Rafi</h1></SwiperSlide>
                <SwiperSlide><h1>Rafi</h1></SwiperSlide>
                <SwiperSlide><h1>Rafi</h1></SwiperSlide>
                <SwiperSlide><h1>Rafi</h1></SwiperSlide>
                <SwiperSlide><h1>Rafi</h1></SwiperSlide>
                <SwiperSlide><h1>Rafi</h1></SwiperSlide>
                <SwiperSlide><h1>Rafi</h1></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default ProductSlider;