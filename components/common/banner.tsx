import GitHubIcon from "@/components/common/icons/GitHubIcon";
import LinkedinIcon from "@/components/common/icons/LinkedinIcon";
import MailIcon from "@/components/common/icons/MailIcon";
import ResumeIcon from "@/components/common/icons/ResumeIcon";

interface BannerProps {
  heading: string;
  description: string;
  home?: boolean;
}

const Banner: React.FC<BannerProps> = ({
  heading,
  description,
  home = false,
}) => {
  return (
    <div className="w-full py-5 flex flex-col items-center justify-center bg-[#282B30] rounded-2xl gap-y-2">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">{heading}</h1>
      <p className="opacity-70 md:text-lg lg:text-xl">{description}</p>
      {home && (
        <div className="flex items-center justify-center gap-x-4">
          <GitHubIcon />
          <LinkedinIcon />
          <MailIcon />
          <ResumeIcon />
        </div>
      )}
    </div>
  );
};

export default Banner;
