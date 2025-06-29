import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1B263B] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-[#FF6F61] to-[#C084FC] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-[#FF6F61] to-[#C084FC] bg-clip-text text-transparent">
                Eventra
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Your trusted partner in creating unforgettable events. From intimate gatherings to grand celebrations, we connect you with the best vendors and services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-[#FF6F61] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-[#FF6F61] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-[#FF6F61] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-[#FF6F61] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <nav className="space-y-2">
              <a href="#" className="block text-gray-300 hover:text-[#FF6F61] transition-colors">Browse Vendors</a>
              <a href="#" className="block text-gray-300 hover:text-[#FF6F61] transition-colors">Event Planning</a>
              <a href="#" className="block text-gray-300 hover:text-[#FF6F61] transition-colors">Become a Vendor</a>
              <a href="#" className="block text-gray-300 hover:text-[#FF6F61] transition-colors">Help Center</a>
              <a href="#" className="block text-gray-300 hover:text-[#FF6F61] transition-colors">About Us</a>
            </nav>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Categories</h3>
            <nav className="space-y-2">
              <a href="#" className="block text-gray-300 hover:text-[#FF6F61] transition-colors">Venues</a>
              <a href="#" className="block text-gray-300 hover:text-[#FF6F61] transition-colors">Catering</a>
              <a href="#" className="block text-gray-300 hover:text-[#FF6F61] transition-colors">Photography</a>
              <a href="#" className="block text-gray-300 hover:text-[#FF6F61] transition-colors">Entertainment</a>
              <a href="#" className="block text-gray-300 hover:text-[#FF6F61] transition-colors">Decoration</a>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-[#FF6F61]" />
                <span className="text-gray-300">123 Event Street, NY 10001</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#FF6F61]" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#FF6F61]" />
                <span className="text-gray-300">hello@eventra.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Eventra. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-[#FF6F61] text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-[#FF6F61] text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-[#FF6F61] text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;