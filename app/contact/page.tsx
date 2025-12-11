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
    console.log('Form submitted:', formData);
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
            Get in Touch
          </motion.h1>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8">
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <Card className="p-8 sm:p-10 rounded-3xl border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <Input
                    type="text"
                    placeholder="John Doe"
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
                    placeholder="john@example.com"
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
                    placeholder="Tell us how we can help..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="rounded-xl border-gray-200 min-h-[200px]"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-black hover:bg-black/90 rounded-xl group/btn transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Send className="w-4 h-4 mr-2 transition-transform group-hover/btn:translate-x-1" />
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>

          <div className="md:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Card className="group relative p-8 rounded-3xl border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden bg-gradient-to-br from-white to-gray-50/50">
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
                <div className="relative">
                  <motion.div
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow to-yellow/80 flex items-center justify-center mb-6 shadow-lg shadow-yellow/20 group-hover:shadow-xl group-hover:shadow-yellow/30 transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Mail className="w-7 h-7 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-black transition-colors">
                    Email Us
                  </h3>
                  <a
                    href="mailto:hello@havenhostel.com"
                    className="text-base text-gray-700 hover:text-yellow transition-colors duration-300 font-medium block"
                  >
                    hello@havenhostel.com
                  </a>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Clock className="w-3.5 h-3.5" />
                      <span>Response within 24 hours</span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Card className="group relative p-8 rounded-3xl border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden bg-gradient-to-br from-white to-gray-50/50">
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
                <div className="relative">
                  <motion.div
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow to-yellow/80 flex items-center justify-center mb-6 shadow-lg shadow-yellow/20 group-hover:shadow-xl group-hover:shadow-yellow/30 transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                  >
                    <Phone className="w-7 h-7 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-black transition-colors">
                    Call Us
                  </h3>
                  <a
                    href="tel:+15551234567"
                    className="text-base text-gray-700 hover:text-yellow transition-colors duration-300 font-medium block"
                  >
                    +1 (555) 123-4567
                  </a>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Clock className="w-3.5 h-3.5" />
                      <span>Mon-Sun, 9AM - 8PM EST</span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Card className="group relative p-8 rounded-3xl border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden bg-gradient-to-br from-white to-gray-50/50">
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
                <div className="relative">
                  <motion.div
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow to-yellow/80 flex items-center justify-center mb-6 shadow-lg shadow-yellow/20 group-hover:shadow-xl group-hover:shadow-yellow/30 transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <MapPin className="w-7 h-7 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-black transition-colors">
                    Visit Us
                  </h3>
                  <div className="text-base text-gray-700 space-y-1 font-medium">
                    <p>123 Travel Street</p>
                    <p>Downtown District</p>
                    <p>City, State 12345</p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Globe className="w-3.5 h-3.5" />
                      <span>Open for tours daily</span>
                    </div>
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
            Ready to book?
          </motion.h2>
          <motion.p
            className="text-gray-600 mb-8 text-lg"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            Don't wait! Secure your spot at Haven Hostel today.
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
