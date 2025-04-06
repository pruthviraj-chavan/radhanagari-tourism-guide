import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, MapPin, Wifi, Utensils, Car, Camera, Home, Coffee, TreePine, Phone, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HotelProps {
  id: number;
  name: string;
  description: string;
  location: string;
  distance: string;
  price: string;
  rating: number;
  type: 'resort' | 'homestay' | 'lodge';
  amenities: string[];
  contact: string;
  website?: string;
  imageSrc: string;
}

const hotels: HotelProps[] = [
  {
    id: 1,
    name: 'Dajipur Forest Resort',
    description: 'Luxury eco-resort with stunning panoramic forest views and modern amenities while staying close to nature.',
    location: 'Near Dajipur Gate',
    distance: '2 km from Safari Gate',
    price: '₹4,500/night',
    rating: 4.8,
    type: 'resort',
    amenities: ['Free WiFi', 'Restaurant', 'Safari Tours', 'Parking', 'Room Service'],
    contact: '+91 9876543210',
    website: 'https://example.com/dajipur-resort',
    imageSrc: 'https://images.unsplash.com/photo-1472396961693-142e6e269027'
  },
  {
    id: 2,
    name: 'Jungle Breeze Homestay',
    description: 'Authentic homestay experience with a local family offering home-cooked meals and cultural insights.',
    location: 'Near Radhanagari Dam',
    distance: '3.5 km from Safari Gate',
    price: '₹2,800/night',
    rating: 4.6,
    type: 'homestay',
    amenities: ['Home-cooked meals', 'Night Safari', 'Guided Walks', 'Cultural Activities'],
    contact: '+91 9876543211',
    imageSrc: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d'
  },
  {
    id: 3,
    name: 'Shahu Nature Lodge',
    description: 'Perfect for couples and photographers with special viewing decks and professional guidance for wildlife photography.',
    location: 'Edge of the sanctuary',
    distance: '1 km from Safari Gate',
    price: '₹3,200/night',
    rating: 4.7,
    type: 'lodge',
    amenities: ['Photography Deck', 'Organic Food', 'Bird Watching', 'Library', 'WiFi'],
    contact: '+91 9876543212',
    website: 'https://example.com/shahu-lodge',
    imageSrc: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a'
  },
  {
    id: 4,
    name: 'Radhanagari Eco Retreat',
    description: 'Sustainable luxury with a focus on minimal environmental impact and maximum comfort.',
    location: 'North Radhanagari',
    distance: '5 km from Safari Gate',
    price: '₹5,200/night',
    rating: 4.9,
    type: 'resort',
    amenities: ['Solar Powered', 'Organic Farm', 'Spa', 'Swimming Pool', 'Restaurant'],
    contact: '+91 9876543213',
    website: 'https://example.com/eco-retreat',
    imageSrc: 'https://images.unsplash.com/photo-1469041797191-50ace28483c3'
  },
  {
    id: 5,
    name: 'Gaur Village Homestay',
    description: 'Traditional village experience with modern comforts and authentic rural activities.',
    location: 'Gaur Village',
    distance: '4 km from Safari Gate',
    price: '₹2,200/night',
    rating: 4.5,
    type: 'homestay',
    amenities: ['Traditional Food', 'Farming Activities', 'Village Tours', 'Cultural Programs'],
    contact: '+91 9876543214',
    imageSrc: 'https://images.unsplash.com/photo-1485833077593-4278bba3f11f'
  },
  {
    id: 6,
    name: 'Bison Valley Lodge',
    description: 'Rustic forest lodge offering peaceful seclusion and prime wildlife viewing opportunities.',
    location: 'South Radhanagari',
    distance: '3 km from Safari Gate',
    price: '₹3,800/night',
    rating: 4.7,
    type: 'lodge',
    amenities: ['Wildlife Trails', 'Viewing Tower', 'Camp Fire', 'Guide Services'],
    contact: '+91 9876543215',
    website: 'https://example.com/bison-valley',
    imageSrc: 'https://images.unsplash.com/photo-1501286353178-1ec881214838'
  },
];

const getAmenityIcon = (amenity: string) => {
  const amenityLower = amenity.toLowerCase();
  if (amenityLower.includes('wifi')) return <Wifi className="h-4 w-4" />;
  if (amenityLower.includes('restaurant') || amenityLower.includes('food') || amenityLower.includes('meal')) return <Utensils className="h-4 w-4" />;
  if (amenityLower.includes('parking') || amenityLower.includes('car')) return <Car className="h-4 w-4" />;
  if (amenityLower.includes('photography') || amenityLower.includes('camera')) return <Camera className="h-4 w-4" />;
  if (amenityLower.includes('homestay') || amenityLower.includes('home')) return <Home className="h-4 w-4" />;
  if (amenityLower.includes('safari') || amenityLower.includes('wildlife') || amenityLower.includes('trail')) return <TreePine className="h-4 w-4" />;
  
  // Default icon if no match
  return <Coffee className="h-4 w-4" />;
};

const Hotels = () => {
  return (
    <>
      <Helmet>
        <title>Top Hotels & Homestays in Radhanagari | Budget & Nature Stays</title>
        <meta name="description" content="Find the best hotels, eco-resorts & homestays in Radhanagari. Book jungle lodges near Dajipur Gate & enjoy authentic forest stays." />
      </Helmet>
      <Layout>
        <div className="bg-forest text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-white">Hotels & Homestays in Radhanagari</h1>
            <p className="max-w-3xl mx-auto text-center text-gray-200">
              Find the best places to stay during your Radhanagari adventure, from luxury eco-resorts to authentic local homestays with forest views.
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <div className="mb-10">
            <p className="text-gray-700 mb-4">
              Looking for hotels near Radhanagari Wildlife Sanctuary? Here's our curated list of top-rated homestays, eco-resorts, and jungle camps with direct forest views and local hospitality.
            </p>
            <p className="text-forest font-medium">
              Book your Radhanagari forest stay early during peak season (Nov to Feb) to avoid last-minute rush.
            </p>
          </div>
          
          <Tabs defaultValue="all">
            <div className="mb-6">
              <TabsList className="border border-gray-200">
                <TabsTrigger value="all">All Stays</TabsTrigger>
                <TabsTrigger value="resort">Resorts</TabsTrigger>
                <TabsTrigger value="homestay">Homestays</TabsTrigger>
                <TabsTrigger value="lodge">Lodges</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {hotels.map((hotel) => (
                  <HotelCard key={hotel.id} hotel={hotel} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="resort" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {hotels.filter(h => h.type === 'resort').map((hotel) => (
                  <HotelCard key={hotel.id} hotel={hotel} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="homestay" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {hotels.filter(h => h.type === 'homestay').map((hotel) => (
                  <HotelCard key={hotel.id} hotel={hotel} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="lodge" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {hotels.filter(h => h.type === 'lodge').map((hotel) => (
                  <HotelCard key={hotel.id} hotel={hotel} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </Layout>
    </>
  );
};

interface HotelCardProps {
  hotel: HotelProps;
}

const HotelCard = ({ hotel }: HotelCardProps) => {
  return (
    <Card className="overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
      <div className="h-48 overflow-hidden">
        <img 
          src={hotel.imageSrc} 
          alt={hotel.name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      
      <CardHeader className="p-4 pb-0">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg text-forest">{hotel.name}</CardTitle>
          <div className="flex items-center bg-forest text-white px-2 py-1 rounded text-sm">
            <Star className="h-3 w-3 mr-1 fill-current" /> 
            <span>{hotel.rating}</span>
          </div>
        </div>
        <div className="flex items-center text-sm text-gray-500">
          <MapPin className="h-3 w-3 mr-1" />
          <CardDescription>{hotel.location}</CardDescription>
        </div>
      </CardHeader>
      
      <CardContent className="p-4 pt-2 flex-grow">
        <p className="text-gray-700 text-sm mb-3">{hotel.description}</p>
        <p className="text-sm text-forest-dark font-medium mb-2">{hotel.distance}</p>
        
        <div className="mt-3">
          <h4 className="text-sm font-medium mb-2">Amenities:</h4>
          <div className="flex flex-wrap gap-2">
            {hotel.amenities.map((amenity, i) => (
              <span key={i} className="flex items-center bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                {getAmenityIcon(amenity)}
                <span className="ml-1">{amenity}</span>
              </span>
            ))}
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <span className="text-forest-dark font-bold">{hotel.price}</span>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="flex items-center">
            <Phone className="h-4 w-4 mr-1" /> Call
          </Button>
          {hotel.website && (
            <Button variant="outline" size="sm" className="flex items-center">
              <ExternalLink className="h-4 w-4 mr-1" /> Website
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default Hotels;
