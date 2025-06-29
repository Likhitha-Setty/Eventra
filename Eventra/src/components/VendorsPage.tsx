import React, { useState, useMemo } from 'react';
import { Filter, MapPin, Star, Award } from 'lucide-react';
import VendorCard from './VendorCard';
import { mockVendors, categories } from '../data/mockData';
import { Vendor } from '../types';

const VendorsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedLocation, setSelectedLocation] = useState<string>('all');
  const [minRating, setMinRating] = useState<number>(0);
  const [sortBy, setSortBy] = useState<string>('rating');

  const filteredVendors = useMemo(() => {
    return mockVendors.filter(vendor => {
      // Search query filter
      if (searchQuery && !vendor.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
          !vendor.description.toLowerCase().includes(searchQuery.toLowerCase()) &&
          !vendor.specialties.some(specialty => specialty.toLowerCase().includes(searchQuery.toLowerCase()))) {
        return false;
      }

      // Category filter
      if (selectedCategory !== 'all' && vendor.category !== selectedCategory) {
        return false;
      }

      // Location filter
      if (selectedLocation !== 'all' && !vendor.location.toLowerCase().includes(selectedLocation.toLowerCase())) {
        return false;
      }

      // Rating filter
      if (minRating > 0 && vendor.rating < minRating) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'reviews':
          return b.reviewCount - a.reviewCount;
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });
  }, [searchQuery, selectedCategory, selectedLocation, minRating, sortBy]);

  const locations = ['New York, NY', 'Los Angeles, CA', 'Chicago, IL', 'Miami, FL', 'San Francisco, CA', 'Seattle, WA'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-[#FF6F61]/3 to-[#C084FC]/8">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1B263B] via-[#1B263B]/90 to-[#C084FC]/20 py-16">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Vendors background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute top-20 left-20 w-72 h-72 bg-[#C084FC]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#FF6F61]/15 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Trusted Vendors
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover verified professionals who will make your event extraordinary
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search vendors by name, specialty, or service..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 text-lg rounded-2xl border-0 focus:ring-4 focus:ring-[#FF6F61]/30 focus:outline-none bg-white/95 backdrop-blur-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vendors Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <div className="lg:w-80">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-md p-6 sticky top-24 border border-[#FF6F61]/10">
                <h3 className="font-semibold text-[#1B263B] mb-6 flex items-center">
                  <Filter className="w-5 h-5 mr-2 text-[#FF6F61]" />
                  Filter Vendors
                </h3>

                {/* Category Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-[#1B263B] mb-3">Category</h4>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6F61] focus:border-transparent bg-white/90"
                  >
                    <option value="all">All Categories</option>
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Location Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-[#1B263B] mb-3">Location</h4>
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6F61] focus:border-transparent bg-white/90"
                  >
                    <option value="all">All Locations</option>
                    {locations.map((location) => (
                      <option key={location} value={location}>
                        {location}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Rating Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-[#1B263B] mb-3">Minimum Rating</h4>
                  <div className="space-y-2">
                    {[4.5, 4.0, 3.5, 3.0].map((rating) => (
                      <label key={rating} className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="radio"
                          name="rating"
                          checked={minRating === rating}
                          onChange={() => setMinRating(rating)}
                          className="w-4 h-4 text-[#FF6F61] border-gray-300 focus:ring-[#FF6F61]"
                        />
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                            />
                          ))}
                          <span className="text-sm text-gray-600 ml-1">& up</span>
                        </div>
                      </label>
                    ))}
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="radio"
                        name="rating"
                        checked={minRating === 0}
                        onChange={() => setMinRating(0)}
                        className="w-4 h-4 text-[#FF6F61] border-gray-300 focus:ring-[#FF6F61]"
                      />
                      <span className="text-sm text-gray-600">All Ratings</span>
                    </label>
                  </div>
                </div>

                {/* Clear Filters */}
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedLocation('all');
                    setMinRating(0);
                    setSearchQuery('');
                  }}
                  className="w-full py-2 text-[#FF6F61] font-medium hover:bg-[#FF6F61]/5 transition-colors rounded-lg"
                >
                  Clear All Filters
                </button>
              </div>
            </div>

            {/* Vendors Grid */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-[#1B263B]">
                  {filteredVendors.length} Vendors Found
                </h2>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6F61] focus:border-transparent bg-white/90"
                >
                  <option value="rating">Highest Rated</option>
                  <option value="reviews">Most Reviews</option>
                  <option value="name">Name A-Z</option>
                </select>
              </div>

              {filteredVendors.length === 0 ? (
                <div className="text-center py-16">
                  <Award className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">No vendors found</h3>
                  <p className="text-gray-500">Try adjusting your filters or search terms</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                  {filteredVendors.map((vendor) => (
                    <VendorCard key={vendor.id} vendor={vendor} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VendorsPage;