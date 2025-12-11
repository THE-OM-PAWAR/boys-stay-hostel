'use client';

import { Card } from '@/components/ui/card';
import {
  Wifi,
  Coffee,
  Utensils,
  Dumbbell,
  Laptop,
  Music,
  Bike,
  MapPin,
  Tv,
  WashingMachine,
  UtensilsCrossed,
  Fan,
} from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function AmenitiesSection() {
  const amenities = [
    { icon: Wifi, name: 'Free WiFi', description: 'High-speed internet' },
    { icon: Coffee, name: 'Free Coffee', description: 'All day, every day' },
    { icon: Utensils, name: 'Kitchen', description: 'Fully equipped' },
    { icon: Dumbbell, name: 'Gym Access', description: 'Stay active' },
    { icon: Laptop, name: 'Workspace', description: 'Co-working area' },
    { icon: Music, name: 'Common Room', description: 'Socialize & relax' },
    { icon: Bike, name: 'Bike Rental', description: 'Explore the city' },
    { icon: MapPin, name: 'Tours', description: 'Guided excursions' },
    { icon: Tv, name: 'Entertainment', description: 'Movies & games' },
    {
      icon: WashingMachine,
      name: 'Laundry',
      description: 'Washing facilities',
    },
    { icon: UtensilsCrossed, name: 'Dining Area', description: 'Shared meals' },
    { icon: Fan, name: 'Climate Control', description: 'AC & heating' },
  ];

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section id="amenities" className="py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6">Amenities</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Everything you need for a comfortable stay. Our facilities are
            designed to make you feel at home.
          </p>
        </div>

        <div className="relative py-12">
          <Carousel
            setApi={setApi}
            opts={{
              align: 'center',
              loop: true,
              dragFree: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {amenities.map((amenity, index) => {
                const Icon = amenity.icon;
                const isCenter = current === index;
                
                return (
                  <CarouselItem
                    key={index}
                    className="pl-2 md:pl-4 basis-[70%] sm:basis-[50%] md:basis-[40%] lg:basis-[30%]"
                  >
                    <motion.div
                      animate={{
                        scale: isCenter ? 1.15 : 0.9,
                        opacity: isCenter ? 1 : 0.7,
                      }}
                      transition={{
                        type: 'spring',
                        stiffness: 300,
                        damping: 30,
                        duration: 0.5,
                      }}
                      className="h-full"
                    >
                      <Card className="p-8 rounded-3xl border-gray-100 shadow-md hover:shadow-lg transition-all text-center h-full flex flex-col items-center justify-center">
                        <motion.div
                          animate={{
                            scale: isCenter ? 1.1 : 1,
                          }}
                          transition={{
                            type: 'spring',
                            stiffness: 300,
                            damping: 30,
                          }}
                          className="w-16 h-16 rounded-full bg-[#fca311]/10 flex items-center justify-center mb-4"
                        >
                          <Icon className="w-8 h-8 text-[#fca311]" />
                        </motion.div>
                        <motion.h3
                          animate={{
                            fontSize: isCenter ? '1.125rem' : '1rem',
                          }}
                          className="font-semibold mb-1"
                        >
                          {amenity.name}
                        </motion.h3>
                        <motion.p
                          animate={{
                            opacity: isCenter ? 1 : 0.8,
                          }}
                          className="text-sm text-gray-600"
                        >
                          {amenity.description}
                        </motion.p>
                      </Card>
                    </motion.div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="left-0 md:-left-12" />
            <CarouselNext className="right-0 md:-right-12" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
