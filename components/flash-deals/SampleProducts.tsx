"use client";

import { BadgeType } from "@/lib/types/badge/badgeType";

export interface Product {
  id: string;
  name: string;
  slug: string;
  description?: string;
  shortDescription?: string;
  price: number;
  discountPrice?: number;
  images: string[];
  category: string;
  tags?: string[];
  badges?: BadgeType[];
  stock?: number;
  isFeatured?: boolean;
  flashDeals?: string[];
  hasTimer?: boolean;
  timerEndTime?: Date;
  publishedAt?: string;
}

export const categories = [
  "Electronics",
  "Home & Kitchen",
  "Mobile Accessories",
  "Fashion",
  "Beauty",
  "Computers",
];

export const badgesList: BadgeType[] = [
  "fast",
  "trending",
  "quality",
  "exclusive",
];

export const sampleProducts: Product[] = [
  {
    id: "1",
    name: "Premium Wireless Headphones",
    slug: "premium-wireless-headphones",
    description: "High-quality wireless headphones with noise cancellation.",
    shortDescription: "Wireless Headphones – Premium Sound",
    price: 199.99,
    discountPrice: 59.99,
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
      "https://images.unsplash.com/photo-1580894908361-967195033f6c?w=500",
    ],
    badges: ["fast", "quality"],
    category: "Electronics",
    tags: ["Audio", "Wireless"],
    stock: 50,
    isFeatured: true,
    flashDeals: ["BlackFridayDeal"],
    hasTimer: true,
    timerEndTime: new Date(Date.now() + 3 * 3600 * 1000),
    publishedAt: new Date().toISOString(),
  },
  {
    id: "2",
    name: "Luxury Smart Watch",
    slug: "luxury-smart-watch",
    description: "Elegant smartwatch with health and fitness tracking.",
    shortDescription: "Smartwatch – Elegant & Smart",
    price: 299.99,
    discountPrice: 149.99,
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
    ],
    badges: ["quality", "trending"],
    category: "Mobile Accessories",
    tags: ["Wearables", "Smartwatch"],
    stock: 30,
    isFeatured: false,
    publishedAt: new Date().toISOString(),
  },
  {
    id: "3",
    name: "Designer Sunglasses",
    slug: "designer-sunglasses",
    description: "Stylish sunglasses with UV protection.",
    shortDescription: "Sunglasses – Designer Style",
    price: 149.99,
    discountPrice: 44.99,
    images: [
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500",
    ],
    badges: ["exclusive"],
    category: "Fashion",
    tags: ["Accessories", "Summer"],
    stock: 75,
    isFeatured: false,
    publishedAt: new Date().toISOString(),
  },
  {
    id: "4",
    name: "Bluetooth Speaker",
    slug: "bluetooth-speaker",
    description: "Portable Bluetooth speaker with deep bass.",
    shortDescription: "Speaker – Compact & Loud",
    price: 89.99,
    discountPrice: 34.99,
    images: [
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=500",
    ],
    badges: ["fast", "trending"],
    category: "Electronics",
    tags: ["Audio", "Portable"],
    stock: 100,
    isFeatured: true,
    publishedAt: new Date().toISOString(),
  },
  {
    id: "5",
    name: "Mechanical Keyboard",
    slug: "mechanical-keyboard",
    description: "RGB mechanical keyboard for gamers and programmers.",
    shortDescription: "Keyboard – Mechanical RGB",
    price: 129.99,
    discountPrice: 79.99,
    images: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500",
    ],
    badges: ["quality"],
    category: "Computers",
    tags: ["Gaming", "RGB"],
    stock: 60,
    isFeatured: false,
    publishedAt: new Date().toISOString(),
  },
  {
    id: "6",
    name: "LED Desk Lamp",
    slug: "led-desk-lamp",
    description: "Energy-saving LED desk lamp with adjustable brightness.",
    shortDescription: "Desk Lamp – LED & Adjustable",
    price: 49.99,
    discountPrice: 19.99,
    images: [
      "https://images.unsplash.com/photo-1588410048862-14e6f4f12296?w=500",
    ],
    badges: ["fast"],
    category: "Home & Kitchen",
    tags: ["Lighting", "LED"],
    stock: 80,
    isFeatured: false,
    publishedAt: new Date().toISOString(),
  },
  {
    id: "7",
    name: "DSLR Camera Lens",
    slug: "dslr-camera-lens",
    description: "Professional DSLR lens for sharp and clear images.",
    shortDescription: "Camera Lens – DSLR Quality",
    price: 349.99,
    discountPrice: 219.99,
    images: [
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500",
    ],
    badges: ["quality", "trending"],
    category: "Electronics",
    tags: ["Camera", "Photography"],
    stock: 25,
    isFeatured: true,
    publishedAt: new Date().toISOString(),
  },
  {
    id: "8",
    name: "Massage Gun Premium",
    slug: "massage-gun-premium",
    description: "Deep tissue massage gun for muscle recovery.",
    shortDescription: "Massage Gun – Deep Tissue",
    price: 199.99,
    discountPrice: 79.99,
    images: [
      "https://images.unsplash.com/photo-1580894908361-967195033f6c?w=500",
    ],
    badges: ["exclusive"],
    category: "Beauty",
    tags: ["Wellness", "Recovery"],
    stock: 40,
    isFeatured: false,
    publishedAt: new Date().toISOString(),
  },
  {
    id: "9",
    name: "Smart LED TV 43''",
    slug: "smart-led-tv-43",
    description: "Full HD smart TV with multiple streaming apps.",
    shortDescription: "LED TV – Smart & Full HD",
    price: 399.99,
    discountPrice: 259.99,
    images: [
      "https://images.unsplash.com/photo-1503602642458-232111445657?w=500",
    ],
    badges: ["fast", "trending"],
    category: "Electronics",
    tags: ["TV", "Smart"],
    stock: 20,
    isFeatured: true,
    flashDeals: ["WeekendSpecial"],
    hasTimer: true,
    timerEndTime: new Date(Date.now() + 5 * 3600 * 1000),
    publishedAt: new Date().toISOString(),
  },
  {
    id: "10",
    name: "Mini Portable Speaker",
    slug: "mini-portable-speaker",
    description: "Compact speaker with Bluetooth connectivity.",
    shortDescription: "Speaker – Portable Mini",
    price: 49.99,
    discountPrice: 19.99,
    images: [
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=500",
    ],
    badges: ["fast"],
    category: "Electronics",
    tags: ["Audio", "Portable"],
    stock: 90,
    isFeatured: false,
    publishedAt: new Date().toISOString(),
  },
];
