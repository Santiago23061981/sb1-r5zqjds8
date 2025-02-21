import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default Home;