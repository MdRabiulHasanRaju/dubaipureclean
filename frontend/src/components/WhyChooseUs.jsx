import { motion } from 'framer-motion';

const WhyChooseUs = () => {
  const features = [
    {
      icon: '🌱',
      title: 'Eco-Friendly Products',
      description: 'We use only non-toxic, biodegradable cleaning products that are safe for your family and pets.'
    },
    {
      icon: '👥',
      title: 'Expert Staff',
      description: 'Our trained professionals have years of experience and undergo continuous training to stay updated with best practices.'
    },
    {
      icon: '🛡️',
      title: 'Trusted Company',
      description: 'Fully licensed, bonded, and insured. We have built trust with hundreds of satisfied customers over the years.'
    },
    {
      icon: '💰',
      title: 'Competitive Pricing',
      description: 'Quality service at fair prices. We offer transparent pricing with no hidden fees or surprises.'
    },
    {
      icon: '⏰',
      title: 'Flexible Scheduling',
      description: 'We work around your schedule. Available 7 days a week with same-day service options.'
    },
    {
      icon: '✅',
      title: 'Satisfaction Guarantee',
      description: '100% satisfaction guaranteed. If you\'re not happy with our service, we\'ll make it right or refund your money.'
    }
  ];

  return (
    <section id="why-choose" className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose <span className="text-primary-600">Dubai Pure Clean</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're committed to providing exceptional cleaning services that exceed your expectations. 
            Here's what sets us apart from the competition.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-20 bg-white rounded-2xl shadow-xl p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">300+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">5+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">600+</div>
              <div className="text-gray-600">Homes Cleaned</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">24/7</div>
              <div className="text-gray-600">Customer Support</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;