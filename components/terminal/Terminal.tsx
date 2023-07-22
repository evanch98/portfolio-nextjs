"use client";

import Body from "./Body";

const Terminal = () => {
  return (
    <div className="w-full h-full flex justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40">
      <Body />
    </div>
  );
};

export default Terminal;
