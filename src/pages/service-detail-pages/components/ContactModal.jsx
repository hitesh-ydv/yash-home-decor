import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const ContactModal = ({ isOpen, onClose, serviceName }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: serviceName || '',
    message: ''
  });

  const serviceOptions = [
    { value: 'pvc-panels', label: 'PVC Panels' },
    { value: 'modular-kitchen', label: 'Modular Kitchen' },
    { value: 'led-solutions', label: 'LED Solutions' },
    { value: 'wardrobes', label: 'Wardrobes' }
  ];

  const handleSubmit = (e) => {
    e?.preventDefault();
    const message = `Hi, I'm interested in ${formData?.service}. Name: ${formData?.name}, Phone: ${formData?.phone}, Email: ${formData?.email}. ${formData?.message}`;
    window.open(`https://wa.me/918813888699?text=${encodeURIComponent(message)}`, '_blank');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/80">
      <div className="bg-card rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto warm-shadow-lg">
        <div className="sticky top-0 bg-card border-b border-border p-6 flex items-center justify-between">
          <h2 className="text-xl md:text-2xl font-bold text-foreground font-headline">
            Get Free Quote
          </h2>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center transition-colors"
            aria-label="Close modal"
          >
            <Icon name="X" size={20} color="var(--color-foreground)" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <Input
            label="Full Name"
            type="text"
            placeholder="Enter your name"
            required
            value={formData?.name}
            onChange={(e) => setFormData({ ...formData, name: e?.target?.value })}
          />

          <Input
            label="Phone Number"
            type="tel"
            placeholder="Enter your phone number"
            required
            value={formData?.phone}
            onChange={(e) => setFormData({ ...formData, phone: e?.target?.value })}
          />

          <Input
            label="Email Address"
            type="email"
            placeholder="Enter your email"
            required
            value={formData?.email}
            onChange={(e) => setFormData({ ...formData, email: e?.target?.value })}
          />

          <Select
            label="Select Service"
            options={serviceOptions}
            value={formData?.service}
            onChange={(value) => setFormData({ ...formData, service: value })}
            required
          />

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Additional Details
            </label>
            <textarea
              className="w-full min-h-[120px] px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              placeholder="Tell us about your requirements..."
              value={formData?.message}
              onChange={(e) => setFormData({ ...formData, message: e?.target?.value })}
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              type="submit"
              variant="default"
              size="lg"
              fullWidth
              iconName="MessageCircle"
              iconPosition="left"
            >
              Send via WhatsApp
            </Button>
            <Button
              type="button"
              variant="outline"
              size="lg"
              fullWidth
              iconName="Phone"
              iconPosition="left"
              onClick={() => window.open('tel:+918813888699', '_self')}
            >
              Call Now
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;