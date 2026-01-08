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
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Badge - Centered at top */}
        <div className="flex justify-center mb-12">
          <span className="bg-primary text-white px-6 py-2 text-sm font-bold uppercase tracking-wider rounded-full">
            Clinical Testing
          </span>
        </div>

        {/* Three Column Layout */}
        <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-4 items-stretch">
          {/* Left Column - Headline + Standards */}
          <div className="flex flex-col">
            {/* Headline on Left */}
            <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-1">
              THE TERRAFREEZE
            </h2>
            <p className="text-center text-2xl md:text-3xl lg:text-4xl italic text-primary mb-10">
              Standard
            </p>

            {/* Standards List */}
            <div className="space-y-8 flex-1">
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
                  <p className="text-base text-muted-foreground max-w-[280px] mx-auto">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Center Column - Product Image */}
          <div className="flex justify-center items-center px-4">
            <img 
              src={terrafreezeIngredients} 
              alt="TerraFreeze Extra Strength Pain Relief Cream with natural ingredients"
              className="w-48 md:w-56 lg:w-64 object-contain"
            />
          </div>

          {/* Right Column - Clinical Results Card */}
          <div className="rounded-2xl overflow-hidden shadow-xl self-stretch flex flex-col">
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-primary/80 px-5 py-5">
              <h3 className="text-xl md:text-2xl font-bold text-white text-center mb-1">
                Clinical Results, Not Empty Promises
              </h3>
              <p className="text-center text-white/90 text-sm md:text-base">
                Tested on real people with real pain. Here's what they experienced:
              </p>
            </div>

            {/* Results Body */}
            <div className="bg-gradient-to-b from-primary/10 to-primary/5 px-5 py-6 flex-1 flex flex-col justify-between">
              <div className="space-y-4">
                {results.map((item, index) => (
                  <div key={index} className="text-center">
                    <p className="text-3xl md:text-4xl font-bold text-foreground">
                      {item.percentage}
                    </p>
                    <p className="text-sm md:text-base text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Bottom Quote */}
              <div className="mt-6 p-4 bg-primary/15 rounded-xl border border-primary/20">
                <p className="text-sm text-center text-foreground leading-relaxed">
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
