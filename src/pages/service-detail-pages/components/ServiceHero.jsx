import React from 'react';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ServiceHero = ({ service, onContactClick }) => {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-warm-cream to-secondary/10 py-12 md:py-16 lg:py-20 overflow-hidden">
      <div className="absolute inset-0 heritage-pattern opacity-30"></div>
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-4 md:space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              <span className="text-xs md:text-sm font-medium text-primary font-cta">
                Premium {service?.category}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground font-headline leading-tight">
              {service?.title}
            </h1>
            
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              {service?.description}
            </p>
            
            <div className="flex flex-wrap gap-3 md:gap-4 pt-2">
              <Button
                variant="default"
                size="lg"
                iconName="MessageCircle"
                iconPosition="left"
                onClick={onContactClick}
              >
                Get Free Quote
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Phone"
                iconPosition="left"
                onClick={() => window.open('tel:+919876543210', '_self')}
              >
                Call Now
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-6 md:gap-8 pt-4 border-t border-border">
              {service?.highlights?.map((highlight, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                  </div>
                  <span className="text-sm md:text-base text-foreground font-medium whitespace-nowrap">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden warm-shadow-lg">
              <Image
                src={service?.heroImage}
                alt={service?.heroImageAlt}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-golden-amber to-burnt-orange rounded-2xl opacity-20 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;