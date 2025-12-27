import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import terrafreeze from "@/assets/terrafreeze-product.png";

export const ReviewsSection = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Expert Endorsement */}
        <Card className="p-8 mb-12 bg-card border-0 shadow-md">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-primary">BACKED BY EXPERTS</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center p-8 bg-secondary rounded-lg">
              <p className="text-primary font-semibold mb-2">👨‍⚕️ Expert Photo Placeholder</p>
              <p className="text-sm text-muted-foreground">
                [Insert expert/doctor endorsement image here]
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                "As a physical therapist, I recommend TERRAFREEZE to my patients dealing with chronic joint and muscle pain. 
                The combination of Emu Oil and Arnica provides effective, natural relief without the side effects of oral medications."
              </p>
              <p className="font-semibold text-foreground">— Dr. Sarah Mitchell, PT, DPT</p>
            </div>
          </div>
        </Card>

        {/* Video Placeholder */}
        <div className="mb-12">
          <div className="aspect-video bg-card rounded-lg flex items-center justify-center border border-border">
            <div className="text-center">
              <p className="text-primary font-semibold mb-2">🎬 Video Placeholder</p>
              <p className="text-sm text-muted-foreground">
                [Insert product video or testimonial video here]
              </p>
            </div>
          </div>
        </div>

        {/* Bundle Offer */}
        <Card className="p-8 bg-card border-0 shadow-md">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src={terrafreeze}
                alt="TERRAFREEZE Bundle"
                className="w-full max-w-xs mx-auto"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary">PAIN RELIEF BUNDLE</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-accent">✓</span>
                  <span className="text-foreground">6-Month Supply of TERRAFREEZE</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">✓</span>
                  <span className="text-foreground">FREE Pain Relief Guide ($29 value)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">✓</span>
                  <span className="text-foreground">Priority Customer Support</span>
                </li>
              </ul>
              <div className="flex items-baseline gap-3">
                <span className="text-2xl text-muted-foreground line-through">$239.94</span>
                <span className="text-3xl font-bold text-foreground">$179.94</span>
                <span className="text-success font-semibold">Save $60</span>
              </div>
              <button className="bg-cta hover:bg-cta-hover text-cta-foreground font-bold py-3 px-6 rounded-lg uppercase transition-colors">
                Get Bundle
              </button>
            </div>
          </div>
        </Card>

        {/* Join Happy Customers */}
        <div className="mt-16 text-center">
          <div className="bg-accent text-accent-foreground py-4 px-8 rounded-lg inline-block mb-8">
            <span className="font-bold text-lg">JOIN THOUSANDS OF HAPPY CUSTOMERS</span>
          </div>
        </div>

        {/* Review Stats Placeholder */}
        <Card className="p-8 bg-card border-0 shadow-md">
          <div className="flex items-center gap-8 flex-wrap justify-center mb-8">
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
              <div className="text-sm text-muted-foreground">Verified Reviews</div>
            </div>
            <div className="h-16 w-px bg-border hidden md:block" />
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">98%</div>
              <div className="text-sm text-muted-foreground">Would Recommend</div>
            </div>
          </div>

          {/* Reviews shortcode placeholder */}
          <div className="p-8 bg-secondary rounded-lg text-center">
            <p className="text-primary font-semibold mb-2">⭐ Customer Reviews Placeholder</p>
            <p className="text-sm text-muted-foreground">
              [Insert WooCommerce reviews shortcode here]
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};