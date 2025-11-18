import React from 'react'
import {
  ShieldCheckIcon,
  StoreIcon,
  ZapIcon,
  StarIcon,
  CrownIcon,
  FlameIcon,
} from 'lucide-react'
export type BadgeType =
  | 'owned'
  | 'partner'
  | 'fast'
  | 'quality'
  | 'exclusive'
  | 'top'
  | 'trending'
interface BadgeProps {
  type: BadgeType
  className?: string
}
export function Badge({ type, className = '' }: BadgeProps) {
  const badges = {
    owned: {
      icon: ShieldCheckIcon,
      label: 'Owned & Verified',
      bg: 'bg-[#4C6EF5]',
      text: 'text-white',
    },
    partner: {
      icon: StoreIcon,
      label: 'Partner Seller',
      bg: 'bg-[#FF8A5B]',
      text: 'text-white',
    },
    fast: {
      icon: ZapIcon,
      label: 'Fast Dispatch',
      bg: 'bg-[#59D86D]',
      text: 'text-white',
    },
    quality: {
      icon: StarIcon,
      label: 'Quality Checked',
      bg: 'bg-[#1F1F1F]',
      text: 'text-white',
    },
    exclusive: {
      icon: CrownIcon,
      label: 'Exclusive Import',
      bg: 'bg-[#D9A441]',
      text: 'text-white',
    },
    top: {
      icon: FlameIcon,
      label: 'Top Seller',
      bg: 'bg-[#FF60A8]',
      text: 'text-white',
    },
    trending: {
      icon: ZapIcon,
      label: 'Hot Deal',
      bg: 'bg-[#FF60A8]',
      text: 'text-white',
    },
  }
  const badge = badges[type] // bracket notation to access object value using a key ... there are other method like the dot notation e.g., badges.owned .. but this is used when you know the key in advanced ...
  const Icon = badge.icon
  return (
    <div
      className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold ${badge.bg} ${badge.text} ${className}`}
    >
      <Icon className="w-3 h-3" />
      <span>{badge.label}</span>
    </div>
  )
}
