import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import Seo from './components/Seo';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const ServiceDetails = lazy(() => import('./pages/ServiceDetails'));

function ScrollTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}
const NotFound = () => (
  <main className="container-x grid min-h-[70vh] place-content-center pt-32 text-center">
    <Seo title="Page not found" description="This page does not exist." noindex />
    <h1 className="font-display text-6xl">404</h1>
    <p className="mt-3 text-ink/70">We couldn't find that page.</p>
    <Link to="/" className="btn-dark mx-auto mt-6">Back to home</Link>
  </main>
);

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollTop />
        <Navbar />
        <Suspense fallback={<div className="min-h-screen" />}>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/service-details/:link" element={<ServiceDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Footer />
        <FloatingCTA />
      </BrowserRouter>
    </HelmetProvider>
  );
}
