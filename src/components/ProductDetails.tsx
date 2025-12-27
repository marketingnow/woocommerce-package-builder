import { useState } from "react";
import { Badge } from "@/components/ui/badge";
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
    value: 1, 
    label: "1 Month", 
    sublabel: "Supply",
    quantity: "2 oz Jar",
    price: 39.99, 
    originalPrice: null,
    savings: null 
  },
  { 
    value: 3, 
    label: "3 Month", 
    sublabel: "Supply",
    quantity: "3 Jars",
    price: 99.97, 
    originalPrice: 119.97,
    savings: 20.00,
    badge: "Most Popular",
    badgeColor: "primary"
  },
  { 
    value: 6, 
    label: "6 Month", 
    sublabel: "Supply",
    quantity: "6 Jars",
    price: 179.94, 
    originalPrice: 239.94,
    savings: 60.00,
    badge: "Best Value",
    badgeColor: "success"
  },
];

export const ProductDetails = ({
  title,
  subtitle,
  price,
  rating,
  reviewCount,
  features,
  tagline,
}: ProductDetailsProps) => {
  const [selectedPackage, setSelectedPackage] = useState(packages[0]);

  return (
    <div className="flex flex-col gap-6">
      {/* Rating */}
      <div className="flex items-center gap-2">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={cn(
                "w-6 h-6",
                i < Math.floor(rating)
                  ? "fill-star text-star"
                  : "fill-muted text-muted"
              )}
            />
          ))}
        </div>
        <span className="text-base font-semibold text-primary">
          Rated {rating}/5 • {reviewCount}+ Happy Customers
        </span>
      </div>

      {/* Title */}
      <div>
        <h1 className="text-3xl md:text-5xl font-bold text-primary uppercase tracking-tight leading-tight">
          {title}
        </h1>
        <p className="text-xl text-foreground mt-2 font-medium">{subtitle}</p>
      </div>

      {/* Features */}
      <div className="flex flex-col gap-3">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <Check className="w-6 h-6 text-success flex-shrink-0 mt-0.5" />
            <span className="text-lg text-foreground">{feature}</span>
          </div>
        ))}
      </div>

      {/* Price with tagline */}
      <div className="flex items-baseline gap-3">
        <span className="text-3xl font-bold text-foreground">
          ${selectedPackage.price.toFixed(2)}
        </span>
        {tagline && (
          <span className="text-base text-accent font-semibold">{tagline}</span>
        )}
      </div>

      {/* Package Selector */}
      <div className="grid grid-cols-3 gap-3">
        {packages.map((pkg) => (
          <button
            key={pkg.value}
            onClick={() => setSelectedPackage(pkg)}
            className={cn(
              "relative border-2 rounded-xl p-4 transition-all text-center",
              selectedPackage.value === pkg.value
                ? "border-primary bg-primary/5 shadow-lg"
                : "border-border hover:border-primary/50"
            )}
          >
            {pkg.badge && (
              <Badge
                className={cn(
                  "absolute -top-3 left-1/2 -translate-x-1/2 text-xs px-3 py-1 whitespace-nowrap font-semibold",
                  pkg.badgeColor === "success" 
                    ? "bg-success text-success-foreground" 
                    : "bg-primary text-primary-foreground"
                )}
              >
                {pkg.badge}
              </Badge>
            )}
            <div className="flex flex-col items-center gap-1">
              <span className="text-xl font-bold text-primary">{pkg.label}</span>
              <span className="text-base text-foreground">{pkg.sublabel}</span>
              <span className="text-sm text-foreground">{pkg.quantity}</span>
              <div className="mt-2">
                {pkg.originalPrice && (
                  <span className="text-base text-muted-foreground line-through mr-2">
                    ${pkg.originalPrice.toFixed(2)}
                  </span>
                )}
                <span className="text-xl font-bold text-foreground">
                  ${pkg.price.toFixed(2)}
                </span>
              </div>
              {pkg.savings && (
                <span className="text-base font-bold text-success">
                  Save ${pkg.savings.toFixed(2)}
                </span>
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Trust Bar */}
      <div className="bg-trust text-trust-foreground rounded-xl p-4 flex items-center justify-center gap-3">
        <Pill className="w-6 h-6" />
        <span className="font-bold text-lg">Apply 2-3 Times Daily For Optimal Results</span>
      </div>

      {/* USP Bar */}
      <div className="grid grid-cols-3 gap-4 py-4 border-y border-border">
        <div className="flex flex-col items-center text-center gap-1">
          <Pill className="w-8 h-8 text-primary" />
          <span className="text-sm font-semibold text-foreground">Fast-Acting</span>
          <span className="text-sm text-foreground">Relief Formula</span>
        </div>
        <div className="flex flex-col items-center text-center gap-1 border-x border-border">
          <Truck className="w-8 h-8 text-primary" />
          <span className="text-sm font-semibold text-foreground">FREE & Fast</span>
          <span className="text-sm text-foreground">Delivery</span>
        </div>
        <div className="flex flex-col items-center text-center gap-1">
          <ShieldCheck className="w-8 h-8 text-primary" />
          <span className="text-sm font-semibold text-foreground">Risk-Free 30</span>
          <span className="text-sm text-foreground">Days</span>
        </div>
      </div>

      {/* Add to Cart Button - Amazon Yellow */}
      <button
        className="w-full h-16 bg-cta hover:bg-cta-hover text-cta-foreground font-bold text-xl uppercase rounded-xl transition-colors shadow-xl"
      >
        ADD TO CART NOW - ${selectedPackage.price.toFixed(2)}
      </button>

      {/* Trust Badges Below CTA */}
      <div className="flex items-center justify-center gap-4 text-base text-foreground">
        <span className="flex items-center gap-2">
          <Check className="w-5 h-5 text-success" />
          Doctor's Approved
        </span>
        <span className="text-muted-foreground">✦</span>
        <span className="flex items-center gap-2">
          <Truck className="w-5 h-5 text-primary" />
          Free & Fast delivery
        </span>
      </div>

      {/* Product Info Accordion */}
      <div className="border-t border-border pt-4 space-y-0">
        <details className="group border-b border-border">
          <summary className="flex items-center justify-between cursor-pointer py-4 font-bold text-lg text-foreground hover:text-primary transition-colors">
            <span>Benefits</span>
            <svg
              className="w-6 h-6 transition-transform group-open:rotate-180"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <div className="pb-4 text-base text-foreground">
            <ul className="space-y-2">
              <li>• Fast-acting pain relief for muscles and joints</li>
              <li>• Contains Emu Oil and Arnica for enhanced healing</li>
              <li>• Non-greasy, fast-absorbing formula</li>
              <li>• Ideal for arthritis, back pain, and inflammation</li>
            </ul>
          </div>
        </details>
        
        <details className="group border-b border-border">
          <summary className="flex items-center justify-between cursor-pointer py-4 font-bold text-lg text-foreground hover:text-primary transition-colors">
            <span>Potency & Ingredients</span>
            <svg
              className="w-6 h-6 transition-transform group-open:rotate-180"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <div className="pb-4 text-base text-foreground">
            <p>Active ingredients: Menthol, Emu Oil, Arnica Montana, MSM, and natural botanicals.</p>
          </div>
        </details>

        <details className="group border-b border-border">
          <summary className="flex items-center justify-between cursor-pointer py-4 font-bold text-lg text-foreground hover:text-primary transition-colors">
            <span>Free Joint Effects</span>
            <svg
              className="w-6 h-6 transition-transform group-open:rotate-180"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <div className="pb-4 text-base text-foreground">
            <p>No known side effects. Safe for daily use on muscles and joints.</p>
          </div>
        </details>

        <details className="group border-b border-border">
          <summary className="flex items-center justify-between cursor-pointer py-4 font-bold text-lg text-foreground hover:text-primary transition-colors">
            <span>How Do I Take It?</span>
            <svg
              className="w-6 h-6 transition-transform group-open:rotate-180"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <div className="pb-4 text-base text-foreground">
            <p>Apply a thin layer to affected areas 2-3 times daily. Massage gently until absorbed.</p>
          </div>
        </details>

        <details className="group">
          <summary className="flex items-center justify-between cursor-pointer py-4 font-bold text-lg text-foreground hover:text-primary transition-colors">
            <span>How Long Until I Start Seeing Results?</span>
            <svg
              className="w-6 h-6 transition-transform group-open:rotate-180"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <div className="pb-4 text-base text-foreground">
            <p>Most users experience relief within minutes. For chronic conditions, optimal results are typically seen within 2-4 weeks of consistent use.</p>
          </div>
        </details>
      </div>
    </div>
  );
};