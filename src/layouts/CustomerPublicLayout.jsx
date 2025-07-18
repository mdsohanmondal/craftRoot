import { useState } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { FiShoppingBag, FiShoppingCart } from 'react-icons/fi';
import { IoHome } from 'react-icons/io5';
import { MdOutlineContactSupport } from 'react-icons/md';
import { RiFileList3Line } from 'react-icons/ri';
import { Outlet } from 'react-router';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const CustomerPublicLayout = () => {
  const [isBig, setIsBig] = useState(true);

  const handleSidebarSize = (value) => {
    setIsBig(value);
  };

  const item = [
    { to: '/home', label: 'Home', icon: <IoHome /> },
    { to: '/shop', label: 'Shop/Products', icon: <FiShoppingBag /> },
    { to: '/cart', label: 'Cart', icon: <FiShoppingCart /> },
    { to: '/contact', label: 'Contact', icon: <MdOutlineContactSupport /> },
    {
      to: '/dashboard/customer/orders',
      label: 'My Order',
      icon: <RiFileList3Line />,
    },
    {
      to: '/dashboard/customer/wishlist',
      label: 'Wishlist',
      icon: <AiOutlineHeart />,
    },
    // {
    //   to: '/dashboard/customer/profile',
    //   label: 'Profile',
    //   icon: <CgProfile />,
    // },
    // {
    //   to: '/dashboard/customer/change-password',
    //   label: 'Log Out',
    //   icon: <FiLogOut />,
    // },
  ];

  return (
    <>
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 bg-red-400">
        <Navbar />
      </div>

      {/* Sidebar */}
      <div className="fixed top-16 left-0 h-[calc(100vh-4rem)] z-40 transition-all duration-300">
        <Sidebar item={item} getSideData={handleSidebarSize} />
      </div>

      {/* Main Content */}
      <div
        className={`pt-16 min-h-screen bg-gray-100 transition-all duration-300 ${
          isBig ? 'pl-56' : 'pl-16'
        }`}
      >
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default CustomerPublicLayout;
