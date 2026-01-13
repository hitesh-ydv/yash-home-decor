import React from 'react';
import Icon from '../../../components/AppIcon';

const ProcessSection = ({ steps }) => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground font-headline mb-3 md:mb-4">
            Our Process
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple, transparent, and hassle-free installation process
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative">
            {steps?.map((step, index) => (
              <div key={step?.id} className="relative">
                <div className="bg-card rounded-2xl p-6 md:p-8 warm-shadow hover:warm-shadow-lg transition-all duration-300 h-full">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative mb-4 md:mb-6">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-primary to-burnt-orange flex items-center justify-center shadow-lg">
                        <Icon name={step?.icon} size={32} color="#FFFFFF" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-golden-amber rounded-full flex items-center justify-center text-sm font-bold text-foreground">
                        {index + 1}
                      </div>
                    </div>

                    <h3 className="text-lg md:text-xl font-semibold text-foreground font-headline mb-2 md:mb-3">
                      {step?.title}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-3 md:mb-4">
                      {step?.description}
                    </p>
                    <span className="text-xs md:text-sm text-primary font-medium">
                      {step?.duration}
                    </span>
                  </div>
                </div>

                {index < steps?.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-8 -translate-y-1/2 z-10">
                    <Icon name="ArrowRight" size={24} color="var(--color-primary)" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;