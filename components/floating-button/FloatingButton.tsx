"use client";

import { FiTool } from "react-icons/fi";

const FloatingButton = () => {
  return (
    <button className="fixed bottom-5 right-5 btn btn-secondary">
      <FiTool className="w-5 h-auto" />
    </button>
  );
};

export default FloatingButton;
