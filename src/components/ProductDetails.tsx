import { useState } from "react";
import { Star, Check, Pill, Truck, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductDetailsProps {
  title: string;
  subtitle: string;
  price: number;
  rating: number;
  reviewCount: number;
  features: string[];
  tagline?: string;
}

const packages = [
  { 
    id: "1_tube",
    label: "1 Tube", 
    description: "Perfect for trying TERRAFREEZE™",
    price: 29.95, 
    originalPrice: 39.95,
    savings: 10,
    freeShipping: false,
    badge: null,
  },
  { 
    id: "3_tubes",
    label: "3 Tubes", 
    description: "Home, work & travel coverage",
    price: 69.95, 
    originalPrice: 99.95,
    savings: 30,
    freeShipping: true,
    badge: "MOST POPULAR",
    badgeColor: "primary",
  },
  { 
    id: "6_tubes",
    label: "6 Tubes", 
    description: "Maximum savings & long-term relief",
    price: 119.95, 
    originalPrice: 179.95,
    savings: 60,
    freeShipping: true,
    badge: "BEST VALUE",
    badgeColor: "orange",
  },
];

export const ProductDetails = ({
  title,
  subtitle,
  rating,
  reviewCount,
  features,
}: ProductDetailsProps) => {
  const [selectedPackage, setSelectedPackage] = useState(packages[0]);

  return (
    <div className="flex flex-col gap-4">
      {/* Rating */}
      <div className="flex items-center gap-2">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={cn(
                "w-5 h-5",
                i < Math.floor(rating)
                  ? "fill-star text-star"
                  : "fill-muted text-muted"
              )}
            />
          ))}
        </div>
        <span className="text-sm font-semibold text-primary">
          Rated {rating}/5 • {reviewCount}+ Happy Customers
        </span>
      </div>

      {/* Title */}
      <div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary uppercase tracking-tight leading-tight">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-foreground mt-1 font-medium">{subtitle}</p>
      </div>

      {/* Features */}
      <div className="flex flex-col gap-2">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-2">
            <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
            <span className="text-base md:text-lg text-foreground">{feature}</span>
          </div>
        ))}
      </div>

      {/* Package Selector - Stacked Layout */}
      <div className="bg-card rounded-xl shadow-lg p-4 space-y-2">
        <h2 className="text-lg md:text-xl font-bold text-center gradient-primary bg-clip-text text-transparent">
          Choose Your Relief Package
        </h2>
        
        {packages.map((pkg) => (
          <div 
            key={pkg.id}
            className={cn(
              "relative border-2 rounded-lg overflow-hidden transition-all cursor-pointer",
              selectedPackage.id === pkg.id
                ? "border-primary bg-primary/5 shadow-md"
                : "border-border hover:border-primary/50 hover:shadow-sm"
            )}
            onClick={() => setSelectedPackage(pkg)}
          >
            {/* Badge */}
            {pkg.badge && (
              <div 
                className={cn(
                  "absolute top-0 right-0 text-[10px] font-bold px-3 py-1 rounded-bl-lg text-white",
                  pkg.badgeColor === "orange" ? "gradient-cta" : "gradient-primary"
                )}
              >
                {pkg.badge}
              </div>
            )}
            
            <label className="flex items-center justify-between p-3 cursor-pointer">
              <input
                type="radio"
                name="package"
                value={pkg.id}
                checked={selectedPackage.id === pkg.id}
                onChange={() => setSelectedPackage(pkg)}
                className="sr-only"
              />
              
              <div className="flex-1 pr-20">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-base md:text-lg font-bold text-foreground">{pkg.label}</span>
                  <span className="gradient-success text-white text-xs font-bold px-2 py-0.5 rounded">
                    SAVE ${pkg.savings}
                  </span>
                </div>
                <span className="text-sm text-muted-foreground block">{pkg.description}</span>
                {pkg.freeShipping && (
                  <span className="text-sm text-primary font-semibold">+ FREE Shipping</span>
                )}
              </div>
              
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-right">
                <span className="text-xl font-bold text-foreground block">${pkg.price.toFixed(2)}</span>
                <span className="text-sm text-muted-foreground line-through">${pkg.originalPrice.toFixed(2)}</span>
              </div>
            </label>
          </div>
        ))}
        
        {/* Add to Cart Button */}
        <button className="w-full py-4 gradient-cta hover:opacity-90 text-cta-foreground font-bold text-lg uppercase rounded-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
          ADD TO CART — ${selectedPackage.price.toFixed(2)}
        </button>
      </div>

      {/* Trust Badges Below CTA */}
      <div className="flex items-center justify-center gap-4 text-sm text-foreground flex-wrap">
        <span className="flex items-center gap-1">
          <Check className="w-4 h-4 text-success" />
          Doctor's Approved
        </span>
        <span className="text-muted-foreground">✦</span>
        <span className="flex items-center gap-1">
          <Truck className="w-4 h-4 text-primary" />
          Free & Fast delivery
        </span>
      </div>

      {/* USP Bar */}
      <div className="grid grid-cols-3 gap-3 py-3 border-y border-border">
        <div className="flex flex-col items-center text-center gap-1">
          <Pill className="w-6 h-6 text-primary" />
          <span className="text-xs font-semibold text-foreground">Fast-Acting</span>
          <span className="text-xs text-muted-foreground">Relief Formula</span>
        </div>
        <div className="flex flex-col items-center text-center gap-1 border-x border-border">
          <Truck className="w-6 h-6 text-primary" />
          <span className="text-xs font-semibold text-foreground">FREE & Fast</span>
          <span className="text-xs text-muted-foreground">Delivery</span>
        </div>
        <div className="flex flex-col items-center text-center gap-1">
          <ShieldCheck className="w-6 h-6 text-primary" />
          <span className="text-xs font-semibold text-foreground">Risk-Free 30</span>
          <span className="text-xs text-muted-foreground">Days</span>
        </div>
      </div>

      {/* Product Info Accordion - Compact */}
      <div className="space-y-0">
        <details className="group border-b border-border">
          <summary className="flex items-center justify-between cursor-pointer py-3 font-semibold text-base text-foreground hover:text-primary transition-colors">
            <span>Benefits</span>
            <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <div className="pb-3 text-sm text-foreground">
            <ul className="space-y-1">
              <li>• Fast-acting pain relief for muscles and joints</li>
              <li>• Contains Emu Oil and Arnica for enhanced healing</li>
              <li>• Non-greasy, fast-absorbing formula</li>
              <li>• Ideal for arthritis, back pain, and inflammation</li>
            </ul>
          </div>
        </details>
        
        <details className="group border-b border-border">
          <summary className="flex items-center justify-between cursor-pointer py-3 font-semibold text-base text-foreground hover:text-primary transition-colors">
            <span>Potency & Ingredients</span>
            <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <div className="pb-3 text-sm text-foreground">
            <p>Active ingredients: Menthol, Emu Oil, Arnica Montana, MSM, and natural botanicals.</p>
          </div>
        </details>

        <details className="group border-b border-border">
          <summary className="flex items-center justify-between cursor-pointer py-3 font-semibold text-base text-foreground hover:text-primary transition-colors">
            <span>How Do I Use It?</span>
            <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <div className="pb-3 text-sm text-foreground">
            <p>Apply a thin layer to affected areas 2-3 times daily. Massage gently until absorbed.</p>
          </div>
        </details>

        <details className="group">
          <summary className="flex items-center justify-between cursor-pointer py-3 font-semibold text-base text-foreground hover:text-primary transition-colors">
            <span>How Long Until Results?</span>
            <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <div className="pb-3 text-sm text-foreground">
            <p>Most users experience relief within minutes. For chronic conditions, optimal results are typically seen within 2-4 weeks of consistent use.</p>
          </div>
        </details>
      </div>
    </div>
  );
};