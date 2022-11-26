import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const BookingModal = ({img, name, location}) => {
    const {user} = useContext(AuthContext);
    const handleBooking = () => {

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
              value={name}
              disabled
              className="input w-full input-bordered"
            />
            <select name="slot" className="select select-bordered w-full">
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