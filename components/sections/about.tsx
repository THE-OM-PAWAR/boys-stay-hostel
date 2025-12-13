'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function AboutSection() {
  return (
    <section id="about" className="py-8 sm:py-12 md:py-20 px-4 sm:px-6 bg-white relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-4 sm:gap-8 md:gap-12 items-center">
          {/* Image */}
          <motion.div
            className="relative h-[230px] sm:h-[300px] md:h-[360px] rounded-lg overflow-hidden"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Image
              src="/about.png"
              alt="Best Hostel in Bhopal MP Nagar - Jain's boys Stay Hostel Interior"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </motion.div>

          {/* Content */}
          <motion.div
            className="space-y-3 sm:space-y-4 md:space-y-5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.h2
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light tracking-tight text-black"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Best Hostel in Bhopal - Jain's boys Stay Hostel MP Nagar
            </motion.h2>
            <motion.div
              className="w-10 sm:w-12 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: 40, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            />
            <motion.p
              className="text-xs sm:text-sm md:text-base font-extralight text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Jain's boys Stay Hostel is the <strong>best luxury boys hostel in Bhopal</strong>, strategically located in <strong>MP Nagar</strong>. We offer <strong>fully air-cooled campus, AC rooms, gym, yoga room, RO water, WiFi, entertainment room, pure veg hygienic food, 24/7 security, CCTV surveillance, lift facility, power backup, and pick & drop facility</strong>. Our <strong>boys hostel in MP Nagar</strong> provides a comfortable and safe environment for students and working professionals.
            </motion.p>
            <motion.p
              className="text-xs sm:text-sm md:text-base font-extralight text-gray-500 leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              Located at <strong>Plot No. 106, Near Navoday Hospital, Zone-2 M.P. Nagar, Bhopal - 462011</strong>, Jain's boys Stay Hostel has established itself as a <strong>top hostel near MP Nagar Bhopal</strong>. We provide <strong>secure boys hostel Bhopal</strong> facilities with 24/7 security guard, CCTV camera surveillance, AC rooms, pure veg hygienic food, free WiFi, lift access, and modern amenities. Our <strong>affordable boys hostel MP Nagar</strong> ensures every resident feels at home while maintaining the highest standards of comfort and safety.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
