import { useState } from 'react';

const OrderConfirmPopup = ({
  productName,
  quantity,
  totalPrice,
  onClose,
  getData,
}) => {
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = () => {
    if (!address || !phone) return alert('Please fill all fields.');
    onClose();
    getData({ address, phone });
  };

  return (
    <div className="absolute inset-0 bg-[#00000079] backdrop-blur-sm bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl w-full max-w-md p-6 shadow-lg relative animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-400 hover:text-black text-xl"
        >
          &times;
        </button>

        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Confirm Your Order
        </h2>

        {/* Product Summary */}
        <div className="space-y-1 mb-4 text-sm text-gray-600">
          <p>
            <strong>Product:</strong> {productName}
          </p>
          <p>
            <strong>Quantity:</strong> {quantity}
          </p>
          <p>
            <strong>Total Price:</strong> ৳{totalPrice}
          </p>
        </div>

        {/* Input Fields */}
        <div className="space-y-3 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <textarea
              rows={2}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-green-300"
              placeholder="Enter your full delivery address"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-green-300"
              placeholder="01XXXXXXXXX"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm bg-gray-200 hover:bg-gray-300 rounded-md"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 text-sm bg-green-600 text-white hover:bg-green-700 rounded-md"
          >
            Confirm Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmPopup;
