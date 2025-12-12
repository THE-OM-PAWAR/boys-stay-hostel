import { HeroSection } from '@/components/sections/hero';
import { AboutSection } from '@/components/sections/about';
import { RoomsSection } from '@/components/sections/rooms';
import { AmenitiesSection } from '@/components/sections/amenities';
import { GallerySection } from '@/components/sections/gallery';
import { GirlsHostelSection } from '@/components/sections/girls-hostel';
import { PlacesNearbySection } from '@/components/sections/places-nearby';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <RoomsSection />
      <GallerySection />
      <AmenitiesSection />
      <PlacesNearbySection />
      <GirlsHostelSection />
    </main>
  );
}
