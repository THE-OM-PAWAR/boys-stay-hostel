'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send, Clock, Globe } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format the message with all form data
    const message = `*New Contact Form Submission*

*Name:* ${formData.name}
*Email:* ${formData.email}

*Message:*
${formData.message}

---
Sent from Jain's Boy's Stay Contact Form`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Create WhatsApp URL with phone number +91 98260 80999
    const whatsappUrl = `https://wa.me/919826080999?text=${encodedMessage}`;
    
    // Open WhatsApp in a new window/tab
    window.open(whatsappUrl, '_blank');
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <main className="min-h-screen pt-32 pb-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-black to-gray-800 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            Contact Boy's Stay hostel
          </motion.h1>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Contact Jain's Boy's Stay - the best luxury boys hostel in Bhopal, MP Nagar. Book your stay, inquire about AC rooms, or get directions to our hostel near Navoday Hospital. We respond within 24 hours.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-6">
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <Card className="relative p-6 sm:p-8 rounded-2xl border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white overflow-hidden">
              {/* Animated Background Elements */}
              <motion.div
                className="absolute top-0 right-0 w-40 h-40 bg-yellow/5 rounded-full -mr-20 -mt-20"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <motion.div
                className="absolute bottom-0 left-0 w-32 h-32 bg-yellow/5 rounded-full -ml-16 -mb-16"
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.15, 0.35, 0.15],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1,
                }}
              />
              <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                <div>
                    <label className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <Input
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="rounded-xl border-gray-200"
                    required
                  />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="rounded-xl border-gray-200"
                    required
                  />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    placeholder="Inquire about rooms, booking, or facilities at our hostel in Bhopal..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="rounded-xl border-gray-200 min-h-[150px]"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-yellow hover:bg-yellow/90 text-black font-medium px-8 py-6 rounded-xl shadow-lg shadow-yellow/20 hover:shadow-xl hover:shadow-yellow/30 transition-all duration-300 hover:scale-105 active:scale-95 group/btn"
                >
                  <svg
                    className="w-5 h-5 mr-2 transition-transform group-hover/btn:translate-x-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>

          <div className="md:col-span-2 space-y-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Card className="group relative p-5 rounded-2xl border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden bg-gradient-to-br from-white to-gray-50/50">
                {/* Animated Background Elements */}
                <motion.div
                  className="absolute top-0 right-0 w-24 h-24 bg-yellow/5 rounded-full -mr-12 -mt-12"
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
                <motion.div
                  className="absolute bottom-0 left-0 w-16 h-16 bg-yellow/5 rounded-full -ml-8 -mb-8"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 0.5,
                  }}
                />
                {/* Floating Particles */}
                <motion.div
                  className="absolute top-4 right-4 w-2 h-2 bg-yellow/30 rounded-full"
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                <motion.div
                  className="absolute bottom-6 right-8 w-1.5 h-1.5 bg-yellow/40 rounded-full"
                  animate={{
                    y: [0, -8, 0],
                    opacity: [0.4, 0.8, 0.4],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 0.3,
                  }}
                />
                <div className="relative">
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow to-yellow/80 flex items-center justify-center mb-4 shadow-lg shadow-yellow/20"
                    whileHover={{ scale: 1.15, rotate: [0, -10, 10, -10, 0] }}
                    animate={{
                      boxShadow: [
                        '0 10px 25px -5px rgba(234, 179, 8, 0.2)',
                        '0 15px 35px -5px rgba(234, 179, 8, 0.3)',
                        '0 10px 25px -5px rgba(234, 179, 8, 0.2)',
                      ],
                    }}
                    transition={{
                      boxShadow: {
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      },
                    }}
                  >
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                    >
                      <Mail className="w-5 h-5 text-white" />
                    </motion.div>
                  </motion.div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 group-hover:text-black transition-colors">
                    Email Best Hostel in Bhopal
                  </h3>
                  <a
                    href="mailto:modi_investmentpoint@yahoo.com"
                    className="text-sm text-gray-700 hover:text-yellow transition-colors duration-300 font-medium block"
                  >
                    modi_investmentpoint@yahoo.com
                  </a>
                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <motion.div
                      className="flex items-center gap-2 text-xs text-gray-500"
                      animate={{
                        opacity: [0.7, 1, 0.7],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    >
                      <Clock className="w-3.5 h-3.5" />
                      <span>Response within 24 hours</span>
                    </motion.div>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Card className="group relative p-5 rounded-2xl border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden bg-gradient-to-br from-white to-gray-50/50">
                {/* Animated Background Elements */}
                <motion.div
                  className="absolute top-0 right-0 w-24 h-24 bg-yellow/5 rounded-full -mr-12 -mt-12"
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
                <motion.div
                  className="absolute bottom-0 left-0 w-16 h-16 bg-yellow/5 rounded-full -ml-8 -mb-8"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 0.5,
                  }}
                />
                {/* Floating Particles */}
                <motion.div
                  className="absolute top-4 right-4 w-2 h-2 bg-yellow/30 rounded-full"
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                <motion.div
                  className="absolute bottom-6 right-8 w-1.5 h-1.5 bg-yellow/40 rounded-full"
                  animate={{
                    y: [0, -8, 0],
                    opacity: [0.4, 0.8, 0.4],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 0.3,
                  }}
                />
                <div className="relative">
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow to-yellow/80 flex items-center justify-center mb-4 shadow-lg shadow-yellow/20"
                    whileHover={{ scale: 1.15, rotate: [0, 10, -10, 10, 0] }}
                    animate={{
                      boxShadow: [
                        '0 10px 25px -5px rgba(234, 179, 8, 0.2)',
                        '0 15px 35px -5px rgba(234, 179, 8, 0.3)',
                        '0 10px 25px -5px rgba(234, 179, 8, 0.2)',
                      ],
                    }}
                    transition={{
                      boxShadow: {
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      },
                    }}
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    >
                      <Phone className="w-5 h-5 text-white" />
                    </motion.div>
                  </motion.div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 group-hover:text-black transition-colors">
                    Call Boys Hostel in MP Nagar Bhopal
                  </h3>
                  <div className="space-y-2">
                    <a
                      href="tel:+919826080999"
                      className="text-sm text-gray-700 hover:text-yellow transition-colors duration-300 font-medium block"
                    >
                      +91 98260 80999
                    </a>
                    <a
                      href="tel:+917554439132"
                      className="text-sm text-gray-700 hover:text-yellow transition-colors duration-300 font-medium block"
                    >
                      +91 755 443 9132
                    </a>
                    <a
                      href="tel:+919893016180"
                      className="text-sm text-gray-700 hover:text-yellow transition-colors duration-300 font-medium block"
                    >
                      +91 98930 16180
                    </a>
                    <a
                      href="tel:+917553531925"
                      className="text-sm text-gray-700 hover:text-yellow transition-colors duration-300 font-medium block"
                    >
                      +91 755 353 1925
                    </a>
                  </div>
                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <motion.div
                      className="flex items-center gap-2 text-xs text-gray-500"
                      animate={{
                        opacity: [0.7, 1, 0.7],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    >
                      <Clock className="w-3.5 h-3.5" />
                      <span>Mon-Sun, 9AM - 8PM IST</span>
                    </motion.div>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Card className="group relative p-5 rounded-2xl border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden bg-gradient-to-br from-white to-gray-50/50">
                {/* Animated Background Elements */}
                <motion.div
                  className="absolute top-0 right-0 w-24 h-24 bg-yellow/5 rounded-full -mr-12 -mt-12"
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
                <motion.div
                  className="absolute bottom-0 left-0 w-16 h-16 bg-yellow/5 rounded-full -ml-8 -mb-8"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 0.5,
                  }}
                />
                {/* Floating Particles */}
                <motion.div
                  className="absolute top-4 right-4 w-2 h-2 bg-yellow/30 rounded-full"
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                <motion.div
                  className="absolute bottom-6 right-8 w-1.5 h-1.5 bg-yellow/40 rounded-full"
                  animate={{
                    y: [0, -8, 0],
                    opacity: [0.4, 0.8, 0.4],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 0.3,
                  }}
                />
                <div className="relative">
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow to-yellow/80 flex items-center justify-center mb-4 shadow-lg shadow-yellow/20"
                    whileHover={{ scale: 1.15, rotate: [0, -10, 10, -10, 0] }}
                    animate={{
                      boxShadow: [
                        '0 10px 25px -5px rgba(234, 179, 8, 0.2)',
                        '0 15px 35px -5px rgba(234, 179, 8, 0.3)',
                        '0 10px 25px -5px rgba(234, 179, 8, 0.2)',
                      ],
                    }}
                    transition={{
                      boxShadow: {
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      },
                    }}
                  >
                    <motion.div
                      animate={{
                        y: [0, -3, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    >
                      <MapPin className="w-5 h-5 text-white" />
                    </motion.div>
                  </motion.div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 group-hover:text-black transition-colors">
                    Visit Boys Hostel Near Navoday Hospital MP Nagar
                  </h3>
                  <div className="text-sm text-gray-700 space-y-0.5 font-medium" itemScope itemType="https://schema.org/PostalAddress">
                    <p itemProp="streetAddress">Plot No. 106, Near Navoday Hospital, Zone-2 M.P. Nagar</p>
                    <p itemProp="addressLocality">Bhopal</p>
                    <p itemProp="addressRegion">Madhya Pradesh <span itemProp="postalCode">462011</span></p>
                    <p itemProp="addressCountry">India</p>
                  </div>
                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <motion.div
                      className="flex items-center gap-2 text-xs text-gray-500"
                      animate={{
                        opacity: [0.7, 1, 0.7],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    >
                      <Globe className="w-3.5 h-3.5" />
                      <span>Open for tours daily</span>
                    </motion.div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="mt-20 bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-3xl p-10 sm:p-12 text-center border border-gray-200/50 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            Book Your Stay at Best Hostel in Bhopal MP Nagar
          </motion.h2>
          <motion.p
            className="text-gray-600 mb-8 text-lg"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            Secure your spot at Jain's Boy's Stay - luxury boys hostel in Bhopal with AC rooms, gym, yoga room, and 24/7 security. Contact us today for booking.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <Button
              size="lg"
              className="bg-yellow hover:bg-yellow/90 text-white font-medium px-8 py-6 rounded-xl shadow-lg shadow-yellow/20 hover:shadow-xl hover:shadow-yellow/30 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Book Your Stay
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
