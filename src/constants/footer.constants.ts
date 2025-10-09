import { NavItem, SocialLink } from "@/types/navigation.types";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

export const FOOTER_NAV_ITEMS_COMPANY: NavItem[] = [
  { name: "How We Work", href: "#how-we-work" },
  { name: "Why Choose Us", href: "#why-choose-us" },
  { name: "About Us", href: "#about-us" },
  { name: "FAQs", href: "#faq" },
];

export const FOOTER_NAV_ITEMS_SERVICES: NavItem[] = [
  { name: "Warehousing", href: "#categories" },
  { name: "E-Commerce Fulfillment", href: "#categories" },
  { name: "Shipping & Freight Management", href: "#categories" },
  { name: "Reverse Logistics", href: "#categories" },
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
