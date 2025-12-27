import { useState } from "react";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

interface ProductGalleryProps {
  images: string[];
  testimonial?: {
    quote: string;
    author: string;
    avatar?: string;
  };
}

export const ProductGallery = ({ images, testimonial }: ProductGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="flex flex-col gap-6">
      {/* Main Image */}
      <div className="aspect-square bg-secondary rounded-xl overflow-hidden flex items-center justify-center p-6 border border-border">
        <img
          src={images[selectedImage]}
          alt="TERRAFREEZE Pain Relief Cream"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Thumbnail Gallery */}
      {images.length > 1 && (
        <div className="grid grid-cols-5 gap-3">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={cn(
                "aspect-square rounded-lg overflow-hidden border-2 transition-all bg-secondary p-2 hover:scale-105",
                selectedImage === index
                  ? "border-primary ring-2 ring-primary/20"
                  : "border-border hover:border-primary/50"
              )}
            >
              <img
                src={image}
                alt={`Product view ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </button>
          ))}
        </div>
      )}

      {/* Testimonial Quote - Below Gallery */}
      {testimonial && (
        <div className="bg-[hsl(120,40%,95%)] rounded-2xl p-6 relative mt-4">
          <div className="absolute -top-4 right-8">
            <span className="text-4xl text-red-400">❤</span>
          </div>
          <div className="flex items-start gap-4">
            {testimonial.avatar && (
              <img
                src={testimonial.avatar}
                alt={testimonial.author}
                className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md"
              />
            )}
            <div className="flex-1">
              <p className="text-lg text-foreground leading-relaxed">
                {testimonial.quote}
              </p>
              <div className="flex items-center gap-2 mt-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-primary text-primary"
                    />
                  ))}
                </div>
                <span className="text-sm font-medium text-foreground">
                  — {testimonial.author}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
