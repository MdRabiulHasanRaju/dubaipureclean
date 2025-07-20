import Breadcrumb from '../../components/Breadcrumb';
import ContactComponent from '../../components/Contact';
import { Helmet } from 'react-helmet-async';
function Contact() {
    const breadcrumbItems = [
        { label: 'Home', path: '/' },
        { label: 'Contact', path: '/contact' },
    ];
  return (
    <>
    <Helmet>
        <title>Contact | Just Clean Dubai</title>
        <meta name='title' content='Contact | Just Clean Dubai'/>
        <meta name='description' content='Trusted deep cleaning company in Dubai offering residential, deep cleaning, move-in/out, and AC duct cleaning. Fast booking, eco-friendly, and reliable service. call +9710561743356'/>
    </Helmet>
    <Breadcrumb items={breadcrumbItems} />
      <ContactComponent />
    </>
  )
}

export default Contact
