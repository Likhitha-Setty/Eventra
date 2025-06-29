import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, Heart, X } from 'lucide-react';
import { NavigationPage } from '../types';

interface HeaderProps {
  cartItemCount: number;
  onCartClick: () => void;
  onSearchChange: (query: string) => void;
  currentPage: NavigationPage;
  onPageChange: (page: NavigationPage) => void;
}

const Header: React.FC<HeaderProps> = ({ 
  cartItemCount, 
  onCartClick, 
  onSearchChange, 
  currentPage, 
  onPageChange 
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { id: 'home' as NavigationPage, label: 'Home' },
    { id: 'vendors' as NavigationPage, label: 'Vendors' },
    { id: 'services' as NavigationPage, label: 'Services' },
    { id: 'planning-tools' as NavigationPage, label: 'Planning Tools' },
    { id: 'reviews' as NavigationPage, label: 'Reviews' },
    { id: 'about' as NavigationPage, label: 'About' },
    { id: 'contact' as NavigationPage, label: 'Contact' }
  ];

  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => onPageChange('home')}
          >
            <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-[#FF6F61] to-[#C084FC] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm lg:text-lg">E</span>
            </div>
            <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-[#FF6F61] to-[#C084FC] bg-clip-text text-transparent">
              Eventra
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onPageChange(item.id)}
                className={`font-medium transition-colors ${
                  currentPage === item.id
                    ? 'text-[#FF6F61]'
                    : 'text-[#1B263B] hover:text-[#FF6F61]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search venues, vendors, services..."
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#C084FC] focus:border-transparent transition-all duration-200"
                onChange={(e) => onSearchChange(e.target.value)}
              />
            </div>
          </div>

          {/* Navigation Actions */}
          <div className="flex items-center space-x-2 lg:space-x-4">
            {/* Search Icon - Mobile only */}
            <button className="lg:hidden p-2 text-gray-600 hover:text-[#FF6F61] transition-colors">
              <Search className="w-5 h-5" />
            </button>

            {/* Wishlist */}
            <button className="hidden sm:flex p-2 text-gray-600 hover:text-[#FF6F61] transition-colors">
              <Heart className="w-5 h-5" />
            </button>

            {/* Cart */}
            <button
              onClick={onCartClick}
              className="relative p-2 text-gray-600 hover:text-[#FF6F61] transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#FF6F61] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                  {cartItemCount}
                </span>
              )}
            </button>

            {/* User Account */}
            <button className="p-2 text-gray-600 hover:text-[#FF6F61] transition-colors">
              <User className="w-5 h-5" />
            </button>

            {/* Mobile Menu */}
            <button 
              className="lg:hidden p-2 text-gray-600 hover:text-[#FF6F61] transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="lg:hidden px-4 pb-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search venues, vendors, services..."
            className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#C084FC] focus:border-transparent transition-all duration-200"
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <nav className="px-4 py-4 space-y-2">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onPageChange(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-colors ${
                  currentPage === item.id
                    ? 'bg-gradient-to-r from-[#FF6F61]/10 to-[#C084FC]/10 text-[#FF6F61]'
                    : 'text-[#1B263B] hover:bg-gray-50 hover:text-[#FF6F61]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;