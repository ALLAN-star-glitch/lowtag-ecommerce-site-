import React from 'react'
import {
  Shield,
  Store,
  Zap,
  Award,
  Crown,
  TrendingUp,
  Flame,
} from 'lucide-react'
export type BadgeType =
  | 'owned'
  | 'partner'
  | 'fast'
  | 'quality'
  | 'exclusive'
  | 'top-seller'
  | 'trending'
interface ProductBadgeProps {
  type: BadgeType
  className?: string
}
const badgeConfig = {
  owned: {
    label: 'Owned & Verified',
    icon: Shield,
    bgColor: 'bg-royal-blue',
    textColor: 'text-white',
  },
  partner: {
    label: 'Partner Seller',
    icon: Store,
    bgColor: 'bg-tangerine',
    textColor: 'text-white',
  },
  fast: {
    label: 'Fast Dispatch',
    icon: Zap,
    bgColor: 'bg-bright-lime',
    textColor: 'text-soft-black',
  },
  quality: {
    label: 'Quality Checked',
    icon: Award,
    bgColor: 'bg-soft-black',
    textColor: 'text-white',
  },
  exclusive: {
    label: 'Exclusive Import',
    icon: Crown,
    bgColor: 'bg-soft-gold',
    textColor: 'text-white',
  },
  'top-seller': {
    label: 'Top Seller',
    icon: Flame,
    bgColor: 'bg-hot-pink',
    textColor: 'text-white',
  },
  trending: {
    label: 'Trending',
    icon: TrendingUp,
    bgColor: 'bg-hot-pink',
    textColor: 'text-white',
  },
}
export default function ProductBadge({ type, className = '' }: ProductBadgeProps) {
  const config = badgeConfig[type]
  const Icon = config.icon
  return (
    <div
      className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${config.bgColor} ${config.textColor} ${className}`}
    >
      <Icon className="w-3 h-3" />
      <span>{config.label}</span>
    </div>
  )
}
