import Breadcrumb from '../../components/Breadcrumb';
import ContactComponent from '../../components/Contact'
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
