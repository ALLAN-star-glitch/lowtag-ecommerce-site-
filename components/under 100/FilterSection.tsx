import React from 'react'
import { SlidersHorizontal, ArrowUpDown } from 'lucide-react'
export default function FilterSort() {
  return (
    <div className="bg-white border-b border-gray-200 py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* Filter buttons */}
          <div className="flex flex-wrap items-center gap-2">
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full hover:border-royal-blue hover:text-royal-blue transition-colors text-sm font-medium">
              <SlidersHorizontal className="w-4 h-4" />
              All Filters
            </button>
            <button className="px-4 py-2 border border-royal-blue bg-royal-blue text-white rounded-full text-sm font-medium">
              Fast Dispatch
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-full hover:border-royal-blue hover:text-royal-blue transition-colors text-sm font-medium">
              Top Rated
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-full hover:border-royal-blue hover:text-royal-blue transition-colors text-sm font-medium">
              Owned Stock
            </button>
          </div>

          {/* Sort dropdown */}
          <div className="flex items-center gap-2">
            <ArrowUpDown className="w-4 h-4 text-gray-600" />
            <select className="px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-royal-blue text-sm font-medium">
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Most Popular</option>
              <option>Newest First</option>
            </select>
          </div>
        </div>

        {/* Results count */}
        <p className="text-sm text-gray-600 mt-4">
          Showing{' '}
          <span className="font-semibold text-soft-black">248 products</span>{' '}
          under KES 100
        </p>
      </div>
    </div>
  )
}
