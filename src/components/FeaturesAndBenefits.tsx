import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  benefit: string;
}

interface FeaturesAndBenefitsProps {
  features: Feature[];
}

export const FeaturesAndBenefits = ({ features }: FeaturesAndBenefitsProps) => {
  return (
    <section className="py-12 border-t border-border bg-muted/30">
      <div className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold text-foreground">Features + Benefits</h2>
          <p className="text-muted-foreground">Why this product will change your life</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 space-y-4 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              
              <div className="space-y-2">
                <h3 className="font-bold text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
              
              <div className="pt-2 border-t border-border">
                <p className="text-sm font-semibold text-foreground">
                  → {feature.benefit}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
