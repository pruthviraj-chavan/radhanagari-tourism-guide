
import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '@/components/Layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Calendar, MapPin, Phone, AlertCircle, Camera, Info } from 'lucide-react';
import { Separator } from "@/components/ui/separator";

interface Animal {
  id: number;
  name: string;
  scientificName: string;
  description: string;
  sightingChance: 'High' | 'Medium' | 'Low' | 'Rare';
  bestTime: string;
  imageSrc: string;
}

interface SafariRoute {
  id: number;
  name: string;
  description: string;
  duration: string;
  distance: string;
  difficulty: 'Easy' | 'Moderate' | 'Challenging';
  highlights: string[];
  imageSrc: string;
}

const animals: Animal[] = [
  {
    id: 1,
    name: 'Indian Bison (Gaur)',
    scientificName: 'Bos gaurus',
    description: 'The largest species of wild cattle, known for its massive size and distinctive white legs. Radhanagari is famous for its thriving gaur population.',
    sightingChance: 'High',
    bestTime: 'Early morning and late evening',
    imageSrc: 'https://images.unsplash.com/photo-1472396961693-142e6e269027'
  },
  {
    id: 2,
    name: 'Leopard',
    scientificName: 'Panthera pardus',
    description: 'Elusive big cats that inhabit the dense forests of Radhanagari. While they have a healthy population, sightings are rare due to their secretive nature.',
    sightingChance: 'Rare',
    bestTime: 'Dawn and dusk',
    imageSrc: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d'
  },
  {
    id: 3,
    name: 'Giant Squirrel',
    scientificName: 'Ratufa indica',
    description: 'This large tree-dwelling squirrel is endemic to India and can be spotted in the canopy of tall trees. Their reddish-brown fur makes them distinctive.',
    sightingChance: 'Medium',
    bestTime: 'Throughout the day',
    imageSrc: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a'
  },
  {
    id: 4,
    name: 'Barking Deer',
    scientificName: 'Muntiacus muntjak',
    description: 'Small deer known for their distinctive barking alarm call. They are shy and prefer dense undergrowth in the forest.',
    sightingChance: 'Medium',
    bestTime: 'Early morning',
    imageSrc: 'https://images.unsplash.com/photo-1485833077593-4278bba3f11f'
  },
  {
    id: 5,
    name: 'Malabar Pied Hornbill',
    scientificName: 'Anthracoceros coronatus',
    description: 'Large bird with a distinctive black and white plumage and a large yellow bill with a casque on top. They are often spotted flying over the canopy.',
    sightingChance: 'Medium',
    bestTime: 'Morning hours',
    imageSrc: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a'
  },
  {
    id: 6,
    name: 'King Cobra',
    scientificName: 'Ophiophagus hannah',
    description: 'The world\'s longest venomous snake, occasionally spotted in the sanctuary. They mainly feed on other snakes and are generally shy of humans.',
    sightingChance: 'Low',
    bestTime: 'Summer months',
    imageSrc: 'https://images.unsplash.com/photo-1501286353178-1ec881214838'
  },
];

const safariRoutes: SafariRoute[] = [
  {
    id: 1,
    name: 'Dajipur Core Zone Safari',
    description: 'The main safari route taking you through the heart of the sanctuary where most bison herds are found.',
    duration: '3-4 hours',
    distance: '18 km',
    difficulty: 'Easy',
    highlights: ['Bison sightings', 'Bird watching', 'Grassland views', 'Waterhole stops'],
    imageSrc: 'https://images.unsplash.com/photo-1472396961693-142e6e269027'
  },
  {
    id: 2,
    name: 'Radhanagari Dam Circuit',
    description: 'A scenic route around the Radhanagari dam offering opportunities to spot waterbirds and animals coming to drink.',
    duration: '2-3 hours',
    distance: '12 km',
    difficulty: 'Easy',
    highlights: ['Water birds', 'Panoramic dam views', 'Deer sightings', 'Sunset views'],
    imageSrc: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d'
  },
  {
    id: 3,
    name: 'Forest Trek Trail',
    description: 'A guided walking safari through designated forest paths, offering a more intimate experience with nature.',
    duration: '4-5 hours',
    distance: '8 km',
    difficulty: 'Moderate',
    highlights: ['Flora experience', 'Bird watching', 'Insect and reptile sightings', 'Forest sounds'],
    imageSrc: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a'
  },
];

const WildlifeSafari = () => {
  return (
    <>
      <Helmet>
        <title>Radhanagari Wildlife Sanctuary – Safari Booking, Animals & Birds</title>
        <meta name="description" content="Book your Radhanagari Jungle Safari today. Spot bison, leopards, birds & rare frogs. Details on safari timings, ticket cost, and routes." />
      </Helmet>
      <Layout>
        <div className="bg-forest text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-white">Wildlife & Safari</h1>
            <p className="max-w-3xl mx-auto text-center text-gray-200">
              Explore Radhanagari Wildlife Sanctuary, home to the majestic Indian Bison, elusive leopards, and hundreds of bird species.
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <div className="mb-10">
            <p className="text-gray-700 mb-4">
              Go deep into the Radhanagari forest and experience wildlife safaris led by trained guides. The sanctuary is home to a diverse range of wildlife including the Indian Bison (Gaur), Leopard (rare sightings), 230+ bird species, and unique snakes, frogs, and insects.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <Card className="bg-forest text-white">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <Clock className="h-5 w-5 mr-2" />
                  Safari Timings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-2">Morning: 6:30 AM – 10:00 AM</p>
                <p>Evening: 3:30 PM – 6:00 PM</p>
              </CardContent>
            </Card>
            
            <Card className="bg-earth text-forest-dark">
              <CardHeader>
                <CardTitle className="flex items-center text-forest-dark">
                  <Calendar className="h-5 w-5 mr-2" />
                  Best Season
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-2">October to May</p>
                <p>Monsoon (June-Sep): Limited access</p>
              </CardContent>
            </Card>
            
            <Card className="bg-water text-forest-dark">
              <CardHeader>
                <CardTitle className="flex items-center text-forest-dark">
                  <Phone className="h-5 w-5 mr-2" />
                  Booking Contact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-2">Phone: +91 9988776655</p>
                <p>Email: safaris@radhanagari-tourism.com</p>
              </CardContent>
            </Card>
          </div>
          
          <Tabs defaultValue="animals">
            <div className="mb-6">
              <TabsList className="border border-gray-200">
                <TabsTrigger value="animals">Wildlife</TabsTrigger>
                <TabsTrigger value="safaris">Safari Routes</TabsTrigger>
                <TabsTrigger value="tips">Safari Tips</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="animals" className="mt-0">
              <h2 className="text-2xl font-bold mb-6 text-forest">Wildlife in Radhanagari</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {animals.map((animal) => (
                  <AnimalCard key={animal.id} animal={animal} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="safaris" className="mt-0">
              <h2 className="text-2xl font-bold mb-6 text-forest">Safari Routes</h2>
              <div className="grid grid-cols-1 gap-6">
                {safariRoutes.map((route) => (
                  <RouteCard key={route.id} route={route} />
                ))}
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg mt-8">
                <h3 className="text-xl font-bold mb-4 text-forest">Safari Booking Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2 text-forest-dark">Booking Process:</h4>
                    <ol className="list-decimal pl-5 space-y-2 text-gray-700">
                      <li>Online booking available at <a href="#" className="text-forest hover:underline">www.radhanagari-tourism.com</a></li>
                      <li>Phone bookings: Call +91 9988776655</li>
                      <li>In-person at Forest Department Office, Radhanagari</li>
                      <li>Advance booking recommended during peak season (Oct-Feb)</li>
                    </ol>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2 text-forest-dark">Safari Costs:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li><span className="font-medium">Jeep Safari:</span> ₹2000 per vehicle (max 6 persons)</li>
                      <li><span className="font-medium">Guide Fee:</span> ₹500 (mandatory)</li>
                      <li><span className="font-medium">Camera Fee:</span> ₹100 (for DSLR)</li>
                      <li><span className="font-medium">Entry Fee:</span> ₹50 per person (Indians), ₹500 (Foreigners)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="tips" className="mt-0">
              <h2 className="text-2xl font-bold mb-6 text-forest">Safari Tips</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-forest">
                      <Camera className="h-5 w-5 mr-2" />
                      Photography Tips
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-gray-700">• Bring a telephoto lens (300mm or more) for wildlife shots</p>
                    <p className="text-gray-700">• Early morning provides the best lighting for photos</p>
                    <p className="text-gray-700">• Keep camera settings ready for quick shots</p>
                    <p className="text-gray-700">• Tripods are difficult to use in moving vehicles</p>
                    <p className="text-gray-700">• Be respectful - no flash photography toward animals</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-forest">
                      <AlertCircle className="h-5 w-5 mr-2" />
                      Safety Guidelines
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-gray-700">• Stay inside the vehicle at all times during safaris</p>
                    <p className="text-gray-700">• Maintain silence to increase wildlife sighting chances</p>
                    <p className="text-gray-700">• Wear earth-toned clothes (avoid bright colors)</p>
                    <p className="text-gray-700">• Follow all instructions from your guide</p>
                    <p className="text-gray-700">• Do not feed or provoke animals</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-forest">
                      <Info className="h-5 w-5 mr-2" />
                      What to Bring
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-gray-700">• Binoculars for better wildlife viewing</p>
                    <p className="text-gray-700">• Water bottle and light snacks</p>
                    <p className="text-gray-700">• Hat and sunscreen for sun protection</p>
                    <p className="text-gray-700">• Insect repellent (especially during monsoon)</p>
                    <p className="text-gray-700">• Light jacket (mornings can be chilly)</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-forest">
                      <MapPin className="h-5 w-5 mr-2" />
                      Recommended Itinerary
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-gray-700">• Day 1: Morning safari on Dajipur Core Zone route</p>
                    <p className="text-gray-700">• Day 1 Evening: Dam Circuit for bird watching</p>
                    <p className="text-gray-700">• Day 2: Early morning safari on Core Zone again</p>
                    <p className="text-gray-700">• Day 2 Afternoon: Forest Trek Trail</p>
                    <p className="text-gray-700">• Minimum 2 days recommended for best experience</p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-yellow-800">Important Note</h4>
                    <p className="text-gray-700">Wildlife sightings are natural events and cannot be guaranteed. The best chances are during early morning safaris when animals are most active.</p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="mt-12 text-center">
            <Button className="bg-forest hover:bg-forest-dark text-white py-2 px-6 rounded-md text-lg">
              Book Safari Now
            </Button>
          </div>
        </div>
      </Layout>
    </>
  );
};

interface AnimalCardProps {
  animal: Animal;
}

const AnimalCard = ({ animal }: AnimalCardProps) => {
  const getSightingColor = (chance: string) => {
    switch(chance) {
      case 'High': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-blue-100 text-blue-800';
      case 'Low': return 'bg-yellow-100 text-yellow-800';
      case 'Rare': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
      <div className="md:w-1/3 h-48 md:h-auto">
        <img 
          src={animal.imageSrc} 
          alt={animal.name} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-5 md:w-2/3">
        <div className="flex justify-between items-start mb-1">
          <h3 className="text-xl font-semibold text-forest">{animal.name}</h3>
          <span className={`px-2 py-1 rounded text-xs ${getSightingColor(animal.sightingChance)}`}>
            {animal.sightingChance} chance
          </span>
        </div>
        <p className="text-sm text-gray-500 italic mb-2">{animal.scientificName}</p>
        <p className="text-gray-700 text-sm mb-3">{animal.description}</p>
        <p className="text-sm">
          <span className="font-medium text-forest-dark">Best viewing time:</span> {animal.bestTime}
        </p>
      </div>
    </div>
  );
};

interface RouteCardProps {
  route: SafariRoute;
}

const RouteCard = ({ route }: RouteCardProps) => {
  const getDifficultyColor = (difficulty: string) => {
    switch(difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800';
      case 'Moderate': return 'bg-yellow-100 text-yellow-800';
      case 'Challenging': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="h-48 md:h-auto">
          <img 
            src={route.imageSrc} 
            alt={route.name} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-5 md:col-span-2">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-semibold text-forest">{route.name}</h3>
            <span className={`px-2 py-1 rounded text-xs ${getDifficultyColor(route.difficulty)}`}>
              {route.difficulty}
            </span>
          </div>
          
          <p className="text-gray-700 mb-4">{route.description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <span className="font-medium text-forest-dark">Duration:</span> {route.duration}
            </div>
            <div>
              <span className="font-medium text-forest-dark">Distance:</span> {route.distance}
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-forest-dark mb-1">Highlights:</h4>
            <div className="flex flex-wrap gap-2">
              {route.highlights.map((highlight, index) => (
                <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                  {highlight}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WildlifeSafari;
