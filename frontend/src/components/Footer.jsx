import { motion } from 'framer-motion';
import { NavLink } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            className="col-span-1 md:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img className='w-32' src="/images/logo.png" alt="logo-dubaipureclean" />
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted partner for professional cleaning services. We transform spaces 
              with eco-friendly solutions and exceptional attention to detail.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors duration-300">
                <span>📘</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors duration-300">
                <span>📷</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors duration-300">
                <span>🐦</span>
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
                <li key="home">
                  <NavLink key="home" to="/">Home</NavLink>
                </li>
                <li key="about">
                  <NavLink key="about" to="/about">About Us</NavLink>
                </li>
                <li key="contact">
                  <NavLink key="contact" to="/contact">Contact Us</NavLink>
                </li>
                
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
                <li key="villa-deep-cleaning">
                  <span className="text-gray-300">
                    <NavLink key="villa-deep-cleaning" to="/service-details/villa-deep-cleaning">Villa Deep Cleaning</NavLink>
                  </span>
                </li>
                <li key="Residential-Deep-Cleaning-Services-in-Dubai">
                  <span className="text-gray-300">
                    <NavLink key="Residential-Deep-Cleaning-Services-in-Dubai" to="/service-details/Residential-Deep-Cleaning-Services-in-Dubai">Residential Deep Cleaning</NavLink>
                  </span>
                </li>
                <li key="window-cleaning-in-dubai">
                  <span className="text-gray-300">
                    <NavLink key="window-cleaning-in-dubai" to="/service-details/window-cleaning-in-dubai">Window Cleaning</NavLink>
                  </span>
                </li>
                <li key="ac-cleaning-services-in-dubai">
                  <span className="text-gray-300">
                    <NavLink key="ac-cleaning-services-in-dubai" to="/service-details/ac-cleaning-services-in-dubai">AC Cleaning Services</NavLink>
                  </span>
                </li>
            </ul>
          </motion.div>
        </div>

        {/* Contact Info */}
        <motion.div
          className="border-t border-gray-800 mt-12 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <span className="text-primary-400">📍</span>
              <span className="text-gray-300">Alquoz 3, Dubai, UAE</span>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <span className="text-primary-400">📞</span>
              <span className="text-gray-300"><a href="tel:+971557940881">+971 55 794 0881</a></span>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <span className="text-primary-400">✉️</span>
              <span className="text-gray-300">info@justcleandubai.com</span>
            </div>
          </div>
        </motion.div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Just Clean Dubai. All rights reserved. | Privacy Policy | Terms of Service
          </p>
          <p className="text-gray-400">
            <a target='_blank' href="https://www.linkedin.com/in/mdrabiulhasanraju">Developed By Md Rabiul Hasan</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;