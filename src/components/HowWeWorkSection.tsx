import { ArrowDown, Package, Warehouse, Truck, CheckCircle } from 'lucide-react';

const HowWeWorkSection = () => {
  const steps = [
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

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
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

        <div className="max-w-5xl mx-auto space-y-8">
          {steps.map((step, index) => (
            <div key={step.number}>
              <div className="card-elevated p-8 md:p-10">
                <div className="grid md:grid-cols-[auto_1fr] gap-8 items-start">
                  {/* Step Number Circle */}
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center shadow-lg">
                      <span className="text-2xl font-bold text-accent-foreground">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start gap-6">
                      {/* Icon */}
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <step.icon className="w-6 h-6 text-primary" />
                      </div>

                      {/* Text Content */}
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-foreground mb-3">
                          {step.title}
                        </h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Arrow connector (not shown on last item) */}
              {index < steps.length - 1 && (
                <div className="flex justify-center py-4">
                  <ArrowDown className="w-8 h-8 text-accent animate-bounce" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
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
