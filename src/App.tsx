import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Cart } from './components/Cart';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { ProductDetail } from './pages/ProductDetail';
import { Login } from './pages/Login';
import { Checkout } from './pages/Checkout';
import { Product } from './types';
import { products } from './data/products';

type Page = 'home' | 'products' | 'categories' | 'about' | 'profile' | 'orders' | 'checkout' | 'order-complete';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
    setSelectedProduct(null);
  };

  const handleOrderComplete = () => {
    setCurrentPage('order-complete');
  };

  const renderContent = () => {
    if (selectedProduct) {
      return (
        <ProductDetail
          product={selectedProduct}
          onBack={() => setSelectedProduct(null)}
        />
      );
    }

    switch (currentPage) {
      case 'home':
        return <Home onProductClick={handleProductClick} onNavigate={handleNavigate} />;
      case 'products':
        return <Products onProductClick={handleProductClick} />;
      case 'checkout':
        return <Checkout onOrderComplete={handleOrderComplete} />;
      case 'order-complete':
        return (
          <div className="max-w-2xl mx-auto px-4 py-16 text-center">
            <div className="bg-green-50 border border-green-200 rounded-lg p-8">
              <div className="text-green-600 text-6xl mb-4">✓</div>
              <h1 className="text-2xl font-bold text-slate-800 mb-4">Order Complete!</h1>
              <p className="text-slate-600 mb-6">
                Thank you for your purchase. You will receive a confirmation email shortly.
              </p>
              <button
                onClick={() => handleNavigate('home')}
                className="bg-slate-800 text-white px-6 py-3 rounded-lg hover:bg-slate-700 transition-colors duration-200 font-medium"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        );
      default:
        return (
          <div className="max-w-4xl mx-auto px-4 py-16 text-center">
            <h1 className="text-3xl font-bold text-slate-800 mb-4">
              {currentPage.charAt(0).toUpperCase() + currentPage.slice(1)}
            </h1>
            <p className="text-slate-600">This page is coming soon!</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header
        onCartClick={() => setIsCartOpen(true)}
        onLoginClick={() => setShowLogin(true)}
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />
      
      <main className="flex-1">
        {renderContent()}
      </main>
      
      <Footer />
      
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onCheckout={() => {
          setIsCartOpen(false);
          setCurrentPage('checkout');
        }}
      />
      
      {showLogin && (
        <Login onClose={() => setShowLogin(false)} />
      )}
    </div>
  );
}

export default App;