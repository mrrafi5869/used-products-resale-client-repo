import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "../components/Shared/Footer/Footer";
import SharedNavbar from "../components/Shared/SharedNavbar";
import { AuthContext } from "../contexts/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import useBuyer from "../hooks/useBuyer";
import useSeller from "../hooks/useSeller";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isBuyer] = useBuyer(user?.email);
  const [isSeller] = useSeller(user?.email);

  return (
    <>
      <SharedNavbar></SharedNavbar>
      <div className="w-9/12 mx-auto">
        <div className="drawer drawer-mobile">
          <input
            id="dashboard-drawer"
            type="checkbox"
            className="drawer-toggle"
          />
          <div className="drawer-content">
            <Outlet></Outlet>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="dashboard-drawer"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80 text-base-content">
              {isSeller && (
                <>
                  <li>
                    <Link to="/dashboard">Add a Product</Link>
                  </li>
                </>
              )}
              {isBuyer && (
                <>
                  <li>
                    <Link to="/dashboard/myOrders">My Orders</Link>
                  </li>
                </>
              )}
              {isAdmin && (
                <>
                  <li>
                    <Link to="/dashboard/allSellers">All Sellers</Link>
                  </li>
                  <li>
                    <Link to="/dashboard/allBuyers">All Buyers</Link>
                  </li>
                  <li>
                    <Link to="/dashboard/allUsers">All Users</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default DashboardLayout;
