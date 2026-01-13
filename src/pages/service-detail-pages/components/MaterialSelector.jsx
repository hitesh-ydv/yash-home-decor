import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const MaterialSelector = ({ materials }) => {
  const [selectedMaterial, setSelectedMaterial] = useState(materials?.[0]);

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground font-headline mb-3 md:mb-4">
            Material Options
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our premium selection of materials and finishes
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="space-y-4 md:space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {materials?.map((material) => (
                <button
                  key={material?.id}
                  onClick={() => setSelectedMaterial(material)}
                  className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                    selectedMaterial?.id === material?.id
                      ? 'border-primary shadow-lg scale-105'
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  <Image
                    src={material?.thumbnail}
                    alt={material?.thumbnailAlt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent flex items-end p-3">
                    <span className="text-xs md:text-sm font-medium text-white">
                      {material?.name}
                    </span>
                  </div>
                  {selectedMaterial?.id === material?.id && (
                    <div className="absolute top-2 right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                      <Icon name="Check" size={14} color="#FFFFFF" />
                    </div>
                  )}
                </button>
              ))}
            </div>

            <div className="bg-background rounded-xl p-4 md:p-6 space-y-4">
              <h3 className="text-lg md:text-xl font-semibold text-foreground font-headline">
                {selectedMaterial?.name}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {selectedMaterial?.description}
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                <div>
                  <span className="text-xs md:text-sm text-muted-foreground block mb-1">
                    Finish
                  </span>
                  <span className="text-sm md:text-base font-medium text-foreground">
                    {selectedMaterial?.finish}
                  </span>
                </div>
                <div>
                  <span className="text-xs md:text-sm text-muted-foreground block mb-1">
                    Durability
                  </span>
                  <span className="text-sm md:text-base font-medium text-foreground">
                    {selectedMaterial?.durability}
                  </span>
                </div>
                <div>
                  <span className="text-xs md:text-sm text-muted-foreground block mb-1">
                    Maintenance
                  </span>
                  <span className="text-sm md:text-base font-medium text-foreground">
                    {selectedMaterial?.maintenance}
                  </span>
                </div>
                <div>
                  <span className="text-xs md:text-sm text-muted-foreground block mb-1">
                    Price Range
                  </span>
                  <span className="text-sm md:text-base font-medium text-primary">
                    {selectedMaterial?.priceRange}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden warm-shadow-lg">
            <Image
              src={selectedMaterial?.image}
              alt={selectedMaterial?.imageAlt}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaterialSelector;