import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle, FaGithub, FaFacebook } from 'react-icons/fa';
import { AuthContext } from "../../../contexts/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import toast from "react-hot-toast";

const googleProvider = new GoogleAuthProvider();

const Login = () => {
  const navigate = useNavigate();
  const {googleSingIn, emailSingIn} = useContext(AuthContext);
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    emailSingIn(email,password)
    .then(result => {
      const user = result.user;
      console.log(user);
      navigate('/');
      form.reset();
    })
    .catch(err => {
      const message = err.message;
      toast.error(message)
    });
  }

  const handleGoogleSignIn = () => {
    googleSingIn(googleProvider)
    .then(result => {
      const user = result.user;
      console.log(user);
      navigate(from, {replace: true});
    })
    .catch(err => console.error(err));
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body w-96">
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
              <label className="label">
                <Link href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <div>
          <div className="divider w-64 mx-auto">OR</div>
            <ul className='flex justify-center mb-10 mt-5'>
                <li className='mr-3 text-2xl text-blue-400 cursor-pointer' onClick={handleGoogleSignIn}><FaGoogle></FaGoogle></li>
                <li className='mr-3 text-2xl text-gray-500 cursor-pointer'><FaGithub></FaGithub></li>
                <li className='mr-3 text-2xl text-blue-500 cursor-pointer'><FaFacebook></FaFacebook></li>
            </ul>
          </div>
          <p className="mb-8 text-center">Don't have an Account?<Link to='/register' className="text-blue-500 font-bold">Please Register</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
