import { badgePresets } from '@/lib/constants/badgePresets'
import { BadgeProps } from '@/lib/interfaces/badge/badgeInterface'
import React from 'react'


export function Badge({
  type,
  label,
  icon,
  bg,
  textColor,
  size = 'sm',
  className = '',
}: BadgeProps) {
  // Use preset if type is provided
  const preset = type ? badgePresets[type] : null

  const finalLabel = label ?? preset?.label ?? ''
  const Icon = icon ?? preset?.icon
  const finalBg = bg ?? preset?.bg ?? 'bg-gray-200'
  const finalText = textColor ?? preset?.text ?? 'text-gray-800'

  const sizes = {
    sm: 'px-2 py-1 text-xs gap-1',
    md: 'px-3 py-1.5 text-sm gap-2',
    lg: 'px-4 py-2 text-base gap-2',
  }

  return (
    <div
      className={`inline-flex items-center rounded-full font-medium ${sizes[size]} ${finalBg} ${finalText} ${className}`}
    >
      {Icon && <Icon className="w-3 h-3" />}
      <span>{finalLabel}</span>
    </div>
  )
}


