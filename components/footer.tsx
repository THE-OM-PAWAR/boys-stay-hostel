import Link from 'next/link';
import { Home, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <Link href="/" className="flex items-center gap-2 text-xl font-semibold mb-4">
              <Home className="w-6 h-6" />
              Haven Hostel
            </Link>
            <p className="text-sm text-gray-600 leading-relaxed">
              Your home away from home. Experience comfort, community, and
              unforgettable memories.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#about" className="text-sm text-gray-600 hover:text-black transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#rooms" className="text-sm text-gray-600 hover:text-black transition-colors">
                  Our Rooms
                </Link>
              </li>
              <li>
                <Link href="/#amenities" className="text-sm text-gray-600 hover:text-black transition-colors">
                  Amenities
                </Link>
              </li>
              <li>
                <Link href="/#gallery" className="text-sm text-gray-600 hover:text-black transition-colors">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>123 Travel Street</li>
              <li>Downtown District</li>
              <li>City, State 12345</li>
              <li className="pt-2">
                <a href="mailto:hello@havenhostel.com" className="hover:text-black transition-colors">
                  hello@havenhostel.com
                </a>
              </li>
              <li>
                <a href="tel:+15551234567" className="hover:text-black transition-colors">
                  +1 (555) 123-4567
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600">
            © 2024 Haven Hostel. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-600">
            <a href="#" className="hover:text-black transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-black transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-black transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
