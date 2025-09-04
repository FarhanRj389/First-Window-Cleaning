import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Sparkles } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Our Work', href: '/our-work' },
    { name: 'Contact Us', href: '/contact' },
  ];
  const oversevices = [
    { name: 'Residential Window Cleaning', href: '/residential-window-cleaning' },
    { name: 'Commercial Window Cleaning', href: '/commercial-window-cleaning' },
    { name: 'Post-Construction Cleaning', href: '/post-construction-cleaning' },
    { name: 'Gutter Cleaning & Unblocking', href: '/gutter-cleaning-unblocking' },
    { name: 'Building Wash', href: '/building-wash' },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <div className="min-h-screen bg-white ">
      {/* Header */}
      <header className="bg-white h-20 shadow-sm border-b border-gray-100 sticky top-0 z-50 justify-between items-center px-20">
        <div className="w-full h-20 mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="flex h-20 justify-between items-center">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center space-x-2 group"
            >
              <div className="p-2 bg-blue-600 rounded-lg group-hover:bg-blue-700 transition-colors duration-200">
                <img src="/logo.png" alt="Logo" className='w-8 h-8'/>
              </div>
              <span className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors duration-200">
                First Window Cleaning
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-md font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-blue-600 border-b-2 border-blue-600 pb-1'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
            </nav>
            <a
                href="tel:0224012900"
                className="inline-flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-transparent hover:text-blue-600 hover:border-blue-600 hover:border transition-colors duration-200"
              >
                <Phone className="h-4 w-4" />
                <span>022 401 2900</span>
              </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-100 bg-white">
              <nav className="py-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-4 py-3 text-sm font-medium transition-colors duration-200 ${
                      isActive(item.href)
                        ? 'text-blue-600 bg-blue-50 border-r-2 border-blue-600'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="px-4 pt-3">
                  <a
                    href="tel:0224012900"
                    className="inline-flex items-center justify-center w-full space-x-2 bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    <Phone className="h-4 w-4" />
                    <span>022 401 2900</span>
                  </a>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white relative z-10">
        <div className="maxw-7xl mx-auto px-4 sm:px-6 lg:px-28 py-12 ">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="p-2 bg-blue-600 rounded-lg">
                <img src="/logo.png" alt="Logo" className='w-8 h-8'/>
                </div>
                <span className="text-xl font-bold">First Window Cleaning</span>
              </div>
              <p className="text-gray-400 text-md">
                Auckland's trusted choice for professional window cleaning services. 
                Over 10 years of experience bringing clarity and brightness to your spaces.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Our Services</h3>
              <ul className="space-y-2">
                {oversevices.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2">
                <p className="text-gray-400">Auckland, New Zealand</p>
                <a
                  href="tel:0224012900"
                  className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center space-x-2"
                >
                  <Phone className="h-4 w-4" />
                  <span>022 401 2900</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 First Window Cleaning. All rights reserved <a href="https://digitroncx.com" target="_blank">DigitronCX</a>.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;