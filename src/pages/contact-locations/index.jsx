import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import ContactHero from './components/ContactHero';
import QuickContactCards from './components/QuickContactCards';
import OfficeLocations from './components/OfficeLocations';
import ServiceCoverage from './components/ServiceCoverage';
import ConsultationForm from './components/ConsultationForm';
import TrustBadges from './components/TrustBadges';
import SocialConnect from './components/SocialConnect';

const ContactLocations = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>

      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        <main className="flex-grow pt-16">
          {/* <ContactHero /> */}
          <QuickContactCards />
          <OfficeLocations />
          {/* <ServiceCoverage /> */}
          {/* <ConsultationForm /> */}
          {/* <TrustBadges /> */}
          <SocialConnect />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ContactLocations;