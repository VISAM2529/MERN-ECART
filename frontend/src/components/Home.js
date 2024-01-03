import React from 'react'
import Lottie from "lottie-react"
import animationData from "../assets/animation_lkhvzbn3.json"
import {FiArrowRight} from "react-icons/fi"
import {Link} from "react-router-dom"
import {motion} from "framer-motion"
function Home() {
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
    <div className="flex flex-col gap-24 items-center justify-center">
      <div className='px-10 py-5 flex items-center  gap-48  font-mono text-red-600 '>
        <h1 className="cursor-pointer text-7xl flex flex-col gap-10 items-center leading-tight text-center tracking-wider shadaow-2xl border-white border-x-2 border-y-2 phone:text-xl"><span className='flex flex-col items-center gap-3'><span className='text-5xl'>Shop</span> <span className='font-extrabold text-yellow-400 bg-orange-500 px-5 hover:bg-yellow-400 hover:text-orange-500 transition-all ease-in-out duration-300'>Smarter</span></span><span className='flex flex-col items-center gap-3'><span className='text-5xl '>Live</span> <span className='font-extrabold text-orange-500 bg-yellow-400 px-5 hover:bg-orange-500 hover:text-yellow-400 transition-all ease-in-out duration-300'>Better</span></span></h1>
        <Lottie animationData={animationData} className="max-w-md justify-end"/>
      </div>
      <div >
        <Link to="/Login" className="phone:text-xs phone:py-3 bg-red-600 px-5 py-5 text-xl border-white  rounded-3xl font-bold text-white flex gap-3 items-center hover:bg-white hover:text-red-600 hover:border-red-600 hover:border-x-4 hover:border-y-4 hover:text-extrabold ease-in-out duration-150 delay-0 shadow-2xl">Explore Now<FiArrowRight className="text-3xl phone:text-xl"/></Link>
      </div>
    </div>
    </motion.div>
  )
}

export default Home