import aboutSection from "@/assets/about-us.webp";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="section-divider">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground pt-8">
                  About Our Vision
                </h2>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We believe in the power of strategic partnerships to drive
                innovation and deliver exceptional value to our customers.
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                For over a decade, we've been at the forefront of identifying
                and nurturing relationships with premium brands that share our
                commitment to quality, innovation, and customer satisfaction.
                Our rigorous selection process ensures that every partner meets
                the highest standards of excellence.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Through these partnerships, we're able to offer our customers
                access to cutting-edge products, exclusive collections, and
                services that define the future of their respective industries.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">50+</div>
                <div className="text-muted-foreground">Brand Partners</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">10+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="card-elevated p-0 overflow-hidden">
              <div className="aspect-[4/3] bg-muted flex items-center justify-center">
                <img
                  src={aboutSection}
                  alt="About Section"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;