import React from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate, useLocation, useNavigate } from "react-router";
import LoadingSpinner from "../utils/LoadingSpinner";

function PrivateRoute({ children }) {
  const location = useLocation();
  const { currentUser, loading } = useAuth();
  
  if (loading) return <LoadingSpinner />;
  else if (!currentUser) {
    return <Navigate to="/sign-in" state={location} />;
  } else return children;
}

export default PrivateRoute;
