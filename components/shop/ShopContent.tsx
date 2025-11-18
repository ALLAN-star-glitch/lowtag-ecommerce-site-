'use client'

import React from 'react'
import Hero from '@/components/home/hero/Hero'
import Badge from '@/components/products/Badge'
import CategoryCard from '@/components/products/CategoryCard'
import ProductCard from '@/components/products/ProductCard'
import { TrustSection } from '@/components/products/TrustSection'

// ----- Types -----
type Category = {
  icon: string
  title: string
  itemCount: number
  color: string
  href: string
}

type BadgeType = 'owned' | 'partner' | 'exclusive' | 'fast' | 'quality' | 'trending'

type Product = {
  image: string
  title: string
  price: number
  originalPrice?: number
  badges: BadgeType[]
  rating: number
  reviews: number
}

// ----- Data -----
const categories: Category[] = [
  { icon: '📱', title: 'Electronics', itemCount: 1250, color: 'bg-royal-blue/10', href: '/electronics' },
  { icon: '👕', title: 'Fashion', itemCount: 3400, color: 'bg-hot-pink/10', href: '/shop/fashion' },
  { icon: '🏠', title: 'Household', itemCount: 890, color: 'bg-tangerine/10', href: '/shop/household' },
  { icon: '🍳', title: 'Kitchen', itemCount: 670, color: 'bg-soft-gold/10', href: '/shop/kitchen' },
  { icon: '💄', title: 'Personal Care', itemCount: 1100, color: 'bg-lime-green/10', href: '/shop/personal-care' },
  { icon: '🎒', title: 'Affordable Essentials', itemCount: 2300, color: 'bg-royal-blue/10', href: '/shop/affordable-essentials' },
]

const ownedProducts: Product[] = [
  {
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80',
    title: 'Premium Wireless Headphones - Noise Cancelling',
    price: 4500,
    originalPrice: 6000,
    badges: ['owned', 'fast', 'quality'],
    rating: 4.8,
    reviews: 234,
  },
  {
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80',
    title: 'Classic Analog Watch - Leather Strap',
    price: 2800,
    originalPrice: 3500,
    badges: ['owned', 'quality'],
    rating: 4.6,
    reviews: 156,
  },
  {
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&q=80',
    title: 'Designer Sunglasses - UV Protection',
    price: 1200,
    badges: ['owned', 'fast', 'trending'],
    rating: 4.7,
    reviews: 89,
  },
  {
    image: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=500&q=80',
    title: 'Portable Bluetooth Speaker - Waterproof',
    price: 3200,
    originalPrice: 4200,
    badges: ['owned', 'quality', 'trending'],
    rating: 4.9,
    reviews: 312,
  },
]

const partnerProducts: Product[] = [
  {
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80',
    title: 'Running Shoes - Breathable Mesh',
    price: 3500,
    originalPrice: 5000,
    badges: ['partner', 'trending'],
    rating: 4.5,
    reviews: 178,
  },
  {
    image: 'https://images.unsplash.com/photo-1560343090-f0409e92791a?w=500&q=80',
    title: 'Cotton T-Shirt Pack (3 pieces)',
    price: 1500,
    badges: ['partner', 'quality'],
    rating: 4.4,
    reviews: 203,
  },
  {
    image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=500&q=80',
    title: 'Leather Wallet - RFID Protection',
    price: 1800,
    originalPrice: 2500,
    badges: ['partner'],
    rating: 4.6,
    reviews: 92,
  },
  {
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80',
    title: 'Backpack - Laptop Compartment',
    price: 2200,
    badges: ['partner', 'trending'],
    rating: 4.7,
    reviews: 145,
  },
]

const exclusiveProducts: Product[] = [
  {
    image: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=500&q=80',
    title: 'Smart Fitness Tracker - Heart Rate Monitor',
    price: 5500,
    badges: ['exclusive', 'quality'],
    rating: 4.8,
    reviews: 67,
  },
  {
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&q=80',
    title: 'Minimalist Desk Lamp - Touch Control',
    price: 3800,
    badges: ['exclusive', 'trending'],
    rating: 4.9,
    reviews: 43,
  },
]

const belowHundred: Product[] = [
  {
    image: 'https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?w=500&q=80',
    title: 'Phone Ring Holder - 360° Rotation',
    price: 80,
    badges: ['trending'],
    rating: 4.3,
    reviews: 421,
  },
  {
    image: 'https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?w=500&q=80',
    title: 'Cable Organizer Set (5 pieces)',
    price: 95,
    badges: ['trending', 'quality'],
    rating: 4.5,
    reviews: 289,
  },
  {
    image: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=500&q=80',
    title: 'Reusable Shopping Bag',
    price: 50,
    badges: ['trending'],
    rating: 4.2,
    reviews: 156,
  },
  {
    image: 'https://images.unsplash.com/photo-1621607512214-68297480165e?w=500&q=80',
    title: 'Notebook Set - A5 Size',
    price: 75,
    badges: ['trending'],
    rating: 4.4,
    reviews: 198,
  },
]

// ----- Component -----
export default function ShopContent() {
  return (
    <div className="min-h-screen bg-cream-peach">
      <Hero />

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-soft-black mb-8 text-center">
            Shop by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <CategoryCard key={category.title} {...category} />
            ))}
          </div>
        </div>
      </section>

      {/* Owned Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-soft-black mb-2">
                Owned & Verified Stock
              </h2>
              <p className="text-gray-600">Fast dispatch, quality guaranteed</p>
            </div>
            <button className="text-royal-blue font-semibold hover:underline">
              View All →
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ownedProducts.map((product, idx) => (
              <ProductCard key={idx} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Below KES 100 */}
      <section className="py-16 bg-hot-pink/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <h2 className="text-3xl font-bold text-soft-black">
                Below KES 100
              </h2>
              <Badge type="trending" size="md" />
            </div>
            <button className="text-hot-pink font-semibold hover:underline">
              View All →
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {belowHundred.map((product, idx) => (
              <ProductCard key={idx} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Partner Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-soft-black mb-2">
                Partner Seller Products
              </h2>
              <p className="text-gray-600">Verified sellers, great variety</p>
            </div>
            <button className="text-tangerine font-semibold hover:underline">
              View All →
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerProducts.map((product, idx) => (
              <ProductCard key={idx} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Exclusive Imports */}
      <section className="py-16 bg-soft-gold/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <h2 className="text-3xl font-bold text-soft-black">
                Exclusive Imports
              </h2>
              <Badge type="exclusive" size="md" />
            </div>
            <button className="text-soft-gold font-semibold hover:underline">
              View All →
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {exclusiveProducts.map((product, idx) => (
              <ProductCard key={idx} {...product} />
            ))}
            {/* Placeholder cards */}
            <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center justify-center text-center">
              <div className="text-6xl mb-4">👑</div>
              <h3 className="font-semibold text-soft-black mb-2">
                More Coming Soon
              </h3>
              <p className="text-sm text-gray-600">
                Premium imports arriving weekly
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center justify-center text-center">
              <div className="text-6xl mb-4">✨</div>
              <h3 className="font-semibold text-soft-black mb-2">
                Request an Item
              </h3>
              <p className="text-sm text-gray-600">
                Can&apos;t find what you need? Let us know!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <TrustSection />

      {/* Newsletter */}
      <section className="py-16 bg-linear-to-r from-royal-blue to-hot-pink">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Get Early Access to Deals!
          </h2>
          <p className="text-white/90 mb-8">
            Join our newsletter and be the first to know about flash sales, new
            imports, and exclusive offers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-royal-blue px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
