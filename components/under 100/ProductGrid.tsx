import React from 'react'
import { BadgeType } from './ProductBardge'
import ProductCard from './ProductCard'
interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  image: string
  badges: BadgeType[]
  rating?: number
  reviews?: number
}
const sampleProducts: Product[] = [
  {
    id: '1',
    name: 'USB Cable Type-C Fast Charging 1m',
    price: 85,
    originalPrice: 150,
    image:
      'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500&q=80',
    badges: ['owned', 'fast', 'trending'],
    rating: 4.5,
    reviews: 234,
  },
  {
    id: '2',
    name: 'Cotton Face Towel Set (3 Pack)',
    price: 95,
    originalPrice: 180,
    image:
      'https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=500&q=80',
    badges: ['partner', 'quality'],
    rating: 4.3,
    reviews: 156,
  },
  {
    id: '3',
    name: 'Stainless Steel Spoon Set (6 Pieces)',
    price: 75,
    image:
      'https://images.unsplash.com/photo-1606676539940-12768ce0e762?w=500&q=80',
    badges: ['owned', 'fast', 'top-seller'],
    rating: 4.7,
    reviews: 412,
  },
  {
    id: '4',
    name: 'LED Mini Flashlight Keychain',
    price: 50,
    originalPrice: 100,
    image:
      'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=500&q=80',
    badges: ['exclusive', 'trending'],
    rating: 4.4,
    reviews: 89,
  },
  {
    id: '5',
    name: 'Silicone Phone Case Universal',
    price: 60,
    image:
      'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=500&q=80',
    badges: ['partner', 'quality'],
    rating: 4.2,
    reviews: 178,
  },
  {
    id: '6',
    name: 'Hair Clips Set Colorful (12 Pack)',
    price: 70,
    originalPrice: 120,
    image:
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500&q=80',
    badges: ['owned', 'fast'],
    rating: 4.6,
    reviews: 267,
  },
  {
    id: '7',
    name: 'Kitchen Sponge Pack (5 Pieces)',
    price: 45,
    image:
      'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=500&q=80',
    badges: ['owned', 'fast', 'top-seller'],
    rating: 4.8,
    reviews: 523,
  },
  {
    id: '8',
    name: 'Notebook A5 Ruled 100 Pages',
    price: 90,
    originalPrice: 150,
    image:
      'https://images.unsplash.com/photo-1517842645767-c639042777db?w=500&q=80',
    badges: ['partner', 'trending'],
    rating: 4.5,
    reviews: 145,
  },
  {
    id: '9',
    name: 'Plastic Food Container 500ml',
    price: 65,
    image:
      'https://images.unsplash.com/photo-1584990347449-39b4aa02d4d5?w=500&q=80',
    badges: ['owned', 'quality'],
    rating: 4.3,
    reviews: 198,
  },
  {
    id: '10',
    name: 'Ballpoint Pens Blue (10 Pack)',
    price: 55,
    originalPrice: 90,
    image:
      'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=500&q=80',
    badges: ['owned', 'fast', 'top-seller'],
    rating: 4.7,
    reviews: 389,
  },
  {
    id: '11',
    name: 'Soap Bar Natural Organic 100g',
    price: 80,
    image:
      'https://images.unsplash.com/photo-1600857062241-98e5dba7f214?w=500&q=80',
    badges: ['exclusive', 'quality'],
    rating: 4.6,
    reviews: 234,
  },
  {
    id: '12',
    name: 'Hair Rubber Bands (50 Pack)',
    price: 40,
    originalPrice: 80,
    image:
      'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=500&q=80',
    badges: ['partner', 'trending'],
    rating: 4.4,
    reviews: 167,
  },
]
export default function ProductGrid() {
  return (
    <section className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sampleProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* Load more button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 border-2 border-royal-blue text-royal-blue rounded-full font-semibold hover:bg-royal-blue hover:text-white transition-colors">
            Load More Products
          </button>
        </div>
      </div>
    </section>
  )
}
