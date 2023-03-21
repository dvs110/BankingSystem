
import React from 'react'
import am from '../assets/am.jpg'
import { CiLinkedin } from 'react-icons/ci'
import { AiFillGithub } from 'react-icons/ai'
import { BsInstagram } from 'react-icons/bs'
import { Link } from 'react-router-dom'
const AboutMe = () => {
  return (

    <div className="w-full  m-auto px-10 py-10 ">
      <div className='md:flex bg-gray-100 w-auto shadow-2xl  items-center  px-20 py-20 rounded-xl '>
        <div className='mr-8 '>
          <div className='w-[300px] h-[450px] bg-[#8ab4f8] font-[Montserrat] rounded-xl relative items-center m-auto text-center'>
            <img src={am} alt="" className='absolute rounded-full -top-10 left-20' />

            <div className='absolute top-32 text-white tracking-wider'>
              <h2 className='font-semibold text-xl'>HELLO, I'M
                <br />  DEVANG SATI
              </h2>
              <p className='pt-4'>I'm Web Development and Designing Intern at The Sparks Foundation</p>
            </div>
            <div className='flex space-x-1 rounded-full text-black w-auto  absolute bottom-10 left-10 h-10'>
              <Link to='https://www.linkedin.com/in/devang-sati-49320a225/' className='text-black hover:text-white'><CiLinkedin className=' w-[50px] h-[30px] bg-[#8ab4f8] cursor-pointer' /></Link>
              <Link to='https://github.com/dvs110' className='text-black hover:text-white'> <AiFillGithub className='bg-[#8ab4f8] w-[50px] h-[30px] cursor-pointer' /></Link>
              <Link to='https://www.instagram.com/devangsati309/' className='text-black hover:text-white'><BsInstagram className='bg-[#8ab4f8] w-[50px] h-[30px]  cursor-pointer' /></Link>
            </div>

          </div>

        </div>
        <div className='mt-20'>
          <h1 className='mb-5'>About Me</h1>
          <p className=' w-[80%] md:w-[50%]'>I'm a web developer with a focus on the MERN stack, but still exploring other technologies and frameworks that catch my interest! if you're looking for a developer to add to your team, I'd love to hear from you!</p>
          <button className='bg-green-400 text-white cursor-pointer hover:bg-green-500 outline-none border mt-5'><Link to="/contact" className='text-white hover:text-white'> Contact me</Link></button>
        </div>
      </div>
    </div>
  )
}

export default AboutMe