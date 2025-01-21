import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'

import Footer from '../Components/Footer'
import Details from '../Components/Details'
import RelatedProduct from '../Components/RelatedProduct'
import FourCards from '../Components/FourCards'
import FourCard from '../Components/FourCard'

const SecondPage = () => {
  return (
    <div>

      <Navbar />
      <Hero />
      <Details />
      <RelatedProduct />
      <FourCards />
      <FourCard />

      <Footer />


    </div>
  )
}

export default SecondPage