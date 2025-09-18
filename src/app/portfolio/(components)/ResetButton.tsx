import React from "react";

interface ResetButtonProps {
  handleReset: () => void;
}

const ResetButton = ({ handleReset }: ResetButtonProps) => {
  return (
    <button
      onClick={handleReset}
      className="bg-gray-600 hover:bg-gray-500 text-white px-6 py-2 rounded-lg transition-colors">
      초기화
    </button>
  );
};

export default ResetButton;
