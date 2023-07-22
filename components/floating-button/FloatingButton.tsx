"use client";

import { FiTool } from "react-icons/fi";

const FloatingButton = () => {
  return (
    <button className="fixed bottom-5 right-5 w-12 h-12 rounded-full btn-secondary flex items-center justify-center">
      <FiTool className="w-5 h-auto" />
    </button>
  );
};

export default FloatingButton;
