import { ChevronDown } from 'lucide-react';
import heroBackground from '@/assets/hero-bg.webp';

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
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-primary/40 to-primary/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="fade-in-up">
          <h1 className="hero-title mb-6">
            Premium Brand 
            <span className="block text-accent">Partnerships</span>
          </h1>
          
          <p className="hero-subtitle mb-12 mx-auto">
            Discover exceptional brands and products through our curated partnerships. 
            Excellence in every collaboration, innovation in every product.
          </p>
          
          <button 
            onClick={scrollToContact}
            className="btn-hero mb-16"
          >
            Get In Touch
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