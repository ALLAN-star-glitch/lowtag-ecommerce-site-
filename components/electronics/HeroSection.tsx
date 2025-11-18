import React from 'react'
import HeroSection from '@/components/shared/HeroSection'

export default function ElectronicsHeroSection() {
  return (
   
    <HeroSection
        gradientFrom="#F4F9FF"
        gradientVia="#E8F1FF"
        gradientTo="#F4F9FF"
        bannerText="Latest Electronics Deals — Shop Smart!"
        bannerColor="#4C6EF5"
        heading="Upgrade Your Tech with"
        highlight="Unbeatable Prices"
        highlightColor="#4C6EF5"
        subtext="Phones, laptops, accessories — verified and budget-friendly."
        imageUrl="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=900"
        floatingShapes={[
            { size: "80px", position: "top-10 left-10", color: "#4C6EF510" },
            { size: "64px", position: "top-20 right-20", color: "#FF60A810", delay: "1s" },
            { size: "96px", position: "bottom-10 left-1/4", color: "#FF8A5B10" }
        ]}
        trustIndicators={[
            { value: "1,200+", label: "Electronics Listed", color: "#4C6EF5" },
            { value: "50%", label: "Max Discount", color: "#FF60A8" },
            { value: "Genuine", label: "Quality Verified", color: "#59D86D" },
        ]}
        />

  )
}
