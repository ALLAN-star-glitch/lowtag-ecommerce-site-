import type { LucideIcon } from 'lucide-react'
import { BadgeType } from '../../types/badge/badgeType'



// Shape of each preset badge
export interface BadgePreset {
  label: string
  icon: LucideIcon
  bg: string
  text: string
}


// Props for Badge component
export interface BadgeProps {
  type?: BadgeType       // Optional preset
  label?: string         // Override preset label
  icon?: LucideIcon      // Override preset icon
  bg?: string            // Override preset background
  textColor?: string     // Override preset text color
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

