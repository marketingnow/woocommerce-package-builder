import { Check, X } from "lucide-react";
import { Card } from "@/components/ui/card";
import terrafreeze from "@/assets/terrafreeze-product.png";

export const RiskReversal = () => {
  const terrafreezeFeatures = [
    "Fast-acting pain relief",
    "100% natural ingredients",
    "No harmful side effects",
    "Deep penetrating formula",
    "Long-lasting relief",
    "30-day money back guarantee",
  ];

  const alternativesFeatures = [
    { text: "Takes hours to work", has: false },
    { text: "Chemical ingredients", has: false },
    { text: "May cause irritation", has: false },
    { text: "Surface level only", has: false },
    { text: "Wears off quickly", has: false },
    { text: "No guarantee", has: false },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">
            INVALIDATE OTHER ALTERNATIVES
          </h2>
          <p className="text-lg text-foreground">
            See why TERRAFREEZE stands apart from typical pain relief products
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* TERRAFREEZE Card */}
          <Card className="p-8 border-2 border-accent bg-card shadow-lg">
            <div className="text-center mb-6">
              <img
                src={terrafreeze}
                alt="TERRAFREEZE"
                className="w-32 h-32 object-contain mx-auto mb-4"
              />
              <h3 className="text-2xl font-bold text-primary">TERRAFREEZE</h3>
            </div>
            <ul className="space-y-4">
              {terrafreezeFeatures.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-success" />
                  </div>
                  <span className="text-foreground font-medium">{feature}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Other Alternatives Card */}
          <Card className="p-8 border border-border bg-secondary/50 shadow-md">
            <div className="text-center mb-6">
              <div className="w-32 h-32 mx-auto mb-4 bg-muted rounded-lg flex items-center justify-center">
                <span className="text-4xl">❓</span>
              </div>
              <h3 className="text-2xl font-bold text-muted-foreground">Other Alternatives</h3>
            </div>
            <ul className="space-y-4">
              {alternativesFeatures.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0">
                    <X className="w-4 h-4 text-destructive" />
                  </div>
                  <span className="text-muted-foreground font-medium">{feature.text}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* Comparison Chart Placeholder */}
        <Card className="p-8 bg-card border-0 shadow-md">
          <h3 className="text-2xl font-bold text-primary text-center mb-6">
            DETAILED COMPARISON CHART
          </h3>
          <div className="text-center p-8 bg-secondary rounded-xl border border-border">
            <p className="text-primary font-semibold mb-2">📊 Comparison Chart Placeholder</p>
            <p className="text-sm text-muted-foreground">
              [Insert detailed product comparison table HTML here]
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};
