"use client";

import { BadgeType } from "./Badge";

export interface Product {
  id: string;
  image: string;
  name: string;
  originalPrice: number;
  discountedPrice: number;
  badges: BadgeType[];
  category: string;
  hasTimer?: boolean;
  timerEndTime?: Date;
}

export const categories = [
  "Electronics",
  "Home & Kitchen",
  "Mobile Accessories",
  "Fashion",
  "Beauty",
  "Computers",
];

// 12+ SAMPLE PRODUCTS
export const sampleProducts: Product[] = [
  {
    id: "1",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    name: "Premium Wireless Headphones",
    originalPrice: 199.99,
    discountedPrice: 59.99,
    badges: ["owned", "fast"],
    category: "Electronics",
    hasTimer: true,
    timerEndTime: new Date(Date.now() + 3 * 3600 * 1000),
  },
  {
    id: "2",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
    name: "Luxury Smart Watch",
    originalPrice: 299.99,
    discountedPrice: 149.99,
    badges: ["partner", "top", "quality"],
    category: "Mobile Accessories",
  },
  {
    id: "3",
    image:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500",
    name: "Designer Sunglasses",
    originalPrice: 149.99,
    discountedPrice: 44.99,
    badges: ["exclusive"],
    category: "Fashion",
  },
  {
    id: "4",
    image:
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=500",
    name: "Bluetooth Speaker",
    originalPrice: 89.99,
    discountedPrice: 34.99,
    badges: ["owned", "top"],
    category: "Electronics",
  },
  {
    id: "5",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500",
    name: "Mechanical Keyboard",
    originalPrice: 129.99,
    discountedPrice: 79.99,
    badges: ["quality"],
    category: "Computers",
  },
  {
    id: "6",
    image:
      "https://images.unsplash.com/photo-1588410048862-14e6f4f12296?w=500",
    name: "LED Desk Lamp",
    originalPrice: 49.99,
    discountedPrice: 19.99,
    badges: ["fast"],
    category: "Home & Kitchen",
  },
  {
    id: "7",
    image:
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500",
    name: "DSLR Camera Lens",
    originalPrice: 349.99,
    discountedPrice: 219.99,
    badges: ["top", "quality"],
    category: "Electronics",
  },
  {
    id: "8",
    image:
      "https://images.unsplash.com/photo-1580894908361-967195033f6c?w=500",
    name: "Massage Gun Premium",
    originalPrice: 199.99,
    discountedPrice: 79.99,
    badges: ["exclusive", "partner"],
    category: "Beauty",
  },
  {
    id: "9",
    image:
      "https://images.unsplash.com/photo-1503602642458-232111445657?w=500",
    name: "Smart LED TV 43''",
    originalPrice: 399.99,
    discountedPrice: 259.99,
    badges: ["trending", "top"],
    category: "Electronics",
  },
  {
    id: "10",
    image:
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=500",
    name: "Mini Portable Speaker",
    originalPrice: 49.99,
    discountedPrice: 19.99,
    badges: ["fast"],
    category: "Electronics",
  },
  {
    id: "11",
    image:
      "https://images.unsplash.com/photo-1532057309443-9cfa8f79f41f?w=500",
    name: "Elegant Kitchen Blender",
    originalPrice: 99.99,
    discountedPrice: 39.99,
    badges: ["owned"],
    category: "Home & Kitchen",
  },
  {
    id: "12",
    image:
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500",
    name: "Gaming Mouse RGB",
    originalPrice: 59.99,
    discountedPrice: 24.99,
    badges: ["quality", "trending"],
    category: "Computers",
  },
];

export const badgesList: BadgeType[] = [
  "owned",
  "fast",
  "trending",
  "partner",
  "top",
  "quality",
  "exclusive",
];
