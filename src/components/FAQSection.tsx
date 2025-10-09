import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS } from "@/constants/faq.constants";
import { FAQText } from "@/enums/faq.enums";

const FAQSection = () => {
  return (
    <section id="faq" className="py-16 md:py-24 px-4 bg-background">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <div className="section-divider">
            <p className="text-primary text-sm md:text-base font-semibold mb-3 uppercase tracking-wider pt-8">
              {FAQText.SECTION_SUBTITLE}
            </p>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground">
            {FAQText.SECTION_TITLE}
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {FAQS.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border border-border rounded-xl px-6 md:px-8 data-[state=open]:shadow-lg transition-shadow"
            >
              <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-foreground hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm md:text-base leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12">
          <p className="text-muted-foreground text-base md:text-lg">
            {FAQText.CONTACT_PROMPT}{" "}
            <a
              href="#contact"
              className="text-primary font-semibold hover:text-accent"
            >
              {FAQText.CONTACT_LINK_TEXT}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
