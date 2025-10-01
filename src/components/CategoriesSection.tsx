import { useState, useEffect, useRef } from "react";
import { ArrowRight, X, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import eCommerceFulfillment from "@/assets/e-commerce-fulfillment.webp";
import reverseLogistics from "@/assets/reverse-logistics.webp";
import shippingFrieghtManagement from "@/assets/shipping-frieght-management.webp";
import warehousing from "@/assets/warehousing.webp";

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
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const autoplay = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, axis: "y" }, [
    autoplay.current,
  ]);

  const navigateToCategory = (direction: "prev" | "next") => {
    if (!selectedCategory) return;

    const currentIndex = categories.findIndex(
      (cat) => cat.id === selectedCategory.id
    );
    let newIndex;

    if (direction === "prev") {
      newIndex = currentIndex === 0 ? categories.length - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === categories.length - 1 ? 0 : currentIndex + 1;
    }

    setSelectedCategory(categories[newIndex]);
    setCurrentImageIndex(0);
  };

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setCurrentImageIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  useEffect(() => {
    if (selectedCategory) {
      setCurrentImageIndex(0);
      autoplay.current.reset();
    }
  }, [selectedCategory]);

  const categories: Category[] = [
    {
      id: 1,
      title: "Technology & Electronics",
      description: "Cutting-edge tech solutions and innovative electronics",
      image: eCommerceFulfillment,
      details: {
        overview:
          "Our technology partners represent the pinnacle of innovation in electronics, software, and digital solutions. From enterprise-grade hardware to consumer electronics, we work with brands that push the boundaries of what's possible.",
        features: [
          "Smart Home Solutions",
          "Enterprise Hardware",
          "Mobile Technology",
          "IoT Devices",
          "AI-Powered Systems",
          "Smart Home Solutions",
          "Enterprise Hardware",
          "Mobile Technology",
          "IoT Devices",
          "AI-Powered Systems",
          "Smart Home Solutions",
          "Enterprise Hardware",
          "Mobile Technology",
          "IoT Devices",
          "AI-Powered Systems",
          "Smart Home Solutions",
          "Enterprise Hardware",
          "Mobile Technology",
          "IoT Devices",
          "AI-Powered Systems",
        ],
        brands: ["TechCorp", "InnovateLab", "DigitalEdge", "SmartSolutions"],
        images: [eCommerceFulfillment, reverseLogistics, shippingFrieghtManagement, warehousing],
      },
    },
    {
      id: 2,
      title: "Fashion & Lifestyle",
      description: "Premium fashion brands and lifestyle products",
      image: reverseLogistics,
      details: {
        overview:
          "Our fashion and lifestyle partners embody sophistication, quality, and timeless design. From haute couture to everyday essentials, we curate brands that define style and elevate personal expression.",
        features: [
          "Luxury Apparel",
          "Sustainable Fashion",
          "Accessories",
          "Footwear",
          "Personal Care",
        ],
        brands: ["StyleHouse", "EcoFashion", "LuxuryLine", "ModernClassics"],
        images: ["👗", "👠", "👜", "⌚"],
      },
    },
    {
      id: 3,
      title: "Health & Wellness",
      description: "Premium health and wellness solutions",
      image: shippingFrieghtManagement,
      details: {
        overview:
          "Health and wellness are at the core of our mission. Our partners in this space deliver innovative solutions that promote better living, from fitness equipment to nutritional supplements and medical devices.",
        features: [
          "Fitness Equipment",
          "Nutrition Supplements",
          "Medical Devices",
          "Wellness Apps",
          "Recovery Tools",
        ],
        brands: ["HealthTech", "WellnessFirst", "FitLife", "MedAdvance"],
        images: ["💊", "🏃‍♂️", "🧘‍♀️", "📊"],
      },
    },
    {
      id: 4,
      title: "Home & Living",
      description: "Elegant home solutions and living essentials",
      image: warehousing,
      details: {
        overview:
          "Transform your living space with our home and living partners. From smart home automation to elegant furniture and decor, we offer solutions that make your house a true home.",
        features: [
          "Smart Home Systems",
          "Furniture Design",
          "Home Decor",
          "Kitchen Appliances",
          "Garden Solutions",
        ],
        brands: ["HomeDesign", "SmartLiving", "ElegantSpaces", "ModernHome"],
        images: ["🛋️", "🍽️", "💡", "🌿"],
      },
    },
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
            Explore our diverse range of partner categories, each carefully
            curated to deliver exceptional quality and innovation.
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
                <img
                  src={category.image}
                  alt={category.title}
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
              <div className="card-category-overlay" />
              <div className="card-category-content">
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                <p className="text-white/90 mb-4 text-sm">
                  {category.description}
                </p>
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
            <div className="relative bg-background rounded-2xl max-w-6xl w-full h-[80vh] overflow-hidden shadow-2xl">
              {/* Close Button */}
              <button
                onClick={() => setSelectedCategory(null)}
                className="absolute top-4 right-4 z-10 w-8 h-8 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center text-foreground hover:bg-background transition-colors"
              >
                <X size={16} />
              </button>

              <div className="flex flex-col md:flex-row h-full">
                {/* Left Side - Image Carousel */}
                <div className="w-full md:w-1/2 h-64 md:h-full bg-muted relative cursor-grab">
                  <div className="embla h-full" ref={emblaRef}>
                    <div className="embla__container h-full">
                      {selectedCategory.details.images.map((image, index) => (
                        <div
                          key={index}
                          className="embla__slide h-full flex-[0_0_100%]"
                        >
                          <div className="h-full flex items-center justify-center text-6xl md:text-9xl bg-gradient-to-br from-muted to-muted/50">
                            <img
                              src={image}
                              alt={`Slide ${index + 1}`}
                              className="object-cover w-full h-full rounded-lg"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Vertical Dots Indicator - Horizontal on mobile */}
                  <div
                    className="absolute left-1/2 bottom-50 -translate-x-1/2 flex space-x-2 
                md:left-4 md:top-1/2 md:-translate-y-1/2 md:translate-x-0 
                md:flex-col md:space-x-0 md:space-y-2"
                  >
                    {selectedCategory.details.images.map((_, index) => (
                      <button
                        key={index}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentImageIndex
                            ? "bg-primary"
                            : "bg-white/100"
                        }`}
                        onClick={() => emblaApi?.scrollTo(index)}
                      />
                    ))}
                  </div>
                </div>

                {/* Right Side - Content */}
                <div className="w-full md:w-1/2 p-4 md:p-8 flex flex-col h-full overflow-hidden">
                  {/* Top: Header */}
                  <div className="flex-none space-y-2">
                    <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                      EST. 2020 / {selectedCategory.title.toUpperCase()}
                    </div>
                    <h2 className="text-3xl font-bold text-foreground">
                      {selectedCategory.details.brands[0] ||
                        selectedCategory.title}
                    </h2>
                  </div>

                  {/* Middle: Description + Features (scrollable) */}
                  <div
                    className="flex-1 overflow-y-auto mt-4 pr-2 space-y-4 
                scrollbar-thin scrollbar-thumb-muted-foreground scrollbar-track-transparent 
                scroll-smooth"
                  >
                    {/* Description */}
                    <p className="text-foreground leading-relaxed">
                      {selectedCategory.details.overview}
                    </p>

                    {/* Features */}
                    <div className="space-y-3">
                      {selectedCategory.details.features.map(
                        (feature, index) => (
                          <div key={index} className="text-muted-foreground">
                            {feature}
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  {/* Bottom: Navigation */}
                  <div className="flex-none flex items-center justify-between pt-6 border-t border-border px-4 md:px-8">
                    <button
                      onClick={() => navigateToCategory("prev")}
                      className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center group-hover:border-foreground transition-colors">
                        <ChevronLeft size={16} />
                      </div>
                      <span className="text-sm font-medium">
                        PREV:{" "}
                        {
                          categories[
                            categories.findIndex(
                              (cat) => cat.id === selectedCategory.id
                            ) === 0
                              ? categories.length - 1
                              : categories.findIndex(
                                  (cat) => cat.id === selectedCategory.id
                                ) - 1
                          ]?.title.split(" ")[0]
                        }
                      </span>
                    </button>

                    <div className="flex space-x-1">
                      {categories.map((_, index) => (
                        <div
                          key={index}
                          className={`w-2 h-2 rounded-full ${
                            index ===
                            categories.findIndex(
                              (cat) => cat.id === selectedCategory.id
                            )
                              ? "bg-foreground"
                              : "bg-muted-foreground/30"
                          }`}
                        />
                      ))}
                    </div>

                    <button
                      onClick={() => navigateToCategory("next")}
                      className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors group"
                    >
                      <span className="text-sm font-medium">
                        NEXT:{" "}
                        {
                          categories[
                            categories.findIndex(
                              (cat) => cat.id === selectedCategory.id
                            ) ===
                            categories.length - 1
                              ? 0
                              : categories.findIndex(
                                  (cat) => cat.id === selectedCategory.id
                                ) + 1
                          ]?.title.split(" ")[0]
                        }
                      </span>
                      <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center group-hover:border-foreground transition-colors">
                        <ChevronRight size={16} />
                      </div>
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
