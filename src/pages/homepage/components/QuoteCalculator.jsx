import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';
import Input from '../../../components/ui/Input';

const QuoteCalculator = () => {
  const [formData, setFormData] = useState({
    service: '',
    roomSize: '',
    budget: '',
    name: '',
    phone: '',
    email: ''
  });

  const [estimatedCost, setEstimatedCost] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const serviceOptions = [
    { value: 'pvc-panels', label: 'PVC Panels' },
    { value: 'modular-kitchen', label: 'Modular Kitchen' },
    { value: 'led-solutions', label: 'LED Solutions' },
    { value: 'wardrobes', label: 'Wardrobes' }
  ];

  const roomSizeOptions = [
    { value: 'small', label: 'Small (100-200 sq ft)' },
    { value: 'medium', label: 'Medium (200-400 sq ft)' },
    { value: 'large', label: 'Large (400-600 sq ft)' },
    { value: 'xlarge', label: 'Extra Large (600+ sq ft)' }
  ];

  const budgetOptions = [
    { value: 'budget', label: '₹50,000 - ₹1,00,000' },
    { value: 'mid', label: '₹1,00,000 - ₹2,50,000' },
    { value: 'premium', label: '₹2,50,000 - ₹5,00,000' },
    { value: 'luxury', label: '₹5,00,000+' }
  ];

  const calculateEstimate = () => {
    if (!formData?.service || !formData?.roomSize || !formData?.budget) {
      return;
    }

    const baseCosts = {
      'pvc-panels': { small: 45000, medium: 85000, large: 150000, xlarge: 220000 },
      'modular-kitchen': { small: 120000, medium: 220000, large: 380000, xlarge: 550000 },
      'led-solutions': { small: 25000, medium: 45000, large: 75000, xlarge: 110000 },
      'wardrobes': { small: 80000, medium: 150000, large: 250000, xlarge: 380000 }
    };

    const budgetMultipliers = {
      'budget': 0.9,
      'mid': 1.0,
      'premium': 1.3,
      'luxury': 1.6
    };

    const baseCost = baseCosts?.[formData?.service]?.[formData?.roomSize];
    const multiplier = budgetMultipliers?.[formData?.budget];
    const estimated = Math.round(baseCost * multiplier);

    setEstimatedCost(estimated);
    setShowResult(true);
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    calculateEstimate();
  };

  const handleReset = () => {
    setFormData({
      service: '',
      roomSize: '',
      budget: '',
      name: '',
      phone: '',
      email: ''
    });
    setEstimatedCost(null);
    setShowResult(false);
  };

  return (
    <section id="quote-calculator" className="py-12 md:py-16 lg:py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 font-headline">
            Get Instant Quote
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Calculate preliminary pricing for your dream interior project in seconds
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-background rounded-xl p-6 md:p-8 warm-shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Select
                  label="Select Service"
                  required
                  options={serviceOptions}
                  value={formData?.service}
                  onChange={(value) => setFormData({ ...formData, service: value })}
                  placeholder="Choose a service"
                />

                <Select
                  label="Room Size"
                  required
                  options={roomSizeOptions}
                  value={formData?.roomSize}
                  onChange={(value) => setFormData({ ...formData, roomSize: value })}
                  placeholder="Select room size"
                />

                <Select
                  label="Budget Range"
                  required
                  options={budgetOptions}
                  value={formData?.budget}
                  onChange={(value) => setFormData({ ...formData, budget: value })}
                  placeholder="Choose budget range"
                />

                <Input
                  label="Your Name"
                  type="text"
                  required
                  value={formData?.name}
                  onChange={(e) => setFormData({ ...formData, name: e?.target?.value })}
                  placeholder="Enter your name"
                />

                <Input
                  label="Phone Number"
                  type="tel"
                  required
                  value={formData?.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e?.target?.value })}
                  placeholder="Enter phone number"
                  pattern="[0-9]{10}"
                />

                <Input
                  label="Email Address"
                  type="email"
                  required
                  value={formData?.email}
                  onChange={(e) => setFormData({ ...formData, email: e?.target?.value })}
                  placeholder="Enter email address"
                />
              </div>

              {showResult && estimatedCost && (
                <div className="bg-primary/10 border-2 border-primary rounded-xl p-6 text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Icon name="Calculator" size={24} color="var(--color-primary)" />
                    <h3 className="text-lg font-semibold text-foreground">Estimated Cost</h3>
                  </div>
                  <p className="text-3xl md:text-4xl font-bold text-primary font-headline">
                    ₹{estimatedCost?.toLocaleString('en-IN')}
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    *This is a preliminary estimate. Final cost may vary based on customization and materials.
                  </p>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  type="submit"
                  variant="default"
                  size="lg"
                  iconName="Calculator"
                  iconPosition="left"
                  fullWidth
                >
                  Calculate Estimate
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  iconName="RotateCcw"
                  iconPosition="left"
                  onClick={handleReset}
                  className="sm:w-auto"
                >
                  Reset
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteCalculator;