import { Star, ShieldCheck } from "lucide-react";
import { Card } from "@/components/ui/card";
import terrafreeze from "@/assets/terrafreeze-product.png";

export const ReviewsSection = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Final CTA Block */}
        <Card className="p-8 md:p-12 mb-12 bg-primary text-primary-foreground border-0 shadow-xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              {/* Rating */}
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-star text-star" />
                  ))}
                </div>
                <span className="text-primary-foreground/80">Trusted by 2,500+ Customers</span>
              </div>

              {/* Headline */}
              <h2 className="text-3xl md:text-4xl font-bold">
                RECLAIM YOUR ACTIVE LIFE TODAY
              </h2>

              {/* Subtext */}
              <p className="text-lg text-primary-foreground/90 leading-relaxed">
                Join thousands of satisfied customers who have found natural, lasting relief from chronic pain. 
                Our 30-day money-back guarantee means you can try TERRAFREEZE completely risk-free.
              </p>

              {/* Trust badges */}
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5" />
                  <span>30-Day Guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5" />
                  <span>Free Shipping</span>
                </div>
              </div>

              {/* CTA Button */}
              <button className="bg-cta hover:bg-cta-hover text-cta-foreground font-bold py-4 px-10 rounded-lg text-lg uppercase transition-colors shadow-lg w-full md:w-auto">
                GET PAIN RELIEF NOW
              </button>
            </div>

            {/* Product Image */}
            <div className="flex justify-center">
              <img
                src={terrafreeze}
                alt="TERRAFREEZE Pain Relief Cream"
                className="w-full max-w-xs"
              />
            </div>
          </div>
        </Card>

        {/* Reviews Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
            CUSTOMER REVIEWS
          </h2>
          <p className="text-lg text-foreground">Real results from real people</p>
        </div>

        {/* Review Stats */}
        <Card className="p-8 bg-card border-0 shadow-md mb-8">
          <div className="flex items-center gap-8 flex-wrap justify-center">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">4.8</div>
              <div className="flex justify-center mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-star text-star" />
                ))}
              </div>
            </div>
            <div className="h-16 w-px bg-border hidden md:block" />
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">2,547+</div>
              <div className="text-base text-foreground">Verified Reviews</div>
            </div>
            <div className="h-16 w-px bg-border hidden md:block" />
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">98%</div>
              <div className="text-base text-foreground">Would Recommend</div>
            </div>
          </div>
        </Card>

        {/* Reviews Placeholder */}
        <div className="p-8 bg-card rounded-xl text-center border border-border shadow-md">
          <p className="text-primary font-semibold mb-2">⭐ Customer Reviews Placeholder</p>
          <p className="text-sm text-muted-foreground">
            [Insert WooCommerce reviews shortcode here]
          </p>
        </div>
      </div>
    </section>
  );
};
