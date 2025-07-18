import { useEffect, useState } from 'react';
import { NavLink } from 'react-router';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // fetch product data (can be from API or local data)
    fetch('/api/products') // update path as needed
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to Craftsy!
        </h1>
        <p className="text-gray-600 text-lg">
          Discover unique, handmade products made with love by local artisans.
        </p>
        <NavLink to={'/shop'}>
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Shop Now
          </button>
        </NavLink>
      </section>

      {/* Featured Categories */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-gray-700">
          Categories
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {['Jewelry', 'Pottery', 'Textiles', 'Woodwork'].map((cat, i) => (
            <div
              key={i}
              className="bg-gray-100 rounded-lg p-6 text-center hover:bg-blue-100 transition"
            >
              <h3 className="font-semibold text-lg">{cat}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-gray-700">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.slice(0, 6).map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-sm text-gray-600">{product.description}</p>
                <p className="mt-2 text-green-700 font-bold">
                  ${product.price.toFixed(2)}
                </p>
                <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
                  View Product
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
