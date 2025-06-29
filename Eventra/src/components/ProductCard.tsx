import React from 'react';
import { Star, Heart, ShoppingCart, MapPin, Badge } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] overflow-hidden">
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Overlay Actions */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-3">
          <button className="p-3 bg-white rounded-full text-gray-700 hover:text-[#FF6F61] transition-colors">
            <Heart className="w-5 h-5" />
          </button>
          <button
            onClick={() => onAddToCart(product)}
            className="p-3 bg-[#FF6F61] rounded-full text-white hover:bg-[#FF6F61]/90 transition-colors"
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col space-y-2">
          {product.originalPrice && (
            <span className="bg-[#FF6F61] text-white px-2 py-1 rounded-full text-xs font-medium">
              SALE
            </span>
          )}
          {product.customizable && (
            <span className="bg-[#C084FC] text-white px-2 py-1 rounded-full text-xs font-medium">
              CUSTOM
            </span>
          )}
        </div>

        {/* Wishlist */}
        <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-600 hover:text-[#FF6F61] transition-colors">
          <Heart className="w-4 h-4" />
        </button>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Vendor Badge */}
        <div className="flex items-center space-x-2 mb-3">
          <Badge className="w-4 h-4 text-[#C084FC]" />
          <span className="text-sm text-[#C084FC] font-medium">{product.vendor}</span>
        </div>

        {/* Title */}
        <h3 className="font-semibold text-lg text-[#1B263B] mb-2 line-clamp-2 group-hover:text-[#FF6F61] transition-colors">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Rating & Reviews */}
        <div className="flex items-center space-x-2 mb-4">
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium text-[#1B263B]">{product.rating}</span>
          </div>
          <span className="text-sm text-gray-500">({product.reviewCount} reviews)</span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {product.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Price & Action */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-[#1B263B]">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-lg text-gray-400 line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
          <button
            onClick={() => onAddToCart(product)}
            className="bg-gradient-to-r from-[#FF6F61] to-[#C084FC] text-white px-4 py-2 rounded-xl font-medium hover:shadow-lg hover:shadow-[#FF6F61]/25 transition-all duration-300 flex items-center space-x-2"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;