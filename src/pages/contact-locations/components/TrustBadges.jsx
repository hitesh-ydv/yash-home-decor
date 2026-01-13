import React from 'react';
import Icon from '../../../components/AppIcon';

const TrustBadges = () => {
  const trustMetrics = [
    {
      id: 1,
      icon: "Users",
      value: "5000+",
      label: "Happy Customers",
      description: "Across India"
    },
    {
      id: 2,
      icon: "Star",
      value: "4.8/5",
      label: "Customer Rating",
      description: "Based on 2500+ reviews"
    },
    {
      id: 3,
      icon: "Award",
      value: "12+",
      label: "Years Experience",
      description: "In interior design"
    },
    {
      id: 4,
      icon: "Clock",
      value: "2 Hours",
      label: "Response Time",
      description: "Guaranteed"
    }
  ];

  const certifications = [
    {
      id: 1,
      name: "ISO 9001:2015",
      description: "Quality Management Certified",
      icon: "ShieldCheck"
    },
    {
      id: 2,
      name: "Green Building",
      description: "Eco-Friendly Materials",
      icon: "Leaf"
    },
    {
      id: 3,
      name: "Safety Standards",
      description: "BIS Certified Products",
      icon: "Shield"
    },
    {
      id: 4,
      name: "Warranty Protected",
      description: "5 Year Comprehensive",
      icon: "FileCheck"
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-primary/5 via-secondary/20 to-warm-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4 font-headline">
            Why Choose EliteInteriors
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Trusted by thousands of families across India for quality craftsmanship and exceptional service
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
          {trustMetrics?.map((metric) => (
            <div
              key={metric?.id}
              className="bg-white rounded-2xl p-6 md:p-8 text-center shadow-warm hover:shadow-warm-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Icon name={metric?.icon} size={24} color="var(--color-primary)" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1 font-headline">
                {metric?.value}
              </div>
              <div className="text-sm md:text-base font-semibold text-foreground mb-1">
                {metric?.label}
              </div>
              <div className="text-xs md:text-sm text-muted-foreground">
                {metric?.description}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-6 md:p-8 lg:p-10 shadow-warm-lg">
          <div className="text-center mb-6 md:mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 font-headline">
              Certified Quality & Standards
            </h3>
            <p className="text-sm md:text-base text-muted-foreground">
              Our commitment to excellence is backed by industry certifications and quality assurance
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {certifications?.map((cert) => (
              <div
                key={cert?.id}
                className="flex flex-col items-center text-center p-4 md:p-6 rounded-xl bg-muted/30 hover:bg-primary/5 transition-colors duration-300"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white shadow-warm flex items-center justify-center mb-3 md:mb-4">
                  <Icon name={cert?.icon} size={24} color="var(--color-success)" />
                </div>
                <h4 className="text-sm md:text-base font-semibold text-foreground mb-1">
                  {cert?.name}
                </h4>
                <p className="text-xs md:text-sm text-muted-foreground">
                  {cert?.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 md:mt-12 bg-white rounded-2xl p-6 md:p-8 shadow-warm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-success/10 flex items-center justify-center flex-shrink-0">
                <Icon name="Headphones" size={24} color="var(--color-success)" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-1 font-headline">
                  24/7 Customer Support
                </h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  Emergency support available for ongoing projects
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <a
                href="tel:+918813888699"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium text-sm hover:bg-primary/90 transition-colors"
              >
                <Icon name="Phone" size={18} color="#FFFFFF" />
                Emergency Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;