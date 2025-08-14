import React from 'react'
import HeroSection from '../components/HeroSection.jsx'
import About from '../components/About'
import Qualities from '../components/Qualities.jsx'
import Menu from '../components/Menu.jsx'
import Us from '../components/Us.jsx'
import Team from '../components/Team.jsx'
import Footer from '../components/Footer.jsx'
import Reservation from '../components/Reservation.jsx'
import CustomizeMenuForm from '../components/CustomizeMenuForm.jsx'


const Home = () => {
  return (
    <>
      <HeroSection/>
      <About/>
      <Qualities/>
      <Menu/>
      <Us/>
      <Team/>
      <Reservation/>
      <CustomizeMenuForm/>
      <Footer/>
    </>
  )
}

export default Home
