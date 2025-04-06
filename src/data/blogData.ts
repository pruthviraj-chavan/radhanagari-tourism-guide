
export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
  slug: string;
  featuredImage: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Top 10 Things to Do in Radhanagari – Nature, Food & Culture',
    excerpt: 'Discover the best activities to make the most of your Radhanagari wildlife sanctuary visit, from safari adventures to local cuisine.',
    content: `Radhanagari Wildlife Sanctuary offers a diverse range of activities for nature enthusiasts, food lovers, and culture explorers. From early morning safaris to evening cultural performances, there's something for everyone.`,
    author: 'Amit Sharma',
    date: 'April 2, 2025',
    readTime: '8 min read',
    tags: ['Activities', 'Travel Guide', 'Nature'],
    slug: 'top-10-things-to-do',
    featuredImage: 'https://images.unsplash.com/photo-1472396961693-142e6e269027'
  },
  {
    id: 2,
    title: 'Complete Radhanagari Jungle Safari Guide – Tickets, Timings & Tips',
    excerpt: 'Everything you need to know about booking and enjoying the perfect wildlife safari experience in Radhanagari Sanctuary.',
    content: `Planning your safari at Radhanagari requires some preparation. This comprehensive guide covers booking procedures, best timing for wildlife sightings, and expert tips for an unforgettable experience.`,
    author: 'Priya Desai',
    date: 'March 27, 2025',
    readTime: '12 min read',
    tags: ['Safari', 'Wildlife', 'Travel Tips'],
    slug: 'jungle-safari-guide',
    featuredImage: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d'
  },
  {
    id: 3,
    title: 'Where to Stay in Radhanagari – Hotels Near Wildlife Sanctuary',
    excerpt: 'Find the perfect accommodation for your Radhanagari trip with our comprehensive guide to hotels, homestays, and eco-resorts.',
    content: `From luxury eco-resorts to authentic homestays, Radhanagari offers a range of accommodation options. This guide helps you choose the right place based on your preferences, budget, and proximity to attractions.`,
    author: 'Snehal Patil',
    date: 'March 20, 2025',
    readTime: '10 min read',
    tags: ['Accommodation', 'Hotels', 'Homestays'],
    slug: 'where-to-stay',
    featuredImage: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a'
  },
  {
    id: 4,
    title: 'Best Time to Visit Radhanagari for Birdwatching & Wildlife Photography',
    excerpt: 'Learn when to visit for the best wildlife sightings and photography opportunities throughout the seasons.',
    content: `Timing is everything when it comes to wildlife photography. This article breaks down the seasonal patterns, animal behaviors, and optimal lighting conditions for capturing stunning images in Radhanagari.`,
    author: 'Rahul Patil',
    date: 'March 15, 2025',
    readTime: '7 min read',
    tags: ['Photography', 'Birdwatching', 'Seasonal Guide'],
    slug: 'best-time-to-visit',
    featuredImage: 'https://images.unsplash.com/photo-1485833077593-4278bba3f11f'
  },
  {
    id: 5,
    title: 'Local Food Tour: Kolhapuri Spices & Radhanagari Flavors',
    excerpt: 'Embark on a culinary journey through the authentic tastes and traditions of Radhanagari and surrounding Kolhapur region.',
    content: `Kolhapuri cuisine is famous for its spicy flavors and unique preparation methods. This food tour guide takes you through the must-try dishes, local ingredients, and best places to experience authentic local cuisine.`,
    author: 'Meera Kulkarni',
    date: 'March 5, 2025',
    readTime: '9 min read',
    tags: ['Food', 'Culinary', 'Local Culture'],
    slug: 'local-food-tour',
    featuredImage: 'https://images.unsplash.com/photo-1439886183900-e79ec0057170'
  },
  {
    id: 6,
    title: 'Monsoon Magic: Experiencing Radhanagari During the Rainy Season',
    excerpt: 'Discover the transformed landscape and unique experiences that only the monsoon season brings to Radhanagari.',
    content: `While monsoon limits safari options, it transforms Radhanagari into a lush paradise with flowing waterfalls, misty mountains, and vibrant greenery. Learn how to plan a safe and memorable monsoon visit.`,
    author: 'Amit Sharma',
    date: 'February 25, 2025',
    readTime: '8 min read',
    tags: ['Monsoon', 'Seasonal Travel', 'Waterfalls'],
    slug: 'monsoon-magic',
    featuredImage: 'https://images.unsplash.com/photo-1501286353178-1ec871214838'
  }
];

export const getBlogBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getRelatedBlogs = (currentSlug: string, limit: number = 3): BlogPost[] => {
  return blogPosts.filter(post => post.slug !== currentSlug).slice(0, limit);
};
