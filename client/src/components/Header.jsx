import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
   <div className='px-10 h-[80px] flex  space-x-10 justify-between items-center bg-gradient-to-r from-cyan-500 to-blue-500'>
    <div className='w-[200px] h-[80px] items-center'>
       <h1 className='pt-5 text-base tracking-widest text-center font-extrabold '>BANKING WEBSITE</h1>
       <p className='text-xl text-center font-bold text-green-400 tracking-wider'>Sparks foundation</p>

    </div>
    <div className='max-w-auto md:flex space-x-10 justify-between mx-10 hidden '>
        <ul className='flex space-x-10 '>
            <li><a className='text-white hover:text-red-500' href="#home"  activeClass='active'
         smooth={true}
         spy={true}>Home</a></li>
            <li><a className='text-white hover:text-red-500' href="#about"  activeClass='active'
         smooth={true}
         spy={true}>About Us</a></li>
            <li><a className='text-white hover:text-red-500' href="#services">Service</a></li>
            <li><a className='text-white hover:text-red-500' href="#contact">Contact</a></li>
        </ul>
        <button className=' text-white rounded-lg hover:bg-green-500 lg:px-2 bg-green-400'><Link to='/openaccount' className='text-white hover:text-white'>Open Your Account</Link></button>
    </div>
   </div>
  )
}

export default Header