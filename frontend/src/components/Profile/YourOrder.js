import React from 'react'
import { useEffect,useState } from 'react';
import axios from 'axios';
import avatar from "../../images/avatar.png"
import { Link } from 'react-router-dom';
function YourOrder() {
    const [profileData,setProfileData]=useState([])
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('http://localhost:5000/orderDetails')
            console.log("OrderResponse = ",response.data)
            setProfileData(response.data)
        
          } catch (error) {
            console.error('Error fetching data:', error);
            // Handle errors, set error state, or perform other actions as needed
          }
        };
        fetchData();
      },[]);
  return (
    <div className='flex flex-col gap-10 items-center justify-center py-10 px-10  '>
        <div className='flex flex-col items-center gap-3'>
        <h1 className='text-3xl'>Recent Buys</h1>
        <hr className='w-48'/>
        </div>
        <div className='flex items-center gap-10 flex-wrap justify-center'>
            {profileData.map((user)=>{
                return <div className='flex flex-col items-start gap-1 w-72 h-auto shadow-2xl'>
                    <img src={user.img} className='w-full h-56 bg-cover object-cover'/>
                    <div className='flex flex-col gap-1 px-3 py-2'>
                    <h1><span className='font-bold'>Product Name : </span>{user.name}</h1>
                    <h1><span className='font-bold'>Product Amount : </span>{user.amount}</h1>
                    <h1><span className='font-bold'>Quantity : </span>{user.quantity}</h1>
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default YourOrder