import whyChooseUsImage from "@/assets/why-choose-us.webp";
import whatIs3pl from "@/assets/what-is-3pl.webp";
import aboutSection from "@/assets/about-us.webp";

const CompanyDetails = () => {
  const details = [
    {
      title: "What is 3PL?",
      content:
        "Third-Party Logistics (3PL) is a service where a company outsources its logistics and supply chain management to an external provider. This includes warehousing, transportation, inventory management, and even order fulfillment. 3PL providers act as an extension of a business, handling the complex logistics so companies can focus on their core operations.",
      points: [
        "Cost Savings",
        "Expertise & Efficiency",
        "Scalability & Flexibility",
      ],
      image: whatIs3pl,
      imagePosition: "right",
    },
    {
      title: "Why Choose Us?",
      content:
        "Houston Logistics stands out by combining industry expertise with personalized service to deliver seamless logistics solutions. We prioritize reliability, speed, and transparency in every step of the supply chain. Our technology-driven approach ensures real-time tracking, efficient route planning, and proactive problem-solving. Partnering with us means gaining a logistics ally committed to your business growth and operational efficiency.",
      points: [
        "Reliable & On-Time Delivery",
        "Customized Solutions",
        "End-to-End Support",
      ],
      image: whyChooseUsImage,
      imagePosition: "left",
    },
    {
      title: "About Us",
      content:
        "At Houston Logistics, we go beyond transportation — we deliver confidence. As a trusted 3PL partner, we specialize in warehousing, distribution, and end-to-end logistics solutions designed to help businesses grow. With a team driven by precision and innovation, we ensure every shipment is handled with care, speed, and reliability. Our mission is simple: to keep your business moving forward.",
      points: [
        "Reliability & On-Time Delivery",
        "Expert Team & Proven Experience",
        "End-to-End Logistics Solutions",
      ],
      image: aboutSection,
      imagePosition: "right",
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="section-divider">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground pt-8 mb-6">
              Why Partner with Houston Logistics
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Houston Logistics takes the hassle out of moving goods, providing
            smart, reliable solutions for businesses of all sizes.
          </p>
        </div>

        <div className="space-y-24">
          {details.map((detail, index) => (
            <div
              id={detail.title.replace(/[^\w\s]/gi, "").replace(/\s+/g, "-").toLowerCase()} // e.g., "Why Choose Us?" -> "why-choose-us?"
              key={index}
              className={`grid lg:grid-cols-2 gap-16 items-center ${
                detail.imagePosition === "left" ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              {/* Content */}
              <div
                className={`space-y-8 ${
                  detail.imagePosition === "left" ? "lg:col-start-2" : ""
                }`}
              >
                <div className="space-y-4">
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground text-left">
                    {detail.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed md:text-left">
                    {detail.content}
                  </p>
                </div>

                <div
                  className={`grid gap-4 ${
                    detail.points.length > 4 ? "grid-cols-2" : "grid-cols-1"
                  }`}
                >
                  {detail.points.map((point, pointIndex) => (
                    <div
                      key={pointIndex}
                      className="flex items-start space-x-4"
                    >
                      <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0" />
                      <p className="text-muted-foreground">{point}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image */}
              <div
                className={`relative order-first md:order-none ${
                  detail.imagePosition === "left" ? "lg:col-start-1" : ""
                }`}
              >
                <div className="card-elevated p-0 overflow-hidden">
                  <div className="aspect-[5/3] bg-muted flex items-center justify-center">
                    {/* Only show image */}
                    <img
                      src={detail.image}
                      alt={detail.title}
                      className="object-cover w-full h-full"
                    />
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
