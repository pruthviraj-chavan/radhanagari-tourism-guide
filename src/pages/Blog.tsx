
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, User, Tag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Separator } from "@/components/ui/separator";
import { blogPosts } from '@/data/blogData';

const Blog = () => {
  const featuredPost = blogPosts[0];
  const regularPosts = blogPosts.slice(1);

  return (
    <>
      <Helmet>
        <title>Radhanagari Travel Blog - Wildlife, Food & Accommodation Tips</title>
        <meta name="description" content="Expert travel tips, wildlife guides, and local insights for planning your perfect Radhanagari Wildlife Sanctuary visit. Read our blog for insider advice." />
      </Helmet>
      <Layout>
        <div className="bg-gradient-forest text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-white">Radhanagari Travel Blog</h1>
            <p className="max-w-3xl mx-auto text-center text-gray-200">
              Expert guides, local insights, and travel tips to help you plan the perfect Radhanagari experience.
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          {/* Featured Post */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-forest">Featured Article</h2>
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="h-64 lg:h-auto">
                  <img 
                    src={featuredPost.featuredImage} 
                    alt={featuredPost.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap items-center text-sm text-gray-500 mb-3 gap-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <span className="text-forest">{featuredPost.readTime}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 text-forest">
                    <Link to={`/blog/${featuredPost.slug}`} className="hover:text-forest-dark transition-colors">
                      {featuredPost.title}
                    </Link>
                  </h3>
                  
                  <p className="text-gray-700 mb-6">{featuredPost.excerpt}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredPost.tags.map((tag, index) => (
                      <span key={index} className="bg-gray-100 text-forest px-3 py-1 rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link 
                    to={`/blog/${featuredPost.slug}`}
                    className="bg-forest hover:bg-forest-dark text-white py-2 px-4 rounded transition-colors duration-300 inline-flex items-center"
                  >
                    Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Regular Posts */}
          <h2 className="text-2xl font-bold mb-6 text-forest">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.featuredImage} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                
                <CardHeader className="p-4 pb-0">
                  <div className="flex flex-wrap items-center text-xs text-gray-500 mb-2 gap-3">
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <span className="text-forest">{post.readTime}</span>
                  </div>
                  <CardTitle className="text-lg text-forest">
                    <Link to={`/blog/${post.slug}`} className="hover:underline">
                      {post.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="p-4 pt-2 flex-grow">
                  <p className="text-gray-600 text-sm">{post.excerpt}</p>
                </CardContent>
                
                <CardFooter className="p-4 pt-0 flex flex-col items-start">
                  <div className="flex items-center text-xs text-gray-500 mb-3">
                    <User className="h-3 w-3 mr-1" />
                    <span>{post.author}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {post.tags.slice(0, 2).map((tag, index) => (
                      <span key={index} className="bg-gray-100 text-forest px-2 py-0.5 rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                    {post.tags.length > 2 && (
                      <span className="text-gray-500 text-xs">+{post.tags.length - 2} more</span>
                    )}
                  </div>
                  
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="text-forest hover:text-forest-dark flex items-center text-sm mt-auto"
                  >
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6 text-forest">Popular Tags</h2>
            <div className="flex flex-wrap gap-3">
              {Array.from(new Set(blogPosts.flatMap(post => post.tags))).map((tag, index) => (
                <Link 
                  key={index} 
                  to={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                  className="bg-gray-100 hover:bg-forest hover:text-white px-4 py-2 rounded-full text-sm text-forest transition-colors duration-300 flex items-center"
                >
                  <Tag className="h-3 w-3 mr-1" /> {tag}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Blog;
