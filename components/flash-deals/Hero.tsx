import React from 'react'
import { SparklesIcon } from 'lucide-react'
import { Button } from './Button'
export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[#FFF8EC] via-[#FFE8D6] to-[#FFF8EC] overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#FF60A8] rounded-full opacity-10 animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-[#4C6EF5] rounded-full opacity-10 animate-float-delayed"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-[#FF8A5B] rounded-full opacity-10 animate-float"></div>
        <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-[#D9A441] rounded-full opacity-10 animate-float-delayed"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-4xl mx-auto">
          {/* Flash Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF60A8] text-white rounded-full font-semibold mb-6 animate-pulse">
            <SparklesIcon className="w-5 h-5" />
            <span>Limited Time Offers</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-[#1F1F1F] mb-4">
            Flash Deals You Can&apos;t Miss!
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Affordable, verified, high-quality products at unbeatable prices.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button variant="primary" size="lg">
              Shop Now
            </Button>
            <Button variant="outline" size="lg">
              Browse Categories
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#4C6EF5]">500+</div>
              <div className="text-sm text-gray-600">Daily Deals</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#FF60A8]">70%</div>
              <div className="text-sm text-gray-600">Max Savings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#59D86D]">24h</div>
              <div className="text-sm text-gray-600">Fast Dispatch</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#D9A441]">100%</div>
              <div className="text-sm text-gray-600">Verified</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
