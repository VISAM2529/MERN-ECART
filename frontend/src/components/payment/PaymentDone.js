import React from 'react'
import Lottie from 'lottie-react'
import animationData from "../../assets/paymentDonr.json"
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
function PaymentDone() {
  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}
    >
    <div className='flex flex-col items-center gap-5'>
        <Lottie animationData={animationData} className="max-w-md justify-center"/>
        <h1 className='text-3xl text-green-500 font-extrabold'>Payment Done</h1>
        <Link to="/Desktop" className='text-xl bg-red-500 text-white px-10 py-3 border-x-2 border-y-2 border-red-500 hover:text-red-500 hover:bg-white transition-all ease-in-out duration-300'>Shop More</Link>
    </div>
    </motion.div>
  )
}

export default PaymentDone