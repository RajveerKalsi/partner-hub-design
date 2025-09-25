import { useEffect, useRef } from 'react';

const PartnersSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const partners = [
    { name: "TechCorp", logo: "🔧", industry: "Technology" },
    { name: "StyleHouse", logo: "👔", industry: "Fashion" },
    { name: "HealthTech", logo: "🏥", industry: "Healthcare" },
    { name: "SmartLiving", logo: "🏠", industry: "Home & Living" },
    { name: "InnovateLab", logo: "💡", industry: "Innovation" },
    { name: "EcoFashion", logo: "🌿", industry: "Sustainable Fashion" },
    { name: "LuxuryLine", logo: "💎", industry: "Luxury Goods" },
    { name: "FitLife", logo: "💪", industry: "Fitness" },
    { name: "ModernHome", logo: "🏡", industry: "Home Design" },
    { name: "WellnessFirst", logo: "🧘", industry: "Wellness" },
    { name: "DigitalEdge", logo: "📱", industry: "Digital Solutions" },
    { name: "ElegantSpaces", logo: "✨", industry: "Interior Design" }
  ];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollWidth = scrollContainer.scrollWidth;
    const clientWidth = scrollContainer.clientWidth;
    
    let scrollLeft = 0;
    const speed = 1; // pixels per frame

    const scroll = () => {
      scrollLeft += speed;
      if (scrollLeft >= scrollWidth - clientWidth) {
        scrollLeft = 0;
      }
      scrollContainer.scrollLeft = scrollLeft;
    };

    const intervalId = setInterval(scroll, 50);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="section-divider">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground pt-8 mb-6">
              Our Partners
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're proud to work with industry-leading brands that share our 
            commitment to excellence and innovation.
          </p>
        </div>

        {/* Auto-scrolling Partners */}
        <div className="relative overflow-hidden">
          <div 
            ref={scrollRef}
            className="flex space-x-8 overflow-x-hidden"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {/* Duplicate partners for seamless loop */}
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 card-elevated p-8 text-center group min-w-[250px]"
              >
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {partner.logo}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {partner.name}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {partner.industry}
                </p>
              </div>
            ))}
          </div>
          
          {/* Fade gradients */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent pointer-events-none" />
        </div>

        {/* Partner Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">50+</div>
            <div className="text-muted-foreground">Global Partners</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">15</div>
            <div className="text-muted-foreground">Industries</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">95%</div>
            <div className="text-muted-foreground">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">24/7</div>
            <div className="text-muted-foreground">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;