import { Container } from "@/components/common/container";
import { Header } from "@/components/common/header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  return (
    <Container className="py-[64px] md:py-[128px]">
      <div className="w-full md:px-[104px] text-[--black] flex flex-col items-center justify-center gap-y-[128px]">
        <Header
          title="F.A.Q"
          description="Here are some things you might want to know before sending me a message"
        />
        <div className="w-full">
          <Accordion
            type="single"
            collapsible
            className="md:w-[590px] space-y-[24px]"
          >
            <AccordionItem value="item-1" className="space-y-[8px]">
              <AccordionTrigger className="heading-6">
                What time zone are you in?
              </AccordionTrigger>
              <AccordionContent className="paragraph opacity-75">
                I live in Taiwan so UTC +8.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="space-y-[8px]">
              <AccordionTrigger className="heading-6">
                Do we make a contract?
              </AccordionTrigger>
              <AccordionContent className="paragraph opacity-75">
                Absolutely. A contract protects us both and ensure that both
                parties have a good collaboration.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="space-y-[8px]">
              <AccordionTrigger className="heading-6">
                How much do you charge for a website?
              </AccordionTrigger>
              <AccordionContent className="paragraph opacity-75">
                There is no fixed price. Every website is different and I'll
                only be able to give an accurate offer once we've talked.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="space-y-[8px]">
              <AccordionTrigger className="heading-6">
                Do you charge by the hour?
              </AccordionTrigger>
              <AccordionContent className="paragraph opacity-75">
                I do not charge by the hour. I prefer to eliminate the stress of
                counting the hours. Instead, I charge a flat fee per project
                regardless of duration.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="space-y-[8px]">
              <AccordionTrigger className="heading-6">
                Are you working with a team?
              </AccordionTrigger>
              <AccordionContent className="paragraph opacity-75">
                Not at the moment. I'm flying solo.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </Container>
  );
};

export default Faq;
