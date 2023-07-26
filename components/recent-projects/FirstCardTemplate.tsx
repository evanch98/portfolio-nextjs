"use client";

import airbnb from "@/public/assets/projects/airbnb.svg";
import Image from "next/image";

const FirstCardTemplate = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <Image src={airbnb} alt="Airbnb" />
    </div>
  );
};

export default FirstCardTemplate;
