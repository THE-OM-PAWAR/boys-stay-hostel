'use client';

import { motion } from 'framer-motion';
import { Shield, Bed, Gift, ArrowRight, Lock, Wifi, Users, Star, MapPin, Phone, Mail, Camera, BookOpen, Dumbbell, Utensils, Wind, Droplets, ArrowUpDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function GirlsHostelSection() {
  return (
    <section className="h-screen md:h-auto flex items-center justify-center px-4 sm:px-6 md:px-8 bg-gradient-to-br from-purple-50 via-white to-pink-50 py-8 sm:py-12">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          className="relative w-full max-w-md mx-auto md:max-w-full md:grid md:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl bg-white"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Visual Section - Left on Desktop, Top on Mobile */}
          <div className="relative bg-gradient-to-br from-purple-500 to-pink-500 p-4 sm:p-6 md:p-0 md:h-full md:min-h-[500px]">
            {/* "Premium" Banner */}
            <motion.div
              className="absolute top-0 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-b-2xl bg-purple-700/90 backdrop-blur-sm z-20 md:top-4"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="text-white text-xs font-semibold">Safe & Secure</span>
            </motion.div>

            {/* Main Image - Smaller */}
            <div className="relative h-48 sm:h-56 md:h-full w-full rounded-2xl md:rounded-none overflow-hidden mt-6 sm:mt-8 md:mt-0">
              <Image
                src="/images/girlsstay.jpeg"
                alt="Jain Girl's Stay Hostel"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                unoptimized
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent md:bg-gradient-to-l md:from-black/20 md:via-transparent md:to-transparent" />
            </div>

            {/* Overlay Elements */}
            
            {/* Room Icon - Top Left */}
            <motion.div
              className="absolute top-12 sm:top-14 md:top-6 left-4 sm:left-6 md:left-6 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl bg-white shadow-lg flex items-center justify-center z-10"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <Bed className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-purple-600" />
            </motion.div>

            {/* Rating Badge - Top Right */}
            <motion.div
              className="absolute top-12 sm:top-14 md:top-6 right-4 sm:right-6 md:right-6 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl bg-purple-900/80 backdrop-blur-sm shadow-lg flex items-center justify-center z-10"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <Star className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-yellow-400 fill-yellow-400" />
            </motion.div>

            {/* "Girls Stay" Badge - Center Bottom */}
            <motion.div
              className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 px-4 sm:px-5 md:px-6 py-2 md:py-2.5 rounded-xl bg-white/95 backdrop-blur-sm shadow-xl z-10"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 md:w-5 md:h-5 text-purple-600" />
                <span className="text-sm sm:text-base md:text-lg font-semibold text-purple-900">Jain Girls Stay</span>
              </div>
            </motion.div>

            {/* Decorative Elements */}
            <motion.div
              className="absolute top-1/2 right-8 md:right-12 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-white/10 blur-xl z-0"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </div>

          {/* Info Section - Left on Desktop, Top on Mobile - Dark Theme */}
          <div className="bg-gray-900 p-4 sm:p-6 md:p-8 space-y-4 md:flex md:flex-col md:justify-center md:items-start text-left">
            {/* Price/Title Section */}
            <div className="text-left space-y-2">
              <motion.div
                className="inline-block px-4 py-1.5 rounded-lg bg-gray-800"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <span className="text-white text-sm sm:text-base font-semibold">M.P. Nagar, Bhopal</span>
              </motion.div>
              
              <motion.h2
                className="text-2xl sm:text-3xl font-bold text-white"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                Jain Girl's Stay Hostel
              </motion.h2>

              <motion.div
                className="flex items-center justify-start gap-2"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <div className="w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center">
                  <Shield className="w-3 h-3 text-white" />
                </div>
                <span className="text-sm text-gray-300">Safe & Secure</span>
              </motion.div>
            </div>

            {/* Description */}
            <motion.div
              className="text-sm sm:text-base text-gray-400 text-left leading-relaxed max-w-md mx-0 space-y-2"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <p>
                A safe, reliable, and hygienic "home away from home" for girls studying or working in Bhopal. Located in an extremely recognized posh location, accessible from all routes.
              </p>
              <div className="flex items-start gap-2 text-xs text-gray-500 pt-1">
                <MapPin className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                <span>R-62, Zone - II M.P. Nagar, Near Hotel Arya Bhawan, Bhopal, M.P., India</span>
              </div>
            </motion.div>

            {/* Features Icons */}
            <motion.div
              className="flex flex-wrap items-center justify-start gap-3 pt-2"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.1 }}
            >
              {[
                { icon: Camera, label: 'CCTV' },
                { icon: BookOpen, label: 'Library' },
                { icon: Dumbbell, label: 'Gym' },
                { icon: Utensils, label: 'Mess' },
                { icon: Wind, label: 'AC Rooms' },
                { icon: ArrowUpDown, label: 'Lift' },
              ].map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.label} className="flex flex-col items-center gap-1">
                    <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-purple-400" />
                    </div>
                    <span className="text-xs text-gray-500">{feature.label}</span>
                  </div>
                );
              })}
            </motion.div>

            {/* Contact Information */}
            <motion.div
              className="pt-3 space-y-2 border-t border-gray-800"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <div className="flex flex-col gap-2 text-xs text-gray-400">
                <a href="tel:+919826080999" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Phone className="w-3.5 h-3.5" />
                  <span>+91 98260 80999</span>
                </a>
                <a href="tel:+919300909071" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Phone className="w-3.5 h-3.5" />
                  <span>+91 93009 09071</span>
                </a>
                <a href="mailto:info@girlsstayhostel.com" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Mail className="w-3.5 h-3.5" />
                  <span>info@girlsstayhostel.com</span>
                </a>
              </div>
            </motion.div>

            {/* Explore & Location Buttons */}
            <motion.div
              className="pt-2"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.3 }}
            >
              <div className="flex flex-row gap-2">
                <Link href="https://www.girlsstayhostel.com/" className="w-full">
                  <motion.button
                    className="w-full py-2 sm:py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Explore</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </motion.button>
                </Link>
                <a
                  href="https://maps.app.goo.gl/QdKn72AKN3SQpvHbA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <motion.button
                    className="w-full py-2 sm:py-2.5 bg-gradient-to-r from-blue-500 to-green-400 text-white rounded-lg font-semibold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Location</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11.5c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 0v5m0 0a7 7 0 100-14 7 7 0 000 14z" />
                    </svg>
                  </motion.button>
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
