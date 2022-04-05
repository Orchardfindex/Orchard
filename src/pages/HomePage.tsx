import React from 'react'
import Card from '../components/Card2'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { HomeObj1, HomeObj2, HomeObj3 } from '../components/InfoSection/Data'

export default function HomePage() {
  return (
    <>
      {/* <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} /> */}
      <HeroSection />
      <InfoSection {...HomeObj1} />
      <Card />
      <InfoSection {...HomeObj2} />
      <InfoSection {...HomeObj3} />
      <Footer />
    </>
  )
}
