// app/flash-deals/page.tsx
import FlashDealsClient from '@/components/flash-deals/FlashDealsClient'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Flash Deals / Sale – LowTag',
  description:
    "Grab the hottest flash deals today on electronics, fashion, household items, and more at LowTag Kenya. Limited stock, fast delivery!",
  keywords: ['LowTag', 'Flash Deals', 'Sale', 'Discount', 'Electronics', 'Fashion', 'Kenya'],
  authors: [{ name: 'Allan Mathenge', url: 'https://allan-portfolio-website.vercel.app/' }],
  themeColor: '#00BFA6',
  openGraph: {
    title: 'Flash Deals / Sale – LowTag',
    description:
      "Grab the hottest flash deals today on electronics, fashion, household items, and more at LowTag Kenya.",
    url: 'https://lowtag-ecommerce-site.vercel.app/flash-deals',
    siteName: 'LowTag',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1527264935190-1401c51b5bbc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZGlzY291bnR8ZW58MHx8MHx8fDA%3D',
        width: 1200,
        height: 630,
        alt: 'LowTag Flash Deals',
      },
    ],
    type: 'website',
  },
  robots: 'index, follow',
}

export default function FlashDealsPage() {
  return <FlashDealsClient />
}
