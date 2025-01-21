import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Icons from '../Components/Icons'
import OrderDetails from '../Components/OrderDetails'
import PaymentMethod from '../Components/PaymentMethod'

const FifthPage = () => {
  return (
    <div>
        <Navbar />
        <Icons />
        <OrderDetails />
        <PaymentMethod />
        <Footer />
    </div>
  )
}

export default FifthPage