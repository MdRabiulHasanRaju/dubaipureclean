import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Homeowner',
      image: 'https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'Just Clean Dubai transformed my home! Their attention to detail is incredible, and I love that they use eco-friendly products. My family feels safer and my house has never looked better.'
    },
    {
      name: 'Michael Chen',
      role: 'Business Owner',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'We\'ve been using Just Clean Dubai for our office cleaning for over 2 years. They\'re reliable, professional, and always exceed our expectations. Highly recommend!'
    },
    {
      name: 'Emily Davis',
      role: 'Working Mom',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'As a busy mom, Just Clean Dubai has been a lifesaver. They\'re flexible with scheduling and do an amazing job. I can focus on my family while they take care of the cleaning.'
    },
    {
      name: 'David Rodriguez',
      role: 'Property Manager',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'I manage multiple properties and Just Clean Dubai handles move-in/move-out cleaning for all of them. They\'re thorough, punctual, and make my job so much easier.'
    },
    {
      name: 'Lisa Thompson',
      role: 'Retired Teacher',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'I was hesitant about hiring a cleaning service, but Just Clean Dubai exceeded all my expectations. They treat my home with such care and respect. Couldn\'t be happier!'
    },
    {
      name: 'James Wilson',
      role: 'Tech Executive',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'Professional, efficient, and trustworthy. Just Clean Dubai does an excellent job cleaning our villa. The team is courteous and always leaves everything spotless.'
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-xl ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
      >
        ⭐
      </span>
    ));
  };

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our <span className="text-primary-600">Customers Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about our cleaning services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {renderStars(testimonial.rating)}
              </div>

              {/* Quote */}
              <p className="text-gray-700 leading-relaxed mb-8 italic">
                "{testimonial.text}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-12 text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-4">Join Our Happy Customers</h3>
          <p className="text-xl mb-8 opacity-90">
            Experience the Just Clean Dubai difference and see why our customers love us.
          </p>
          <button
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-300"
          >
            Get Your Free Quote Today
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;