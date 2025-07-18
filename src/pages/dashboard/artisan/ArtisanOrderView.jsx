import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ArtisanOrderDetailsContext from '../../../context/ArtisanOrderDetailsContext';

const ArtisanOrderView = () => {
  const [product, setProduct] = useState(null);
  const params = useParams();
  const { products } = useContext(ArtisanOrderDetailsContext);
  useEffect(() => {
    const findProduct = products.find((item) => item.id === params.id);
    setProduct(findProduct);
  }, [products]);

  const statusColor = {
    pending: 'bg-yellow-100 text-yellow-700 border border-yellow-300',
    processing: 'bg-blue-100 text-blue-700 border border-blue-300',
    delivered: 'bg-green-100 text-green-700 border border-green-300',
    canceled: 'bg-red-100 text-red-700 border border-red-300',
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-xl mt-6">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Product Image */}
        <img
          src={product?.productImg}
          alt={product?.productName}
          className="w-full md:w-1/3 h-72 object-cover rounded-lg shadow"
        />

        {/* Order Info */}
        <div className="flex-1 space-y-3">
          <h2 className="text-2xl font-semibold text-gray-800">
            {product?.productName}
          </h2>
          <p className="text-sm text-gray-600">
            Ordered on: {product?.ordered}
          </p>
          <p className="text-sm text-gray-600">
            Quantity: <span className="font-medium">{product?.quantity}</span>
          </p>
          <p className="text-sm text-gray-600">
            Total Price:{' '}
            <span className="font-semibold text-green-700">
              ৳{product?.prices}
            </span>
          </p>
          <p className="text-sm text-gray-600">
            Status:
            <span
              className={`ml-2 px-3 py-1 rounded-full text-sm ${
                statusColor[product?.status] || ''
              }`}
            >
              {product?.status.charAt(0).toUpperCase() +
                product?.status.slice(1)}
            </span>
          </p>
        </div>
      </div>

      <hr className="my-6" />

      {/* Customer Info */}
      <div className="flex items-center gap-4">
        <img
          src={product?.customerImg}
          alt={product?.customerName}
          className="w-14 h-14 rounded-full object-cover border"
        />
        <div>
          <h3 className="text-lg font-semibold">{product?.customerName}</h3>
          <p className="text-sm text-gray-600">Phone: {product?.phone}</p>
          <p className="text-sm text-gray-600">Address: {product?.address}</p>
        </div>
      </div>
    </div>
  );
};

export default ArtisanOrderView;
