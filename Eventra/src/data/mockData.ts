import { Vendor, Product, Review } from '../types';

export const mockVendors: Vendor[] = [
  {
    id: '1',
    name: 'Elegant Venues Co.',
    category: 'venue',
    rating: 4.9,
    reviewCount: 127,
    location: 'New York, NY',
    priceRange: '$$$',
    image: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800',
    portfolio: [
      'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1045541/pexels-photo-1045541.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Premium venue spaces for unforgettable events with full-service planning.',
    availability: [],
    specialties: ['Weddings', 'Corporate Events', 'Galas'],
    verified: true
  },
  {
    id: '2',
    name: 'Gourmet Catering Plus',
    category: 'catering',
    rating: 4.8,
    reviewCount: 89,
    location: 'Los Angeles, CA',
    priceRange: '$$',
    image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800',
    portfolio: [
      'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Exquisite culinary experiences tailored to your event vision.',
    availability: [],
    specialties: ['Fine Dining', 'Dietary Accommodations', 'International Cuisine'],
    verified: true
  },
  {
    id: '3',
    name: 'Capture Moments Studio',
    category: 'photography',
    rating: 4.9,
    reviewCount: 203,
    location: 'Chicago, IL',
    priceRange: '$$',
    image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800',
    portfolio: [
      'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Professional event photography with artistic flair and quick turnaround.',
    availability: [],
    specialties: ['Wedding Photography', 'Corporate Events', 'Portrait Sessions'],
    verified: true
  }
];

export const mockProducts: Product[] = [
  // Wedding Products
  {
    id: '1',
    name: 'Grand Ballroom Package',
    vendor: 'Elegant Venues Co.',
    vendorId: '1',
    category: 'venue',
    price: 2500,
    originalPrice: 3000,
    image: 'https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1045541/pexels-photo-1045541.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Luxurious ballroom space accommodating up to 200 guests with premium amenities.',
    rating: 4.9,
    reviewCount: 45,
    tags: ['luxury', 'spacious', 'premium'],
    customizable: true,
    availability: [],
    eventTypes: ['wedding', 'anniversary', 'corporate']
  },
  {
    id: '2',
    name: 'Wedding Catering Deluxe',
    vendor: 'Gourmet Catering Plus',
    vendorId: '2',
    category: 'catering',
    price: 125,
    image: 'https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Elegant wedding menu with five-course meal and champagne service, per person.',
    rating: 4.8,
    reviewCount: 32,
    tags: ['gourmet', 'champagne', 'five-course'],
    customizable: true,
    availability: [],
    eventTypes: ['wedding', 'anniversary']
  },
  {
    id: '3',
    name: 'Wedding Photography Premium',
    vendor: 'Capture Moments Studio',
    vendorId: '3',
    category: 'photography',
    price: 1800,
    originalPrice: 2200,
    image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Complete wedding photography with engagement session and digital gallery.',
    rating: 4.9,
    reviewCount: 67,
    tags: ['wedding', 'engagement', 'digital-gallery'],
    customizable: false,
    availability: [],
    eventTypes: ['wedding']
  },
  {
    id: '4',
    name: 'Bridal Floral Package',
    vendor: 'Bloom & Blossom Decor',
    vendorId: '4',
    category: 'decoration',
    price: 850,
    image: 'https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Complete bridal floral package including bouquet, centerpieces, and ceremony arch.',
    rating: 4.7,
    reviewCount: 89,
    tags: ['bridal', 'flowers', 'centerpieces'],
    customizable: true,
    availability: [],
    eventTypes: ['wedding']
  },

  // Corporate Products
  {
    id: '5',
    name: 'Corporate Conference Hall',
    vendor: 'Elegant Venues Co.',
    vendorId: '1',
    category: 'venue',
    price: 1200,
    image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Modern conference facility with AV equipment and networking capabilities.',
    rating: 4.8,
    reviewCount: 34,
    tags: ['corporate', 'av-equipment', 'networking'],
    customizable: true,
    availability: [],
    eventTypes: ['corporate']
  },
  {
    id: '6',
    name: 'Business Lunch Catering',
    vendor: 'Gourmet Catering Plus',
    vendorId: '2',
    category: 'catering',
    price: 45,
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Professional business lunch menu with healthy options, per person.',
    rating: 4.6,
    reviewCount: 28,
    tags: ['business', 'healthy', 'professional'],
    customizable: true,
    availability: [],
    eventTypes: ['corporate']
  },
  {
    id: '7',
    name: 'Corporate Event Photography',
    vendor: 'Capture Moments Studio',
    vendorId: '3',
    category: 'photography',
    price: 800,
    image: 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Professional corporate event coverage with team photos and presentations.',
    rating: 4.7,
    reviewCount: 41,
    tags: ['corporate', 'team-photos', 'presentations'],
    customizable: false,
    availability: [],
    eventTypes: ['corporate']
  },

  // Birthday Products
  {
    id: '8',
    name: 'Birthday Party Venue',
    vendor: 'Elegant Venues Co.',
    vendorId: '1',
    category: 'venue',
    price: 600,
    image: 'https://images.pexels.com/photos/1729931/pexels-photo-1729931.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/1729931/pexels-photo-1729931.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Fun and colorful party space perfect for birthday celebrations.',
    rating: 4.5,
    reviewCount: 56,
    tags: ['birthday', 'colorful', 'fun'],
    customizable: true,
    availability: [],
    eventTypes: ['birthday']
  },
  {
    id: '9',
    name: 'Birthday Cake & Treats',
    vendor: 'Gourmet Catering Plus',
    vendorId: '2',
    category: 'catering',
    price: 180,
    image: 'https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Custom birthday cake with party treats and refreshments package.',
    rating: 4.8,
    reviewCount: 73,
    tags: ['birthday-cake', 'custom', 'treats'],
    customizable: true,
    availability: [],
    eventTypes: ['birthday']
  },
  {
    id: '10',
    name: 'Birthday Party Decorations',
    vendor: 'Bloom & Blossom Decor',
    vendorId: '4',
    category: 'decoration',
    price: 320,
    image: 'https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Complete birthday party decoration package with balloons and themed setup.',
    rating: 4.6,
    reviewCount: 45,
    tags: ['balloons', 'themed', 'colorful'],
    customizable: true,
    availability: [],
    eventTypes: ['birthday']
  },

  // Festival Products
  {
    id: '11',
    name: 'Festival Stage Setup',
    vendor: 'Harmony Entertainment',
    vendorId: '5',
    category: 'entertainment',
    price: 2200,
    image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Complete festival stage with professional sound and lighting systems.',
    rating: 4.9,
    reviewCount: 23,
    tags: ['festival', 'stage', 'sound-lighting'],
    customizable: true,
    availability: [],
    eventTypes: ['festival']
  },
  {
    id: '12',
    name: 'Festival Food Trucks',
    vendor: 'Gourmet Catering Plus',
    vendorId: '2',
    category: 'catering',
    price: 1500,
    image: 'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Multiple food truck vendors for diverse festival dining options.',
    rating: 4.7,
    reviewCount: 38,
    tags: ['food-trucks', 'diverse', 'festival'],
    customizable: true,
    availability: [],
    eventTypes: ['festival']
  }
];

export const mockReviews: Review[] = [
  {
    id: '1',
    userId: '1',
    userName: 'Sarah Johnson',
    userAvatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
    comment: 'Absolutely incredible experience! The team at Elegant Venues Co. made our wedding day perfect. The ballroom was stunning and the service was impeccable. Every detail was handled with care and professionalism.',
    date: '2024-01-15',
    eventType: 'Wedding',
    vendorName: 'Elegant Venues Co.',
    images: [
      'https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    helpful: 24
  },
  {
    id: '2',
    userId: '2',
    userName: 'Michael Chen',
    userAvatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
    comment: 'Gourmet Catering Plus exceeded all expectations for our corporate event. The food was exceptional, presentation was beautiful, and they accommodated all dietary restrictions perfectly. Highly recommended!',
    date: '2024-01-10',
    eventType: 'Corporate Event',
    vendorName: 'Gourmet Catering Plus',
    helpful: 18
  },
  {
    id: '3',
    userId: '3',
    userName: 'Emily Rodriguez',
    userAvatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
    comment: 'Capture Moments Studio captured our special day beautifully! The photographer was professional, creative, and made us feel comfortable throughout. The photos are absolutely stunning and we\'ll treasure them forever.',
    date: '2024-01-08',
    eventType: 'Wedding',
    vendorName: 'Capture Moments Studio',
    images: [
      'https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    helpful: 31
  },
  {
    id: '4',
    userId: '4',
    userName: 'David Thompson',
    userAvatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 4,
    comment: 'Great experience with Bloom & Blossom Decor for our daughter\'s birthday party. The decorations were colorful and fun, exactly what we wanted. The setup was quick and professional.',
    date: '2024-01-05',
    eventType: 'Birthday Party',
    vendorName: 'Bloom & Blossom Decor',
    helpful: 12
  },
  {
    id: '5',
    userId: '5',
    userName: 'Lisa Park',
    userAvatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
    comment: 'Harmony Entertainment made our festival absolutely amazing! The sound quality was perfect, the lighting created an incredible atmosphere, and they handled everything professionally. The crowd loved it!',
    date: '2024-01-03',
    eventType: 'Festival',
    vendorName: 'Harmony Entertainment',
    helpful: 27
  },
  {
    id: '6',
    userId: '6',
    userName: 'James Wilson',
    userAvatar: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
    comment: 'Perfect Planning Co. took all the stress out of our anniversary celebration. They coordinated everything flawlessly and we could just enjoy our special day. Truly exceptional service!',
    date: '2024-01-01',
    eventType: 'Anniversary',
    vendorName: 'Perfect Planning Co.',
    helpful: 19
  }
];

export const eventTypes = [
  { id: 'wedding', name: 'Wedding', icon: '💒' },
  { id: 'corporate', name: 'Corporate', icon: '🏢' },
  { id: 'birthday', name: 'Birthday', icon: '🎂' },
  { id: 'festival', name: 'Festival', icon: '🎪' },
  { id: 'anniversary', name: 'Anniversary', icon: '💍' },
  { id: 'baby-shower', name: 'Baby Shower', icon: '👶' }
];

export const categories = [
  { id: 'venue', name: 'Venues', icon: '🏛️' },
  { id: 'catering', name: 'Catering', icon: '🍽️' },
  { id: 'photography', name: 'Photography', icon: '📸' },
  { id: 'decoration', name: 'Decoration', icon: '🎨' },
  { id: 'entertainment', name: 'Entertainment', icon: '🎵' },
  { id: 'planning', name: 'Planning', icon: '📋' }
];