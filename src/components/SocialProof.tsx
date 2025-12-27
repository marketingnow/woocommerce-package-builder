import { useState } from "react";
import { Star, Play, Image } from "lucide-react";
import { Card } from "@/components/ui/card";

export const SocialProof = () => {
  const [activeTab, setActiveTab] = useState<"video" | "image">("video");

  const testimonials = [
    {
      name: "David L.",
      title: "Verified Buyer",
      rating: 5,
      text: "I've tried dozens of pain relief creams over the years. TERRAFREEZE is by far the most effective. My knee pain is almost completely gone after just 2 weeks of use.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Sandra C.",
      title: "Arthritis Sufferer",
      rating: 5,
      text: "Finally something that actually works! I can garden again without my hands aching for hours afterward. This cream has given me my life back.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Tom S.",
      title: "Active Senior",
      rating: 5,
      text: "I was skeptical at first, but the cooling sensation and quick relief convinced me. I recommend TERRAFREEZE to all my golf buddies now.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
            DON'T TAKE IT FROM US
          </h2>
          <p className="text-lg text-foreground">Thousands Of 5-Star Reviews From Real Customers</p>
        </div>

        {/* Video/Image Toggle Tabs */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveTab("video")}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
              activeTab === "video"
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-foreground hover:bg-secondary/80"
            }`}
          >
            <Play className="w-5 h-5" />
            Video
          </button>
          <button
            onClick={() => setActiveTab("image")}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
              activeTab === "image"
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-foreground hover:bg-secondary/80"
            }`}
          >
            <Image className="w-5 h-5" />
            Written
          </button>
        </div>

        {/* Content based on tab */}
        {activeTab === "video" ? (
          <div className="aspect-video bg-secondary rounded-xl flex items-center justify-center border border-border mb-10">
            <div className="text-center">
              <Play className="w-16 h-16 text-primary mx-auto mb-4" />
              <p className="text-primary font-semibold mb-2">🎬 Video Testimonials Placeholder</p>
              <p className="text-sm text-muted-foreground">
                [Insert video testimonial carousel here]
              </p>
            </div>
          </div>
        ) : null}

        {/* 3 Testimonial Cards - Always visible */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 border-0 shadow-lg bg-card hover:shadow-xl transition-shadow">
              <div className="flex flex-col h-full">
                {/* Avatar and Rating */}
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-primary/20"
                  />
                  <div>
                    <div className="flex mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-star text-star"
                        />
                      ))}
                    </div>
                    <span className="font-bold text-foreground">{testimonial.name}</span>
                    <span className="text-sm text-muted-foreground block">{testimonial.title}</span>
                  </div>
                </div>

                {/* Quote */}
                <p className="text-foreground leading-relaxed flex-1 text-base">
                  "{testimonial.text}"
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Placeholder for Review Slider */}
        <div className="mt-12 p-8 bg-secondary rounded-xl text-center border border-border">
          <p className="text-primary font-semibold mb-2">📊 Review Slider Placeholder</p>
          <p className="text-sm text-muted-foreground">
            [Insert WooCommerce review slider shortcode here]
          </p>
        </div>
      </div>
    </section>
  );
};
