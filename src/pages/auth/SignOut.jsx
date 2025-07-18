import { signOut } from 'firebase/auth';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router';
import AuthContext from '../../context/AuthContext';
import { auth } from '../../services/firebase/firebaseServise';

const SignOut = () => {
  const { setLoading, setCurrentUser, setUserDetails } =
    useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const doLogout = async () => {
      setLoading(true);
      await signOut(auth);
      setCurrentUser(null);
      setUserDetails(null);
      setLoading(false);
      navigate('/auth/login');
    };
    doLogout();
  }, []);

  return <div>Signing out...</div>;
};

export default SignOut;
