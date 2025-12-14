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
  title: "Boys Hostel Bhopal | Best Luxury Boys Hostel in Bhopal MP Nagar - Jain boys Stay",
  description: "Boys Hostel Bhopal - Jain boys Stay is the best luxury boys hostel in Bhopal, MP Nagar. Fully air-cooled campus, AC rooms, gym, yoga room, RO water, WiFi, entertainment room, pure veg food, 24/7 security. Top-rated boys hostel in Bhopal. Book now!",
  keywords: [
    'boys hostel bhopal',
    'boys hostel in bhopal',
    'best boys hostel bhopal',
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
    title: "Boys Hostel Bhopal | Best Luxury Boys Hostel in Bhopal MP Nagar",
    description: "Boys Hostel Bhopal - Jain boys Stay is the best luxury boys hostel in Bhopal, MP Nagar. Fully air-cooled campus, AC rooms, gym, yoga room, RO water, WiFi, entertainment room, pure veg food, 24/7 security.",
    url: siteUrl,
    siteName: "Jain boys Stay",
    images: [
      {
        url: `${siteUrl}/hero.png`,
        width: 1200,
        height: 630,
        alt: "Best Hostel in Bhopal MP Nagar - Jain boys Stay",
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
