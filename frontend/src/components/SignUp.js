import React,{useState} from "react";
import toast, { Toaster } from 'react-hot-toast';
import {Link} from "react-router-dom"
import {motion} from "framer-motion"
import {FcGoogle} from "react-icons/fc"
import axios from "axios"
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import 'react-toastify/dist/ReactToastify.css';
function SignUp() {
    const navigate = useNavigate()
    const emailRef = useRef("")
    const mobileRef = useRef("")
    const usernameRef = useRef("")
    const passwordRef = useRef("")
    const fnameRef = useRef("")
    const lnameRef = useRef("")
    const photoRef = useRef("")

    const saveData=async()=>{
      try {
        await axios.post("http://localhost:5000/signup",{
          email:emailRef.current.value,
          mobile:mobileRef.current.value,
          username:usernameRef.current.value,
          password:passwordRef.current.value,
          fname:fnameRef.current.value,
          lname:lnameRef.current.value,
          profilePhoto:photoRef.current.value
        }).then((res)=>{
          if(res.json==="Exist"){
            navigate("/signup")
            toast.error("Already Exist")
          }
          else if(res.json==="Created"){
            toast.success("Account Created Successfully")
            navigate("/login")
            
          }
        })
        

        // console.log("Data = ",inputValue.current.value)
      } catch (error) {
        toast.error("Already Exist! Please Login")
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

    <div className="flex flex-col items-center justify-center py-10 w-full">
        <div className="flex items-center justify-center bg-white w-2/3 px-5 py-3 rounded-3xl shadow-2xl phone:w-11/12">
      <form className="flex flex-col gap-16 px-3 py-5 phone:max-w-xl">
        <div className="flex flex-col items-center justify-center gap-5">
        <h1 className="text-center text-4xl text-red-600 phone:text-3xl">Create Account</h1>
        <hr className="w-48"/>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex gap-3 items-center phone:flex-col">
          <div className="flex flex-col gap-5 ">
          <label className="text-sm">Email address</label>
          <input ref={emailRef} type="email" required className="border-b-2 border-black bg-white text-xl" ></input>
          </div>
          <div className="flex flex-col gap-5">
          <label className="text-sm">Mobile No</label>
          <input ref={mobileRef} type="number" required className="border-b-2 border-black bg-white text-xl"></input>
          </div>
          </div>
          <label className="text-sm">First Name</label>
          <input ref={fnameRef} type="text" required className="border-b-2 border-black bg-white text-xl"></input>
          <label className="text-sm">Last Name</label>
          <input ref={lnameRef} type="text" required className="border-b-2 border-black bg-white text-xl"></input>
          <label className="text-sm">Username</label>
          <input ref={usernameRef} type="text" required className="border-b-2 border-black bg-white text-xl"></input>
          <label className="text-sm">Password</label>
          <input ref={passwordRef} type="text" required className="border-b-2 border-black bg-white text-xl"></input>
          <label className="text-sm">Profile Photo</label>
          <input ref={photoRef} type="file" required className=" bg-white text-xl"></input>

        </div>
        <div className="flex flex-col items-center justify-center gap-3">
        <Link to="/login"  onClick={saveData} className="text-xl text-center bg-red-600 w-48 px-1 py-2 rounded-3xl text-white border-white hover:bg-white hover:text-red-600 hover:border-red-600 hover:border-x-2 hover:border-y-2 ease-in-out duration-150 delay-0">
          Create Account
        </Link>
        <Link to="/Login" className="text-xs">Already have an account?</Link>
        </div>
        <button className="flex items-center justify-center py-3 hover:rounded-3xl transition-all ease-in-out duration-500 border-x-2 border-y-2 border-black bg-transparent gap-3 text-2xl phone:text-xs "><FcGoogle />Sign Up with Google</button>

      </form>
    </div>
    </div>
    </motion.div>
  );
}

export default SignUp;
