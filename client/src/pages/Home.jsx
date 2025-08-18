import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import AiTools from '../components/aiTools.jsx'
import Testimonial from '../components/Testimonial.jsx'
import Plan from './Plan.jsx'
import Footer from '../components/Footer.jsx'

const Home = () => {
  return (
    <div>
         <Navbar />
         <Hero />
         <AiTools />
         <Testimonial/>
         <Plan />
         <Footer />
    </div>
  )
}

export default Home
