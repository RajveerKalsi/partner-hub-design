const SingleImageSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="section-divider">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground pt-8 mb-6">
                Excellence in Partnership
              </h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every partnership we forge is built on trust, innovation, and a shared 
              commitment to delivering exceptional value to our customers.
            </p>
          </div>

          {/* Featured Image */}
          <div className="relative">
            <div className="card-elevated p-0 overflow-hidden">
              <div className="aspect-[21/9] bg-gradient-to-br from-muted via-muted/50 to-muted flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <div className="text-8xl mb-6">🌟</div>
                  <h3 className="text-3xl font-bold mb-4">Premium Brand Showcase</h3>
                  <p className="text-lg max-w-2xl">
                    Discover how our partnerships create exceptional value through 
                    innovation, quality, and customer-centric solutions.
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
                <span className="text-2xl">🎯</span>
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-2">Targeted Solutions</h4>
              <p className="text-muted-foreground">
                Carefully curated partnerships that address specific market needs 
                and customer requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-2">Innovation Focus</h4>
              <p className="text-muted-foreground">
                Working with brands that push boundaries and drive innovation 
                in their respective industries.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💎</span>
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-2">Premium Quality</h4>
              <p className="text-muted-foreground">
                Every partnership is built on a foundation of quality, reliability, 
                and exceptional customer experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleImageSection;