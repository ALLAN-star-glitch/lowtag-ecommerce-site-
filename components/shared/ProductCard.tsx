"use client";

import React from "react";
import Image from "next/image";
import { ShoppingCartIcon, HeartIcon } from "lucide-react";
import { Badge } from "../shared/Badge";
import { BadgeType } from "@/lib/types/badge/badgeType";
import { Button } from "./Button";
import { CountdownTimer } from "./CountdownTimer";

export interface ProductCardProps {
  id: string | number;
  image: string; // single image
  name: string;
  price: number; // current/final price
  originalPrice?: number; // original price before discount
  badges?: BadgeType[];
  category?: string;
  flashDeals?: string[];
  hasTimer?: boolean;
  timerEndTime?: Date;
  stock?: number;
  rating?: number; // average rating 0-5
  reviewsCount?: number; // total number of reviews
  onAddToCart?: () => void;
  onToggleWishlist?: () => void;
}

export default function ProductCard({
  id,
  image,
  name,
  price,
  originalPrice,
  badges = [],
  category,
  flashDeals = [],
  hasTimer,
  timerEndTime,
  stock,
  rating = 0,
  reviewsCount = 0,
  onAddToCart,
  onToggleWishlist,
}: ProductCardProps) {
  const discountPercent =
    originalPrice && originalPrice > price
      ? Math.round(((originalPrice - price) / originalPrice) * 100)
      : 0;

  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col">
      {/* Image */}
      <div className="relative overflow-hidden aspect-square">
        <Image
          src={image}
          alt={name}
          width={500}
          height={500}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />

        {/* Discount Badge */}
        {discountPercent > 0 && (
          <div className="absolute top-3 left-3 bg-hot-pink text-white px-2 py-1 rounded-full text-xs font-bold">
            -{discountPercent}%
          </div>
        )}

        {/* Wishlist Heart */}
        <button
          onClick={onToggleWishlist}
          className="absolute top-3 right-3 p-1.5 bg-white rounded-full shadow hover:bg-hot-pink hover:text-white transition-colors"
        >
          <HeartIcon className="w-4 h-4" />
        </button>

        {/* Timer */}
        {hasTimer && timerEndTime && (
          <div className="absolute bottom-3 left-3 right-3">
            <CountdownTimer endTime={timerEndTime} />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-3 flex flex-col flex-1">
        {/* Badges */}
        {badges.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-2">
            {badges.map((badge, i) => (
              <Badge key={i} type={badge} />
            ))}
          </div>
        )}

        {/* Flash Deals */}
        {flashDeals.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-2">
            {flashDeals.map((deal, i) => (
              <span
                key={i}
                className="bg-amber-400 text-white px-2 py-0.5 rounded-full text-xs font-semibold"
              >
                {deal}
              </span>
            ))}
          </div>
        )}

        {/* Category */}
        {category && (
          <span className="text-gray-500 text-xs mb-1">{category}</span>
        )}

        {/* Product Name */}
        <h3 className="text-gray-900 font-semibold text-sm mb-1 line-clamp-2">
          {name}
        </h3>

        {/* Rating */}
        {reviewsCount > 0 && (
          <div className="flex items-center gap-1 mb-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={`text-xs ${
                    i < Math.floor(rating) ? "text-soft-gold" : "text-gray-300"
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
            <span className="text-xs text-gray-600">({reviewsCount})</span>
          </div>
        )}

        {/* Price */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg font-bold text-royal-blue">
            ${price.toFixed(2)}
          </span>
          {discountPercent > 0 && originalPrice && (
            <span className="text-sm text-gray-400 line-through">
              ${originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        {/* Stock */}
        {stock !== undefined && (
          <span
            className={`text-xs font-medium mb-2 ${
              stock > 0 ? "text-green-600" : "text-red-600"
            }`}
          >
            {stock > 0 ? `${stock} in stock` : "Out of stock"}
          </span>
        )}

        {/* Add to Cart */}
        <Button
          variant="primary"
          className="w-full py-2 mt-auto flex items-center justify-center gap-2 text-sm"
          onClick={onAddToCart}
          disabled={stock === 0}
        >
          <ShoppingCartIcon className="w-4 h-4" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
}
