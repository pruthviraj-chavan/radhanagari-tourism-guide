
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  withHero?: boolean;
}

const Layout = ({ children, withHero = false }: LayoutProps) => {
  const location = useLocation();

  // Scroll to top on route change for better UX
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className={`flex-grow ${!withHero && 'pt-6'}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
