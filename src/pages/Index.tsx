
import React from 'react';
import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
import CollectionsGrid from '@/components/CollectionsGrid';
import Newsletter from '@/components/Newsletter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <FeaturedProducts />
        <CollectionsGrid />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
