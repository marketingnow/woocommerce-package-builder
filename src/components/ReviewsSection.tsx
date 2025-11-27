import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ReviewsSection = () => {
  return (
    <section className="py-12 border-t border-border">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-foreground">Customer Reviews</h2>
          
          <div className="flex items-center justify-center gap-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-lg font-semibold text-foreground">4.8 out of 5</span>
          </div>
          
          <p className="text-muted-foreground">Based on 314 reviews</p>
        </div>

        <div className="bg-muted/50 rounded-lg p-8 text-center space-y-4">
          <p className="text-foreground text-lg">
            [Your WooCommerce reviews shortcode will be inserted here]
          </p>
          <p className="text-sm text-muted-foreground">
            This placeholder will be replaced with your actual review integration
          </p>
          <Button variant="outline" size="lg">
            Write a Review
          </Button>
        </div>
      </div>
    </section>
  );
};
