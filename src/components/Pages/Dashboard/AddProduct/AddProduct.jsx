import React, { useContext } from "react";
import { FaMapMarkerAlt, FaMoneyBill, FaPhone } from "react-icons/fa";
import { AuthContext } from "../../../../contexts/AuthProvider";

const AddProduct = () => {
  const { user } = useContext(AuthContext);

  const handleAddProduct = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const product = form.name.product;
    const location = form.location.value;
    const OPrice = form.OPrice.value;
    const RPrice = form.RPrice.value;
    const used = form.used.value;
    const add = {
        name,
        product
    }
    fetch("", {
        method: "POST",
        headers: {
            'content-type': "application/json"
        },
        body: JSON.stringify()
    })
    .then(res => res.json())
    .then(data => {

    })
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 shadow-2xl bg-base-100 w-[500px]">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Seller Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                defaultValue={user?.displayName}
                disabled
                className="input input-bordered text-xl font-semibold"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Product Name</span>
              </label>
              <input
                type="text"
                name="product"
                placeholder="Product Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text flex items-center"> Phone Number<FaPhone className="ml-2"></FaPhone></span>
              </label>
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                className="input input-bordered"
              />
            </div>
            <div className="my-1">
                <span className="font-semibold flex items-center mb-4">
                Category{" "}
                </span>
                <select className="select select-bordered w-full" name="location">
                <option disabled selected>
                    Select a Category
                </option>
                <option>Toyota</option>
                <option>Lamborghini</option>
                <option>Ferrari</option>
                </select>
            </div>
            <div className="my-1">
                <span className="font-semibold flex items-center mb-4">
                Condition{" "}
                </span>
                <select className="select select-bordered w-full" name="location">
                <option disabled selected>
                    What's Your car Condition?
                </option>
                <option>Excellent</option>
                <option>Good</option>
                <option>Fair</option>
                </select>
            </div>
            <div className="my-1">
                <span className="font-semibold flex items-center mb-4">
                <FaMapMarkerAlt className="mr-2 text-blue-400"></FaMapMarkerAlt>
                Location{" "}
                </span>
                <select className="select select-bordered w-full" name="location">
                <option disabled selected>
                    Select your company location
                </option>
                <option>USA</option>
                <option>UK</option>
                <option>KSA</option>
                <option>UAE</option>
                <option>India</option>
                <option>Bangladesh</option>
                <option>Pakistan</option>
                </select>
            </div>
            <div className="my-1">
                <span className="font-semibold flex items-center mb-4">
                <FaMoneyBill className="mr-2 text-blue-400"></FaMoneyBill>
                Market Price?{" "}
                </span>
                <select className="select select-bordered w-full" name="OPrice">
                <option disabled selected>
                    Price Range
                </option>
                <option>15000</option>
                <option>20000</option>
                <option>30000</option>
                <option>40000</option>
                <option>50000</option>
                <option>60000</option>
                <option>65000</option>
                </select>
            </div>
            <div className="my-1">
                <span className="font-semibold flex items-center mb-4">
                <FaMoneyBill className="mr-2 text-blue-400"></FaMoneyBill>
               Resale price?{" "}
                </span>
                <select className="select select-bordered w-full" name="RPrice">
                <option disabled selected>
                    Price Range
                </option>
                <option>10000</option>
                <option>15000</option>
                <option>20000</option>
                <option>25000</option>
                <option>30000</option>
                <option>32000</option>
                <option>35000</option>
                </select>
            </div>
            <div className="my-1">
                <span className="font-semibold flex items-center mb-4">
                <time className="mr-2 text-blue-400"></time>
                Years of used{" "}
                </span>
                <select className="select select-bordered w-full" name="used">
                <option disabled selected>
                {/* USA", "UK", "KSA", "UAE", "India", "Bangladesh", "Pakistan */}
                    How many ages of car
                </option>
                <option>1Year</option>
                <option>2years</option>
                <option>3Years</option>
                <option>4Years</option>
                <option>5Years</option>
                </select>
            </div>
            <div className="form-control mt-6">
              <button onClick={handleAddProduct} className="btn bg-orange-100 text-black border-none hover:bg-orange-300">Add Now</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
