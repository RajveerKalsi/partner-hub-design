import { useState, useEffect, useRef } from "react";
import { ArrowRight, X, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { CATEGORIES } from "@/constants/category.constants";
import { CategoryText } from "@/enums/category.enums";
import { Category } from "@/types/category.types";

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

    const currentIndex = CATEGORIES.findIndex(
      (cat) => cat.id === selectedCategory.id
    );
    let newIndex;

    if (direction === "prev") {
      newIndex = currentIndex === 0 ? CATEGORIES.length - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === CATEGORIES.length - 1 ? 0 : currentIndex + 1;
    }

    setSelectedCategory(CATEGORIES[newIndex]);
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

  return (
    <section id="categories" className="py-24 background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="section-divider">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground pt-8 mb-6">
              {CategoryText.SECTION_TITLE}
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {CategoryText.SECTION_DESCRIPTION}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 stagger-children">
          {CATEGORIES.map((category) => (
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
                <div className="flex items-center text-white/90 font-semibold group-hover:text-accent transition-colors">
                  <span className="text-sm font-medium">{CategoryText.EXPLORE_BUTTON}</span>
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
                className="absolute top-4 right-4 z-10 w-8 h-8 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center text-foreground border transition-colors hover:border-accent hover:text-accent"
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
                            ? "bg-accent"
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
                    <div className="text-sm font-medium text-accent uppercase tracking-wide">
                      {CategoryText.EST_PREFIX} {selectedCategory.title.toUpperCase()}
                    </div>
                    <h2 className="text-3xl font-bold">
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
                          <div
                            key={index}
                            className="flex items-center space-x-3 text-muted-foreground"
                          >
                            <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  {/* Bottom: Navigation */}
                  <div className="flex-none flex items-center justify-between pt-6 border-t border-border px-4 md:px-8">
                    <button
                      onClick={() => navigateToCategory("prev")}
                      className="flex items-center space-x-2 text-muted-foreground hover:text-accent transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center group-hover:border-accent transition-colors">
                        <ChevronLeft size={16} />
                      </div>
                      <span className="text-sm font-medium">
                        {" "}
                        {
                          CATEGORIES[
                            CATEGORIES.findIndex(
                              (cat) => cat.id === selectedCategory.id
                            ) === 0
                              ? CATEGORIES.length - 1
                              : CATEGORIES.findIndex(
                                  (cat) => cat.id === selectedCategory.id
                                ) - 1
                          ]?.title.split(" ")[0]
                        }
                      </span>
                    </button>

                    <div className="flex space-x-1">
                      {CATEGORIES.map((_, index) => (
                        <div
                          key={index}
                          className={`w-2 h-2 rounded-full ${
                            index ===
                            CATEGORIES.findIndex(
                              (cat) => cat.id === selectedCategory.id
                            )
                              ? "bg-accent"
                              : "bg-muted-foreground/30"
                          }`}
                        />
                      ))}
                    </div>

                    <button
                      onClick={() => navigateToCategory("next")}
                      className="flex items-center space-x-2 text-muted-foreground hover:text-accent transition-colors group"
                    >
                      <span className="text-sm font-medium">
                        {" "}
                        {
                          CATEGORIES[
                            CATEGORIES.findIndex(
                              (cat) => cat.id === selectedCategory.id
                            ) ===
                            CATEGORIES.length - 1
                              ? 0
                              : CATEGORIES.findIndex(
                                  (cat) => cat.id === selectedCategory.id
                                ) + 1
                          ]?.title.split(" ")[0]
                        }
                      </span>
                      <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center group-hover:border-accent transition-colors">
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
