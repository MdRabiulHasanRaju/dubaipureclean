import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {NavLink} from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Why Choose Us', id: 'why-choose' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <motion.nav
      className={`fixed left-0 top-0 w-screen max-w-screen z-50 transition-all duration-300 ${
    scrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
  }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">✨</span>
            </div>
            <span className={`text-xl font-bold ${scrolled ? 'text-gray-800' : 'text-white'}`}>
              Dubai Pure Clean
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.name=='Home'?
              <NavLink 
              key={item.id}
              className={`font-medium transition-colors duration-300 hover:text-primary-600 ${
                  scrolled ? 'text-gray-700' : 'text-white hover:text-primary-200'
                }`} 
                to="/">
                  Home
              </NavLink>
              :
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-colors duration-300 hover:text-primary-600 ${
                  scrolled ? 'text-gray-700' : 'text-white hover:text-primary-200'
                }`}
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-primary"
            >
              +9710561743356
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block w-6 h-0.5 transition-all duration-300 ${
                scrolled ? 'bg-gray-800' : 'bg-white'
              } ${isOpen ? 'rotate-45 translate-y-0.5' : ''}`}></span>
              <span className={`block w-6 h-0.5 mt-1 transition-all duration-300 ${
                scrolled ? 'bg-gray-800' : 'bg-white'
              } ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 mt-1 transition-all duration-300 ${
                scrolled ? 'bg-gray-800' : 'bg-white'
              } ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="bg-white rounded-lg shadow-lg mt-2 py-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition-colors duration-300"
              >
                {item.name}
              </button>
            ))}
            <div className="px-6 pt-2">
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-primary w-full"
              >
                Get Quote
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;