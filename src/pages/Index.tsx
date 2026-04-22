import { useState } from "react";
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
import terrafreeze3Pack from "@/assets/terrafreeze-3-pack.png";
import terrafreeze6Pack from "@/assets/terrafreeze-6-pack.png";

const Index = () => {
  // Thumbnails shown in gallery (no 3/6 pack here — they only appear when selected)
  const productImages = [
    terrafreeze,
    terrafreezeStand,
    tmjReview,
  ];

  // Image swapped into the main viewer when a package is selected
  const packageImageMap: Record<string, string> = {
    "1_tube": terrafreeze,
    "3_tubes": terrafreeze3Pack,
    "6_tubes": terrafreeze6Pack,
  };

  const [activeImage, setActiveImage] = useState<string>(terrafreeze3Pack);

  return (
    <div className="min-h-screen bg-background">
      {/* Preload package images so the gallery swap is instant */}
      <div aria-hidden className="hidden">
        <img src={terrafreeze} alt="" />
        <img src={terrafreeze3Pack} alt="" />
        <img src={terrafreeze6Pack} alt="" />
      </div>

      {/* Announcement Bar */}
      <div className="bg-accent text-accent-foreground py-3 text-center text-base font-semibold">
        <span>🚚 Free Shipping on Orders 3+ Jars | 180-Day Money Back Guarantee</span>
      </div>

      {/* Buy Box Section */}
      <section id="buy-box" className="bg-background py-6 md:py-8">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-start">
            <ProductGallery 
              images={productImages}
              activeImage={activeImage}
              testimonial={{
                quote: "TerraFreeze Cream has been a game-changer for my TMJ pain, providing quick cooling relief within minutes of application.",
                author: "Sarah M.",
                avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face"
              }}
            />
            <ProductDetails
              title="10% Fast Acting Pain Relief Cream by TERRAFREEZE"
              subtitle="Maximum-strength 10% Menthol delivers powerful cooling relief in seconds — targeting sore muscles, stiff joints, and chronic inflammation at the source."
              price={29.95}
              rating={4.5}
              reviewCount={2547}
              tagline="Apply for at least 3 months for optimal results."
              features={[
                "Maximum-strength 10% Menthol for fast cooling relief",
                "Soothes arthritis, back pain, and joint stiffness in minutes",
                "Deep-penetrating formula with Emu Oil and Arnica",
                "Non-greasy, fast-absorbing — works in seconds",
              ]}
              onPackageChange={(id) => setActiveImage(packageImageMap[id] ?? terrafreeze3Pack)}
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
