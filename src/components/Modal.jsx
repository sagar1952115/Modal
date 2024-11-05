// Modal.js
import React, { useEffect } from "react";
import "../App.css";

const Modal = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 p-5 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={onClose}
    >
      <div
        className="relative flex flex-col gap-8  bg-white rounded-lg shadow-lg w-full max-w-6xl mx-4 h-auto sm:mx-auto p-6"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-500 hover:text-gray-700 focus:outline-none"
          aria-label="Close modal"
        >
          <img src="/assets/cross.svg" alt="" />
        </button>

        <h2
          id="modal-title"
          className="text-3xl font-semibold text-black"
        >
          {title}
        </h2>

        <div className="max-h-96 custom-scroll overflow-y-auto">{children}</div>
        <div className=" justify-end flex gap-1 mt-auto">
          <button
            onClick={onClose}
            className="hover:opacity-70 cursor-pointer px-4 p-2 rounded-md"
          >
            Cancel
          </button>
          <button
            onClick={onClose}
            className="bg-black cursor-pointer  border px-4 p-2 rounded-md hover:opacity-80 border-black text-white"
          >
            Ok
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
