import React from 'react'
import { useEffect,useState } from 'react';
import axios from 'axios';
import avatar from "../../images/avatar.png"
import { Link } from 'react-router-dom';
function You() {
    const [profileData,setProfileData]=useState([])
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('http://localhost:5000/profile')
            console.log("Response = ",response.data)
            setProfileData(response.data[0])
        
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
        <h1 className='text-3xl'>Your Profile</h1>
        <hr className='w-48'/>
        </div>
        <div className='w-full bg-white shadow-2xl px-24 py-10 flex items-center justify-between gap-10 rounded-2xl'>
            <div className='flex gap-10'>
            <img src={profileData.profilePhoto} className='w-32 h-32 rounded-full '/>
            <div className='flex flex-col items-start gap-3'>
            <h1 className='text-5xl'>{profileData.username}</h1>
            <p>{profileData.fname} {profileData.lname}</p>
            <p>{profileData.email}</p>
            <p>{profileData.mobile}</p>

            </div>
            </div>
            <div className='px-5'>
                <Link to="/login" className='bg-red-500 text-white px-5 py-3 rounded-xl font-extrabold'>Log Out</Link>
            </div>
        </div>
    </div>
  )
}

export default You