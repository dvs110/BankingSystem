import React from 'react'
import newsletter from "../assets/newletter.jpg"
// import { useRef } from 'react'

const Contact = () => {
 
  return (
   <div id="contact" className='py-10 px-10 bg-white'>
    <h1 className='text-center mb-10'>Contact Us</h1>
   <div className='flex'>
   <div className='px-10 py-10 rounded-lg bg-blue-100 h-[650px] shadow-gray-900'>
    <div className=' pt-10'>
    <form action="https://formspree.io/f/mgeblenv" method="POST">
    <input type="text" placeholder='Full Name' className='w-[400px] h-[50px] px-5 rounded-md mb-10 outline-none border-b-8'   required /><br />
    <input type="email" placeholder='Email ID' className='w-[400px] h-[50px] px-5 rounded-md mb-10 outline-0 border-b-8' border required /><br />
    <textarea placeholder='Message' className='w-[400px] h-[50px] px-5 py-5 rounded-md mb-10 outline-none border-b-8' rows="30" cols="300" name="message" required></textarea><br />
    <button type="submit" className='bg-green-400 px-5 py-5 text-white outline-none'>Send Message</button>
    
    </form>
    </div>
   </div>
   <div>
    <img src={newsletter} alt="" className='hidden md:inline-flex' />
    </div>
   </div>
  
   </div>
  )
}

export default Contact