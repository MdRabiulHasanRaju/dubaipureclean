import { useState ,useEffect } from 'react';
import {useParams } from "react-router-dom";
import { motion } from 'framer-motion';
import { servicesData } from '../../data/servicesData';

const ServiceDetails = () => {
  const { link } = useParams();
  const [service, setService] = useState(null);

  useEffect(() => {
    const serviceData = servicesData.find(s => s.id == link);
    setService(serviceData);
  }, [link]);


  const [selectedPackage, setSelectedPackage] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    preferredDate: '',
    preferredTime: '',
    specialRequests: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleBooking = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log('Booking submitted:', { service, package: service.packages[selectedPackage], formData });
    alert('Booking request submitted! We\'ll contact you within 24 hours to confirm.');
  };

  if (!service) {
    return <div className="min-h-screen flex justify-center items-center text-xl">Loading...</div>;
  }


  return (
    <>
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative">
        <div className="relative h-96 overflow-hidden">
          <img
            src={service.detailImage}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
          <div className="absolute inset-0 flex items-center">
            <div className="container-custom">
              <motion.div
                className="text-white max-w-2xl"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h1 className="text-4xl md:text-6xl font-bold mb-4">{service.title}</h1>
                <p className="text-xl md:text-2xl opacity-90 mb-6">{service.subtitle}</p>
                <div className="flex flex-wrap gap-4">
                  {service.features.map((feature, index) => (
                    <span
                      key={index}
                      className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Service Information */}
            <div className="lg:col-span-2">
              {/* Description */}
              <motion.div
                className="bg-white rounded-2xl shadow-lg p-8 mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Service Overview</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">{service.fullDescription}</p>
                
                {/* What's Included */}
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">What's Included</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.included.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-green-600 text-sm">✓</span>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Process */}
              <motion.div
                className="bg-white rounded-2xl shadow-lg p-8 mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Our Process</h3>
                <div className="space-y-6">
                  {service.process.map((step, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-primary-600 font-bold">{index + 1}</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h4>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* FAQ */}
              <motion.div
                className="bg-white rounded-2xl shadow-lg p-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Frequently Asked Questions</h3>
                <div className="space-y-6">
                  {service.faq.map((item, index) => (
                    <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">{item.question}</h4>
                      <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Booking Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                className="bg-white rounded-2xl shadow-lg p-8 sticky top-24"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                {/* Package Selection */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Choose Your Package</h3>
                  <div className="space-y-4">
                    {service.packages.map((pkg, index) => (
                      <div
                        key={index}
                        className={`border-2 rounded-xl p-4 cursor-pointer transition-all duration-300 ${
                          selectedPackage === index
                            ? 'border-primary-500 bg-primary-50 shadow-md'
                            : 'border-gray-200 hover:border-gray-300 hover:shadow-sm'
                        }`}
                        onClick={() => setSelectedPackage(index)}
                      >
                        <div className="flex justify-between items-start mb-3">
                          <h4 className="font-semibold text-gray-900">{pkg.name}</h4>
                          <span className="text-xl font-bold text-primary-600">{pkg.price}</span>
                        </div>
                        <p className="text-gray-600 text-sm mb-3">{pkg.description}</p>
                        <div className="flex justify-between text-xs text-gray-500">
                          <span>Duration: {pkg.duration}</span>
                          <span>Size: {pkg.size}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Booking Form */}
                <form onSubmit={handleBooking} className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Book This Service</h3>
                  
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name *"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-300"
                  />
                  
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-300"
                  />
                  
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number *"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-300"
                  />
                  
                  <textarea
                    name="address"
                    placeholder="Service Address *"
                    required
                    rows="3"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-300"
                  ></textarea>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-300"
                    />
                    
                    <select
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-300"
                    >
                      <option value="">Preferred Time</option>
                      <option value="morning">Morning (8AM-12PM)</option>
                      <option value="afternoon">Afternoon (12PM-5PM)</option>
                      <option value="evening">Evening (5PM-8PM)</option>
                    </select>
                  </div>
                  
                  <textarea
                    name="specialRequests"
                    placeholder="Special Requests or Notes"
                    rows="3"
                    value={formData.specialRequests}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-300"
                  ></textarea>

                  <button
                    type="submit"
                    className="w-full btn-primary text-lg py-4"
                  >
                    Book Now - {service.packages[selectedPackage].price}
                  </button>
                  
                  <p className="text-xs text-gray-500 text-center">
                    * We'll contact you within 24 hours to confirm your booking
                  </p>
                </form>

                {/* Contact Info */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-4">Need Help?</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <span className="text-primary-600">📞</span>
                      <span className="text-gray-600">+9710504370732, +9710561743356</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-primary-600">✉️</span>
                      <span className="text-gray-600">info@DubaiPureClean.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-primary-600">🕒</span>
                      <div className="text-gray-600 text-sm">
                        <div>Mon-Fri: 8AM-6PM</div>
                        <div>Sat-Sun: 9AM-5PM</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default ServiceDetails;