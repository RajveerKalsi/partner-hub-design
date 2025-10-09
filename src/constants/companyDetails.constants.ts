import whyChooseUsImage from "@/assets/why-choose-us.webp";
import whatIs3pl from "@/assets/what-is-3pl.webp";
import aboutSection from "@/assets/about-us.webp";
import { Details } from "@/types/companyDetails.types";

export const COMPANY_DETAILS : Details[] = [
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
