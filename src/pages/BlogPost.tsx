
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';
import { Calendar, User, Tag, ArrowLeft, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { blogPosts } from '@/data/blogData';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(post => post.slug === slug);
  
  if (!post) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-6">Blog Post Not Found</h1>
          <p className="mb-8">The blog post you're looking for doesn't exist or has been removed.</p>
          <Link to="/blog" className="btn-primary">
            Return to Blog
          </Link>
        </div>
      </Layout>
    );
  }
  
  // Generate a long-form content based on the excerpt
  const paragraphs = [
    post.content,
    "Radhanagari Wildlife Sanctuary offers visitors a unique opportunity to experience Maharashtra's biodiversity. The sanctuary spans over 350 square kilometers and is home to various species of plants, animals, and birds.",
    "When visiting Radhanagari, it's important to plan your trip according to the seasons. The winter months (October to February) are ideal for wildlife viewing, while the monsoon season transforms the landscape into a lush green paradise with flowing waterfalls.",
    "Local guides recommend early morning safaris for the best chance to spot wildlife, especially the Indian bison (gaur) which is the sanctuary's main attraction. Leopard sightings, though rare, are possible for lucky visitors.",
    "Beyond wildlife, Radhanagari is known for its cultural experiences. The local communities maintain their traditions and are often willing to share their knowledge of the forest, traditional recipes, and cultural practices with respectful visitors.",
    "Conservation efforts in Radhanagari have been largely successful, with increasing populations of key species. However, challenges remain, including human-wildlife conflict in border areas and the impact of climate change on the ecosystem.",
    "For photography enthusiasts, Radhanagari offers countless opportunities. From dramatic landscapes to macro shots of unique flora and fauna, there's something for every kind of nature photographer. Just remember to maintain distance from wildlife and respect their space.",
    "When planning your accommodation in Radhanagari, consider staying at eco-friendly homestays or resorts that follow sustainable practices. This not only enhances your experience but also contributes to the conservation of this beautiful sanctuary."
  ];

  // Related posts - find 3 other posts that aren't this one
  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id)
    .slice(0, 3);

  return (
    <>
      <Helmet>
        <title>{post.title} | Radhanagari Travel Guide</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>
      <Layout>
        <div className="bg-gradient-forest text-white py-12">
          <div className="container mx-auto px-4">
            <Link to="/blog" className="inline-flex items-center text-white hover:text-gray-200 mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" /> Back to all articles
            </Link>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white">{post.title}</h1>
            
            <div className="flex flex-wrap items-center text-sm text-gray-200 gap-6">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{post.date}</span>
              </div>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main content */}
            <div className="lg:col-span-8">
              <div className="mb-8 rounded-lg overflow-hidden">
                <img 
                  src={post.featuredImage} 
                  alt={post.title}
                  className="w-full h-auto object-cover aspect-video"
                />
              </div>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-xl font-medium text-gray-700 mb-6">{post.excerpt}</p>
                
                {paragraphs.map((paragraph, index) => (
                  <p key={index} className="mb-6 text-gray-700">{paragraph}</p>
                ))}
              </div>
              
              <div className="py-8">
                <div className="flex flex-wrap gap-2 mb-8">
                  {post.tags.map((tag, index) => (
                    <Link key={index} to={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}>
                      <span className="bg-gray-100 text-forest px-3 py-1 rounded-full text-sm hover:bg-forest hover:text-white transition-colors duration-300">
                        <Tag className="h-3 w-3 mr-1 inline" />
                        {tag}
                      </span>
                    </Link>
                  ))}
                </div>
                
                <Separator className="my-8" />
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-gray-900">Share this article</h3>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="icon">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-24">
                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h2 className="text-xl font-bold mb-4 text-forest">About the Author</h2>
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-gray-300 mr-4"></div>
                    <div>
                      <h3 className="font-medium text-gray-900">{post.author}</h3>
                      <p className="text-gray-600 text-sm">Travel Writer & Photographer</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Explores the hidden gems of Maharashtra's wildlife sanctuaries and documents authentic local experiences.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h2 className="text-xl font-bold mb-4 text-forest">Related Articles</h2>
                  <div className="space-y-4">
                    {relatedPosts.map((relatedPost) => (
                      <Link key={relatedPost.id} to={`/blog/${relatedPost.slug}`} className="block group">
                        <div className="flex items-start">
                          <div className="w-20 h-16 rounded overflow-hidden mr-3 flex-shrink-0">
                            <img 
                              src={relatedPost.featuredImage} 
                              alt={relatedPost.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                          <div>
                            <h3 className="text-sm font-medium text-gray-900 group-hover:text-forest line-clamp-2">
                              {relatedPost.title}
                            </h3>
                            <p className="text-xs text-gray-500 mt-1">{relatedPost.date}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default BlogPost;
