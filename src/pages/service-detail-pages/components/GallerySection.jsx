import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const GallerySection = ({ gallery }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = ['all', ...new Set(gallery.map(item => item.category))];

  const filteredGallery = activeFilter === 'all' 
    ? gallery 
    : gallery?.filter(item => item?.category === activeFilter);

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground font-headline mb-3 md:mb-4">
            Project Gallery
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our completed projects and get inspired for your dream space
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12">
          {filters?.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 md:px-6 py-2 md:py-2.5 rounded-lg text-sm md:text-base font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              {filter?.charAt(0)?.toUpperCase() + filter?.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {filteredGallery?.map((item) => (
            <div
              key={item?.id}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer warm-shadow hover:warm-shadow-lg transition-all duration-300"
              onClick={() => setSelectedImage(item)}
            >
              <Image
                src={item?.image}
                alt={item?.imageAlt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-base md:text-lg font-semibold text-white mb-1 md:mb-2">
                    {item?.title}
                  </h3>
                  <p className="text-xs md:text-sm text-white/80 line-clamp-2">
                    {item?.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 w-10 h-10 md:w-12 md:h-12 rounded-full bg-card flex items-center justify-center hover:bg-muted transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <Icon name="X" size={24} color="var(--color-foreground)" />
            </button>
            <div className="max-w-5xl w-full" onClick={(e) => e?.stopPropagation()}>
              <div className="aspect-[16/9] rounded-xl overflow-hidden mb-4">
                <Image
                  src={selectedImage?.image}
                  alt={selectedImage?.imageAlt}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  {selectedImage?.title}
                </h3>
                <p className="text-sm md:text-base text-white/80">
                  {selectedImage?.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;