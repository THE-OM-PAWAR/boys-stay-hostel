'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

interface GalleryImage {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  aspectRatio: 'square' | 'portrait' | 'landscape';
}

const galleryImages: GalleryImage[] = [
  {
    id: '1',
    title: 'Cozy Common Area',
    category: 'Common Spaces',
    imageUrl: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&h=800&fit=crop',
    aspectRatio: 'square',
  },
  {
    id: '2',
    title: 'Modern Room Interior',
    category: 'Rooms',
    imageUrl: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=1200&fit=crop',
    aspectRatio: 'portrait',
  },
  {
    id: '3',
    title: 'Rooftop Terrace',
    category: 'Outdoor',
    imageUrl: 'https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?w=1200&h=800&fit=crop',
    aspectRatio: 'landscape',
  },
  {
    id: '4',
    title: 'Shared Kitchen',
    category: 'Common Spaces',
    imageUrl: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=800&fit=crop',
    aspectRatio: 'square',
  },
  {
    id: '5',
    title: 'Social Events Space',
    category: 'Common Spaces',
    imageUrl: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&h=1200&fit=crop',
    aspectRatio: 'portrait',
  },
  {
    id: '6',
    title: 'City Views',
    category: 'Views',
    imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&h=800&fit=crop',
    aspectRatio: 'landscape',
  },
  {
    id: '7',
    title: 'Comfortable Bedroom',
    category: 'Rooms',
    imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=800&fit=crop',
    aspectRatio: 'square',
  },
  {
    id: '8',
    title: 'Study Area',
    category: 'Common Spaces',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=1200&fit=crop',
    aspectRatio: 'portrait',
  },
  {
    id: '9',
    title: 'Evening Ambiance',
    category: 'Rooms',
    imageUrl: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=1200&h=800&fit=crop',
    aspectRatio: 'landscape',
  },
  {
    id: '10',
    title: 'Relaxation Zone',
    category: 'Common Spaces',
    imageUrl: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=800&fit=crop',
    aspectRatio: 'square',
  },
  {
    id: '11',
    title: 'Balcony View',
    category: 'Views',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=1200&fit=crop',
    aspectRatio: 'portrait',
  },
  {
    id: '12',
    title: 'Dining Area',
    category: 'Common Spaces',
    imageUrl: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=1200&h=800&fit=crop',
    aspectRatio: 'landscape',
  },
];

const categories = ['All', 'Rooms', 'Common Spaces', 'Outdoor', 'Views'];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filteredImages =
    selectedCategory === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
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

  // All images use the same aspect ratio for uniform grid
  const getAspectRatioClass = () => {
    return 'aspect-square';
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="max-w-5xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
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
              <span className="block">Photo Gallery</span>
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              Take a peek at our spaces. See where you'll stay, relax, and connect
              <br className="hidden sm:block" />
              <span className="text-gray-400"> with fellow travelers.</span>
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="pb-8 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="flex flex-wrap justify-center gap-3 sm:gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-black text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-20 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key={selectedCategory}
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative overflow-hidden rounded-xl cursor-pointer"
                whileHover={{ y: -8, scale: 1.02 }}
                onClick={() => setSelectedImage(image)}
              >
                <div className={`relative ${getAspectRatioClass()} overflow-hidden rounded-xl bg-gray-100`}>
                  <Image
                    src={image.imageUrl}
                    alt={image.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    unoptimized
                    priority={index < 3}
                  />

                  {/* Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Content Overlay */}
                  <motion.div
                    className="absolute inset-0 flex items-end p-6 pointer-events-none"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-full">
                      <h3 className="text-white font-semibold text-lg mb-1">{image.title}</h3>
                      <p className="text-white/80 text-sm">{image.category}</p>
                    </div>
                    <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <ZoomIn className="w-5 h-5 text-white" />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            className="relative max-w-6xl max-h-[90vh] w-full"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors z-10"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            <div className="relative w-full h-[80vh] rounded-lg overflow-hidden">
              <Image
                src={selectedImage.imageUrl}
                alt={selectedImage.title}
                fill
                className="object-contain"
                unoptimized
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-white text-2xl font-semibold mb-1">{selectedImage.title}</h3>
              <p className="text-white/70">{selectedImage.category}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </main>
  );
}

