import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';
import { Checkbox } from '../../../components/ui/Checkbox';

const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    serviceInterest: '',
    budgetRange: '',
    projectTimeline: '',
    message: '',
    agreeTerms: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const serviceOptions = [
    { value: 'pvc-panels', label: 'PVC Panels & Wall Solutions' },
    { value: 'modular-kitchen', label: 'Modular Kitchen Design' },
    { value: 'led-solutions', label: 'LED Lighting Solutions' },
    { value: 'wardrobes', label: 'Custom Wardrobes' },
    { value: 'complete-home', label: 'Complete Home Interior' },
    { value: 'consultation', label: 'Design Consultation Only' }
  ];

  const budgetOptions = [
    { value: 'under-2', label: 'Under ₹2 Lakhs' },
    { value: '2-5', label: '₹2 - ₹5 Lakhs' },
    { value: '5-10', label: '₹5 - ₹10 Lakhs' },
    { value: '10-20', label: '₹10 - ₹20 Lakhs' },
    { value: 'above-20', label: 'Above ₹20 Lakhs' },
    { value: 'flexible', label: 'Flexible Budget' }
  ];

  const timelineOptions = [
    { value: 'immediate', label: 'Immediate (Within 1 month)' },
    { value: '1-3-months', label: '1-3 Months' },
    { value: '3-6-months', label: '3-6 Months' },
    { value: 'planning', label: 'Just Planning' }
  ];

  const cityOptions = [
    { value: 'mumbai', label: 'Mumbai' },
    { value: 'pune', label: 'Pune' },
    { value: 'bangalore', label: 'Bangalore' },
    { value: 'delhi', label: 'Delhi NCR' },
    { value: 'ahmedabad', label: 'Ahmedabad' },
    { value: 'chennai', label: 'Chennai' },
    { value: 'hyderabad', label: 'Hyderabad' },
    { value: 'other', label: 'Other City' }
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData?.fullName?.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData?.email?.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/?.test(formData?.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData?.phone?.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[6-9]\d{9}$/?.test(formData?.phone?.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit Indian mobile number';
    }

    if (!formData?.city) {
      newErrors.city = 'Please select your city';
    }

    if (!formData?.serviceInterest) {
      newErrors.serviceInterest = 'Please select a service';
    }

    if (!formData?.budgetRange) {
      newErrors.budgetRange = 'Please select your budget range';
    }

    if (!formData?.projectTimeline) {
      newErrors.projectTimeline = 'Please select your project timeline';
    }

    if (!formData?.agreeTerms) {
      newErrors.agreeTerms = 'You must agree to the terms and conditions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          city: '',
          serviceInterest: '',
          budgetRange: '',
          projectTimeline: '',
          message: '',
          agreeTerms: false
        });
        
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      }, 2000);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors?.[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <section id="consultation-form" className="py-12 md:py-16 lg:py-20 bg-card">
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 md:px-6 py-2 md:py-3 rounded-full mb-4 md:mb-6">
            <Icon name="Calendar" size={20} color="var(--color-primary)" />
            <span className="text-xs md:text-sm font-medium text-primary font-cta">
              Free Consultation
            </span>
          </div>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4 font-headline">
            Schedule Your Design Consultation
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Share your requirements and our design experts will reach out within 2 hours to discuss your dream home project
          </p>
        </div>

        {submitSuccess && (
          <div className="mb-6 md:mb-8 bg-success/10 border border-success/30 rounded-xl p-4 md:p-6 flex items-start gap-3">
            <Icon name="CheckCircle" size={24} color="var(--color-success)" className="flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-base md:text-lg font-semibold text-success mb-1">
                Consultation Request Received!
              </h3>
              <p className="text-sm md:text-base text-success/80">
                Thank you for your interest. Our team will contact you within 2 hours to schedule your free consultation.
              </p>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 md:p-8 lg:p-10 shadow-warm-lg space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <Input
              label="Full Name"
              type="text"
              placeholder="Enter your full name"
              value={formData?.fullName}
              onChange={(e) => handleInputChange('fullName', e?.target?.value)}
              error={errors?.fullName}
              required
            />

            <Input
              label="Email Address"
              type="email"
              placeholder="your.email@example.com"
              value={formData?.email}
              onChange={(e) => handleInputChange('email', e?.target?.value)}
              error={errors?.email}
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <Input
              label="Phone Number"
              type="tel"
              placeholder="98765 43210"
              value={formData?.phone}
              onChange={(e) => handleInputChange('phone', e?.target?.value)}
              error={errors?.phone}
              required
              description="We'll call you to schedule consultation"
            />

            <Select
              label="Your City"
              placeholder="Select your city"
              options={cityOptions}
              value={formData?.city}
              onChange={(value) => handleInputChange('city', value)}
              error={errors?.city}
              required
            />
          </div>

          <Select
            label="Service Interest"
            placeholder="What service are you interested in?"
            options={serviceOptions}
            value={formData?.serviceInterest}
            onChange={(value) => handleInputChange('serviceInterest', value)}
            error={errors?.serviceInterest}
            required
            description="Select the primary service you need"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <Select
              label="Budget Range"
              placeholder="Select your budget"
              options={budgetOptions}
              value={formData?.budgetRange}
              onChange={(value) => handleInputChange('budgetRange', value)}
              error={errors?.budgetRange}
              required
            />

            <Select
              label="Project Timeline"
              placeholder="When do you plan to start?"
              options={timelineOptions}
              value={formData?.projectTimeline}
              onChange={(value) => handleInputChange('projectTimeline', value)}
              error={errors?.projectTimeline}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Additional Details (Optional)
            </label>
            <textarea
              value={formData?.message}
              onChange={(e) => handleInputChange('message', e?.target?.value)}
              placeholder="Tell us more about your project requirements, space dimensions, or any specific preferences..."
              rows={4}
              className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors text-sm md:text-base resize-none"
            />
          </div>

          <div className="pt-4 border-t border-border">
            <Checkbox
              label="I agree to receive consultation calls and project updates from EliteInteriors"
              description="We respect your privacy and will only contact you regarding your project"
              checked={formData?.agreeTerms}
              onChange={(e) => handleInputChange('agreeTerms', e?.target?.checked)}
              error={errors?.agreeTerms}
              required
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4">
            <Button
              type="submit"
              variant="default"
              size="lg"
              fullWidth
              loading={isSubmitting}
              iconName="Send"
              iconPosition="right"
            >
              {isSubmitting ? 'Submitting...' : 'Schedule Free Consultation'}
            </Button>
            <Button
              type="button"
              variant="outline"
              size="lg"
              iconName="Phone"
              iconPosition="left"
              onClick={() => window.open('tel:+919876543210', '_self')}
              className="sm:w-auto"
            >
              Call Now
            </Button>
          </div>

          <div className="flex items-center justify-center gap-2 text-xs md:text-sm text-muted-foreground pt-4">
            <Icon name="Shield" size={16} color="var(--color-success)" />
            <span>Your information is secure and will never be shared with third parties</span>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ConsultationForm;