import { ProductGallery } from "@/components/ProductGallery";
import { ProductDetails } from "@/components/ProductDetails";
import { SocialProof } from "@/components/SocialProof";
import { FeaturesAndBenefits } from "@/components/FeaturesAndBenefits";
import { HowItWorks } from "@/components/HowItWorks";
import { RiskReversal } from "@/components/RiskReversal";
import { FAQ } from "@/components/FAQ";
import { ReviewsSection } from "@/components/ReviewsSection";
import { ShieldCheck, Leaf, Award, Truck, Heart, Zap } from "lucide-react";
import terrafreeze from "@/assets/terrafreeze-product.png";
import terrafreezeStand from "@/assets/terrafreeze-stand-w-benefits.png";
import tmjReview from "@/assets/tmj-review.png";

const Index = () => {
  // Gallery images - add more as needed
  const productImages = [
    terrafreeze,
    terrafreezeStand,
    tmjReview,
    // Add more images here (up to 5)
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Announcement Bar */}
      <div className="bg-accent text-accent-foreground py-3 text-center text-base font-semibold">
        <span>🚚 Free Shipping on All Orders | 30-Day Money Back Guarantee</span>
      </div>

      {/* Buy Box Section */}
      <section className="bg-background py-6 md:py-8">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-start">
            <ProductGallery 
              images={productImages}
              testimonial={{
                quote: "TerraFreeze Cream has been a game-changer for my TMJ pain, providing quick cooling relief within minutes of application.",
                author: "Sarah M.",
                avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face"
              }}
            />
            <ProductDetails
              title="NATURAL RELIEF FOR YOUR PAIN"
              subtitle="Reclaim Your Active Life"
              price={29.95}
              rating={4.95}
              reviewCount={100}
              tagline="Apply for at least 3 months for optimal results."
              features={[
                "Fast-acting relief for arthritis and joint inflammation",
                "Reduces muscle pain, stiffness, and swelling",
                "Promotes healing with Emu Oil and Arnica",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Trust Icons Bar */}
      <section className="bg-secondary py-8 border-y border-border">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <Leaf className="w-10 h-10 text-primary" />
              <span className="text-sm font-semibold text-foreground">100% Natural</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <ShieldCheck className="w-10 h-10 text-primary" />
              <span className="text-sm font-semibold text-foreground">GMP Certified</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Award className="w-10 h-10 text-primary" />
              <span className="text-sm font-semibold text-foreground">Lab Tested</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Truck className="w-10 h-10 text-primary" />
              <span className="text-sm font-semibold text-foreground">Free Shipping</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Heart className="w-10 h-10 text-primary" />
              <span className="text-sm font-semibold text-foreground">Vegan Friendly</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Zap className="w-10 h-10 text-primary" />
              <span className="text-sm font-semibold text-foreground">Fast Acting</span>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Testimonials Section */}
      <SocialProof />

      {/* Features + Benefits Section (6-card grid) */}
      <FeaturesAndBenefits />

      {/* How It Works Section */}
      <HowItWorks />

      {/* Invalidate Alternatives / Comparison Section */}
      <RiskReversal />

      {/* FAQ Section */}
      <FAQ />

      {/* Final CTA + Reviews Section */}
      <ReviewsSection />
    </div>
  );
};

export default Index;
