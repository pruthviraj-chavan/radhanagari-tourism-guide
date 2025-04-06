
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, User } from 'lucide-react';

interface BlogPost {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  slug: string;
  imageSrc: string;
}

const blogPosts: BlogPost[] = [
  {
    title: 'Top 10 Things to Do in Radhanagari – Nature, Food & Culture',
    excerpt: 'Discover the best activities to make the most of your Radhanagari wildlife sanctuary visit, from safari adventures to local cuisine.',
    author: 'Amit Sharma',
    date: 'April 2, 2025',
    slug: 'top-10-things-to-do',
    imageSrc: 'https://images.unsplash.com/photo-1472396961693-142e6e269027'
  },
  {
    title: 'Complete Radhanagari Jungle Safari Guide – Tickets, Timings & Tips',
    excerpt: 'Everything you need to know about booking and enjoying the perfect wildlife safari experience in Radhanagari Sanctuary.',
    author: 'Priya Desai',
    date: 'March 27, 2025',
    slug: 'jungle-safari-guide',
    imageSrc: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d'
  },
  {
    title: 'Best Time to Visit Radhanagari for Birdwatching & Wildlife Photography',
    excerpt: 'Learn when to visit for the best wildlife sightings and photography opportunities throughout the seasons.',
    author: 'Rahul Patil',
    date: 'March 15, 2025',
    slug: 'best-time-to-visit',
    imageSrc: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a'
  }
];

const BlogHighlights = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Travel Tips & Guides</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our latest articles with expert tips, travel guides, and insider knowledge to plan your perfect Radhanagari trip.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.imageSrc} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <div className="flex items-center mr-4">
                    <User className="h-4 w-4 mr-1" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-forest">
                  {post.title}
                </h3>
                
                <p className="text-gray-700 mb-4 flex-grow">{post.excerpt}</p>
                
                <Link 
                  to={`/blog/${post.slug}`}
                  className="text-forest hover:text-forest-dark flex items-center mt-2"
                >
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            to="/blog"
            className="btn-primary inline-flex items-center"
          >
            View All Articles <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogHighlights;
