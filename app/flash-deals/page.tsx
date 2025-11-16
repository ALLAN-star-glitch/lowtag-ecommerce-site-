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
        url: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=900&auto=format&fit=crop&q=60',
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
