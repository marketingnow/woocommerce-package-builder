import { Star, Quote } from "lucide-react";
import { Card } from "@/components/ui/card";

interface Testimonial {
  name: string;
  rating: number;
  text: string;
  verified?: boolean;
}

interface SocialProofProps {
  testimonials: Testimonial[];
}

export const SocialProof = ({ testimonials }: SocialProofProps) => {
  return (
    <section className="py-12 border-t border-border">
      <div className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold text-foreground">What Our Customers Say</h2>
          <p className="text-muted-foreground">Don't just take our word for it</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 space-y-4">
              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < testimonial.rating
                        ? "fill-amber-400 text-amber-400"
                        : "fill-muted text-muted"
                    }`}
                  />
                ))}
              </div>
              
              <div className="relative">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-muted opacity-20" />
                <p className="text-sm text-foreground relative z-10">{testimonial.text}</p>
              </div>
              
              <div className="flex items-center justify-between">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                {testimonial.verified && (
                  <span className="text-xs text-muted-foreground">✓ Verified Purchase</span>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
