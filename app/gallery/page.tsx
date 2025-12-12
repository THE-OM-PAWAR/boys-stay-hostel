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
    id: '2',
    title: 'Modern Room Interior',
    category: 'interior',
    imageUrl: '/images/room3.jpeg',
    aspectRatio: 'portrait',
  },
  {
    id: '2.1',
    title: 'Modern Room Interior',
    category: 'interior',
    imageUrl: '/images/galleryroom2.jpeg',
    aspectRatio: 'portrait',
  },
  {
    id: '2.2',
    title: 'Modern Room Interior',
    category: 'interior',
    imageUrl: '/images/galleryroom9.jpeg',
    aspectRatio: 'portrait',
  },
  {
    id: '2.3',
    title: 'Modern Room Interior',
    category: 'interior',
    imageUrl: '/images/galleryroom3.jpeg',
    aspectRatio: 'portrait',
  },
  {
    id: '2.4',
    title: 'Modern Room Interior',
    category: 'interior',
    imageUrl: '/images/galleryroom4.jpeg',
    aspectRatio: 'portrait',
  },
  {
    id: '2.5',
    title: 'Modern Room Interior',
    category: 'interior',
    imageUrl: '/images/galleryroom5.jpeg',
    aspectRatio: 'portrait',
  },
  {
    id: '2.6',
    title: 'Modern Room Interior',
    category: 'interior',
    imageUrl: '/images/galleryroom6.jpeg',
    aspectRatio: 'portrait',
  },
  {
    id: '2.7',
    title: 'Modern Room Interior',
    category: 'interior',
    imageUrl: '/images/galleryroom7.jpeg',
    aspectRatio: 'portrait',
  },
  {
    id: '2.8',
    title: 'Modern Room Interior',
    category: 'interior',
    imageUrl: '/images/galleryroom8.jpeg',
    aspectRatio: 'portrait',
  },
  {
    id: '2.9',
    title: 'Modern Room Interior',
    category: 'interior',
    imageUrl: '/images/interior1.jpeg',
    aspectRatio: 'portrait',
  },
  {
    id: '2.10',
    title: 'Modern Room Interior',
    category: 'interior',
    imageUrl: '/images/interior2.jpeg',
    aspectRatio: 'portrait',
  },
  {
    id: '2.11',
    title: 'Modern Room Interior',
    category: 'interior',
    imageUrl: '/images/interior3.jpeg',
    aspectRatio: 'portrait',
  },
  {
    id: '2.12',
    title: 'Modern Room Interior',
    category: 'interior',
    imageUrl: '/images/interior4.jpeg',
    aspectRatio: 'portrait',
  },
  {
    id: '2.13',
    title: 'Modern Room Interior',
    category: 'interior',
    imageUrl: '/images/interior5.jpeg',
    aspectRatio: 'portrait',
  },


  //exterior images
  
  {
    id: '3',
    title: 'Rooftop Terrace',
    category: 'exterior',
    imageUrl: '/images/boysstay.jpeg',
    aspectRatio: 'landscape',
  },
  {
    id: '3.1',
    title: 'Rooftop Terrace',
    category: 'exterior',
    imageUrl: '/images/exterior1.jpeg',
    aspectRatio: 'landscape',
  },
  {
    id: '3.2',
    title: 'Rooftop Terrace',
    category: 'exterior',
    imageUrl: '/images/exterior2.jpeg',
    aspectRatio: 'landscape',
  },
  {
    id: '3.3',
    title: 'Rooftop Terrace',
    category: 'exterior',
    imageUrl: '/images/exterior3.jpeg',
    aspectRatio: 'landscape',
  },

  //mess images
  {
    id: '4',
    title: 'Shared Kitchen',
    category: 'mess',
    imageUrl: '/images/mess2.jpeg',
    aspectRatio: 'square',
  },
  {
    id: '4.1',
    title: 'Shared Kitchen',
    category: 'mess',
    imageUrl: '/images/mess1.jpeg',
    aspectRatio: 'square',
  },
  {
    id: '4.2',
    title: 'Shared Kitchen',
    category: 'mess',
    imageUrl: '/images/gallerymess2.jpeg',
    aspectRatio: 'square',
  },

  //others
    {
      id: '5',
      title: 'Social Events Space',
      category: 'others',
      imageUrl: '/images/other1.jpeg',
      aspectRatio: 'portrait',
    },
    {
      id: '5.1',
      title: 'Social Events Space',
      category: 'others',
      imageUrl: '/images/other2.jpeg',
      aspectRatio: 'portrait',
    },
    {
      id: '5.2',
      title: 'Social Events Space',
      category: 'others',
      imageUrl: '/images/other3.jpeg',
      aspectRatio: 'portrait',
    },
    {
      id: '5.3',
      title: 'Social Events Space',
      category: 'others',
      imageUrl: '/images/other4.jpeg',
      aspectRatio: 'portrait',
    },
    {
      id: '5.4',
      title: 'Social Events Space',
      category: 'others',
      imageUrl: '/images/other5.jpeg',
      aspectRatio: 'portrait',
    },
    {
      id: '5.5',
      title: 'Social Events Space',
      category: 'others',
      imageUrl: '/images/other6.jpeg',
      aspectRatio: 'portrait',
    },
    {
      id: '5.6',
      title: 'Social Events Space',
      category: 'others',
      imageUrl: '/images/other7.jpeg',
      aspectRatio: 'portrait',
    },
    {
      id: '5.7',
      title: 'Social Events Space',
      category: 'others',
      imageUrl: '/images/other8.jpeg',
      aspectRatio: 'portrait',
    },
    {
      id: '5.8',
      title: 'Social Events Space',
      category: 'others',
      imageUrl: '/images/other9.jpeg',
      aspectRatio: 'portrait',
    },
    {
      id: '5.9',
      title: 'Social Events Space',
      category: 'others',
      imageUrl: '/images/other10.jpeg',
      aspectRatio: 'portrait',
    },
    {
      id: '5.10',
      title: 'Social Events Space',
      category: 'others',
      imageUrl: '/images/other11.jpeg',
      aspectRatio: 'portrait',
    },
    {
      id: '5.11',
      title: 'Social Events Space',
      category: 'others',
      imageUrl: '/images/other12.jpeg',
      aspectRatio: 'portrait',
    },
    {
      id: '5.12',
      title: 'Social Events Space',
      category: 'others',
      imageUrl: '/images/other13.jpeg',
      aspectRatio: 'portrait',
    },
  
  
 
 
];

const categories = ['All', 'interior', 'exterior', 'mess', 'others'];

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

