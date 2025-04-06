
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface FoodItem {
  name: string;
  description: string;
  type: string;
  imageSrc: string;
}

const foodItems: FoodItem[] = [
  {
    name: 'Tambda Rassa',
    description: 'Spicy red mutton curry with Kolhapuri spices',
    type: 'Non-Vegetarian',
    imageSrc: 'https://images.unsplash.com/photo-1501286353178-1ec881214838'
  },
  {
    name: 'Pandhra Rassa',
    description: 'White curry made with coconut and special spices',
    type: 'Non-Vegetarian',
    imageSrc: 'https://images.unsplash.com/photo-1465379944081-7f47de8d74ac'
  },
  {
    name: 'Jhunka Bhakri',
    description: 'Traditional besan gram flour dish with millet bread',
    type: 'Vegetarian',
    imageSrc: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a'
  },
  {
    name: 'Solkadhi',
    description: 'Refreshing digestive drink made with coconut milk and kokum',
    type: 'Vegetarian',
    imageSrc: 'https://images.unsplash.com/photo-1485833077593-4278bba3f11f'
  }
];

const LocalFood = () => {
  return (
    <section className="section-container">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Authentic Local Cuisine</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Radhanagari is not only about wildlife – it's also a heaven for authentic Kolhapuri food lovers. 
            Experience traditional flavors and local delicacies during your visit.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {foodItems.map((food, index) => (
            <div key={index} className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden">
              <div className="md:w-1/3">
                <img 
                  src={food.imageSrc} 
                  alt={food.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 md:w-2/3">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-forest">{food.name}</h3>
                  <span className={`px-2 py-1 rounded text-xs ${
                    food.type === 'Vegetarian' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {food.type}
                  </span>
                </div>
                <p className="text-gray-700">{food.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-700 mb-4">
            Many homestays in Radhanagari offer food packages with locally grown ingredients 
            cooked on traditional firewood stoves.
          </p>
          <Link 
            to="/radhanagari-food-guide"
            className="btn-primary inline-flex items-center"
          >
            Explore Food Guide <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LocalFood;
