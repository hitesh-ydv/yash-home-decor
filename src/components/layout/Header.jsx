import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from '../ui/Button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { label: 'Home', path: '/homepage' },
    { label: 'Contact', path: '/contact-locations' },
  ];

  const isActivePath = (path) => location?.pathname === path;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="header">
        <div className="header-container">
          <Link to="/homepage" className="header-logo">
            <div className="header-logo-icon">
              <Icon name="Home" size={24} color="#FFFFFF" />
            </div>
            <span className="header-logo-text">Yash Home Decor</span>
          </Link>

          <nav className="header-nav">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`header-nav-link ${isActivePath(item?.path) ? 'active' : ''}`}
              >
                {item?.label}
              </Link>
            ))}
          </nav>

          <div className="header-actions">
            <Button
              variant="default"
              size="default"
              iconName="Phone"
              iconPosition="left"
              className="hidden lg:flex"
              onClick={() => window.open('tel:+918813888699', '_self')}
            >
              Call Now
            </Button>
            <Button
              variant="outline"
              size="default"
              iconName="MessageCircle"
              iconPosition="left"
              className="hidden lg:flex"
              onClick={() => window.open('https://wa.me/918813888699')}
            >
              WhatsApp
            </Button>
          </div>

          <button
            className="mobile-menu-button z-10"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <Icon name={isMobileMenuOpen ? 'X' : 'Menu'} size={24} color="var(--color-foreground)" />
          </button>
        </div>
      </header>
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          <nav className="mobile-menu-nav">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`mobile-menu-link ${isActivePath(item?.path) ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                {item?.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-4 mt-8">
            <Button
              variant="default"
              size="lg"
              iconName="Phone"
              iconPosition="left"
              fullWidth
              onClick={() => {
                window.open('tel:+918813888699', '_self');
                closeMobileMenu();
              }}
            >
              Call Now
            </Button>
            <Button
              variant="outline"
              size="lg"
              iconName="MessageCircle"
              iconPosition="left"
              fullWidth
              onClick={() => {
                window.open('https://wa.me/918813888699', '_blank');
                closeMobileMenu();
              }}
            >
              WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;