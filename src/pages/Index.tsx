import { ProductGallery } from "@/components/ProductGallery";
import { ProductDetails } from "@/components/ProductDetails";

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

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <ProductGallery images={productImages} />
          <ProductDetails
            title="Your Product Name"
            price={59.99}
            rating={4.5}
            reviewCount={314}
            promo="Black Friday: Buy 2 Pairs Get 2 Free"
            features={[
              "High-quality materials for long-lasting durability",
              "Designed for maximum comfort and performance",
              "Perfect for all-day wear in any conditions",
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
