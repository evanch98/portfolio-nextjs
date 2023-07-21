"use client";

import Button from "./Button";
import { FiHelpCircle } from "react-icons/fi";

const Nav = () => {
  return (
    <div className="w-[550px] h-6 bg-gradient-to-b from-[#D9D9D9] to-[#9A9A9A] flex items-center justify-between px-2">
      <div className="flex gap-1">
        <Button className="bg-red-600" />
        <Button className="bg-yellow-600" />
        <Button className="bg-green-600" />
      </div>
      <p className="text-sm">kyawthu</p>
      <FiHelpCircle />
    </div>
  );
};

export default Nav;
