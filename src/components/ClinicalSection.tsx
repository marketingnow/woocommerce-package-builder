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
    <section className="bg-secondary/30 py-16 md:py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="bg-primary/10 text-primary px-4 py-2 text-sm font-bold uppercase tracking-wider rounded">
            Clinical Testing
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
          THE TERRAFREEZE
        </h2>
        <p className="text-center text-2xl md:text-3xl lg:text-4xl italic text-primary mb-12 md:mb-16">
          Standard
        </p>

        {/* Three Column Layout */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center">
          {/* Left Column - Standards */}
          <div className="space-y-8">
            {standards.map((item, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-2">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-primary uppercase tracking-wide mb-1">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Center Column - Product Image */}
          <div className="flex justify-center">
            <img 
              src={terrafreezeIngredients} 
              alt="TerraFreeze Extra Strength Pain Relief Cream with natural ingredients"
              className="w-full max-w-sm lg:max-w-md object-contain"
            />
          </div>

          {/* Right Column - Clinical Results */}
          <div className="bg-gradient-to-b from-primary/10 to-primary/5 rounded-2xl p-6 md:p-8 border border-primary/20">
            <h3 className="text-xl md:text-2xl font-bold text-primary text-center mb-2">
              Clinical Results, Not Empty Promises
            </h3>
            <p className="text-center text-muted-foreground mb-6">
              Tested on real people with real pain. Here's what they experienced:
            </p>

            <div className="space-y-4">
              {results.map((item, index) => (
                <div key={index} className="text-center">
                  <p className="text-3xl md:text-4xl font-bold text-foreground">
                    {item.percentage}
                  </p>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-primary/10 rounded-lg">
              <p className="text-sm text-center text-foreground leading-relaxed">
                Most "brands" hope you'll trust their marketing. We'd rather show you the numbers. When you address the root cause of pain, not just the surface, results like these become expected, not exceptional.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
