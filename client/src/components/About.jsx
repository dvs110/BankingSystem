import React from 'react'
const About = () => {
  return (
    <div id="about" className='px-10 py-10 bg-[url("./assets/banklogo.png")] md:bg-no-repeat bg-contain bg-right'>
        <div className=' md:w-[60%] md-[80%]'>
            <h3 className='text-black font-bold text-2xl'>______ About us</h3>
            <div className='mt-5'>
                <h2 className='text-4xl font-semibold text-black'>We are building a stronger community — together.</h2>
                <p className='mt-5 text-xl text-white bg-gray-500 rounded-lg px-5 py-5'>Our purpose to understand the individuals and the businesses in our neighborhood, so we can create the right opportunities for the people we serve.We support local organizations by volunteering our time, reinvesting in our community and showcasing our local business customers with our Spotlight Shop.We encourage diversity, equity and inclusion with our suppliers and our employees. We are always looking for people to grow their careers and future with our bank. </p>
            </div>
        </div>
        <div className='md:w-[60%] md-[80%]'>
        <h3 className='text-black font-bold text-2xl mt-10'>______Our Purpose</h3>
            <div className='mt-5'>
                <h2 className='text-4xl font-semibold text-black'>Making a difference in people's lives.</h2>
                <p className='mt-5 text-xl text-white  bg-gray-500 rounded-lg px-5 py-5'>Great companies have an enduring sense of purpose. We're driven to help, encourage and enable our customers and communities to thrive. Founded in 2000, we care deeply about those we serve. By asset size, we are a top 20 full-service India-based commercial bank, with a long history of community focused banking. Great companies have an enduring sense of purpose. We're driven to help, encourage and enable our customers and communities to thrive. Founded in 2000, we care deeply about those we serve. By asset size, we are a top 20 full-service India-based commercial bank, with a long history of community focused banking.</p>
            </div>
        </div>
    </div>
  )
}

export default About