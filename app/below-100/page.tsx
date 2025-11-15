

import DealsSection from '@/components/under 100/DealsSection'
import HeroSection from '@/components/under 100/HeroSection'
import ProductGrid from '@/components/under 100/ProductGrid'
import TrustSection from '@/components/under 100/TrustSection'
import React from 'react'

export default function BelowKES100Page() {
  return (
    <div className="min-h-screen bg-white w-full">
      <HeroSection />
      <ProductGrid />
      <TrustSection />
      <DealsSection />
    </div>
  )
}
