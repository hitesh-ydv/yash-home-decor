import React from 'react';
import Icon from '../../../components/AppIcon';

const SpecificationSection = ({ specifications }) => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground font-headline mb-3 md:mb-4">
            Technical Specifications
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Detailed specifications and quality standards
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {specifications?.map((spec) => (
            <div
              key={spec?.id}
              className="bg-background rounded-xl p-6 md:p-8 warm-shadow hover:warm-shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name={spec?.icon} size={24} color="var(--color-primary)" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-semibold text-foreground font-headline mb-2">
                    {spec?.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    {spec?.description}
                  </p>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-border">
                {spec?.details?.map((detail, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm md:text-base text-muted-foreground">
                      {detail?.label}
                    </span>
                    <span className="text-sm md:text-base font-medium text-foreground">
                      {detail?.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecificationSection;