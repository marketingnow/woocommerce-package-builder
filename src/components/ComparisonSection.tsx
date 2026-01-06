import { Check, X } from "lucide-react";
import terrafreezeProduct from "@/assets/terrafreeze-product.png";
import otherCreams from "@/assets/other-creams.jpg";

const comparisonData = [
  {
    feature: "Fast-Acting Relief",
    terrafreeze: true,
    others: false,
  },
  {
    feature: "100% Natural Ingredients",
    terrafreeze: true,
    others: false,
  },
  {
    feature: "Deep Penetrating Formula",
    terrafreeze: true,
    others: false,
  },
  {
    feature: "No Harmful Side Effects",
    terrafreeze: true,
    others: false,
  },
  {
    feature: "Long-Lasting Relief (8+ hours)",
    terrafreeze: true,
    others: false,
  },
  {
    feature: "Contains Emu Oil & Arnica",
    terrafreeze: true,
    others: false,
  },
  {
    feature: "180-Day Money Back Guarantee",
    terrafreeze: true,
    others: false,
  },
  {
    feature: "Free Shipping Available",
    terrafreeze: true,
    others: false,
  },
];

export const ComparisonSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
            THE DIFFERENCE
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why TERRAFREEZE <span className="text-primary">Outperforms</span> The Competition
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See why thousands choose TERRAFREEZE over typical pain relief products
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-lg">
          {/* Table Header with Product Images */}
          <div className="grid grid-cols-3 bg-secondary">
            <div className="p-4 md:p-5 font-semibold text-foreground text-left flex items-center">
              Features
            </div>
            <div className="p-4 md:p-5 font-bold text-primary text-center border-x border-border bg-primary/5">
              <div className="flex flex-col items-center gap-2">
                <img 
                  src={terrafreezeProduct} 
                  alt="TERRAFREEZE™" 
                  className="w-16 h-16 md:w-20 md:h-20 object-contain"
                />
                <span className="text-sm md:text-base">TERRAFREEZE™</span>
              </div>
            </div>
            <div className="p-4 md:p-5 font-semibold text-muted-foreground text-center">
              <div className="flex flex-col items-center gap-2">
                <img 
                  src={otherCreams} 
                  alt="Other Creams" 
                  className="w-16 h-16 md:w-20 md:h-20 object-contain rounded-lg opacity-60"
                />
                <span className="text-sm md:text-base">Other Creams</span>
              </div>
            </div>
          </div>

          {/* Table Body */}
          {comparisonData.map((row, index) => (
            <div 
              key={index} 
              className={`grid grid-cols-3 ${index !== comparisonData.length - 1 ? 'border-b border-border' : ''}`}
            >
              <div className="p-4 md:p-5 text-sm md:text-base text-foreground font-medium">
                {row.feature}
              </div>
              <div className="p-4 md:p-5 flex justify-center items-center border-x border-border bg-success/5">
                <div className="w-7 h-7 rounded-full bg-success/20 flex items-center justify-center">
                  <Check className="w-4 h-4 text-success" />
                </div>
              </div>
              <div className="p-4 md:p-5 flex justify-center items-center">
                <div className="w-7 h-7 rounded-full bg-destructive/10 flex items-center justify-center">
                  <X className="w-4 h-4 text-destructive" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-8">
          <p className="text-muted-foreground mb-4">
            Ready to experience the TERRAFREEZE difference?
          </p>
          <a 
            href="#buy-box" 
            className="inline-block py-3 px-8 bg-gradient-to-r from-cta to-amber-500 text-black font-bold uppercase rounded-lg hover:shadow-lg transition-all hover:-translate-y-0.5"
          >
            Try Risk-Free Today
          </a>
        </div>
      </div>
    </section>
  );
};
