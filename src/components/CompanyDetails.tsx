const CompanyDetails = () => {
  const details = [
    {
      title: "Our Mission",
      content: "To bridge the gap between exceptional brands and discerning customers by fostering strategic partnerships that drive innovation, quality, and mutual success.",
      points: [
        "Curating premium brand partnerships",
        "Ensuring quality and innovation standards",
        "Delivering exceptional customer experiences",
        "Building long-term strategic relationships"
      ],
      image: "🎯",
      imagePosition: "right"
    },
    {
      title: "Why Choose Us",
      content: "With over a decade of experience in brand partnerships, we understand what it takes to create meaningful connections between brands and their target audiences.",
      points: [
        "Rigorous brand selection process",
        "Proven track record of success",
        "Dedicated support and service",
        "Global network of premium partners"
      ],
      image: "🏆",
      imagePosition: "left"
    },
    {
      title: "Our Approach",
      content: "We believe in a personalized approach to brand partnerships, understanding that each collaboration is unique and requires tailored strategies for success.",
      points: [
        "Comprehensive market analysis",
        "Customized partnership strategies",
        "Ongoing performance monitoring",
        "Continuous optimization and improvement"
      ],
      image: "📊",
      imagePosition: "right"
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="section-divider">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground pt-8 mb-6">
              Company Details
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Learn more about our company, our mission, and what sets us apart 
            in the world of brand partnerships.
          </p>
        </div>

        <div className="space-y-24">
          {details.map((detail, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-16 items-center ${
                detail.imagePosition === 'left' ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={`space-y-8 ${detail.imagePosition === 'left' ? 'lg:col-start-2' : ''}`}>
                <div className="space-y-4">
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                    {detail.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {detail.content}
                  </p>
                </div>

                <div className="space-y-4">
                  {detail.points.map((point, pointIndex) => (
                    <div key={pointIndex} className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0" />
                      <p className="text-muted-foreground">{point}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image */}
              <div className={`relative ${detail.imagePosition === 'left' ? 'lg:col-start-1' : ''}`}>
                <div className="card-elevated p-0 overflow-hidden">
                  <div className="aspect-[4/3] bg-muted flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <div className="text-8xl mb-4">{detail.image}</div>
                      <p className="font-medium text-lg">{detail.title}</p>
                    </div>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyDetails;