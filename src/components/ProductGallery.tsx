import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface ProductGalleryProps {
  images: string[];
  activeImage?: string;
  testimonial?: {
    quote: string;
    author: string;
    avatar?: string;
  };
}

export const ProductGallery = ({ images, activeImage, testimonial }: ProductGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<string>(activeImage ?? images[0]);

  useEffect(() => {
    if (activeImage) {
      setSelectedImage(activeImage);
    }
  }, [activeImage]);

  return (
    <div className="flex flex-col gap-4 lg:sticky lg:top-6 lg:self-start">
      {/* Main Image */}
      <div className="aspect-square bg-secondary rounded-xl overflow-hidden flex items-center justify-center p-6 border border-border">
        <img
          src={selectedImage}
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
              onClick={() => setSelectedImage(image)}
              className={cn(
                "aspect-square rounded-lg overflow-hidden border-2 transition-all bg-secondary p-2 hover:scale-105",
                selectedImage === image
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
        <div className="hidden md:block bg-[hsl(120,40%,95%)] rounded-2xl p-5 relative mt-2">
          <div className="absolute -top-3 right-6">
            <span className="text-3xl text-red-400">❤</span>
          </div>
          <div className="flex items-start gap-4">
            {testimonial.avatar && (
              <img
                src={testimonial.avatar}
                alt={testimonial.author}
                className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md flex-shrink-0"
              />
            )}
            <div className="flex-1">
              <p className="text-base text-foreground leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-2 mt-3">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i}
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="hsl(var(--star))"
                    >
                      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                    </svg>
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
