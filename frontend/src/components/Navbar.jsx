import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {NavLink, useLocation} from "react-router-dom";
import './navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const {pathname} = useLocation();

  useEffect(()=>{
    setIsOpen(false)
  },[pathname])

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
          <NavLink to="/">
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <img className='w-32' src="/images/logo.png" alt="logo-just clean dubai" />
          </motion.div>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink
                key="home"
                className={`font-medium transition-colors duration-300 hover:text-primary-600 ${
                  scrolled ? 'text-gray-700' : 'text-white hover:text-primary-200'
                }`}
                to="/"
              >
                Home
            </NavLink>

            <button
                key="DeepCleaning"
                className={`group hover:bg-white/95 hover:p-2 font-medium transition-colors duration-300 hover:text-primary-600 ${
                  scrolled ? 'text-gray-700' : 'text-white hover:text-primary-200'
                }`}
              >
                Deep Cleaning
                <div className={`navClass invisible group-hover:visible flex absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/95 text-black p-4`}>
                  <div>
                    <p className={`text-left p-1`}>Deep Cleaning</p>
                    <p className={`text-left p-1`}>Move In and Out Deep Cleaning</p>
                    <p className={`text-left p-1`}>FLOOR DEEP CLEANING</p>
                    <p className={`text-left p-1`}>OFFICE DEEP CLEANING</p>
                    <p className={`text-left p-1`}>SOFA SHAMPOO CLEANING</p>
                    <p className={`text-left p-1`}>KITCHEN DEEP CLEANING</p>
                  </div>
                  <div>
                    <p className={`text-left p-1`}>Villa Deep Cleaning</p>
                    <p className={`text-left p-1`}>Move In and Out Deep Cleaning</p>
                    <p className={`text-left p-1`}>FLOOR DEEP CLEANING</p>
                    <p className={`text-left p-1`}>OFFICE DEEP CLEANING</p>
                    <p className={`text-left p-1`}>SOFA SHAMPOO CLEANING</p>
                    <p className={`text-left p-1`}>KITCHEN DEEP CLEANING</p>
                  </div>
                  <div>
                    <p className={`text-left p-1`}>Villa Deep Cleaning</p>
                    <p className={`text-left p-1`}>Move In and Out Deep Cleaning</p>
                    <p className={`text-left p-1`}>FLOOR DEEP CLEANING</p>
                    <p className={`text-left p-1`}>OFFICE DEEP CLEANING</p>
                    <p className={`text-left p-1`}>SOFA SHAMPOO CLEANING</p>
                    <p className={`text-left p-1`}>KITCHEN DEEP CLEANING</p>
                  </div>
                </div>
            </button>
            <button
                key="CleaningServices"
                className={`group hover:bg-white/95 hover:p-2 font-medium transition-colors duration-300 hover:text-primary-600 ${
                  scrolled ? 'text-gray-700' : 'text-white hover:text-primary-200'
                }`}
              >
                Cleaning Services
                <div className={`navClass invisible group-hover:visible flex absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/95 text-black p-4`}>
                  <div>
                    <p className={`text-left p-1`}>Cleaning</p>
                    <p className={`text-left p-1`}>Move In and Out Deep Cleaning</p>
                    <p className={`text-left p-1`}>FLOOR DEEP CLEANING</p>
                    <p className={`text-left p-1`}>OFFICE DEEP CLEANING</p>
                    <p className={`text-left p-1`}>SOFA SHAMPOO CLEANING</p>
                    <p className={`text-left p-1`}>KITCHEN DEEP CLEANING</p>
                  </div>
                  <div>
                    <p className={`text-left p-1`}>Villa Deep Cleaning</p>
                    <p className={`text-left p-1`}>Move In and Out Deep Cleaning</p>
                    <p className={`text-left p-1`}>FLOOR DEEP CLEANING</p>
                    <p className={`text-left p-1`}>OFFICE DEEP CLEANING</p>
                    <p className={`text-left p-1`}>SOFA SHAMPOO CLEANING</p>
                    <p className={`text-left p-1`}>KITCHEN DEEP CLEANING</p>
                  </div>
                  <div>
                    <p className={`text-left p-1`}>Villa Deep Cleaning</p>
                    <p className={`text-left p-1`}>Move In and Out Deep Cleaning</p>
                    <p className={`text-left p-1`}>FLOOR DEEP CLEANING</p>
                    <p className={`text-left p-1`}>OFFICE DEEP CLEANING</p>
                    <p className={`text-left p-1`}>SOFA SHAMPOO CLEANING</p>
                    <p className={`text-left p-1`}>KITCHEN DEEP CLEANING</p>
                  </div>
                </div>
            </button>
            <button
                key="TechnicalServices"
                className={`group hover:bg-white/95 hover:p-2 font-medium transition-colors duration-300 hover:text-primary-600 ${
                  scrolled ? 'text-gray-700' : 'text-white hover:text-primary-200'
                }`}
              >
                Technical Services
                <div className={`navClass invisible group-hover:visible flex absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/95 text-black p-4`}>
                  <div>
                    <p className={`text-left p-1`}>Technical</p>
                    <p className={`text-left p-1`}>Move In and Out Deep Cleaning</p>
                    <p className={`text-left p-1`}>FLOOR DEEP CLEANING</p>
                    <p className={`text-left p-1`}>OFFICE DEEP CLEANING</p>
                    <p className={`text-left p-1`}>SOFA SHAMPOO CLEANING</p>
                    <p className={`text-left p-1`}>KITCHEN DEEP CLEANING</p>
                  </div>
                  <div>
                    <p className={`text-left p-1`}>Villa Deep Cleaning</p>
                    <p className={`text-left p-1`}>Move In and Out Deep Cleaning</p>
                    <p className={`text-left p-1`}>FLOOR DEEP CLEANING</p>
                    <p className={`text-left p-1`}>OFFICE DEEP CLEANING</p>
                    <p className={`text-left p-1`}>SOFA SHAMPOO CLEANING</p>
                    <p className={`text-left p-1`}>KITCHEN DEEP CLEANING</p>
                  </div>
                  <div>
                    <p className={`text-left p-1`}>Villa Deep Cleaning</p>
                    <p className={`text-left p-1`}>Move In and Out Deep Cleaning</p>
                    <p className={`text-left p-1`}>FLOOR DEEP CLEANING</p>
                    <p className={`text-left p-1`}>OFFICE DEEP CLEANING</p>
                    <p className={`text-left p-1`}>SOFA SHAMPOO CLEANING</p>
                    <p className={`text-left p-1`}>KITCHEN DEEP CLEANING</p>
                  </div>
                </div>
            </button>
            <button
                key="PaintingServices"
                className={`group hover:bg-white/95 hover:p-2 font-medium transition-colors duration-300 hover:text-primary-600 ${
                  scrolled ? 'text-gray-700' : 'text-white hover:text-primary-200'
                }`}
              >
                Painting Services
                <div className={`navClass invisible group-hover:visible flex absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/95 text-black p-4`}>
                  <div>
                    <p className={`text-left p-1`}>Painting</p>
                    <p className={`text-left p-1`}>Move In and Out Deep Cleaning</p>
                    <p className={`text-left p-1`}>FLOOR DEEP CLEANING</p>
                    <p className={`text-left p-1`}>OFFICE DEEP CLEANING</p>
                    <p className={`text-left p-1`}>SOFA SHAMPOO CLEANING</p>
                    <p className={`text-left p-1`}>KITCHEN DEEP CLEANING</p>
                  </div>
                  <div>
                    <p className={`text-left p-1`}>Villa Deep Cleaning</p>
                    <p className={`text-left p-1`}>Move In and Out Deep Cleaning</p>
                    <p className={`text-left p-1`}>FLOOR DEEP CLEANING</p>
                    <p className={`text-left p-1`}>OFFICE DEEP CLEANING</p>
                    <p className={`text-left p-1`}>SOFA SHAMPOO CLEANING</p>
                    <p className={`text-left p-1`}>KITCHEN DEEP CLEANING</p>
                  </div>
                  <div>
                    <p className={`text-left p-1`}>Villa Deep Cleaning</p>
                    <p className={`text-left p-1`}>Move In and Out Deep Cleaning</p>
                    <p className={`text-left p-1`}>FLOOR DEEP CLEANING</p>
                    <p className={`text-left p-1`}>OFFICE DEEP CLEANING</p>
                    <p className={`text-left p-1`}>SOFA SHAMPOO CLEANING</p>
                    <p className={`text-left p-1`}>KITCHEN DEEP CLEANING</p>
                  </div>
                </div>
            </button>

            <NavLink
                key="about"
                className={`font-medium transition-colors duration-300 hover:text-primary-600 ${
                  scrolled ? 'text-gray-700' : 'text-white hover:text-primary-200'
                }`}
                to="/about"
              >
                About
            </NavLink>

            <NavLink
                key="contact"
                className={`font-medium transition-colors duration-300 hover:text-primary-600 ${
                  scrolled ? 'text-gray-700' : 'text-white hover:text-primary-200'
                }`}
                to="/contact"
              >
                Contact
            </NavLink>








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
          className={`md:hidden`}
          initial={{ display: 'none', height: 0 }}
          animate={{ display: isOpen ? 'block' : 'none', height: isOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="bg-white rounded-lg shadow-lg mt-2 py-4">
            <NavLink
                key="home"
                className="block w-full text-left px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition-colors duration-300"
                to="/"
              >
                Home
            </NavLink>

            <button
                key="DeepCleaning"
                className="group block w-full text-left px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition-colors duration-300"
              >
                Deep Cleaning
                <div className={`hidden max-h-56 overflow-hidden overflow-y-scroll group-hover:block  bg-white/95 text-black p-4`}>
                  <div>
                    <p className={`text-left p-1`}>Deep Cleaning</p>
                    <p className={`text-left p-1`}>Move In and Out Deep Cleaning</p>
                    <p className={`text-left p-1`}>FLOOR DEEP CLEANING</p>
                    <p className={`text-left p-1`}>OFFICE DEEP CLEANING</p>
                    <p className={`text-left p-1`}>SOFA SHAMPOO CLEANING</p>
                    <p className={`text-left p-1`}>KITCHEN DEEP CLEANING</p>
                  </div>
                  <div>
                    <p className={`text-left p-1`}>Villa Deep Cleaning</p>
                    <p className={`text-left p-1`}>Move In and Out Deep Cleaning</p>
                    <p className={`text-left p-1`}>FLOOR DEEP CLEANING</p>
                    <p className={`text-left p-1`}>OFFICE DEEP CLEANING</p>
                    <p className={`text-left p-1`}>SOFA SHAMPOO CLEANING</p>
                    <p className={`text-left p-1`}>KITCHEN DEEP CLEANING</p>
                  </div>
                  <div>
                    <p className={`text-left p-1`}>Villa Deep Cleaning</p>
                    <p className={`text-left p-1`}>Move In and Out Deep Cleaning</p>
                    <p className={`text-left p-1`}>FLOOR DEEP CLEANING</p>
                    <p className={`text-left p-1`}>OFFICE DEEP CLEANING</p>
                    <p className={`text-left p-1`}>SOFA SHAMPOO CLEANING</p>
                    <p className={`text-left p-1`}>KITCHEN DEEP CLEANING</p>
                  </div>
                </div>
            </button>
            <button
                key="CleaningServices"
                className="group block w-full text-left px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition-colors duration-300"
              >
                Cleaning Services
                <div className={`hidden max-h-56 overflow-hidden overflow-y-scroll group-hover:block  bg-white/95 text-black p-4`}>
                  <div>
                    <p className={`text-left p-1`}>Cleaning</p>
                    <p className={`text-left p-1`}>Move In and Out Deep Cleaning</p>
                    <p className={`text-left p-1`}>FLOOR DEEP CLEANING</p>
                    <p className={`text-left p-1`}>OFFICE DEEP CLEANING</p>
                    <p className={`text-left p-1`}>SOFA SHAMPOO CLEANING</p>
                    <p className={`text-left p-1`}>KITCHEN DEEP CLEANING</p>
                  </div>
                  <div>
                    <p className={`text-left p-1`}>Villa Deep Cleaning</p>
                    <p className={`text-left p-1`}>Move In and Out Deep Cleaning</p>
                    <p className={`text-left p-1`}>FLOOR DEEP CLEANING</p>
                    <p className={`text-left p-1`}>OFFICE DEEP CLEANING</p>
                    <p className={`text-left p-1`}>SOFA SHAMPOO CLEANING</p>
                    <p className={`text-left p-1`}>KITCHEN DEEP CLEANING</p>
                  </div>
                  <div>
                    <p className={`text-left p-1`}>Villa Deep Cleaning</p>
                    <p className={`text-left p-1`}>Move In and Out Deep Cleaning</p>
                    <p className={`text-left p-1`}>FLOOR DEEP CLEANING</p>
                    <p className={`text-left p-1`}>OFFICE DEEP CLEANING</p>
                    <p className={`text-left p-1`}>SOFA SHAMPOO CLEANING</p>
                    <p className={`text-left p-1`}>KITCHEN DEEP CLEANING</p>
                  </div>
                </div>
            </button>
            <button
                key="TechnicalServices"
                className="group block w-full text-left px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition-colors duration-300"
              >
                Technical Services
                <div className={`hidden max-h-56 overflow-hidden overflow-y-scroll group-hover:block  bg-white/95 text-black p-4`}>
                  <div>
                    <p className={`text-left p-1`}>Technical</p>
                    <p className={`text-left p-1`}>Move In and Out Deep Cleaning</p>
                    <p className={`text-left p-1`}>FLOOR DEEP CLEANING</p>
                    <p className={`text-left p-1`}>OFFICE DEEP CLEANING</p>
                    <p className={`text-left p-1`}>SOFA SHAMPOO CLEANING</p>
                    <p className={`text-left p-1`}>KITCHEN DEEP CLEANING</p>
                  </div>
                  <div>
                    <p className={`text-left p-1`}>Villa Deep Cleaning</p>
                    <p className={`text-left p-1`}>Move In and Out Deep Cleaning</p>
                    <p className={`text-left p-1`}>FLOOR DEEP CLEANING</p>
                    <p className={`text-left p-1`}>OFFICE DEEP CLEANING</p>
                    <p className={`text-left p-1`}>SOFA SHAMPOO CLEANING</p>
                    <p className={`text-left p-1`}>KITCHEN DEEP CLEANING</p>
                  </div>
                  <div>
                    <p className={`text-left p-1`}>Villa Deep Cleaning</p>
                    <p className={`text-left p-1`}>Move In and Out Deep Cleaning</p>
                    <p className={`text-left p-1`}>FLOOR DEEP CLEANING</p>
                    <p className={`text-left p-1`}>OFFICE DEEP CLEANING</p>
                    <p className={`text-left p-1`}>SOFA SHAMPOO CLEANING</p>
                    <p className={`text-left p-1`}>KITCHEN DEEP CLEANING</p>
                  </div>
                </div>
            </button>
            <button
                key="PaintingServices"
                className="group block w-full text-left px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition-colors duration-300"
              >
                Painting Services
                <div className={`hidden max-h-56 overflow-hidden overflow-y-scroll group-hover:block  bg-white/95 text-black p-4`}>
                  <div>
                    <p className={`text-left p-1`}>Painting</p>
                    <p className={`text-left p-1`}>Move In and Out Deep Cleaning</p>
                    <p className={`text-left p-1`}>FLOOR DEEP CLEANING</p>
                    <p className={`text-left p-1`}>OFFICE DEEP CLEANING</p>
                    <p className={`text-left p-1`}>SOFA SHAMPOO CLEANING</p>
                    <p className={`text-left p-1`}>KITCHEN DEEP CLEANING</p>
                  </div>
                  <div>
                    <p className={`text-left p-1`}>Villa Deep Cleaning</p>
                    <p className={`text-left p-1`}>Move In and Out Deep Cleaning</p>
                    <p className={`text-left p-1`}>FLOOR DEEP CLEANING</p>
                    <p className={`text-left p-1`}>OFFICE DEEP CLEANING</p>
                    <p className={`text-left p-1`}>SOFA SHAMPOO CLEANING</p>
                    <p className={`text-left p-1`}>KITCHEN DEEP CLEANING</p>
                  </div>
                  <div>
                    <p className={`text-left p-1`}>Villa Deep Cleaning</p>
                    <p className={`text-left p-1`}>Move In and Out Deep Cleaning</p>
                    <p className={`text-left p-1`}>FLOOR DEEP CLEANING</p>
                    <p className={`text-left p-1`}>OFFICE DEEP CLEANING</p>
                    <p className={`text-left p-1`}>SOFA SHAMPOO CLEANING</p>
                    <p className={`text-left p-1`}>KITCHEN DEEP CLEANING</p>
                  </div>
                </div>
            </button>

            <NavLink
                key="about"
                className="block w-full text-left px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition-colors duration-300"
                to="/about"
              >
                About
            </NavLink>

            <NavLink
                key="contact"
                className="block w-full text-left px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition-colors duration-300"
                to="/contact"
              >
                Contact
            </NavLink>


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