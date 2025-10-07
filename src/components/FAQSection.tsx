import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is 3PL and how can it benefit my business?",
    answer: "Third-Party Logistics (3PL) refers to outsourcing logistics and supply chain management to a specialized provider. It benefits your business by reducing operational costs, improving efficiency, providing scalability, and allowing you to focus on core business activities while we handle warehousing, shipping, and fulfillment."
  },
  {
    question: "What types of products can you handle?",
    answer: "We handle a wide variety of products including consumer goods, electronics, apparel, food items, industrial supplies, and more. Our warehouses are equipped with climate control and specialized storage solutions to accommodate different product requirements."
  },
  {
    question: "How does your pricing structure work?",
    answer: "Our pricing is customized based on your specific needs including storage space, order volume, shipping destinations, and special handling requirements. We offer transparent pricing with no hidden fees. Contact us for a detailed quote tailored to your business."
  },
  {
    question: "Can you integrate with my e-commerce platform?",
    answer: "Yes! We seamlessly integrate with major e-commerce platforms including Shopify, WooCommerce, Amazon, eBay, and more. Our system provides real-time inventory updates and automatic order processing to streamline your fulfillment operations."
  },
  {
    question: "What are your shipping options and delivery times?",
    answer: "We offer multiple shipping options including standard, expedited, and express delivery through partnerships with major carriers like DHL, FedEx, and USPS. Delivery times vary by destination and shipping method, with domestic deliveries typically ranging from 1-7 business days."
  },
  {
    question: "How do you handle returns and quality control?",
    answer: "We have comprehensive RMA (Return Merchandise Authorization) processes in place. Our team conducts thorough quality control checks on all incoming inventory and returned items. We provide detailed reports on product conditions and can handle restocking, disposal, or return-to-sender based on your preferences."
  }
];

const FAQSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-background">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <p className="text-primary text-sm md:text-base font-semibold mb-3 uppercase tracking-wider">
            Have Any Questions?
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Frequently Asked Questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
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
            Still have any questions?{" "}
            <a
              href="#contact"
              className="text-primary font-semibold hover:underline"
            >
              Contact us
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;