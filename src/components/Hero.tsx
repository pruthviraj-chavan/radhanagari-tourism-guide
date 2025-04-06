
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="container mx-auto px-4 py-20 text-center z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-in">
          Explore Radhanagari Wildlife Sanctuary
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto animate-slide-in">
          Hotels, Jungle Safaris, Local Food & Complete Travel Guide
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-slide-in" style={{animationDelay: '0.3s'}}>
          <Link
            to="/radhanagari-hotels-homestays"
            className="bg-forest hover:bg-forest-dark text-white font-bold py-3 px-6 rounded-md transition-colors duration-300 flex items-center justify-center"
          >
            Find Accommodation <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <Link
            to="/radhanagari-wildlife-safari"
            className="bg-earth hover:bg-earth-dark text-forest-dark font-bold py-3 px-6 rounded-md transition-colors duration-300 flex items-center justify-center"
          >
            Book Safari <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
