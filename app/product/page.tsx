"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Heart, Share2, ShoppingCart, Truck, Shield, Star } from "lucide-react";
import Badge from "@/components/products/Badge";
import ProductCard from "@/components/products/ProductCard";

interface ProductPageProps {
  type: "owned" | "partner";
}

export function ProductPage({ type = "owned" }: ProductPageProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const isOwned = type === "owned";

  const product = {
    title: isOwned
      ? "Premium Wireless Headphones - Noise Cancelling, 40H Battery"
      : "Running Shoes - Breathable Mesh, Lightweight Design",
    price: isOwned ? 4500 : 3500,
    originalPrice: isOwned ? 6000 : 5000,
    badges: isOwned
      ? (["owned", "fast", "quality"] as const)
      : (["partner", "trending"] as const),
    rating: isOwned ? 4.8 : 4.5,
    reviews: isOwned ? 234 : 178,
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&q=80",
      "https://images.unsplash.com/photo-1545127398-14699f92334b?w=800&q=80",
      "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=800&q=80",
    ],
    inStock: isOwned ? 45 : null,
    seller: isOwned
      ? null
      : {
          name: "TechGear Kenya",
          rating: 4.7,
          reviews: 1243,
          responseTime: "2 hours",
        },
  };

  const similarProducts = [
    {
      image:
        "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&q=80",
      title: "Designer Sunglasses - UV Protection",
      price: 1200,
      badges: ["owned" as const, "trending" as const],
      rating: 4.7,
      reviews: 89,
    },
    {
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
      title: "Classic Analog Watch",
      price: 2800,
      originalPrice: 3500,
      badges: ["owned" as const, "quality" as const],
      rating: 4.6,
      reviews: 156,
    },
    {
      image:
        "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=500&q=80",
      title: "Bluetooth Speaker - Waterproof",
      price: 3200,
      badges: ["partner" as const, "trending" as const],
      rating: 4.9,
      reviews: 312,
    },
    {
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80",
      title: "Running Shoes - Breathable",
      price: 3500,
      badges: ["partner" as const],
      rating: 4.5,
      reviews: 178,
    },
  ];

  return (
    <div className="min-h-screen bg-cream-peach">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-600 mb-6">
          <a href="#" className="hover:text-royal-blue">
            Home
          </a>
          <span className="mx-2">/</span>
          <a href="#" className="hover:text-royal-blue">
            Electronics
          </a>
          <span className="mx-2">/</span>
          <span className="text-soft-black">Headphones</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Image Gallery */}
          <div>
            {/* Main Image */}
            <div className="bg-white rounded-2xl p-4 shadow-lg mb-4 relative aspect-square">
              <Image
                src={product.images[selectedImage]}
                alt={product.title}
                fill
                className="object-cover rounded-xl"
              />
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`bg-white rounded-lg p-2 shadow-md hover:shadow-lg transition-all ${
                    selectedImage === idx ? "ring-2 ring-royal-blue" : ""
                  }`}
                >
                  <div className="relative w-full aspect-square">
                    <Image src={img} alt="" fill className="object-cover rounded" />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              {/* Badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                {product.badges.map((badge) => (
                  <Badge key={badge} type={badge} size="md" />
                ))}
              </div>

              <h1 className="text-3xl font-bold text-soft-black mb-4">
                {product.title}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className={
                          i < Math.floor(product.rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }
                      />
                    ))}
                  </div>
                  <span className="font-semibold text-soft-black">{product.rating}</span>
                </div>
                <span className="text-gray-500">({product.reviews} reviews)</span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl font-bold text-royal-blue">
                  KES {product.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <>
                    <span className="text-xl text-gray-400 line-through">
                      KES {product.originalPrice.toLocaleString()}
                    </span>
                    <span className="bg-hot-pink text-white px-3 py-1 rounded-full text-sm font-bold">
                      Save{" "}
                      {Math.round(
                        ((product.originalPrice - product.price) / product.originalPrice) * 100
                      )}
                      %
                    </span>
                  </>
                )}
              </div>

              {/* Stock / Seller Info */}
              {isOwned ? (
                <div className="bg-royal-blue/10 rounded-lg p-4 mb-6">
                  <div className="flex items-center gap-2 text-royal-blue font-semibold mb-2">
                    <Shield size={20} />
                    <span>Owned & Verified by Lowtag</span>
                  </div>
                  <p className="text-sm text-gray-700">
                    In stock: <span className="font-semibold">{product.inStock} units</span> • Fast dispatch • Quality guaranteed
                  </p>
                </div>
              ) : (
                <div className="bg-tangerine/10 rounded-lg p-4 mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2 text-tangerine font-semibold mb-1">
                        <Shield size={20} />
                        <span>Sold by {product.seller?.name}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-gray-600">
                        <span>
                          ⭐ {product.seller?.rating} ({product.seller?.reviews} reviews)
                        </span>
                        <span>• Response: {product.seller?.responseTime}</span>
                      </div>
                    </div>
                    <button className="text-tangerine font-semibold text-sm hover:underline">
                      View Store
                    </button>
                  </div>
                  <p className="text-sm text-gray-700">
                    Verified seller • Protected by Lowtag guarantee • Delivery: 2-5 days
                  </p>
                </div>
              )}

              {/* Quantity & Actions */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center border-2 border-gray-300 rounded-full">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 hover:bg-gray-100 rounded-l-full"
                  >
                    −
                  </button>
                  <span className="px-6 py-2 font-semibold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 hover:bg-gray-100 rounded-r-full"
                  >
                    +
                  </button>
                </div>
                <button className="p-3 border-2 border-gray-300 rounded-full hover:bg-gray-100 transition-colors">
                  <Heart size={20} />
                </button>
                <button className="p-3 border-2 border-gray-300 rounded-full hover:bg-gray-100 transition-colors">
                  <Share2 size={20} />
                </button>
              </div>

              {/* CTAs */}
              <div className="flex gap-4 mb-6">
                <button className="flex-1 bg-tangerine text-white py-4 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-all hover:scale-105 shadow-lg flex items-center justify-center gap-2">
                  <ShoppingCart size={20} /> Add to Cart
                </button>
                <button className="flex-1 bg-royal-blue text-white py-4 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-all hover:scale-105 shadow-lg">
                  Buy Now
                </button>
              </div>

              {/* Delivery Info */}
              <div className="border-t pt-6">
                <div className="flex items-start gap-3 mb-4">
                  <Truck className="text-lime-green mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-soft-black mb-1">
                      {isOwned ? "Fast Dispatch" : "Standard Delivery"}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {isOwned
                        ? "Ships within 24 hours. Delivery in 1-3 days within Nairobi."
                        : "Estimated delivery: 2-5 business days. Free shipping on orders above KES 1,500."}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="text-royal-blue mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-soft-black mb-1">Buyer Protection</h3>
                    <p className="text-sm text-gray-600">
                      Full refund if item is not as described. 7-day return policy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
          {/* ...keep the rest as is, descriptions/specs unchanged */}
        </div>

        {/* Similar Products */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-soft-black mb-8">Similar Items Kenyans Buy</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {similarProducts.map((product, idx) => (
              <ProductCard key={idx} {...product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
