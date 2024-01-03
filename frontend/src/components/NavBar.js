import React, { useState,useEffect,useRef } from 'react'
import logo from "../images/logo.png"
import {BsSearch,BsCart} from "react-icons/bs"
import {FiUser} from "react-icons/fi"
import {Link} from "react-router-dom"
import {RxHamburgerMenu } from "react-icons/rx"

function NavBar() {
    const [category,setCategory]=useState([])
    const inputRef=useRef("")
    useEffect(() => {
        const fetchApi = async () => {
          const url = 'https://dummyjson.com/products/categories';
          const response = await fetch(url);
          const responseJson = await response.json();
          setCategory(responseJson)
          console.log(category)
        };
        fetchApi();
      }, []);
      const filterData=()=>{
        const filtered = category.filter((item)=>item ===inputRef.current.value)
        setCategory(filtered)
        console.log(filtered)
      }
  return (
    <div className='shadow-md '>  
        <nav className='px-3 py-3 flex item-center justify-between w-full'>
            <div className='flex gap-1 items-center justify-left '>
                <img src={logo} className='w-14 phone:w-5' alt='logo'/>
                <Link to="/"className='font-extrabold text-2xl cursor-pointer phone:text-xs'>E-Cart</Link>
            </div>
            <div className='flex items-center gap-14'>
            <div className='flex items-center  font-normal gap-2 phone:hidden'>
                <input type='text' ref={inputRef} placeholder='search' className='bg-gray-100 px-5 py-2 rounded-3xl w-60'/>
                <BsSearch className='text-xl cursor-pointer' onClick={filterData}/>
                
            </div>
            <div className='flex items-center gap-5 text-md font-normal phone:hidden'>
                <Link to='/profile' className='flex gap-2 items-center cursor-pointer'><FiUser className='text-xl'/>Account</Link>
                <Link to="/cart" className='flex gap-2 items-center cursor-pointer'><BsCart className='text-xl'/> Cart</Link>
            </div>
            </div>
        </nav>
    </div>
  )
}

export default NavBar
// {`text ${click ? 'white' : 'blackSS'}`}