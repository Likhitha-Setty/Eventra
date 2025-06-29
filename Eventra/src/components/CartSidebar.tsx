import React from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, CreditCard } from 'lucide-react';
import { CartItem } from '../types';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  totalPrice: number;
  onCheckout: () => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  totalPrice,
  onCheckout
}) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-50"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed top-0 right-0 h-full w-full sm:w-96 bg-white z-50 transform transition-transform duration-300 overflow-y-auto
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        {/* Header */}
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <ShoppingBag className="w-5 h-5 text-[#FF6F61]" />
            <h3 className="font-semibold text-lg text-[#1B263B]">Shopping Cart</h3>
            <span className="bg-[#FF6F61] text-white text-xs px-2 py-1 rounded-full">
              {cartItems.length}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Items */}
        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-64 text-center px-6">
            <ShoppingBag className="w-16 h-16 text-gray-300 mb-4" />
            <h4 className="text-lg font-medium text-gray-600 mb-2">Your cart is empty</h4>
            <p className="text-gray-500 mb-4">Add some amazing services to get started!</p>
            <button
              onClick={onClose}
              className="bg-gradient-to-r from-[#FF6F61] to-[#C084FC] text-white px-6 py-2 rounded-xl font-medium hover:shadow-lg transition-all duration-300"
            >
              Start Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 p-6 space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="bg-gray-50 rounded-xl p-4">
                  <div className="flex space-x-4">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-[#1B263B] mb-1 truncate">
                        {item.product.name}
                      </h4>
                      <p className="text-sm text-gray-600 mb-2">
                        by {item.product.vendor}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                            className="p-1 text-gray-600 hover:text-[#FF6F61] transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="font-medium text-[#1B263B] w-8 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            className="p-1 text-gray-600 hover:text-[#FF6F61] transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="p-1 text-gray-400 hover:text-red-500 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-gray-200 flex justify-between items-center">
                    <span className="text-sm text-gray-600">Subtotal:</span>
                    <span className="font-semibold text-[#1B263B]">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-gray-200 bg-gray-50">
              <div className="space-y-4">
                <div className="flex justify-between items-center text-lg font-semibold text-[#1B263B]">
                  <span>Total:</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <button
                  onClick={onCheckout}
                  className="w-full bg-gradient-to-r from-[#FF6F61] to-[#C084FC] text-white py-3 rounded-xl font-semibold text-lg hover:shadow-xl hover:shadow-[#FF6F61]/25 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <CreditCard className="w-5 h-5" />
                  <span>Proceed to Checkout</span>
                </button>
                <p className="text-xs text-gray-500 text-center">
                  Secure checkout powered by industry-leading encryption
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartSidebar;