import { useState ,useEffect } from 'react';
import {useParams ,NavLink} from "react-router-dom";
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import "summernote/dist/summernote-lite.css";
import "./ServiceDetails.css"

const ServiceDetails = () => {
  const { link } = useParams();
  const [service, setService] = useState(null);
  const [serviceNameByCat, setserviceNameByCat] = useState([]);
  const [faqs, setFaqs] = useState([]);
  const [openIndex, setOpenIndex] = useState(0);

  const production = "https://server.justcleandubai.com";
  const development = "http://localhost/dubaipureclean-backend";

  const url = development;

  useEffect(() => {
    const getServiceDetails = async () => {
      const req = await fetch(`${url}/service/getsingleservice/`+link);
      const data =  await req.json();
      setService(data[0]);

      // Get all services under same category
      const Catreq = await fetch(`${url}/service/servicesByCategory/`+data[0].category_id);
      const Catdata =  await Catreq.json();
      setserviceNameByCat(Catdata);

      // ✅ Get FAQs for this service
      const Faqreq = await fetch(`${url}/service/getServiceFaqs/`+data[0].id);
      const Faqdata = await Faqreq.json();
      setFaqs(Faqdata);
    }

    getServiceDetails();
  }, [link]);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!service) {
    return <div className="min-h-screen flex justify-center items-center text-xl">Loading...</div>;
  }

  return (
    <>
    <Helmet>
        <title>{service.title} | Just Clean Dubai</title>
        <meta name='title' content={service.title}/>
        <meta name='description' content={service.title}/>
    </Helmet>
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative">
        <div className="relative h-96 overflow-hidden">
          <img
            src={`${url}/uploads/services/${service.banner_image}`}
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
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.title}</h1>
                <p className="text-xl md:text-xl opacity-90 mb-6">{service.sub_title}</p>
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
                <div 
                  className="prose max-w-none service-description"
                  dangerouslySetInnerHTML={{ __html: service.description }}
                />
              </motion.div>

              {/* ✅ FAQ Section */}
              {faqs.length > 0 && (
                <motion.div
                  className="bg-white rounded-2xl shadow-lg p-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">Frequently Asked Questions</h3>
                  <div className="space-y-6">
                    {faqs.map((faq, index) => (
                      <div
                        key={faq.id}
                        className="border rounded-lg shadow-sm overflow-hidden"
                      >
                        <button
                          onClick={() => toggleAccordion(index)}
                          className="w-full text-left px-4 py-3 bg-gray-100 font-medium hover:bg-gray-200 flex justify-between items-center"
                        >
                          {faq.question}
                          <span>{openIndex === index ? "−" : "+"}</span>
                        </button>
                        {openIndex === index && (
                          <div className="px-4 py-3 bg-white">
                            <p>{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                className="bg-white rounded-2xl shadow-lg p-8"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-xl font-semibold text-center mb-4 btn-primary">{service.category_name}</h3>
                <div className="other-service">
                  {serviceNameByCat.map((catName)=>(
                      <p style={catName.id==service.id?{color:"#d87d28"}:null} key={catName.id}>
                        <NavLink className="text-xl" to={`/service-details/${catName.link}`}>
                          {catName.title}
                        </NavLink>
                      </p>
                  ))}
                </div>

                {/* Contact Info */}
                <div className="mt-8 pt-6 ">
                  <h3 className="mb-4 text-xl font-semibold text-center btn-primary">Contact with Us</h3>
                  <h4 className="font-semibold text-gray-900 mb-4">Need Same Day Service? </h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <span className="text-primary-600">📞</span>
                      <span className="text-gray-600">+9710561743356</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-primary-600">✉️</span>
                      <span className="text-gray-600">info@Justcleandubai.com</span>
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
