import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const Modal = ({ children, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  },[])

  const handleClose = () => {
    setIsVisible(false);

    setTimeout(() => {
        onClose();
    },300)
  }

  return ReactDOM.createPortal(
    <div className="fixed w-full h-full inset-0 bg-black p-3 flex justify-center items-center" onClick={handleClose}>
      <div className="w-2/3 p-5 bg-white border-gray-400 rounded-xl" onClick={e => e.stopPropagation()}>
        <button
          onClick={handleClose}
          className="bg-red-600 text-red-200 font-semibold text-lg"
        >
          Close Modal
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
