import React from 'react';
import Image from 'next/image';
import { Heart } from 'lucide-react';
import Badge from './Badge';

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
  originalPrice?: number;
  badges: Array<'owned' | 'partner' | 'fast' | 'quality' | 'exclusive' | 'trending'>;
  rating?: number;
  reviews?: number;
}

export default function ProductCard({
  image,
  title,
  price,
  originalPrice,
  badges,
  rating = 4.5,
  reviews = 0,
}: ProductCardProps) {
  const discount = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden group">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, 25vw"
        />

        {/* Badges Overlay */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {badges.slice(0, 2).map((badge) => (
            <Badge key={badge} type={badge} size="sm" />
          ))}
        </div>

        {/* Discount Badge */}
        {discount > 0 && (
          <div className="absolute top-2 right-2 bg-hot-pink text-white px-2 py-1 rounded-full text-xs font-bold">
            -{discount}%
          </div>
        )}

        {/* Wishlist Button */}
        <button className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-hot-pink hover:text-white transition-colors">
          <Heart size={18} />
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-soft-black font-medium text-sm mb-2 line-clamp-2 h-10">
          {title}
        </h3>

        {/* Rating */}
        {reviews > 0 && (
          <div className="flex items-center gap-2 mb-2">
            <div className="flex items-center">
              <span className="text-yellow-400">★</span>
              <span className="text-sm text-gray-600 ml-1">{rating}</span>
            </div>
            <span className="text-xs text-gray-400">({reviews})</span>
          </div>
        )}

        {/* Price */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-royal-blue font-bold text-xl">
            KES {price.toLocaleString()}
          </span>
          {originalPrice && (
            <span className="text-gray-400 line-through text-sm">
              KES {originalPrice.toLocaleString()}
            </span>
          )}
        </div>

        {/* CTA Button */}
        <button className="w-full bg-tangerine text-white py-2 rounded-full font-medium hover:bg-opacity-90 transition-colors">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
