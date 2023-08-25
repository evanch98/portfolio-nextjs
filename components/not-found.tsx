"use client";

import Banner from "@/components/common/banner";

/**
 * For the Custom 404 page.
 * For now, it is a simple page with some texts inside the Banner.
 * ***Subject to CHANGE in the future***
 */
const NotFound = () => {
  return (
    <div className="w-full h-full mt-[70px] mb-5 flex items-center justify-center">
      <div className="h-full w-full max-w-[1024px] flex flex-col items-center justify-center px-2 lg:px-0 gap-5">
        <Banner
          heading="Something's wrong here..."
          description="Sorry, but the page that you requested doesn't exist."
          home={false}
        />
      </div>
    </div>
  );
};

export default NotFound;
