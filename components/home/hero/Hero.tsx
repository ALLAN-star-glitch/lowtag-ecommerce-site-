"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const slideImages = [

  "https://images.unsplash.com/photo-1570857502809-08184874388e?w=900&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=900&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1542838132-92c53300491e?w=900&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1567958451986-2de427a4a0be?w=900&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?w=900&auto=format&fit=crop&q=60",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slideImages.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-linear-to-br from-cream-peach to-white py-20 overflow-hidden">
      {/* Floating Shapes */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-hot-pink/20 rounded-full animate-float" />
      <div
        className="absolute top-40 right-20 w-32 h-32 bg-royal-blue/20 rounded-full animate-float"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-20 left-1/4 w-24 h-24 bg-soft-gold/20 rounded-full animate-float"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute bottom-10 right-1/3 w-16 h-16 bg-tangerine/20 rounded-full animate-float"
        style={{ animationDelay: "0.5s" }}
      />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* TEXT SECTION */}
          <div className="text-center md:text-left max-w-4xl mx-auto md:mx-0">
            <h1
              className="
                font-bold text-soft-black leading-tight mb-6
                text-3xl sm:text-4xl md:text-5xl lg:text-6xl
              "
            >
              Premium Imports + Trusted Deals —{" "}
              <span className="text-royal-blue">Made Affordable</span> for
              Everyone
            </h1>

            <p
              className="
                text-gray-700 mb-8
                text-base sm:text-lg md:text-xl
              "
            >
              Shop Owned Stock, Partner Products & Exclusive Imports — All
              Verified.
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              <button
                className="
                  bg-royal-blue text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full
                  font-semibold shadow-lg transition-all hover:scale-105
                  text-sm sm:text-base md:text-lg
                "
              >
                Shop Owned Stock
              </button>
              <button
                className="
                  bg-tangerine text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full
                  font-semibold shadow-lg transition-all hover:scale-105
                  text-sm sm:text-base md:text-lg
                "
              >
                Browse All Deals
              </button>
            </div>

            {/* Trust Indicators */}
            <div
              className="
                mt-12 flex flex-wrap items-center justify-center md:justify-start gap-8 
                text-gray-600
                text-xs sm:text-sm md:text-base
              "
            >
              <div className="flex items-center gap-2">
                <span className="text-xl">✓</span>
                <span>Verified Products</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl">⚡</span>
                <span>Fast Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl">🛡️</span>
                <span>Buyer Protection</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl">💰</span>
                <span>Best Prices</span>
              </div>
            </div>
          </div>

          {/* SLIDER */}
          <div className="hidden md:block">
            <div className="relative w-full h-[350px] md:h-[450px] lg:h-[500px] overflow-hidden rounded-3xl shadow-2xl">
              {slideImages.map((src, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    index === current ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={src}
                    alt="Hero slider image"
                    fill
                    className="object-cover rounded-3xl"
                    sizes="(max-width: 768px) 100vw,
                           (max-width: 1200px) 50vw,
                           50vw"
                    priority={index === 0}
                  />
                </div>
              ))}

              {/* DOTS */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {slideImages.map((_, idx) => (
                  <div
                    key={idx}
                    onClick={() => setCurrent(idx)}
                    className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
                      current === idx
                        ? "bg-royal-blue scale-110"
                        : "bg-white/60"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
