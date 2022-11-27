import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import useSeller from '../../../hooks/useSeller';

const SellerRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useSeller(user?.email);
    const location = useLocation();
  
    if (loading || isAdminLoading) {
      return <div className="mx-auto">
          <button className="btn btn-square loading"></button>
      </div>
    }
  
    if (user && isAdmin) {
      return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  };

export default SellerRoute;