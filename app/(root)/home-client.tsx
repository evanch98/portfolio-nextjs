"use client";

import Banner from "../../components/common/banner";

const HomeClient = () => {
  return (
    <div className="w-full h-full mt-[70px] flex items-center justify-center">
      <div className="h-full w-full max-w-[1024px] flex flex-col items-center justify-center px-2 lg:px-0">
        <Banner
          heading="Kyaw Thu"
          description="An aspiring front-end developer"
          home={true}
        />
      </div>
    </div>
  );
};

export default HomeClient;
