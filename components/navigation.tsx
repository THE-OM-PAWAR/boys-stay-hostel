'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Menu, X, Home, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '/#about', label: 'About' },
  { href: '/rooms', label: 'Rooms' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/#amenities', label: 'Amenities' },
  { href: '/#places-nearby', label: 'Places Nearby' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md"
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div variants={itemVariants}>
            <Link
              href="/"
              className="flex items-center group"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="relative h-10 sm:h-12 w-auto"
              >
                <Image
                  src="/logo.svg"
                  alt="Jain's boys Stay - A Luxury Boys Hostel"
                  width={291}
                  height={99}
                  className="h-full w-auto object-contain mix-blend-hard-light"
                  priority
                />
              </motion.div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            className="hidden lg:flex items-center gap-1"
            variants={navVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Home Button */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href="/"
                className="relative px-4 py-2 text-sm font-medium text-gray-700 hover:text-black transition-colors rounded-md hover:bg-gray-50 group flex items-center gap-1.5"
              >
                <Home className="w-4 h-4 group-hover:text-yellow transition-colors" />
                <span>Home</span>
                <motion.span
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>

            {navLinks.map((link, index) => (
              <motion.div
                key={link.href}
                variants={itemVariants}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-light text-gray-700 hover:text-black transition-colors rounded-md hover:bg-gray-50 group"
                >
                  {link.label}
                  <motion.span
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            ))}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Link href="/contact" className="ml-2">
                <Button
                  size="sm"
                  className="bg-black hover:bg-black/90 text-white font-medium h-9 px-4 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Contact
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.div
            className="lg:hidden"
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 text-gray-700 hover:text-black hover:bg-gray-100 transition-colors"
                  aria-label="Open menu"
                >
                  <AnimatePresence mode="wait">
                    {isOpen ? (
                      <motion.div
                        key="close"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <X className="h-5 w-5" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="menu"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Menu className="h-5 w-5" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0">
                {/* Animated background gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-yellow/5 via-transparent to-transparent pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
                
                <div className="relative h-full flex flex-col">
                  <SheetHeader className="px-6 pt-6 pb-4 border-b border-gray-100">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                    >
                      <SheetTitle className="text-left text-2xl font-bold bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
                        Menu
                      </SheetTitle>
                      <motion.p
                        className="text-sm text-gray-500 mt-1"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                      >
                        Navigate to sections
                      </motion.p>
                    </motion.div>
                  </SheetHeader>
                  
                  <nav className="flex-1 flex flex-col gap-1 px-4 py-6 overflow-y-auto">
                    {/* Home Button */}
                    <motion.div
                      initial={{ opacity: 0, x: -30, scale: 0.9 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.15, type: 'spring', stiffness: 200 }}
                      whileHover={{ x: 8, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link
                        href="/"
                        onClick={() => setIsOpen(false)}
                        className="group relative block px-4 py-3.5 text-base font-semibold text-gray-900 hover:text-black hover:bg-yellow/10 rounded-lg transition-all duration-300 border border-transparent hover:border-yellow/20"
                      >
                        <div className="flex items-center gap-3">
                          <motion.div
                            className="w-10 h-10 rounded-lg bg-yellow/10 group-hover:bg-yellow/20 flex items-center justify-center transition-colors"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                            <Home className="w-5 h-5 text-yellow" />
                          </motion.div>
                          <span>Home</span>
                        </div>
                        <motion.div
                          className="absolute left-0 top-0 bottom-0 w-1 bg-yellow rounded-r-full"
                          initial={{ scaleY: 0 }}
                          whileHover={{ scaleY: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      </Link>
                    </motion.div>

                    {/* Navigation Links */}
                    <AnimatePresence>
                      {navLinks.map((link, index) => (
                        <motion.div
                          key={link.href}
                          initial={{ opacity: 0, x: -30, scale: 0.9 }}
                          animate={{ opacity: 1, x: 0, scale: 1 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ 
                            duration: 0.4, 
                            delay: 0.2 + index * 0.08,
                            type: 'spring',
                            stiffness: 200,
                            damping: 20
                          }}
                          whileHover={{ x: 8, scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Link
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="group relative block px-4 py-3.5 text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50 rounded-lg transition-all duration-300 border border-transparent hover:border-gray-200"
                          >
                            <div className="flex items-center gap-3">
                              <motion.div
                                className="w-2 h-2 rounded-full bg-yellow opacity-0 group-hover:opacity-100 transition-opacity"
                                whileHover={{ scale: [1, 1.5, 1] }}
                                transition={{ duration: 0.5, repeat: Infinity }}
                              />
                              <span>{link.label}</span>
                            </div>
                            <motion.div
                              className="absolute left-0 top-0 bottom-0 w-1 bg-yellow rounded-r-full"
                              initial={{ scaleY: 0 }}
                              whileHover={{ scaleY: 1 }}
                              transition={{ duration: 0.3 }}
                            />
                          </Link>
                        </motion.div>
                      ))}
                    </AnimatePresence>

                    {/* Divider */}
                    <motion.div
                      className="my-4 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                    />

                    {/* Contact Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 20, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: 0.7,
                        type: 'spring',
                        stiffness: 200
                      }}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="mt-2"
                    >
                      <Link
                        href="/contact"
                        onClick={() => setIsOpen(false)}
                      >
                        <Button
                          size="lg"
                          className="w-full bg-gradient-to-r from-black to-gray-800 hover:from-gray-800 hover:to-black text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-xl group"
                        >
                          <Mail className="w-4 h-4 mr-2 transition-transform group-hover:translate-x-1" />
                          Contact Us
                        </Button>
                      </Link>
                    </motion.div>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}
