import { HeroSection } from '@/components/sections/hero';
import { AboutSection } from '@/components/sections/about';
import { RoomsSection } from '@/components/sections/rooms';
import { AmenitiesSection } from '@/components/sections/amenities';
import { GallerySection } from '@/components/sections/gallery';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <RoomsSection />
      <GallerySection />
      <AmenitiesSection />
    </main>
  );
}
