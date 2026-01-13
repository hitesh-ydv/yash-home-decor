import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PricingSection = ({ packages, onContactClick }) => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground font-headline mb-3 md:mb-4">
            Transparent Pricing
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the package that fits your budget and requirements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {packages?.map((pkg, index) => (
            <div
              key={pkg?.id}
              className={`relative bg-card rounded-2xl p-6 md:p-8 warm-shadow hover:warm-shadow-lg transition-all duration-300 ${
                pkg?.popular ? 'border-2 border-primary' : 'border border-border'
              }`}
            >
              {pkg?.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs md:text-sm font-semibold rounded-full">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-foreground font-headline mb-2">
                  {pkg?.name}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground mb-4">
                  {pkg?.description}
                </p>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-3xl md:text-4xl font-bold text-primary">
                    ₹{pkg?.price?.toLocaleString('en-IN')}
                  </span>
                  <span className="text-sm md:text-base text-muted-foreground">
                    {pkg?.unit}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                {pkg?.features?.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon name="Check" size={14} color="var(--color-success)" />
                    </div>
                    <span className="text-sm md:text-base text-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                variant={pkg?.popular ? 'default' : 'outline'}
                size="lg"
                fullWidth
                iconName="MessageCircle"
                iconPosition="left"
                onClick={onContactClick}
              >
                Get Quote
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-8 md:mt-12 text-center">
          <p className="text-sm md:text-base text-muted-foreground mb-4">
            All prices are inclusive of materials, installation, and GST. No hidden charges.
          </p>
          <Button
            variant="ghost"
            size="default"
            iconName="Download"
            iconPosition="left"
            onClick={() => {}}
          >
            Download Detailed Price List
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;