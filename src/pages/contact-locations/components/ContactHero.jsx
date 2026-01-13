import React from 'react';
import Icon from '../../../components/AppIcon';

const ContactHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-secondary/30 to-warm-cream py-12 md:py-16 lg:py-20 overflow-hidden">
      <div className="absolute inset-0 heritage-pattern opacity-30"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 rounded-full mb-4 md:mb-6 shadow-warm">
            <Icon name="MapPin" size={20} color="var(--color-primary)" />
            <span className="text-xs md:text-sm font-medium text-primary font-cta">
              Serving 25+ Cities Across India
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6 font-headline">
            Let's Create Your Dream Home Together
          </h1>
          
          <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8 leading-relaxed">
            Connect with our expert team through your preferred channel. We're here to transform your vision into reality with personalized consultation and transparent communication.
          </p>

          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            <div className="flex items-center gap-2 bg-white px-4 md:px-6 py-2 md:py-3 rounded-lg shadow-warm">
              <Icon name="Clock" size={18} color="var(--color-success)" />
              <span className="text-xs md:text-sm font-medium text-foreground">
                Response within 2 hours
              </span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 md:px-6 py-2 md:py-3 rounded-lg shadow-warm">
              <Icon name="Shield" size={18} color="var(--color-success)" />
              <span className="text-xs md:text-sm font-medium text-foreground">
                100% Privacy Protected
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;