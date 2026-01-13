import React from 'react';
import Icon from '../../../components/AppIcon';

const WarrantySection = ({ warranty }) => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-primary/5 via-warm-cream to-secondary/10 rounded-3xl p-8 md:p-12 lg:p-16 heritage-pattern">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-primary to-burnt-orange flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Icon name="Shield" size={32} color="#FFFFFF" />
            </div>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground font-headline mb-4">
              {warranty?.title}
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-8 md:mb-12">
              {warranty?.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
              {warranty?.features?.map((feature, index) => (
                <div key={index} className="bg-background rounded-xl p-6 warm-shadow">
                  <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center mx-auto mb-4">
                    <Icon name={feature?.icon} size={24} color="var(--color-success)" />
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-foreground mb-2">
                    {feature?.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    {feature?.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-background rounded-xl p-6 md:p-8">
              <h3 className="text-lg md:text-xl font-semibold text-foreground font-headline mb-4">
                What's Covered
              </h3>
              <ul className="space-y-3 text-left max-w-2xl mx-auto">
                {warranty?.coverage?.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon name="Check" size={14} color="var(--color-success)" />
                    </div>
                    <span className="text-sm md:text-base text-foreground">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WarrantySection;