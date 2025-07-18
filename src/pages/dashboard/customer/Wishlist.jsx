import { NavLink } from 'react-router';

const wishlist = [
  {
    id: 1,
    name: 'Wireless Noise Cancelling Headphones',
    price: '$120',
    discount: '20%',
    finalPrice: '$96',
    image:
      'https://images.unsplash.com/photo-1585386959984-a4155228b49e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    name: 'Smart Fitness Watch',
    price: '$80',
    discount: '10%',
    finalPrice: '$72',
    image:
      'https://images.unsplash.com/photo-1616587894233-b12fe2e63f6d?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    name: 'Minimalist Ceramic Mug',
    price: '$20',
    discount: '0%',
    finalPrice: '$20',
    image:
      'https://images.unsplash.com/photo-1601987077608-6f462a2bb93d?auto=format&fit=crop&w=800&q=80',
  },
];

const Wishlist = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <h2 className="text-2xl font-bold text-gray-800">My Wishlist</h2>

        {wishlist.map((item) => (
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
              <h3 className="text-lg font-semibold text-gray-800">
                {item.name}
              </h3>
              <p className="text-sm text-gray-500 line-through">{item.price}</p>
              <p className="text-green-600 font-bold text-sm">
                {item.finalPrice}{' '}
                <span className="text-xs">({item.discount} off)</span>
              </p>
            </div>
            <div className="space-x-2">
              <NavLink to={'/product/1'}>
                <button className="px-4 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">
                  Order Now
                </button>
              </NavLink>
              <button className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600">
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
