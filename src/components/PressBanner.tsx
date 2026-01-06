export const PressBanner = () => {
  const pressQuotes = [
    {
      logo: "ABC NEWS",
      logoStyle: "font-bold text-xl tracking-tight",
      quote: '"Most talked-about pain relief breakthrough going into 2025."'
    },
    {
      logo: "allure",
      logoStyle: "font-serif italic text-2xl font-normal lowercase",
      quote: '"Noticed a difference in less than 24 hours"'
    },
    {
      logo: "Forbes",
      logoStyle: "font-serif text-2xl font-bold",
      quote: '"TERRAFREEZE is redefining pain relief with clinical-grade ingredients."'
    },
    {
      logo: "VANITY FAIR",
      logoStyle: "font-bold text-lg tracking-[0.2em] uppercase",
      quote: '"Spoiler: it\'s REALLY GOOD."'
    },
    {
      logo: "Men's Health",
      logoStyle: "font-bold text-lg",
      quote: '"Most exciting pain relief innovation we\'ve seen in years."'
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
              <span className={`text-foreground ${item.logoStyle}`}>
                {item.logo}
              </span>
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
