import { Star, Quote } from "lucide-react";
import { Card } from "@/components/ui/card";

export const SocialProof = () => {
  const testimonials = [
    {
      name: "David L.",
      title: "Verified Buyer",
      rating: 5,
      text: "I've tried dozens of pain relief creams over the years. TERRAFREEZE is by far the most effective. My knee pain is almost completely gone after just 2 weeks of use.",
    },
    {
      name: "Sandra C.",
      title: "Arthritis Sufferer",
      rating: 5,
      text: "Finally something that actually works! I can garden again without my hands aching for hours afterward. This cream has given me my life back.",
    },
    {
      name: "Tom S.",
      title: "Active Senior",
      rating: 5,
      text: "I was skeptical at first, but the cooling sensation and quick relief convinced me. I recommend TERRAFREEZE to all my golf buddies now.",
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
            DON'T TAKE IT FROM US
          </h2>
          <p className="text-muted-foreground">Thousands Of 5-Star Reviews From Real Customers</p>
        </div>

        <div className="space-y-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 border-0 shadow-md bg-card">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Quote className="w-8 h-8 text-accent opacity-50" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-bold text-foreground">{testimonial.name}</span>
                    <span className="text-sm text-muted-foreground">—</span>
                    <span className="text-sm text-muted-foreground">{testimonial.title}</span>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-star text-star"
                      />
                    ))}
                  </div>
                  <p className="text-foreground leading-relaxed">{testimonial.text}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Placeholder for Review Slider */}
        <div className="mt-12 p-8 bg-secondary rounded-lg text-center">
          <p className="text-primary font-semibold mb-2">📊 Review Slider Placeholder</p>
          <p className="text-sm text-muted-foreground">
            [Insert WooCommerce review slider shortcode here]
          </p>
        </div>
      </div>
    </section>
  );
};