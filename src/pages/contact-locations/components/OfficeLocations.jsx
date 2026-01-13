import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const OfficeLocations = () => {
  const [selectedCity, setSelectedCity] = useState('mumbai');

  const offices = [
  {
    id: 'mumbai',
    city: "Jhajjar",
    state: "Haryana",
    phone: "+91 88133 88698",
    hours: "Mon-Sat: 10:00 AM - 7:00 PM\nSun: 11:00 AM - 5:00 PM",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1eff7ec31-1767789141847.png",
    imageAlt: "Modern interior design showroom in Mumbai with elegant furniture displays and warm lighting showcasing modular kitchen and living room setups",
    mapLat: "28.612093",
    mapLng: "76.642230",
    features: ["Experience Center", "Material Display", "Free Parking", "Design Consultation"]
  }];


  const selectedOffice = offices?.find((office) => office?.id === selectedCity);

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4 font-headline">
            Visit Our Experience Centers
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Explore our showrooms to see quality craftsmanship firsthand and meet our design experts
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8 md:mb-12">
          {offices?.map((office) =>
          <button
            key={office?.id}
            onClick={() => setSelectedCity(office?.id)}
            className={`px-4 md:px-6 py-2 md:py-3 rounded-lg font-medium text-sm md:text-base transition-all duration-300 ${
            selectedCity === office?.id ?
            'bg-primary text-white shadow-warm' :
            'bg-white text-foreground hover:bg-primary/10 border border-border'}`
            }>

              {office?.city}
            </button>
          )}
        </div>

        {selectedOffice &&
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
            <div className="space-y-6 md:space-y-8">
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-warm">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={24} color="var(--color-primary)" />
                  </div>
                  <div className="flex-grow min-w-0">
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1 font-headline">
                      {selectedOffice?.city}, {selectedOffice?.state}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground">
                      {selectedOffice?.address}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="Phone" size={20} color="var(--color-primary)" className="mt-0.5 flex-shrink-0" />
                    <div className="flex-grow min-w-0">
                      <p className="text-xs md:text-sm text-muted-foreground mb-1">Phone</p>
                      <a
                      href={`tel:${selectedOffice?.phone}`}
                      className="text-sm md:text-base font-medium text-foreground hover:text-primary transition-colors">

                        {selectedOffice?.phone}
                      </a>
                    </div>
                  </div>
{/* 
                  <div className="flex items-start gap-3">
                    <Icon name="Mail" size={20} color="var(--color-primary)" className="mt-0.5 flex-shrink-0" />
                    <div className="flex-grow min-w-0">
                      <p className="text-xs md:text-sm text-muted-foreground mb-1">Email</p>
                      <a
                      href={`mailto:${selectedOffice?.email}`}
                      className="text-sm md:text-base font-medium text-foreground hover:text-primary transition-colors break-all">

                        {selectedOffice?.email}
                      </a>
                    </div>
                  </div> */}

                  {/* <div className="flex items-start gap-3">
                    <Icon name="Clock" size={20} color="var(--color-primary)" className="mt-0.5 flex-shrink-0" />
                    <div className="flex-grow min-w-0">
                      <p className="text-xs md:text-sm text-muted-foreground mb-1">Working Hours</p>
                      <p className="text-sm md:text-base font-medium text-foreground whitespace-pre-line">
                        {selectedOffice?.hours}
                      </p>
                    </div>
                  </div> */}
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-xs md:text-sm font-medium text-foreground mb-3">Available Facilities</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedOffice?.features?.map((feature, index) =>
                  <span
                    key={index}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/5 text-primary rounded-lg text-xs md:text-sm font-medium">

                        <Icon name="Check" size={14} color="var(--color-primary)" />
                        {feature}
                      </span>
                  )}
                  </div>
                </div>
              </div>


            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-warm h-96 md:h-full min-h-[400px]">
              <iframe
              width="100%"
              height="100%"
              loading="lazy"
              title={`${selectedOffice?.city} Office Location`}
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=${selectedOffice?.mapLat},${selectedOffice?.mapLng}&z=14&output=embed`}
              className="border-0" />

            </div>
          </div>
        }
      </div>
    </section>);

};

export default OfficeLocations;