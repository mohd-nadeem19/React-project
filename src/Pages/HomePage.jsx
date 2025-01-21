import React from 'react'
import Navbar from '../Components/Navbar'
import Watch from '../Components/Watch'
import EyeWear from '../Components/EyeWear'
import Card from '../Components/Card'
import RecentNews from '../Components/RecentNews'
import Headings from '../Components/Headings'
import NineCard from '../Components/NineCard'
import SeeMore from '../Components/SeeMore'
import Testimonials from '../Components/Testimonials'
import Instagram from '../Components/Instagram'
import Footer from '../Components/Footer'

const HomePage = () => {
  return (
    <div>
        <Navbar />
        <Watch />
        <EyeWear />
        <Card />
        <RecentNews />
        <Headings />
        <NineCard />
        <SeeMore />
        <Testimonials />
        <Instagram />
        <Footer />
    
    </div>
  )
}

export default HomePage