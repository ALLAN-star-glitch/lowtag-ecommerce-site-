import React from 'react'
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tangerine' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}
export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    'font-semibold rounded-lg transition-all duration-200 hover:scale-105 active:scale-95'
  const variants = {
    primary:
      'bg-[#4C6EF5] text-white hover:bg-[#3B5DD4] shadow-md hover:shadow-lg',
    secondary:
      'bg-[#FF60A8] text-white hover:bg-[#E54F97] shadow-md hover:shadow-lg',
    tangerine:
      'bg-[#FF8A5B] text-white hover:bg-[#E67A4D] shadow-md hover:shadow-lg',
    outline:
      'border-2 border-[#4C6EF5] text-[#4C6EF5] hover:bg-[#4C6EF5] hover:text-white',
  }
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
