import { useContext } from 'react';
import { Navigate } from 'react-router';
import AuthContext from '../../context/AuthContext';

const PrivateRoute = ({ children }) => {
  const { loading, currentUser, userDetails } = useContext(AuthContext);

  if (loading) return <p>Loading...</p>;

  if (!currentUser || userDetails.role !== 'customer')
    return <Navigate to="/auth/login" replace />;

  return children;
};

export default PrivateRoute;
