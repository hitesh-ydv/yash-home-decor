import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import ServiceHero from './components/ServiceHero';
import ServiceTabs from './components/ServiceTabs';
import GallerySection from './components/GallerySection';
import MaterialSelector from './components/MaterialSelector';
import PricingSection from './components/PricingSection';
import TestimonialSection from './components/TestimonialSection';
import ProcessSection from './components/ProcessSection';
import SpecificationSection from './components/SpecificationSection';
import WarrantySection from './components/WarrantySection';
import ContactModal from './components/ContactModal';
import Icon from '../../components/AppIcon';

const ServiceDetailPages = () => {
  const [activeTab, setActiveTab] = useState('gallery');
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const serviceData = {
    category: "Interior Solutions",
    title: "Premium PVC Wall Panels",
    description: "Transform your walls with our premium PVC panels that combine durability, aesthetics, and easy maintenance. Perfect for modern homes seeking elegant and long-lasting wall solutions.",
    heroImage: "https://images.unsplash.com/photo-1616728016845-cb1d37c0e6a7",
    heroImageAlt: "Modern living room with elegant white PVC wall panels featuring geometric patterns and warm LED lighting creating sophisticated ambiance",
    highlights: ["10 Year Warranty", "Easy Maintenance", "Water Resistant"]
  };

  const tabs = [
  { id: 'gallery', label: 'Gallery', icon: 'Images' },
  { id: 'materials', label: 'Materials', icon: 'Layers' },
  { id: 'pricing', label: 'Pricing', icon: 'IndianRupee' },
  { id: 'testimonials', label: 'Reviews', icon: 'Star' },
  { id: 'process', label: 'Process', icon: 'ListChecks' },
  { id: 'specifications', label: 'Specs', icon: 'FileText' },
  { id: 'warranty', label: 'Warranty', icon: 'Shield' }];


  const galleryData = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1723810391394-2f0d58042ad4",
    imageAlt: "Luxurious bedroom with textured beige PVC wall panels behind bed creating warm cozy atmosphere with ambient lighting",
    title: "Master Bedroom Transformation",
    description: "Elegant textured panels creating a warm and cozy atmosphere",
    category: "bedroom"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1653972233739-667468bbd5a9",
    imageAlt: "Contemporary living room featuring white marble-effect PVC panels with gold accents and modern furniture arrangement",
    title: "Modern Living Space",
    description: "Contemporary design with marble-effect panels",
    category: "living"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1721742126044-dd6ac3cf434f",
    imageAlt: "Spacious dining area with dark wood-textured PVC panels complementing elegant dining table and pendant lighting",
    title: "Dining Area Elegance",
    description: "Wood-textured panels adding sophistication",
    category: "dining"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1629236714864-0162bbbdaab3",
    imageAlt: "Professional home office with sleek gray PVC panels providing modern minimalist backdrop for workspace",
    title: "Home Office Setup",
    description: "Professional look with sleek gray panels",
    category: "office"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1507178593478-4cc8e1711ccf",
    imageAlt: "Vibrant children\'s bedroom with colorful geometric PVC panels creating playful energetic environment",
    title: "Kids Room Design",
    description: "Colorful and playful panel designs",
    category: "bedroom"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1629371340605-a8e395cc9595",
    imageAlt: "Elegant hallway corridor with vertical striped PVC panels and recessed lighting creating depth and dimension",
    title: "Hallway Enhancement",
    description: "Vertical panels creating visual height",
    category: "hallway"
  }];


  const materialsData = [
  {
    id: 1,
    name: "Classic White",
    thumbnail: "https://img.rocket.new/generatedImages/rocket_gen_img_16b923ff3-1766921324193.png",
    thumbnailAlt: "Close-up of smooth white PVC panel showing pristine matte finish and seamless texture",
    image: "https://images.unsplash.com/photo-1610916215778-23f62bd9f707",
    imageAlt: "Full wall installation of classic white PVC panels in modern minimalist room with natural lighting",
    description: "Timeless elegance with a smooth matte finish. Perfect for creating bright, spacious interiors that never go out of style.",
    finish: "Matte",
    durability: "High",
    maintenance: "Easy",
    priceRange: "₹80-120/sq.ft"
  },
  {
    id: 2,
    name: "Wood Texture",
    thumbnail: "https://images.unsplash.com/photo-1677338003679-b422eb979c5d",
    thumbnailAlt: "Detailed view of rich brown wood-textured PVC panel showing realistic grain patterns and natural finish",
    image: "https://images.unsplash.com/photo-1697809899844-24bb7de99a2c",
    imageAlt: "Living room featuring warm wood-textured PVC panels creating cozy rustic ambiance with modern furniture",
    description: "Authentic wood grain texture without the maintenance hassles. Brings warmth and natural beauty to any space.",
    finish: "Textured",
    durability: "Very High",
    maintenance: "Very Easy",
    priceRange: "₹100-150/sq.ft"
  },
  {
    id: 3,
    name: "Marble Effect",
    thumbnail: "https://images.unsplash.com/photo-1690049089775-b915262c89d0",
    thumbnailAlt: "Luxurious white marble-effect PVC panel showing elegant veining patterns and glossy polished surface",
    image: "https://images.unsplash.com/photo-1701250421566-a6ef7ce9bc40",
    imageAlt: "Sophisticated bathroom with marble-effect PVC panels creating spa-like luxury atmosphere with gold fixtures",
    description: "Luxurious marble aesthetics at a fraction of the cost. Adds sophistication and grandeur to premium spaces.",
    finish: "Glossy",
    durability: "High",
    maintenance: "Easy",
    priceRange: "₹120-180/sq.ft"
  },
  {
    id: 4,
    name: "3D Geometric",
    thumbnail: "https://images.unsplash.com/photo-1735646513650-3338d747b573",
    thumbnailAlt: "Modern 3D geometric PVC panel with raised triangular patterns creating dynamic shadow play",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_13927a9d1-1768229978367.png",
    imageAlt: "Contemporary office space with 3D geometric PVC panels adding depth and visual interest to accent wall",
    description: "Contemporary 3D patterns that create stunning visual depth. Perfect for modern accent walls and feature spaces.",
    finish: "Textured 3D",
    durability: "High",
    maintenance: "Moderate",
    priceRange: "₹150-220/sq.ft"
  },
  {
    id: 5,
    name: "Stone Finish",
    thumbnail: "https://images.unsplash.com/photo-1662273132432-60d37cd8162c",
    thumbnailAlt: "Realistic stone-textured PVC panel showing natural rock surface patterns in gray tones",
    image: "https://images.unsplash.com/photo-1533673662755-98c661c601a1",
    imageAlt: "Rustic dining area with stone-finish PVC panels creating natural earthy atmosphere with wooden furniture",
    description: "Natural stone aesthetics with modern durability. Ideal for creating rustic or industrial-themed interiors.",
    finish: "Rough Textured",
    durability: "Very High",
    maintenance: "Easy",
    priceRange: "₹110-160/sq.ft"
  },
  {
    id: 6,
    name: "Metallic Shine",
    thumbnail: "https://images.unsplash.com/photo-1570575803021-258d74f474ad",
    thumbnailAlt: "Sleek metallic silver PVC panel with brushed finish reflecting ambient light beautifully",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1616af4ff-1768229978854.png",
    imageAlt: "Ultra-modern living room with metallic-shine PVC panels creating futuristic ambiance with LED lighting",
    description: "Contemporary metallic finish for ultra-modern spaces. Creates stunning light reflections and futuristic appeal.",
    finish: "Metallic",
    durability: "High",
    maintenance: "Easy",
    priceRange: "₹130-190/sq.ft"
  }];


  const pricingData = [
  {
    id: 1,
    name: "Basic",
    description: "Perfect for small rooms and budget-conscious projects",
    price: 85,
    unit: "per sq.ft",
    popular: false,
    features: [
    "Standard PVC panels",
    "Basic installation",
    "5 year warranty",
    "2 color options",
    "Standard finishing",
    "Basic maintenance guide"]

  },
  {
    id: 2,
    name: "Premium",
    description: "Most popular choice for complete home makeovers",
    price: 135,
    unit: "per sq.ft",
    popular: true,
    features: [
    "Premium quality panels",
    "Professional installation",
    "10 year warranty",
    "10+ design options",
    "Premium finishing",
    "Free maintenance kit",
    "Design consultation",
    "Post-installation support"]

  },
  {
    id: 3,
    name: "Luxury",
    description: "Ultimate solution for luxury homes and villas",
    price: 195,
    unit: "per sq.ft",
    popular: false,
    features: [
    "Luxury imported panels",
    "Expert installation team",
    "15 year warranty",
    "Unlimited customization",
    "Premium finishing",
    "Lifetime maintenance support",
    "3D visualization",
    "Priority service",
    "Smart home integration"]

  }];


  const testimonialsData = [
  {
    id: 1,
    name: "Rajesh Kumar",
    location: "Mumbai, Maharashtra",
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1c99d8eac-1763293370547.png",
    avatarAlt: "Professional headshot of middle-aged Indian man with warm smile wearing formal blue shirt",
    rating: 5,
    review: "The PVC panels completely transformed our living room. The installation was quick and the finish is absolutely stunning. The team was professional and the pricing was transparent. Highly recommend EliteInteriors for anyone looking for quality work.",
    service: "PVC Panels",
    date: "December 2025"
  },
  {
    id: 2,
    name: "Priya Sharma",
    location: "Pune, Maharashtra",
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1106cb969-1763295153968.png",
    avatarAlt: "Professional portrait of young Indian woman with confident expression wearing traditional red saree",
    rating: 5,
    review: "I was skeptical about PVC panels initially, but the wood texture option looks so realistic! The maintenance is incredibly easy and the panels have held up perfectly even in our humid climate. Worth every rupee spent.",
    service: "PVC Panels",
    date: "November 2025"
  },
  {
    id: 3,
    name: "Amit Patel",
    location: "Ahmedabad, Gujarat",
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_16b608972-1763295901227.png",
    avatarAlt: "Friendly portrait of Indian businessman with glasses wearing white formal shirt and tie",
    rating: 5,
    review: "Excellent service from consultation to installation. The 3D geometric panels in our office look amazing and have become a conversation starter. The team completed the work within the promised timeline. Very satisfied with the quality.",
    service: "PVC Panels",
    date: "January 2026"
  }];


  const processData = [
  {
    id: 1,
    icon: "Phone",
    title: "Consultation",
    description: "Free home visit to understand your requirements and provide expert suggestions",
    duration: "1-2 days"
  },
  {
    id: 2,
    icon: "Ruler",
    title: "Measurement",
    description: "Precise measurements and 3D visualization of your space with selected panels",
    duration: "2-3 days"
  },
  {
    id: 3,
    icon: "Hammer",
    title: "Installation",
    description: "Professional installation by certified experts with minimal disruption",
    duration: "3-5 days"
  },
  {
    id: 4,
    icon: "CheckCircle",
    title: "Quality Check",
    description: "Thorough inspection and final touches to ensure perfect finish",
    duration: "1 day"
  }];


  const specificationsData = [
  {
    id: 1,
    icon: "Layers",
    title: "Material Composition",
    description: "High-grade PVC with UV stabilizers for long-lasting color retention",
    details: [
    { label: "Thickness", value: "8-10mm" },
    { label: "Width", value: "250-300mm" },
    { label: "Length", value: "2.9-3m" },
    { label: "Weight", value: "2.5-3 kg/m²" }]

  },
  {
    id: 2,
    icon: "Flame",
    title: "Fire Safety",
    description: "Self-extinguishing material with excellent fire resistance properties",
    details: [
    { label: "Fire Rating", value: "Class B1" },
    { label: "Smoke Density", value: "Low" },
    { label: "Toxicity", value: "Non-toxic" },
    { label: "Certification", value: "IS 14202" }]

  },
  {
    id: 3,
    icon: "Droplet",
    title: "Water Resistance",
    description: "100% waterproof and moisture resistant for all weather conditions",
    details: [
    { label: "Water Absorption", value: "<0.5%" },
    { label: "Humidity Tolerance", value: "0-95%" },
    { label: "Mold Resistance", value: "Excellent" },
    { label: "Warranty", value: "10 years" }]

  },
  {
    id: 4,
    icon: "Thermometer",
    title: "Temperature Tolerance",
    description: "Stable performance across wide temperature ranges",
    details: [
    { label: "Min Temperature", value: "-20°C" },
    { label: "Max Temperature", value: "60°C" },
    { label: "Thermal Expansion", value: "Minimal" },
    { label: "UV Protection", value: "Yes" }]

  }];


  const warrantyData = {
    title: "10 Year Comprehensive Warranty",
    description: "We stand behind our quality with industry-leading warranty coverage",
    features: [
    {
      icon: "Shield",
      title: "Material Quality",
      description: "Full coverage against manufacturing defects and material degradation"
    },
    {
      icon: "Wrench",
      title: "Installation",
      description: "Guaranteed workmanship with free repairs for installation issues"
    },
    {
      icon: "Clock",
      title: "Lifetime Support",
      description: "Ongoing maintenance guidance and support throughout the product life"
    }],

    coverage: [
    "Color fading or discoloration due to UV exposure",
    "Warping, bending, or structural deformation",
    "Water damage or moisture-related issues",
    "Installation defects and workmanship errors",
    "Panel cracking or breaking under normal use",
    "Adhesive failure or panel detachment"]

  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'gallery':
        return <GallerySection gallery={galleryData} />;
      case 'materials':
        return <MaterialSelector materials={materialsData} />;
      case 'pricing':
        return <PricingSection packages={pricingData} onContactClick={() => setIsContactModalOpen(true)} />;
      case 'testimonials':
        return <TestimonialSection testimonials={testimonialsData} />;
      case 'process':
        return <ProcessSection steps={processData} />;
      case 'specifications':
        return <SpecificationSection specifications={specificationsData} />;
      case 'warranty':
        return <WarrantySection warranty={warrantyData} />;
      default:
        return <GallerySection gallery={galleryData} />;
    }
  };

  return (
    <>
      <Helmet>
        <title>Premium PVC Wall Panels - EliteInteriors | Transform Your Space</title>
        <meta name="description" content="Discover our premium PVC wall panels with 10-year warranty. Easy maintenance, water-resistant, and stunning designs. Get free consultation and transparent pricing." />
      </Helmet>

      <div className="min-h-screen bg-background flex flex-col">
        <Header />

        <main className="flex-1 pt-16">
          <ServiceHero service={serviceData} onContactClick={() => setIsContactModalOpen(true)} />
          <ServiceTabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
          {renderTabContent()}
        </main>

        <Footer />

        <ContactModal
          isOpen={isContactModalOpen}
          onClose={() => setIsContactModalOpen(false)}
          serviceName="PVC Panels" />


        {showScrollTop &&
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 z-40"
          aria-label="Scroll to top">

            <Icon name="ArrowUp" size={24} color="#FFFFFF" />
          </button>
        }

        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 left-6 w-12 h-12 md:w-14 md:h-14 rounded-full bg-success text-white shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 z-40 glow-effect"
          aria-label="Chat on WhatsApp">

          <Icon name="MessageCircle" size={24} color="#FFFFFF" />
        </a>
      </div>
    </>);

};

export default ServiceDetailPages;