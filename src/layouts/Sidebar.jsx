import { Button, IconButton, Tooltip } from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from 'react-icons/md';
import { NavLink } from 'react-router';

const Sidebar = ({ getSideData, item }) => {
  const [isBig, setIsBig] = useState(true);
  useEffect(() => {
    getSideData(isBig);
  }, [isBig]);

  return (
    <div
      className={`bg-[#f3f4f6] ${
        isBig ? 'w-56' : 'w-16'
      } h-screen text-zinc-800 py-6 px-2 flex flex-col items-center gap-6 shadow-md transition-all duration-300 ease-in-out relative`}
    >
      {/* Toggle Button */}
      <div className="text-zinc-900 cursor-pointer">
        <IconButton
          variant="text"
          onClick={() => setIsBig(!isBig)}
          className="text-blue-700 flex items-center justify-center cursor-pointer"
        >
          {isBig ? (
            <MdKeyboardDoubleArrowLeft size={24} />
          ) : (
            <MdKeyboardDoubleArrowRight size={24} />
          )}
        </IconButton>
      </div>

      {/* Menu Items */}
      <div className="flex flex-col gap-3 w-full items-center">
        {item?.map((item, index) =>
          isBig ? (
            <NavLink
              key={index}
              to={item.to}
              className={({ isActive }) =>
                `w-full ${
                  isActive
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-white text-zinc-800'
                }`
              }
            >
              <Button
                fullWidth
                variant="gradient"
                className="py-3 rounded-xl flex items-center justify-start gap-4 px-5 text-base font-semibold transition-all duration-300 ease-in-out 
                text-zinc-900 hover:bg-blue-50 hover:shadow-md hover:text-blue-800 hover:scale-[1.02]
                focus:outline-none focus:ring-2 focus:ring-blue-300 
                active:scale-[0.97] active:bg-blue-800 active:text-white
                cursor-pointer"
              >
                {item.icon}
                {item.label}
              </Button>
            </NavLink>
          ) : (
            <Tooltip key={index} content={item.label} placement="right">
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `text-zinc-800 hover:text-blue-400  ${
                    isActive && 'text-blue-400'
                  }`
                }
              >
                <IconButton
                  variant="text"
                  className="flex items-center justify-center cursor-pointer"
                >
                  {item.icon}
                </IconButton>
              </NavLink>
            </Tooltip>
          )
        )}
      </div>
    </div>
  );
};

export default Sidebar;
