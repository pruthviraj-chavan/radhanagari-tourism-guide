
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import NaturalSpots from '@/components/NaturalSpots';
import FeaturedHotels from '@/components/FeaturedHotels';
import SafariSection from '@/components/SafariSection';
import LocalFood from '@/components/LocalFood';
import BlogHighlights from '@/components/BlogHighlights';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Radhanagari Tourism | Best Hotels, Safaris, Local Food & Travel Guide</title>
        <meta name="description" content="Visit Radhanagari Wildlife Sanctuary – Book jungle safaris, discover the best local hotels & food, explore treks & birdwatching. Travel tips, blogs & more." />
      </Helmet>
      <Layout withHero>
        <Hero />
        <div className="bg-white">
          <div className="container mx-auto px-4 py-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-forest">Welcome to Radhanagari</h2>
              <p className="text-gray-700 mb-4">
                Welcome to the official tourism guide to Radhanagari, the heart of Maharashtra's biodiversity. Whether you're looking for affordable hotels in Radhanagari, planning an exciting jungle safari in Dajipur, or curious about traditional Kolhapuri food, this site is your go-to resource.
              </p>
              <p className="text-gray-700">
                Discover Radhanagari wildlife sanctuary timings, forest stay packages, birdwatching trails, and authentic local experiences with real-time travel tips.
              </p>
            </div>
          </div>
        </div>
        <NaturalSpots />
        <FeaturedHotels />
        <SafariSection />
        <LocalFood />
        <BlogHighlights />
      </Layout>
    </>
  );
};

export default Index;
