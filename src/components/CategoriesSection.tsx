import { useState } from 'react';
import { ArrowRight, X } from 'lucide-react';

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
            <div className="relative bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden flex">
              {/* Left Sidebar */}
              <div className="bg-muted/40 w-1/3 p-8 flex flex-col justify-center items-center">
                <div className="flex flex-col space-y-3">
                  <div className="w-3 h-3 bg-foreground rounded-full"></div>
                  <div className="w-3 h-3 bg-muted-foreground/40 rounded-full"></div>
                  <div className="w-3 h-3 bg-muted-foreground/40 rounded-full"></div>
                </div>
              </div>

              {/* Right Content */}
              <div className="flex-1 p-8 flex flex-col">
                {/* Close Button */}
                <div className="flex justify-end mb-6">
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className="w-12 h-12 rounded-full border-2 border-foreground flex items-center justify-center hover:bg-muted transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-foreground mb-2">
                      Brand Name/Brand Logo
                    </h2>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-4xl font-bold text-foreground mb-6">
                      {selectedCategory.title}
                    </h3>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-2xl font-bold text-foreground mb-4">
                      Product Description
                    </h4>
                  </div>

                  <div className="space-y-4 mb-12">
                    <p className="text-lg text-foreground leading-relaxed">
                      {selectedCategory.details.overview}
                    </p>
                    {selectedCategory.details.features.map((feature, index) => (
                      <p key={index} className="text-lg text-foreground">
                        Product Information: {feature}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-center space-x-8 mt-auto">
                  <button className="flex items-center space-x-2 text-foreground hover:text-accent transition-colors">
                    <div className="w-10 h-10 rounded-full border-2 border-foreground flex items-center justify-center">
                      <ArrowRight size={16} className="rotate-180" />
                    </div>
                    <span className="font-medium">Previous Brand</span>
                  </button>
                  
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-foreground rounded-full"></div>
                    <div className="w-2 h-2 bg-muted-foreground/40 rounded-full"></div>
                    <div className="w-2 h-2 bg-muted-foreground/40 rounded-full"></div>
                  </div>
                  
                  <button className="flex items-center space-x-2 text-foreground hover:text-accent transition-colors">
                    <span className="font-medium">Next Brand</span>
                    <div className="w-10 h-10 rounded-full border-2 border-foreground flex items-center justify-center">
                      <ArrowRight size={16} />
                    </div>
                  </button>
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