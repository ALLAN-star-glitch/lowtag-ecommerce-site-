import React from 'react'
import { PackageIcon, TagIcon } from 'lucide-react'
import { Button } from './Button'
const bundles = [
  {
    id: '1',
    title: 'Tech Essentials Bundle',
    description: 'Wireless headphones + Smart watch + Phone case',
    originalPrice: 549.97,
    bundlePrice: 249.99,
    savings: 299.98,
    image:
      'https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=400&h=300&fit=crop',
    items: 3,
  },
  {
    id: '2',
    title: 'Home Office Setup',
    description: 'Wireless mouse + Keyboard + Desk lamp',
    originalPrice: 199.97,
    bundlePrice: 89.99,
    savings: 109.98,
    image:
      'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=300&fit=crop',
    items: 3,
  },
  {
    id: '3',
    title: 'Fitness Starter Pack',
    description: 'Smart watch + Wireless earbuds + Water bottle',
    originalPrice: 349.97,
    bundlePrice: 159.99,
    savings: 189.98,
    image:
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=300&fit=crop',
    items: 3,
  },
]
export function BundleSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF8A5B] text-white rounded-full font-semibold mb-4">
            <PackageIcon className="w-5 h-5" />
            <span>Bundle Deals</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F1F1F] mb-4">
            Mix & Match Deals
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Save even more when you bundle! Curated product combinations at
            unbeatable prices.
          </p>
        </div>

        {/* Bundle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {bundles.map((bundle) => (
            <div
              key={bundle.id}
              className="bg-[#FFF8EC] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Bundle Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={bundle.image}
                  alt={bundle.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3 bg-[#FF60A8] text-white px-3 py-1 rounded-full font-bold text-sm">
                  Save ${bundle.savings.toFixed(2)}
                </div>
              </div>

              {/* Bundle Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                  <TagIcon className="w-4 h-4" />
                  <span>{bundle.items} items included</span>
                </div>

                <h3 className="text-xl font-bold text-[#1F1F1F] mb-2">
                  {bundle.title}
                </h3>

                <p className="text-gray-600 mb-4 text-sm">
                  {bundle.description}
                </p>

                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-2xl font-bold text-[#4C6EF5]">
                    ${bundle.bundlePrice.toFixed(2)}
                  </span>
                  <span className="text-sm text-gray-500 line-through">
                    ${bundle.originalPrice.toFixed(2)}
                  </span>
                </div>

                <Button variant="tangerine" className="w-full">
                  Get This Bundle
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-[#FF8A5B] to-[#FF60A8] rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-3">Create Your Own Bundle</h3>
          <p className="text-lg opacity-90 mb-6">
            Mix and match any 3+ items and get an automatic 15% discount at
            checkout!
          </p>
          <Button
            variant="primary"
            size="lg"
            className="bg-white text-[#FF8A5B] hover:bg-gray-100"
          >
            Start Building
          </Button>
        </div>
      </div>
    </section>
  )
}
