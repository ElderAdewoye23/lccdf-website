import React from 'react'
import HeroSection from '../components/HeroSection'
import StatsSection from '../components/StatsSection'
import AboutSection from '../components/AboutSection'

function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <AboutSection />
    </div>
  )
}

export default Home
