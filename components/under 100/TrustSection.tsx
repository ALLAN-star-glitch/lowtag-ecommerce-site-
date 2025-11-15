import React from 'react'
import { Shield, Zap, Award, TrendingUp } from 'lucide-react'
const trustFeatures = [
  {
    icon: Shield,
    title: 'All Items Verified',
    description:
      'Every product is verified by Lowtag for quality and authenticity',
    color: 'text-royal-blue',
    bgColor: 'bg-royal-blue/10',
  },
  {
    icon: Zap,
    title: 'Fast Dispatch',
    description: 'Owned stock ships within 24 hours for quick delivery',
    color: 'text-bright-lime',
    bgColor: 'bg-bright-lime/10',
  },
  {
    icon: Award,
    title: 'Quality Guarantee',
    description:
      'Partner products vetted for quality and customer satisfaction',
    color: 'text-soft-gold',
    bgColor: 'bg-soft-gold/10',
  },
  {
    icon: TrendingUp,
    title: 'Great Savings',
    description: 'Affordable everyday items without breaking your budget',
    color: 'text-hot-pink',
    bgColor: 'bg-hot-pink/10',
  },
]
export default function TrustSection() {
  return (
    <section className="bg-cream-peach py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-soft-black mb-4">
            Why Shop with Lowtag?
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Great deals without breaking your budget. Affordable everyday items
            for everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustFeatures.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div
                  className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center mb-4`}
                >
                  <Icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-soft-black mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            )
          })}
        </div>

        {/* Badge explanations */}
        <div className="mt-12 bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold text-soft-black mb-4">
            Understanding Our Badges
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-royal-blue rounded-full mt-1.5"></div>
              <div>
                <span className="font-semibold text-soft-black">
                  Owned & Verified:
                </span>
                <span className="text-gray-600">
                  {' '}
                  Faster shipping from our warehouse
                </span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-tangerine rounded-full mt-1.5"></div>
              <div>
                <span className="font-semibold text-soft-black">
                  Partner Seller:
                </span>
                <span className="text-gray-600">
                  {' '}
                  Curated affordability from trusted partners
                </span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-hot-pink rounded-full mt-1.5"></div>
              <div>
                <span className="font-semibold text-soft-black">Trending:</span>
                <span className="text-gray-600">
                  {' '}
                  Hot deals that everyone loves
                </span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-soft-gold rounded-full mt-1.5"></div>
              <div>
                <span className="font-semibold text-soft-black">
                  Exclusive Import:
                </span>
                <span className="text-gray-600">
                  {' '}
                  Premium quality at affordable prices
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
