import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "+9710561743356";
    const message = 'Hi! I would like to know more about your cleaning services.';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url,'_blank')
  }

  const handleCallClick = () => {
    const phoneNumber = "+9710561743356";
    const url = `tel:+9710561743356`;
    window.open(url,'_blank')
  }

  return (
    <section
      id="home"
      className="pt-20 md:pt-28 pb-8 min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row text-center text-white">
          <div className="md:w-1/2 w-full">
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Professional
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Cleaning Services
              </span>
            </motion.h1>

            <motion.p
              className="px-8 md:px-0 text-lg md:text-xl mb-12 max-w-3xl mx-auto opacity-90 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Transform your space with our eco-friendly cleaning solutions. We
              bring sparkle to your home and peace to your mind.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button
                onClick={handleWhatsAppClick}
                className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-gray-900 font-bold py-4 px-8 rounded-lg text-lg shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
              📞 Book Now
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("services")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300"
              >
                Our Services
              </button>
            </motion.div>
          </div>
          <div className="md:w-1/2 w-full max-w-md mx-auto flex items-center scale-75 md:scale-100">
            <Swiper
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 1 },
                1024: { slidesPerView: 1 },
              }}
              spaceBetween={30}
              loop={true}
              autoplay={{ delay: 2500 }}
              modules={[Autoplay]}
            >
              <SwiperSlide>
                <img
                  className="w-max rounded-md"
                  src="https://images.pexels.com/photos/6195273/pexels-photo-6195273.jpeg"
                  alt="slider image"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="w-max rounded-md"
                  src="https://images.pexels.com/photos/6195277/pexels-photo-6195277.jpeg"
                  alt="slider image"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="w-max rounded-md"
                  src="https://images.pexels.com/photos/6195277/pexels-photo-6195277.jpeg"
                  alt="slider image"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="w-max rounded-md"
                  src="https://images.pexels.com/photos/6195277/pexels-photo-6195277.jpeg"
                  alt="slider image"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="w-max rounded-md"
                  src="https://images.pexels.com/photos/6195277/pexels-photo-6195277.jpeg"
                  alt="slider image"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        {/* Stats */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6 md:mt-20 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400">300+</div>
                <div className="text-white/80 mt-2">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400">5+</div>
                <div className="text-white/80 mt-2">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400">100%</div>
                <div className="text-white/80 mt-2">
                  Satisfaction Guaranteed
                </div>
              </div>
            </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 w-full flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
