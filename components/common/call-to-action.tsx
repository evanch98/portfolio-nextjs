import { FaArrowRight } from "react-icons/fa6";
import Button from "./button";
import { Container } from "./container";
import Link from "next/link";

export const CallToAction = () => {
  return (
    <Container className="py-[128px]">
      <div className="w-full px-[104px]">
        <div className="flex flex-col gap-y-[24px] w-[690px]">
          <h1 className="heading-2">Got a project in mind?</h1>
          <div className="w-full flex flex-col gap-y-[48px]">
            <p className="paragraph opacity-75">
              If you're looking for a designer and developer who is passionate
              about helping you business grow, let's talk.
            </p>
            <Link href="/contact">
              <Button variant="normalWithIcon">
                Let's Talk <FaArrowRight className="w-[20px] h-[20px]" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};
