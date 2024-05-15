import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const BASE_URL = "http://localhost:8080";
const AccountOpen = () => {
    const [data, setData] = useState({
        name: "",
        balance: 0
    })
    let name, value
    const handleInput = (e) => {
        name = e.target.name;
        value = e.target.value
        setData({ ...data, [name]: value })
    }
    const createuser = async (e) => {
        console.log(5);
        console.log(data);
        const res = await axios.post(`${BASE_URL}/register`, data);
    }
    return (
        <div className=' w-screen m-auto h-screen'>
            <div className='border shadow-2xl rounded-xl w-[90%] mx-5 md:mx-20 my-10 '>
                <div className='text-center mt-10 mx-10  pb-5  md:w-[90%] shadow-xl bg-gray-200'><h1 className='px-2 py-2 md:py-5 md:px-5'>Account Opening Form</h1></div>
                <div className='ml-5'>
                    <h2 className='py-10 px-5 text-2xl font-bold'>Personal Information</h2>
                    <form method="post" className='grid grid-cols-1 md:grid-cols-3 justify-between items-center ml-10'>
                        <div className="my-5">
                            <label htmlFor="fullname">Name <span className='text-red-600'>*</span></label><br />
                            <input type="text" name="name" id="name" placeholder='Your Name' className='shadow-lg bg-gray-300 rounded-lg px-5 py-3 w-[250px] md:w-[300px] outline-none' value={data.name} onChange={handleInput} /><br />
                        </div>
                        <div className="my-5">
                            <label htmlFor="amount">Amount <span className='text-red-600'>*</span></label><br />
                            <input className='shadow-lg bg-gray-300 rounded-lg px-5 py-3  w-[250px] md:w-[300px] outline-none' type="number" name='balance' id='balance' placeholder='amount' value={data.balance} onChange={handleInput} /> <br />
                        </div>
                    </form>
                    <div className='text-center mb-8 mt-5 '>
                        <button type="submit" className='mr-10 text-white rounded-lg hover:bg-green-500 lg:py-4 w-[200px] bg-green-400 text-center ' onClick={createuser}>Submit</button>
                        <button className=' text-white rounded-lg hover:bg-green-500 lg:py-4 w-[200px] bg-green-400 text-center '><Link to='/' className='text-white hover:text-white' >Back To Home</Link></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccountOpen