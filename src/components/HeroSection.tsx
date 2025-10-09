import { ChevronDown } from 'lucide-react';
import heroBackground from '@/assets/hero-bg.webp';
import { HeroText } from '@/enums/hero.enums';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroBackground} 
          alt="Hero background" 
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/20 to-primary/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="fade-in-up">
          <h1 className="hero-title mb-6">
            {HeroText.TITLE}
          </h1>
          
          <p className="hero-subtitle mb-12 mx-auto">
            {HeroText.SUBTITLE}
          </p>
          
          <button 
            onClick={scrollToContact}
            className="btn-hero mb-16"
          >
            {HeroText.CTA_BUTTON}
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-primary-foreground/70" size={32} />
      </div>
    </section>
  );
};

export default HeroSection;