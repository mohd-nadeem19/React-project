import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// import Navbar from './Components/Navbar';
// import Watch from './Components/Watch';
// import EyeWear from './Components/EyeWear';
// import Card from './Components/Card';
// import RecentNews from './Components/RecentNews';
// import Heading from './Components/Heading';
// import NineCard from './Components/NineCard';
// import SeeMore from './Components/SeeMore';
// import Testimonials from './Components/Testimonials';
// import Instagram from './Components/Instagram';
// import Footer from './Components/Footer';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import SecondPage from './Pages/SecondPage';
import ThirdPage from './Pages/ThirdPage';
import FourthPage from './Pages/fourthPage';
import FifthPage from './Pages/FifthPage';
import SixthPage from './Pages/SixthPage';
import LoginPage from './Pages/LoginPage';
import UseStatePage from './Pages/UseStatePage';




function App() {
  const [count, setCount] = useState(0)

  const isToken = localStorage.getItem("Token");

  return (
    <div>
      
      {/* <Navbar/>
      <Watch />
      <EyeWear /> 
      <Card />
      <RecentNews />
      <Heading />
      <NineCard />
      <SeeMore />
      <Testimonials />
      <Instagram /> 
      <Footer /> */}
        <Routes>
        <Route path='/' element={isToken ? <HomePage /> : <LoginPage/> }/>
        <Route path='/secondPage' element={ <SecondPage /> }/>
        <Route path='/thirdPage' element={ <ThirdPage/> } />
        <Route path='/fourthPage' element={ <FourthPage/>} />
        <Route path='/fifthPage' element={ <FifthPage/> } />
        <Route path='/sixthPage' element={ <SixthPage/> } />
        <Route path='/loginPage' element={ <LoginPage/> } />
        <Route path='usestatePage' element={ <UseStatePage/>} />
          
        </Routes>

    </div>
  )
}

export default App



