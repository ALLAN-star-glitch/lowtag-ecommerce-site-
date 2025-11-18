import { ZapIcon, StarIcon, CrownIcon, FlameIcon } from 'lucide-react'
import { BadgeType } from '../types/badge/badgeType'
import { BadgePreset } from '../interfaces/badge/badgeInterface'

// Preset badge definitions for production-ready LowTag MVP
export const badgePresets: Record<BadgeType, BadgePreset> = {
  fast: {
    label: 'Fast Dispatch',
    icon: ZapIcon,
    bg: 'bg-[#59D86D]',
    text: 'text-white',
  },
  quality: {
    label: 'Quality Checked',
    icon: StarIcon,
    bg: 'bg-[#1F1F1F]',
    text: 'text-white',
  },
  exclusive: {
    label: 'Exclusive Product',
    icon: CrownIcon,
    bg: 'bg-[#D9A441]',
    text: 'text-white',
  },
  trending: {
    label: 'Hot Deal',
    icon: FlameIcon,
    bg: 'bg-[#FF60A8]',
    text: 'text-white',
  },
}
