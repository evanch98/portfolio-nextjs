import GitHubIcon from "@/components/common/icons/GitHubIcon";
import LinkedinIcon from "@/components/common/icons/LinkedinIcon";
import MailIcon from "@/components/common/icons/MailIcon";
import ResumeIcon from "@/components/common/icons/ResumeIcon";

const Banner = () => {
  return (
    <div className="w-full py-5 flex flex-col items-center justify-center bg-[#282B30] rounded-2xl gap-y-2">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">Kyaw Thu</h1>
      <p className="opacity-70 md:text-lg lg:text-xl">An aspiring front-end developer</p>
      <div className="flex items-center justify-center gap-x-4">
        <GitHubIcon />
        <LinkedinIcon />
        <MailIcon />
        <ResumeIcon />
      </div>
    </div>
  );
};

export default Banner;
