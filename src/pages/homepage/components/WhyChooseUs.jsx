import React from 'react';
import Icon from '../../../components/AppIcon';

const WhyChooseUs = () => {
  const features = [
    {
      icon: "Award",
      title: "5+ Years Experience",
      description: "Proven track record of delivering excellence in interior design and execution across thousands of projects",
      color: "var(--color-primary)"
    },
    {
      icon: "Shield",
      title: "Quality Assurance",
      description: "Premium materials, certified craftsmen, and rigorous quality checks at every stage of your project",
      color: "var(--color-success)"
    },
    {
      icon: "IndianRupee",
      title: "Transparent Pricing",
      description: "No hidden costs, detailed quotations, and flexible payment plans to suit your budget",
      color: "var(--color-golden-amber)"
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 font-headline">
            Why Choose us?
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Your trusted partner in creating beautiful, functional spaces that reflect your personality and lifestyle
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features?.map((feature, index) => (
            <div
              key={index}
              className="bg-background rounded-xl p-6 warm-shadow hover:warm-shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: `${feature?.color}15` }}
              >
                <Icon name={feature?.icon} size={28} color={feature?.color} />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3 font-headline">
                {feature?.title}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {feature?.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;