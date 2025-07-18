import { onValue, ref } from 'firebase/database';
import { useContext, useEffect, useState } from 'react';
import { db } from '../services/firebase/firebaseServise';
import ArtisanOrderDetailsContext from './ArtisanOrderDetailsContext';
import AuthContext from './AuthContext';

const ArtisanOrderDetailsProvider = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    onValue(ref(db, `artisanOrders/${currentUser?.uid}`), (snapshot) => {
      const orderProduct = snapshot.val();
      setProducts(
        Object.entries(orderProduct).map(([id, item]) => ({
          id,
          ...item,
        }))
      );
    });
  }, []);
  return (
    <ArtisanOrderDetailsContext.Provider value={{ products }}>
      {children}
    </ArtisanOrderDetailsContext.Provider>
  );
};

export default ArtisanOrderDetailsProvider;
