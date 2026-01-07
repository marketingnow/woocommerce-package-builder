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
    <section className="bg-[#f8f9fa] py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="bg-primary/10 text-primary px-4 py-2 text-sm font-bold uppercase tracking-wider rounded">
            Clinical Testing
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2">
          THE TERRAFREEZE
        </h2>
        <p className="text-center text-2xl md:text-3xl lg:text-4xl italic text-primary mb-12 md:mb-16">
          Standard
        </p>

        {/* Three Column Layout - Aligned */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-10 items-start">
            {/* Left Column - Standards */}
            <div className="space-y-6">
              {standards.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-primary uppercase tracking-wide mb-0.5">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-snug">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Center Column - Product Image */}
            <div className="flex justify-center items-start">
              <img 
                src={terrafreezeIngredients} 
                alt="TerraFreeze Extra Strength Pain Relief Cream with natural ingredients"
                className="w-full max-w-xs object-contain"
              />
            </div>

            {/* Right Column - Clinical Results */}
            <div className="bg-gradient-to-b from-primary/5 to-primary/10 rounded-xl p-6 border border-primary/10">
              <h3 className="text-lg font-bold text-primary text-center mb-1">
                Clinical Results, Not Empty Promises
              </h3>
              <p className="text-center text-sm text-muted-foreground mb-5">
                Tested on real people with real pain:
              </p>

              <div className="space-y-3">
                {results.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <p className="text-2xl font-bold text-foreground w-16 text-right">
                      {item.percentage}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-5 p-3 bg-white/60 rounded-lg">
                <p className="text-xs text-center text-foreground/80 leading-relaxed">
                  We'd rather show you the numbers than ask you to trust our marketing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
