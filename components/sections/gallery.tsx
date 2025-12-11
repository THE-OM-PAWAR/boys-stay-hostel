'use client';

import { Card } from '@/components/ui/card';
import { Image as ImageIcon } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export function GallerySection() {
  const galleryItems = [
    { title: 'Cozy Common Area' },
    { title: 'Modern Rooms' },
    { title: 'Rooftop Terrace' },
    { title: 'Shared Kitchen' },
    { title: 'Social Events' },
    { title: 'City Views' },
    { title: 'Dormitory Spaces' },
    { title: 'Recreation Room' },
  ];

  return (
    <section id="gallery" className="py-32 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6">Gallery</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Take a peek at our spaces. See where you'll stay, relax, and connect
            with fellow travelers.
          </p>
        </div>

        <div className="relative">
          <Carousel
            opts={{
              align: 'start',
              loop: false,
              dragFree: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 md:-ml-6">
              {galleryItems.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="pl-4 md:pl-6 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                >
                  <Card className="rounded-3xl border-gray-200 overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer h-full">
                    <div className="relative aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                      <ImageIcon className="w-12 h-12 text-gray-400 group-hover:scale-110 transition-transform" />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                        <p className="text-white font-semibold">{item.title}</p>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 md:-left-12" />
            <CarouselNext className="right-0 md:-right-12" />
          </Carousel>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Want to see more? Check out our full photo gallery.
          </p>
          <button className="text-black font-semibold hover:text-[#fca311] transition-colors">
            View All Photos →
          </button>
        </div>
      </div>
    </section>
  );
}
