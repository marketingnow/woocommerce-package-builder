import { useState } from "react";
import { Star, Check, Truck, ShieldCheck, AlertCircle } from "lucide-react";
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
    label: "1 Tube (1 Month)", 
    description: "You save $10 + Free Shipping",
    price: 29.95, 
    originalPrice: 39.95,
    savings: 10,
    freeShipping: true,
    badge: null,
  },
  { 
    id: "3_tubes",
    label: "Value Package 3 (1 FREE)", 
    description: "You save $30 + Free Shipping",
    price: 69.95, 
    originalPrice: 99.95,
    savings: 30,
    freeShipping: true,
    badge: "Most popular",
    badgeColor: "primary",
  },
  { 
    id: "6_tubes",
    label: "6 Tubes (4 Months)", 
    description: "You save $60 + Free Shipping",
    price: 119.95, 
    originalPrice: 179.95,
    savings: 60,
    freeShipping: true,
    badge: "Best Value",
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
  const [selectedPackage, setSelectedPackage] = useState(packages[1]);

  return (
    <div className="flex flex-col gap-5">
      {/* Rating - Compact */}
      <div className="flex items-center gap-2">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={cn(
                "w-4 h-4",
                i < Math.floor(rating)
                  ? "fill-star text-star"
                  : "fill-muted text-muted"
              )}
            />
          ))}
        </div>
        <span className="text-sm font-medium text-primary">
          {rating} ({reviewCount} reviews)
        </span>
      </div>

      {/* Title - Refined, smaller */}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
          {title}
        </h1>
      </div>

      {/* Price Display */}
      <div className="flex items-baseline gap-3">
        <span className="text-2xl md:text-3xl font-bold text-foreground">
          ${selectedPackage.price.toFixed(2)}
        </span>
        <span className="text-lg text-muted-foreground line-through">
          ${selectedPackage.originalPrice.toFixed(2)}
        </span>
      </div>

      {/* Description */}
      <p className="text-base text-muted-foreground leading-relaxed">
        {subtitle}
      </p>

      {/* Features - Icon bullets */}
      <div className="flex flex-col gap-2">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Check className="w-3 h-3 text-primary" />
            </div>
            <span className="text-sm md:text-base text-foreground">{feature}</span>
          </div>
        ))}
      </div>

      {/* Sale Banner */}
      <div className="text-center py-2 border-y border-border">
        <span className="text-sm font-semibold text-foreground">
          New Year Sale Up to 60% Off Sitewide
        </span>
      </div>

      {/* Package Selector - Clean stacked */}
      <div className="space-y-2">
        {packages.map((pkg) => (
          <div 
            key={pkg.id}
            className={cn(
              "relative border rounded-lg transition-all cursor-pointer",
              selectedPackage.id === pkg.id
                ? "border-primary bg-primary/5 ring-1 ring-primary"
                : "border-border hover:border-primary/50"
            )}
            onClick={() => setSelectedPackage(pkg)}
          >
            {/* Badge */}
            {pkg.badge && (
              <div 
                className={cn(
                  "absolute top-2 right-2 text-xs font-medium px-2 py-0.5 rounded text-white",
                  pkg.badgeColor === "orange" ? "bg-amber-500" : "bg-primary"
                )}
              >
                {pkg.badge}
              </div>
            )}
            
            <label className="flex items-center gap-3 p-3 cursor-pointer">
              <input
                type="radio"
                name="package"
                value={pkg.id}
                checked={selectedPackage.id === pkg.id}
                onChange={() => setSelectedPackage(pkg)}
                className="w-4 h-4 text-primary border-border focus:ring-primary"
              />
              
              <div className="flex-1">
                <span className="text-sm md:text-base font-semibold text-foreground block">
                  {pkg.label}
                </span>
                <span className="text-xs text-muted-foreground">{pkg.description}</span>
              </div>
              
              <div className="text-right">
                <span className="text-lg font-bold text-foreground block">${pkg.price.toFixed(2)}</span>
                <span className="text-xs text-muted-foreground line-through">${pkg.originalPrice.toFixed(2)}</span>
              </div>
            </label>
          </div>
        ))}
      </div>

      {/* Urgency */}
      <div className="flex items-center gap-2 text-sm">
        <AlertCircle className="w-4 h-4 text-destructive" />
        <span className="text-foreground">
          <span className="font-semibold">Almost sold out!</span> Only 9 left in stock.
        </span>
      </div>

      {/* CTA Button */}
      <button className="w-full py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base uppercase rounded-lg transition-all">
        GRAB THIS SET
      </button>

      {/* Money Back + Payment Icons */}
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <ShieldCheck className="w-4 h-4" />
          <span>Try it for 30 days or your money back</span>
        </div>
        <div className="flex items-center gap-2">
          <img src="https://cdn-icons-png.flaticon.com/32/349/349221.png" alt="Visa" className="h-6 opacity-70" />
          <img src="https://cdn-icons-png.flaticon.com/32/349/349228.png" alt="Mastercard" className="h-6 opacity-70" />
          <img src="https://cdn-icons-png.flaticon.com/32/349/349230.png" alt="PayPal" className="h-6 opacity-70" />
          <img src="https://cdn-icons-png.flaticon.com/32/6124/6124998.png" alt="Apple Pay" className="h-6 opacity-70" />
        </div>
      </div>

      {/* Product Info Accordion */}
      <div className="space-y-0 border rounded-lg overflow-hidden">
        <details className="group border-b border-border">
          <summary className="flex items-center justify-between cursor-pointer p-4 font-medium text-sm text-foreground hover:bg-muted/50 transition-colors">
            <span>What's Inside the Kit</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <div className="p-4 pt-0 text-sm text-muted-foreground">
            <ul className="space-y-1">
              <li>• Fast-acting pain relief for muscles and joints</li>
              <li>• Contains Emu Oil and Arnica for enhanced healing</li>
              <li>• Non-greasy, fast-absorbing formula</li>
            </ul>
          </div>
        </details>
        
        <details className="group border-b border-border">
          <summary className="flex items-center justify-between cursor-pointer p-4 font-medium text-sm text-foreground hover:bg-muted/50 transition-colors">
            <span>Shipping & Guarantee</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <div className="p-4 pt-0 text-sm text-muted-foreground">
            <p>Free shipping on all orders. 30-day money-back guarantee.</p>
          </div>
        </details>

        <details className="group">
          <summary className="flex items-center justify-between cursor-pointer p-4 font-medium text-sm text-foreground hover:bg-muted/50 transition-colors">
            <span>Ingredients & Standards</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <div className="p-4 pt-0 text-sm text-muted-foreground">
            <p>Active ingredients: Menthol, Emu Oil, Arnica Montana, MSM, and natural botanicals.</p>
          </div>
        </details>
      </div>
    </div>
  );
};