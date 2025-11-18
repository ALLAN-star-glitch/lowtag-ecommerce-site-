import React from "react";
import Image from "next/image";
import { ShoppingCart, Heart } from "lucide-react";

import { Badge } from "../shared/Badge";
import { BadgeType } from "@/lib/types/badge/badgeType";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  badges: BadgeType[];
  rating?: number;
  reviews?: number;
}

export default function ProductCard({
  name,
  price,
  originalPrice,
  image,
  badges,
  rating = 4.5,
  reviews = 0,
}: ProductCardProps) {
  const discount = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group border border-gray-100">
      {/* Image container */}
      <div className="relative aspect-square overflow-hidden bg-gray-50">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        {/* Wishlist button */}
        <button className="absolute top-3 right-3 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow hover:bg-red-500 hover:text-white transition">
          <Heart className="w-4 h-4" />
        </button>

        {/* Discount badge */}
        {discount > 0 && (
          <div className="absolute top-3 left-3 bg-red-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
            -{discount}%
          </div>
        )}

        {/* Electronics badges */}
        <div className="absolute bottom-3 left-3 flex flex-wrap gap-1">
          {badges.slice(0, 2).map((badge) => (
            <Badge key={badge} type={badge} />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Name */}
        <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2 min-h-[40px]">
          {name}
        </h3>

        {/* Rating */}
        {reviews > 0 && (
          <div className="flex items-center gap-1 mb-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={`text-xs ${
                    i < Math.floor(rating)
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
            <span className="text-xs text-gray-600">({reviews})</span>
          </div>
        )}

        {/* Pricing */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xl font-bold text-gray-900">
            KES {price.toLocaleString()}
          </span>
          {originalPrice && (
            <span className="text-sm text-gray-400 line-through">
              KES {originalPrice.toLocaleString()}
            </span>
          )}
        </div>

        {/* Add to Cart */}
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition flex items-center justify-center gap-2 group-hover:scale-105 transform duration-200">
          <ShoppingCart className="w-4 h-4" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}
