import { Button } from '@material-tailwind/react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { NavLink } from 'react-router';

const ShopProductCard = ({ product, hasDiscount }) => {
  return (
    <div
      key={product.id}
      className="relative bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition duration-200"
    >
      {/* Three Dots Icon */}
      <div className="absolute top-3 right-3 text-gray-500 cursor-pointer">
        <BsThreeDotsVertical />
      </div>

      {/* Product Image */}
      <img
        src={product.productImage}
        alt={product.productName}
        className="w-full h-48 object-contain rounded-md mb-4 mix-blend-darken select-none"
      />

      {/* Product Info */}
      <h2 className="text-lg font-semibold text-gray-800">
        {product.productName}
      </h2>
      <p className="text-sm text-gray-500 mb-2">{product.shortDescription}</p>

      {/* Price Section */}
      <div className="mt-2">
        {hasDiscount ? (
          <div className="flex items-center gap-2">
            <span className="text-red-600 font-semibold text-sm">
              {product.discount}%
            </span>
            <span className="line-through text-gray-400 text-sm mb-5 ml-5">
              ${product.price}
            </span>
            <span className="text-green-600 font-bold text-md">
              ${product.withDiscountPrice.toFixed(2)}
            </span>
          </div>
        ) : (
          <span className="text-gray-800 font-bold text-md">
            ${product.price}
          </span>
        )}
      </div>

      <p className="text-right text-zinc-500">{product.productOwnerName}</p>
      {/* View Details Button */}
      <NavLink to={`/product/${product.id}`}>
        <Button className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm">
          View Details
        </Button>
      </NavLink>
    </div>
  );
};

export default ShopProductCard;
