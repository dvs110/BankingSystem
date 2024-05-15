import React from 'react'
// import { useState,useEffect } from 'react'
import { BiUser } from 'react-icons/bi'
// import {FiPhone} from 'react-icons/fi'
import { FaMoneyBillAlt } from 'react-icons/fa'
import { BsBank } from 'react-icons/bs';
import { useState } from 'react';
import axios from 'axios';
// import { BASE_URL } from '../data';
import { BASE_URL } from '../data';



const Action = () => {
  // const BASE_URL="http://localhost:8080"
  const [data, setData] = useState({
    name: "",
    myaccount: "",
    receiveraccount: "",
    amount: ""
  })

  let name, value
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value
    setData({ ...data, [name]: value })
  }

  const sendMoney = async (e) => {

    const res = await axios.post(`${BASE_URL}/transfer`, data);
    if (res.data === 2) {
      window.alert("Invalid Sender Account Number");
    }
    else if (res.data === 0) {
      window.alert("Insufficient Amount");
    }
    else if (res.data === 1) {
      window.alert("Invalid Receiver Account Number");
    }
    else {
      window.alert("Money transfer successfully");
    }

  }

  return (
    <div id="action" className='flex flex-col md:flex-row  py-10 max-h-auto max-w-auto space-x-10 bg-gray-100 items-center '>
      <h3 className='font-bold text-2xl px-10 w-auto space-x-10'>Online Money</h3>
      <div className='relative border  w-[50%] md:w-auto mt-5 '>
        < input
          value={data.name}
          onChange={handleInput}
          name="name"
          type="text" className='rounded-md py-5 pl-5 pr-10 md:space-x-10 md:w-auto w-full' placeholder='Your Name' />
        <BiUser className='text-blue-400 absolute right-5 top-6' />
      </div >
      <div className='relative border  w-[50%] md:w-auto mt-5 '>
        < input
          value={data.myaccount}
          onChange={handleInput}
          name="myaccount"
          type="number" className='rounded-md py-5 pl-5 pr-10 space-x-10 md:w-auto w-full' placeholder='Your Account Number' />
        <BsBank className='text-blue-400 absolute right-5 top-6' />
      </div >
      <div className='relative border  w-[50%] md:w-auto mt-5 '>
        < input
          value={data.receiveraccount}
          onChange={handleInput}
          name="receiveraccount"
          type="number" className=' appearance-none rounded-md py-5 pl-5 pr-10 space-x-10 md:w-auto w-full' placeholder='Reciever Account Number' />
        <BsBank className='text-blue-400 absolute right-5 top-6' />
      </div >
      <div className='relative border  w-[50%] md:w-auto mt-5 '>
        < input
          value={data.amount}
          onChange={handleInput}
          name="amount"
          type="number" className='rounded-md py-5  pl-5 pr-10 space-x-10 md:w-auto w-full' placeholder='Amount' />
        <FaMoneyBillAlt className='text-blue-400 absolute right-5 top-6' />
      </div >
      <button className='rounded-lg bg-blue-400 lg:px-8 lg:py-2   w-[50%] md:w-auto mt-5 text-white' onClick={sendMoney}>Send</button>

    </div>
  )
}

export default Action