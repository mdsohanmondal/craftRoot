import { useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { NavLink } from 'react-router';

const ArtisanOrderCard = ({ items }) => {
  const [buttonColor, _setButtonColor] = useState([
    {
      color: 'bg-yellow-100 text-yellow-700 border border-yellow-300',
      text: 'Pending',
    },
    {
      color: 'bg-blue-100 text-blue-700 border border-blue-300',
      text: 'In Progress',
    },
    {
      color: 'bg-green-100 text-green-700 border border-green-300',
      text: 'Ready',
    },
    {
      color: 'bg-gray-100 text-gray-700 border border-gray-300',
      text: 'Delivered',
    },
  ]);

  const [btnIdx, setBtnIdx] = useState(0);

  const handleColorChange = () => {
    setBtnIdx((prev) => (prev < buttonColor.length - 1 ? prev + 1 : prev));
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100">
      {/* Header */}

      <div className="relative">
        <img
          src={items.productImg}
          alt={items.productName}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:shadow">
          <BsThreeDotsVertical className="text-gray-400 text-lg" />
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        <h2 className="text-lg font-bold text-gray-800">{items.productName}</h2>

        <div className="text-sm text-gray-500">
          <span className="inline-block mr-1">
            📅{items.ordered.split(',')[1]}
          </span>
          Ordered on:{' '}
          <span className="font-medium text-gray-700">
            {items.ordered.split(',')[0]}
          </span>
        </div>

        <div className="flex justify-between items-center text-sm mt-1">
          <p className="text-green-600 font-medium">{items.quantity}</p>
          <p className="text-gray-500">👤 {items.customerName}</p>
        </div>

        {/* Status and Cancel */}
        <div className="flex justify-between items-center mt-4">
          <button
            onClick={handleColorChange}
            className={`${buttonColor[btnIdx].color} px-4 py-1 cursor-pointer rounded-full text-xs font-medium border transition duration-200`}
          >
            {buttonColor[btnIdx].text}
          </button>

          {btnIdx !== 0 && (
            <NavLink
              to={`/dashboard/artisan/artisans-ordered-view/${items.id}`}
            >
              <button className="px-3 py-1 bg-red-300 rounded-full cursor-pointer text-red-600 text-xs font-medium border border-red-500">
                view details
              </button>
            </NavLink>
          )}

          {btnIdx === 0 && (
            <button className="bg-red-50 text-red-600 cursor-pointer border border-red-300 px-3 py-1 rounded-full text-xs font-medium hover:bg-red-100 transition">
              Cancel
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArtisanOrderCard;
