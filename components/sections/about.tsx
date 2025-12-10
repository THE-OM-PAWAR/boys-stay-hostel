'use client';

import { motion } from 'framer-motion';

export function AboutSection() {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-light mb-3 sm:mb-4 tracking-tight"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            About Haven
          </motion.h2>
          <motion.div
            className="w-12 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto mb-4 sm:mb-5"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 48, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          />
          <motion.p
            className="text-sm sm:text-base font-extralight text-gray-500 leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            We believe travel should be accessible, comfortable, and memorable.
            <br className="hidden sm:block" />
            <span className="text-gray-400"> Our hostel combines modern amenities with a warm, welcoming atmosphere.</span>
            <br className="hidden sm:block" />
            <br className="hidden sm:block" />
            Founded in 2018, Haven Hostel was born from a passion for bringing travelers together. 
            Nestled in the heart of the city, we offer a home away from home where every traveler 
            feels welcomed and valued.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
