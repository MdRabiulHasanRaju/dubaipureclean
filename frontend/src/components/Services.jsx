import { motion } from 'framer-motion';
import { useState ,useEffect } from 'react';
import { Link } from "react-router-dom";
import { servicesData } from '../data/servicesData';

const Services = ({ onServiceClick }) => {
  const [services, setService] = useState([]);


    useEffect(() => {
      const getService = async () => {
        const req = await fetch("http://localhost/dubaipureclean-backend/service/servicesForHomePage/1");
        const data =  await req.json();
        setService(data);
      }
      getService();
    }, []);

  const handleServiceClick = (service) => {
    const serviceData = servicesData.find(s => s.title === service.title);
    if (serviceData && onServiceClick) {
      onServiceClick(serviceData);
    }
  };

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-primary-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a complete range of professional cleaning services tailored to meet your specific needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              // onClick={() => handleServiceClick(service)}
            >
              {/* Card Header */}
              <div className="bg-gradient-to-r from-primary-50 to-secondary-50 p-6 group-hover:from-primary-100 group-hover:to-secondary-100 transition-colors duration-300">
                {/* <div className="text-4xl mb-4">{service.icon}</div> */}
                <img className='aspect-video object-cover' src={`http://localhost/dubaipureclean-backend/uploads/services/${service.featured_image}`} alt="Featured Image" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                {/* <div className="text-2xl font-bold text-primary-600">{service.price}</div> */}
              </div>

              {/* Card Body */}
              <div className="p-6">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.sub_title}
                </p>

                <Link className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300" to={`/service-details/${service.link}`}>
                  View Details & Book
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-gray-600 mb-6">
            Don't see what you're looking for? We offer custom cleaning solutions.
          </p>
          <button
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="btn-outline"
          >
            Request Custom Quote
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;