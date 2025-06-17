import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/home/Home";
import WhatsAppButton from "./components/WhatsAppButton";
import ServiceDetails from "./pages/services/ServiceDetails";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service-details/:link" element={<ServiceDetails />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
      </BrowserRouter>
    </div>
  );
}

export default App;
