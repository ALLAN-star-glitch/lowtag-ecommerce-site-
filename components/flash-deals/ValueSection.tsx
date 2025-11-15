import React from 'react'
import {
  ShieldCheckIcon,
  ZapIcon,
  TrendingUpIcon,
  PackageIcon,
} from 'lucide-react'
const values = [
  {
    icon: ShieldCheckIcon,
    title: 'Verified Deals',
    description:
      'Every deal is verified from Lowtag-owned stock & trusted partners',
    color: 'text-[#4C6EF5]',
    bg: 'bg-[#4C6EF5]/10',
  },
  {
    icon: ZapIcon,
    title: 'Fast Dispatch',
    description: 'Owned items ship within 24 hours - no waiting around',
    color: 'text-[#59D86D]',
    bg: 'bg-[#59D86D]/10',
  },
  {
    icon: TrendingUpIcon,
    title: 'Top Deals Curated Daily',
    description:
      'Fresh deals added every day - always something new to discover',
    color: 'text-[#FF60A8]',
    bg: 'bg-[#FF60A8]/10',
  },
  {
    icon: PackageIcon,
    title: 'Quality Guaranteed',
    description: 'All products are quality-checked before listing',
    color: 'text-[#D9A441]',
    bg: 'bg-[#D9A441]/10',
  },
]
export function ValueSection() {
  return (
    <section className="bg-[#FFF8EC] py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F1F1F] mb-4">
            Why Shop Lowtag Deals?
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            We&apos;re committed to bringing you the best deals without compromising
            on quality or trust
          </p>
        </div>

        {/* Value Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`w-14 h-14 ${value.bg} rounded-xl flex items-center justify-center mb-4`}
                >
                  <Icon className={`w-7 h-7 ${value.color}`} />
                </div>
                <h3 className="text-xl font-bold text-[#1F1F1F] mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            )
          })}
        </div>

        {/* Educational Banner */}
        <div className="mt-12 bg-gradient-to-r from-[#4C6EF5] to-[#FF60A8] rounded-2xl p-8 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">
              How Lowtag Verifies Flash Deals
            </h3>
            <p className="text-lg opacity-90 mb-6">
              Every deal goes through our rigorous verification process. We
              check product authenticity, seller reputation, and price history
              to ensure you&apos;re getting genuine savings on quality items.
            </p>
            <button className="px-6 py-3 bg-white text-[#4C6EF5] rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Learn More About Our Process
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
