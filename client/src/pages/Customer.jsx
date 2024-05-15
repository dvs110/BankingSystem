import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import { Action, Nav, Contact } from "../components";
import { BASE_URL } from '../data';

const Customer = () => {

    const [users, setUsers] = useState([]);

    const getData = async () => {
        const data = await axios.get(`${BASE_URL}/user`)
        console.log(data);
        setUsers(data)
    }


    useEffect(() => {
        getData();
    }, [])
    return <div className="w-full">

        <div className=' bg-[url("./assets/employee.jpg")] md:bg-repeat bg-fixed bg-cover  h-auto '>
            <Nav
                l1='action'
                l2='action'
                l3='customer'
                l4='contact'
                l5='contact'

            />
            <Action />
            <div className="text-center my-10 ">
                <h1 className="">Customer Details</h1>
                {/* <div className=" text-end mr-10 mt-5">  <button className='bg-green-400 '><Link to='/' className='text-white hover:text-white'>Back To Home</Link></button> </div> */}
            </div>
            <div className="flex">
                <table id="customer" className=" pr-20  table-auto border-collapse w-screen ml-32 md:ml-5   rounded-lg mb-40">
                    <thead className="bg-gray-50  border-b-2 border-gray-200">
                        <tr>
                            {/* <th className="p-3 w-24 text-sm font-semibold tracking-wide text-left">ID</th> */}
                            <th className="p-3  w-24 text-center text-2xl font-semibold tracking-wide ">Name</th>
                            <th className="p-3  w-24 text-center text-2xl font-semibold tracking-wide ">Account Number</th>
                            <th className="p-3  w-24 text-center text-2xl font-semibold tracking-wide ">Balance</th>
                        </tr>
                    </thead>
                    <tbody>

                        {users && users?.data?.data.map((curUser) => {
                            const { id, name, myaccount, balance } = curUser;

                            return (
                                <tr className="bg-gray-200" key={id}>
                                    <td className="p-3 text-center text-sm font-bold  text-gray-700">{name}</td>
                                    <td className="p-3 text-center text-sm font-semibold  text-gray-700">{myaccount}</td>
                                    <td className="p-3 text-center text-sm font-semibold text-gray-700">{balance}</td>
                                </tr>
                            )
                        })}


                        {/* <Table users={users}/> */}
                    </tbody>
                </table>
            </div>
            <Contact />
        </div>

    </div>
}


export default Customer