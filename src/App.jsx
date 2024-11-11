import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navbar from './Components/Navbar';
import Watch from './Components/Watch';
import EyeWear from './Components/EyeWear';
import Card from './Components/Card';
import RecentNews from './Components/RecentNews';
import Heading from './Components/Heading';
import NineCard from './Components/NineCard';
import SeeMore from './Components/SeeMore';
import Testimonials from './Components/Testimonials';
import Instagram from './Components/Instagram';
import Footer from './Components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <Watch />
      <EyeWear /> 
      <Card />
      <RecentNews />
      <Heading />
      <NineCard />
      <SeeMore />
      <Testimonials />
      <Instagram /> 
      <Footer />
        <Routes>
          <Route path='/home' element={ <Home/> }/>
        </Routes>

    </div>
  )
}

export default App



