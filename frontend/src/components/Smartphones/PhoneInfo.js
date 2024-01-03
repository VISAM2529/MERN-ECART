import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaStar,FaHeart,FaRupeeSign  } from "react-icons/fa";
import FilterMobile from "./FilterMobile";
import {TbTruckReturn,TbTruckDelivery} from "react-icons/tb"
import { Link } from "react-router-dom";
import {useDispatch} from "react-redux"
import { addCart } from "../features/CartSlice";
import {RxCross2} from "react-icons/rx"
import ReactModal from "react-modal"
import axios from "axios";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
function PhoneInfo() {

  const dispatch = useDispatch()
  const [data, setData] = useState([]);
  const getId = useParams();
  console.log("getid = ",getId)
  const id = parseInt(getId.id, 10);
  const [label,setLabel]=useState("Add")
 

  const [heartClick,setHeartClick]=useState(false)

  const handleHeartClick = ()=>{
    setHeartClick(!heartClick)
  }
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
  
  console.log(data2)
  let firstElementId = null; // Default value if no element is found

  if (data2 && Object.keys(data2).length > 0) {
    const firstElement = data2[0];
    if (firstElement && firstElement.id !== undefined) {
      firstElementId = firstElement.id;
    }
  }
  // console.log(data2[Math.abs(id-firstElementId)].price)
  const [price,setPrice]=useState("")
  const [image,setImage]=useState("")
  const [title,setTitle]=useState("")
  const addToCart = (e)=>{
    setLabel("Added")
    dispatch(addCart({
      price:price,
      image:image,
      title:title
    }))
    setLatIsOpen(false);
    
  }
  const [latIsOpen, setLatIsOpen] = React.useState(false);


  function closeLat() {
    setLatIsOpen(false);
  }


  console.log(firstElementId)
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      borderRadius : "10px"
    },
  };
  
  const [productImage,setProductImage]=useState(0)
  const saveData=async()=>{

    try {
      await axios.post("https://e-cart-wkd8.onrender.com/cart",{
          id:data2[Math.abs(id-firstElementId)].id,
          category:data2[Math.abs(id-firstElementId)].category,
          img:data2[Math.abs(id-firstElementId)].images[0],
          productName:data2[Math.abs(id-firstElementId)].title,
          productPrice:data2[Math.abs(id-firstElementId)].price

      }).then(res=>{
        if(res.data==="Added"){
          toast.success("Added to Cart")
        }
        else if(res.data==="Exist"){
          toast.error("Already In Cart")
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
    return (
      <div>
        <Toaster/>
      <ReactModal
        isOpen={latIsOpen}
        style={customStyles}
      >
        <div className="flex flex-col gap-10 px-5 py-5">
          <div className="flex items-center justify-end">
          <button onClick={closeLat} className="text-3xl text-red-600 hover:scale-150 ease-in-out duration-500"><RxCross2/></button>
          </div>
          <div className="flex flex-col gap-16">
          <h1 className="text-xl">Add To Cart ?</h1>
        <button onClick={addToCart} className="bg-blue-600  text-white py-3 text-xl hover:rounded-3xl ease-in-out duration-300 hover:bg-blue-500">Yes</button>
        
          </div>
       </div>
      </ReactModal>
      <div className="px-10 py-10">
        <div className="flex  px-24 py-10 max-w-full bg-white shadow-2xl justify-between phone:flex-col phone:px-5 ">
          <div className=" flex flex-col max-w-2xl max-h-screen phone:max-w-xs">
            <img
              className="max-w-xl h-96 px-16 py-10 bg-cover object-contain phone:max-w-lg phone:h-48 phone:py-5"
              src={data2[Math.abs(id-firstElementId)].images[productImage]}
            />
            <div className="flex gap-5 py-10  justify-around">
              <img
              onClick={()=>setProductImage(1)}
              className={productImage===1?"w-24 h-24 phone:w-12 phone:h-12 phone:-translate-y-1 phone:hover:-translate-y-1 -translate-y-3 opacity-30 bg-cover object-cover hover:-translate-y-3 transition-all ease-in-out duration-700 cursor-pointer shadow-2xl":"w-24 h-24 phone:w-12 phone:h-12 bg-cover object-cover hover:-translate-y-3 transition-all ease-in-out duration-700 cursor-pointer shadow-2xl"}                src={data2[Math.abs(id-firstElementId)].images[1]}
              />
              <img
              onClick={()=>setProductImage(2)}
              className={productImage===2?"w-24 h-24 phone:w-12 phone:h-12 -translate-y-3 opacity-30 phone:-translate-y-1 phone:hover:-translate-y-1 bg-cover object-cover hover:-translate-y-3 transition-all ease-in-out duration-700 cursor-pointer shadow-2xl":"w-24 h-24 phone:w-12 phone:h-12 bg-cover object-cover  hover:-translate-y-3 transition-all ease-in-out duration-700 cursor-pointer shadow-2xl"}                src={data2[Math.abs(id-firstElementId)].images[2]}
              />
              <img
               onClick={()=>setProductImage(3)}
               className={productImage===3?"w-24 h-24 phone:w-12 phone:h-12 -translate-y-3 opacity-30 phone:-translate-y-1 phone:hover:-translate-y-1 bg-cover object-cover hover:-translate-y-3 transition-all ease-in-out duration-700 cursor-pointer shadow-2xl":"w-24 h-24 phone:w-12 phone:h-12 bg-cover object-cover hover:-translate-y-3 transition-all ease-in-out duration-700 cursor-pointer shadow-2xl"}                src={data2[Math.abs(id-firstElementId)].images[3]}
              />
              <img
               onClick={()=>setProductImage(4)}
                className={productImage===4?"w-24 h-24 phone:w-12 phone:h-12 -translate-y-3 opacity-30 phone:-translate-y-1 phone:hover:-translate-y-1 bg-cover object-cover hover:-translate-y-3 transition-all ease-in-out duration-700 cursor-pointer shadow-2xl":"w-24 h-24 phone:w-12 phone:h-12 bg-cover object-cover hover:-translate-y-3 transition-all ease-in-out duration-700 cursor-pointer shadow-2xl"}
                src={data2[Math.abs(id-firstElementId)].images[4]}
              />
            </div>
          </div>
          <div className="flex flex-col gap-10 w-96 phone:w-56">
            <div className="flex flex-col gap-3">
              <h1 className="text-2xl phone:text-xl font-bold">{data2[Math.abs(id-firstElementId)].title}</h1>
              <div className="flex gap-5 items-center">
                <h1 className="text-xl phone:text-sm">${data2[Math.abs(id-firstElementId)].price}</h1>
                <h1 className="text-md phone:text-xs text-white bg-red-500 px-5 py-1">
                  {data2[Math.abs(id-firstElementId)].discountPercentage}% Off
                </h1>
                <h1 className="text-xl line-through phone:text-sm">${((data2[Math.abs(id-firstElementId)].price)+(((data2[Math.abs(id-firstElementId)].discountPercentage)*(data2[Math.abs(id-firstElementId)].price)))/100).toString().split(".")[0]}</h1>
              </div>
            </div>
            <hr className="w-full" />
            <div className="flex text-lg gap-0 items-center justify-center phone:text-sm">
            <h1 className="flex gap-1 items-center">
            <FaStar className="text-yellow-400"/>
            <FaStar className="text-yellow-400"/>
            <FaStar className="text-yellow-400"/>
            <FaStar className="text-yellow-400"/>
            <FaStar className="text-gray-200"/>
            </h1>
            <hr className="w-12 rotate-90"/>
            <h1>Instocks : {data2[Math.abs(id-firstElementId)].stock}</h1>
            <hr className="w-12 rotate-90"/>
            <h1 onClick={handleHeartClick} className={heartClick?"cursor-pointer text-red-500":"cursor-pointer text-gray-400"}><FaHeart /></h1>
            </div>
            <hr className="w-full" />
            <div className="text-xs flex items-center justify-center ">
              <h1 className="flex flex-col gap-2 items-center"><TbTruckReturn className="text-3xl"/>Replacement</h1>
              <hr className="w-12 rotate-90"/>
              <h1 className="flex flex-col gap-2 items-center"><TbTruckDelivery className="text-3xl"/>Free Delivery</h1>
              <hr className="w-12 rotate-90"/>
              <h1 className="flex flex-col gap-2 items-center"><FaRupeeSign  className="text-3xl"/>Free Delivery</h1>
            </div>
            <hr className="w-full" />
            <div className="flex flex-col gap-3 ">
              <h1 className="font-extrabold text-xl">Description</h1>
              <p className="text-md">{data2[Math.abs(id-firstElementId)].description}</p>
            </div>
            <div className="flex flex-col gap-2 items-center justify-center">
              <Link to={`/payment/${getId.smartphones}/${id}`} className="bg-yellow-400 w-full rounded-3xl font-extrabold py-3 text-center hover:bg-yellow-300">Buy Now</Link>
              <button onClick={saveData} className="bg-orange-400 w-full rounded-3xl font-extrabold py-3 hover:bg-orange-300 text-center">{label} to Cart</button>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  } else {
    return <h1>Loading</h1>;
  }
}

export default PhoneInfo;
