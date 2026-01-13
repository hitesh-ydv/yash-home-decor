import React, { useEffect } from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import HeroSection from './components/HeroSection';
import StatsCounter from './components/StatsCounter';
import ServiceCards from './components/ServiceCards';
import QuoteCalculator from './components/QuoteCalculator';
import TestimonialCarousel from './components/TestimonialCarousel';
import WhyChooseUs from './components/WhyChooseUs';
import CTASection from './components/CTASection';

const Homepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 pt-16">
        <HeroSection />
        <StatsCounter />
        <ServiceCards />
        <WhyChooseUs />
        <TestimonialCarousel />
        <CTASection />
      </main>

      <Footer />

      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-success flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50 glow-effect"
        aria-label="Chat on WhatsApp"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-7 h-7 text-white"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      </a>
    </div>
  );
};

export default Homepage;