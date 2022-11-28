import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';

const BookingModal = ({ data, setData }) => {
    const { img, name, location, resalePrice} = data

    const {user} = useContext(AuthContext);
    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.carName.value;
        const email = form.email.value;
        const price = form.price.value;
        const singleLocation = form.singleLocation.value;
        const phone = form.phone.value;
        const booking = {
            img,
            name,
            price,
            location: singleLocation,
            phone,
            email
        }
        fetch('https://used-products-resale-server-pied.vercel.app/bookingCar',{
            method: "POST",
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.acknowledged){
              setData(null);
                toast.success(`Thanks for ordered the ${name}.You will get it in 7 Days.`)
            }
        })

    }
    return (
        <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{}</h3>
          <form onSubmit={handleBooking} className="grid grid-cols-1 gap-3 mt-10">
            <input
              type="text"
              name='carName'
              value={name}
              disabled
              className="input w-full input-bordered"
            />
            <input
              type="text"
              name='price'
              value={resalePrice}
              disabled
              className="input w-full input-bordered"
            />
            <select name="singleLocation" className="select select-bordered w-full">
              {
                location.map((singleLocation, index) => <option key={index} value={singleLocation}>{singleLocation}</option>)
              }
            </select>
            <input
              type="name"
              name="name"
              defaultValue={user?.displayName}
              readOnly
              placeholder="Your Name"
              className="input w-full input-bordered"
            />
            <input
              type="email"
              name="email"
              defaultValue={user?.email}
              readOnly
              placeholder="Email address"
              className="input w-full input-bordered"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="input w-full input-bordered"
            />
            <br />
            <input
              className="btn btn-accent w-full"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
    );
};

export default BookingModal;