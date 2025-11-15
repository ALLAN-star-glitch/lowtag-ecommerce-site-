import React from 'react'
import { Shield, Users, Package, Award } from 'lucide-react'
export function TrustSection() {
  const features = [
    {
      icon: Shield,
      title: 'Buyer Protection',
      description:
        'Every order is protected. Get refunds on damaged or wrong items.',
      color: 'bg-royal-blue',
    },
    {
      icon: Users,
      title: 'Verified Sellers',
      description: 'All partner sellers are vetted and monitored for quality.',
      color: 'bg-tangerine',
    },
    {
      icon: Package,
      title: 'Quality Checked',
      description:
        'Owned stock is inspected before shipping to ensure quality.',
      color: 'bg-lime-green',
    },
    {
      icon: Award,
      title: 'Best Price Guarantee',
      description: "Find it cheaper elsewhere? We'll match the price.",
      color: 'bg-soft-gold',
    },
  ]
  return (
    <section className="py-16 bg-cream-peach">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-soft-black mb-4">
            Why Shop at Lowtag?
          </h2>
          <p className="text-xl text-gray-600">
            We combine the best of owned stock and trusted partner sellers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div
                  className={`w-12 h-12 rounded-full ${feature.color} flex items-center justify-center mb-4`}
                >
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="text-soft-black font-semibold text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            )
          })}
        </div>

        {/* How It Works */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-soft-black mb-6 text-center">
            How Lowtag Hybrid Dropshipping Works
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-royal-blue rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h4 className="font-semibold text-soft-black mb-2">
                Owned Stock
              </h4>
              <p className="text-gray-600 text-sm">
                Products we own and verify ourselves. Fast dispatch, quality
                guaranteed.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-tangerine rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h4 className="font-semibold text-soft-black mb-2">
                Partner Sellers
              </h4>
              <p className="text-gray-600 text-sm">
                Verified sellers we trust. More variety, competitive prices,
                still protected.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-soft-gold rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h4 className="font-semibold text-soft-black mb-2">
                Exclusive Imports
              </h4>
              <p className="text-gray-600 text-sm">
                Premium items sourced globally. Unique products you won&apos;t find
                elsewhere.
              </p>
            </div>
          </div>
        </div>

        {/* Customer Reviews */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-soft-black mb-8 text-center">
            What Our Customers Say
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Jane M.',
                location: 'Nairobi',
                rating: 5,
                text: 'Love the variety! I can find both affordable essentials and premium imports in one place.',
              },
              {
                name: 'David K.',
                location: 'Mombasa',
                rating: 5,
                text: 'Fast delivery on owned stock items. The quality checking really shows!',
              },
              {
                name: 'Sarah W.',
                location: 'Kisumu',
                rating: 5,
                text: "Great prices and trustworthy sellers. The badge system makes it easy to know what I'm buying.",
              },
            ].map((review, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">&quot;{review.text}&quot;</p>
                <div>
                  <p className="font-semibold text-soft-black">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
