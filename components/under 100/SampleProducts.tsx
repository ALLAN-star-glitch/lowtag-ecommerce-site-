// SampleProducts.ts
import { BadgeType } from "./ProductBardge";

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  badges: BadgeType[];
  rating?: number;
  reviews?: number;
  category?: string;
}

export const badgesList: BadgeType[] = [
  "owned",
  "fast",
  "trending",
  "partner",
  "quality",
  "top-seller",
  "exclusive",
];

export const categories: string[] = ["Electronics", "Home", "Office", "Beauty"];

export const sampleProducts: Product[] = [
  {
    id: "1",
    name: "USB Cable Type-C Fast Charging 1m",
    price: 85,
    originalPrice: 150,
    image:
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500&q=80",
    badges: ["owned", "fast", "trending"],
    rating: 4.5,
    reviews: 234,
    category: "Electronics",
  },
  {
    id: "2",
    name: "Cotton Face Towel Set (3 Pack)",
    price: 95,
    originalPrice: 180,
    image:
      "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=500&q=80",
    badges: ["partner", "quality"],
    rating: 4.3,
    reviews: 156,
    category: "Home",
  },
  {
    id: "3",
    name: "Stainless Steel Spoon Set (6 Pieces)",
    price: 75,
    image:
      "https://images.unsplash.com/photo-1606676539940-12768ce0e762?w=500&q=80",
    badges: ["owned", "fast", "top-seller"],
    rating: 4.7,
    reviews: 412,
    category: "Home",
  },
  {
    id: "4",
    name: "LED Mini Flashlight Keychain",
    price: 50,
    originalPrice: 100,
    image:
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=500&q=80",
    badges: ["exclusive", "trending"],
    rating: 4.4,
    reviews: 89,
    category: "Electronics",
  },
  {
    id: "5",
    name: "Silicone Phone Case Universal",
    price: 60,
    image:
      "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=500&q=80",
    badges: ["partner", "quality"],
    rating: 4.2,
    reviews: 178,
    category: "Electronics",
  },
  // Add remaining products similarly
];
