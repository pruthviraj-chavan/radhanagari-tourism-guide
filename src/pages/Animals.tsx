
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';
import ReactPlayer from 'react-player/lazy';
import { Filter, TreeDeciduous, Bird, Fish, Squirrel, Bug } from 'lucide-react';

// Define animal categories
type AnimalCategory = 'all' | 'mammals' | 'birds' | 'reptiles' | 'amphibians';

// Define animal interface
interface Animal {
  id: number;
  name: string;
  scientificName: string;
  category: 'mammals' | 'birds' | 'reptiles' | 'amphibians';
  description: string;
  imageSrc: string;
  endangermentStatus: 'Least Concern' | 'Near Threatened' | 'Vulnerable' | 'Endangered' | 'Critically Endangered';
  funFact: string;
}

const animals: Animal[] = [
  {
    id: 1,
    name: 'Indian Bison (Gaur)',
    scientificName: 'Bos gaurus',
    category: 'mammals',
    description: 'The Indian Bison or Gaur is the largest wild cattle species in the world. They are characterized by their massive build, distinctive white legs, and a prominent dorsal ridge. The Radhanagari Wildlife Sanctuary is one of the best places in Maharashtra to observe these magnificent creatures in their natural habitat.',
    imageSrc: 'https://images.unsplash.com/photo-1472396961693-142e6e269027',
    endangermentStatus: 'Vulnerable',
    funFact: 'A male gaur can weigh up to 1,500 kg (3,300 lb), making it the largest wild bovid in the world.'
  },
  {
    id: 2,
    name: 'Leopard',
    scientificName: 'Panthera pardus',
    category: 'mammals',
    description: 'Leopards are elusive big cats that inhabit the dense forests of Radhanagari. They are perfectly camouflaged with their spotted coat pattern. These solitary hunters are primarily nocturnal and are rarely spotted during daytime safaris.',
    imageSrc: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d',
    endangermentStatus: 'Vulnerable',
    funFact: 'Leopards are incredibly strong and can carry prey items that are heavier than themselves up into trees to keep them safe from other predators.'
  },
  {
    id: 3,
    name: 'Malabar Giant Squirrel',
    scientificName: 'Ratufa indica',
    category: 'mammals',
    description: 'This multi-colored squirrel is one of the most striking inhabitants of Radhanagari. With their vibrant coat that can include shades of black, brown, orange, maroon and purple, these large tree squirrels are a delight to spot in the forest canopy.',
    imageSrc: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a',
    endangermentStatus: 'Least Concern',
    funFact: 'The Malabar Giant Squirrel can leap up to 6 meters between trees!'
  },
  {
    id: 4,
    name: 'Barking Deer (Indian Muntjac)',
    scientificName: 'Muntiacus muntjak',
    category: 'mammals',
    description: 'Barking deer, as the name suggests, are known for their dog-like alarm calls. These small, solitary deer have distinctive antlers in males and pronounced frontal ridges forming a V-shape on their forehead.',
    imageSrc: 'https://images.unsplash.com/photo-1485833077593-4278bba3f11f',
    endangermentStatus: 'Least Concern',
    funFact: 'Barking deer have the smallest number of chromosomes among mammals.'
  },
  {
    id: 5,
    name: 'Great Hornbill',
    scientificName: 'Buceros bicornis',
    category: 'birds',
    description: 'The Great Hornbill is a large bird with a bright yellow and black casque on its bill. With its impressive size and colorful features, it's one of the most iconic birds of Radhanagari. Their wing beats produce a distinctive sound that can be heard from a distance.',
    imageSrc: 'https://images.unsplash.com/photo-1501286353178-1ec871214838',
    endangermentStatus: 'Vulnerable',
    funFact: 'During nesting, the female seals herself into a tree cavity using mud, droppings and fruit pulp, leaving only a small slit through which the male passes food.'
  },
  {
    id: 6,
    name: 'King Cobra',
    scientificName: 'Ophiophagus hannah',
    category: 'reptiles',
    description: 'The King Cobra is the world\'s longest venomous snake and can be found in the dense forests of Radhanagari. They primarily feed on other snakes and are known for their intelligence and impressive hood display when threatened.',
    imageSrc: 'https://images.unsplash.com/photo-1469041797191-50ace28483c3',
    endangermentStatus: 'Vulnerable',
    funFact: 'King Cobras are the only snakes in the world that build nests for their eggs.'
  },
  {
    id: 7,
    name: 'Malabar Trogon',
    scientificName: 'Harpactes fasciatus',
    category: 'birds',
    description: 'With its striking crimson underparts (in males) and brown back, the Malabar Trogon is one of the most colorful birds found in Radhanagari. They prefer the dense canopy and are often spotted sitting still on branches.',
    imageSrc: 'https://images.unsplash.com/photo-1452378174528-3090a4bba7b2',
    endangermentStatus: 'Least Concern',
    funFact: 'Trogons have a unique foot structure with the first and second toes facing backward, unlike most other birds.'
  },
  {
    id: 8,
    name: 'Malabar Pit Viper',
    scientificName: 'Trimeresurus malabaricus',
    category: 'reptiles',
    description: 'This venomous snake is endemic to the Western Ghats. It comes in various colors including green, brown, and rusty red. They are ambush predators that use heat-sensing pits to locate prey.',
    imageSrc: 'https://images.unsplash.com/photo-1452960962994-acf4fd70b632',
    endangermentStatus: 'Near Threatened',
    funFact: 'Malabar Pit Vipers can change their color slightly over time to better match their surroundings.'
  },
  {
    id: 9,
    name: 'Slender Loris',
    scientificName: 'Loris tardigradus',
    category: 'mammals',
    description: 'These small, nocturnal primates have huge eyes that help them see in the dark. Their slow, deliberate movements make them fascinating to watch when spotted during night trails.',
    imageSrc: 'https://images.unsplash.com/photo-1518877593221-1f28583780b4',
    endangermentStatus: 'Endangered',
    funFact: 'Slender lorises have a toxic bite! They lick venom-secreting glands on their elbows and mix it with their saliva.'
  },
  {
    id: 10,
    name: 'Malabar Gliding Frog',
    scientificName: 'Rhacophorus malabaricus',
    category: 'amphibians',
    description: 'This bright green frog has webbed feet that allow it to glide from tree to tree. During the monsoon season, they come down to breed in temporary water bodies within the sanctuary.',
    imageSrc: 'https://images.unsplash.com/photo-1487252665478-49b61b47f302',
    endangermentStatus: 'Near Threatened',
    funFact: 'These frogs can glide up to 12 meters by spreading their webbed feet like parachutes.'
  },
  {
    id: 11,
    name: 'Sambar Deer',
    scientificName: 'Rusa unicolor',
    category: 'mammals',
    description: 'Sambar is a large deer native to the Indian subcontinent. Males sport impressive antlers and both sexes have a shaggy mane. They're often found near water bodies within the sanctuary.',
    imageSrc: 'https://images.unsplash.com/photo-1439886183900-e79ec0057170',
    endangermentStatus: 'Vulnerable',
    funFact: 'Sambar deer can submerge themselves in water with only their nose above the surface to hide from predators.'
  },
  {
    id: 12,
    name: 'Malabar Grey Hornbill',
    scientificName: 'Ocyceros griseus',
    category: 'birds',
    description: 'Endemic to the Western Ghats, this hornbill is smaller than its cousin, the Great Hornbill. They have a greyish-brown plumage and a distinctive casque on their bill. They're frequently spotted in fruit-bearing trees.',
    imageSrc: 'https://images.unsplash.com/photo-1465379944081-7f47de8d74ac',
    endangermentStatus: 'Least Concern',
    funFact: 'Unlike many other hornbill species, the Malabar Grey Hornbill does not completely seal the female in the nest cavity during breeding.'
  }
];

// Define wildlife videos
interface WildlifeVideo {
  id: number;
  title: string;
  description: string;
  videoUrl: string;
  thumbnailUrl: string;
}

const wildlifeVideos: WildlifeVideo[] = [
  {
    id: 1,
    title: "Indian Bison in Radhanagari",
    description: "Majestic Indian Bison (Gaur) spotted during an early morning safari in Radhanagari Wildlife Sanctuary.",
    videoUrl: "https://www.youtube.com/watch?v=LXb3EKWsInQ",
    thumbnailUrl: "https://images.unsplash.com/photo-1472396961693-142e6e269027"
  },
  {
    id: 2,
    title: "Birds of Radhanagari",
    description: "A beautiful compilation of various bird species found in the Radhanagari Wildlife Sanctuary.",
    videoUrl: "https://www.youtube.com/watch?v=LXb3EKWsInQ",
    thumbnailUrl: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac"
  },
  {
    id: 3,
    title: "Leopard Sighting",
    description: "Rare footage of a leopard crossing a trail in Radhanagari Wildlife Sanctuary.",
    videoUrl: "https://www.youtube.com/watch?v=LXb3EKWsInQ",
    thumbnailUrl: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d"
  }
];

const AnimalsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<AnimalCategory>('all');
  const [selectedVideo, setSelectedVideo] = useState<WildlifeVideo | null>(null);
  const isMobile = useIsMobile();

  // Filter animals based on selected category
  const filteredAnimals = selectedCategory === 'all' 
    ? animals 
    : animals.filter(animal => animal.category === selectedCategory);

  // Get CategoryIcon based on animal category
  const getCategoryIcon = (category: string) => {
    switch(category) {
      case 'mammals': return <Squirrel className="h-5 w-5" />;
      case 'birds': return <Bird className="h-5 w-5" />;
      case 'reptiles': return <Fish className="h-5 w-5" />;
      case 'amphibians': return <Bug className="h-5 w-5" />;
      default: return <TreeDeciduous className="h-5 w-5" />;
    }
  };

  // Get status color based on endangerment status
  const getStatusColor = (status: string) => {
    switch(status) {
      case 'Least Concern': return 'bg-green-100 text-green-800';
      case 'Near Threatened': return 'bg-yellow-100 text-yellow-800';
      case 'Vulnerable': return 'bg-orange-100 text-orange-800';
      case 'Endangered': return 'bg-red-100 text-red-800';
      case 'Critically Endangered': return 'bg-red-700 text-white';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <>
      <Helmet>
        <title>Animals of Radhanagari Wildlife Sanctuary - Species Guide</title>
        <meta name="description" content="Explore the diverse wildlife of Radhanagari. Learn about Indian Bison, leopards, hornbills, and many other animal species with photos and information." />
      </Helmet>
      <Layout>
        <div className="bg-forest text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-white">Animals of Radhanagari</h1>
            <p className="max-w-3xl mx-auto text-center text-gray-200">
              Discover the incredible biodiversity of Radhanagari Wildlife Sanctuary. From the mighty Indian Bison to colorful birds and elusive leopards.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          {/* Animal Categories Filter */}
          <div className="mb-10">
            <div className="flex items-center justify-center flex-wrap gap-2 md:gap-4">
              <Filter className="mr-2 h-5 w-5 text-forest" />
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-full text-sm ${
                  selectedCategory === 'all'
                    ? 'bg-forest text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All Species
              </button>
              <button
                onClick={() => setSelectedCategory('mammals')}
                className={`px-4 py-2 rounded-full text-sm ${
                  selectedCategory === 'mammals'
                    ? 'bg-forest text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Squirrel className="inline-block h-4 w-4 mr-1" />
                Mammals
              </button>
              <button
                onClick={() => setSelectedCategory('birds')}
                className={`px-4 py-2 rounded-full text-sm ${
                  selectedCategory === 'birds'
                    ? 'bg-forest text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Bird className="inline-block h-4 w-4 mr-1" />
                Birds
              </button>
              <button
                onClick={() => setSelectedCategory('reptiles')}
                className={`px-4 py-2 rounded-full text-sm ${
                  selectedCategory === 'reptiles'
                    ? 'bg-forest text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Fish className="inline-block h-4 w-4 mr-1" />
                Reptiles
              </button>
              <button
                onClick={() => setSelectedCategory('amphibians')}
                className={`px-4 py-2 rounded-full text-sm ${
                  selectedCategory === 'amphibians'
                    ? 'bg-forest text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Bug className="inline-block h-4 w-4 mr-1" />
                Amphibians
              </button>
            </div>
          </div>

          {/* Animal Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {filteredAnimals.map((animal) => (
              <div 
                key={animal.id} 
                className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={animal.imageSrc} 
                    alt={animal.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-forest">{animal.name}</h3>
                    <span className={`ml-2 px-2 py-1 rounded-full text-xs ${getStatusColor(animal.endangermentStatus)}`}>
                      {animal.endangermentStatus}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 italic mb-3">{animal.scientificName}</p>
                  <div className="flex items-center mb-4">
                    {getCategoryIcon(animal.category)}
                    <span className="ml-2 text-sm text-gray-700 capitalize">{animal.category}</span>
                  </div>
                  <p className="text-gray-700 mb-4 line-clamp-3">{animal.description}</p>
                  <div className="bg-earth-light p-3 rounded-lg">
                    <p className="text-sm text-forest-dark">
                      <span className="font-bold">Fun Fact:</span> {animal.funFact}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Wildlife Videos Section - Optimized for lazy loading */}
          <div className="my-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-forest">Wildlife Videos</h2>
            
            {selectedVideo ? (
              <div className="mb-10">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="aspect-w-16 aspect-h-9">
                    <ReactPlayer
                      url={selectedVideo.videoUrl}
                      width="100%"
                      height="100%"
                      controls={true}
                      className="react-player"
                      light={selectedVideo.thumbnailUrl}
                      playing
                      lazy
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-forest mb-2">{selectedVideo.title}</h3>
                    <p className="text-gray-700">{selectedVideo.description}</p>
                    <button 
                      onClick={() => setSelectedVideo(null)}
                      className="mt-4 text-forest hover:text-forest-dark font-medium"
                    >
                      ← Back to all videos
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {wildlifeVideos.map((video) => (
                  <div 
                    key={video.id} 
                    className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300"
                    onClick={() => setSelectedVideo(video)}
                  >
                    <div className="relative h-48">
                      <img 
                        src={video.thumbnailUrl} 
                        alt={video.title} 
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-white bg-opacity-80 flex items-center justify-center">
                          <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-forest border-b-8 border-b-transparent ml-1"></div>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold text-forest mb-2">{video.title}</h3>
                      <p className="text-sm text-gray-700">{video.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Did You Know Section */}
          <div className="my-16 bg-gradient-to-r from-forest-light to-earth-light rounded-lg p-6 md:p-10">
            <h2 className="text-2xl font-bold mb-6 text-white">Did You Know?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white bg-opacity-90 p-4 rounded-lg">
                <h3 className="font-bold text-lg mb-2 text-forest">Biodiversity Hotspot</h3>
                <p className="text-gray-800">Radhanagari Wildlife Sanctuary is part of the Western Ghats, one of the world's biodiversity hotspots with over 5,000 species of flowering plants, 139 mammal species, 508 bird species and 179 amphibian species.</p>
              </div>
              <div className="bg-white bg-opacity-90 p-4 rounded-lg">
                <h3 className="font-bold text-lg mb-2 text-forest">Endemic Species</h3>
                <p className="text-gray-800">About 325 globally threatened species call the Western Ghats home. The region has an exceptionally high level of endemism, with many species found nowhere else on Earth.</p>
              </div>
            </div>
          </div>

          {/* Conservation Message */}
          <div className="my-16 text-center">
            <h2 className="text-2xl font-bold mb-4 text-forest">Help Protect Radhanagari's Wildlife</h2>
            <p className="max-w-3xl mx-auto text-gray-700 mb-6">
              The animals of Radhanagari Wildlife Sanctuary face threats from habitat loss, human-wildlife conflict, and climate change. Support conservation efforts to ensure these magnificent creatures thrive for generations to come.
            </p>
            <a 
              href="#" 
              className="bg-forest hover:bg-forest-dark text-white font-bold py-3 px-6 rounded-md transition-colors duration-300"
            >
              Learn About Conservation
            </a>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default AnimalsPage;
