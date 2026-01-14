import React, { useState } from "react";
import ImageLightbox from "./ImageLightbox";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const GallerySection = ({ gallery }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="py-14 bg-background">
      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">Design Gallery</h2>
          <p className="text-muted-foreground mt-2">
            Tap any image to view fullscreen
          </p>
        </div>

        {/* Pinterest Grid */}
        <div className="
          columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6
        ">
          {gallery.map((item, index) => (
            <div
              key={index}
              className="mb-6 break-inside-avoid group cursor-pointer"
              onClick={() =>
                setSelectedImage({
                  src: item.imageUrl,
                  title: item.title
                })
              }
            >
              <div className="relative overflow-hidden rounded-xl shadow-md bg-muted">
                <LazyLoadImage
                  alt={item.title}
                  className="
                    w-full object-cover
                    transition-transform duration-500
                    group-hover:scale-105
                  "
                  src={`${item.imageUrl}?auto=format&fit=crop&w=800&q=80`}
                   />
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        <ImageLightbox
          isOpen={!!selectedImage}
          image={selectedImage?.src}
          title={selectedImage?.title}
          onClose={() => setSelectedImage(null)}
        />

      </div>
    </section>
  );
};

export default GallerySection;
