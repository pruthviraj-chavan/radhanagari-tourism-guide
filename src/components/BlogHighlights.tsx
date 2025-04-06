
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, User } from 'lucide-react';
import { blogPosts } from '@/data/blogData';

const BlogHighlights = () => {
  // Get the first 3 blog posts
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3 text-forest">Travel Tips & Guides</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our latest articles with expert tips, travel guides, and insider knowledge to plan your perfect Radhanagari trip.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredPosts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full hover:shadow-xl transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.featuredImage} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  loading="lazy"
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
                
                <h3 className="text-xl font-semibold mb-3 text-forest hover:text-forest-dark transition-colors">
                  <Link to={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>
                
                <p className="text-gray-700 mb-4 flex-grow">{post.excerpt}</p>
                
                <Link 
                  to={`/blog/${post.slug}`}
                  className="text-forest hover:text-forest-dark flex items-center mt-2 font-medium"
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
            className="bg-gradient-forest hover:bg-forest-dark text-white py-3 px-6 rounded transition-colors duration-300 inline-flex items-center font-medium"
          >
            View All Articles <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogHighlights;
