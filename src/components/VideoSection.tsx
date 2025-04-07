
import React, { useState, lazy, Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

// Lazy load ReactPlayer to improve initial page load speed
const ReactPlayer = lazy(() => import('react-player/lazy'));

const VideoSection = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <section className="section-container bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3 text-forest">Experience Radhanagari</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Take a virtual journey through the lush forests, scenic waterfalls, and diverse wildlife of Radhanagari Sanctuary.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-xl">
          <div className="w-full aspect-video">
            {!isVideoLoaded && (
              <Skeleton className="w-full h-full bg-gray-200 flex items-center justify-center">
                <div className="text-gray-500">Loading video...</div>
              </Skeleton>
            )}
            <Suspense fallback={<Skeleton className="w-full h-full" />}>
              <div className={isVideoLoaded ? 'block' : 'hidden'}>
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                  width="100%"
                  height="100%"
                  style={{ aspectRatio: '16/9' }}
                  controls={true}
                  onReady={() => setIsVideoLoaded(true)}
                  light={true} // Use light mode to reduce initial load
                  config={{
                    youtube: {
                      playerVars: { 
                        showinfo: 1,
                        rel: 0 // Don't show related videos
                      }
                    }
                  }}
                />
              </div>
            </Suspense>
          </div>
        </div>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="font-bold text-lg mb-2 text-forest">Wildlife Encounters</h3>
            <p className="text-gray-700">Watch close-up footage of bison, leopards and other animals in their natural habitat.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="font-bold text-lg mb-2 text-forest">Scenic Trails</h3>
            <p className="text-gray-700">Explore the hidden trekking paths and scenic vantage points through video guides.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="font-bold text-lg mb-2 text-forest">Local Culture</h3>
            <p className="text-gray-700">Learn about traditional customs, festivals and cultural experiences of the region.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
