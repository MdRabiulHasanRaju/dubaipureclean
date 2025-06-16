import Breadcrumb from '../../components/Breadcrumb';
import ContactComponent from '../../components/Contact'
import Testimonials from '../../components/Testimonials'
import WhyChooseUs from '../../components/WhyChooseUs'
function Contact() {
    const breadcrumbItems = [
        { label: 'Home', path: '/' },
        { label: 'Contact', path: '/contact' },
    ];
  return (
    <>
    <Breadcrumb items={breadcrumbItems} />
      <ContactComponent />
    </>
  )
}

export default Contact
