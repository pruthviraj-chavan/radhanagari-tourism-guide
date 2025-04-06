import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Utensils, Leaf, MapPin } from 'lucide-react';

interface FoodItem {
  id: number;
  name: string;
  description: string;
  type: 'veg' | 'non-veg' | 'beverage';
  specialty: boolean;
  ingredients: string[];
  where: string[];
  imageSrc: string;
}

const foodItems: FoodItem[] = [
  {
    id: 1,
    name: 'Tambda Rassa',
    description: 'A fiery red mutton curry made with a special Kolhapuri spice blend that includes hot red chillies, garlic, and other spices. A signature dish of the region.',
    type: 'non-veg',
    specialty: true,
    ingredients: ['Mutton', 'Red Chillies', 'Garlic', 'Onions', 'Kolhapuri Masala'],
    where: ['Dajipur Forest Resort', 'Local Homestays', 'Radhanagari Village Eateries'],
    imageSrc: 'https://images.unsplash.com/photo-1501286353178-1ec881214838'
  },
  {
    id: 2,
    name: 'Pandhra Rassa',
    description: 'A white curry that complements Tambda Rassa, made with coconut milk, garlic, and traditional spices. Milder but equally flavorful.',
    type: 'non-veg',
    specialty: true,
    ingredients: ['Mutton', 'Coconut milk', 'Garlic', 'White spices', 'Coriander'],
    where: ['Shahu Nature Lodge', 'Traditional Food Stalls', 'Jungle Breeze Homestay'],
    imageSrc: 'https://images.unsplash.com/photo-1465379944081-7f47de8d74ac'
  },
  {
    id: 3,
    name: 'Jhunka Bhakri',
    description: 'A rustic dish consisting of spiced gram flour (besan) preparation served with millet flatbread. Often served with garlic chutney.',
    type: 'veg',
    specialty: true,
    ingredients: ['Gram flour', 'Millet flour', 'Green chillies', 'Garlic', 'Cumin'],
    where: ['Village Homestays', 'Gaur Village Homestay', 'Local Eateries'],
    imageSrc: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a'
  },
  {
    id: 4,
    name: 'Solkadhi',
    description: 'A pink-colored digestive drink made with coconut milk and kokum, perfect after a spicy meal. Slightly tangy and very refreshing.',
    type: 'beverage',
    specialty: true,
    ingredients: ['Kokum', 'Coconut milk', 'Garlic', 'Green chillies', 'Coriander'],
    where: ['Available at all restaurants and homestays', 'Made fresh in local homes'],
    imageSrc: 'https://images.unsplash.com/photo-1439886183900-e79ec0057170'
  },
  {
    id: 5,
    name: 'Bamboo Pickle',
    description: 'A local specialty made from tender bamboo shoots harvested from the forest, pickled with mustard and special spices.',
    type: 'veg',
    specialty: true,
    ingredients: ['Bamboo shoots', 'Mustard', 'Chili powder', 'Turmeric', 'Fenugreek'],
    where: ['Local markets', 'Homestays as complementary side dish', 'Forest department shops'],
    imageSrc: 'https://images.unsplash.com/photo-1485833077593-4278bba3f11f'
  },
  {
    id: 6,
    name: 'Jackfruit Sabzi',
    description: 'A seasonal delicacy made from raw jackfruit, cooked with spices to create a meat-like texture. Popular during summer months.',
    type: 'veg',
    specialty: false,
    ingredients: ['Raw jackfruit', 'Coconut', 'Jaggery', 'Spices'],
    where: ['Seasonal availability at homestays', 'Local houses during season'],
    imageSrc: 'https://images.unsplash.com/photo-1501286353178-1ec881214838'
  },
  {
    id: 7,
    name: 'Thali Peeth',
    description: 'Multi-grain flatbread made from a mix of flours and spices, often served with butter or ghee.',
    type: 'veg',
    specialty: false,
    ingredients: ['Mixed flours', 'Onions', 'Green chillies', 'Coriander', 'Spices'],
    where: ['Breakfast at homestays', 'Local eateries'],
    imageSrc: 'https://images.unsplash.com/photo-1485833077593-4278bba3f11f'
  },
  {
    id: 8,
    name: 'Sukka Mutton',
    description: 'Dry preparation of mutton with intense flavors of Kolhapuri spices. Dark, spicy and delicious.',
    type: 'non-veg',
    specialty: false,
    ingredients: ['Mutton', 'Black spices', 'Dry coconut', 'Goda masala'],
    where: ['Dajipur Forest Resort', 'Specialty at Bison Valley Lodge'],
    imageSrc: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a'
  },
];

const FoodGuide = () => {
  return (
    <>
      <Helmet>
        <title>Radhanagari Food Guide – Try Authentic Kolhapuri & Gavran Cuisine</title>
        <meta name="description" content="Explore traditional food in Radhanagari. Taste tambda & pandhra rassa, jungle bhakri, bamboo pickle & local sweets in homestays & forest resorts." />
      </Helmet>
      <Layout>
        <div className="bg-earth text-forest-dark py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Local Food in Radhanagari</h1>
            <p className="max-w-3xl mx-auto text-center">
              Discover the authentic flavors of Kolhapur region with traditional recipes, local ingredients, and culinary specialties unique to Radhanagari.
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <div className="mb-10">
            <p className="text-gray-700 mb-4">
              Radhanagari is not only about jungles – it's also a heaven for authentic Kolhapuri food lovers. The local cuisine features spicy gravies, rustic flavors, and fresh ingredients from the surrounding forests and farms.
            </p>
            <p className="text-forest font-medium mb-2">
              Many homestays in Radhanagari offer food packages with locally grown ingredients cooked on firewood stoves.
            </p>
          </div>
          
          <Tabs defaultValue="all">
            <div className="mb-6">
              <TabsList className="border border-gray-200">
                <TabsTrigger value="all">All Foods</TabsTrigger>
                <TabsTrigger value="veg">Vegetarian</TabsTrigger>
                <TabsTrigger value="non-veg">Non-Vegetarian</TabsTrigger>
                <TabsTrigger value="beverage">Beverages</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {foodItems.map((food) => (
                  <FoodCard key={food.id} food={food} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="veg" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {foodItems.filter(f => f.type === 'veg').map((food) => (
                  <FoodCard key={food.id} food={food} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="non-veg" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {foodItems.filter(f => f.type === 'non-veg').map((food) => (
                  <FoodCard key={food.id} food={food} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="beverage" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {foodItems.filter(f => f.type === 'beverage').map((food) => (
                  <FoodCard key={food.id} food={food} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="mt-12 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-forest">Food Experiences in Radhanagari</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-2 text-forest">Homestay Cooking Classes</h3>
                <p className="text-gray-700 mb-3">
                  Learn to prepare authentic Kolhapuri dishes from local families. Many homestays offer cooking demonstrations and hands-on classes.
                </p>
                <p className="text-forest-dark font-medium">
                  Available at: Jungle Breeze Homestay, Gaur Village Homestay
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-2 text-forest">Forest Food Foraging</h3>
                <p className="text-gray-700 mb-3">
                  Join guided tours to learn about edible plants, herbs, and mushrooms from the forest. See how locals incorporate these ingredients into their cuisine.
                </p>
                <p className="text-forest-dark font-medium">
                  Book through: Radhanagari Eco Retreat, Forest Department
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

interface FoodCardProps {
  food: FoodItem;
}

const FoodCard = ({ food }: FoodCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
      <div className="md:w-1/3 h-48 md:h-auto">
        <img 
          src={food.imageSrc} 
          alt={food.name} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 md:w-2/3">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-forest">{food.name}</h3>
          <div className={`flex items-center px-2 py-1 rounded text-xs ${
            food.type === 'veg' 
              ? 'bg-green-100 text-green-800' 
              : food.type === 'non-veg'
                ? 'bg-red-100 text-red-800'
                : 'bg-blue-100 text-blue-800'
          }`}>
            {food.type === 'veg' ? (
              <Leaf className="h-3 w-3 mr-1" />
            ) : (
              <Utensils className="h-3 w-3 mr-1" />
            )}
            <span>{food.type === 'veg' ? 'Vegetarian' : food.type === 'non-veg' ? 'Non-Vegetarian' : 'Beverage'}</span>
          </div>
        </div>
        
        <p className="text-gray-700 mb-3 text-sm">{food.description}</p>
        
        <div className="mb-3">
          <h4 className="text-sm font-medium mb-1">Key Ingredients:</h4>
          <div className="flex flex-wrap gap-1">
            {food.ingredients.map((ingredient, i) => (
              <span key={i} className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded text-xs">
                {ingredient}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex items-start">
          <MapPin className="h-4 w-4 mr-1 text-forest shrink-0 mt-0.5" />
          <div>
            <h4 className="text-sm font-medium">Where to try:</h4>
            <p className="text-gray-600 text-sm">{food.where.join(', ')}</p>
          </div>
        </div>
        
        {food.specialty && (
          <div className="mt-2 text-forest-dark text-sm font-medium">
            ★ Local Specialty
          </div>
        )}
      </div>
    </div>
  );
};

export default FoodGuide;
