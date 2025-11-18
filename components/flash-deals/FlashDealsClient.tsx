'use client'

import React, { useState, useEffect } from 'react'
import Confetti from 'react-confetti'
import { ProductGrid } from '@/components/flash-deals/ProductGrid'
import { FlashSaleHeroSection } from './Hero'

export default function FlashDealsClient() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })
  const [showConfetti, setShowConfetti] = useState(false)

  useEffect(() => {
    // Update window size and show confetti on next tick
    const raf = requestAnimationFrame(() => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
      setShowConfetti(true)
    })

    const handleResize = () =>
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })

    window.addEventListener('resize', handleResize)

    const timer = setTimeout(() => setShowConfetti(false), 8000) // confetti duration

    return () => {
      cancelAnimationFrame(raf)
      clearTimeout(timer)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="min-h-screen bg-white relative">
      {showConfetti && <Confetti width={windowSize.width} height={windowSize.height} />}
      <FlashSaleHeroSection />
      <ProductGrid />
  
  
    </div>
  )
}
