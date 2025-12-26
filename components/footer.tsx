'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Home, Mail, Instagram, Facebook, Twitter, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export function Footer() {
  const quickLinks = [
    { href: '/#about', label: 'About Us' },
    { href: '/rooms', label: 'Our Rooms' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/#amenities', label: 'Amenities' },
    { href: '/#places-nearby', label: 'Places Nearby' },
    { href: '/contact', label: 'Contact Us' },
  ];



  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.footer
      className="bg-gradient-to-b from-white to-gray-50 border-t border-gray-200 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerVariants}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-yellow/5 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-yellow/5 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 3,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12">
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="flex items-center mb-4 group"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="relative h-12 sm:h-16 w-auto mix-blend-hard-light"
              >
                <Image
                  src="/logo mini.svg"
                  alt="Jain boys Stay - A Luxury Boys Hostel"
                  width={441}
                  height={179}
                  className="h-full w-auto object-contain mix-blend-hard-light"
                  priority
                />
              </motion.div>
            </Link>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6 max-w-sm">
              Best hostel in Bhopal, MP Nagar. Luxury boys hostel with secure accommodation, affordable rates, AC rooms, and mess facility. Your home away from home.
            </p>

          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="font-bold text-lg mb-4 text-gray-900">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="group relative text-sm text-gray-600 hover:text-black transition-colors inline-flex items-center gap-2"
                  >
                    <motion.span
                      className="w-1.5 h-1.5 rounded-full bg-yellow opacity-0 group-hover:opacity-100 transition-opacity"
                      whileHover={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 0.5 }}
                    />
                    <span className="relative">
                      {link.label}
                      <motion.span
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow origin-left"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h3 className="font-bold text-lg mb-4 text-gray-900">Contact</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <motion.li
                className="flex items-start gap-2"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.6 }}
              >
                <MapPin className="w-4 h-4 text-yellow mt-0.5 flex-shrink-0" />
                <div itemScope itemType="https://schema.org/PostalAddress">
                  <a
                    href="https://maps.app.goo.gl/hH7f44Gk7T1Re5iY9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-black transition-colors group/link"
                  >
                    <p itemProp="streetAddress" className="group-hover/link:underline">Plot No. 106, Near Navoday Hospital, Zone-2 M.P. Nagar</p>
                    <p itemProp="addressLocality" className="group-hover/link:underline">Bhopal</p>
                    <p itemProp="addressRegion" className="group-hover/link:underline">Madhya Pradesh <span itemProp="postalCode">462011</span></p>
                    <p itemProp="addressCountry" className="group-hover/link:underline">India</p>
                    <span className="text-xs text-yellow mt-1 inline-block group-hover/link:translate-x-1 transition-transform">View on Google Maps →</span>
                  </a>
                </div>
              </motion.li>
              <motion.li
                className="pt-2"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.7 }}
              >
                <a
                  href="mailto:modi_investmentpoint@yahoo.com"
                  className="flex items-center gap-2 hover:text-black transition-colors group"
                >
                  <Mail className="w-4 h-4 text-yellow group-hover:scale-110 transition-transform" />
                  <span>modi_investmentpoint@yahoo.com</span>
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.8 }}
              >
                <div className="space-y-2">
                  <a
                    href="tel:+919826080999"
                    className="flex items-center gap-2 hover:text-black transition-colors group"
                  >
                    <Phone className="w-4 h-4 text-yellow group-hover:scale-110 transition-transform" />
                    <span>+91 98260 80999</span>
                  </a>
                  <a
                    href="tel:+917554439132"
                    className="flex items-center gap-2 hover:text-black transition-colors group"
                  >
                    <Phone className="w-4 h-4 text-yellow group-hover:scale-110 transition-transform" />
                    <span>+91 755 443 9132</span>
                  </a>
                  <a
                    href="tel:+919893016180"
                    className="flex items-center gap-2 hover:text-black transition-colors group"
                  >
                    <Phone className="w-4 h-4 text-yellow group-hover:scale-110 transition-transform" />
                    <span>+91 98930 16180</span>
                  </a>
                  <a
                    href="tel:+917553531925"
                    className="flex items-center gap-2 hover:text-black transition-colors group"
                  >
                    <Phone className="w-4 h-4 text-yellow group-hover:scale-110 transition-transform" />
                    <span>+91 755 353 1925</span>
                  </a>
                </div>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Jain boys Stay. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 sm:gap-6 text-sm text-gray-600 justify-center">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item, index) => (
              <motion.a
                key={item}
                href="#"
                className="hover:text-black transition-colors relative group"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 1 + index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {item}
                <motion.span
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
