import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Jhajjar, Haryana",
    image: "https://i.pinimg.com/736x/96/e2/a7/96e2a7d987ce19f693d39f131cda092a.jpg",
    imageAlt: "Professional headshot of Indian woman with long black hair wearing traditional red saree with warm smile",
    rating: 5,
    text: "EliteInteriors transformed our small apartment into a spacious, modern home. The modular kitchen they designed is both beautiful and highly functional. The team was professional, punctual, and stayed within our budget. Highly recommended!",
    project: "2BHK Complete Interior",
    date: "December 2025"
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    location: "Jhajjar, Haryana",
    image: "https://i.pinimg.com/736x/96/e2/a7/96e2a7d987ce19f693d39f131cda092a.jpg",
    imageAlt: "Professional headshot of Indian man with short black hair wearing navy blue formal shirt with confident expression",
    rating: 5,
    text: "The PVC panel work in our living room exceeded expectations. The quality of materials and attention to detail was impressive. They completed the project on time and the after-sales service has been excellent. Worth every rupee spent!",
    project: "Living Room Renovation",
    date: "November 2025"
  },
  {
    id: 3,
    name: "Anjali Patel",
    location: "Jhajjar, Haryana",
    image: "https://i.pinimg.com/736x/96/e2/a7/96e2a7d987ce19f693d39f131cda092a.jpg",
    imageAlt: "Professional headshot of Indian woman with shoulder-length black hair wearing elegant blue kurta with friendly smile",
    rating: 5,
    text: "We got custom wardrobes for all three bedrooms and the LED lighting solutions. The design team understood our requirements perfectly and delivered beyond expectations. The storage optimization is brilliant and the lighting creates perfect ambiance.",
    project: "3BHK Wardrobe & Lighting",
    date: "October 2025"
  },
  {
    id: 4,
    name: "Vikram Singh",
    location: "Delhi NCR",
    image: "https://i.pinimg.com/736x/96/e2/a7/96e2a7d987ce19f693d39f131cda092a.jpg",
    imageAlt: "Professional headshot of Indian man with trimmed beard wearing white formal shirt with professional demeanor",
    rating: 5,
    text: "EliteInteriors handled our entire home interior project with utmost professionalism. From initial consultation to final installation, everything was smooth. The quality of work and materials used is top-notch. Our dream home is now a reality!",
    project: "Complete Home Interior",
    date: "September 2025"
  }];


  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials?.length) % testimonials?.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials?.length);
  };

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 font-headline">
            What Our Customers Say
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from families who transformed their homes with EliteInteriors
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-card rounded-xl p-6 md:p-8 lg:p-12 warm-shadow-lg">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
              <div className="flex-shrink-0 mx-auto md:mx-0">
                <div className="relative w-24 h-24 md:w-32 md:h-32">
                  <Image
                    src={testimonials?.[currentIndex]?.image}
                    alt={testimonials?.[currentIndex]?.imageAlt}
                    className="w-full h-full rounded-full object-cover border-4 border-primary/20" />

                  <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                    <Icon name="Quote" size={20} color="#FFFFFF" />
                  </div>
                </div>
              </div>

              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-1 mb-3">
                  {[...Array(testimonials?.[currentIndex]?.rating)]?.map((_, i) =>
                  <Icon key={i} name="Star" size={20} color="var(--color-golden-amber)" />
                  )}
                </div>

                <p className="text-base md:text-lg text-foreground mb-4 leading-relaxed">
                  "{testimonials?.[currentIndex]?.text}"
                </p>

                <div className="space-y-1">
                  <h4 className="text-lg font-semibold text-foreground font-headline">
                    {testimonials?.[currentIndex]?.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonials?.[currentIndex]?.location}
                  </p>
                  <div className="flex items-center justify-center md:justify-start gap-4 text-xs text-muted-foreground mt-2">
                    <span className="flex items-center gap-1">
                      <Icon name="Briefcase" size={14} color="var(--color-primary)" />
                      {testimonials?.[currentIndex]?.project}
                    </span>
                    <span className="flex items-center gap-1">
                      <Icon name="Calendar" size={14} color="var(--color-primary)" />
                      {testimonials?.[currentIndex]?.date}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-card warm-shadow hover:warm-shadow-lg transition-all duration-300"
            aria-label="Previous testimonial">

            <Icon name="ChevronLeft" size={24} color="var(--color-foreground)" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-card warm-shadow hover:warm-shadow-lg transition-all duration-300"
            aria-label="Next testimonial">

            <Icon name="ChevronRight" size={24} color="var(--color-foreground)" />
          </button>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials?.map((_, index) =>
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-primary w-8' : 'bg-muted'}`
              }
              aria-label={`Go to testimonial ${index + 1}`} />

            )}
          </div>
        </div>
      </div>
    </section>);

};

export default TestimonialCarousel;