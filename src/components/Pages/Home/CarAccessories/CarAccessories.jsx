import React from 'react';
import wheel from '../../../../images/wheel.jpeg';
import brake from '../../../../images/brake.jpeg';
import frontProtector from '../../../../images/frontProtector.png';
import silencer from '../../../../images/silencer.png';
import sit from '../../../../images/sit.jpeg';
import suspension from '../../../../images/suspension.png';

const CarAccessories = () => {
    const parts = [
        {
            id: 1,
            img: wheel,
            name: "Wheel",
            desc: "A wheel is a circular component that is intended to rotate on an axle bearing."
        },
        {
            id: 2,
            img: brake,
            name: "Brake",
            desc: "A wheel is a circular component that is intended to rotate on an axle bearing."
        },
        {
            id: 3,
            img: frontProtector,
            name: "FrontProtector",
            desc: "A wheel is a circular component that is intended to rotate on an axle bearing."
        },
        {
            id: 4,
            img: sit,
            name: "Sit",
            desc: "A wheel is a circular component that is intended to rotate on an axle bearing."
        },
        {
            id: 5,
            img: suspension,
            name: "Suspension",
            desc: "A wheel is a circular component that is intended to rotate on an axle bearing."
        },
        {
            id: 6,
            img: silencer,
            name: "Silencer",
            desc: "A wheel is a circular component that is intended to rotate on an axle bearing."
        },
    ]
    return (
        <div className='my-6 md:my-52 md:w-9/12 mx-auto'>
            <h1 className='text-3xl font-bold uppercase mb-8 md:mb-24 text-center'><span className='text-blue-500'>Car</span> Accessories</h1>
        <div className='grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-5 p-2'>
                {
                    parts.map(part => <div key={part.id}>
                        <img className='w-20 md:mx-auto mb-5' src={part.img} alt="" />
                        <h3 className='text-1xl font-bold'>{part.name}</h3>
                        <p className='text-gray-500 text-justify'>{part.desc}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default CarAccessories;