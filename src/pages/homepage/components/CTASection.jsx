import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CTASection = () => {
  const navigate = useNavigate();

  const contactMethods = [
    {
      icon: "Phone",
      title: "Call Us",
      value: "+91 88138 88699",
      action: () => window.open('tel:+918813888699', '_self'),
      color: "var(--color-primary)"
    },
    {
      icon: "MessageCircle",
      title: "WhatsApp",
      value: "Chat Now",
      action: () => window.open('https://wa.me/918813888699', '_blank'),
      color: "var(--color-success)"
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-primary to-burnt-orange relative overflow-hidden">
      <div className="absolute inset-0 heritage-pattern opacity-10" />
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 font-headline">
            Ready to Transform Your Home?
          </h2>
          <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto">
            Let's discuss your dream interior project. Our experts are ready to bring your vision to life with quality craftsmanship and innovative design solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 md:mb-12">
          {contactMethods?.map((method, index) => (
            <button
              key={index}
              onClick={method?.action}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1 text-center"
            >
              <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                <Icon name={method?.icon} size={28} color="#FFFFFF" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 font-headline">
                {method?.title}
              </h3>
              <p className="text-sm text-white/80">
                {method?.value}
              </p>
            </button>
          ))}
        </div>


        <div className="mt-8 md:mt-12 text-center">
          <p className="text-sm text-white/70 mb-4">
            Trusted by 1800+ families across Haryana
          </p>
          <div className="flex items-center justify-center gap-6 flex-wrap">
            <div className="flex items-center gap-2">
              <Icon name="MapPin" size={16} color="#FFFFFF" />
              <span className="text-sm text-white/80">Jhajjar, Haryana</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Star" size={16} color="var(--color-golden-amber)" />
              <span className="text-sm text-white/80">4.9/5 Rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;