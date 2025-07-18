import { Outlet } from 'react-router';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const MainLayout = () => {
  return (
    <>
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 bg-red-400">
        <Navbar />
      </div>

      {/* Fixed Sidebar */}
      <div className="fixed top-16 left-0 h-[calc(100vh-4rem)] bg-white shadow-md z-40">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="pl-64 pt-16 min-h-screen bg-gray-100">
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
