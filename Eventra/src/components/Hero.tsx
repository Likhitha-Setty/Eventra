import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[80vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Event planning background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1B263B] via-[#1B263B]/90 to-[#C084FC]/20"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-[#FF6F61]/10 via-transparent to-[#C084FC]/20"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#C084FC]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#FF6F61]/15 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white mb-8">
            <Sparkles className="w-4 h-4 mr-2 text-[#C084FC]" />
            <span className="text-sm font-medium">Your Dream Event Starts Here</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Plan Your Perfect
            <span className="block bg-gradient-to-r from-[#FF6F61] to-[#C084FC] bg-clip-text text-transparent">
              Event Experience
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            From intimate gatherings to grand celebrations, discover and book the perfect vendors, venues, and services for your special moments.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-gradient-to-r from-[#FF6F61] to-[#C084FC] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl hover:shadow-[#FF6F61]/25 transform hover:scale-105 transition-all duration-300 flex items-center">
              Start Planning
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all duration-300">
              Browse Vendors
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16 pt-8 border-t border-white/10">
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-white">500+</div>
              <div className="text-gray-400 text-sm lg:text-base">Trusted Vendors</div>
            </div>
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-white">2000+</div>
              <div className="text-gray-400 text-sm lg:text-base">Events Planned</div>
            </div>
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-white">98%</div>
              <div className="text-gray-400 text-sm lg:text-base">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-white">24/7</div>
              <div className="text-gray-400 text-sm lg:text-base">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;