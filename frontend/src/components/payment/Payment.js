import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { FaLock, FaGooglePay, FaRupeeSign, FaPaypal,FaPlus,FaMinus } from "react-icons/fa";
import { SiPhonepe, SiPaytm } from "react-icons/si";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
function Payment() {
  const [data, setData] = useState([]);
  const [quantity,setQuantity]=useState(1)

  const getId = useParams();
  const id = parseInt(getId.id, 10);
  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://dummyjson.com/products/category/${getId.smartphones}/`;
      const response = await fetch(url);
      const responseJson = await response.json();
      setData([responseJson.products]);
    };
    fetchApi();
  }, []);
  const data2 = data[0];
  console.log(data2);

  let firstElementId = null; // Default value if no element is found

  if (data2 && Object.keys(data2).length > 0) {
    const firstElement = data2[0];
    if (firstElement && firstElement.id !== undefined) {
      firstElementId = firstElement.id;
    }
  }
  const saveData=async()=>{

    try {
      await axios.post("http://localhost:5000/orders",{
          img:data2[Math.abs(id-firstElementId)].images[0],
          name:data2[Math.abs(id-firstElementId)].title,
          amount:data2[Math.abs(id-firstElementId)].price*quantity,
          quantity:quantity

      }).then(res=>{
        if(res.data==="Added"){
          toast.success("Order Placed")
        }
        else{
          toast.error("Somerthing Went Wrong")
        }
      })

    } catch (error) {
      console.log(error.message)
    }
  }
  if (data2) {
    const total=data2[Math.abs(id - firstElementId)].price
    return (
      <div className="px-14 py-10 phone:px-5">
        <Toaster/>
        <div className="w-full  shadow-lg    ">
          <div className="flex justify-between phone:flex-col ">
            <div className="flex flex-col px-5 py-5 gap-10 w-2/3 bg-white phone:w-80 ">
              <div className="flex flex-col items-start gap-3 ">
                <h1 className="text-2xl phone:text-sm">Secure Checkout</h1>
                <hr className="w-48 phone:w-28" />
              </div>
              <div className="flex flex-col gap-7 ">
                <div className="flex flex-col gap-3 ">
                  <input
                    placeholder="Email address"
                    className="w-full border-x-2 border-y-2 border-gray-200 bg-transparent px-5 py-3 rounded-3xl phone:py-1 phone:w-72"
                  />
                  <input
                    placeholder="Card Number"
                    className="w-full border-x-2 border-y-2 border-gray-200 bg-transparent  px-5 py-3 rounded-3xl phone:py-1 phone:w-72"
                  />
                  <div className="flex gap-3">
                    <input
                      placeholder="Month"
                      className="w-24 border-x-2 border-y-2 border-gray-200 bg-transparent  px-5 py-3 rounded-3xl phone:py-0 phone:w-20 "
                    />
                    <input
                      placeholder="Year"
                      className="w-24 border-x-2 border-y-2 border-gray-200 bg-transparent  px-5 py-3 rounded-3xl phone:py-0 phone:w-20"
                    />
                    <input
                      placeholder="Security Code"
                      className="w-48 border-x-2 border-y-2 border-gray-200 bg-transparent  px-5 py-3 rounded-3xl phone:py-0 phone:w-20"
                    />
                  </div>
                  <input
                    placeholder="Name On The Card"
                    className="w-full border-x-2 border-y-2 border-gray-200 bg-transparent  px-5 py-3 rounded-3xl phone:py-0 phone:w-72"
                  />
                </div>
                <div className="flex justify-evenly text-2xl phone:gap-10 phone:px-36">
                  <h1 className="w-14 h-14 shadow-2xl flex justify-center items-center cursor-pointer shadow-gray-700 rounded-lg hover:-translate-y-1 transition-all ease-in-out duration-300">
                    <SiPhonepe className="text-purple-700 " />
                  </h1>
                  <h1 className="w-14 h-14 shadow-2xl flex justify-center items-center cursor-pointer shadow-gray-700 rounded-lg hover:-translate-y-1 transition-all ease-in-out duration-300">
                    <FaGooglePay className="text-green-500 " />
                  </h1>
                  <h1 className="w-14 h-14 shadow-2xl flex justify-center items-center cursor-pointer shadow-gray-700 rounded-lg hover:-translate-y-1 transition-all ease-in-out duration-300">
                    <SiPaytm className="text-blue-500 " />
                  </h1>
                  <h1 className="w-14 h-14 shadow-2xl flex justify-center items-center cursor-pointer shadow-gray-700 rounded-lg hover:-translate-y-1 transition-all ease-in-out duration-300">
                    <FaPaypal className="text-blue-800 " />
                  </h1>
                  <h1 className="w-14 h-14 shadow-2xl flex justify-center items-center cursor-pointer shadow-gray-700 rounded-lg hover:-translate-y-1 transition-all ease-in-out duration-300">
                    <FaRupeeSign className="text-green-800 " />
                  </h1>
                </div>
                <div className="flex flex-col gap-5 items-center phone:text-xs">
                  <p>
                    By placing this order you agree to the{" "}
                    <span className="underline text-blue-700 cursor-pointer">
                      Terms & Conditions
                    </span>
                  </p>
                  <Link onClick={saveData} to="/payment/done" className="flex items-center gap-2 w-full bg-red-500 justify-center py-5 text-white text-xl border-x-2 border-y-2 border-red-500 hover:bg-white rounded-full hover:text-red-500 hover:rounded-full hover:border-x-2 hover:border-y-2 transition-all ease-in-out duration-700">
                    <FaLock />
                    Place Order
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-2/3 bg-blue-50 flex flex-col gap-10 py-10 shadow-2xl phone:w-80">
              <div>
                <img
                  src={data2[Math.abs(id - firstElementId)].images[0]}
                  className="w-full h-72 bg-cover object-contain "
                />
              </div>
              <div className="px-10 text-xl flex flex-col gap-3">
                <h1>
                  Name Of Product : {data2[Math.abs(id - firstElementId)].title}
                </h1>
                <h1>
                  Price Of Product : $
                  {data2[Math.abs(id - firstElementId)].price}
                </h1>
                <h1 className="flex items-center gap-5">
                  <button onClick={()=>setQuantity(quantity-1)}><FaMinus className="text-red-500"/></button>
                  <h1 className="text-2xl">{quantity}</h1>
                  <button onClick={()=>setQuantity(quantity+1)}><FaPlus className="text-green-500"/></button>
                </h1>
                <input
                  placeholder="Enter Coupon Code"
                  className="bg-transparent w-full py-3 border-x-2 border-y-2 border-white px-3 rounded-lg"
                />
                <h1>
                  Total Price : ${total*quantity}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    <div>
      <h1>Loading</h1>
    </div>;
  }
}

export default Payment;
