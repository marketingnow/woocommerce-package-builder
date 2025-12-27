import { Droplets, Leaf, Sparkles } from "lucide-react";

export const FeaturesAndBenefits = () => {
  const ingredients = [
    {
      icon: Droplets,
      name: "Emu Oil",
      description: "Deeply penetrating carrier oil that delivers active ingredients directly to inflamed tissues for maximum relief.",
    },
    {
      icon: Leaf,
      name: "Arnica Montana",
      description: "Natural anti-inflammatory herb used for centuries to reduce swelling, bruising, and muscle pain.",
    },
    {
      icon: Sparkles,
      name: "MSM",
      description: "Supports joint health, reduces inflammation, and helps build collagen for healthy connective tissue.",
    },
  ];

  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
            MADE FROM NATURAL INGREDIENTS YOUR BODY NEEDS
          </h2>
          <p className="text-muted-foreground">Natural ingredients for natural relief</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {ingredients.map((ingredient, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
                <ingredient.icon className="w-10 h-10 text-accent" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">{ingredient.name}</h3>
              <p className="text-sm text-muted-foreground">{ingredient.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};