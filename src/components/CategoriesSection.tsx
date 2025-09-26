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
            <div className="relative bg-card rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-3xl font-bold text-foreground mb-2">
                      {selectedCategory.title}
                    </h3>
                    <p className="text-muted-foreground">{selectedCategory.description}</p>
                  </div>
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="space-y-8">
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-foreground">Overview</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedCategory.details.overview}
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-semibold mb-4 text-foreground">Key Features</h4>
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
                      <h4 className="text-xl font-semibold mb-4 text-foreground">Partner Brands</h4>
                      <div className="space-y-2">
                        {selectedCategory.details.brands.map((brand, index) => (
                          <div key={index} className="text-muted-foreground font-medium">
                            {brand}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-foreground">Product Gallery</h4>
                    <div className="grid grid-cols-4 gap-4">
                      {selectedCategory.details.images.map((image, index) => (
                        <div key={index} className="aspect-square bg-muted rounded-lg flex items-center justify-center text-4xl">
                          {image}
                        </div>
                      ))}
                    </div>
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