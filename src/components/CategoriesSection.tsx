import { useState } from 'react';
import { ArrowRight, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

interface Category {
  id: number;
  title: string;
  description: string;
  image: string;
  details: {
    overview: string;
    features: string[];
    brands: string[];
    images: string[];
  };
}

const CategoriesSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  const navigateCategory = (direction: 'prev' | 'next') => {
    if (!selectedCategory) return;
    
    const currentIndex = categories.findIndex(cat => cat.id === selectedCategory.id);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : categories.length - 1;
    } else {
      newIndex = currentIndex < categories.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedCategory(categories[newIndex]);
  };

  const categories: Category[] = [
    {
      id: 1,
      title: "Technology & Electronics",
      description: "Cutting-edge tech solutions and innovative electronics",
      image: "🔧",
      details: {
        overview: "Our technology partners represent the pinnacle of innovation in electronics, software, and digital solutions. From enterprise-grade hardware to consumer electronics, we work with brands that push the boundaries of what's possible.",
        features: ["Smart Home Solutions", "Enterprise Hardware", "Mobile Technology", "IoT Devices", "AI-Powered Systems"],
        brands: ["TechCorp", "InnovateLab", "DigitalEdge", "SmartSolutions"],
        images: ["📱", "💻", "⌚", "🖥️"]
      }
    },
    {
      id: 2,
      title: "Fashion & Lifestyle",
      description: "Premium fashion brands and lifestyle products",
      image: "👔",
      details: {
        overview: "Our fashion and lifestyle partners embody sophistication, quality, and timeless design. From haute couture to everyday essentials, we curate brands that define style and elevate personal expression.",
        features: ["Luxury Apparel", "Sustainable Fashion", "Accessories", "Footwear", "Personal Care"],
        brands: ["StyleHouse", "EcoFashion", "LuxuryLine", "ModernClassics"],
        images: ["👗", "👠", "👜", "⌚"]
      }
    },
    {
      id: 3,
      title: "Health & Wellness",
      description: "Premium health and wellness solutions",
      image: "🏥",
      details: {
        overview: "Health and wellness are at the core of our mission. Our partners in this space deliver innovative solutions that promote better living, from fitness equipment to nutritional supplements and medical devices.",
        features: ["Fitness Equipment", "Nutrition Supplements", "Medical Devices", "Wellness Apps", "Recovery Tools"],
        brands: ["HealthTech", "WellnessFirst", "FitLife", "MedAdvance"],
        images: ["💊", "🏃‍♂️", "🧘‍♀️", "📊"]
      }
    },
    {
      id: 4,
      title: "Home & Living",
      description: "Elegant home solutions and living essentials",
      image: "🏠",
      details: {
        overview: "Transform your living space with our home and living partners. From smart home automation to elegant furniture and decor, we offer solutions that make your house a true home.",
        features: ["Smart Home Systems", "Furniture Design", "Home Decor", "Kitchen Appliances", "Garden Solutions"],
        brands: ["HomeDesign", "SmartLiving", "ElegantSpaces", "ModernHome"],
        images: ["🛋️", "🍽️", "💡", "🌿"]
      }
    }
  ];

  return (
    <section id="categories" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="section-divider">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground pt-8 mb-6">
              Our Categories
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our diverse range of partner categories, each carefully curated 
            to deliver exceptional quality and innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 stagger-children">
          {categories.map((category) => (
            <div
              key={category.id}
              className="card-category group"
              onClick={() => setSelectedCategory(category)}
            >
              <div className="card-category-image flex items-center justify-center text-8xl">
                {category.image}
              </div>
              <div className="card-category-overlay" />
              <div className="card-category-content">
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                <p className="text-white/90 mb-4 text-sm">{category.description}</p>
                <div className="flex items-center text-accent">
                  <span className="text-sm font-medium">Explore</span>
                  <ArrowRight size={16} className="ml-2" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Category Details Modal */}
        {selectedCategory && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div 
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setSelectedCategory(null)}
            />
            <div className="relative bg-card rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
              <div className="flex h-full">
                {/* Left Side - Image Carousel */}
                <div className="w-1/2 bg-muted/50 relative">
                  <Carousel className="w-full h-full">
                    <CarouselContent className="h-full">
                      {selectedCategory.details.images.map((image, index) => (
                        <CarouselItem key={index} className="h-full">
                          <div className="flex items-center justify-center h-full p-8">
                            <div className="text-8xl">{image}</div>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-4" />
                    <CarouselNext className="right-4" />
                  </Carousel>
                </div>

                {/* Right Side - Content */}
                <div className="w-1/2 p-8 flex flex-col">
                  {/* Header with close button */}
                  <div className="flex items-start justify-between mb-8">
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-foreground mb-2">
                        Brand Name/Brand Logo
                      </h2>
                      <h3 className="text-xl font-semibold text-foreground mb-4">
                        {selectedCategory.title}
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        {selectedCategory.description}
                      </p>
                    </div>
                    <button
                      onClick={() => setSelectedCategory(null)}
                      className="text-muted-foreground hover:text-foreground transition-colors ml-4"
                    >
                      <X size={24} />
                    </button>
                  </div>

                  {/* Product Information */}
                  <div className="flex-1 space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-3">Product Information</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {selectedCategory.details.overview}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {selectedCategory.details.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-muted-foreground">
                            <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-3">Partner Brands</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedCategory.details.brands.map((brand, index) => (
                          <span key={index} className="px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground">
                            {brand}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Navigation Footer */}
                  <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
                    <button
                      onClick={() => navigateCategory('prev')}
                      className="flex items-center gap-2 px-4 py-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <ChevronLeft size={20} />
                      <span>Previous Brand</span>
                    </button>
                    
                    <div className="flex gap-2">
                      {categories.map((_, index) => (
                        <div
                          key={index}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            categories[index].id === selectedCategory.id 
                              ? 'bg-foreground' 
                              : 'bg-muted-foreground/30'
                          }`}
                        />
                      ))}
                    </div>

                    <button
                      onClick={() => navigateCategory('next')}
                      className="flex items-center gap-2 px-4 py-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <span>Next Brand</span>
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CategoriesSection;