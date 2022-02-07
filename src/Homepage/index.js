import React, { useState } from 'react';
import Card from '../components/Card';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { HomeObj1 } from '../components/InfoSection/Data';
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => { //function toggle true or false
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...HomeObj1} />
      <Card />
      <Footer />
    </>
  );
};

export default Home;
