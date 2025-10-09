import { Category } from "@/types/category.types";
import eCommerceFulfillment from "@/assets/e-commerce-fulfillment.webp";
import reverseLogistics from "@/assets/reverse-logistics.webp";
import shippingFrieghtManagement from "@/assets/shipping-frieght-management.webp";
import warehousing from "@/assets/warehousing.webp";
import storage from "@/assets/Short-long-term-storage.webp";
import palletizedBox from "@/assets/Palletized-boxed-custom storage.webp";
import receivingImage from "@/assets/Receiving-loading.webp";
import pickPackImage from "@/assets/Pick-pack-services.webp";
import amazonFBAImage from "@/assets/AmazonFBA.webp";
import ecommerceImage from "@/assets/ecommerce-integration.webp";
import orderTrackingImage from "@/assets/Order-Tracking.webp";
import dhlImage from "@/assets/DHL.webp";
import containerShippingImage from "@/assets/Container-shipping-overseas.webp";
import customClearanceImage from "@/assets/custom-clearance.webp";
import ltlImage from "@/assets/LTL-FTL-Shipment.webp";
import returnsImage from "@/assets/Returns-handling-restocking.webp";
import QAImage from "@/assets/Quality-control-checks.webp";
import RMAImage from "@/assets/RMA-processes.webp";
import { CategoryTitle } from "@/enums/category.enums";

export const CATEGORIES: Category[] = [
  {
    id: 1,
    title: CategoryTitle.WAREHOUSING,
    description: "Organized inventory, hassle-free.",
    image: eCommerceFulfillment,
    details: {
      overview:
        "At Houston Logistics, our warehousing solutions combine security, efficiency, and precision to keep your inventory organized and ready to move. Every product is carefully tracked and managed to minimize delays and ensure seamless operations. With our hassle-free approach, you can focus on growing your business while we handle storage with expertise and reliability.",
      features: [
        "Short & long-term storage",
        "Palletized, boxed, or custom storage",
        "Receiving & loading",
        "Package handling (palletizing, packaging)",
        "Pick & pack services",
      ],
      brands: ["Warehousing", "InnovateLab", "DigitalEdge", "SmartSolutions"],
      images: [storage, palletizedBox, receivingImage, pickPackImage],
    },
  },
  {
    id: 2,
    title: CategoryTitle.ECOMMERCE_FULFILLMENT,
    description: "From cart to doorstep, we handle it all.",
    image: reverseLogistics,
    details: {
      overview:
        "Streamlines your e-commerce operations with fast and accurate fulfillment, including Amazon FBA/FBM prep. Our platform integrates seamlessly with Amazon, Walmart, Shopify, Etsy, and more, so all your orders are managed in one place. With real-time order processing and tracking, we ensure every customer receives their purchase quickly and reliably.",
      features: [
        "Amazon FBA / FBM prep & fulfillment",
        "Integration with Amazon, Walmart, Shopify, Etsy, etc.",
        "Real-time order processing & tracking",
      ],
      brands: [
        "E-Commerce Fulfillment",
        "EcoFashion",
        "LuxuryLine",
        "ModernClassics",
      ],
      images: [amazonFBAImage, ecommerceImage, orderTrackingImage],
    },
  },
  {
    id: 3,
    title: CategoryTitle.SHIPPING_FREIGHT_MANAGEMENT,
    description: "Moving goods faster, safer, smarter.",
    image: shippingFrieghtManagement,
    details: {
      overview:
        "Houston Logistics offers comprehensive shipping and freight solutions, partnering with USPS, UPS, FedEx, DHL, and more to handle domestic and international deliveries. From LTL/FTL shipments and last-mile delivery to drayage and overseas container shipping, we ensure your goods move efficiently at every step. Our expert customs clearance and import/export consultancy simplify cross-border logistics, so your business can expand without hassle.",
      features: [
        "Partnerships with USPS, UPS, FedEx, DHL",
        "Domestic & international shipping",
        "LTL / FTL freight shipments",
        "Drayage shipments (port → warehouse)",
        "Container shipping overseas",
        "Customs clearance & import/export consultancy",
      ],
      brands: [
        "Shipping & Freight Management",
        "WellnessFirst",
        "FitLife",
        "MedAdvance",
      ],
      images: [
        dhlImage,
        ltlImage,
        containerShippingImage,
        customClearanceImage,
      ],
    },
  },
  {
    id: 4,
    title: CategoryTitle.REVERSE_LOGISTICS,
    description: "Returns and restocking made simple.",
    image: warehousing,
    details: {
      overview:
        "Simplifies reverse logistics with efficient returns handling and restocking. Our quality control checks ensure every product meets your standards before re-entering inventory. From accept/reject decisions to RMA management, we make returns seamless and hassle-free for your business.",
      features: [
        "Returns handling & restocking",
        "Quality control checks",
        "Accept/Reject and RMA processes",
      ],
      brands: [
        "Reverse Logistics",
        "SmartLiving",
        "ElegantSpaces",
        "ModernHome",
      ],
      images: [returnsImage, QAImage, RMAImage],
    },
  },
];
