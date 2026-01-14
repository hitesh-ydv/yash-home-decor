import React from 'react';
import { useNavigate } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServiceCards = () => {
  const navigate = useNavigate();

  const services = [
    // {
    //   id: 1,
    //   title: "PVC Panels",
    //   description: "Durable, waterproof wall and ceiling solutions with modern aesthetics",
    //   image: "https://cms.interiorcompany.com/wp-content/uploads/2024/06/master-bedroom-pvc-wall-panels-for-bedroom.jpg",
    //   imageAlt: "Modern interior wall decorated with white PVC panels featuring geometric patterns, clean lines, and contemporary design in well-lit residential space",
    //   icon: "Layers",
    //   features: ["Waterproof", "Easy Maintenance", "Cost Effective"],
    //   color: "var(--color-primary)"
    // },
    {
      id: 2,
      title: "Modular Kitchens",
      description: "Smart, space-optimized kitchen designs tailored to your lifestyle",
      image: "https://images.unsplash.com/photo-1654176154397-3133364f22e6",
      imageAlt: "Contemporary modular kitchen with white cabinets, wooden countertops, stainless steel appliances, organized storage, and modern lighting fixtures",
      icon: "ChefHat",
      features: ["Custom Design", "Premium Materials", "Smart Storage"],
      color: "var(--color-accent)",
      category: "kitchen"
    },
    {
      id: 3,
      title: "LED Solutions",
      description: "Energy-efficient lighting that transforms ambiance and mood",
      image: "https://i.pinimg.com/736x/d8/3a/c3/d83ac3ee76ff6d117c927ba96ce7d59e.jpg",
      imageAlt: "Bedroom interior with ambient LED strip lighting along ceiling edges, warm glow illuminating modern furniture and creating cozy atmosphere",
      icon: "Lightbulb",
      features: ["Energy Saving", "Mood Lighting", "Long Lasting"],
      color: "var(--color-golden-amber)",
      category: "led"
    },
    {
      id: 4,
      title: "Almirah",
      description: "Customized storage solutions maximizing space and organization",
      image: "https://i.pinimg.com/1200x/2e/d2/25/2ed225b95684f303b36231d21fc59f41.jpg",
      imageAlt: "Spacious walk-in wardrobe with organized wooden shelving, hanging space for clothes, drawers, and modern interior lighting system",
      icon: "Shirt",
      features: ["Space Optimization", "Custom Fittings", "Quality Hardware"],
      color: "var(--color-deep-forest)",
      category: "wardrobe"
    }];

  const contactMethods = [
    {
      id: 1,
      icon: "Phone",
      title: "Call Us Directly",
      description: "Speak with our design experts for immediate assistance",
      action: "Call Now",
      value: "+91 88138 88699",
      href: "tel:+918813888699",
      color: "var(--color-primary)",
      bgGradient: "from-primary/10 to-burnt-orange/10"
    },
    {
      id: 2,
      icon: "MessageCircle",
      title: "WhatsApp Chat",
      description: "Quick responses and easy sharing of design ideas",
      action: "Start Chat",
      value: "+91 88138 88699",
      href: "https://wa.me/918813888699",
      color: "var(--color-success)",
      bgGradient: "from-success/10 to-deep-forest/10"
    }
  ];

const handleContactClick = (href) => {
  if (!href) return;

  // For external apps like WhatsApp / Phone
  if (href.startsWith('http') || href.startsWith('tel:')) {
    window.location.href = href; // ✅ FIX
    return;
  }

  // For in-page scroll
  if (href.startsWith('#')) {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
};




  const handleServiceClick = (category) => {
    navigate('/service-detail-pages', { state: { category } });

  };

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="grid grid-cols-1 px-4 md:grid-cols-2 mb-10 lg:grid-cols-4 gap-4 md:gap-6">
        {contactMethods?.map((method) => (
          <div
            key={method?.id}
            className={`group relative bg-gradient-to-br ${method?.bgGradient} rounded-2xl p-6 md:p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-warm-lg`}
          >
            <div className="flex flex-col h-full">
              <div className='flex flex-row'>
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-white shadow-warm flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon name={method?.icon} size={24} color={method?.color} />
                </div>

                <div className='flex flex-col ml-4'>
                  <h3 className="text-lg md:text-xl font-semibold text-foreground mb- font-headline">
                    {method?.title}
                  </h3>

                  <div className="mb-4">
                    <p className="text-sm md:text-base font-medium text-foreground">
                      {method?.value}
                    </p>
                  </div>
                </div>
              </div>

              <Button
                variant="outline"
                size="default"
                fullWidth
                onClick={() => handleContactClick(method?.href)}
                className="group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300"
              >
                {method?.action}
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 font-headline">
            Our Premium Services
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive interior solutions designed to transform your living spaces with quality craftsmanship and modern innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services?.map((service) =>
            <div
              key={service?.id}
              className="group cursor-pointer"
              onClick={() => handleServiceClick(service?.category)}>

              <div className="bg-card rounded-xl overflow-hidden warm-shadow hover:warm-shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <Image
                    src={service?.image}
                    alt={service?.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div
                    className="absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-sm"
                    style={{ backgroundColor: `${service?.color}20` }}>

                    <Icon name={service?.icon} size={24} color={service?.color} />
                  </div>
                </div>

                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2 font-headline">
                    {service?.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {service?.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    {service?.features?.map((feature, index) =>
                      <div key={index} className="flex items-center gap-2">
                        <Icon name="Check" size={16} color={service?.color} />
                        <span className="text-xs md:text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center gap-2 text-sm font-medium bg-slate-600 px-2 py-3 justify-center rounded-lg" style={{ color: "white", backgroundColor: service?.color }}>
                    <span>Explore Designs</span>
                    <Icon name="ArrowRight" size={16} color="white" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default ServiceCards;