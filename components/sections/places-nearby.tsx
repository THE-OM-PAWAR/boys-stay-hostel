'use client';

import { motion } from 'framer-motion';
import { MapPin, Coffee, ShoppingBag, Camera, Utensils, Music } from 'lucide-react';

interface Place {
  id: string;
  name: string;
  category: string;
  distance: string;
  icon: typeof MapPin;
}

const nearbyPlaces: Place[] = [
  {
    id: '1',
    name: 'Downtown Market',
    category: 'Shopping',
    distance: '0.5 km',
    icon: ShoppingBag,
  },
  {
    id: '2',
    name: 'City Park',
    category: 'Recreation',
    distance: '0.8 km',
    icon: MapPin,
  },
  {
    id: '3',
    name: 'Art Gallery',
    category: 'Culture',
    distance: '1.2 km',
    icon: Camera,
  },
  {
    id: '4',
    name: 'Local Café',
    category: 'Dining',
    distance: '0.3 km',
    icon: Coffee,
  },
  {
    id: '5',
    name: 'Restaurant Row',
    category: 'Dining',
    distance: '0.6 km',
    icon: Utensils,
  },
  {
    id: '6',
    name: 'Music Venue',
    category: 'Entertainment',
    distance: '1.0 km',
    icon: Music,
  },
];

export function PlacesNearbySection() {
  return (
    <section id="places-nearby" className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-10 sm:mb-12 relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >


          {/* Main Heading */}
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 relative inline-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent">
              Places Nearby
            </span>
            {/* Underline accent */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-yellow to-transparent"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            />
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Discover the best spots around our hostel
          </motion.p>
        </motion.div>

        {/* Places Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {nearbyPlaces.map((place, index) => {
            const Icon = place.icon;
            return (
              <motion.div
                key={place.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="group"
              >
                <div className="relative p-4 sm:p-5 rounded-xl bg-white border border-gray-100 hover:border-yellow/30 hover:shadow-lg transition-all duration-300 h-full flex flex-col items-center text-center">
                  {/* Yellow accent bar */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-yellow to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Icon */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-yellow/10 flex items-center justify-center mb-3 group-hover:bg-yellow/20 transition-colors duration-300">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-yellow" />
                  </div>

                  {/* Content */}
                  <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1 line-clamp-2">
                    {place.name}
                  </h3>
                  <p className="text-xs text-gray-500 mb-2">{place.category}</p>
                  <div className="flex items-center gap-1 text-xs text-gray-400 mt-auto">
                    <MapPin className="w-3 h-3" />
                    <span>{place.distance}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

