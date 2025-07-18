import { signOut } from 'firebase/auth';
import { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import ContextMenu from '../components/contextMenu/ContextMenu';
import PopupBar from '../components/popup/PopupBar';
import AuthContext from '../context/AuthContext';
import { auth } from '../services/firebase/firebaseServise';

const ArtisanNav = ({ toggleSidebar }) => {
  const { currentUser, userDetails } = useContext(AuthContext);
  const [isOpenContextMenu, setIsOpenContextMenu] = useState(false);
  const [isPopupBarOpen, setIsPopupBarOpen] = useState(false);
  const navigate = useNavigate();
  const profileRef = useRef(null);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  useEffect(() => {
    function handleClickOutside(e) {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setIsOpenContextMenu(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-400 bg-white">
      <h1 className="text-zinc-900 text-xl font-semibold">Artisan Dashboard</h1>
      <div className="flex items-center justify-center gap-5">
        <div className="avatar-section flex items-center justify-center gap-5">
          <div className="avatar w-9 h-9 rounded-full cursor-pointer">
            <img
              src={userDetails.profileImg}
              alt="avatar"
              className="w-10 h-10 rounded-full border-2 border-blue-500 cursor-pointer"
              ref={profileRef}
              onClick={() => setIsOpenContextMenu((prev) => !prev)}
            />
          </div>
          <div className="text-part">
            <h3 className="text-zinc-700">{currentUser.displayName}</h3>
            <p className="text-sm text-zinc-400"> {userDetails.role} </p>
          </div>
        </div>
        <button
          onClick={toggleSidebar}
          className="text-zinc-900 text-xl cursor-pointer"
        >
          ☰
        </button>

        {isOpenContextMenu && (
          <ContextMenu
            options={[
              {
                onClick: () => navigate('/dashboard/artisan/profile'),
                label: 'View Profile',
              },
              {
                onClick: () => setIsPopupBarOpen(true),
                label: 'Log out',
              },
            ]}
          />
        )}

        {isPopupBarOpen && (
          <PopupBar
            isOpen={isPopupBarOpen}
            onClose={() => setIsPopupBarOpen(false)}
            onConfirm={handleLogout}
            title="Log Out"
            message="Do you really want to logout?"
            confirmText="Yes, Logout"
            cancelText="No, stay there"
          />
        )}
      </div>
    </div>
  );
};

export default ArtisanNav;
