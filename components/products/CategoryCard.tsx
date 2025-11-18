import Link from 'next/link'
import React from 'react'
interface CategoryCardProps {
  icon: string
  title: string
  itemCount: number
  color: string
  href: string
}
export default function CategoryCard({
  icon,
  title,
  itemCount,
  color,
  href
}: CategoryCardProps) {
  return (
    <Link href={href}>
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group">
      <div
        className={`w-16 h-16 rounded-full flex items-center justify-center text-4xl mb-4 group-hover:scale-110 transition-transform ${color}`}
      >
        {icon}
      </div>
      <h3 className="text-soft-black font-semibold text-lg mb-1">{title}</h3>
      <p className="text-gray-500 text-sm">
        {itemCount.toLocaleString()} items
      </p>
    </div>
    </Link>
  )
}
