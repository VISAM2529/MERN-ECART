import React from 'react'
import { motion } from "framer-motion";
function Deals(props) {
  return (
    <motion.div
    className="inline-flex "
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 0.8,
      delay: 0.5,
      ease: [0, 0.71, 0.2, 1.01]
    }}>
      <div>
      <div className="flex">
      <div className="w-72 flex flex-col gap-5 items-center mt-10 ml-10 rounded-3xl shadow-2xl hover:-translate-y-1 ">
        <h1 className='text-9xl px-5 py-5 text-center text-blue-500 font-extrabold'>{props.img}</h1>
        <hr className='w-full'/>
        <h1 className="py-5 mb-5 text-xl">{props.head}</h1>
      </div>
      </div>
</div>
    </motion.div>
  )
}

export default Deals