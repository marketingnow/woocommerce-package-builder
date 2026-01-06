import { Card } from "@/components/ui/card";

export const FeaturesAndBenefits = () => {
  const ingredients = [
    {
      category: "DEEP PENETRATION",
      name: "Emu Oil",
      description: "Carries active ingredients through all 7 layers of skin directly to inflamed tissues. This results in faster relief, reduced swelling, and pain that actually goes away.",
      badge: "Clinical-Grade Carrier",
      badgeColor: "bg-primary",
      image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=200&h=200&fit=crop&q=80"
    },
    {
      category: "ANTI-INFLAMMATORY",
      name: "Arnica Montana",
      description: "Powerful natural herb that reduces inflammation and bruising at the cellular level. This results in less swelling, faster healing, and relief that lasts for hours.",
      badge: "Used for 500+ years",
      badgeColor: "bg-success",
      image: "https://images.unsplash.com/photo-1518882605630-8eb589210781?w=200&h=200&fit=crop&q=80"
    },
    {
      category: "JOINT SUPPORT",
      name: "MSM & Glucosamine",
      description: "Supports joint health by rebuilding cartilage and reducing oxidative stress. This results in improved mobility, less stiffness, and long-term joint protection.",
      badge: "Supports cellular repair",
      badgeColor: "bg-accent",
      image: "https://images.unsplash.com/photo-1559757175-7cb05f416679?w=200&h=200&fit=crop&q=80"
    },
  ];

  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Badge */}
        <div className="text-center mb-4">
          <span className="inline-block px-4 py-1.5 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider rounded-full">
            What's Inside
          </span>
        </div>

        {/* Headline */}
        <div className="text-center mb-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Only 6 Ingredients. Zero Fillers. <em className="text-primary">All Active.</em>
          </h2>
        </div>

        {/* Subheadline */}
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-center mb-12">
          We don't hide behind 30-ingredient labels. TERRAFREEZE™ contains only clinically-proven active ingredients, each one selected to deliver real pain relief from within.
        </p>

        {/* 3 Ingredient Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {ingredients.map((ingredient, index) => (
            <Card 
              key={index} 
              className="p-6 bg-card border border-border shadow-md hover:shadow-xl transition-all hover:-translate-y-1 overflow-hidden relative"
            >
              {/* Category Badge */}
              <div className="mb-4">
                <span className={`inline-block px-3 py-1 ${ingredient.badgeColor} text-white text-xs font-bold uppercase tracking-wide rounded`}>
                  {ingredient.category}
                </span>
              </div>

              {/* Ingredient Name */}
              <h3 className="text-xl font-bold text-foreground mb-3">
                {ingredient.name}
              </h3>

              {/* Description */}
              <p className="text-base text-muted-foreground leading-relaxed mb-6">
                {ingredient.description}
              </p>

              {/* Bottom section with badge and image */}
              <div className="flex items-end justify-between mt-auto">
                <span className="text-sm font-medium text-primary">
                  {ingredient.badge}
                </span>
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-border shadow-lg">
                  <img 
                    src={ingredient.image} 
                    alt={ingredient.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Ingredients List */}
        <div className="bg-card rounded-xl p-6 border border-border max-w-2xl mx-auto mb-10">
          <h4 className="text-lg font-bold text-foreground text-center mb-4">
            Also Contains:
          </h4>
          <div className="flex flex-wrap justify-center gap-3">
            {["Menthol", "Camphor", "Vitamin E"].map((item, i) => (
              <span 
                key={i}
                className="px-4 py-2 bg-secondary rounded-full text-sm font-medium text-foreground border border-border"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button className="bg-gradient-to-r from-cta to-amber-500 hover:from-amber-500 hover:to-cta text-black font-bold py-4 px-10 rounded-lg text-lg uppercase transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            GET PAIN RELIEF NOW
          </button>
        </div>
      </div>
    </section>
  );
};
