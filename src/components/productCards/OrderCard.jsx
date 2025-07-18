import { BsThreeDotsVertical } from 'react-icons/bs';
import { NavLink } from 'react-router';

const OrderCard = ({ product }) => {
  return (
    <div
      key={product.id}
      className="relative bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transform hover:scale-105 transition"
    >
      <div className="absolute top-3 right-3 p-1 bg-white rounded-full shadow">
        <BsThreeDotsVertical className="text-gray-400 text-sm" />
      </div>
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover"
      />

      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-900">{product.name}</h2>
        <p className="mt-1 text-sm text-gray-600">{product.description}</p>

        <div className="mt-3 text-sm text-green-700 font-bold">
          ${product.price.toFixed(2)}
        </div>

        <div className="mt-3 text-xs text-gray-500 space-y-1">
          <p>Ordered on: 32 May</p>
          <p>Estimated delivery: {product.deliveryDays}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="mt-3 text-xs text-gray-500 text-right">Total: 3</p>
          <p className=" mt-3 text-xs text-gray-500 text-right">Seller</p>
        </div>

        <NavLink to={'/view-product/1'}>
          <button className="mt-4 w-full bg-blue-600 text-white text-sm py-2 rounded-md hover:bg-blue-700 transition">
            View Details
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default OrderCard;
