import { Product } from "@/types/product.types";

export const PRODUCT_CATEGORIES = ['All', 'Technology', 'Fashion', 'Health', 'Home'];

export const PRODUCTS: Product[] = [
  { id: 1, name: "Smart Wireless Headphones", category: "Technology", rating: 4.8, reviews: 1205, image: "🎧" },
  { id: 2, name: "Premium Leather Jacket", category: "Fashion", rating: 4.9, reviews: 856, image: "🧥" },
  { id: 3, name: "Fitness Tracker Pro", category: "Health", rating: 4.7, reviews: 2340, image: "⌚" },
  { id: 4, name: "Smart Home Hub", category: "Home", rating: 4.6, reviews: 1456, image: "🏠" },
  { id: 5, name: "Ultra HD Monitor", category: "Technology", rating: 4.9, reviews: 892, image: "🖥️" },
  { id: 6, name: "Designer Sunglasses", category: "Fashion", rating: 4.8, reviews: 1123, image: "🕶️" },
  { id: 7, name: "Protein Supplement", category: "Health", rating: 4.5, reviews: 3456, image: "💊" },
  { id: 8, name: "Smart Coffee Maker", category: "Home", rating: 4.7, reviews: 978, image: "☕" },
  { id: 9, name: "Wireless Earbuds", category: "Technology", rating: 4.6, reviews: 2134, image: "🎵" },
  { id: 10, name: "Luxury Watch", category: "Fashion", rating: 4.9, reviews: 567, image: "⌚" },
  { id: 11, name: "Yoga Mat Pro", category: "Health", rating: 4.8, reviews: 1890, image: "🧘" },
  { id: 12, name: "Smart Thermostat", category: "Home", rating: 4.7, reviews: 1234, image: "🌡️" },
];

export const ITEMS_PER_PAGE_OPTIONS = [4, 6, 8];
