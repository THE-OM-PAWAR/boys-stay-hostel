'use client';

import { motion } from 'framer-motion';
import { MapPin, Shield, Star, Users, Wifi, Utensils } from 'lucide-react';

export function LocalSeoSection() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-black">
            Why Choose Jain's boys Stay Hostel - Best Hostel in Bhopal MP Nagar?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Experience the <strong>best hostel in Bhopal</strong> with premium facilities, secure accommodation, and affordable rates in the heart of <strong>MP Nagar</strong>.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-black">
              Best Hostel in Bhopal - MP Nagar Location
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Jain's boys Stay Hostel is strategically located in <strong>MP Nagar, Bhopal</strong>, making it the <strong>best hostel in Bhopal</strong> for students and working professionals. Our prime location offers easy access to:
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-yellow mt-0.5 flex-shrink-0" />
                <span>Rani Kamlapati Station - 2.0 km</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-yellow mt-0.5 flex-shrink-0" />
                <span>ISBT Bus Stand - 1.5 km</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-yellow mt-0.5 flex-shrink-0" />
                <span>DB City Mall - 1.2 km</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-black">
              Secure Boys Hostel Bhopal
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Safety is our top priority. Our <strong>secure boys hostel Bhopal</strong> provides:
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2">
                <Shield className="w-5 h-5 text-yellow mt-0.5 flex-shrink-0" />
                <span>24/7 Security & CCTV Surveillance</span>
              </li>
              <li className="flex items-start gap-2">
                <Shield className="w-5 h-5 text-yellow mt-0.5 flex-shrink-0" />
                <span>Secure Entry System</span>
              </li>
              <li className="flex items-start gap-2">
                <Shield className="w-5 h-5 text-yellow mt-0.5 flex-shrink-0" />
                <span>Emergency Response Team</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="bg-gradient-to-br from-yellow/10 to-yellow/5 p-8 rounded-2xl border border-yellow/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-6 text-black text-center">
            Luxury Boys Hostel Bhopal - Premium Amenities
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Wifi, title: 'Free High-Speed WiFi', desc: 'Uninterrupted internet connectivity' },
              { icon: Utensils, title: 'Mess Facility', desc: 'Nutritious meals served daily' },
              { icon: Star, title: 'AC Rooms', desc: 'Air-conditioned comfortable rooms' },
              { icon: Users, title: 'Common Areas', desc: 'Spacious common rooms for relaxation' },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white p-5 rounded-lg shadow-md"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Icon className="w-8 h-8 text-yellow mb-3" />
                  <h4 className="font-semibold text-black mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg text-gray-700 mb-4">
            Looking for an <strong>affordable boys hostel MP Nagar</strong>? Jain's boys Stay Hostel offers the best value with premium facilities at competitive rates.
          </p>
          <p className="text-base text-gray-600">
            As the <strong>top hostel near MP Nagar Bhopal</strong>, we ensure your comfort, safety, and convenience. Book your stay at the <strong>best hostel in Bhopal</strong> today!
          </p>
        </motion.div>
      </div>
    </section>
  );
}


