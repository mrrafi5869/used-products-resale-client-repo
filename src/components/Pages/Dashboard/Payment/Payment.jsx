import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Elements} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckOutForm from './CheckOutForm';

const Payment = () => {
    const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
    console.log(stripePromise);
    const booking = useLoaderData();
    const {name, price} = booking;
    return (
        <div className='w-9/12 mx-auto'>
            <div className="my-12"><h1 className='text-2xl font-bold'>Please pay <span className='text-blue-400'>{price}</span> Bucks For <span className='text-blue-400'>{name}</span></h1></div>
            <div className='w-96 my-36'>
            <Elements stripe={stripePromise}>
                <CheckOutForm
                    booking={booking}
                />
            </Elements>
            </div>
        </div>
    );
};

export default Payment;