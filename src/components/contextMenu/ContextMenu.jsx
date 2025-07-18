const ContextMenu = ({ options = [], position = 'right' }) => {
  return (
    <div
      className={`absolute ${position}-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50`}
    >
      <ul className="py-2">
        {options.map((option, index) => (
          <li
            key={index}
            onClick={option.onClick}
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContextMenu;
