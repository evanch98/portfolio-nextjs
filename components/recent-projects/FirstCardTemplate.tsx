"use client";

import airbnb from "@/public/assets/projects/airbnb.svg";
import Image from "next/image";
import Link from "next/link";

const FirstCardTemplate = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative group">
      <Image
        src={airbnb}
        alt="Airbnb"
        className="group-hover:opacity-0 transition"
      />
      <Link
        href="/airbnb"
        className="opacity-0 group-hover:opacity-100 hover:underline absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition"
      >
        Learn more
      </Link>
    </div>
  );
};

export default FirstCardTemplate;
