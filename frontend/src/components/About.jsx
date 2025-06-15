import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-primary-600">Dubai Pure Clean</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              With over 5 years of experience in the cleaning industry, Dubai Pure Clean has been 
              transforming homes and offices across the city. We're not just a cleaning service – 
              we're your partners in creating healthy, beautiful spaces.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our team of trained professionals uses eco-friendly products and advanced cleaning 
              techniques to deliver exceptional results every time. We believe that a clean space 
              is the foundation of a happy, productive life.
            </p>

            {/* Key Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-600 font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Licensed & Insured</h4>
                  <p className="text-gray-600 text-sm">Fully bonded and insured for your peace of mind</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-600 font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Eco-Friendly</h4>
                  <p className="text-gray-600 text-sm">Safe, non-toxic products for your family</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-600 font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Expert Team</h4>
                  <p className="text-gray-600 text-sm">Trained professionals with years of experience</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-600 font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Satisfaction Guaranteed</h4>
                  <p className="text-gray-600 text-sm">100% satisfaction or we'll make it right</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/4239013/pexels-photo-4239013.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional cleaning team"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <motion.div
              className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-2xl p-6 max-w-xs"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-xl">🏆</span>
                </div>
                <div>
                  <div className="font-bold text-gray-900">Top Rated</div>
                  <div className="text-sm text-gray-600">Cleaning Service 2024</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;