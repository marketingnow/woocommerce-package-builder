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

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Announcement Bar */}
      <div className="bg-accent text-accent-foreground py-2 text-center text-sm font-medium">
        <span>🚚 Free Shipping on All Orders | 30-Day Money Back Guarantee</span>
      </div>

      {/* Buy Box Section */}
      <section className="bg-background py-8">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <ProductGallery images={[terrafreeze]} />
            <ProductDetails
              title="NATURAL RELIEF FOR YOUR PAIN"
              subtitle="Reclaim Your Active Life"
              price={39.99}
              rating={4.95}
              reviewCount={100}
              testimonialQuote="The pain in my joints is finally manageable. I can move freely again!"
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
      <section className="bg-secondary py-6 border-y border-border">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <Leaf className="w-8 h-8 text-primary" />
              <span className="text-xs font-medium text-foreground">100% Natural</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <ShieldCheck className="w-8 h-8 text-primary" />
              <span className="text-xs font-medium text-foreground">GMP Certified</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Award className="w-8 h-8 text-primary" />
              <span className="text-xs font-medium text-foreground">Lab Tested</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Truck className="w-8 h-8 text-primary" />
              <span className="text-xs font-medium text-foreground">Free Shipping</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Heart className="w-8 h-8 text-primary" />
              <span className="text-xs font-medium text-foreground">Vegan Friendly</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Zap className="w-8 h-8 text-primary" />
              <span className="text-xs font-medium text-foreground">Fast Acting</span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works / 3 Reasons Section */}
      <HowItWorks />

      {/* Features + Natural Ingredients Section */}
      <FeaturesAndBenefits />

      {/* Social Proof / Testimonials Section */}
      <SocialProof />

      {/* Risk Reversal / CTA Section */}
      <RiskReversal />

      {/* FAQ Section */}
      <FAQ />

      {/* Reviews Section */}
      <ReviewsSection />
    </div>
  );
};

export default Index;