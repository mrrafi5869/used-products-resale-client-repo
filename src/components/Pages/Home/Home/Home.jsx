import React from 'react';
import CarAccessories from '../CarAccessories/CarAccessories';
import Info from '../Info/Info';
import Navbar from '../../../Shared/Navbar/Navbar'
import FindCar from '../FindCar/FindCar';
import CarCategories from '../CarCategories/CarCategories';
import AutoScroll from '../AutoScroll/AutoScroll';
import Wheel from '../Wheel/Wheel';
import CarSwiper from '../CarSwiper/CarSwiper';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <FindCar></FindCar>
            <CarCategories></CarCategories>
            <AutoScroll></AutoScroll>
            <Wheel></Wheel>
            <CarSwiper></CarSwiper>
            <CarAccessories></CarAccessories>
            <Info></Info>
        </div>
    );
};

export default Home;