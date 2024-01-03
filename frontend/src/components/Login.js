import React, { useRef, useState,useEffect } from "react";
import toast, { Toaster } from 'react-hot-toast';
import {Link} from "react-router-dom"
import { motion } from "framer-motion";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate()
  const [login,setLogin]=useState(null)
  const usernameRef = useRef("")
  const passwordRef = useRef("")
    // const notify = () => toast.success('Login Succesful');
    const loginHandle=async()=>{
      try {
        await axios.post("http://localhost:5000/login",{username:usernameRef.current.value,password:passwordRef.current.value})
        .then(response =>{
          console.log("Response = ",response)
          if(response.data==="Success"){
            navigate("/Desktop")
            toast.success("Login Succesful")

          }
          else if(response.data==="Invalid"){
            navigate("/login")
            toast.error("Invalid Username or Password")

          }
          else{
            toast.error("User Not Found")
          }
        })
      } catch (error) {
        setLogin("/login")
       console.log(error.status)
      }
    }
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
      <Toaster/>
      <div className="flex items-center justify-center mt-9">
        <div className="flex items-center justify-center bg-white max-w-lg px-14 py-14 rounded-3xl shadow-2xl phone:max-w-xs">
      <form className="flex flex-col gap-16 px-3 py-5">
        <div className="flex flex-col items-center justify-center gap-5">
        <h1 className="text-center text-4xl text-red-600 ">Login</h1>
        <hr className="w-48"/>
        </div>
        <div className="flex flex-col gap-5">
          <label className="text-sm">Username</label>
          <input ref={usernameRef} type="text" required className="border-b-2 border-black bg-white text-xl"></input>
          <label className="text-sm">Password</label>
          <input ref={passwordRef} type="text" required className="border-b-2 border-black bg-white text-xl"></input>
        </div>
        <div className="flex flex-col items-center justify-center gap-3">
        <Link to="" onClick={loginHandle}  className="text-xl border-white text-center bg-red-600 w-48 px-1 py-2 rounded-3xl text-white hover:bg-white hover:text-red-600 hover:border-red-600 hover:border-x-2 hover:border-y-2 ease-in-out duration-150 delay-0">
          Login
        </Link>
        <Link to="/SignUp" className="text-xs">Don't have an account?</Link>
        </div>
      </form>
    </div>
    </div>

    </motion.div>
  );
}

export default Login;
