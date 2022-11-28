import React, { useEffect, useState } from 'react';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';


const CheckOutForm = ({booking}) => {
  const [cardError, setCardError] = useState('');
  const [success, setSuccess] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const {price, email, name, _id} = booking;

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({price}),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);
  
  const handleSubmit = async(event) => {
    event.preventDefault();
    if(!stripe || !elements){
      return
    }
    const card = elements.getElement(CardElement);

    if(card === null){
      return;
    }
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card
    })

    if(error){
      setCardError(error.message);
    }
    else{
      setCardError("");
    }

    const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(clientSecret, {
    payment_method: {
      card: card,
      billing_details: {
        name: name,
        email: email
      },
    },
  }
  )
  console.log(confirmError);
  if(confirmError){
    setCardError(confirmError.message);
    return;
  }
  
  console.log(paymentIntent);
  setSuccess('');
  setProcessing(true);
  if(paymentIntent.status === 'succeeded'){
    const payment = {
      price,
      transactionId: paymentIntent.id,
      bookingId: _id
    }
    fetch('http://localhost:5000/payments', {
      method: "POST",
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(payment)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.insertedId){
        setSuccess('Congratulations! Your payment is completed');
        setTransactionId(paymentIntent.id);
      }
    })
  }
  setProcessing(false);

  
  }
    return (
        <>
          <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className='btn btn-primary mt-5 btn-sm' type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button>
    </form>
    <p className='text-red-500'>{cardError}</p>
    {
        success && <div>
          <p className="text-green-400">{success}</p>
          <p>TransactionId: <span className="font-bold">{transactionId}</span></p>
        </div>
      }
        </>
    );
};

export default CheckOutForm;