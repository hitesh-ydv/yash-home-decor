import React from 'react';
import Icon from '../../../components/AppIcon';

const ServiceCoverage = () => {
  const coverageAreas = [
    {
      id: 1,
      region: "Maharashtra",
      cities: ["Mumbai", "Pune", "Nagpur", "Nashik", "Aurangabad", "Thane"],
      icon: "Building2",
      color: "var(--color-primary)"
    },
    {
      id: 2,
      region: "Karnataka",
      cities: ["Bangalore", "Mysore", "Mangalore", "Hubli", "Belgaum"],
      icon: "Home",
      color: "var(--color-success)"
    },
    {
      id: 3,
      region: "Delhi NCR",
      cities: ["New Delhi", "Gurgaon", "Noida", "Ghaziabad", "Faridabad"],
      icon: "MapPin",
      color: "var(--color-accent)"
    },
    {
      id: 4,
      region: "Gujarat",
      cities: ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Gandhinagar"],
      icon: "Landmark",
      color: "var(--color-golden-amber)"
    },
    {
      id: 5,
      region: "Tamil Nadu",
      cities: ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli"],
      icon: "Building",
      color: "var(--color-burnt-orange)"
    },
    {
      id: 6,
      region: "Telangana & AP",
      cities: ["Hyderabad", "Visakhapatnam", "Vijayawada", "Warangal"],
      icon: "Map",
      color: "var(--color-deep-forest)"
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 md:px-6 py-2 md:py-3 rounded-full mb-4 md:mb-6">
            <Icon name="Globe" size={20} color="var(--color-primary)" />
            <span className="text-xs md:text-sm font-medium text-primary font-cta">
              Pan-India Presence
            </span>
          </div>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4 font-headline">
            Service Coverage Across India
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            We bring premium interior solutions to major cities across India with local expertise and nationwide quality standards
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {coverageAreas?.map((area) => (
            <div
              key={area?.id}
              className="group bg-card rounded-2xl p-6 md:p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-warm-lg"
            >
              <div className="flex items-start gap-4 mb-4 md:mb-6">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-white shadow-warm flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Icon name={area?.icon} size={24} color={area?.color} />
                </div>
                <div className="flex-grow min-w-0">
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-1 font-headline">
                    {area?.region}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    {area?.cities?.length} Cities Covered
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {area?.cities?.map((city, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-muted rounded-lg text-xs md:text-sm text-foreground"
                  >
                    <Icon name="MapPin" size={12} color="var(--color-muted-foreground)" />
                    {city}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 md:mt-12 bg-gradient-to-br from-primary/5 to-secondary/30 rounded-2xl p-6 md:p-8 lg:p-12 text-center">
          <Icon name="Info" size={32} color="var(--color-primary)" className="mx-auto mb-4 md:mb-6" />
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4 font-headline">
            Don't See Your City?
          </h3>
          <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto">
            We're rapidly expanding our service network. Contact us to check if we can serve your location or to discuss special project arrangements.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <a
              href="tel:+919876543210"
              className="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-primary text-white rounded-lg font-medium text-sm md:text-base hover:bg-primary/90 transition-colors shadow-warm"
            >
              <Icon name="Phone" size={20} color="#FFFFFF" />
              Call to Inquire
            </a>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-white text-foreground rounded-lg font-medium text-sm md:text-base hover:bg-muted transition-colors border border-border"
            >
              <Icon name="MessageCircle" size={20} color="var(--color-success)" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCoverage;