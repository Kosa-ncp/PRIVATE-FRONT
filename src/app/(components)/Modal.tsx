"use client";

import { useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onToggleModal: () => void;
  title?: string;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onToggleModal, title, children }: ModalProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onToggleModal();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onToggleModal]);

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onToggleModal();
    }
  };

  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center z-10">
      <div
        onClick={handleBackdropClick}
        className="fixed inset-0 bg-black opacity-70 flex justify-center items-center z-50"></div>
      <div
        className="bg-white opacity-100 rounded-lg max-w-7xl px-4 sm:px-6 lg:px-8 py-8 mx-4 p-6 shadow-xl z-150"
        onClick={handleModalClick}>
        {title && (
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-900">{title}</h2>
            <button
              onClick={onToggleModal}
              className="text-gray-400 hover:text-gray-600 text-2xl font-bold">
              ×
            </button>
          </div>
        )}
        <div className="">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
