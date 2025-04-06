
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  withHero?: boolean;
}

const Layout = ({ children, withHero = false }: LayoutProps) => {
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
