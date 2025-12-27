import { Check, X } from "lucide-react";
import { Card } from "@/components/ui/card";
import terrafreeze from "@/assets/terrafreeze-product.png";

export const RiskReversal = () => {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={terrafreeze}
              alt="TERRAFREEZE Pain Relief Cream"
              className="w-full max-w-sm mx-auto"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              TERRAFREEZE EXTRA STRENGTH
            </h2>
            <p className="text-primary-foreground/80">
              Reclaim Your Active Life With Our Powerful, Fast-Acting Pain Relief Formula. 
              Trusted by thousands for arthritis, muscle pain, and joint inflammation.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-success" />
                <span>Fast-acting pain relief within minutes</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-success" />
                <span>Contains Emu Oil and Arnica for deep healing</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-success" />
                <span>Produced in FDA-certified manufacturing facility</span>
              </li>
            </ul>
            <button className="bg-cta hover:bg-cta-hover text-cta-foreground font-bold py-4 px-8 rounded-lg text-lg uppercase transition-colors shadow-lg">
              RECLAIM MY MENTAL & COGNITIVE HEALTH
            </button>
          </div>
        </div>
      </div>

      {/* Comparison Chart Placeholder */}
      <div className="container mx-auto px-4 max-w-4xl mt-16">
        <Card className="p-8 bg-background text-foreground">
          <h3 className="text-2xl font-bold text-primary text-center mb-6">
            TERRAFREEZE vs Other Pain Relief Products
          </h3>
          <div className="text-center p-8 bg-secondary rounded-lg">
            <p className="text-primary font-semibold mb-2">📊 Comparison Chart Placeholder</p>
            <p className="text-sm text-muted-foreground">
              [Insert product comparison table HTML here]
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};
