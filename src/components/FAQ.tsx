import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  const items = [
    {
      question: "How can TERRAFREEZE help with muscle and joint pain?",
      answer: "TERRAFREEZE combines Emu Oil, Arnica, and MSM to penetrate deep into tissues, reducing inflammation and providing fast relief for arthritis, muscle soreness, and joint stiffness.",
    },
    {
      question: "Is this supplement safe?",
      answer: "Yes, TERRAFREEZE is made with natural ingredients and manufactured in an FDA-registered facility. It's safe for daily use and has no known side effects when used as directed.",
    },
    {
      question: "How long will it take to see results?",
      answer: "Most users experience relief within minutes of application. For chronic conditions, optimal results are typically achieved within 2-4 weeks of consistent daily use.",
    },
    {
      question: "Can I use it with other medications?",
      answer: "TERRAFREEZE is a topical cream and generally safe to use alongside other medications. However, we recommend consulting your healthcare provider if you have concerns.",
    },
    {
      question: "How much does your product cost?",
      answer: "A single jar of TERRAFREEZE is $39.99. We offer multi-pack discounts: 3 jars for $99.97 (save $20) and 6 jars for $179.94 (save $60). Free shipping on all orders.",
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
            FREQUENTLY ASKED QUESTIONS
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-2">
          {items.map((item, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-border rounded-lg px-4 bg-card"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary transition-colors py-4">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};