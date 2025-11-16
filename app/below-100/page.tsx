// app/below-100/page.tsx
import HeroSection from '@/components/under 100/HeroSection';
import ProductGrid from '@/components/under 100/ProductGrid';
import type { Metadata } from 'next';
import React from 'react';

// --------------------
// SEO Metadata
// --------------------
export const metadata: Metadata = {
  title: 'Below KES 100 – LowTag',
  description:
    'Discover amazing deals under KES 100 on electronics, fashion, household items, and more at LowTag Kenya. Affordable, quality products delivered fast!',
  keywords: ['LowTag', 'Below KES 100', 'Discount', 'Electronics', 'Fashion', 'Household', 'Kenya'],
  authors: [{ name: 'Allan Mathenge', url: 'https://allan-portfolio-website.vercel.app/' }],
  themeColor: '#00BFA6',
  openGraph: {
    title: 'Below KES 100 – LowTag',
    description:
      'Discover amazing deals under KES 100 on electronics, fashion, household items, and more at LowTag Kenya.',
    url: 'https://lowtag-ecommerce-site.vercel.app/below-100',
    siteName: 'LowTag',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1527264935190-1401c51b5bbc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZGlzY291bnR8ZW58MHx8MHx8fDA%3D',
        width: 1200,
        height: 630,
        alt: 'LowTag Below KES 100 Deals',
      },
    ],
    type: 'website',
  },
  robots: 'index, follow',
};

export default function BelowKES100Page() {
  return (
    <main className="min-h-screen bg-white w-full">
      {/* Hero Section */}
      <section aria-label="Below KES 100 Hero Section">
        <HeroSection />
      </section>

      {/* Product Grid */}
      <section aria-label="Below KES 100 Products" className="mt-8">
        <h2 className="sr-only">Products Under KES 100</h2>
        <ProductGrid />
      </section>
    </main>
  );
}
