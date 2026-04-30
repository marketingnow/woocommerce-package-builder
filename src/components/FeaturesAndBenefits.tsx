import { Card } from "@/components/ui/card";
import emuOilImage from "@/assets/ingredient-emu-oil.jpg";
import arnicaImage from "@/assets/ingredient-arnica.jpg";
import mentholImage from "@/assets/ingredient-menthol.jpg";
import msmImage from "@/assets/ingredient-msm.jpg";
import methylImage from "@/assets/ingredient-methyl.jpg";
import vitaminsImage from "@/assets/ingredient-vitamins.jpg";
import aloeVeraImage from "@/assets/ingredient-aloe-vera.jpg";
import boswelliaImage from "@/assets/ingredient-boswellia.jpg";
import chamomileImage from "@/assets/ingredient-chamomile.jpg";
import gingerImage from "@/assets/ingredient-ginger.jpg";
import turmericImage from "@/assets/ingredient-turmeric.jpg";
import histamineImage from "@/assets/ingredient-histamine.jpg";

const ingredients = [
  {
    category: "COOLING RELIEF",
    name: "Menthol 10%",
    description:
      "Provides immediate cooling sensation that soothes pain on contact. Creates a refreshing feeling while blocking pain signals to the brain.",
    badge: "Instant cooling action",
    image: mentholImage,
    link: "https://terrafreeze.com/ingredients/menthol",
  },
  {
    category: "WARMING ACTION",
    name: "Methyl Salicylate 10%",
    description:
      "Generates a warming sensation to increase blood flow and ease deep joint stiffness. Provides lasting relief that penetrates deep into muscles.",
    badge: "Improves circulation",
    image: methylImage,
    link: "https://terrafreeze.com/ingredients/methyl-salicylate",
  },
  {
    category: "ANTI-INFLAMMATORY",
    name: "Arnica Montana",
    description:
      "Powerful natural herb that reduces inflammation and bruising at the cellular level. Less swelling, faster healing, and relief that lasts for hours.",
    badge: "Used for 500+ years",
    image: arnicaImage,
    link: "https://terrafreeze.com/ingredients/arnica",
  },
  {
    category: "DEEP PENETRATION",
    name: "Emu Oil",
    description:
      "Carries active ingredients through all 7 layers of skin directly to inflamed tissues. Faster relief, reduced swelling, and pain that actually goes away.",
    badge: "Clinical-Grade Carrier",
    image: emuOilImage,
    link: "https://terrafreeze.com/ingredients/emu-oil",
  },
  {
    category: "SKIN SOOTHING",
    name: "Aloe Vera",
    description:
      "Soothes irritated skin and enhances delivery of active ingredients without leaving a greasy feel.",
    badge: "Calms & hydrates",
    image: aloeVeraImage,
    link: "https://terrafreeze.com/ingredients/aloe-vera",
  },
  {
    category: "ANTIOXIDANT POWER",
    name: "Turmeric Extract",
    description:
      "Natural antioxidant that fights inflammation and supports tissue healing from overuse.",
    badge: "Powerful curcumin",
    image: turmericImage,
    link: "https://terrafreeze.com/ingredients/turmeric",
  },
  {
    category: "WARMING CIRCULATION",
    name: "Ginger Root",
    description:
      "Improves circulation and warms tense muscles, helping ease chronic pain and stiffness.",
    badge: "Natural warming agent",
    image: gingerImage,
    link: "https://terrafreeze.com/ingredients/ginger-root-extract",
  },
  {
    category: "SKIN REPAIR",
    name: "Vitamins C & E",
    description:
      "Powerful antioxidants that nourish and protect skin while enhancing absorption. Supports tissue repair and keeps skin healthy.",
    badge: "Antioxidant protection",
    image: vitaminsImage,
    link: "https://terrafreeze.com/ingredients/vitamin-c",
  },
  {
    category: "JOINT MOBILITY",
    name: "Boswellia Serrata",
    description:
      "Reduces swelling in joints and improves long-term mobility, especially in knees and hands.",
    badge: "Ancient joint remedy",
    image: boswelliaImage,
    link: "https://terrafreeze.com/ingredients/boswellia",
  },
  {
    category: "BOTANICAL CALM",
    name: "Chamomile Extract",
    description:
      "Anti-inflammatory and skin-soothing botanical that supports topical comfort and absorption.",
    badge: "Gentle on skin",
    image: chamomileImage,
    link: "https://terrafreeze.com/ingredients/chamomile",
  },
  {
    category: "JOINT SUPPORT",
    name: "MSM & Glucosamine",
    description:
      "Supports joint health by rebuilding cartilage and reducing oxidative stress. Improved mobility, less stiffness, and long-term joint protection.",
    badge: "Supports cellular repair",
    image: msmImage,
    link: "https://terrafreeze.com/ingredients/msm",
  },
  {
    category: "ABSORPTION BOOST",
    name: "Histamine Dihydrochloride",
    description:
      "Encourages local blood flow and helps maximize ingredient effectiveness and absorption.",
    badge: "Boosts delivery",
    image: histamineImage,
    link: "https://terrafreeze.com/ingredients/histamine",
  },
];

export const FeaturesAndBenefits = () => {
  return (
    <section id="ingredients" className="py-16 bg-secondary">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Badge */}
        <div className="flex justify-center mb-6">
          <span className="inline-block px-4 py-1.5 bg-primary text-primary-foreground text-sm font-semibold rounded-full uppercase tracking-wide">
            What's Inside
          </span>
        </div>

        {/* Headline */}
        <div className="text-center mb-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            12 Ingredients in 1 Powerful Formula.
          </h2>
        </div>

        {/* Subheadline */}
        <p className="text-center text-muted-foreground max-w-5xl mx-auto mb-12 text-base lg:text-lg">
          TERRAFREEZE contains only clinically-proven active ingredients, each one selected to deliver real pain relief from within.
        </p>

        {/* Ingredient Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {ingredients.map((ingredient, index) => (
            <Card
              key={index}
              className="relative overflow-hidden rounded-2xl flex flex-col h-full min-h-[280px] hover:shadow-xl transition-all duration-300 border-0 p-0"
            >
              {/* Background image */}
              <img
                src={ingredient.image}
                alt={ingredient.name}
                loading="lazy"
                width={1280}
                height={896}
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Subtle darkening for text legibility */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/25" />

              {/* Content */}
              <div className="relative flex flex-col h-full p-7">
                <h3 className="text-2xl sm:text-3xl lg:text-[2rem] font-bold text-white mb-3 leading-tight normal-case">
                  <a
                    href={ingredient.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline underline-offset-4 transition-all"
                  >
                    {ingredient.name}
                  </a>
                </h3>

                <p className="text-white text-base lg:text-lg leading-snug font-semibold max-w-[75%] drop-shadow-md">
                  {ingredient.description}
                </p>

                {/* Pill badge bottom-right */}
                <div className="absolute bottom-5 right-5">
                  <span className="inline-block px-4 py-1.5 bg-white text-foreground text-xs font-semibold rounded-full shadow-md">
                    {ingredient.badge}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href="#buy-box"
            className="inline-block bg-gradient-to-r from-cta to-amber-500 hover:from-amber-500 hover:to-cta text-black font-bold py-4 px-10 rounded-lg text-lg uppercase transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 no-underline"
          >
            GET PAIN RELIEF NOW
          </a>
        </div>
      </div>
    </section>
  );
};
