import React from 'react'
import { SparklesIcon } from 'lucide-react'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-[#FFF8EC] via-[#FFE8D6] to-[#FFF8EC] overflow-hidden">
      {/* Floating background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-hot-pink/10 rounded-full animate-float" style={{ animationDuration: '3s' }}></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-royal-blue/10 rounded-full animate-float-delayed" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
        <div className="absolute bottom-10 left-1/4 w-24 h-24 bg-tangerine/10 rounded-full animate-float" style={{ animationDuration: '5s', animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-10 md:py-16 lg:py-20">
        <div className="flex flex-col-reverse md:flex-row items-center gap-6">
          {/* Left: Text Content */}
          <div className="text-center md:text-left flex-1 space-y-4">
            {/* Marketing Banner */}
            <div className="bg-hot-pink text-white rounded-full px-4 py-2 inline-flex items-center gap-2 animate-pulse text-sm md:text-base">
              <SparklesIcon className="w-4 h-4 md:w-5 md:h-5" />
              <span>Trending Deals – Grab Yours Now!</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-soft-black">
              Shop the Best Deals <span className="text-hot-pink">Under KES 100!</span>
            </h1>

            {/* Subtext */}
            <p className="text-base md:text-lg lg:text-xl text-gray-700">
              Affordable, quality products verified by LowTag.
            </p>

            {/* Trust indicators */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6 text-sm md:text-base text-gray-600 max-w-md md:max-w-none mx-auto md:mx-0">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-[#4C6EF5]">500+</div>
                <div>Daily Deals</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-[#FF60A8]">70%</div>
                <div>Max Savings</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-[#59D86D]">24h</div>
                <div>Fast Dispatch</div>
              </div>
            </div>
          </div>

          {/* Right: Promotional Image */}
          <div className="flex-1 relative w-full h-48 md:h-72 lg:h-96 rounded-xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=900&auto=format&fit=crop&q=60"
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
