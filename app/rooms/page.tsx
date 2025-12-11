'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Bed, Users, Wifi, Coffee, Image as ImageIcon, Star } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Card } from '@/components/ui/card';

interface Room {
  id: string;
  title: string;
  description: string;
  imageCount: number;
  imageUrl: string;
  price: number;
  capacity: string;
  rating: number;
}

const rooms: Room[] = [
  {
    id: '1',
    title: 'NOTES ON VISION',
    description: 'Modern minimalist design with panoramic city views',
    imageCount: 5,
    imageUrl: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&h=600&fit=crop',
    price: 89,
    capacity: '2 Guests',
    rating: 4.8,
  },
  {
    id: '2',
    title: 'UNDESERVED',
    description: 'Spacious rooms with premium amenities and comfort',
    imageCount: 10,
    imageUrl: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop',
    price: 125,
    capacity: '4 Guests',
    rating: 4.9,
  },
  {
    id: '3',
    title: 'FLORENCE',
    description: 'Elegant interiors inspired by European architecture',
    imageCount: 2,
    imageUrl: 'https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?w=800&h=600&fit=crop',
    price: 95,
    capacity: '2 Guests',
    rating: 4.7,
  },
  {
    id: '4',
    title: 'COHERENCE',
    description: 'Thoughtfully designed spaces for the modern traveler',
    imageCount: 13,
    imageUrl: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop',
    price: 110,
    capacity: '3 Guests',
    rating: 4.9,
  },
  {
    id: '5',
    title: 'SERENITY',
    description: 'Peaceful retreat with natural light and tranquility',
    imageCount: 8,
    imageUrl: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&h=600&fit=crop',
    price: 75,
    capacity: '2 Guests',
    rating: 4.6,
  },
];

export default function RoomsPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
      },
    },
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="max-w-5xl mx-auto text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="inline-block mb-2 sm:mb-3"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <span className="text-xs sm:text-sm uppercase tracking-[0.2em] text-gray-500 font-light">
                Explore Our
              </span>
            </motion.div>

            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light mb-3 sm:mb-4 md:mb-5 leading-[1.1] text-black px-2 sm:px-0 tracking-tight"
              variants={titleVariants}
            >
              <span className="block">Our Rooms</span>
              <span className="block font-normal">Collection</span>
            </motion.h1>

            <motion.div
              className="w-20 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto mb-3 sm:mb-4"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 80, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            />

            <motion.p
              className="text-sm sm:text-base md:text-lg lg:text-xl tracking-wide font-extralight text-gray-500 mb-4 sm:mb-5 md:mb-6 max-w-2xl mx-auto leading-relaxed px-4 sm:px-6 md:px-0"
              variants={textVariants}
            >
              Discover our thoughtfully designed spaces, each with its own unique character and charm.
              <br className="hidden sm:block" />
              <span className="text-gray-400"> Experience comfort and style in every room.</span>
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="pb-20 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {rooms.map((room, index) => (
              <motion.div
                key={room.id}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -12 }}
              >
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white group">
                  {/* Image Container */}
                  <div className="relative h-[280px] sm:h-[320px] overflow-hidden">
                    <Image
                      src={room.imageUrl}
                      alt={room.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      unoptimized
                    />
                    
                    {/* Price Badge */}
                    <motion.div
                      className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 + 0.2, duration: 0.4 }}
                    >
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-bold text-black">${room.price}</span>
                        <span className="text-xs text-gray-500 font-medium">/night</span>
                      </div>
                    </motion.div>

                    {/* Rating Badge */}
                    <motion.div
                      className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.3, duration: 0.4 }}
                    >
                      <Star className="w-3.5 h-3.5 fill-yellow text-yellow" />
                      <span className="text-sm font-semibold text-white">{room.rating}</span>
                    </motion.div>

                    {/* Image Count Badge */}
                    <motion.div
                      className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.4, duration: 0.4 }}
                    >
                      <ImageIcon className="w-3.5 h-3.5 text-gray-600" />
                      <span className="text-xs font-medium text-gray-700">{room.imageCount}</span>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    {/* Title and Capacity */}
                    <div className="space-y-2">
                      <motion.h3
                        className="text-2xl font-semibold text-black tracking-tight"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 + 0.5, duration: 0.4 }}
                      >
                        {room.title}
                      </motion.h3>
                      <motion.p
                        className="text-sm text-gray-600 leading-relaxed"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 + 0.6, duration: 0.4 }}
                      >
                        {room.description}
                      </motion.p>
                    </div>

                    {/* Features */}
                    <motion.div
                      className="flex items-center gap-4 pt-2 border-t border-gray-100"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.7, duration: 0.4 }}
                    >
                      <div className="flex items-center gap-1.5 text-gray-600">
                        <Users className="w-4 h-4" />
                        <span className="text-xs font-medium">{room.capacity}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-gray-600">
                        <Wifi className="w-4 h-4" />
                        <span className="text-xs font-medium">WiFi</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-gray-600">
                        <Coffee className="w-4 h-4" />
                        <span className="text-xs font-medium">Kitchen</span>
                      </div>
                    </motion.div>

                    {/* Book Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.8, duration: 0.4 }}
                      className="pt-2"
                    >
                      <Button
                        className="w-full bg-black hover:bg-gray-800 text-white font-medium py-6 rounded-xl transition-all duration-300 group/btn"
                        asChild
                      >
                        <Link href="/">
                          <span className="flex items-center justify-center gap-2">
                            Book Now
                            <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                          </span>
                        </Link>
                      </Button>
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-20 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl font-light mb-4 sm:mb-5 md:mb-6 text-black"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              Ready to book your stay?
            </motion.h2>
            <motion.p
              className="text-sm sm:text-base md:text-lg font-extralight text-gray-500 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
            >
              Experience comfort, community, and unforgettable memories at Haven Hostel.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              <Button
                size="lg"
                className="group bg-yellow hover:bg-yellow/90 text-white font-normal px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 text-sm sm:text-base rounded-full shadow-lg shadow-yellow/20 hover:shadow-xl hover:shadow-yellow/30 transition-all duration-300 focus:ring-0 hover:scale-105 active:scale-95"
                asChild
              >
                <Link href="/">
                  <span className="flex items-center gap-2">
                    Book Now
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

