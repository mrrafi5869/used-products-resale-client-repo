import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "../components/Shared/Footer/Footer";
import SharedNavbar from "../components/Shared/SharedNavbar";

const DashboardLayout = () => {
  return (
    <>
        <SharedNavbar></SharedNavbar>
    <div className="w-9/12 mx-auto">
        <div className="drawer drawer-mobile">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 text-base-content">
          <li>
            <Link to='/dashboard'>Add a Product</Link>
          </li>
          <li>
            <Link to="/dashboard/myOrders">My Orders</Link>
          </li>
          <li>
            <Link to='/dashboard/allUsers'>All Users</Link>
          </li>
          <li>
            <Link to="/dashboard/allSellers">All Sellers</Link>
          </li>
          <li>
            <Link to='/dashboard/allBuyers'>All Buyers</Link>
          </li>
        </ul>
      </div>
    </div>
    </div>
    <Footer></Footer>
    </>
  );
};

export default DashboardLayout;
