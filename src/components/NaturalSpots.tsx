
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from '@/lib/utils';

interface SpotProps {
  title: string;
  description: string;
  location: string;
  details: string;
  imageSrc: string;
  className?: string;
}

const spotData: SpotProps[] = [
  {
    title: 'Radhanagari Dam',
    description: 'Perfect picnic spot with beautiful vistas',
    location: '2 km from sanctuary gate',
    details: 'Built across Bhogawati River, perfect picnic spot',
    imageSrc: 'https://images.unsplash.com/photo-1501286353178-1ec881214838'
  },
  {
    title: 'Dajipur Waterfall',
    description: 'Hidden gem surrounded by lush forests',
    location: 'Hidden near Dajipur village',
    details: 'Surrounded by thick jungle & bird sounds',
    imageSrc: 'https://images.unsplash.com/photo-1465379944081-7f47de8d74ac'
  },
  {
    title: 'Manmodi Waterfall',
    description: 'Seasonal waterfall best visited during monsoon',
    location: 'Eastern part of the sanctuary',
    details: 'Seasonal fall during monsoon (July–Sep)',
    imageSrc: 'https://images.unsplash.com/photo-1485833077593-4278bba3f11f'
  },
  {
    title: 'Kalamma Devi Temple Dam',
    description: 'Spiritual retreat with natural beauty',
    location: 'Northern edge of the sanctuary',
    details: 'Combination of spiritual and natural spot',
    imageSrc: 'https://images.unsplash.com/photo-1439886183900-e79ec0057170'
  }
];

const SpotCard = ({ title, description, location, details, imageSrc, className }: SpotProps) => {
  return (
    <Card className={cn("overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg", className)}>
      <div className="h-48 overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <CardHeader className="p-4">
        <CardTitle className="text-lg text-forest">{title}</CardTitle>
        <CardDescription className="text-gray-500">{description}</CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-0 space-y-2">
        <div className="flex items-start">
          <span className="font-medium">📍 Location:</span>
          <span className="ml-2 text-gray-700">{location}</span>
        </div>
        <div className="flex items-start">
          <span className="font-medium">💡 Details:</span>
          <span className="ml-2 text-gray-700">{details}</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Link 
          to={`/spot/${title.toLowerCase().replace(/\s+/g, '-')}`}
          className="text-forest hover:text-forest-dark flex items-center text-sm"
        >
          Read More <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </CardFooter>
    </Card>
  );
};

const NaturalSpots = () => {
  return (
    <section className="section-container">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-3">Must-Visit Natural Spots</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore the breathtaking natural wonders that make Radhanagari Wildlife Sanctuary 
          a paradise for nature lovers and adventure seekers.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {spotData.map((spot, index) => (
          <SpotCard key={index} {...spot} />
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <Link 
          to="/attractions"
          className="btn-primary inline-flex items-center"
        >
          Explore All Attractions <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </section>
  );
};

export default NaturalSpots;
