import React, { useContext } from "react";
import toast from "react-hot-toast";
import { FaMapMarkerAlt, FaMoneyBill, FaPhone } from "react-icons/fa";
import { useNavigate } from "react-router-dom/dist";
import { AuthContext } from "../../../../contexts/AuthProvider";

const AddProduct = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const imageHost = process.env.REACT_APP_IMGBB_KEY;

  const handleAddProduct = event => {
    event.preventDefault();
    const form = event.target;
    const productName = form.name.value;
    const phone = form.phone.value;
    const image = form.image.files[0];
    const condition = form.condition.value;
    const location = form.location.value;
    const OPrice = form.OPrice.value;
    const RPrice = form.RPrice.value;
    const used = form.used.value;

    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHost}`

    fetch(url, {
      method: 'POST',
      body: formData
    })
    .then(res => res.json())
    .then(data => {
      const upImg = data.data.display_url;
      addProductInDb(upImg)
      navigate("/dashboard/myProducts")
    })

    const addProductInDb = (upImg) => {
      const addProduct = {
        email: user.email,
        name: user.displayName,
        productName: productName,
        img: upImg,
        phone,
        location,
        condition,
        originalPrice: OPrice,
        resalePrice: RPrice,
        used
    }
    console.log(addProduct);

      fetch("http://localhost:5000/addProduct", {
        method: "POST",
        headers: {
            'content-type': "application/json"
        },
        body: JSON.stringify(addProduct)
    })
    .then(res => res.json())
    .then(data => {
        if(data.acknowledged){
          toast.success('Your product is added');
          form.reset();
        }
    })
    }
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 shadow-2xl bg-base-100 w-[500px]">
          <form onSubmit={handleAddProduct} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Car Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Product Name"
                className="input input-bordered"
                required
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
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text flex items-center"> Car Photo<FaPhone className="ml-2"></FaPhone></span>
              </label>
              <input
                type="file"
                name="image"
                className="input input-bordered"
                required
              />
            </div>
            <div className="my-1">
                <span className="font-semibold flex items-center mb-4">
                Select a Category{" "}
                </span>
                <select className="select select-bordered w-full" name="brand" required>
                <option>Toyota</option>
                <option>Lamborghini</option>
                <option>Ferrari</option>
                </select>
            </div>
            <div className="my-1">
                <span className="font-semibold flex items-center mb-4">
                Condition{" "}
                </span>
                <select className="select select-bordered w-full" name="condition">
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
                <option>1Year</option>
                <option>2years</option>
                <option>3Years</option>
                <option>4Years</option>
                <option>5Years</option>
                </select>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn bg-orange-100 text-black border-none hover:bg-orange-300">Add Now</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
