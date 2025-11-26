import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Flame } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductDetailsProps {
  title: string;
  price: number;
  rating: number;
  reviewCount: number;
  features: string[];
  promo?: string;
}

const packages = [
  { value: 1, label: "1 PACKAGE", price: 59.99, perUnit: 59.99 },
  { value: 3, label: "3 PACKAGES", price: 149.99, perUnit: 49.99, badge: "SAVE 17%" },
  { value: 6, label: "6 PACKAGES", price: 239.99, perUnit: 39.99, badge: "BEST VALUE" },
];

export const ProductDetails = ({
  title,
  price,
  rating,
  reviewCount,
  features,
  promo,
}: ProductDetailsProps) => {
  const [selectedPackage, setSelectedPackage] = useState(packages[0]);

  return (
    <div className="flex flex-col gap-6">
      {/* Title and Price */}
      <div className="flex items-start justify-between gap-4">
        <h1 className="text-3xl font-bold text-foreground">{title}</h1>
        <div className="text-3xl font-bold text-foreground whitespace-nowrap">
          ${selectedPackage.price.toFixed(2)}
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-2">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={cn(
                "w-5 h-5",
                i < Math.floor(rating)
                  ? "fill-amber-400 text-amber-400"
                  : "fill-muted text-muted"
              )}
            />
          ))}
        </div>
        <span className="text-sm text-muted-foreground">({reviewCount})</span>
      </div>

      {/* Promo Banner */}
      {promo && (
        <div className="flex items-center gap-2 bg-badge text-badge-foreground px-4 py-2 rounded-md">
          <Flame className="w-5 h-5" />
          <span className="font-semibold uppercase text-sm">{promo}</span>
        </div>
      )}

      {/* Features */}
      <div className="flex flex-col gap-3">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center flex-shrink-0 mt-0.5">
              <div className="w-2 h-2 rounded-full bg-foreground" />
            </div>
            <span className="text-sm text-foreground">{feature}</span>
          </div>
        ))}
      </div>

      {/* Package Selector */}
      <div className="flex flex-col gap-3">
        <div className="text-sm font-semibold uppercase text-foreground">
          Pack
        </div>
        <div className="grid grid-cols-1 gap-3">
          {packages.map((pkg) => (
            <button
              key={pkg.value}
              onClick={() => setSelectedPackage(pkg)}
              className={cn(
                "relative border-2 rounded-md p-4 transition-all hover:border-primary",
                selectedPackage.value === pkg.value
                  ? "border-primary bg-primary/5"
                  : "border-border"
              )}
            >
              {pkg.badge && (
                <Badge
                  className="absolute -top-2 right-4 bg-badge text-badge-foreground text-xs px-2 py-0.5"
                >
                  {pkg.badge}
                </Badge>
              )}
              <div className="flex items-center justify-between">
                <div className="flex flex-col items-start gap-1">
                  <span className="font-bold text-foreground">{pkg.label}</span>
                  <span className="text-xs text-muted-foreground">
                    ${pkg.perUnit.toFixed(2)}/unit
                  </span>
                </div>
                <div className="text-xl font-bold text-foreground">
                  ${pkg.price.toFixed(2)}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Add to Cart Button */}
      <Button
        size="lg"
        className="w-full h-14 text-base font-bold uppercase"
      >
        Add to Cart
      </Button>

      {/* Product Info Accordion Placeholder */}
      <div className="border-t border-border pt-6 space-y-4">
        <details className="group">
          <summary className="flex items-center justify-between cursor-pointer py-3 font-semibold text-foreground hover:text-foreground/80">
            <span>PRODUCT DETAILS & CARE</span>
            <svg
              className="w-5 h-5 transition-transform group-open:rotate-180"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <div className="pb-4 text-sm text-muted-foreground">
            <p>Product details and care instructions will be displayed here.</p>
          </div>
        </details>
        
        <details className="group border-t border-border">
          <summary className="flex items-center justify-between cursor-pointer py-3 font-semibold text-foreground hover:text-foreground/80">
            <span>SHIPPING & RETURNS</span>
            <svg
              className="w-5 h-5 transition-transform group-open:rotate-180"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <div className="pb-4 text-sm text-muted-foreground">
            <p>Shipping and returns information will be displayed here.</p>
          </div>
        </details>
      </div>
    </div>
  );
};
