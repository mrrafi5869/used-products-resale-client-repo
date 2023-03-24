import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import BookingModal from "../BookingModal/BookingModal";
import AllCarsInfo from "./AllCarsInfo";

const AllCars = () => {
  const { products } = useLoaderData();
  const { loading } = useContext(AuthContext);
  const [data, setData] = useState(null);
  if (loading) {
    return (
      <div className="flex justify-center my-96">
        <button className="btn btn-square loading"></button>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 lg:gap-8 place-items-center lg:w-9/12 mx-auto my-16">
      {products?.map((singleProduct) => (
        <AllCarsInfo
          key={singleProduct._id}
          singleProduct={singleProduct}
          setData={setData}
          data={data}
        ></AllCarsInfo>
      ))}
      {data && <BookingModal setData={setData} data={data}></BookingModal>}
    </div>
  );
};

export default AllCars;
