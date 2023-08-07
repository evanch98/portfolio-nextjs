"use client";

import Banner from "./components/banner";

const HomeClient = () => {
  return (
    <div className="w-full h-full mt-[64px] flex items-center justify-center">
      <div className="h-full max-w-[1240px] flex flex-col items-center justify-center">
        <Banner />
      </div>
    </div>
  );
};

export default HomeClient;
