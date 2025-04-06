
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const SafariSection = () => {
  return (
    <section className="section-container bg-forest text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold mb-6 text-white">Wildlife Safari Experience</h2>
            <p className="mb-6 text-gray-200">
              Go deep into the Radhanagari forest and experience wildlife safaris led by trained guides. 
              Spot the majestic Indian Bison (Gaur), elusive leopards, and over 230 bird species 
              in their natural habitat.
            </p>
            
            <div className="bg-forest-dark p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold mb-4 text-white">Safari Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Clock className="h-5 w-5 mr-3 text-earth" />
                  <div>
                    <h4 className="font-medium text-white">Safari Timings</h4>
                    <p className="text-gray-200">Morning: 6:30 AM – 10:00 AM</p>
                    <p className="text-gray-200">Evening: 3:30 PM – 6:00 PM</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Calendar className="h-5 w-5 mr-3 text-earth" />
                  <div>
                    <h4 className="font-medium text-white">Best Time to Visit</h4>
                    <p className="text-gray-200">October to May (Summer & Winter)</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Link 
              to="/radhanagari-wildlife-safari"
              className="bg-earth hover:bg-earth-dark text-forest-dark font-bold py-3 px-6 rounded-md transition-colors duration-300 inline-flex items-center"
            >
              Book Safari <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027" 
                alt="Indian Bison at Radhanagari" 
                className="rounded-lg w-full h-48 object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1466721591366-2d5fba72006d" 
                alt="Wildlife at Radhanagari" 
                className="rounded-lg w-full h-48 object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1493962853295-0fd70327578a" 
                alt="Birds at Radhanagari" 
                className="rounded-lg w-full h-48 object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1485833077593-4278bba3f11f" 
                alt="Safari at Radhanagari" 
                className="rounded-lg w-full h-48 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafariSection;
