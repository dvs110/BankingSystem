import React from 'react'
// import a from '../assets/a.jpg'
// import b from '../assets/b.jpg'
// import c from '../assets/c.jpg'
import cc from '../assets/a.jpg'
const Card = (props) => {
  return (
    <div className=' w-full'>
       <div className='  pl-5  rounded-lg m-auto  w-[60%] md:w-[80%] bg-white'>
       <div>
           <img src={cc} alt="" />
        </div>
        <h3 className='text-2xl font-bold pt-5 pb-3'>{props.title}</h3>
        {/* <p className='pr-5 pb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, ea? Nemo, perferendis dolorum eos sapiente tempore rem eligendi eveniet ducimus, repudiandae, aut quidem dicta eius autem! Cupiditate iste explicabo vero?</p> */}
        <p className='pr-5 pb-5'>{props.desc}</p>
       </div>
    </div>
  )
}

export default Card