import React from 'react'
import { Sparkles } from 'lucide-react'
export default function HeroSection() {
  return (
    <section className="bg-cream-peach relative overflow-hidden">
      {/* Floating shapes background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-10 left-10 w-20 h-20 bg-hot-pink/10 rounded-full animate-bounce"
          style={{
            animationDuration: '3s',
          }}
        ></div>
        <div
          className="absolute top-20 right-20 w-16 h-16 bg-royal-blue/10 rounded-full animate-bounce"
          style={{
            animationDuration: '4s',
            animationDelay: '1s',
          }}
        ></div>
        <div
          className="absolute bottom-10 left-1/4 w-24 h-24 bg-tangerine/10 rounded-full animate-bounce"
          style={{
            animationDuration: '5s',
            animationDelay: '2s',
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          {/* Trending Badge */}
          <div className="inline-flex items-center gap-2 bg-hot-pink text-white px-4 py-2 rounded-full text-sm font-medium mb-6 animate-pulse">
            <Sparkles className="w-4 h-4" />
            <span>Trending Deals</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-soft-black mb-4">
            Shop the Best Deals{' '}
            <span className="text-hot-pink">Under KES 100!</span>
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Affordable, quality products verified by Lowtag.
          </p>

          {/* CTA Button */}
          <button className="bg-royal-blue text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-royal-blue/90 transform hover:scale-105 transition-all shadow-lg hover:shadow-xl">
            Shop Now
          </button>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-12 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-bright-lime rounded-full"></div>
              <span>Fast Dispatch</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-royal-blue rounded-full"></div>
              <span>Verified Products</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-hot-pink rounded-full"></div>
              <span>Great Savings</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
