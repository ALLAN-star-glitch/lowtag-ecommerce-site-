import React from 'react'
import {
  Smartphone,
  Shirt,
  Home,
  Sparkles,
  UtensilsCrossed,
  Baby,
  Package,
} from 'lucide-react'
const categories = [
  {
    name: 'Electronics',
    icon: Smartphone,
    color: 'hover:text-royal-blue',
  },
  {
    name: 'Fashion',
    icon: Shirt,
    color: 'hover:text-hot-pink',
  },
  {
    name: 'Household',
    icon: Home,
    color: 'hover:text-tangerine',
  },
  {
    name: 'Personal Care',
    icon: Sparkles,
    color: 'hover:text-soft-gold',
  },
  {
    name: 'Kitchen',
    icon: UtensilsCrossed,
    color: 'hover:text-royal-blue',
  },
  {
    name: 'Kids',
    icon: Baby,
    color: 'hover:text-hot-pink',
  },
  {
    name: 'Essentials',
    icon: Package,
    color: 'hover:text-tangerine',
  },
]
export default function CategoryNav() {
  return (
    <nav className="sticky top-[140px] bg-white border-b border-gray-200 shadow-sm z-40">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center gap-4 overflow-x-auto">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <button
                key={category.name}
                className={`flex flex-col items-center gap-2 px-4 py-2 rounded-lg hover:bg-cream-peach transition-all whitespace-nowrap group ${category.color}`}
              >
                <Icon className="w-6 h-6 text-gray-600 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-soft-black">
                  {category.name}
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
