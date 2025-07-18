const CustomerCard = ({ item, calculateFinalPrice }) => {
  return (
    <div
      key={item.id}
      className="flex items-center bg-white p-4 rounded-lg shadow-md space-x-4"
    >
      <img
        src={item.image}
        alt={item.name}
        className="w-24 h-24 rounded object-cover border"
      />
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
        <p className="text-sm text-gray-500 line-through">
          ${item.price.toFixed(2)}
        </p>
        <p className="text-green-600 font-bold text-sm">
          ${calculateFinalPrice(item.price, item.discount).toFixed(2)}{' '}
          <span className="text-xs">({item.discount}% off)</span>
        </p>
        <div className="mt-2 flex items-center space-x-3">
          <button className="px-2 py-1 bg-blue-500 text-white rounded text-sm">
            -
          </button>
          <span className="text-sm">{item.quantity}</span>
          <button className="px-2 py-1 bg-blue-500 text-white rounded text-sm">
            +
          </button>
        </div>
      </div>
      <button className="text-sm px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">
        Remove
      </button>
    </div>
  );
};

export default CustomerCard;
