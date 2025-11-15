"use client";

import React, { useEffect, useState } from "react";
import {
  Search,
  Heart,
  ShoppingCart,
  User,
  TrendingUp,
} from "lucide-react";

const marketingMessages = [
  { text: "Free delivery on orders above KES 1,500", icon: "🎁" },
  { text: "Flash deals today — don't miss out!", icon: "⚡" },
  { text: "Verified imports, trusted sellers", icon: "👑" },
];

const menuItems = [
  { label: "Electronics", href: "#electronics" },
  { label: "Fashion", href: "#fashion" },
  { label: "Household", href: "#household" },
  { label: "Kitchen", href: "#kitchen" },
  { label: "Personal Care", href: "#personal-care" },
  { label: "Affordable Essentials", href: "#essentials" },
  { label: "Deals / Flash Sale", href: "#deals", highlight: true },
  { label: "Imports / Exclusive Items", href: "#imports", highlight: true },
  { label: "Below KES 100", href: "#below-100", badge: true },
];

export default function Header() {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [activeMenu, setActiveMenu] = useState("");

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentMessage((prev) => (prev + 1) % marketingMessages.length),
      4000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Tier 1 - Marketing Bar */}
      <div className="bg-linear-to-r from-tangerine to-hot-pink py-2 overflow-hidden">
        <div className="animate-slide flex gap-8">
          {[...marketingMessages, ...marketingMessages].map((msg, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 text-soft-black font-medium text-sm whitespace-nowrap"
            >
              <span>{msg.icon}</span>
              <span>{msg.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tier 2 - Main Navbar */}
      <div className="bg-cream-peach shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-royal-blue rounded-lg flex items-center justify-center text-white font-bold text-xl">
              L
            </div>
            <span className="text-2xl font-bold text-soft-black">Lowtag</span>
          </div>

          {/* Search - Desktop */}
          <div className="flex-1 max-w-2xl hidden md:block">
            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search for products, brands, and more..."
                className="w-full pl-10 pr-4 py-2.5 rounded-full border-2 border-gray-200 focus:border-royal-blue focus:outline-none"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {/* Mobile Search Icon */}
            <button className="md:hidden text-soft-black hover:text-royal-blue transition-colors">
              <Search size={24} />
            </button>

            <button className="flex flex-col items-center gap-1 text-soft-black hover:text-royal-blue transition-colors">
              <Heart size={24} />
              <span className="text-xs">Wishlist</span>
            </button>
            <button className="flex flex-col items-center gap-1 text-soft-black hover:text-royal-blue transition-colors relative">
              <ShoppingCart size={24} />
              <span className="text-xs">Cart</span>
              <span className="absolute -top-1 -right-1 bg-hot-pink text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </button>
            <button className="flex flex-col items-center gap-1 text-soft-black hover:text-royal-blue transition-colors">
              <User size={24} />
              <span className="text-xs">Account</span>
            </button>
          </div>
        </div>
      </div>

      {/* Tier 3 - Menu Navbar */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center gap-6 overflow-x-auto py-3">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`flex items-center gap-2 whitespace-nowrap text-sm font-medium transition-colors hover:text-royal-blue ${
                  activeMenu === item.label
                    ? "text-royal-blue border-b-2 border-royal-blue"
                    : "text-soft-black"
                } ${item.highlight ? "text-tangerine" : ""}`}
                onClick={() => setActiveMenu(item.label)}
              >
                {item.label}
                {item.badge && (
                  <span className="bg-hot-pink text-white text-xs px-2 py-0.5 rounded-full flex items-center gap-1">
                    <TrendingUp size={12} />
                    Hot
                  </span>
                )}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
