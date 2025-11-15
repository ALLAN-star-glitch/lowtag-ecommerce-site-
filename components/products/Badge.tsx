import React from 'react'
import { Shield, Store, Zap, BadgeCheck, Crown, TrendingUp } from 'lucide-react'
type BadgeType =
  | 'owned'
  | 'partner'
  | 'fast'
  | 'quality'
  | 'exclusive'
  | 'trending'
interface BadgeProps {
  type: BadgeType
  size?: 'sm' | 'md' | 'lg'
  className?: string
}
const badgeConfig = {
  owned: {
    icon: Shield,
    label: 'Owned & Verified Stock',
    bgColor: 'bg-royal-blue',
    textColor: 'text-white',
  },
  partner: {
    icon: Store,
    label: 'Partner Seller Product',
    bgColor: 'bg-tangerine',
    textColor: 'text-white',
  },
  fast: {
    icon: Zap,
    label: 'Fast Dispatch',
    bgColor: 'bg-lime-green',
    textColor: 'text-white',
  },
  quality: {
    icon: BadgeCheck,
    label: 'Quality Checked',
    bgColor: 'bg-soft-black',
    textColor: 'text-white',
  },
  exclusive: {
    icon: Crown,
    label: 'Exclusive Import',
    bgColor: 'bg-soft-gold',
    textColor: 'text-white',
  },
  trending: {
    icon: TrendingUp,
    label: 'Trending',
    bgColor: 'bg-hot-pink',
    textColor: 'text-white',
  },
}
export default function Badge({ type, size = 'md', className = '' }: BadgeProps) {
  const config = badgeConfig[type]
  const Icon = config.icon
  const sizeClasses = {
    sm: 'px-2 py-1 text-xs gap-1',
    md: 'px-3 py-1.5 text-sm gap-1.5',
    lg: 'px-4 py-2 text-base gap-2',
  }
  const iconSizes = {
    sm: 12,
    md: 14,
    lg: 16,
  }
  return (
    <div
      className={`inline-flex items-center rounded-full font-medium ${config.bgColor} ${config.textColor} ${sizeClasses[size]} ${className}`}
    >
      <Icon size={iconSizes[size]} />
      <span>{config.label}</span>
    </div>
  )
}
