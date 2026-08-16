import React from 'react';
import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {

  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/login", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include"
    })
      .then(res => {
        if (res.ok) {
          setAuthenticated(true);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!authenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;