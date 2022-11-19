import React,{ useContext, useState }  from "react";
import { ColorRing } from "react-loader-spinner";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import useAdmin from "../../hooks/useAdmin";


const AdminRoute = ({ children }) => {
  const { user, loader } =useContext(AuthContext) ;
  const [isAdmin,isAdminLoading] = useAdmin(user?.email);
  
  const location = useLocation();
  if (loader || isAdminLoading) {
    return (
      <div className="h-full flex justify-center items-center">
        <ColorRing
          visible={true}
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
      </div>
    );
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/login" state={{ form: location }} replace></Navigate>;
};

export default AdminRoute;
