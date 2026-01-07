import { ProductGallery } from "@/components/ProductGallery";
import { ProductDetails } from "@/components/ProductDetails";
import { SocialProof } from "@/components/SocialProof";
import { FeaturesAndBenefits } from "@/components/FeaturesAndBenefits";
import { HowItWorks } from "@/components/HowItWorks";
import { TrustBanner } from "@/components/TrustBanner";
import { ComparisonSection } from "@/components/ComparisonSection";
import { FAQ } from "@/components/FAQ";
import { ReviewsSection } from "@/components/ReviewsSection";
import { PressBanner } from "@/components/PressBanner";
import { GuaranteeSection } from "@/components/GuaranteeSection";
import { ClinicalSection } from "@/components/ClinicalSection";
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
        <span>🚚 Free Shipping on Orders 3+ Tubes | 180-Day Money Back Guarantee</span>
      </div>

      {/* Buy Box Section */}
      <section id="buy-box" className="bg-background py-6 md:py-8">
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
              subtitle="Reclaim Your Active Life. Fast-acting, deep penetrating formula with Emu Oil and Arnica for muscles, joints, and inflammation."
              price={29.95}
              rating={4.5}
              reviewCount={2547}
              tagline="Apply for at least 3 months for optimal results."
              features={[
                "Fast-acting relief for arthritis and joint inflammation",
                "Reduces muscle pain, stiffness, and swelling",
                "Promotes healing with Emu Oil and Arnica",
                "Guaranteed results or your money back",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Press Banner */}
      <PressBanner />

      {/* Trust Banner - Doctor Quote */}
      <TrustBanner />

      {/* Social Proof / Testimonials Section */}
      <SocialProof />

      {/* Features + Benefits Section (6-card grid) */}
      <FeaturesAndBenefits />

      {/* How It Works Section */}
      <HowItWorks />

      {/* Comparison Section */}
      <ComparisonSection />

      {/* Guarantee Section */}
      <GuaranteeSection />

      {/* Clinical Testing Section */}
      <ClinicalSection />

      {/* FAQ Section */}
      <FAQ />

      {/* Final CTA + Reviews Section */}
      <ReviewsSection />
    </div>
  );
};

export default Index;
