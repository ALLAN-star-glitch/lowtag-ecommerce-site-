// components/shared/HeroSection.tsx
"use client";

import React from "react";
import Image from "next/image";
import { SparklesIcon } from "lucide-react";
import { HeroSectionProps } from "@/lib/types/hero-section/heroSectionProps";

export default function HeroSection(props: HeroSectionProps) {
  return (
    <section
      className={`relative bg-linear-to-br overflow-hidden 
        from-[${props.gradientFrom}] via-[${props.gradientVia}] to-[${props.gradientTo}]
      `}
    >
      {/* Floating Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {props.floatingShapes.map((shape, index) => (
          <div
            key={index}
            className={`absolute rounded-full animate-float ${shape.position}`}
            style={{
              width: shape.size,
              height: shape.size,
              backgroundColor: shape.color,
              animationDuration: shape.duration || "4s",
              animationDelay: shape.delay || "0s",
              opacity: 0.12,
            }}
          ></div>
        ))}
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-10 md:py-16 lg:py-20">
        <div className="flex flex-col-reverse md:flex-row items-center gap-6">

          {/* LEFT TEXT */}
          <div className="text-center md:text-left flex-1 space-y-4">

            {/* Marketing Banner */}
            <div
              className={`rounded-full px-4 py-2 inline-flex items-center gap-2 animate-pulse text-sm md:text-base text-white`}
              style={{ backgroundColor: props.bannerColor }}
            >
              <SparklesIcon className="w-4 h-4 md:w-5 md:h-5" />
              <span>{props.bannerText}</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-soft-black">
              {props.heading}{" "}
              <span style={{ color: props.highlightColor }}>
                {props.highlight}
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-base md:text-lg lg:text-xl text-gray-700">
              {props.subtext}
            </p>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6 text-sm md:text-base text-gray-600 max-w-md mx-auto md:mx-0">
              {props.trustIndicators.map((item, idx) => (
                <div key={idx} className="text-center">
                  <div
                    className="text-2xl md:text-3xl font-bold"
                    style={{ color: item.color }}
                  >
                    {item.value}
                  </div>
                  <div>{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex-1 relative w-full h-48 md:h-72 lg:h-96 rounded-xl overflow-hidden">
            <Image
              src={props.imageUrl}
              alt="Promotion"
              fill
              className="object-cover rounded-xl"
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
}
