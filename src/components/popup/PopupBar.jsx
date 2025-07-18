import { MdOutlineWarningAmber } from 'react-icons/md';

const PopupBar = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
}) => {
  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#ffffff05] bg-opacity-20 backdrop-blur-xl"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="popupBar bg-white p-6 rounded-xl shadow-lg w-full max-w-sm mx-auto text-center space-y-4"
      >
        <h1 className="flex items-center justify-center gap-2 text-xl font-semibold text-red-600">
          <MdOutlineWarningAmber className="text-2xl" />
          {title}
        </h1>
        <p className="text-gray-600">{message}</p>
        <div className="flex justify-center gap-4 mt-4">
          <button
            onClick={onConfirm}
            className="bg-red-600 text-white hover:bg-red-700 duration-200 px-4 py-2 text-sm rounded"
          >
            {confirmText}
          </button>
          <button
            onClick={onClose}
            className="border border-gray-400 text-gray-700 hover:bg-gray-100 px-4 py-2 text-sm rounded"
          >
            {cancelText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupBar;
