import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import CategoriesSection from '@/components/CategoriesSection';
import SingleImageSection from '@/components/SingleImageSection';
import ProductsSection from '@/components/ProductsSection';
import HowWeWorkSection from '@/components/HowWeWorkSection';
import CompanyDetails from '@/components/CompanyDetails';
import PartnersSection from '@/components/PartnersSection';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <CategoriesSection />
      <SingleImageSection />
      <ProductsSection />
      <HowWeWorkSection />
      <CompanyDetails />
      <PartnersSection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
