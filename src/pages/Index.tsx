import { ProductGallery } from "@/components/ProductGallery";
import { ProductDetails } from "@/components/ProductDetails";
import { SocialProof } from "@/components/SocialProof";
import { FeaturesAndBenefits } from "@/components/FeaturesAndBenefits";
import { HowItWorks } from "@/components/HowItWorks";
import { RiskReversal } from "@/components/RiskReversal";
import { FAQ } from "@/components/FAQ";
import { ReviewsSection } from "@/components/ReviewsSection";
import { Shield, Zap, Heart, Package, Truck, CheckCircle } from "lucide-react";

const Index = () => {
  // Placeholder images - replace with your actual product images
  const productImages = [
    "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800&h=800&fit=crop",
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=800&fit=crop",
    "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=800&h=800&fit=crop",
    "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=800&fit=crop",
    "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&h=800&fit=crop",
    "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=800&h=800&fit=crop",
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      rating: 5,
      text: "Absolutely love these! The quality is exceptional and they're incredibly comfortable. Best purchase I've made this year.",
      verified: true,
    },
    {
      name: "James R.",
      rating: 5,
      text: "I was skeptical at first, but these exceeded all my expectations. The multi-pack deal is amazing value.",
      verified: true,
    },
    {
      name: "Emily T.",
      rating: 5,
      text: "Perfect for daily use. I've recommended these to all my friends and family. Worth every penny!",
      verified: true,
    },
  ];

  const features = [
    {
      icon: Shield,
      title: "Premium Durability",
      description: "Reinforced construction with high-grade materials that last 3x longer than competitors",
      benefit: "Save money by replacing less often",
    },
    {
      icon: Zap,
      title: "Enhanced Performance",
      description: "Advanced technology provides superior comfort and support throughout the day",
      benefit: "Stay comfortable from morning to night",
    },
    {
      icon: Heart,
      title: "All-Day Comfort",
      description: "Ergonomic design that adapts to your needs for maximum comfort",
      benefit: "Feel great no matter what you're doing",
    },
    {
      icon: Package,
      title: "Value Bundles",
      description: "Multi-pack options that give you more for your money",
      benefit: "Stock up and save up to 33%",
    },
    {
      icon: Truck,
      title: "Fast & Free Shipping",
      description: "Get your order delivered to your door at no extra cost",
      benefit: "Start enjoying your purchase sooner",
    },
    {
      icon: CheckCircle,
      title: "Quality Guarantee",
      description: "Every product is inspected and backed by our satisfaction guarantee",
      benefit: "Buy with complete confidence",
    },
  ];

  const steps = [
    {
      icon: Package,
      title: "Step 1: Order",
      description: "Choose your package size and complete your order in seconds. We offer secure checkout and multiple payment options.",
    },
    {
      icon: Truck,
      title: "Step 2: Receive",
      description: "Your order ships within 24 hours. Track your package every step of the way with free shipping included.",
    },
    {
      icon: Heart,
      title: "Step 3: Enjoy",
      description: "Experience the difference immediately. Join thousands of satisfied customers who made the switch.",
    },
  ];

  const faqs = [
    {
      question: "How long does shipping take?",
      answer: "We offer free standard shipping which typically takes 3-5 business days. Express shipping options are also available at checkout for faster delivery.",
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day money-back guarantee. If you're not completely satisfied with your purchase, simply return it for a full refund. We'll even cover the return shipping costs.",
    },
    {
      question: "Are the multi-pack deals really worth it?",
      answer: "Absolutely! Our multi-pack options offer significant savings - up to 33% off compared to buying individually. Plus, you'll always have extras on hand when you need them.",
    },
    {
      question: "How do I know what size to order?",
      answer: "We have a comprehensive sizing guide available on our product page. If you're between sizes, we recommend sizing up. Our customer service team is also available to help you choose the perfect fit.",
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes! We ship to most countries worldwide. International shipping rates and delivery times vary by location and are calculated at checkout.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Buy Box Section */}
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <ProductGallery images={productImages} />
          <ProductDetails
            title="Premium Ski Socks"
            price={59.99}
            rating={4.8}
            reviewCount={314}
            promo="Black Friday: Buy 2 Pairs Get 2 Free"
            features={[
              "High-quality merino wool blend for superior warmth",
              "Reinforced heel and toe for long-lasting durability",
              "Moisture-wicking technology keeps feet dry all day",
              "Graduated compression for improved circulation",
              "Perfect for skiing, snowboarding, and winter activities",
            ]}
          />
        </div>
      </div>

      {/* Social Proof Section */}
      <div className="container mx-auto px-4 max-w-7xl">
        <SocialProof testimonials={testimonials} />
      </div>

      {/* Features + Benefits Section */}
      <div className="container mx-auto px-4 max-w-7xl">
        <FeaturesAndBenefits features={features} />
      </div>

      {/* How It Works Section */}
      <div className="container mx-auto px-4 max-w-7xl">
        <HowItWorks steps={steps} />
      </div>

      {/* Risk Reversal Section */}
      <div className="container mx-auto px-4 max-w-7xl">
        <RiskReversal />
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-4 max-w-7xl">
        <FAQ items={faqs} />
      </div>

      {/* Reviews Section */}
      <div className="container mx-auto px-4 max-w-7xl">
        <ReviewsSection />
      </div>
    </div>
  );
};

export default Index;
