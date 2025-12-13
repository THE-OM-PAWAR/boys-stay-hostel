import { HeroSection } from '@/components/sections/hero';
import { AboutSection } from '@/components/sections/about';
import { RoomsSection } from '@/components/sections/rooms';
import { AmenitiesSection } from '@/components/sections/amenities';
import { GallerySection } from '@/components/sections/gallery';
import { GirlsHostelSection } from '@/components/sections/girls-hostel';
import { PlacesNearbySection } from '@/components/sections/places-nearby';
import { LocalSeoSection } from '@/components/sections/local-seo';
import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://boyshostelbhopal.com';

export const metadata: Metadata = {
  title: "Best Hostel in Bhopal | Jain's boys Stay Hostel MP Nagar - Luxury & Secure Accommodation",
  description: "Jain's boys Stay Hostel - Best luxury boys hostel in Bhopal, MP Nagar. Fully air-cooled campus, AC rooms, gym, yoga room, RO water, WiFi, entertainment room, pure veg food, 24/7 security. Top-rated hostel near MP Nagar Bhopal. Book now!",
  keywords: [
    'best hostel in bhopal',
    'boys hostel in mp nagar',
    'luxury boys hostel bhopal',
    'secure boys hostel bhopal',
    'affordable boys hostel mp nagar',
    'top hostel near mp nagar bhopal',
    'hostel in bhopal',
    'boys hostel mp nagar'
  ],
  openGraph: {
    title: "Best Hostel in Bhopal | Jain's boys Stay Hostel MP Nagar",
    description: "Jain's boys Stay Hostel - Best luxury boys hostel in Bhopal, MP Nagar. Fully air-cooled campus, AC rooms, gym, yoga room, RO water, WiFi, entertainment room, pure veg food, 24/7 security.",
    url: siteUrl,
    siteName: "Jain's boys Stay Hostel",
    images: [
      {
        url: `${siteUrl}/hero.png`,
        width: 1200,
        height: 630,
        alt: "Best Hostel in Bhopal MP Nagar - Jain's boys Stay Hostel",
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <RoomsSection />
      <GallerySection />
      <AmenitiesSection />
      <PlacesNearbySection />
      <LocalSeoSection />
      <GirlsHostelSection />
    </main>
  );
}
