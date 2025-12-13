'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Bed, Users, Wifi, Coffee, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Room {
  id: string;
  name: string;
  type: string;
  description: string;
  capacity: string;
  features: string[];
  image?: string;
}

const allRooms: Room[] = [
  {
    id: '1',
    name: 'Double Sharing Room',
    type: 'double sharing',
    description: 'Comfortable air-conditioned room for two residents at best hostel in Bhopal, equipped with beds, storage, and essential amenities.',
    capacity: '2 beds',
    features: ['Study Table', 'Wardrobe', 'Study Lamp', 'Mattress', 'Pillow', 'Blanket', 'Mirror'],
    image: '/images/galleryroom8.jpeg',
  },
  {
    id: '2',
    name: 'Triple Sharing Room',
    type: 'triple sharing',
    description: 'Spacious room for three residents at boys hostel MP Nagar, equipped with comfortable beds, storage, and essential amenities.',
    capacity: '3 beds',
    features: ['Study Table', 'Wardrobe', 'Study Lamp', 'Mattress', 'Pillow', 'Blanket', 'Mirror'],
    image: '/images/galleryroom9.jpeg',
  },
  {
    id: '3',
    name: 'Double Sharing AC Room',
    type: 'double sharing',
    description: 'Air-conditioned room for two residents at luxury hostel Bhopal, with individual beds, storage, and modern amenities.',
    capacity: '2 beds',
    features: ['AC', 'Study Table', 'Wardrobe', 'Study Lamp', 'Mattress', 'Pillow', 'Blanket', 'Mirror'],
    image: '/images/galleryroom2.jpeg',
  },
  {
    id: '4',
    name: 'Triple Sharing AC Room',
    type: 'triple sharing',
    description: 'Spacious air-conditioned room for three residents at secure hostel MP Nagar, equipped with beds, storage, and amenities.',
    capacity: '3 beds',
    features: ['AC', 'Study Table', 'Wardrobe', 'Study Lamp', 'Mattress', 'Pillow', 'Blanket', 'Mirror'],
    image: '/images/room101.png',
  },
];

const roomTypes = ['All', 'double sharing', 'triple sharing'];

export function RoomsSection() {
  const [selectedType, setSelectedType] = useState('All');

  const filteredRooms =
    selectedType === 'All'
      ? allRooms
      : allRooms.filter((room) => room.type === selectedType);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="rooms" className="py-20 sm:py-32 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
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
              AC Rooms Bhopal
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
            Book double sharing and triple sharing AC rooms at the best boys hostel in MP Nagar Bhopal.
          </motion.p>


        </motion.div>

        {/* Room Type Selection */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {roomTypes.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-3 sm:px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                selectedType === type
                  ? 'bg-black text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {type}
            </button>
          ))}
        </motion.div>

        {/* Rooms Carousel */}
        <div className="relative">
          <Carousel
            opts={{
              align: 'start',
              loop: false,
              dragFree: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-3 sm:-ml-4">
              {filteredRooms.map((room, index) => (
                <CarouselItem
                  key={room.id}
                  className="pl-3 sm:pl-4 basis-[280px] sm:basis-[300px]"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="h-full"
                  >
                    <div className="group relative overflow-hidden rounded-lg bg-white border border-gray-100 hover:border-yellow/30 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                      {/* Yellow accent bar */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow to-yellow/80" />
                      
                      {/* Image */}
                      <div className="relative h-80 sm:h-80 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                        {room.image ? (
                          <>
                            <Image
                              src={room.image}
                              alt={`${room.name} - Boys Hostel Bhopal MP Nagar`}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-700"
                              sizes="(max-width: 640px) 280px, 300px"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </>
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Bed className="w-8 h-8 text-gray-300 group-hover:text-yellow/60 transition-colors duration-300" />
                          </div>
                        )}
                        <div className="absolute top-3 right-3 z-10">
                          <span className="px-2.5 py-1 text-xs font-medium bg-yellow text-black rounded-full shadow-sm">
                            {room.type}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-4 flex-1 flex flex-col">
                        <div className="mb-3">
                          <h3 className="text-lg font-semibold mb-1 text-black">
                            {room.name}
                          </h3>
                          <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                            {room.description}
                          </p>
                        </div>



                        <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-3">
                          <Users className="w-3.5 h-3.5 text-yellow" />
                          <span>{room.capacity}</span>
                        </div>

                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {room.features.slice(0, 2).map((feature, i) => (
                            <span
                              key={i}
                              className="px-2 py-0.5 text-xs bg-yellow/10 text-gray-700 rounded-md border border-yellow/20"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>

                        <a
                          href={`https://wa.me/919826080999?text=${encodeURIComponent(
                            `Hi, I would like to enquire about the room at Jain's Boy's Stay:\n\nRoom: ${room.name}\nType: ${room.type}\nCapacity: ${room.capacity}\nFeatures: ${room.features.join(', ')}\nDescription: ${room.description}\n\nPlease provide more details about the availability and booking process.`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-auto w-full py-2.5 px-4 bg-yellow hover:bg-yellow/90 text-black text-sm font-medium rounded-lg transition-colors duration-200 flex items-center justify-center gap-1.5 group/btn shadow-sm shadow-yellow/20"
                        >
                          Enquire
                          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-end gap-3 mt-6 sm:mt-8">
              <CarouselPrevious className="relative static translate-y-0 translate-x-0 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-gray-100 hover:bg-gray-200 border-gray-200 text-black shadow-sm transition-all" />
              <CarouselNext className="relative static translate-y-0 translate-x-0 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-gray-100 hover:bg-gray-200 border-gray-200 text-black shadow-sm transition-all" />
            </div>
          </Carousel>
        </div>

        {/* Explore All Rooms Button */}
        <motion.div
          className="flex justify-center mt-8 sm:mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button
            size="lg"
            className="group bg-black hover:bg-black/90 text-white font-medium px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 text-sm sm:text-base rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
            asChild
          >
            <Link href="/rooms">
              <span className="flex items-center gap-2">
                Explore All Rooms
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
