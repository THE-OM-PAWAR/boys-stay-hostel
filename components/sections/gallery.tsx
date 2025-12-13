'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Button } from '../ui/button';

interface GalleryItem {
  id: string;
  title: string;
  imageUrl: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: '1',
    title: 'AC Room Bhopal',
    imageUrl: '/images/room3.jpeg',
  },
  {
    id: '2',
    title: 'Mess Facility',
    imageUrl: '/images/mess2.jpeg',
  },
  {
    id: '3',
    title: 'Hostel Office',
    imageUrl: '/images/office.jpeg',
  },
  {
    id: '4',
    title: 'Lift Facility',
    imageUrl: '/images/lift.jpeg',
  },
  {
    id: '5',
    title: 'AC Room MP Nagar',
    imageUrl: '/images/galleryroom2.jpeg',
  },
  {
    id: '6',
    title: 'Room Interior',
    imageUrl: '/images/interior1.jpeg',
  },
  {
    id: '7',
    title: 'Hostel Interior',
    imageUrl: '/images/interior2.jpeg',
  },
  {
    id: '8',
    title: 'Building Exterior',
    imageUrl: '/images/exterior1.jpeg',
  },
  {
    id: '9',
    title: 'Dining Area',
    imageUrl: '/images/mess1.jpeg',
  },
  {
    id: '10',
    title: 'Entertainment Room',
    imageUrl: '/images/other1.jpeg',
  },
  
 

];

export function GallerySection() {
  return (
    <section id="gallery" className="py-10 sm:py-32 px-4 sm:px-6 bg-white">
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
              Hostel Gallery Bhopal
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
            View photos of AC rooms, gym, yoga room, and mess facility at the best boys hostel in Bhopal MP Nagar.
          </motion.p>
        </motion.div>

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
              {galleryItems.map((item, index) => (
                <CarouselItem
                  key={item.id}
                  className="pl-3 sm:pl-4 basis-[280px] sm:basis-[320px]"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative overflow-hidden rounded-lg cursor-pointer"
                  >
                    <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-gray-100">
                      <Image
                        src={item.imageUrl}
                        alt={`${item.title} - Boys Hostel Bhopal MP Nagar`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 640px) 280px, 320px"
                        unoptimized
                      />

                      {/* Yellow accent on hover */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-yellow opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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

        <motion.div
          className="mt-12 sm:mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button
              size="lg"
              className="group bg-yellow hover:bg-yellow/90 text-black font-medium px-8 py-6 rounded-full shadow-lg shadow-yellow/20 hover:shadow-xl hover:shadow-yellow/30 transition-all duration-300 hover:scale-105 active:scale-95"
              asChild
            >
              <Link href="/gallery">
                <span className="flex items-center gap-2">
                  Explore More
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
