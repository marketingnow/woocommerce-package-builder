import { Check } from "lucide-react";
import terrafreezeIngredients from "@/assets/terrafreeze-ingredients.png";

const standards = [
  {
    title: "FDA REGISTERED",
    description: "Our facility meets all FDA requirements for quality and safety"
  },
  {
    title: "15 FORMULAS TESTED",
    description: "Before any product touches your skin"
  },
  {
    title: "3 YEARS R&D",
    description: "Of rigorous development and clinical testing"
  },
  {
    title: "100+ HOURS",
    description: "Of specialized training for our production team"
  }
];

const results = [
  { percentage: "97%", description: "Reported noticeable pain relief" },
  { percentage: "94%", description: "Experienced improved mobility" },
  { percentage: "93%", description: "Noticed reduced inflammation" },
  { percentage: "91%", description: "Saw overall quality of life improvement" }
];

export const ClinicalSection = () => {
  return (
    <section className="bg-gradient-to-b from-[#f0f7fc] to-[#e8f4f8] py-20 md:py-28">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <span className="bg-primary text-white px-6 py-2 text-sm font-bold uppercase tracking-wider rounded-full">
            Clinical Testing
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-center text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-3">
          THE TERRAFREEZE
        </h2>
        <p className="text-center text-3xl md:text-4xl lg:text-5xl italic text-primary mb-16 md:mb-20">
          Standard
        </p>

        {/* Three Column Layout */}
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-8 items-start">
          {/* Left Column - Standards (Centered) */}
          <div className="space-y-10">
            {standards.map((item, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <Check className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-primary uppercase tracking-wide mb-2">
                  {item.title}
                </h3>
                <p className="text-lg text-muted-foreground max-w-xs mx-auto">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Center Column - Product Image */}
          <div className="flex justify-center items-center">
            <img 
              src={terrafreezeIngredients} 
              alt="TerraFreeze Extra Strength Pain Relief Cream with natural ingredients"
              className="w-full max-w-sm lg:max-w-md object-contain"
            />
          </div>

          {/* Right Column - Clinical Results Card */}
          <div className="rounded-2xl overflow-hidden shadow-xl">
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-primary/80 px-6 py-6">
              <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-2">
                Clinical Results, Not Empty Promises
              </h3>
              <p className="text-center text-white/90 text-lg">
                Tested on real people with real pain. Here's what they experienced:
              </p>
            </div>

            {/* Results Body */}
            <div className="bg-gradient-to-b from-primary/10 to-primary/5 px-6 py-8">
              <div className="space-y-6">
                {results.map((item, index) => (
                  <div key={index} className="text-center">
                    <p className="text-4xl md:text-5xl font-bold text-foreground">
                      {item.percentage}
                    </p>
                    <p className="text-lg text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Bottom Quote */}
              <div className="mt-8 p-5 bg-primary/15 rounded-xl border border-primary/20">
                <p className="text-base text-center text-foreground leading-relaxed">
                  Most "brands" hope you'll trust their marketing. We'd rather show you the numbers. When you address the root cause of pain, not just the surface, results like these become expected, not exceptional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
