import React from 'react'
import { Nav,Header,Banner,Service, Action, About, Contact } from '../components'
const Home = () => {
  return (
    <div className='max-w-auto'>
        <Nav
        l1="home"
        l2="action"
        l3="about"
        l4="services"
        l5="contact"
        />
        <Header/>
        <Banner/>
        <Action/>
        <About/>
        <Service/>
        <Contact/>
    </div>
  )
}

export default Home