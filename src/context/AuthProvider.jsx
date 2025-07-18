import { onAuthStateChanged } from 'firebase/auth';
import { onValue, ref } from 'firebase/database';
import { useEffect, useState } from 'react';
import { auth, db } from '../services/firebase/firebaseServise';
import AuthContext from './AuthContext';
const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const unsubsCribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);

        const userRef = ref(db, `users/${user.uid}`);
        const unsubscribe = onValue(userRef, (snapshot) => {
          setUserDetails(snapshot.val());
          setLoading(false);
        });

        return () => unsubscribe();
      } else {
        setCurrentUser(null);
        setUserDetails(null);
        setLoading(false);
      }
    });

    return () => unsubsCribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        loading,
        setLoading,
        currentUser,
        setCurrentUser,
        userDetails,
        setUserDetails,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
