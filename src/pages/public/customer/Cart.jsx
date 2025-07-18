import CustomerCard from '../../../components/productCards/CustomerCard';

const Cart = () => {
  const cartItems = [
    {
      id: 1,
      name: 'Wireless Noise Cancelling Headphones',
      price: 120,
      discount: 20,
      image:
        'https://images.unsplash.com/photo-1751498926132-8fa74e7b83e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D',
      quantity: 1,
    },
    {
      id: 2,
      name: 'Smart Fitness Watch',
      price: 80,
      discount: 10,
      image:
        'https://images.unsplash.com/photo-1750969393822-36e48a31895f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D',
      quantity: 2,
    },
  ];

  const calculateFinalPrice = (price, discount) =>
    price - price * (discount / 100);

  const calculateTotal = () =>
    cartItems.reduce(
      (acc, item) =>
        acc + calculateFinalPrice(item.price, item.discount) * item.quantity,
      0
    );

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <h2 className="text-2xl font-bold text-gray-800">My Cart</h2>

        {cartItems.map((item) => (
          <CustomerCard item={item} calculateFinalPrice={calculateFinalPrice} />
        ))}

        <div className="bg-white p-4 rounded-lg shadow-md text-right">
          <p className="text-lg font-semibold text-gray-700">
            Total: ${calculateTotal().toFixed(2)}
          </p>
          <button className="mt-3 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};
export default Cart;
