import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { HomeObj1, HomeObj2, HomeObj3 } from '../components/InfoSection/Data';
import Card from '../components/Card';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <InfoSection {...HomeObj1} />
      <Card />
      <InfoSection {...HomeObj2} />
      <InfoSection {...HomeObj3} />
      <Footer />
    </>
  );
};

export default Home;
