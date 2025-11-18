
import ElectronicsHeroSection from '@/components/electronics/HeroSection';
import ProductGrid from '@/components/electronics/ProductGrid';
import type { Metadata } from 'next';
import React from 'react';

// --------------------
// SEO Metadata
// --------------------
export const metadata: Metadata = {
  title: 'Electronics – LowTag Kenya',
  description:
    'Shop the best electronics in Kenya including phones, accessories, audio devices, small appliances, and gadgets. Verified sellers, fast delivery, and great discounts.',
  keywords: [
    'LowTag',
    'Electronics',
    'Phones',
    'Accessories',
    'Speakers',
    'Earphones',
    'Gadgets',
    'Kenya',
    'Best Prices',
  ],
  authors: [{ name: 'Allan Mathenge', url: 'https://allan-portfolio-website.vercel.app/' }],
  themeColor: '#00BFA6',
  openGraph: {
    title: 'Electronics – LowTag Kenya',
    description:
      'Browse top-quality electronics at unbeatable prices. Verified products, exclusive deals, and fast delivery across Kenya.',
    url: 'https://lowtag-ecommerce-site.vercel.app/electronics',
    siteName: 'LowTag',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1510557880182-3f8c5f43f34f?w=1200&auto=format&fit=crop&q=60',
        width: 1200,
        height: 630,
        alt: 'LowTag Electronics',
      },
    ],
    type: 'website',
  },
  robots: 'index, follow',
};

export default function ElectronicsPage() {
  return (
    <main className="min-h-screen bg-white w-full">
      {/* Hero Section */}
      <section aria-label="Electronics Hero Section">
        <ElectronicsHeroSection />
      </section>

      {/* Product Grid */}
      <section aria-label="Electronics Products" className="mt-8">
        <h2 className="sr-only">Electronics Products</h2>
        <ProductGrid />
      </section>
    </main>
  );
}
