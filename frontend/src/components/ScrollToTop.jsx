import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const pathname  = useLocation();
  useEffect(() => {
    const timeout = setTimeout(() => {
      requestAnimationFrame(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }, 50); 
    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;

};

export default ScrollToTop;
