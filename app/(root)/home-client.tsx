"use client";

import Subheading from "@/components/common/subheading";
import Banner from "@/components/common/banner";

const HomeClient = () => {
  return (
    <div className="w-full h-full mt-[70px] flex items-center justify-center">
      <div className="h-full w-full max-w-[1024px] flex flex-col items-center justify-center px-2 lg:px-0 gap-5">
        <Banner
          heading="Kyaw Thu"
          description="An aspiring front-end developer"
          home={true}
        />
        <section className="w-full">
          <Subheading />
        </section>
      </div>
    </div>
  );
};

export default HomeClient;
