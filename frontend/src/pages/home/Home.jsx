import { Helmet } from 'react-helmet-async';
import Hero from '../../components/Hero';
import About from '../../components/About';
import Services from '../../components/Services';
import WhyChooseUs from '../../components/WhyChooseUs';
import Testimonials from '../../components/Testimonials';
import Contact from '../../components/Contact';

function Home() {
  return (
    <div className="App">
      <Helmet>
        <title>Deep Cleaning Services | Just Clean Dubai</title>
        <meta name='title' content='Deep Cleaning Services | Just Clean Dubai'/>
        <meta name='description' content='Trusted deep cleaning company in Dubai offering residential, deep cleaning, move-in/out, and AC duct cleaning. Fast booking, eco-friendly, and reliable service. call +9710561743356'/>
      </Helmet>
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
