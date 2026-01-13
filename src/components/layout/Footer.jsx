import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../AppIcon';

const Footer = () => {
  const currentYear = new Date()?.getFullYear();

  const quickLinks = [
    { label: 'Home', path: '/homepage' },
    { label: 'Contact', path: '/contact-locations' },
  ];

  const services = [
    { label: 'PVC Panels', path: '/' },
    { label: 'Modular Kitchens', path: '/' },
    { label: 'LED Solutions', path: '/' },
    { label: 'Almirah', path: '/' },
  ];

  const contactInfo = [
    { icon: 'Phone', text: '+91 88138 88699', href: 'tel:+918813888699' },
    { icon: 'MapPin', text: 'Jhajjar, Haryana, India', href: null },
  ];

  const socialLinks = [
    { icon: 'Facebook', href: 'https://facebook.com', label: 'Facebook' },
    { icon: 'Instagram', href: 'https://instagram.com', label: 'Instagram' },
  ];

  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-primary to-burnt-orange shadow-warm">
                <Icon name="Home" size={24} color="#FFFFFF" />
              </div>
              <span className="text-xl font-semibold text-foreground font-headline">
                Yash Home Decor
              </span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Transforming houses into dream homes with expert craftsmanship and modern design solutions.
            </p>
            <div className="flex gap-3">
              {socialLinks?.map((social) => (
                <a
                  key={social?.label}
                  href={social?.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-muted hover:bg-primary flex items-center justify-center transition-colors duration-300"
                  aria-label={social?.label}
                >
                  <Icon name={social?.icon} size={18} color="var(--color-foreground)" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4 font-headline">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks?.map((link) => (
                <li key={link?.path}>
                  <Link
                    to={link?.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4 font-headline">Our Services</h3>
            <ul className="space-y-3">
              {services?.map((service) => (
                <li key={service?.label}>
                  <Link
                    to={service?.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {service?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4 font-headline">Contact Us</h3>
            <ul className="space-y-3">
              {contactInfo?.map((contact, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Icon name={contact?.icon} size={16} color="var(--color-primary)" className="mt-0.5" />
                  {contact?.href ? (
                    <a
                      href={contact?.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {contact?.text}
                    </a>
                  ) : (
                    <span className="text-sm text-muted-foreground">{contact?.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} Yash Home Decor. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                to="/homepage"
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                to="/homepage"
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;