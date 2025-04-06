
import React, { useState } from 'react';
import ReactPlayer from 'react-player/lazy';

const VideoSection = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <section className="section-container bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3 text-forest">Experience Radhanagari</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Take a virtual journey through the lush forests, scenic waterfalls, and diverse wildlife of Radhanagari Sanctuary.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-xl">
          {!isVideoLoaded && (
            <div className="w-full aspect-video bg-gray-200 flex items-center justify-center">
              <div className="animate-pulse">Loading video...</div>
            </div>
          )}
          <div className={isVideoLoaded ? 'block' : 'block'}>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
              width="100%"
              height="100%"
              style={{ aspectRatio: '16/9' }}
              controls={true}
              onReady={() => setIsVideoLoaded(true)}
              config={{
                youtube: {
                  playerVars: { showinfo: 1 }
                }
              }}
            />
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
