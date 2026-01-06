import { Quote } from "lucide-react";

export const TrustBanner = () => {
  return (
    <section className="bg-primary py-10 md:py-12">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <div className="flex justify-center mb-4">
          <Quote className="w-10 h-10 text-primary-foreground/60" />
        </div>
        <blockquote className="text-xl md:text-2xl lg:text-3xl font-medium text-primary-foreground leading-relaxed mb-6">
          "TERRAFREEZE is one of the few topical pain relief products I genuinely recommend to my patients. 
          It combines natural anti-inflammatory ingredients that address pain at its source."
        </blockquote>
        <p className="text-primary-foreground/80 font-semibold">
          — Dr. Michael Chen, Board-Certified Pain Specialist
        </p>
      </div>
    </section>
  );
};
