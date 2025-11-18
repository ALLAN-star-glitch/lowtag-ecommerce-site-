import React from 'react'
import HeroSection from '../shared/HeroSection'
export default function Below100HeroSection() {
  return (
   <HeroSection
      gradientFrom="#FFF8EC"
      gradientVia="#FFE8D6"
      gradientTo="#FFF8EC"
      bannerText="Trending Deals – Grab Yours Now!"
      bannerColor="#FF60A8"
      heading="Shop the Best Deals"
      highlight="Under KES 100!"
      highlightColor="#FF60A8"
      subtext="Affordable, quality products verified by LowTag."
      imageUrl="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=900"
      floatingShapes={[
        { size: "80px", position: "top-10 left-10", color: "#FF60A810" },
        { size: "64px", position: "top-20 right-20", color: "#4C6EF510" },
        { size: "96px", position: "bottom-10 left-1/4", color: "#FF8A5B10" },
      ]}
      trustIndicators={[
        { value: "500+", label: "Daily Deals", color: "#4C6EF5" },
        { value: "70%", label: "Max Savings", color: "#FF60A8" },
        { value: "24h", label: "Fast Dispatch", color: "#59D86D" },
      ]}
    />

  )
}
