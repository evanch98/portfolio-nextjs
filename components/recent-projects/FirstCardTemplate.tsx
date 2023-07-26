"use client";

import airbnb from "@/public/assets/projects/airbnb.svg";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";

interface FirstCardTemplateProps {
  imageSrc: StaticImport;
  imageAlt: string;
  pageUrl: string;
}

const FirstCardTemplate: React.FC<FirstCardTemplateProps> = ({
  imageSrc,
  imageAlt,
  pageUrl,
}) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative group">
      <Image
        src={imageSrc}
        alt={imageAlt}
        className="group-hover:opacity-0 transition"
      />
      <Link
        href={pageUrl}
        className="opacity-0 group-hover:opacity-100 hover:underline absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition"
      >
        Learn more
      </Link>
    </div>
  );
};

export default FirstCardTemplate;
