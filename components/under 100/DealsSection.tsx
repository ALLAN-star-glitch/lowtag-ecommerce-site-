import React from 'react'
import Image from 'next/image'
import { Flame, Package } from 'lucide-react'

const flashDeals = [
  {
    name: 'Phone Holder Car Mount',
    price: 95,
    originalPrice: 200,
    image: 'https://images.unsplash.com/photo-1519558260268-cde7e03a0152?w=400&q=80',
    timeLeft: '2h 15m',
  },
  {
    name: 'Earbuds Silicone Tips (6 Pairs)',
    price: 70,
    originalPrice: 140,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&q=80',
    timeLeft: '4h 30m',
  },
  {
    name: 'Microfiber Cleaning Cloth (5 Pack)',
    price: 55,
    originalPrice: 110,
    image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400&q=80',
    timeLeft: '1h 45m',
  },
]

const bundles = [
  {
    name: 'Kitchen Essentials Bundle',
    items: 'Sponge + Towel + Container',
    price: 180,
    originalPrice: 300,
    savings: 120,
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=400&q=80',
  },
  {
    name: 'Stationery Starter Pack',
    items: 'Notebook + Pens + Clips',
    price: 195,
    originalPrice: 330,
    savings: 135,
    image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?w=400&q=80',
  },
]

export default function DealsSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Flash Deals */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-tangerine rounded-lg flex items-center justify-center">
                <Flame className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-soft-black">
                  Flash Deals
                </h2>
                <p className="text-sm text-gray-600">
                  Limited time offers under KES 100
                </p>
              </div>
            </div>
            <button className="text-royal-blue font-semibold hover:underline">
              View All
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {flashDeals.map((deal) => (
              <div
                key={deal.name}
                className="bg-cream-peach rounded-xl overflow-hidden hover:shadow-lg transition-shadow group"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={deal.image}
                    alt={deal.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-3 right-3 bg-tangerine text-white px-3 py-1 rounded-full text-sm font-bold">
                    {deal.timeLeft}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-soft-black mb-2">
                    {deal.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-soft-black">
                      KES {deal.price}
                    </span>
                    <span className="text-sm text-gray-400 line-through">
                      KES {deal.originalPrice}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bundle Deals */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-hot-pink rounded-lg flex items-center justify-center">
                <Package className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-soft-black">
                  Bundle & Save
                </h2>
                <p className="text-sm text-gray-600">
                  Get more for less with our curated bundles
                </p>
              </div>
            </div>
            <button className="text-royal-blue font-semibold hover:underline">
              View All
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {bundles.map((bundle) => (
              <div
                key={bundle.name}
                className="bg-gradient-to-br from-cream-peach to-white rounded-xl overflow-hidden hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/2 aspect-square md:aspect-auto relative overflow-hidden">
                    <Image
                      src={bundle.image}
                      alt={bundle.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="md:w-1/2 p-6 flex flex-col justify-center">
                    <div className="inline-block bg-hot-pink text-white px-3 py-1 rounded-full text-xs font-bold mb-3 self-start">
                      Save KES {bundle.savings}
                    </div>
                    <h3 className="text-xl font-bold text-soft-black mb-2">
                      {bundle.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">{bundle.items}</p>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-2xl font-bold text-soft-black">
                        KES {bundle.price}
                      </span>
                      <span className="text-sm text-gray-400 line-through">
                        KES {bundle.originalPrice}
                      </span>
                    </div>
                    <button className="bg-royal-blue text-white py-2 px-6 rounded-lg font-semibold hover:bg-royal-blue/90 transition-colors">
                      Add Bundle
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
