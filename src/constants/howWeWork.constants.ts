import {
  Package,
  Warehouse,
  Truck,
  CheckCircle,
} from "lucide-react";
import { WorkStep } from "@/types/howWeWork.types";

export const WORK_STEPS: WorkStep[] = [
  {
    number: 1,
    title: "Order Placement",
    description:
      "Customer places order through your platform. We receive instant notification and begin processing immediately.",
    icon: Package,
  },
  {
    number: 2,
    title: "Warehouse Processing",
    description:
      "Our team picks, packs, and quality-checks your products with precision and care in our state-of-the-art facilities.",
    icon: Warehouse,
  },
  {
    number: 3,
    title: "Shipping & Tracking",
    description:
      "Products are dispatched with full tracking capabilities. Real-time updates keep you and your customers informed.",
    icon: Truck,
  },
  {
    number: 4,
    title: "Delivery Confirmation",
    description:
      "Successful delivery with confirmation. Your customers receive their orders on time, every time.",
    icon: CheckCircle,
  },
];
