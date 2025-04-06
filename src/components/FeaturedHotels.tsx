
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';

interface HotelProps {
  name: string;
  description: string;
  location: string;
  amenities: string[];
  price: string;
  rating: number;
  imageSrc: string;
}

const hotelData: HotelProps[] = [
  {
    name: 'Dajipur Forest Resort',
    description: 'Luxury eco-resort with stunning forest views',
    location: '2 km from Safari Gate',
    amenities: ['Free WiFi', 'Restaurant', 'Safari Tours', 'Parking'],
    price: '₹4,500/night',
    rating: 4.8,
    imageSrc: 'https://images.unsplash.com/photo-1472396961693-142e6e269027'
  },
  {
    name: 'Jungle Breeze Homestay',
    description: 'Authentic homestay with local experiences',
    location: 'Near Radhanagari Dam',
    amenities: ['Home-cooked meals', 'Night Safari', 'Guided Walks', 'Cultural Activities'],
    price: '₹2,800/night',
    rating: 4.6,
    imageSrc: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d'
  },
  {
    name: 'Shahu Nature Lodge',
    description: 'Perfect for couples and photographers',
    location: 'Edge of the sanctuary',
    amenities: ['Photography Deck', 'Organic Food', 'Bird Watching', 'Library'],
    price: '₹3,200/night',
    rating: 4.7,
    imageSrc: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a'
  }
];

const FeaturedHotels = () => {
  return (
    <section className="bg-earth-light py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Where to Stay</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find the perfect accommodation for your Radhanagari adventure, from luxury eco-resorts to authentic homestays.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {hotelData.map((hotel, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
              <div className="h-48 overflow-hidden">
                <img 
                  src={hotel.imageSrc} 
                  alt={hotel.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold text-forest">{hotel.name}</h3>
                  <div className="flex items-center bg-forest text-white px-2 py-1 rounded text-sm">
                    <Star className="h-3 w-3 mr-1 fill-current" /> 
                    <span>{hotel.rating}</span>
                  </div>
                </div>
                <p className="text-gray-500 text-sm mb-2">{hotel.location}</p>
                <p className="text-gray-700 mb-4">{hotel.description}</p>
                <div className="mb-4 flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {hotel.amenities.map((amenity, i) => (
                      <span key={i} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-forest font-bold">{hotel.price}</span>
                  <Link 
                    to={`/radhanagari-hotels-homestays`}
                    className="text-forest hover:text-forest-dark flex items-center"
                  >
                    View Details <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            to="/radhanagari-hotels-homestays"
            className="btn-primary inline-flex items-center"
          >
            View All Accommodations <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedHotels;
