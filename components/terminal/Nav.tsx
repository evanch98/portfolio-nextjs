"use client";

import Button from "./Button";

const Nav = () => {
  return (
    <div className="w-[550px] h-6 bg-gradient-to-b from-[#D9D9D9] to-[#9A9A9A] flex items-center justify-start px-2">
      <div className="flex gap-1">
        <Button className="bg-red-600" />
        <Button className="bg-yellow-600" />
        <Button className="bg-green-600" />
      </div>
      <p className="text-sm w-full text-center">kyawthu</p>
    </div>
  );
};

export default Nav;
