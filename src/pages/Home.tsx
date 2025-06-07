import React from 'react';
import { ArrowRight, Star, ShoppingBag, Users, Award } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';
import { Product } from '../types';
import { useCart } from '../hooks/useCart';

interface HomeProps {
  onProductClick: (product: Product) => void;
  onNavigate: (page: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onProductClick, onNavigate }) => {
  const { addItem } = useCart();
  const featuredProducts = products.filter(p => p.isFeatured);

  const stats = [
    { icon: Users, label: 'Happy Customers', value: '50,000+' },
    { icon: ShoppingBag, label: 'Products Sold', value: '200,000+' },
    { icon: Award, label: 'Awards Won', value: '25+' },
    { icon: Star, label: 'Average Rating', value: '4.8/5' }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Discover Premium
                  <span className="block text-amber-400">Products</span>
                </h1>
                <p className="text-xl text-slate-300 max-w-lg">
                  Curated collection of high-quality products for modern living. 
                  Experience excellence in every purchase.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onNavigate('products')}
                  className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center justify-center space-x-2 transform hover:scale-105"
                >
                  <span>Shop Now</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
                
                <button
                  onClick={() => onNavigate('about')}
                  className="border-2 border-white text-white hover:bg-white hover:text-slate-800 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
                >
                  Learn More
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 pt-8">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center lg:text-left">
                    <div className="flex items-center justify-center lg:justify-start space-x-2 mb-2">
                      <stat.icon className="h-5 w-5 text-amber-400" />
                      <span className="text-2xl font-bold">{stat.value}</span>
                    </div>
                    <p className="text-slate-300 text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="hidden lg:block">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Premium Products"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Premium Quality',
              description: 'Every product is carefully selected for exceptional quality and durability.',
              icon: '🏆'
            },
            {
              title: 'Fast Shipping',
              description: 'Free shipping on orders over $50. Express delivery available.',
              icon: '🚚'
            },
            {
              title: '24/7 Support',
              description: 'Our customer service team is here to help you anytime, anywhere.',
              icon: '💬'
            }
          ].map((feature) => (
            <div key={feature.title} className="text-center p-6 rounded-xl bg-white border hover:shadow-lg transition-all duration-300">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
            Featured Products
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Discover our handpicked selection of premium products, chosen for their 
            exceptional quality and outstanding customer reviews.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={addItem}
              onProductClick={onProductClick}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button
            onClick={() => onNavigate('products')}
            className="bg-slate-800 text-white px-8 py-3 rounded-lg hover:bg-slate-700 transition-colors duration-200 font-medium inline-flex items-center space-x-2"
          >
            <span>View All Products</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Stay Updated
            </h2>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and be the first to know about new products, 
              exclusive offers, and special discounts.
            </p>
            
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
              <button className="bg-amber-500 text-white px-6 py-3 rounded-lg hover:bg-amber-600 transition-colors duration-200 font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};