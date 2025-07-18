import { useState } from 'react';
import {
  IoAddCircleOutline,
  IoBagHandleOutline,
  IoCashOutline,
  IoCubeOutline,
  IoPersonOutline,
} from 'react-icons/io5';
import { Outlet } from 'react-router';
import ArtisanNav from './ArtisanNav';
import Sidebar from './Sidebar';

const ArtisanDashboardLayout = () => {
  const [sidebarWidth, setSidebarWidth] = useState(true); // true = big (w-56), false = small (w-16)

  const handleSidebarResize = (isBig) => {
    setSidebarWidth(isBig);
  };

  const item = [
    {
      to: '/dashboard/artisan/profile',
      label: 'Profile',
      icon: <IoPersonOutline />,
    },
    {
      to: '/dashboard/artisan/add-product',
      label: 'Add Product',
      icon: <IoAddCircleOutline />,
    },
    {
      to: '/dashboard/artisan/own-products',
      label: 'My Products',
      icon: <IoCubeOutline />,
    },
    {
      to: '/dashboard/artisan/artisans-ordered',
      label: 'Orders',
      icon: <IoBagHandleOutline />,
    },
    {
      to: '/dashboard/artisan/earning',
      label: 'My Earn',
      icon: <IoCashOutline />,
    },
  ];

  return (
    <>
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 text-zinc-700">
        <ArtisanNav />
      </div>

      {/* Fixed Sidebar */}
      <div className="fixed top-16 left-0 h-[calc(100vh-4rem)] z-40 transition-all duration-300">
        <Sidebar getSideData={handleSidebarResize} item={item} />
      </div>

      {/* Main Content */}
      <div
        className={`pt-16 min-h-screen bg-gray-100 transition-all duration-300 ${
          sidebarWidth ? 'pl-56' : 'pl-16'
        }`}
      >
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default ArtisanDashboardLayout;
