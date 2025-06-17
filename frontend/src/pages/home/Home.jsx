import Hero from '../../components/Hero';
import About from '../../components/About';
import Services from '../../components/Services';
import WhyChooseUs from '../../components/WhyChooseUs';
import Testimonials from '../../components/Testimonials';
import Contact from '../../components/Contact';

function Home() {
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
