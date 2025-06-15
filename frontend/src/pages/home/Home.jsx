import Hero from '../../components/Hero';
import About from '../../components/About';
import Services from '../../components/Services';
import WhyChooseUs from '../../components/WhyChooseUs';
import Testimonials from '../../components/Testimonials';
import Contact from '../../components/Contact';

function Home() {
//   const [currentView, setCurrentView] = useState('home');
//   const [selectedService, setSelectedService] = useState(null);

//   const showServiceDetails = (service) => {
    // setSelectedService(service);
    // setCurrentView('service-details');
//   };

//   const showHome = () => {
//     setCurrentView('home');
//     setSelectedService(null);
//   };

//   if (currentView === 'service-details' && selectedService) {
//     return (
//       <div className="App">
//         <ServiceDetailsPage 
//           service={selectedService} 
//           onBack={showHome}
//         />
//         <WhatsAppButton />
//       </div>
//     );
//   }

  return (
    <div className="App">
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Testimonials />
        <Contact />
    </div>
  );
}

export default Home
