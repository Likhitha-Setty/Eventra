import React from 'react';
import { ArrowRight } from 'lucide-react';
import VendorCard from './VendorCard';
import { mockVendors } from '../data/mockData';

const FeaturedVendors: React.FC = () => {
  // Only show first 3 vendors for simplicity and better responsiveness
  const featuredVendors = mockVendors.slice(0, 3);

  const handleViewAllVendors = () => {
    alert('Navigating to all vendors page...');
    // In a real app, this would navigate to the vendors page
  };

  return (
    <section className="py-16 bg-gradient-to-br from-white via-[#FF6F61]/3 to-[#C084FC]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12">
          <div className="mb-6 lg:mb-0">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1B263B] mb-4">
              Featured Vendors
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl">
              Discover our top-rated, verified vendors who deliver exceptional experiences
            </p>
          </div>
          <button 
            onClick={handleViewAllVendors}
            className="flex items-center space-x-2 text-[#FF6F61] font-semibold hover:text-[#C084FC] transition-all duration-300 bg-white/80 hover:bg-white px-6 py-3 rounded-xl hover:shadow-md transform hover:scale-105 backdrop-blur-sm border border-[#FF6F61]/10"
          >
            <span>View All Vendors</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredVendors.map((vendor) => (
            <VendorCard key={vendor.id} vendor={vendor} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedVendors;