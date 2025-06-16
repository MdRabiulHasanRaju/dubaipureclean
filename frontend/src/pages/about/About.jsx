import Breadcrumb from '../../components/Breadcrumb';
import AboutComponent from '../../components/About'
import Testimonials from '../../components/Testimonials'
import WhyChooseUs from '../../components/WhyChooseUs'
function About() {

const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
  ];
  return (
    <>
    <Breadcrumb items={breadcrumbItems} />
      <AboutComponent />
      <WhyChooseUs />
      <Testimonials />
    </>
  )
}

export default About
