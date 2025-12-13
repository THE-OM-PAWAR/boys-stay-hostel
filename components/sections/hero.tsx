'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, MapIcon, MapPin, MessageCircle, Users } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface Room {
  id: string;
  title: string;
  description: string;
  imageCount: number;
  imageUrl: string;
}

const rooms: Room[] = [
  {
    id: '0',
    title: "Boys' Stay Hostel",
    description: 'Spacious, secure, and comfortable living for students in the heart of the city',
    imageCount: 6,
    imageUrl: '/hero.png',
  },
  {
    id: '1',
    title: 'Mess Facility',
    description: 'Nutritious and delicious meals provided daily in our on-site mess',
    imageCount: 5,
    imageUrl: '/images/mess2.jpeg',
  },
  {
      id: '2',
      title: 'Lift Facility',
      description: 'Convenient lift access to all floors',
    imageCount: 10,
    imageUrl: '/images/lift.jpeg',
  },
  {
    id: '5',
    title: 'Lobby',
    description: 'Lobby for the hostels',
    imageCount: 2,
    imageUrl: '/images/lobby.jpg',
  },
  {
    id: '3',
    title: 'Hostels Office',
    description: 'Hostels Office for any queries or assistance',
    imageCount: 2,
    imageUrl: '/images/office.jpeg',
  },
  {
    id: '4',
    title: 'Luxurious Rooms',
    description: 'Spacious and comfortable rooms with modern amenities',
    imageCount: 13,
    imageUrl: '/images/galleryroom9.jpeg',
  },

];

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
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

  const buttonVariants = {
    hidden: { opacity: 0, y: 15, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  const carouselCardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const textOverlayVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.2,
      },
    },
  };

  return (
    <section className="min-h-screen flex flex-col px-4 sm:px-6 md:px-8 lg:px-12 pt-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto w-full h-full flex flex-col">
        {/* Hero Content */}
        <motion.div
          className="flex-shrink-0 max-w-5xl mx-auto text-center pt-4 sm:pt-6 md:pt-8 lg:pt-10 pb-3 sm:pb-4 md:pb-6 relative mt-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="relative">
            <motion.div
              className="inline-block mb-2 sm:mb-3"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <span className="text-xs sm:text-sm uppercase tracking-[0.2em] text-gray-500 font-light">
                Welcome to
              </span>
            </motion.div>

            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light mb-3 sm:mb-4 md:mb-5 leading-[1.1] text-black px-2 sm:px-0 tracking-tight"
              variants={titleVariants}
            >
              <span className="block">Best Hostel in Bhopal</span>
              <span className="block font-normal">MP Nagar</span>
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
              <strong>Luxury boys hostel Bhopal</strong> with secure accommodation, AC rooms, and mess facility.
              <br className="hidden sm:block" />
              <span className="text-gray-400"> <strong>Affordable boys hostel MP Nagar</strong> - Your home away from home.</span>
            </motion.p>

            <motion.div
              className="flex flex-row gap-2 sm:gap-3 justify-center items-center px-2 sm:px-0"
              variants={containerVariants}
            >
              <motion.div variants={buttonVariants}>
                <Button
                  asChild
                  size="sm"
                  className="group bg-yellow hover:bg-yellow/90 text-white font-normal px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 text-xs sm:text-sm rounded-full shadow-lg shadow-yellow/20 hover:shadow-xl hover:shadow-yellow/30 transition-all duration-300 focus:ring-0 hover:scale-105 active:scale-95"
                >
                  <a href="/rooms">
                    <span className="flex items-center gap-1.5">
                      Book Now
                      <ArrowRight className="w-4 h-4 sm:w-4.5 sm:h-4.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </a>
                </Button>
              </motion.div>
              <motion.div variants={buttonVariants}>
                <Button
                  size="sm"
                  variant="outline"
                  className="border border-black text-black font-normal px-2.5 sm:px-3 md:px-8 py-2.5 sm:py-3 md:py-3.5 text-xs sm:text-sm rounded-full bg-transparent hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 focus:ring-0 hover:scale-105 active:scale-95 backdrop-blur-sm flex items-center gap-1.5"
                >
                  <MapPin className="w-5 h-5 text-black/70" />
                  Location
                </Button>
              </motion.div>
              <motion.div variants={buttonVariants}>
                <a
                  href="https://wa.me/919826080999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-green-500 hover:bg-green-600 transition-colors duration-300 shadow-lg group"
                  aria-label="Chat on WhatsApp"
                >
                  <span className="flex items-center justify-center w-full h-full">
                    <svg
                      className="w-5 h-5 transition-transform group-hover/btn:translate-x-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </span>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Room Carousel */}
        <div className="flex-1 relative min-h-0 pb-6 sm:pb-8 md:pb-10 lg:pb-12 pt-2 sm:pt-2 md:pt-2 lg:pt-2 mt-8">
          <Carousel
            opts={{
              align: 'start',
              loop: false,
              dragFree: true,
            }}
            className="w-full h-full min-h-[400px] overflow-visible"
          >
            <CarouselContent className="-ml-2 sm:-ml-3 md:-ml-3 lg:-ml-3 h-full max-h-[400px]">
              {rooms.map((room, index) => (
                <CarouselItem
                  key={room.id}
                  className="pl-2 sm:pl-3 md:pl-3 lg:pl-3 basis-[90%] sm:basis-[75%] md:basis-[280px] lg:basis-[300px] xl:basis-[320px] h-full "
                >
                  <motion.div
                    className="relative group h-full flex flex-col cursor-pointer"
                    variants={carouselCardVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{
                      delay: index * 0.1,
                      duration: 0.6,
                    }}
                    whileHover={{ y: 0 }}
                  >
                    <motion.div
                      className="relative w-full h-[380px] sm:h-[380px] md:h-[380px] lg:h-[380px] xl:h-[400px] overflow-hidden rounded-2xl border-4 border-black"
                      whileHover={{ scale: 1 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Image
                        src={room.imageUrl}
                        alt={`${room.title} - Jain's boys Stay Hostel Bhopal MP Nagar`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 640px) 90vw, (max-width: 768px) 75vw, (max-width: 1024px) 280px, (max-width: 1280px) 300px, 320px"
                        unoptimized
                        priority={room.id === '1'}
                      />
                      
                      {/* Gradient Overlay */}
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-black/60 via-black/30 to-transparent"
                        initial={{ opacity: 0.5 }}
                        whileHover={{ opacity: 0.7 }}
                        transition={{ duration: 0.3 }}
                      />

                      {/* Text Overlay */}
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6 text-white"
                        variants={textOverlayVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{
                          delay: index * 0.1 + 0.3,
                        }}
                      >
                        <motion.h3
                          className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold uppercase tracking-wider mb-2 sm:mb-2.5 md:mb-3"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          {room.title}
                        </motion.h3>
                        <motion.p
                          className="text-xs sm:text-sm md:text-base font-light leading-relaxed mb-2 sm:mb-3 opacity-90 line-clamp-2"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 0.9, y: 0 }}
                          transition={{ delay: index * 0.1 + 0.5, duration: 0.4 }}
                        >
                          {room.description}
                        </motion.p>
                        <motion.div
                          className="flex items-center gap-2 mt-2 sm:mt-3"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: index * 0.1 + 0.6, duration: 0.4 }}
                        >
                          <span className="text-[10px] sm:text-xs md:text-sm uppercase tracking-widest font-light opacity-75">
                            {room.imageCount} IMAGES
                          </span>
                          <motion.div
                            className="h-px flex-1 bg-white/30"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay: index * 0.1 + 0.7, duration: 0.5 }}
                          />
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute bottom-[-50px] right-0 sm:right-4 md:right-6 lg:right-8 xl:right-12 flex gap-2 sm:gap-3 z-10">
              <CarouselPrevious className="relative -right-0 -bottom-0 translate-y-0 translate-x-0 h-9 w-9 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-full bg-black/10 hover:bg-black/20 border-black/20 text-black backdrop-blur-sm shadow-sm transition-all" />
              <CarouselNext className="relative -right-0 -bottom-0 translate-y-0 translate-x-0 h-9 w-9 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-full bg-black/10 hover:bg-black/20 border-black/20 text-black backdrop-blur-sm shadow-sm transition-all" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
