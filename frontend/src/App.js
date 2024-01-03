import "./App.css";
import React, { createContext, useContext, useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

import { AnimatePresence } from "framer-motion";

import SmartphonesHome from "./components/Smartphones/SmartphonesHome";

import PhoneInfo from "./components/Smartphones/PhoneInfo";
import Payment from "./components/payment/Payment";
import Cart from "./components/cart/Cart";
import PaymentDone from "./components/payment/PaymentDone";
import Profile from "./components/Profile/Profile";



const categoryContext = createContext()
function App() {
  const [category,setCategory]=useState([])

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

  console.log("category = ",category)

  return (
    <categoryContext.Provider value={category}>
    <AnimatePresence>
      <div>
        <BrowserRouter>
          <NavBar />
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/SignUp" element={<SignUp />} />
              <Route path="/Login" element={<Login />} />
              <Route
                path="/Desktop"
                element={
                  <div className="mt-10 flex flex-col gap-24">
                    <div className="flex flex-col gap-10">
                      <div className="flex  items-center justify-between gap-3 px-10 phone:px-0">
                      <div className="flex flex-col gap-3">
                      <h1 className="text-3xl ml-10 font-extrabold phone:text-xl phone:ml-2">Products For You!</h1>
                      <hr className="w-72 ml-10 phone:w-32 phone:ml-2"/>
                      </div>
                      <div>
                        <select className="cursor-pointer">
                          <option>Category</option>
                          {category.map((user)=>{
                            return <option onClick={(user)=>{
                              const filterData = category.filter(item=>item===user)
                              setCategory(filterData)
                              console.log("filterCategory = ",category)
                            }}><button >{user}</button></option>
                          })}
                        </select>
                      </div>
                      </div>
                      <div className="flex flex-wrap  gap-5 px-16 phone:px-4 justify-center ">
                      {category.map((user)=>{
                          return <div  className="hover:-translate-y-3 transition-all ease-in-out duration-700 bg-white shadow-2xl w-72 h-72 rounded-2xl cursor-pointer phone:w-32 phone:h-40">
                            <div className="flex flex-col items-center gap-5" >
                            <img src={`https://source.unsplash.com/random/?${user}`} className="w-full h-48 bg-cover object-cover rounded-tl-2xl rounded-tr-2xl phone:h-24"/>
                            <Link key={user} to={`/${user}`} className="text-2xl phone:text-xs phone:pb-2">{user}</Link>
                            </div>
                          </div>
                        })}
                      </div>
                    </div>
                    
                  </div>
                }
              />
              <Route
                path="/:smartphones"
                element={<SmartphonesHome/>}
              />
              <Route
                path="/:laptops"
                element={<SmartphonesHome/>}
              />
              <Route
                path="/:fragrances"
                element={<SmartphonesHome/>}
              />
              <Route
                path="/:skincare"
                element={<SmartphonesHome/>}
              />
              <Route
                path="/:groceries"
                element={<SmartphonesHome/>}
              />
              <Route
                path="/:homedecoration"
                element={<SmartphonesHome/>}
              />
              <Route
                path="/:furniture"
                element={<SmartphonesHome/>}
              />
              <Route
                path="/:lighting"
                element={<SmartphonesHome/>}
              />
              <Route
                path="/:tops"
                element={<SmartphonesHome/>}
              />
              <Route
                path="/:womensdresses"
                element={<SmartphonesHome/>}
              />
              <Route
                path="/:womensshoes"
                element={<SmartphonesHome/>}
              />
              <Route
                path="/:motorcycle"
                element={<SmartphonesHome/>}
              />
              <Route
                path="/:mensshirts"
                element={<SmartphonesHome/>}
              />
              <Route
                path="/:mensshoes"
                element={<SmartphonesHome/>}
              />
              <Route
                path="/:menswatches"
                element={<SmartphonesHome/>}
              />
              <Route
                path="/:womensmatches"
                element={<SmartphonesHome/>}
              />
              <Route
                path="/:womensbags"
                element={<SmartphonesHome/>}
              />
              <Route
                path="/:womensjewellery"
                element={<SmartphonesHome/>}
              />
              <Route
                path="/:sunglasses"
                element={<SmartphonesHome/>}
              />
              <Route
                path="/:automotive"
                element={<SmartphonesHome/>}
              />

              <Route
                path="/:smartphones/:id"
                element={<PhoneInfo/>}
              />

              <Route
                path="/:laptops/:id"
                element={<PhoneInfo/>}
              />
              <Route
                path="/:fragnances/:id"
                element={<PhoneInfo/>}
              />
              <Route
                path="/:skincare/:id"
                element={<PhoneInfo/>}
              />
              <Route
                path="/:groceries/:id"
                element={<PhoneInfo/>}
              />
              <Route
                path="/:homedecoration/:id"
                element={<PhoneInfo/>}
              />
              <Route
                path="/:furniture/:id"
                element={<PhoneInfo/>}
              />
              <Route
                path="/:tops/:id"
                element={<PhoneInfo/>}
              />
              <Route
                path="/:womensdresses/:id"
                element={<PhoneInfo/>}
              />
              <Route
                path="/:womensshoes/:id"
                element={<PhoneInfo/>}
              />
              <Route
                path="/:mensshirts/:id"
                element={<PhoneInfo/>}
              />
              <Route
                path="/:menswatches/:id"
                element={<PhoneInfo/>}
              />
              <Route
                path="/:mensshoes/:id"
                element={<PhoneInfo/>}
              />
              <Route
                path="/:womensbags/:id"
                element={<PhoneInfo/>}
              />
              <Route
                path="/:womensjewellery/:id"
                element={<PhoneInfo/>}
              />
              <Route
                path="/:sunglasses/:id"
                element={<PhoneInfo/>}
              />
              <Route
                path="/:automotive/:id"
                element={<PhoneInfo/>}
              />
              <Route
                path="/:motorcycle/:id"
                element={<PhoneInfo/>}
              />
              <Route
                path="/:lighting/:id"
                element={<PhoneInfo/>}
              />
              <Route
                path="/:womenswatches/:id"
                element={<PhoneInfo/>}
              />
              <Route
                path="/payment/:smartphones/:id"
                element={<Payment/>}
              />
              <Route
                path="/cart/"
                element={<Cart/>}
              />
               <Route
                path="/payment/done"
                element={<PaymentDone/>}
              />
              <Route
                path="/profile"
                element={<Profile/>}
              />

            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </AnimatePresence>
    </categoryContext.Provider>
  );
}

export default App;
export {categoryContext}