import { BadgeType } from "@/lib/types/badge/badgeType";


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
  subCategory?: string;
}

export const badgesList: BadgeType[] = ["fast", "quality", "exclusive", "trending"];

export const categories: string[] = ["Electronics", "Home", "Office", "Beauty"];

export const subCategories: string[] = [
  "Phones",
  "Laptops",
  "Audio",
  "Accessories",
  "Wearables",
  "Home Appliances",
  "Furniture",
  "Cosmetics",
];

/* ------------------------------------------------------
   SAMPLE PRODUCTS
------------------------------------------------------ */
export const sampleProducts: Product[] = [
  {
    id: "1",
    name: "USB Cable Type-C Fast Charging 1m",
    price: 85,
    originalPrice: 150,
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500&q=80",
    badges: ["fast", "trending"],
    rating: 4.5,
    reviews: 234,
    category: "Electronics",
    subCategory: "Accessories",
  },
  {
    id: "2",
    name: "Cotton Face Towel Set (3 Pack)",
    price: 95,
    originalPrice: 180,
    image: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=500&q=80",
    badges: ["quality", "trending"],
    rating: 4.3,
    reviews: 156,
    category: "Home",
    subCategory: "Home Appliances",
  },
  {
    id: "3",
    name: "Stainless Steel Spoon Set (6 Pieces)",
    price: 75,
    image: "https://images.unsplash.com/photo-1606676539940-12768ce0e762?w=500&q=80",
    badges: ["quality", "fast"],
    rating: 4.7,
    reviews: 412,
    category: "Home",
    subCategory: "Home Appliances",
  },
  {
    id: "4",
    name: "LED Mini Flashlight Keychain",
    price: 50,
    originalPrice: 100,
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=500&q=80",
    badges: ["exclusive", "trending"],
    rating: 4.4,
    reviews: 89,
    category: "Electronics",
    subCategory: "Accessories",
  },
  {
    id: "5",
    name: "Silicone Phone Case Universal",
    price: 60,
    image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=500&q=80",
    badges: ["quality", "fast"],
    rating: 4.2,
    reviews: 178,
    category: "Electronics",
    subCategory: "Phones",
  },
  {
    id: "6",
    name: "Ergonomic Office Chair Mesh Back",
    price: 3250,
    originalPrice: 3600,
    image: "https://images.unsplash.com/photo-1616627985696-e8d44a4e856f?w=500&q=80",
    badges: ["quality", "trending"],
    rating: 4.8,
    reviews: 502,
    category: "Office",
    subCategory: "Furniture",
  },
  {
    id: "7",
    name: "Makeup Brush Set (12 Pieces)",
    price: 450,
    originalPrice: 600,
    image: "https://images.unsplash.com/photo-1583241801511-f8f42f65a4c8?w=500&q=80",
    badges: ["exclusive", "quality"],
    rating: 4.6,
    reviews: 310,
    category: "Beauty",
    subCategory: "Cosmetics",
  },
  {
    id: "8",
    name: "Electric Kettle Stainless Steel 1.7L",
    price: 1299,
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31b?w=500&q=80",
    badges: ["fast", "quality"],
    rating: 4.4,
    reviews: 207,
    category: "Home",
    subCategory: "Home Appliances",
  },
  {
    id: "9",
    name: "Portable Bluetooth Speaker Mini",
    price: 850,
    originalPrice: 1200,
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&q=80",
    badges: ["trending", "quality"],
    rating: 4.5,
    reviews: 389,
    category: "Electronics",
    subCategory: "Audio",
  },
  {
    id: "10",
    name: "Desk Organizer Set (Wood Finish)",
    price: 650,
    image: "https://images.unsplash.com/photo-1616627985696-e8d44a4e856f?w=500&q=80",
    badges: ["quality", "trending"],
    rating: 4.3,
    reviews: 132,
    category: "Office",
    subCategory: "Furniture",
  },
  {
    id: "11",
    name: "Hair Dryer 2-Speed 1200W",
    price: 750,
    originalPrice: 1000,
    image: "https://images.unsplash.com/photo-1584949091598-c31daaaa4aa3?w=500&q=80",
    badges: ["exclusive", "fast"],
    rating: 4.6,
    reviews: 244,
    category: "Beauty",
    subCategory: "Cosmetics",
  },
  {
    id: "12",
    name: "USB Desktop Fan Rechargeable",
    price: 499,
    image: "https://images.unsplash.com/photo-1590784073883-59ccd44e6f01?w=500&q=80",
    badges: ["trending", "fast"],
    rating: 4.1,
    reviews: 97,
    category: "Office",
    subCategory: "Furniture",
  }
];
