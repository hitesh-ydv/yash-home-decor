import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import ServiceTabs from "./components/ServiceTabs";
import GallerySection from "./components/GallerySection";
import { galleryData } from "./components/galleryData";
import ContactModal from "./components/ContactModal";
import Icon from "../../components/AppIcon";

/* ----------------------------------
   Tabs Configuration
----------------------------------- */
const tabs = [
  { id: "gallery", label: "Gallery" },
  { id: "materials", label: "Materials" },
  { id: "pricing", label: "Pricing" },
  { id: "process", label: "Process" }
];

import { useLocation } from "react-router-dom";

const ServiceDetailPages = () => {
  const [activeTab, setActiveTab] = useState("gallery");
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const location = useLocation();
  const selectedCategory = location.state?.category || "Kitchen";

  /* ----------------------------------
     Scroll To Top Button Logic
  ----------------------------------- */
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const filteredGallery = galleryData.filter(
  (item) => item.category === selectedCategory
);


  /* ----------------------------------
     Tab Content Renderer
  ----------------------------------- */
  const renderTabContent = () => {

      return <GallerySection gallery={filteredGallery} />;
  };

  return (
    <>


      <div className="min-h-screen bg-background flex flex-col">
        {/* Header */}
        <Header />

          <title>
            Premium PVC Wall Panels | EliteInteriors
          </title>
          <meta
            name="description"
            content="Explore premium PVC wall panel designs with modern interiors. Browse our Pinterest-style gallery for home and office inspiration."
          />

        {/* Main Content */}
        <main className="flex-1 pt-16 space-y-16">
          {/* <ServiceTabs
            tabs={tabs}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          /> */}

          {renderTabContent()}
        </main>

        {/* Footer */}
        <Footer />

        {/* Contact Modal */}
        <ContactModal
          isOpen={isContactModalOpen}
          onClose={() => setIsContactModalOpen(false)}
          serviceName="PVC Panels"
        />

        {/* Scroll To Top */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 w-12 h-12 md:w-14 md:h-14 
                       rounded-full bg-primary text-primary-foreground 
                       shadow-lg hover:shadow-xl 
                       flex items-center justify-center 
                       transition-all duration-300 z-40"
            aria-label="Scroll to top"
          >
            <Icon name="ArrowUp" size={24} color="#FFFFFF" />
          </button>
        )}

        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/918813888699"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 left-6 w-12 h-12 md:w-14 md:h-14 
                     rounded-full bg-success text-white 
                     shadow-lg hover:shadow-xl 
                     flex items-center justify-center 
                     transition-all duration-300 z-40 glow-effect"
          aria-label="Chat on WhatsApp"
        >
          <Icon name="MessageCircle" size={24} color="#FFFFFF" />
        </a>
      </div>
    </>
  );
};

export default ServiceDetailPages;
