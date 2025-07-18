import { useContext } from 'react';
import ShopProductCard from '../../../components/productCards/ShopProductCard';
import ProductsDetailsContext from '../../../context/ProductsDetailsContext';

const Shop = () => {
  const { productDetails } = useContext(ProductsDetailsContext);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-gray-700">My Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {productDetails?.map((product) => {
          const hasDiscount = product.withDiscountPrice > 0;

          return (
            <ShopProductCard product={product} hasDiscount={hasDiscount} />
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
