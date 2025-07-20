import Breadcrumb from '../../components/Breadcrumb';
import AboutComponent from '../../components/About'
import Testimonials from '../../components/Testimonials'
import WhyChooseUs from '../../components/WhyChooseUs'
import { Helmet } from 'react-helmet-async';
function About() {

const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
  ];
  return (
    <>
    <Helmet>
            <title>About | Just Clean Dubai</title>
            <meta name='title' content='About | Just Clean Dubai'/>
            <meta name='description' content='Trusted deep cleaning company in Dubai offering residential, deep cleaning, move-in/out, and AC duct cleaning. Fast booking, eco-friendly, and reliable service. call +9710561743356'/>
    </Helmet>
    <Breadcrumb items={breadcrumbItems} />
      <AboutComponent />
      <WhyChooseUs />
      <Testimonials />
    </>
  )
}

export default About
