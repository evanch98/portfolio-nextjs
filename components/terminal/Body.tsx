"use client";

import Nav from "./Nav";

const Body = () => {
  return (
    <div className="w-[550px] h-[320px] bg-black rounded-lg overflow-hidden">
      <Nav />
      <div className="w-full p-2 terminal text-sm text-white">
        <p>Last login: Tue Jan 18 14:49:46</p>
        <p>kyawthu ~ %</p>
      </div>
    </div>
  );
};

export default Body;
