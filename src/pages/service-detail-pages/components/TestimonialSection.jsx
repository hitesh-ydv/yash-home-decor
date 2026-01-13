import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const TestimonialSection = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials?.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials?.length) % testimonials?.length);
  };

  const current = testimonials?.[currentIndex];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground font-headline mb-3 md:mb-4">
            Customer Stories
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Real experiences from our satisfied customers
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-background rounded-2xl p-6 md:p-10 warm-shadow-lg">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start mb-6">
              <div className="relative flex-shrink-0">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-primary/20">
                  <Image
                    src={current?.avatar}
                    alt={current?.avatarAlt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <Icon name="Quote" size={20} color="#FFFFFF" />
                </div>
              </div>

              <div className="flex-1 text-center md:text-left">
                <h3 className="text-lg md:text-xl font-semibold text-foreground mb-1">
                  {current?.name}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground mb-2">
                  {current?.location}
                </p>
                <div className="flex items-center justify-center md:justify-start gap-1">
                  {[...Array(5)]?.map((_, i) => (
                    <Icon
                      key={i}
                      name={i < current?.rating ? 'Star' : 'Star'}
                      size={16}
                      color={i < current?.rating ? 'var(--color-golden-amber)' : 'var(--color-border)'}
                    />
                  ))}
                </div>
              </div>
            </div>

            <p className="text-base md:text-lg text-foreground leading-relaxed mb-6 text-center md:text-left">
              "{current?.review}"
            </p>

            <div className="flex items-center justify-between pt-6 border-t border-border">
              <div className="text-sm text-muted-foreground">
                {current?.service} • {current?.date}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={prevTestimonial}
                  className="w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors"
                  aria-label="Previous testimonial"
                >
                  <Icon name="ChevronLeft" size={20} color="currentColor" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors"
                  aria-label="Next testimonial"
                >
                  <Icon name="ChevronRight" size={20} color="currentColor" />
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials?.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'w-8 bg-primary' : 'bg-border'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;