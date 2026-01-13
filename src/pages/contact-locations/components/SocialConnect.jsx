import React from 'react';
import Icon from '../../../components/AppIcon';

const SocialConnect = () => {
  const socialPlatforms = [
    {
      id: 1,
      name: "Facebook",
      icon: "Facebook",
      followers: "25K+",
      description: "Daily design inspiration and project updates",
      url: "https://facebook.com",
      color: "#1877F2",
      bgGradient: "from-blue-50 to-blue-100"
    },
    {
      id: 2,
      name: "Instagram",
      icon: "Instagram",
      followers: "45K+",
      description: "Before-after transformations and reels",
      url: "https://instagram.com",
      color: "#E4405F",
      bgGradient: "from-pink-50 to-purple-100"
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 md:px-6 py-2 md:py-3 rounded-full mb-4 md:mb-6">
            <Icon name="Share2" size={20} color="var(--color-primary)" />
            <span className="text-xs md:text-sm font-medium text-primary font-cta">
              Stay Connected
            </span>
          </div>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4 font-headline">
            Follow Us on Social Media
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Join our community for daily design inspiration, exclusive offers, and behind-the-scenes glimpses of our projects
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
          {socialPlatforms?.map((platform) => (
            <a
              key={platform?.id}
              href={platform?.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group bg-gradient-to-br ${platform?.bgGradient} rounded-2xl p-6 md:p-8 hover:shadow-warm-lg transition-all duration-300 transform hover:-translate-y-1`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white shadow-warm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon name={platform?.icon} size={28} color={platform?.color} />
                </div>
                
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-1 font-headline">
                  {platform?.name}
                </h3>
                
                <div className="text-xl md:text-2xl font-bold mb-2" style={{ color: platform?.color }}>
                  {platform?.followers}
                </div>
                
                <p className="text-xs md:text-sm text-muted-foreground mb-4">
                  {platform?.description}
                </p>
                
                <div className="inline-flex items-center gap-2 text-xs md:text-sm font-medium group-hover:gap-3 transition-all duration-300" style={{ color: platform?.color }}>
                  Follow Us
                  <Icon name="ArrowRight" size={16} color={platform?.color} />
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SocialConnect;