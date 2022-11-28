import React from 'react';
import CarAccessories from '../CarAccessories/CarAccessories';
import Info from '../Info/Info';
import Navbar from '../../../Shared/Navbar/Navbar'
import FindCar from '../FindCar/FindCar';
import CarCategories from '../CarCategories/CarCategories';
import ProductSlider from '../ProductSlider/ProductSlider';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <FindCar></FindCar>
            <CarCategories></CarCategories>
            <CarAccessories></CarAccessories>
            <Info></Info>
        </div>
    );
};

export default Home;