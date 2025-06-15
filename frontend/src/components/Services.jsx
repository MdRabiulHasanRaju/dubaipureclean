import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import { servicesData } from '../data/servicesData';

const Services = ({ onServiceClick }) => {
  const services = [
    {
      link:'villa-cleaning',
      icon: '🏡',
      title: 'Villa Cleaning',
      description: 'Comprehensive cleaning for large homes and villas, including all rooms, outdoor areas, and special attention to detail.',
      features: ['Deep cleaning', 'Outdoor spaces', 'Premium care'],
      price: 'From $150'
    },
    {
      link:'carpet-shampooing',
      icon: '🧽',
      title: 'Carpet Shampooing',
      description: 'Professional carpet cleaning using advanced shampooing techniques to remove stains, odors, and allergens.',
      features: ['Stain removal', 'Odor elimination', 'Allergen treatment'],
      price: 'From $80'
    },
    {
      link:'deep-cleaning',
      icon: '✨',
      title: 'Deep Cleaning',
      description: 'Thorough, detailed cleaning that reaches every corner. Perfect for seasonal cleaning or special occasions.',
      features: ['Every corner', 'Detailed work', 'Seasonal perfect'],
      price: 'From $120'
    },
    {
      link:'villa-cleaning',
      icon: '📦',
      title: 'Move In/Out',
      description: 'Complete cleaning service for moving situations. We ensure your old or new place is spotless.',
      features: ['Complete service', 'Move-ready', 'Spotless results'],
      price: 'From $200'
    },
    {
      link:'villa-cleaning',
      icon: '🪟',
      title: 'Window Cleaning',
      description: 'Crystal clear windows inside and out. Professional equipment ensures streak-free, sparkling results.',
      features: ['Inside & outside', 'Streak-free', 'Professional tools'],
      price: 'From $60'
    },
    {
      link:'villa-cleaning',
      icon: '🏢',
      title: 'Office Cleaning',
      description: 'Maintain a professional work environment with our regular office cleaning services.',
      features: ['Regular service', 'Professional space', 'Flexible schedule'],
      price: 'From $100'
    }
  ];

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
              key={index}
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
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <div className="text-2xl font-bold text-primary-600">{service.price}</div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-green-600 text-xs">✓</span>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                {/* <button onClick={() => handleServiceClick(service)} className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300">
                  View Details & Book
                </button> */}
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