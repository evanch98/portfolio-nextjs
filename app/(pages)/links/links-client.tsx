"use client";

import Banner from "@/components/common/banner";
import Subheading from "@/components/common/subheading";

const LinksClient = () => {
  return (
    <div className="w-full h-full mt-[70px] mb-5 flex items-center justify-center">
      <div className="h-full w-full max-w-[1024px] flex flex-col items-center justify-center px-2 lg:px-0 gap-5">
        <Banner
          heading="Links"
          description="Checkout out my social media links"
          home={false}
        />
        <section className="w-full flex flex-col gap-5">
          <Subheading title="Links" />
        </section>
      </div>
    </div>
  );
};

export default LinksClient;
