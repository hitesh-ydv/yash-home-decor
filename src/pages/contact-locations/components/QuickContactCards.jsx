import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const QuickContactCards = () => {
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

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4 font-headline">
            Choose Your Preferred Contact Method
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            We're available through multiple channels to ensure you get the support you need, when you need it
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {contactMethods?.map((method) => (
            <div
              key={method?.id}
              className={`group relative bg-gradient-to-br ${method?.bgGradient} rounded-2xl p-6 md:p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-warm-lg`}
            >
              <div className="flex flex-col h-full">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-white shadow-warm flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon name={method?.icon} size={24} color={method?.color} />
                </div>

                <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2 font-headline">
                  {method?.title}
                </h3>

                <p className="text-xs md:text-sm text-muted-foreground mb-4 flex-grow">
                  {method?.description}
                </p>

                <div className="mb-4">
                  <p className="text-sm md:text-base font-medium text-foreground">
                    {method?.value}
                  </p>
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
      </div>
    </section>
  );
};

export default QuickContactCards;