'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Bed, Users } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Card } from '@/components/ui/card';

interface Room {
  id: string;
  name: string;
  type: string;
  description: string;
  capacity: string;
  features: string[];
  image?: string;
}

const rooms: Room[] = [
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
    image: '/images/room3.jpeg',
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
              <span className="block">Double & Triple Sharing</span>
              <span className="block font-normal">AC Rooms Bhopal MP Nagar</span>
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
              Book <strong>double sharing and triple sharing AC rooms</strong> at the <strong>best boys hostel in Bhopal MP Nagar</strong>.
              <br className="hidden sm:block" />
              <span className="text-gray-400"> Secure accommodation with modern amenities at <strong>affordable rates</strong>.</span>
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
                  <div className="relative h-[280px] sm:h-[320px] overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                    {room.image ? (
                      <Image
                        src={room.image}
                        alt={`${room.name} - Jain's boys Stay Bhopal MP Nagar`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Bed className="w-12 h-12 text-gray-300" />
                      </div>
                    )}
                    
                    {/* Type Badge */}
                    <motion.div
                      className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 + 0.2, duration: 0.4 }}
                    >
                      <span className="text-sm font-semibold text-black capitalize">{room.type}</span>
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
                        {room.name}
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

                    {/* Capacity and Features */}
                    <motion.div
                      className="space-y-3 pt-2 border-t border-gray-100"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.7, duration: 0.4 }}
                    >
                      <div className="flex items-center gap-1.5 text-gray-600">
                        <Users className="w-4 h-4" />
                        <span className="text-xs font-medium">{room.capacity}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {room.features.slice(0, 4).map((feature, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 text-xs bg-yellow/10 text-gray-700 rounded-md border border-yellow/20 font-medium"
                          >
                            {feature}
                          </span>
                        ))}
                        {room.features.length > 4 && (
                          <span className="px-2.5 py-1 text-xs text-gray-500 font-medium">
                            +{room.features.length - 4} more
                          </span>
                        )}
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
                        <a
                          href={`https://wa.me/919826080999?text=${encodeURIComponent(
                            `Hi, I would like to book the following room at Jain's boys Stay:\n\nRoom: ${room.name}\nType: ${room.type}\nCapacity: ${room.capacity}\nFeatures: ${room.features.join(', ')}\n\nPlease provide details about the booking process.`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="flex items-center justify-center gap-2">
                            Book Now
                            <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                          </span>
                        </a>
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
              Book AC Room at Best Hostel in Bhopal
            </motion.h2>
            <motion.p
              className="text-sm sm:text-base md:text-lg font-extralight text-gray-500 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
            >
              Secure your spot at Jain's boys Stay - luxury boys hostel in Bhopal MP Nagar with AC rooms and modern facilities.
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

