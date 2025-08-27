import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const [services, setServices] = useState([]);
  const [categories, setCategories] = useState([]);

  const production = "https://server.justcleandubai.com";
  const development = "http://localhost/dubaipureclean-backend";

  const url = development;

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const getServiceName = async () => {
      const catReq = await fetch(
        `${url}/service/getAllService/`
      );
      const backendData = await catReq.json();
      setServices(backendData);
    };
    getServiceName();

    let getCategory = async () => {
      const req = await fetch(
        `${url}/service/getServiceCategory`
      );
      const getServiceCategory = await req.json();
      setCategories(getServiceCategory);

    };
    getCategory();
  }, []);

  return (
    <motion.nav
      className={`fixed left-0 top-0 w-screen max-w-screen z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
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
              <img
                className="w-32"
                src="/images/logo.png"
                alt="logo-just clean dubai"
              />
            </motion.div>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink
              key="home"
              className={`font-medium transition-colors duration-300 hover:text-primary-600 ${
                scrolled ? "text-gray-700" : "text-white hover:text-primary-200"
              }`}
              to="/"
            >
              Home
            </NavLink>

            {categories.map((category) => (
            <button
              key={category.id}
              className={`group hover:bg-white/95 hover:p-2 font-medium transition-colors duration-300 hover:text-primary-600 ${
                scrolled
                  ? "text-gray-700"
                  : "text-white hover:text-primary-200"
              }`}
            >
              {category.name}
              <div
                className={`navClass invisible group-hover:visible flex absolute bg-white/95 text-black p-4`}
              >
                {/* services filter by category */}
                {services
                  .filter((srv) => srv.category_id === category.id)
                  .reduce((rows, srv, i) => {
                    // প্রতি 6 টা item এ নতুন array বানাচ্ছি
                    if (i % 8 === 0) rows.push([]);
                    rows[rows.length - 1].push(srv);
                    return rows;
                  }, [])
                  .map((chunk, chunkIndex) => (
                    <div key={chunkIndex} className="mr-6">
                      {chunk.map((service) => (
                        <NavLink to={`/service-details/${service.link}`} key={service.id} className="text-left p-1">
                          {service.title} <br />
                        </NavLink>
                        
                      ))}
                    </div>
                  ))}
              </div>
            </button>
          ))}


            <NavLink
              key="about"
              className={`font-medium transition-colors duration-300 hover:text-primary-600 ${
                scrolled ? "text-gray-700" : "text-white hover:text-primary-200"
              }`}
              to="/about"
            >
              About
            </NavLink>

            <NavLink
              key="contact"
              className={`font-medium transition-colors duration-300 hover:text-primary-600 ${
                scrolled ? "text-gray-700" : "text-white hover:text-primary-200"
              }`}
              to="/contact"
            >
              Contact
            </NavLink>

            <button
              onClick={() => scrollToSection("contact")}
              className="btn-primary"
            >
              +9710561743356
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`block w-6 h-0.5 transition-all duration-300 ${
                  scrolled ? "bg-gray-800" : "bg-white"
                } ${isOpen ? "rotate-45 translate-y-0.5" : ""}`}
              ></span>
              <span
                className={`block w-6 h-0.5 mt-1 transition-all duration-300 ${
                  scrolled ? "bg-gray-800" : "bg-white"
                } ${isOpen ? "opacity-0" : ""}`}
              ></span>
              <span
                className={`block w-6 h-0.5 mt-1 transition-all duration-300 ${
                  scrolled ? "bg-gray-800" : "bg-white"
                } ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`md:hidden`}
          initial={{ display: "none", height: 0 }}
          animate={{
            display: isOpen ? "block" : "none",
            height: isOpen ? "auto" : 0,
          }}
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


            {categories.map((category) => (
            <button
              key={category.id}
              className={`group block w-full text-left px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition-colors duration-300`}
            >
              {category.name}
              <div
                className={`hidden max-h-56 overflow-hidden overflow-y-scroll group-hover:block  bg-white/95 text-black p-4`}
              >
                {/* services filter by category */}
                {services
                  .filter((srv) => srv.category_id === category.id)
                  .reduce((rows, srv, i) => {
                    // প্রতি 6 টা item এ নতুন array বানাচ্ছি
                    if (i % 8 === 0) rows.push([]);
                    rows[rows.length - 1].push(srv);
                    return rows;
                  }, [])
                  .map((chunk, chunkIndex) => (
                    <div key={chunkIndex} className="mr-6">
                      {chunk.map((service) => (
                        <NavLink to={`/service-details/${service.link}`} key={service.id} className="text-left p-1">
                          {service.title} <br />
                        </NavLink>
                        
                      ))}
                    </div>
                  ))}
              </div>
            </button>
          ))}


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
                onClick={() => scrollToSection("contact")}
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
