import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import EventTypeSelector from './components/EventTypeSelector';
import FilterSidebar from './components/FilterSidebar';
import ProductGrid from './components/ProductGrid';
import CartSidebar from './components/CartSidebar';
import FeaturedVendors from './components/FeaturedVendors';
import Footer from './components/Footer';
import ReviewsPage from './components/ReviewsPage';
import VendorsPage from './components/VendorsPage';
import ServicesPage from './components/ServicesPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import PlanningToolsPage from './components/PlanningToolsPage';
import { useCart } from './hooks/useCart';
import { mockProducts } from './data/mockData';
import { FilterOptions, NavigationPage } from './types';

function App() {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    getTotalPrice,
    getTotalItems,
    clearCart
  } = useCart();

  const [currentPage, setCurrentPage] = useState<NavigationPage>('home');
  const [selectedEventType, setSelectedEventType] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filters, setFilters] = useState<FilterOptions>({
    eventType: [],
    location: [],
    priceRange: [0, 5000],
    rating: 0,
    availability: null,
    categories: []
  });

  // Filter products based on search, filters, and selected event type
  const filteredProducts = useMemo(() => {
    return mockProducts.filter(product => {
      // Search query filter
      if (searchQuery && !product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
          !product.vendor.toLowerCase().includes(searchQuery.toLowerCase()) &&
          !product.description.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }

      // Event type filter (from event type selector)
      if (selectedEventType && !product.eventTypes.includes(selectedEventType)) {
        return false;
      }

      // Category filter
      if (filters.categories.length > 0 && !filters.categories.includes(product.category)) {
        return false;
      }

      // Price range filter
      if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) {
        return false;
      }

      // Rating filter
      if (filters.rating > 0 && product.rating < filters.rating) {
        return false;
      }

      return true;
    });
  }, [searchQuery, selectedEventType, filters]);

  const handleCheckout = () => {
    alert(`Proceeding to checkout with ${getTotalItems()} items totaling $${getTotalPrice().toFixed(2)}`);
    clearCart();
  };

  const handleEventTypeSelect = (eventType: string) => {
    setSelectedEventType(selectedEventType === eventType ? '' : eventType);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'vendors':
        return <VendorsPage />;
      case 'services':
        return <ServicesPage onAddToCart={addToCart} />;
      case 'reviews':
        return <ReviewsPage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      case 'planning-tools':
        return <PlanningToolsPage />;
      default:
        return (
          <>
            <Hero />
            
            <EventTypeSelector
              selectedType={selectedEventType}
              onTypeSelect={handleEventTypeSelect}
            />

            <FeaturedVendors />

            {/* Products Section */}
            <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-[#C084FC]/5">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl lg:text-4xl font-bold text-[#1B263B] mb-4">
                    {selectedEventType ? `${selectedEventType.charAt(0).toUpperCase() + selectedEventType.slice(1)} Services` : 'Discover Services & Products'}
                  </h2>
                  <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                    {selectedEventType 
                      ? `Find everything you need for your perfect ${selectedEventType} event`
                      : 'Find everything you need to make your event extraordinary'
                    }
                  </p>
                </div>

                <div className="flex gap-8">
                  <FilterSidebar
                    isOpen={isFilterOpen}
                    onClose={() => setIsFilterOpen(false)}
                    filters={filters}
                    onFiltersChange={setFilters}
                  />

                  <ProductGrid
                    products={filteredProducts}
                    onAddToCart={addToCart}
                    onToggleFilters={() => setIsFilterOpen(true)}
                    viewMode={viewMode}
                    onViewModeChange={setViewMode}
                  />
                </div>
              </div>
            </section>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-[#C084FC]/5">
      <Header
        cartItemCount={getTotalItems()}
        onCartClick={() => setIsCartOpen(true)}
        onSearchChange={setSearchQuery}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />

      {renderCurrentPage()}

      {currentPage === 'home' && <Footer />}

      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
        totalPrice={getTotalPrice()}
        onCheckout={handleCheckout}
      />
    </div>
  );
}

export default App;