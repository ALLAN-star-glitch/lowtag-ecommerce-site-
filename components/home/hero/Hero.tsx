import React from 'react'
export default function Hero() {
  return (
    <section className="relative bg-linear-to-br from-cream-peach to-white py-20 overflow-hidden">
      {/* Floating Shapes */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-hot-pink/20 rounded-full animate-float" />
      <div
        className="absolute top-40 right-20 w-32 h-32 bg-royal-blue/20 rounded-full animate-float"
        style={{
          animationDelay: '1s',
        }}
      />
      <div
        className="absolute bottom-20 left-1/4 w-24 h-24 bg-soft-gold/20 rounded-full animate-float"
        style={{
          animationDelay: '2s',
        }}
      />
      <div
        className="absolute bottom-10 right-1/3 w-16 h-16 bg-tangerine/20 rounded-full animate-float"
        style={{
          animationDelay: '0.5s',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-soft-black mb-6 leading-tight">
            Premium Imports + Trusted Deals —{' '}
            <span className="text-royal-blue">Made Affordable</span> for
            Everyone
          </h1>

          <p className="text-xl text-gray-700 mb-8">
            Shop Owned Stock, Partner Products & Exclusive Imports — All
            Verified.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button className="bg-royal-blue text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-all hover:scale-105 shadow-lg">
              Shop Owned Stock
            </button>
            <button className="bg-tangerine text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-all hover:scale-105 shadow-lg">
              Browse All Deals
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>Verified Products</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">⚡</span>
              <span>Fast Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🛡️</span>
              <span>Buyer Protection</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">💰</span>
              <span>Best Prices</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
