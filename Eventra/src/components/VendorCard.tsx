import React, { useState } from 'react';
import { Star, MapPin, Award, Heart, MessageCircle, X, Phone, Mail, Calendar, Camera } from 'lucide-react';
import { Vendor } from '../types';

interface VendorCardProps {
  vendor: Vendor;
}

const VendorCard: React.FC<VendorCardProps> = ({ vendor }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  const handleViewProfile = () => {
    setShowProfileModal(true);
  };

  const handleContact = () => {
    setShowContactModal(true);
  };

  const handleCloseModal = () => {
    setShowContactModal(false);
    setShowProfileModal(false);
  };

  const handleSendMessage = () => {
    alert(`Message sent to ${vendor.name}! They will get back to you soon.`);
    setShowContactModal(false);
  };

  return (
    <>
      <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] overflow-hidden">
        {/* Image Container */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={vendor.image}
            alt={vendor.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          
          {/* Overlay Actions */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-3">
            <button 
              onClick={handleLike}
              className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${
                isLiked 
                  ? 'bg-[#FF6F61] text-white' 
                  : 'bg-white text-gray-700 hover:text-[#FF6F61]'
              }`}
            >
              <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
            </button>
            <button 
              onClick={handleContact}
              className="p-3 bg-[#FF6F61] rounded-full text-white hover:bg-[#FF6F61]/90 transition-colors transform hover:scale-110"
            >
              <MessageCircle className="w-5 h-5" />
            </button>
          </div>

          {/* Verified Badge */}
          {vendor.verified && (
            <div className="absolute top-4 left-4">
              <div className="flex items-center space-x-1 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                <Award className="w-3 h-3" />
                <span>Verified</span>
              </div>
            </div>
          )}

          {/* Wishlist */}
          <button 
            onClick={handleLike}
            className={`absolute top-4 right-4 p-2 backdrop-blur-sm rounded-full transition-all duration-300 transform hover:scale-110 ${
              isLiked 
                ? 'bg-[#FF6F61] text-white' 
                : 'bg-white/80 text-gray-600 hover:text-[#FF6F61]'
            }`}
          >
            <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Category */}
          <span className="inline-block px-3 py-1 bg-[#C084FC]/10 text-[#C084FC] text-xs font-medium rounded-full mb-3 capitalize">
            {vendor.category}
          </span>

          {/* Title */}
          <h3 className="font-semibold text-lg text-[#1B263B] mb-2 group-hover:text-[#FF6F61] transition-colors">
            {vendor.name}
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {vendor.description}
          </p>

          {/* Rating & Reviews */}
          <div className="flex items-center space-x-2 mb-3">
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-sm font-medium text-[#1B263B]">{vendor.rating}</span>
            </div>
            <span className="text-sm text-gray-500">({vendor.reviewCount} reviews)</span>
          </div>

          {/* Location */}
          <div className="flex items-center space-x-2 mb-4">
            <MapPin className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-600">{vendor.location}</span>
          </div>

          {/* Specialties */}
          <div className="flex flex-wrap gap-2 mb-4">
            {vendor.specialties.slice(0, 2).map((specialty) => (
              <span
                key={specialty}
                className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
              >
                {specialty}
              </span>
            ))}
            {vendor.specialties.length > 2 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                +{vendor.specialties.length - 2} more
              </span>
            )}
          </div>

          {/* Price Range & CTA */}
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-[#1B263B]">
              {vendor.priceRange}
            </span>
            <div className="flex space-x-2">
              <button 
                onClick={handleViewProfile}
                className="bg-gray-100 text-gray-700 px-3 py-2 rounded-xl font-medium hover:bg-gray-200 transition-all duration-300 text-sm hover:shadow-md"
              >
                View Profile
              </button>
              <button 
                onClick={handleContact}
                className="bg-gradient-to-r from-[#FF6F61] to-[#C084FC] text-white px-3 py-2 rounded-xl font-medium hover:shadow-lg hover:shadow-[#FF6F61]/25 transition-all duration-300 text-sm transform hover:scale-105"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Vendor Profile Modal */}
      {showProfileModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="relative">
              <img
                src={vendor.image}
                alt={vendor.name}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <button 
                onClick={handleCloseModal}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-6 left-6 text-white">
                <div className="flex items-center space-x-2 mb-2">
                  {vendor.verified && (
                    <div className="flex items-center space-x-1 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      <Award className="w-3 h-3" />
                      <span>Verified</span>
                    </div>
                  )}
                  <span className="px-3 py-1 bg-[#C084FC] text-white text-xs font-medium rounded-full capitalize">
                    {vendor.category}
                  </span>
                </div>
                <h2 className="text-3xl font-bold">{vendor.name}</h2>
                <div className="flex items-center space-x-4 mt-2">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="font-medium">{vendor.rating}</span>
                    <span className="text-white/80">({vendor.reviewCount} reviews)</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{vendor.location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Info */}
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-[#1B263B] mb-3">About</h3>
                    <p className="text-gray-600 leading-relaxed">{vendor.description}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[#1B263B] mb-3">Specialties</h3>
                    <div className="flex flex-wrap gap-2">
                      {vendor.specialties.map((specialty) => (
                        <span
                          key={specialty}
                          className="px-3 py-1 bg-gradient-to-r from-[#FF6F61]/10 to-[#C084FC]/10 text-[#1B263B] text-sm rounded-full border border-[#FF6F61]/20"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[#1B263B] mb-3">Portfolio</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {vendor.portfolio.map((image, index) => (
                        <img
                          key={index}
                          src={image}
                          alt={`Portfolio ${index + 1}`}
                          className="w-full h-32 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-[#FF6F61]/5 to-[#C084FC]/5 p-6 rounded-2xl border border-[#FF6F61]/10">
                    <h3 className="text-lg font-bold text-[#1B263B] mb-4">Pricing</h3>
                    <div className="text-3xl font-bold text-[#FF6F61] mb-2">{vendor.priceRange}</div>
                    <p className="text-sm text-gray-600">Starting price range</p>
                  </div>

                  <div className="space-y-3">
                    <button 
                      onClick={handleContact}
                      className="w-full bg-gradient-to-r from-[#FF6F61] to-[#C084FC] text-white py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-[#FF6F61]/25 transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <MessageCircle className="w-5 h-5" />
                      <span>Send Message</span>
                    </button>
                    
                    <button className="w-full bg-white border-2 border-[#FF6F61] text-[#FF6F61] py-3 rounded-xl font-semibold hover:bg-[#FF6F61] hover:text-white transition-all duration-300 flex items-center justify-center space-x-2">
                      <Phone className="w-5 h-5" />
                      <span>Call Now</span>
                    </button>
                    
                    <button className="w-full bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2">
                      <Calendar className="w-5 h-5" />
                      <span>Check Availability</span>
                    </button>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-xl">
                    <h4 className="font-semibold text-[#1B263B] mb-2">Quick Stats</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Response Time:</span>
                        <span className="font-medium">Within 2 hours</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Booking Rate:</span>
                        <span className="font-medium">95%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Years Experience:</span>
                        <span className="font-medium">8+ years</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 transform transition-all duration-300">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-[#1B263B]">Contact {vendor.name}</h3>
              <button 
                onClick={handleCloseModal}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#1B263B] mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6F61] focus:border-transparent"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[#1B263B] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6F61] focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[#1B263B] mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6F61] focus:border-transparent resize-none"
                  placeholder="Tell us about your event..."
                />
              </div>
            </div>
            
            <div className="flex space-x-3 mt-6">
              <button 
                onClick={handleCloseModal}
                className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl font-medium hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={handleSendMessage}
                className="flex-1 bg-gradient-to-r from-[#FF6F61] to-[#C084FC] text-white py-3 rounded-xl font-medium hover:shadow-lg hover:shadow-[#FF6F61]/25 transition-all duration-300"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VendorCard;