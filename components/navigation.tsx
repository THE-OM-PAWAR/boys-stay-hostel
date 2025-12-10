'use client';

import { useState } from 'react';
import Link from 'next/link';
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
  { href: '/#rooms', label: 'Rooms' },
  { href: '/#amenities', label: 'Amenities' },
  { href: '/#gallery', label: 'Gallery' },
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
              className="flex items-center gap-2 text-lg sm:text-xl font-semibold text-black group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Home className="w-5 h-5 sm:w-6 sm:h-6 transition-colors group-hover:text-yellow" />
              </motion.div>
              <motion.span
                className="hidden sm:inline"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                Haven Hostel
              </motion.span>
              <motion.span
                className="sm:hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                Haven
              </motion.span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            className="hidden lg:flex items-center gap-1"
            variants={navVariants}
            initial="hidden"
            animate="visible"
          >
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
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <SheetTitle className="text-left text-xl font-semibold">
                      Menu
                    </SheetTitle>
                  </motion.div>
                </SheetHeader>
                <nav className="flex flex-col gap-2 mt-8">
                  <AnimatePresence>
                    {navLinks.map((link, index) => (
                      <motion.div
                        key={link.href}
                        variants={mobileItemVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50 rounded-md transition-colors"
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navLinks.length * 0.1 + 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-4"
                  >
                    <Link
                      href="/contact"
                      onClick={() => setIsOpen(false)}
                    >
                      <Button
                        size="lg"
                        className="w-full bg-black hover:bg-black/90 text-white font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                      >
                        <Mail className="w-4 h-4 mr-2" />
                        Contact
                      </Button>
                    </Link>
                  </motion.div>
                </nav>
              </SheetContent>
            </Sheet>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}
