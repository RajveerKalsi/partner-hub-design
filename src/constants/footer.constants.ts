import { CategoryTitle } from "@/enums/category.enums";
import { NavItems } from "@/enums/navigation.enums";
import { NavItem, SocialLink } from "@/types/navigation.types";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

export const FOOTER_NAV_ITEMS_COMPANY: NavItem[] = [
  { name: NavItems.HOW_WE_WORK, href: "#how-we-work" },
  { name: NavItems.WHY_CHOOSE_US, href: "#why-choose-us" },
  { name: NavItems.ABOUT_US, href: "#about-us" },
  { name: NavItems.FAQS, href: "#faq" },
];

export const FOOTER_NAV_ITEMS_SERVICES: NavItem[] = [
  { name: CategoryTitle.WAREHOUSING, href: "#categories" },
  { name: CategoryTitle.ECOMMERCE_FULFILLMENT, href: "#categories" },
  { name: CategoryTitle.SHIPPING_FREIGHT_MANAGEMENT, href: "#categories" },
  { name: CategoryTitle.REVERSE_LOGISTICS, href: "#categories" },
];

export const FOOTER_NAV_ITEMS_RESOURCES: NavItem[] = [
  { name: "Blog", href: "#" },
  { name: "Case Studies", href: "#" },
  { name: "Documentation", href: "#" },
  { name: "Help Center", href: "#" },
];

export const SOCIAL_LINKS : SocialLink[] = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
]
