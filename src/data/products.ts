import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    price: 299.99,
    originalPrice: 399.99,
    image: 'https://images.pexels.com/photos/3945667/pexels-photo-3945667.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/3945667/pexels-photo-3945667.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    category: 'Electronics',
    description: 'High-quality wireless headphones with noise cancellation and premium sound quality.',
    features: ['Noise Cancellation', '30hr Battery', 'Premium Drivers', 'Wireless Charging'],
    inStock: true,
    rating: 4.8,
    reviewCount: 124,
    isNew: true,
    isFeatured: true
  },
  {
    id: '2',
    name: 'Smart Fitness Watch',
    price: 249.99,
    image: 'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Electronics',
    description: 'Advanced fitness tracking with heart rate monitoring and GPS.',
    features: ['Heart Rate Monitor', 'GPS Tracking', '7-day Battery', 'Water Resistant'],
    inStock: true,
    rating: 4.6,
    reviewCount: 89,
    isFeatured: true
  },
  {
    id: '3',
    name: 'Minimalist Backpack',
    price: 89.99,
    image: 'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Fashion',
    description: 'Sleek and functional backpack perfect for daily commuting and travel.',
    features: ['15" Laptop Compartment', 'Water Resistant', 'USB Charging Port', 'Anti-theft Design'],
    inStock: true,
    rating: 4.7,
    reviewCount: 156,
    isFeatured: true
  },
  {
    id: '4',
    name: 'Organic Coffee Beans',
    price: 24.99,
    image: 'https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Food',
    description: 'Premium organic coffee beans sourced from sustainable farms.',
    features: ['Single Origin', 'Medium Roast', 'Fair Trade', 'Freshly Roasted'],
    inStock: true,
    rating: 4.9,
    reviewCount: 203,
    isNew: true
  },
  {
    id: '5',
    name: 'Wireless Charging Pad',
    price: 39.99,
    image: 'https://images.pexels.com/photos/4792728/pexels-photo-4792728.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Electronics',
    description: 'Fast wireless charging for all compatible devices.',
    features: ['Fast Charging', 'LED Indicator', 'Universal Compatible', 'Slim Design'],
    inStock: true,
    rating: 4.4,
    reviewCount: 67
  },
  {
    id: '6',
    name: 'Ergonomic Office Chair',
    price: 399.99,
    originalPrice: 499.99,
    image: 'https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Furniture',
    description: 'Professional office chair with lumbar support and adjustable features.',
    features: ['Lumbar Support', 'Height Adjustable', 'Breathable Mesh', '5-year Warranty'],
    inStock: true,
    rating: 4.5,
    reviewCount: 91
  }
];

export const categories = [
  { id: 'electronics', name: 'Electronics', count: 15 },
  { id: 'fashion', name: 'Fashion', count: 23 },
  { id: 'food', name: 'Food & Beverages', count: 8 },
  { id: 'furniture', name: 'Furniture', count: 12 },
  { id: 'sports', name: 'Sports & Outdoors', count: 18 }
];