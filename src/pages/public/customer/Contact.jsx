const Contact = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-md space-y-4 text-sm">
        <h2 className="text-xl font-semibold text-gray-800 text-center">
          Contact Seller
        </h2>

        <div className="space-y-1">
          <label className="block text-gray-600">Name</label>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-400"
          />
        </div>

        <div className="space-y-1">
          <label className="block text-gray-600">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-400"
          />
        </div>

        <div className="space-y-1">
          <label className="block text-gray-600">Subject</label>
          <input
            type="text"
            placeholder="Subject"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-400"
          />
        </div>

        <div className="space-y-1">
          <label className="block text-gray-600">Message</label>
          <textarea
            rows="4"
            placeholder="Write your message here..."
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-400"
          ></textarea>
        </div>

        <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition">
          Send Message
        </button>
      </div>
    </div>
  );
};

export default Contact;
