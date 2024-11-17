import React from 'react'
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({
    user,
    redirectPath = '/landing',
    children,
  }) => {
    if (!user) {
      return <Navigate to="/signin"/>;
    }
  
    return children;
  };

export default ProtectedRoute
