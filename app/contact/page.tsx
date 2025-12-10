'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

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
    <main className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-6">Get in Touch</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-3">
            <Card className="p-10 rounded-3xl border-gray-100 shadow-sm">
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
                  className="w-full bg-black hover:bg-black/90 rounded-xl"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>

          <div className="md:col-span-2 space-y-6">
            <Card className="p-8 rounded-3xl border-gray-100 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-[#fca311]/10 flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-[#fca311]" />
              </div>
              <h3 className="font-semibold mb-2">Email Us</h3>
              <p className="text-sm text-gray-600">hello@havenhostel.com</p>
            </Card>

            <Card className="p-8 rounded-3xl border-gray-100 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-[#fca311]/10 flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-[#fca311]" />
              </div>
              <h3 className="font-semibold mb-2">Call Us</h3>
              <p className="text-sm text-gray-600">+1 (555) 123-4567</p>
            </Card>

            <Card className="p-8 rounded-3xl border-gray-100 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-[#fca311]/10 flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-[#fca311]" />
              </div>
              <h3 className="font-semibold mb-2">Visit Us</h3>
              <p className="text-sm text-gray-600">
                123 Travel Street
                <br />
                Downtown District
                <br />
                City, State 12345
              </p>
            </Card>
          </div>
        </div>

        <div className="mt-20 bg-gray-50 rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to book?</h2>
          <p className="text-gray-600 mb-8">
            Don't wait! Secure your spot at Haven Hostel today.
          </p>
          <Button
            size="lg"
            className="bg-[#fca311] hover:bg-[#fca311]/90 text-black font-medium px-8 rounded-xl"
          >
            Book Your Stay
          </Button>
        </div>
      </div>
    </main>
  );
}
