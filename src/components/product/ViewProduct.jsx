const ViewProduct = () => {
  return (
    <div className="w-full overflow-hidden grid grid-cols-2 gap-8 px-10 py-6 bg-white">
      {/* Left side - Product Image */}
      <div className="flex items-center justify-center">
        <img
          src="https://www.potteryfortheplanet.com/cdn/shop/products/Pottery-For-The-Planet-Ceramic-Mug-12oz-20_313x.jpg?v=1742863557"
          alt="Product"
          className="rounded-2xl h-[80%] object-cover"
        />
      </div>

      {/* Right side - Product Info */}
      <div className="flex flex-col justify-between">
        {/* Top - Product Info */}
        <div className="space-y-1">
          <h2 className="text-2xl font-bold text-gray-900">
            Smart Wireless Headphones
          </h2>
          {/* Short & Full Description Combined Style */}
          <p className="text-sm text-gray-500">
            Short: Premium wireless headphones with crystal-clear sound |
            Description: Immersive noise cancellation, Bluetooth 5.2, and long
            battery life.
          </p>
          <p className="text-sm text-gray-500">By John Doe</p>

          {/* Category and Subcategory */}
          <p className="text-sm text-gray-500">
            Type: Electronics | Sub: Audio Equipment
          </p>

          {/* Price and Discount */}
          <div className="mt-2">
            <p className="text-gray-400 line-through text-sm">$120</p>
            <p className="text-green-600 font-semibold text-sm">25% Discount</p>
            <p className="text-xl font-bold text-gray-800">$90</p>
          </div>

          {/* Quantity */}
          <p>Quantity: 26</p>

          {/* Features */}
          <ul className="text-sm text-gray-600 list-disc list-inside mt-2 space-y-1">
            <li>Up to 40 hours playtime</li>
            <li>Foldable design</li>
            <li>Fast charging</li>
          </ul>
        </div>

        {/* Bottom - Actions */}
        <div className="flex items-center justify-between mt-4 overflow-hidden">
          <div>
            <h3 className="text-lg font-semibold">Total Price: $90</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProduct;
