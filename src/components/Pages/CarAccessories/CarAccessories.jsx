import React from 'react';
import wheel from '../../../images/wheel.jpeg';
import brake from '../../../images/brake.jpeg';
import frontProtector from '../../../images/frontProtector.png';
import meter from '../../../images/radio.png';
import random from '../../../images/random.png';
import silencer from '../../../images/silencer.png';
import sit from '../../../images/sit.jpeg';
import suspension from '../../../images/suspension.png';

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
            img: meter,
            name: "Meter",
            desc: "A wheel is a circular component that is intended to rotate on an axle bearing."
        },
        {
            id: 5,
            img: random,
            name: "Plus",
            desc: "A wheel is a circular component that is intended to rotate on an axle bearing."
        },
        {
            id: 6,
            img: sit,
            name: "Sit",
            desc: "A wheel is a circular component that is intended to rotate on an axle bearing."
        },
        {
            id: 7,
            img: suspension,
            name: "Suspension",
            desc: "A wheel is a circular component that is intended to rotate on an axle bearing."
        },
        {
            id: 8,
            img: silencer,
            name: "Silencer",
            desc: "A wheel is a circular component that is intended to rotate on an axle bearing."
        },
    ]
    return (
        <div>
            <h1>Car Accessories</h1>
            <div>
                {
                    parts.map(part => <div>
                        <img src={part.img} alt="" />
                        <h3>{part.name}</h3>
                        <p>{part.desc}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default CarAccessories;