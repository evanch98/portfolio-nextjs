"use client";

import { timeProvider } from "@/utils/dateProvider";
import Nav from "./Nav";

const Body = () => {
  return (
    <div className="w-[550px] h-[320px] bg-black rounded-lg overflow-hidden terminal-shadow">
      <Nav />
      <div className="w-full p-2 terminal text-sm text-white">
        <p>Last login: {timeProvider()}</p>
        <p>kyawthu ~ %</p>
      </div>
    </div>
  );
};

export default Body;
