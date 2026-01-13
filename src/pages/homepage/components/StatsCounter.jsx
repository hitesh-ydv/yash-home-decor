import React, { useState, useEffect, useRef } from 'react';
import Icon from '../../../components/AppIcon';

const StatsCounter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    {
      icon: "Home",
      value: 2500,
      suffix: "+",
      label: "Projects Completed",
      color: "var(--color-primary)"
    },
    {
      icon: "Users",
      value: 1800,
      suffix: "+",
      label: "Happy Families",
      color: "var(--color-accent)"
    },
    {
      icon: "Award",
      value: 15,
      suffix: "+",
      label: "Years Experience",
      color: "var(--color-golden-amber)"
    },
    {
      icon: "Star",
      value: 4.9,
      suffix: "/5",
      label: "Customer Rating",
      color: "var(--color-success)"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef?.current) {
      observer?.observe(sectionRef?.current);
    }

    return () => {
      if (sectionRef?.current) {
        observer?.unobserve(sectionRef?.current);
      }
    };
  }, []);

  const AnimatedCounter = ({ value, suffix }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }, [isVisible, value]);

    return (
      <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground font-headline">
        {count?.toFixed(value % 1 !== 0 ? 1 : 0)}{suffix}
      </span>
    );
  };

  return (
    <section ref={sectionRef} className="py-12 md:py-16 lg:py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats?.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4 md:p-6 rounded-xl bg-background warm-shadow hover:warm-shadow-lg transition-shadow duration-300"
            >
              <div
                className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: `${stat?.color}15` }}
              >
                <Icon name={stat?.icon} size={24} color={stat?.color} />
              </div>
              <AnimatedCounter value={stat?.value} suffix={stat?.suffix} />
              <p className="text-sm md:text-base text-muted-foreground mt-2">
                {stat?.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;