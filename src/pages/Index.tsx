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
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <CategoriesSection />
      <SingleImageSection />
      {/* <AboutSection /> */}
      {/* <ProductsSection /> */}
      <HowWeWorkSection />
      <CompanyDetails />
      {/* <PartnersSection /> */}
      <FAQSection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
