import React from 'react'
// import a from '../assets/a.jpg'
// import b from '../assets/b.jpg'
// import c from '../assets/c.jpg'
// import d from "../assets/a.jpg"
import Card from './Card'
const data=[
  {
  imgsrc:'./assets/a.jpg',
  title:"Online Services",
  desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, ea? Nemo, perferendis dolorum eos sapiente tempore rem eligendi eveniet ducimus, repudiandae, aut quidem dicta eius autem! Cupiditate iste explicabo vero?"
  },
  {
    imgsrc:'./assets/a.jpg',
  title:"Lowest Intrest",
  desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, ea? Nemo, perferendis dolorum eos sapiente tempore rem eligendi eveniet ducimus, repudiandae, aut quidem dicta eius autem! Cupiditate iste explicabo vero?"
  },
  {
    imgsrc:'./assets/a.jpg',
  title:"Credit Card Service",
  desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, ea? Nemo, perferendis dolorum eos sapiente tempore rem eligendi eveniet ducimus, repudiandae, aut quidem dicta eius autem! Cupiditate iste explicabo vero?"
  },
  {
    imgsrc:'./assets/a.jpg',
  title:"Mobile banking",
  desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, ea? Nemo, perferendis dolorum eos sapiente tempore rem eligendi eveniet ducimus, repudiandae, aut quidem dicta eius autem! Cupiditate iste explicabo vero?"
  },
  {
    imgsrc:'./assets/a.jpg',
  title:"Credit Card Service",
  desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, ea? Nemo, perferendis dolorum eos sapiente tempore rem eligendi eveniet ducimus, repudiandae, aut quidem dicta eius autem! Cupiditate iste explicabo vero?"
  },
  {
    imgsrc:'./assets/a.jpg',
  title:"Mobile banking",
  desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, ea? Nemo, perferendis dolorum eos sapiente tempore rem eligendi eveniet ducimus, repudiandae, aut quidem dicta eius autem! Cupiditate iste explicabo vero?"
  },
  {
    imgsrc:'./assets/a.jpg',
  title:"Credit Card Service",
  desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, ea? Nemo, perferendis dolorum eos sapiente tempore rem eligendi eveniet ducimus, repudiandae, aut quidem dicta eius autem! Cupiditate iste explicabo vero?"
  },
  {
    imgsrc:'./assets/a.jpg',
  title:"Mobile banking",
  desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, ea? Nemo, perferendis dolorum eos sapiente tempore rem eligendi eveniet ducimus, repudiandae, aut quidem dicta eius autem! Cupiditate iste explicabo vero?"
  },
]
const Service = () => {
  return (
  <div  id="services" className='bg-gray-200 pb-20'>
    <div className='text-center pt-10 pb-10 '>
      <h2 className=' text-xl font-medium pb-5 text-blue-400'>----OUR SERVICES----</h2>
      <h1 className='text-3xl font-medium'>We are Interested for Your <span className='text-blue-400'>Mobile</span>  <br />  Banking Service</h1>
    </div>
    <div className='grid lg:grid-cols-4 md:grid-cols-3  gap-y-5 grid-flow-row '>
    {/* <div className='bg-white border pl-5 rounded-lg ml-5 '>
        <div>
           <img src={a} alt="" />
        </div>
        <h3 className='text-2xl font-bold pt-5 pb-3'>{data[0].title}</h3>
        <p className='pr-5 pb-5'>{data[0].desc}</p>
    </div>
    
    <div className='bg-white border pl-5  rounded-lg ml-5'>
        <div>
           <img src={a} alt="" />
        </div>
        <h3 className='text-2xl font-bold pt-5 pb-3'>{data[1].title}</h3>
        <p className='pr-5 pb-5'>{data[1].desc}</p>
    </div>
 
    <div className='bg-white  pl-5  rounded-lg ml-5'>
        <div>
           <img src={c} alt="" />
        </div>
        <h3 className='text-2xl font-bold pt-5 pb-3'>{data[2].title}</h3>
        <p className='pr-5 pb-5'>{data[2].desc}</p>
    </div>
    
    <div className='bg-white  pl-5  rounded-lg ml-5'>
        <div className=''>
           <img src={a} alt="" />
        </div>
        <h3 className='text-2xl font-bold pt-5 pb-3'>{data[3].title}</h3>
        <p className='pr-5 pb-5'>{data[3].desc}</p>
    </div> */}

  
 

    {data.map((value,index)=>{
      // console.log(value)
      return(<Card
      key={index}
      imgsrc={value.imgsrc}
      title={value.title}
      desc={value.desc}
      />)
    })}
    </div>
   
  </div>
  )
}

export default Service