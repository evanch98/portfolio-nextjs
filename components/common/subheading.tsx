import Link from "next/link";

interface SubheadingProps {
  title: string;
  moreHref?: string; // if there is more to see, provide the href for listings page
}

const Subheading: React.FC<SubheadingProps> = ({
  title,
  moreHref,
}) => {
  return (
    <div className="flex items-center justify-between w-full">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">{title}</h2>
      {moreHref && (
        <Link href={moreHref} className="hover:opacity-70">
          See all
        </Link>
      )}
    </div>
  );
};

export default Subheading;
