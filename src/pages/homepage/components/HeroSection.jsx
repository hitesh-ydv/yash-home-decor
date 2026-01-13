import React, { useState, useEffect } from 'react';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  // Touch states for swipe
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  const heroSlides = [
    {
      image: 'https://i.pinimg.com/736x/94/fb/d4/94fbd4ff00b35d7e23210b8a1444e670.jpg',
      imageAlt: 'Modern luxury living room interior',
      title: 'Transform Your House Into a Dream Home',
      subtitle: 'Expert craftsmanship meets modern design innovation',
    },
    {
      image: 'https://i.pinimg.com/736x/58/be/7f/58be7fcee39c541d73cc18210be46708.jpg',
      imageAlt: 'Modern modular kitchen design',
      title: 'Premium Modular Kitchens',
      subtitle: 'Where functionality meets elegance',
    },
    {
      image: 'https://i.pinimg.com/1200x/2e/d2/25/2ed225b95684f303b36231d21fc59f41.jpg',
      imageAlt: 'Bedroom with wooden almirah',
      title: 'Smart Storage Solutions',
      subtitle: 'Maximize space with custom Almirahs and wardrobes',
    },
  ];

  // 🔍 Detect desktop (mouse / trackpad)
  useEffect(() => {
    const checkDevice = () => {
      setIsDesktop(window.matchMedia('(pointer: fine)').matches);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  // ⏱ Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  // 👉 Swipe handlers
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEndX(null);
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;

    const distance = touchStartX - touchEndX;

    if (distance > minSwipeDistance) handleNextSlide();
    if (distance < -minSwipeDistance) handlePrevSlide();
  };

  return (
    <section
      className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Slides */}
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.imageAlt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {heroSlides[currentSlide].title}
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              {heroSlides[currentSlide].subtitle}
            </p>

            <Button
              variant="outline"
              size="lg"
              iconName="Phone"
              iconPosition="left"
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
              onClick={() => window.open('tel:+918813888699', '_self')}
            >
              Call Now
            </Button>
          </div>
        </div>
      </div>

      {/* ⬅️➡️ Desktop arrows only */}
      {isDesktop && (
        <>
          <button
            onClick={handlePrevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition"
            aria-label="Previous slide"
          >
            <Icon name="ChevronLeft" size={24} color="#FFFFFF" />
          </button>

          <button
            onClick={handleNextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition"
            aria-label="Next slide"
          >
            <Icon name="ChevronRight" size={24} color="#FFFFFF" />
          </button>
        </>
      )}

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'w-8 bg-white' : 'w-2 bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
