import React from 'react';
import { Filter, X, MapPin, DollarSign, Star, Calendar } from 'lucide-react';
import { categories } from '../data/mockData';
import { FilterOptions } from '../types';

interface FilterSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  filters: FilterOptions;
  onFiltersChange: (filters: FilterOptions) => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({ isOpen, onClose, filters, onFiltersChange }) => {
  const updateFilter = (key: keyof FilterOptions, value: any) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  const toggleCategory = (categoryId: string) => {
    const newCategories = filters.categories.includes(categoryId)
      ? filters.categories.filter(id => id !== categoryId)
      : [...filters.categories, categoryId];
    updateFilter('categories', newCategories);
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed lg:sticky top-0 left-0 h-screen lg:h-auto w-80 bg-white border-r border-gray-200 z-50 transform transition-transform duration-300 overflow-y-auto
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-[#FF6F61]" />
            <h3 className="font-semibold text-lg text-[#1B263B]">Filters</h3>
          </div>
          <button
            onClick={onClose}
            className="lg:hidden p-1 text-gray-400 hover:text-gray-600"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-8">
          {/* Categories */}
          <div>
            <h4 className="font-semibold text-[#1B263B] mb-4 flex items-center">
              <span>Categories</span>
            </h4>
            <div className="space-y-3">
              {categories.map((category) => (
                <label key={category.id} className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.categories.includes(category.id)}
                    onChange={() => toggleCategory(category.id)}
                    className="w-4 h-4 text-[#FF6F61] rounded border-gray-300 focus:ring-[#FF6F61]"
                  />
                  <span className="text-gray-700">{category.name}</span>
                  <span className="text-lg">{category.icon}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div>
            <h4 className="font-semibold text-[#1B263B] mb-4 flex items-center">
              <DollarSign className="w-4 h-4 mr-1" />
              Price Range
            </h4>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Min Price</label>
                <input
                  type="range"
                  min="0"
                  max="5000"
                  step="100"
                  value={filters.priceRange[0]}
                  onChange={(e) => updateFilter('priceRange', [parseInt(e.target.value), filters.priceRange[1]])}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <span className="text-sm text-gray-500">${filters.priceRange[0]}</span>
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Max Price</label>
                <input
                  type="range"
                  min="0"
                  max="5000"
                  step="100"
                  value={filters.priceRange[1]}
                  onChange={(e) => updateFilter('priceRange', [filters.priceRange[0], parseInt(e.target.value)])}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <span className="text-sm text-gray-500">${filters.priceRange[1]}</span>
              </div>
            </div>
          </div>

          {/* Rating */}
          <div>
            <h4 className="font-semibold text-[#1B263B] mb-4 flex items-center">
              <Star className="w-4 h-4 mr-1" />
              Minimum Rating
            </h4>
            <div className="space-y-2">
              {[4.5, 4.0, 3.5, 3.0].map((rating) => (
                <label key={rating} className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="rating"
                    checked={filters.rating === rating}
                    onChange={() => updateFilter('rating', rating)}
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
            </div>
          </div>

          {/* Location */}
          <div>
            <h4 className="font-semibold text-[#1B263B] mb-4 flex items-center">
              <MapPin className="w-4 h-4 mr-1" />
              Location
            </h4>
            <select 
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6F61] focus:border-transparent"
              onChange={(e) => updateFilter('location', e.target.value ? [e.target.value] : [])}
            >
              <option value="">All Locations</option>
              <option value="new-york">New York, NY</option>
              <option value="los-angeles">Los Angeles, CA</option>
              <option value="chicago">Chicago, IL</option>
              <option value="miami">Miami, FL</option>
              <option value="san-francisco">San Francisco, CA</option>
            </select>
          </div>
        </div>

        {/* Clear Filters */}
        <div className="p-6 border-t border-gray-200">
          <button
            onClick={() => onFiltersChange({
              eventType: [],
              location: [],
              priceRange: [0, 5000],
              rating: 0,
              availability: null,
              categories: []
            })}
            className="w-full py-2 text-[#FF6F61] font-medium hover:bg-[#FF6F61]/5 transition-colors rounded-lg"
          >
            Clear All Filters
          </button>
        </div>
      </div>
    </>
  );
};

export default FilterSidebar;