import laTimesLogo from "@/assets/press-la-times.png";
import huffpostLogo from "@/assets/press-huffpost.png";
import mensFitnessLogo from "@/assets/press-mens-fitness.png";
import womensHealthLogo from "@/assets/press-womens-health.png";
import cnbcLogo from "@/assets/press-cnbc.png";

export const PressBanner = () => {
  const pressQuotes = [
    {
      logo: laTimesLogo,
      alt: "Los Angeles Times",
      quote: '"Most talked-about pain relief breakthrough going into 2025."'
    },
    {
      logo: huffpostLogo,
      alt: "HuffPost",
      quote: '"Noticed a difference in less than 24 hours"'
    },
    {
      logo: mensFitnessLogo,
      alt: "Men's Fitness",
      quote: '"Most exciting pain relief innovation we\'ve seen in years."'
    },
    {
      logo: womensHealthLogo,
      alt: "Women's Health",
      quote: '"TERRAFREEZE is redefining pain relief with clinical-grade ingredients."'
    },
    {
      logo: cnbcLogo,
      alt: "CNBC",
      quote: '"Spoiler: it\'s REALLY GOOD."'
    },
  ];

  return (
    <section className="bg-secondary/50 py-10 border-y border-border">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Headline */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="h-px bg-primary/30 flex-1 max-w-20"></div>
          <h3 className="text-center text-sm md:text-base font-bold text-primary uppercase tracking-wider">
            "THE PAIN RELIEF BREAKTHROUGH EVERYONE'S BEEN WAITING FOR"
          </h3>
          <div className="h-px bg-primary/30 flex-1 max-w-20"></div>
        </div>

        {/* Press Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-6">
          {pressQuotes.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center gap-3">
              <img 
                src={item.logo} 
                alt={item.alt}
                className="h-8 md:h-10 w-auto object-contain"
              />
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.quote}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
