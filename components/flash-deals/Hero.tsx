import React from 'react'
import HeroSection from '../shared/HeroSection'


export function FlashSaleHeroSection() {
  return (
   <HeroSection
      gradientFrom="#FFF8EC"
      gradientVia="#FFE8D6"
      gradientTo="#FFF8EC"
      bannerText="Limited Time Offers – Grab Yours Now!"
      bannerColor="#FF60A8"
      heading="Flash Deals You Can't Miss!"
      highlight=""
      highlightColor="#FF60A8"
      subtext="Affordable, verified, high-quality products."
      imageUrl="https://images.unsplash.com/photo-1527264935190-1401c51b5bbc?w=900"
      floatingShapes={[
        { size: "128px", position: "top-10 left-10", color: "#FF60A810" },
        { size: "96px", position: "top-40 right-20", color: "#4C6EF510" },
        { size: "160px", position: "bottom-20 left-1/3", color: "#FF8A5B10" },
      ]}
      trustIndicators={[
        { value: "500+", label: "Daily Deals", color: "#4C6EF5" },
        { value: "70%", label: "Max Savings", color: "#FF60A8" },
        { value: "24h", label: "Fast Dispatch", color: "#59D86D" },
        { value: "100%", label: "Verified", color: "#D9A441" },
      ]}
    />

  )
}
