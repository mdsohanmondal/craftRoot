import { useContext } from 'react';
import { Navigate } from 'react-router';
import AuthContext from '../../context/AuthContext';

const ArtisanPrivateRoute = ({ children }) => {
  const { loading, currentUser, userDetails } = useContext(AuthContext);
  if (loading) return <p>Loading...</p>;
  if (!currentUser || userDetails.role !== 'artisan')
    return <Navigate to={'/auth/login/artisan'} replace />;
  return children;
};

export default ArtisanPrivateRoute;
