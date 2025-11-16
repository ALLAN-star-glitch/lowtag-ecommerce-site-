import React from 'react'
import { SparklesIcon } from 'lucide-react'
import Image from 'next/image'

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

      <div className="relative max-w-7xl mx-auto px-4 py-10 md:py-16 lg:py-20">
        <div className="flex flex-col-reverse md:flex-row items-center gap-6">
          {/* Left: Text Content */}
          <div className="text-center md:text-left flex-1 space-y-4">
            {/* Marketing Banner */}
            <div className="bg-[#FF60A8] text-white rounded-full px-4 py-2 inline-flex items-center gap-2 animate-pulse text-sm md:text-base">
              <SparklesIcon className="w-4 h-4 md:w-5 md:h-5" />
              <span>Limited Time Offers – Grab Yours Now!</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F1F1F]">
              Flash Deals You Can&apos;t Miss!
            </h1>

            {/* Subheadline */}
            <p className="text-base md:text-lg lg:text-xl text-gray-700">
              Affordable, verified, high-quality products at unbeatable prices.
            </p>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 max-w-3xl mx-auto md:mx-0 text-sm md:text-base">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-[#4C6EF5]">500+</div>
                <div className="text-gray-600">Daily Deals</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-[#FF60A8]">70%</div>
                <div className="text-gray-600">Max Savings</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-[#59D86D]">24h</div>
                <div className="text-gray-600">Fast Dispatch</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-[#D9A441]">100%</div>
                <div className="text-gray-600">Verified</div>
              </div>
            </div>
          </div>

          {/* Right: Promotional Image */}
          <div className="flex-1 relative w-full h-48 md:h-72 lg:h-96 rounded-xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1527264935190-1401c51b5bbc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZGlzY291bnR8ZW58MHx8MHx8fDA%3D"
              alt="Promotional Image"
              fill
              className="object-cover rounded-xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
