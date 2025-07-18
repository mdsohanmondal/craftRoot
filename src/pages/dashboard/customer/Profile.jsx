const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-md space-y-6 text-sm">
        <div className="flex items-center space-x-4">
          <img
            src="https://i.pravatar.cc/100"
            alt="Profile"
            className="w-16 h-16 rounded-full border"
          />
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Jane Doe</h2>
            <p className="text-gray-500 text-sm">janedoe@example.com</p>
          </div>
        </div>

        <div className="space-y-2">
          <div>
            <label className="block text-gray-600">Phone Number</label>
            <input
              type="text"
              value="+1 123 456 7890"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-400"
              readOnly
            />
          </div>

          <div>
            <label className="block text-gray-600">Address</label>
            <input
              type="text"
              value="123 Main Street, City, Country"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-400"
              readOnly
            />
          </div>

          <div>
            <label className="block text-gray-600">Joined On</label>
            <input
              type="text"
              value="July 10, 2023"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-400"
              readOnly
            />
          </div>
        </div>

        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;
