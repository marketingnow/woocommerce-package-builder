import { Droplets, Leaf, Sparkles, Flame, Shield, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";

export const FeaturesAndBenefits = () => {
  const ingredients = [
    {
      icon: Droplets,
      name: "Emu Oil",
      description: "Deeply penetrating carrier oil that delivers active ingredients directly to inflamed tissues.",
    },
    {
      icon: Leaf,
      name: "Arnica Montana",
      description: "Natural anti-inflammatory herb used for centuries to reduce swelling and muscle pain.",
    },
    {
      icon: Sparkles,
      name: "MSM",
      description: "Supports joint health, reduces inflammation, and helps build healthy connective tissue.",
    },
    {
      icon: Flame,
      name: "Menthol",
      description: "Provides immediate cooling sensation for fast-acting temporary relief from pain.",
    },
    {
      icon: Shield,
      name: "Glucosamine",
      description: "Essential building block for cartilage repair and long-term joint health support.",
    },
    {
      icon: Heart,
      name: "Vitamin E",
      description: "Powerful antioxidant that protects cells and promotes skin healing and recovery.",
    },
  ];

  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Headline */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">
            NATURAL INGREDIENTS YOUR BODY NEEDS
          </h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Each ingredient is carefully selected to provide maximum relief and promote natural healing
          </p>
        </div>

        {/* 6 Cards in 3x2 Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {ingredients.map((ingredient, index) => (
            <Card key={index} className="p-6 bg-card border-0 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <ingredient.icon className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{ingredient.name}</h3>
                  <p className="text-base text-foreground leading-relaxed">{ingredient.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button className="bg-cta hover:bg-cta-hover text-cta-foreground font-bold py-4 px-10 rounded-lg text-lg uppercase transition-colors shadow-lg">
            GET PAIN RELIEF NOW
          </button>
        </div>
      </div>
    </section>
  );
};
