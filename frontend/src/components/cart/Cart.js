import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {FaMinus,FaPlus } from "react-icons/fa"
import {ImCross } from "react-icons/im"
import { useDispatch } from 'react-redux'
import { removeCart } from '../features/CartSlice'
import Lottie from 'lottie-react'
import animationData from "../../assets/NoCart.json"
import { motion } from 'framer-motion'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { toast,Toaster } from 'react-hot-toast'
import {MdOutlineArrowForwardIos,MdDelete  } from "react-icons/md"
function Cart() {
  const [serverData,setServerData]=useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/cartDetails')
        console.log(response.data)
        setServerData(response.data)
    
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle errors, set error state, or perform other actions as needed
      }
    };
    fetchData();
  },[]);
  console.log(serverData)
    const handleDelete = async (productName) => {
      console.log(productName)
      try {
        const response = await axios.delete(`http://localhost:5000/delete/:${productName}`);
        if (response.data.success) {
          // Item successfully deleted
          window.location.reload()
          toast.success("Removed from Cart")
          // Perform any necessary state updates or actions after deletion
          // ...
        }
      } catch (error) {
        console.error('Error deleting item:', error);
      }
    };
  if(serverData){
    return (
      <div className='flex flex-col gap-16 items-center justify-center py-10 px-10'>
        <Toaster/>
        <div className='flex flex-col items-center gap-1'>
        <h1 className='font-extrabold text-3xl'>Cart</h1>
        <p className='text-md'>Home / Cart</p>
        </div>
           <table className='w-full flex flex-col gap-10 justify-center items-center '>
          <thead className='w-full'>
            <tr className='flex items-center justify-between px-7 text-xl'>
              <th >Product</th>
              <th className='w-24'>Title</th>
              <th >Price</th>
              <th ></th>
              <th></th>
            </tr>
          </thead>
          <tbody className='flex flex-col gap-5 justify-center w-full '>
            {serverData.map((item) => (
              <tr key={item.id} className='flex justify-between items-center py-5 text-lg px-10 border-x-2 border-y-2 border-gray-100' >
                <td><img src={item.img} className='w-14 h-14'/></td>
                <td className='w-24 text-center'>{item.productName}</td>
                <td>${item.productPrice}</td>
                <Link to={`/${item.category}/${item.id}`}><MdOutlineArrowForwardIos className='text-3xl'/></Link>
                <td className='text-red-500 font-bold'><button onClick={()=>handleDelete(item.productName)}><MdDelete className='text-3xl' /></button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
  else{
    return(
      <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}
    >
      <div className="flex flex-col justify-center items-center">
      <Lottie animationData={animationData} className='max-w-md justify-center'/>
      </div>
      </motion.div>
    )
  }
}

export default Cart