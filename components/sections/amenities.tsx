'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
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
  ArrowRight,
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
    { icon: UtensilsCrossed, name: 'Meals Provided', description: 'Delicious & nutritious' },
    { icon: Utensils, name: 'Kitchen', description: 'Fully equipped' },
    { icon: Dumbbell, name: 'Gym Access', description: 'Stay active' },
    { icon: Laptop, name: 'Workspace', description: 'Co-working area' },
    { icon: Music, name: 'Common Room', description: 'Socialize & relax' },
    { icon: Tv, name: 'Entertainment', description: 'Movies & games' },
    {
      icon: WashingMachine,
      name: 'Laundry',
      description: 'Washing facilities',
    },
    { icon: UtensilsCrossed, name: 'Dining Area', description: 'Shared meals' },
    { icon: Fan, name: 'AC Rooms', description: 'Air-conditioned rooms' },
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
    <section id="amenities" className="py-20 sm:py-32 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12 sm:mb-16 relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >

          {/* Main Heading */}
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 relative inline-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent">
              Amenities
            </span>
            {/* Underline accent */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow to-transparent"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
            />
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Everything you need for a comfortable stay. Our facilities are designed to make you feel at home.
          </motion.p>
        </motion.div>

        <div className="relative py-6">
          <Carousel
            setApi={setApi}
            opts={{
              align: 'center',
              loop: true,
              dragFree: false,
              skipSnaps: false,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-0 scroll-smooth snap-x snap-proximity py-8">
              {amenities.map((amenity, index) => {
                const Icon = amenity.icon;
                const isCenter = current === index;
                
                return (
                  <CarouselItem
                    key={index}
                    className="pl-2 md:pl-2 basis-[70%] sm:basis-[50%] md:basis-[40%] lg:basis-[30%] snap-center"
                  >
                    <motion.div
                      animate={{
                        scale: isCenter ? 1.05 : 0.95,
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
                      <Card className="group relative rounded-2xl overflow-hidden h-full flex flex-col hover:shadow-xl transition-all duration-500">
                        {/* Background - alternating between light gray and yellow */}
                        <div className={`absolute inset-0 ${
                          index % 3 === 0 
                            ? 'bg-gray-50' 
                            : index % 3 === 1 
                            ? 'bg-yellow/10' 
                            : 'bg-yellow/5'
                        }`}>
                          {/* Decorative circular shapes */}
                          <div className="absolute inset-0 overflow-hidden">
                            <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-yellow/10 blur-3xl" />
                            <div className="absolute -bottom-16 -left-16 w-32 h-32 rounded-full bg-yellow/5 blur-2xl" />
                            <div className="absolute top-1/2 right-1/4 w-24 h-24 rounded-full bg-yellow/5 blur-xl" />
                          </div>
                        </div>

                        {/* Content - Horizontal layout */}
                        <div className="relative p-6 sm:p-8 flex-1 flex flex-row items-center gap-6">
                          {/* Left side - Text content */}
                          <div className="flex-1 flex flex-col justify-between min-w-0">
                            <div>
                              {/* Title */}
                              <motion.h3
                                animate={{
                                  fontSize: isCenter ? '1.5rem' : '1.25rem',
                                }}
                                transition={{ duration: 0.3 }}
                                className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-1 text-gray-900 leading-tight"
                              >
                                {amenity.name}
                              </motion.h3>

                              {/* Description */}
                              <motion.p
                                animate={{
                                  opacity: isCenter ? 1 : 0.8,
                                }}
                                transition={{ duration: 0.3 }}
                                className="text-sm sm:text-base text-gray-600 leading-relaxed mb-1 sm:mb-1 line-clamp-2"
                              >
                                {amenity.description}
                              </motion.p>
                            </div>

                            {/* Learn More button */}
                            <motion.div
                              className="flex items-center gap-2 mt-auto"
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.7, delay: 0.2, type: "spring" }}
                            >
      
                              <motion.div
                                className="w-8 h-8 rounded-full bg-yellow/30 flex items-center justify-center ml-1 
                                "
                                animate={{
                                  boxShadow: [
                                    "0 0 0 0 rgba(245, 203, 92, 0.2)",
                                    "0 0 0 12px rgba(245, 203, 92, 0.06)",
                                    "0 0 0 0 rgba(245, 203, 92, 0.2)"
                                  ]
                                }}
                                transition={{
                                  repeat: Infinity,
                                  duration: 2.2,
                                  ease: "easeInOut",
                                }}
                              >
                                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.3" viewBox="0 0 20 20" className="text-yellow animate-spin-slow">
                                  <circle cx="10" cy="10" r="6" strokeDasharray="5 10"/>
                                  <circle cx="10" cy="10" r="2.5" fill="#F5CB5C" opacity="0.7"/>
                                </svg>
                              </motion.div>
                            </motion.div>
                          </div>

                          {/* Right side - Icon */}
                          <motion.div
                            animate={{
                              scale: isCenter ? 1.1 : 1,
                              rotate: isCenter ? [0, -5, 5, 0] : 0,
                            }}
                            transition={{
                              type: 'spring',
                              stiffness: 300,
                              damping: 20,
                              rotate: {
                                duration: 0.6,
                                repeat: isCenter ? Infinity : 0,
                                repeatDelay: 2,
                              },
                            }}
                            className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-2xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow"
                          >
                            <Icon className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-yellow" />
                          </motion.div>
                        </div>
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
