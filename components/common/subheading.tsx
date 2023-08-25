import Link from "next/link";

/**
 * Props for the Subheading functional component
 */
interface SubheadingProps {
  title: string;
  moreHref?: string; // if there is more to see, provide the href for listings page
}

/**
 * This functional component is for the Subheading on each page.
 * @param param0 accepts the title of the Subheading
 * @param param1 accepts the link (optional)
 * @returns the React component
 */
const Subheading: React.FC<SubheadingProps> = ({
  title,
  moreHref,
}) => {
  return (
    <div className="flex items-center justify-between w-full">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">{title}</h2>
      {/* If the link is provided, it means the subheading requires (See all) */}
      {moreHref && (
        <Link href={moreHref} className="hover:opacity-70">
          See all
        </Link>
      )}
    </div>
  );
};

export default Subheading;
