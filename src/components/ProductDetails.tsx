import { useState } from "react";
import { Check, Truck, ShieldCheck, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductDetailsProps {
  title: string;
  subtitle: string;
  price: number;
  rating: number;
  reviewCount: number;
  features: string[];
  tagline?: string;
  onPackageChange?: (packageId: string) => void;
}

const packages = [
  { 
    id: "1_tube",
    label: "1 Jar", 
    description: "Perfect for trying TERRAFREEZE™",
    price: 29.00, 
    originalPrice: 39.95,
    savings: 10,
    freeShipping: false,
    badge: null,
    checkoutUrl: "https://terrafreeze.com/checkout/?add-to-cart=19140&variation_id=32168",
  },
  { 
    id: "3_tubes",
    label: "3 Jars", 
    description: "Home, work & travel coverage",
    price: 69.97, 
    originalPrice: 99.95,
    savings: 30,
    freeShipping: true,
    badge: "MOST POPULAR",
    badgeColor: "primary",
    checkoutUrl: "https://terrafreeze.com/checkout/?add-to-cart=19140&variation_id=32169",
  },
  { 
    id: "6_tubes",
    label: "6 Jars", 
    description: "Maximum savings & long-term relief",
    price: 119.00, 
    originalPrice: 179.95,
    savings: 60,
    freeShipping: true,
    badge: "BEST VALUE",
    badgeColor: "orange",
    checkoutUrl: "https://terrafreeze.com/checkout/?add-to-cart=19140&variation_id=32170",
  },
];

export const ProductDetails = ({
  title,
  subtitle,
  rating,
  reviewCount,
  features,
  onPackageChange,
}: ProductDetailsProps) => {
  const [selectedPackage, setSelectedPackage] = useState(packages[1]);

  const selectPackage = (pkg: typeof packages[number]) => {
    setSelectedPackage(pkg);
    onPackageChange?.(pkg.id);
  };

  return (
    <div className="flex flex-col gap-5">
      {/* Rating - Sharp stars like reference */}
      <div className="flex items-center gap-2">
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <svg 
              key={i}
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill={i < Math.floor(rating) ? "hsl(var(--star))" : i < rating ? "url(#half-star)" : "hsl(var(--muted))"}
            >
              <defs>
                <linearGradient id="half-star">
                  <stop offset="50%" stopColor="hsl(var(--star))" />
                  <stop offset="50%" stopColor="hsl(var(--muted))" />
                </linearGradient>
              </defs>
              <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
            </svg>
          ))}
        </div>
        <span className="text-sm font-semibold text-foreground">
          Excellent {rating}
        </span>
        <span className="text-sm text-muted-foreground">
          | {reviewCount.toLocaleString()} Reviews
        </span>
      </div>

      {/* Title - Refined, smaller */}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
          {title}
        </h1>
      </div>

      {/* Description */}
      <p className="text-base text-muted-foreground leading-relaxed">
        {subtitle}
      </p>

      {/* Features - Icon bullets */}
      <div className="flex flex-col gap-2">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0">
              <Check className="w-3 h-3 text-success" />
            </div>
            <span className="text-sm md:text-base text-foreground">{feature}</span>
          </div>
        ))}
      </div>

      {/* Price Display */}
      <div className="flex items-baseline gap-3">
        <span className="text-3xl md:text-4xl font-bold text-foreground">
          ${selectedPackage.price.toFixed(2)}
        </span>
        <span className="text-lg text-muted-foreground line-through">
          ${selectedPackage.originalPrice.toFixed(2)}
        </span>
        <span className="bg-success text-white text-xs font-bold px-2 py-1 rounded">
          SALE
        </span>
      </div>

      {/* Sale Banner */}
      <div className="text-center py-2 border-y border-border">
        <span className="text-sm font-semibold text-foreground">
          ─── 180 Day Feel Better Guarantee! ───
        </span>
      </div>

      {/* Package Selector - Clean stacked with badges outside */}
      <div className="space-y-2">
        {packages.map((pkg) => (
          <a
            key={pkg.id}
            href={pkg.checkoutUrl}
            onClick={(e) => {
              if (selectedPackage.id !== pkg.id) {
                e.preventDefault();
                selectPackage(pkg);
              }
            }}
            className={cn(
              "relative block border-2 rounded-lg transition-all cursor-pointer overflow-visible no-underline",
              selectedPackage.id === pkg.id
                ? "border-primary bg-primary/5"
                : "border-border hover:border-primary/50"
            )}
          >
            {/* Badge - positioned outside right edge */}
            {pkg.badge && (
              <div 
                className={cn(
                  "absolute -top-3 right-4 text-xs font-bold px-3 py-1 rounded text-white z-10 shadow-md",
                  pkg.badgeColor === "orange" 
                    ? "bg-gradient-to-r from-amber-500 to-amber-600" 
                    : "bg-gradient-to-r from-primary to-blue-600"
                )}
              >
                {pkg.badge}
              </div>
            )}
            
            <div className="flex items-center gap-4 p-4">
              <div className={cn(
                "w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0",
                selectedPackage.id === pkg.id 
                  ? "border-primary bg-primary" 
                  : "border-muted-foreground"
              )}>
                {selectedPackage.id === pkg.id && (
                  <div className="w-2 h-2 rounded-full bg-white" />
                )}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-base font-bold text-foreground">
                    {pkg.label}
                  </span>
                  <span className="bg-gradient-to-r from-success to-green-600 text-white text-xs font-bold px-2 py-0.5 rounded">
                    SAVE ${pkg.savings}
                  </span>
                </div>
                <span className="text-sm text-muted-foreground block">{pkg.description}</span>
                {pkg.freeShipping && (
                  <span className="text-sm font-semibold text-primary">+ FREE Shipping</span>
                )}
              </div>
              
              <div className="text-right flex-shrink-0">
                <span className="text-xl font-bold text-foreground block">${pkg.price.toFixed(2)}</span>
                <span className="text-sm text-muted-foreground line-through">${pkg.originalPrice.toFixed(2)}</span>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Urgency */}
      <div className="flex items-center gap-2 text-sm bg-destructive/10 p-3 rounded-lg border border-destructive/20">
        <AlertCircle className="w-4 h-4 text-destructive" />
        <span className="text-foreground">
          <span className="font-bold text-destructive">Hurry!</span> Limited stock left
        </span>
      </div>

      {/* CTA Button - Yellow gradient with dynamic pricing */}
      <a
        href={selectedPackage.checkoutUrl}
        className="block text-center w-full py-4 bg-gradient-to-r from-cta to-amber-500 hover:from-amber-500 hover:to-cta text-black font-bold text-lg uppercase rounded-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 no-underline"
      >
        ADD TO CART — ${selectedPackage.price.toFixed(2)}
      </a>

      {/* 180-Day Money Back Guarantee */}
      <div className="flex items-center justify-center gap-3 p-4 bg-secondary rounded-xl border border-border">
        <div className="w-14 h-14 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0">
          <ShieldCheck className="w-8 h-8 text-success" />
        </div>
        <div>
          <p className="font-bold text-foreground">180-Day Money Back Guarantee</p>
          <p className="text-sm text-muted-foreground">
            Try it risk-free. If you're not satisfied, get a full refund!
          </p>
        </div>
      </div>

      {/* Payment Icons */}
      <div className="flex items-center justify-center gap-3">
        <img src="https://cdn-icons-png.flaticon.com/32/349/349221.png" alt="Visa" className="h-6 opacity-70" />
        <img src="https://cdn-icons-png.flaticon.com/32/349/349228.png" alt="Mastercard" className="h-6 opacity-70" />
        <img src="https://cdn-icons-png.flaticon.com/32/349/349230.png" alt="PayPal" className="h-6 opacity-70" />
        <img src="https://cdn-icons-png.flaticon.com/32/6124/6124998.png" alt="Apple Pay" className="h-6 opacity-70" />
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
            <p>Free shipping on orders of 3+ tubes. 180-day money-back guarantee.</p>
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
