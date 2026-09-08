import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { apiRequest } from '../api';

const ProtectedRoute = ({ children }) => {

  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    apiRequest("/login")
      .then(() => setAuthenticated(true))
      .catch((requestError) => {
        setError(requestError.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Checking your session...</div>;
  }

  if (!authenticated) {
    if (error) {
      console.error(error);
    }
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;