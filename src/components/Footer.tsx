import React from 'react';
import { ShoppingCart, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="bg-white text-slate-800 p-2 rounded-lg">
                <ShoppingCart className="h-6 w-6" />
              </div>
              <span className="ml-2 text-xl font-bold">StoreFront</span>
            </div>
            <p className="text-slate-300 mb-6 max-w-md">
              Your one-stop destination for premium products. We offer carefully curated items 
              with exceptional quality and outstanding customer service.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-slate-300">
                <Mail className="h-4 w-4 mr-2" />
                <span>support@storefront.com</span>
              </div>
              <div className="flex items-center text-slate-300">
                <Phone className="h-4 w-4 mr-2" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-slate-300">
                <MapPin className="h-4 w-4 mr-2" />
                <span>123 Commerce St, Business City, BC 12345</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['About Us', 'Products', 'Categories', 'Contact', 'FAQ', 'Blog'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-300 hover:text-white transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              {['Shipping Info', 'Returns', 'Size Guide', 'Track Order', 'Help Center', 'Live Chat'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-300 hover:text-white transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-300 text-sm">
            © 2024 StoreFront. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-slate-300 hover:text-white text-sm transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-300 hover:text-white text-sm transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" className="text-slate-300 hover:text-white text-sm transition-colors duration-200">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};