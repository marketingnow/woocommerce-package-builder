import { useState } from "react";
import { cn } from "@/lib/utils";

interface ProductGalleryProps {
  images: string[];
}

export const ProductGallery = ({ images }: ProductGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="flex flex-col gap-4">
      <div className="aspect-square bg-secondary rounded-lg overflow-hidden flex items-center justify-center p-4">
        <img
          src={images[selectedImage]}
          alt="TERRAFREEZE Pain Relief Cream"
          className="w-full h-full object-contain"
        />
      </div>
      {images.length > 1 && (
        <div className="grid grid-cols-6 gap-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={cn(
                "aspect-square rounded-md overflow-hidden border-2 transition-colors bg-secondary p-1",
                selectedImage === index
                  ? "border-primary"
                  : "border-transparent hover:border-border"
              )}
            >
              <img
                src={image}
                alt={`Product ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};