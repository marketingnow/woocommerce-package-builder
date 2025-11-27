import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, RefreshCw, Award, CheckCircle } from "lucide-react";

export const RiskReversal = () => {
  const guarantees = [
    {
      icon: Shield,
      title: "100% Money-Back Guarantee",
      description: "Not satisfied? Get a full refund within 30 days, no questions asked.",
    },
    {
      icon: RefreshCw,
      title: "Free Returns & Exchanges",
      description: "Easy returns and exchanges. We'll cover the shipping costs.",
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Certified materials and rigorous quality testing on every product.",
    },
  ];

  const alternatives = [
    { feature: "Premium Materials", us: true, them: false },
    { feature: "Money-Back Guarantee", us: true, them: false },
    { feature: "Free Shipping", us: true, them: true },
    { feature: "Bulk Discounts", us: true, them: false },
    { feature: "Lifetime Warranty", us: true, them: false },
  ];

  return (
    <section className="py-12 border-t border-border bg-muted/30">
      <div className="space-y-12">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold text-foreground">Risk-Free Purchase</h2>
          <p className="text-muted-foreground">Your satisfaction is guaranteed</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {guarantees.map((guarantee, index) => (
            <Card key={index} className="p-6 space-y-4 text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <guarantee.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-foreground">{guarantee.title}</h3>
              <p className="text-sm text-muted-foreground">{guarantee.description}</p>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-foreground mb-6">
            Why Choose Us Over Alternatives?
          </h3>
          <Card className="overflow-hidden">
            <div className="grid grid-cols-3 bg-muted font-semibold text-sm">
              <div className="p-4 text-foreground">Feature</div>
              <div className="p-4 text-center text-foreground border-l border-border">
                Us <Badge className="ml-2 bg-badge text-badge-foreground">Best</Badge>
              </div>
              <div className="p-4 text-center text-muted-foreground border-l border-border">Others</div>
            </div>
            {alternatives.map((alt, index) => (
              <div key={index} className="grid grid-cols-3 border-t border-border text-sm">
                <div className="p-4 text-foreground">{alt.feature}</div>
                <div className="p-4 text-center border-l border-border">
                  {alt.us ? <CheckCircle className="w-5 h-5 text-green-600 mx-auto" /> : "—"}
                </div>
                <div className="p-4 text-center border-l border-border">
                  {alt.them ? <CheckCircle className="w-5 h-5 text-green-600 mx-auto" /> : "—"}
                </div>
              </div>
            ))}
          </Card>
        </div>
      </div>
    </section>
  );
};
