import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { FaGoogle, FaGithub, FaFacebook } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const googleProvider = new GoogleAuthProvider();

const Register = () => {
  const navigate = useNavigate();
  const { googleSingIn, emailLogin, updateUser } = useContext(AuthContext);

  const [topping, setTopping] = useState("")

  const onOptionChange = e => {
    setTopping(e.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const name = form.name.value;
    const user = topping;
    const password = form.password.value;
    // const confirmPassword = form.confirmPassword.value;

    emailLogin(email, password)
    .then(result => {
      handleUpdateProfile(name, email, user);
      navigate('/');
    })
    .catch(err => console.error(err));
  }

  const handleGoogleSignIn = () => {
    googleSingIn(googleProvider)
    .then(result => {
      const user = result.user;
      console.log(user);
      navigate('/');
    })
    .catch(err => console.error(err));
  };

  const handleUpdateProfile = (name, email, user) => {
    const profile = {
      displayName: name,
    }
    updateUser(profile)
    .then(() => {
      saveUser(name, email, user)
    })
    .catch(err => console.error(err));
  }

  const saveUser = (name, email, user) => {
    const userInfo = {
      name,
      email,
      user
    }
    fetch('http://localhost:5000/user', {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(userInfo)
    })
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        
        <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body w-96">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <label className="input-group">
                <span className="w-24">Name</span>
                <input
                  type="name"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <label className="input-group">
                <span className="w-24">Email</span>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <label className="input-group">
                <span className="w-24">Password</span>
                <input
                  type="password"
                  name="password"
                  placeholder="**********"
                  className="input input-bordered"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <label className="input-group">
                <span className="w-24">Confirm</span>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="**********"
                  className="input input-bordered"
                />
              </label>
              <div className="mt-5 flex items-center justify-between">
                <p className="flex items-center">
                <input onChange={onOptionChange} type="radio" id="child" name="seller" value="seller" className="radio mr-2" checked={topping === "seller"}/>
                <label for="child">Seller</label><br/>
                </p>
                <p className="flex items-center">
                <input onChange={onOptionChange} type="radio" id="adult" name="buyer" value="buyer" className="radio mr-2" checked={topping === "buyer"}/>
                <label for="adult">buyer</label>
                </p>
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <div>
            <p className="text-gray-500 text-center">Or SignUp using</p>
            <ul className="flex justify-center my-5">
              <li className="mr-3 text-2xl text-blue-500">
                <FaGoogle onClick={handleGoogleSignIn} className="cursor-pointer"></FaGoogle>
              </li>
              <li className="mr-3 text-2xl text-gray-500">
                <FaGithub className="cursor-pointer"></FaGithub>
              </li>
              <li className="mr-3 text-2xl text-blue-500">
                <FaFacebook className="cursor-pointer"></FaFacebook>
              </li>
            </ul>
            <p className="mb-8 text-center">Already have an Account?<Link to='/login' className="text-blue-500 font-bold">Please Login</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
