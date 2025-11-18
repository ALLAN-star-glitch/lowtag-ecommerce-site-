"use client";

import { BadgeType } from "@/lib/types/badge/badgeType";

// --------------------
// MEDIA TYPE
// --------------------
export interface Media {
  id: number;
  url: string;
  alternativeText?: string;
  caption?: string;
}

// --------------------
// RELATION TYPES
// --------------------
export interface Category {
  id: number;
  name: string;
  slug: string;
}

export interface Tag {
  id: number;
  name: string;
  slug: string;
}

export interface FlashDeal {
  id: string;
  name: string;
  slug: string;
  startDate: Date;
  endDate: Date;
  discountPercentage?: number;
  discountPrice?: number;
  products?: Product[];
  isFeatured?: boolean;
  image?: string;
  publishedAt?: string;
}


export interface SEO {
  metaTitle?: string;
  metaDescription?: string;
  ogImage?: Media;
}

export interface Review {
  id: number;
  rating: number;
  comment: string;
  user?: string;
  createdAt?: string;
}

// --------------------
// PRODUCT MODEL (FINAL)
// --------------------
export interface Product {
  id: number;
  name: string;
  slug: string;

  description?: string;
  shortDescription?: string;

  price: number;
  discountPrice?: number;

  images: Media[]; // Strapi media

  // Relations
  category?: Category;
  tags?: Tag[];
  flashDeals?: FlashDeal[];

  // Custom badge component / enumeration
  badges?: BadgeType[];

  // Inventory + Flags
  stock?: number;
  isFeatured?: boolean;

  // Flash deal timer (custom fields from your sample)
  hasTimer?: boolean;
  timerEndTime?: string | Date;

  // SEO Component
  seo?: SEO;

  // Reviews relation
  reviews?: Review[];

  // Strapi system field
  publishedAt?: string;
}
