import logisticVideo from "@/assets/logistics-video.webm";

const SingleImageSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-full mx-auto">
          <div className="text-center mb-16">
            <div className="section-divider">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground pt-8 mb-6">
              We Don’t Just Deliver Goods - We Deliver Growth
              </h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-5xl mx-auto">
              Our warehousing, fulfillment, and freight services are designed to give
               you more than just logistics - they give you reliability, speed, and scalability. 
               With every shipment we handle, our goal is simple: to help your business operate seamlessly today and grow stronger tomorrow.
            </p>
          </div>

          {/* Video Section with Gradient Overlay */}
          <div className="relative">
            <div className="card-elevated p-0 overflow-hidden">
              <div className="aspect-[4/5] md:aspect-[21/10] relative">
                {/* Video */}
                <video
                  src={logisticVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/60 to-black/30" />

                {/* Text Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                  <h3 className="text-xl md:text-4xl font-bold text-white mb-4">
                    Beyond Goods. Driving Growth.
                  </h3>
                  <p className="text-sm md:text-xl text-white max-w-2xl">
                    At Houston Logistics, we go beyond moving goods - we move businesses forward with solutions built for growth.
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute top-1/2 -right-4 w-16 h-16 bg-accent/30 rounded-full blur-xl" />
          </div>

          {/* Stats or Call to Action */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚚</span>
              </div>
              <h4 className="text-xl font-bold text-foreground mb-2">Fast & Reliable Shipping</h4>
              <p className="text-muted-foreground">
                Ensure timely deliveries across local and national routes with real-time tracking for every shipment.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h4 className="text-xl font-bold text-foreground mb-2">Comprehensive Freight Solutions</h4>
              <p className="text-muted-foreground">
                Handling everything from standard freight to oversized or specialized cargo with tailored logistics planning.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">↪️</span>
              </div>
              <h4 className="text-xl font-bold text-foreground mb-2">Reverse Logistics & Returns Management</h4>
              <p className="text-muted-foreground">
                Efficient returns handling, restocking, and quality control to streamline reverse supply chain processes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleImageSection;