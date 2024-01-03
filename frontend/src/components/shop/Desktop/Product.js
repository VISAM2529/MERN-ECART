import React, { useContext, useState } from 'react'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import {categoryContext} from "../../../App"

function Product() {
  const category = useContext(categoryContext)
  
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
        {category.map((user)=>{
          return  <div className="w-72 flex flex-col gap-5 items-center mt-10 ml-10 rounded-3xl shadow-2xl hover:-translate-y-1 ">
          <p key={user}>{user}</p>
        </div>
        })}
     
      </div>
</div>
    </motion.div>
  )
}

export default Product