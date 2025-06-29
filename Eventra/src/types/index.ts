export interface Vendor {
  id: string;
  name: string;
  category: string;
  rating: number;
  reviewCount: number;
  location: string;
  priceRange: string;
  image: string;
  portfolio: string[];
  description: string;
  availability: Date[];
  specialties: string[];
  verified: boolean;
}

export interface Product {
  id: string;
  name: string;
  vendor: string;
  vendorId: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  description: string;
  rating: number;
  reviewCount: number;
  tags: string[];
  customizable: boolean;
  availability: Date[];
  eventTypes: string[];
}

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
  customizations?: Record<string, any>;
}

export interface FilterOptions {
  eventType: string[];
  location: string[];
  priceRange: [number, number];
  rating: number;
  availability: Date | null;
  categories: string[];
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  rating: number;
  comment: string;
  date: string;
  eventType: string;
  vendorName: string;
  images?: string[];
  helpful: number;
}

export type EventType = 'wedding' | 'corporate' | 'birthday' | 'festival' | 'anniversary' | 'baby-shower';
export type Category = 'venue' | 'catering' | 'photography' | 'decoration' | 'entertainment' | 'planning';
export type NavigationPage = 'home' | 'vendors' | 'services' | 'about' | 'contact' | 'reviews' | 'planning-tools';