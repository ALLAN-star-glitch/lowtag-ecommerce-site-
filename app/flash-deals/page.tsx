import { BundleSection } from '@/components/flash-deals/BundleSection'
import { Hero } from '@/components/flash-deals/Hero'
import { ProductGrid } from '@/components/flash-deals/ProductGrid'
import { ValueSection } from '@/components/flash-deals/ValueSection'
import React from 'react'
export default function FlashDealsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <ProductGrid />
      <ValueSection />
      <BundleSection />

      
    </div>
  )
}
