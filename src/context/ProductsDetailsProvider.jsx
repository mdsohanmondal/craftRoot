import { onValue, ref } from 'firebase/database';
import { useEffect, useState } from 'react';
import { db } from '../services/firebase/firebaseServise';
import ProductsDetailsContext from './ProductsDetailsContext';

const ProductsDetailsProvider = ({ children }) => {
  const [productDetails, setProductDetails] = useState([]);

  useEffect(() => {
    const refer = ref(db, `products`);
    onValue(refer, (snapshot) => {
      const products = snapshot.val();
      const newProductArray = Object.entries(products).map(([id, item]) => ({
        id,
        ...item,
      }));
      setProductDetails(newProductArray);
    });
  }, []);
  return (
    <ProductsDetailsContext.Provider value={{ productDetails }}>
      {children}
    </ProductsDetailsContext.Provider>
  );
};

export default ProductsDetailsProvider;
