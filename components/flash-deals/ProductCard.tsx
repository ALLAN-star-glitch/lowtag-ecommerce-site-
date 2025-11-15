import React from 'react'
import { ShoppingCartIcon, HeartIcon } from 'lucide-react'
import { CountdownTimer } from './CountimeTimer'
import { Badge, BadgeType } from './Badge'
import { Button } from './Button'

interface ProductCardProps {
  image: string
  name: string
  originalPrice: number
  discountedPrice: number
  badges: BadgeType[]
  hasTimer?: boolean
  timerEndTime?: Date
}

export function ProductCard({
  image,
  name,
  originalPrice,
  discountedPrice,
  badges,
  hasTimer,
  timerEndTime,
}: ProductCardProps) {
  const discountPercent = Math.round(
    ((originalPrice - discountedPrice) / originalPrice) * 100
  )

  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col">
      {/* Image */}
      <div className="relative overflow-hidden aspect-square">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />

        {/* Discount Badge */}
        <div className="absolute top-3 left-3 bg-[#FF60A8] text-white px-2 py-1 rounded-full text-xs font-bold">
          -{discountPercent}%
        </div>

        {/* Wishlist Heart */}
        <button className="absolute top-3 right-3 p-1.5 bg-white rounded-full shadow hover:bg-[#FF60A8] hover:text-white transition-colors">
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

        {/* Product Name */}
        <h3 className="text-gray-900 font-semibold text-sm mb-2 line-clamp-2">
          {name}
        </h3>

        {/* Price */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg font-bold text-[#4C6EF5]">
            ${discountedPrice.toFixed(2)}
          </span>
          <span className="text-sm text-gray-400 line-through">
            ${originalPrice.toFixed(2)}
          </span>
        </div>

        {/* Add to Cart */}
        <Button
          variant="primary"
          className="w-full py-2 mt-auto flex items-center justify-center gap-2 text-sm"
        >
          <ShoppingCartIcon className="w-4 h-4" />
          Add to Cart
        </Button>
      </div>
    </div>
  )
}
