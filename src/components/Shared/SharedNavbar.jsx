import React, { useContext } from 'react';
import { FaBookmark, FaFacebookMessenger, FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const SharedNavbar = () => {
  const {user,logOut} = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
    .then(() => {
      
    })
    .catch(err => console.error(err));
  }
    return (
        <div className="navbar text-white">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link className="hover:bg-black hover:text-white text-black font-semibold"><FaHome></FaHome>Home</Link>
                </li>
                <li>
                  <Link className="hover:bg-black hover:text-white text-black font-semibold"><FaBookmark></FaBookmark>Bookmark</Link>
                </li>
                <li>
                  <Link className="hover:bg-black hover:text-white text-black font-semibold"><FaFacebookMessenger></FaFacebookMessenger>Message</Link>
                </li>
              </ul>
            </div>
            <Link className="btn btn-ghost normal-case text-xl my-logo text-blue-500" to='/'>AutoParts</Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            
          </div>
          <div className="navbar-end">
          <ul className="menu menu-horizontal p-0 items font-bold hidden lg:flex">
              <li>
                <Link className='bg-gray-700 rounded-md mr-5 hover:bg-blue-500 hover:' to='/blog'>Blog</Link>
              </li>
              <li>
                <Link className='bg-gray-700 rounded-md mr-5 hover:bg-blue-500 hover:' to='/'>Home</Link>
              </li>
              {
                user?.uid ? <li>
                <Link onClick={handleLogOut} className='bg-gray-700 rounded-md mr-5 hover:bg-blue-500 hover:' to='/login'>LogOut</Link>
              </li>
              :
              <li>
                <Link className='bg-gray-700 rounded-md mr-5 hover:bg-blue-500 hover:' to='/login'>Login</Link>
              </li>
              }
            </ul>
            <Link className="btn rounded-full bg-blue-500">Purchase Now</Link>
          </div>
        </div>
    );
};

export default SharedNavbar;