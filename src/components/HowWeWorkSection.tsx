import { useEffect, useRef, useState } from 'react';
import { Package, Warehouse, Truck, CheckCircle, LucideIcon } from 'lucide-react';

const HowWeWorkSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  const steps: { number: number; title: string; description: string; icon: LucideIcon }[] = [
    {
      number: 1,
      title: "Order Placement",
      description: "Customer places order through your platform. We receive instant notification and begin processing immediately.",
      icon: Package,
    },
    {
      number: 2,
      title: "Warehouse Processing",
      description: "Our team picks, packs, and quality-checks your products with precision and care in our state-of-the-art facilities.",
      icon: Warehouse,
    },
    {
      number: 3,
      title: "Shipping & Tracking",
      description: "Products are dispatched with full tracking capabilities. Real-time updates keep you and your customers informed.",
      icon: Truck,
    },
    {
      number: 4,
      title: "Delivery Confirmation",
      description: "Successful delivery with confirmation. Your customers receive their orders on time, every time.",
      icon: CheckCircle,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      stepsRef.current.forEach((stepElement, index) => {
        if (!stepElement) return;

        const stepTop = stepElement.offsetTop + sectionTop;
        const stepHeight = stepElement.offsetHeight;
        const stepCenter = stepTop + stepHeight / 2;

        if (scrollPosition >= stepCenter - 100 && scrollPosition <= stepCenter + 100) {
          setActiveStep(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-muted/30 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="section-divider">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground pt-8 mb-6">
              How We Work
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our streamlined process ensures your products reach customers efficiently 
            and reliably, from order to delivery.
          </p>
        </div>

        <div className="max-w-6xl mx-auto relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 hidden md:block">
            {/* Background line */}
            <div className="absolute inset-0 bg-border"></div>
            {/* Animated highlight line */}
            <div 
              className="absolute top-0 left-0 right-0 bg-accent transition-all duration-500 ease-out"
              style={{
                height: `${((activeStep + 1) / steps.length) * 100}%`,
              }}
            ></div>
          </div>

          {/* Steps */}
          <div className="space-y-32">
            {steps.map((step, index) => {
              const isLeft = index % 2 === 0;
              const isActive = activeStep >= index;
              const IconComponent = step.icon;

              return (
                <div
                  key={step.number}
                  ref={(el) => (stepsRef.current[index] = el)}
                  className="relative"
                >
                  <div className={`grid md:grid-cols-2 gap-8 items-center ${isLeft ? '' : 'md:grid-flow-dense'}`}>
                    {/* Icon Side */}
                    <div className={`flex ${isLeft ? 'md:justify-end' : 'md:justify-start'} justify-center`}>
                      <div 
                        className={`w-20 h-20 rounded-full flex items-center justify-center transition-all duration-500 ${
                          isActive 
                            ? 'bg-accent shadow-lg shadow-accent/50' 
                            : 'bg-muted border-2 border-border'
                        }`}
                      >
                        <IconComponent 
                          className={`w-10 h-10 transition-colors duration-500 ${
                            isActive ? 'text-accent-foreground' : 'text-muted-foreground'
                          }`}
                        />
                      </div>
                    </div>

                    {/* Content Side */}
                    <div className={`${isLeft ? '' : 'md:col-start-1'}`}>
                      <div className={`card-elevated p-8 transition-all duration-500 ${
                        isActive ? 'shadow-lg' : ''
                      }`}>
                        <div className="flex items-start gap-4 mb-4">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-500 ${
                            isActive ? 'bg-accent text-accent-foreground' : 'bg-muted text-muted-foreground'
                          }`}>
                            <span className="text-lg font-bold">{step.number}</span>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-foreground mb-3">
                              {step.title}
                            </h3>
                          </div>
                        </div>
                        <p className="text-lg text-muted-foreground leading-relaxed ml-14">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Center dot on timeline */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block z-10">
                    <div 
                      className={`w-4 h-4 rounded-full transition-all duration-500 ${
                        isActive 
                          ? 'bg-accent scale-150 shadow-lg shadow-accent/50' 
                          : 'bg-border scale-100'
                      }`}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-24">
          <div className="card-elevated inline-block p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Streamline Your Logistics?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-xl">
              Let us handle the complexity of fulfillment while you focus on growing your business.
            </p>
            <a href="#contact" className="btn-hero inline-block">
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
